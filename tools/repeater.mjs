#!/usr/bin/env node
// repeater.mjs — repeated-phrase detector for the book pipeline.
//
// Repetition creeps in when a long drafting session's context gets compressed:
// the writer re-lands the same distinctive phrase ("we pulled her back", "not
// worth a second glance") chapters apart and nobody notices until a cover-to-
// cover read. This makes it a measurement, like tools/cadence.mjs: every
// repeated word-for-word phrase is listed with its locations so a reviewer can
// judge which repeats are motifs (keep) and which are echoes (cut one).
//
// Zero deps on purpose so it runs inside the engine's bare worktrees.
//
// Usage:
//   node tools/repeater.mjs <chapter.md> [more.md ...]
//   node tools/repeater.mjs manuscript/.../chapters/chapter-*.md
//   Options: --min-words 4  --max-words 12  --min-count 2  --top 60  --json
//
// What counts as a finding (defaults):
//   - a phrase of >=4 words, with >=2 "content" words (not stopwords/names-of-
//     one-letter), that appears word-for-word:
//       * in 2+ different files (any count), or
//       * 3+ times within one file (2 in-file repeats are often deliberate).
//   - sub-phrases fully explained by a longer reported phrase are suppressed.

import { readFileSync, existsSync } from "node:fs";

const args = process.argv.slice(2);
const JSON_OUT = args.includes("--json");
function opt(name, dflt) {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? Number(args[i + 1]) : dflt;
}
const MIN_WORDS = opt("--min-words", 4);
const MAX_WORDS = opt("--max-words", 12);
const MIN_COUNT = opt("--min-count", 2);
const TOP = opt("--top", 60);
const files = args.filter((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1].startsWith("--min") ) && !(i > 0 && (args[i-1] === "--top" || args[i-1] === "--max-words" || args[i-1] === "--min-words" || args[i-1] === "--min-count")));
if (!files.length) {
  console.error("Usage: node tools/repeater.mjs <file.md> [more.md ...] [--min-words N] [--max-words N] [--min-count N] [--top N] [--json]");
  process.exit(1);
}

const STOP = new Set(`a an and are as at be been but by came can could did do down for from had has have he her hers him his i if in into is it its just like me my no not now of off on one or out over she so than that the their them then there they this to too up was we were what when where which who will with would you your not into onto him them
said says`.split(/\s+/).filter(Boolean));

// tokenized word with the line it came from
function tokenize(text) {
  const words = [];
  const lines = text.split(/\r?\n/);
  for (let ln = 0; ln < lines.length; ln++) {
    let line = lines[ln];
    if (/^#/.test(line) || /^---\s*$/.test(line)) continue; // headers / scene breaks
    line = line.replace(/[*_]/g, "");
    for (const m of line.matchAll(/[a-zA-Z][a-zA-Z'’-]*/g)) {
      words.push({ w: m[0].toLowerCase().replace(/’/g, "'"), line: ln + 1 });
    }
    words.push(null); // paragraph/line boundary — phrases don't span lines
  }
  return words;
}

// collect occurrences per n-gram
const grams = new Map(); // key -> {n, locs: [{file, line}], perFile: Map}
for (const file of files) {
  if (!existsSync(file)) { console.error(`skip (not found): ${file}`); continue; }
  const words = tokenize(readFileSync(file, "utf8"));
  for (let i = 0; i < words.length; i++) {
    if (!words[i]) continue;
    for (let n = MIN_WORDS; n <= MAX_WORDS; n++) {
      if (i + n > words.length) break;
      const slice = words.slice(i, i + n);
      if (slice.some((x) => !x)) break; // crossed a line boundary
      const key = slice.map((x) => x.w).join(" ");
      let g = grams.get(key);
      if (!g) { g = { n, locs: [], perFile: new Map() }; grams.set(key, g); }
      g.locs.push({ file, line: slice[0].line });
      g.perFile.set(file, (g.perFile.get(file) || 0) + 1);
    }
  }
}

// filter to findings
function contentWords(key) {
  return key.split(" ").filter((w) => !STOP.has(w) && w.length >= 3).length;
}
let findings = [];
for (const [key, g] of grams) {
  const count = g.locs.length;
  if (count < MIN_COUNT) continue;
  const nFiles = g.perFile.size;
  if (!(nFiles >= 2 || count >= 3)) continue; // 2x in one file: usually deliberate; 2x across files: report
  if (contentWords(key) < 2) continue; // skip pure function-word runs
  findings.push({ phrase: key, n: g.n, count, files: nFiles, locs: g.locs });
}

// suppress sub-phrases fully explained by a longer finding with the same count
const byPhrase = new Set(findings.map((f) => f.phrase));
findings = findings.filter((f) => {
  for (const other of byPhrase) {
    if (other !== f.phrase && other.includes(f.phrase)) {
      const o = findings.find((x) => x.phrase === other);
      if (o && o.count >= f.count) return false;
    }
  }
  return true;
});

// distinctiveness: longer, more content-heavy, more-repeated first; cross-file weighted up
for (const f of findings) f.score = f.count * (f.files > 1 ? 2 : 1) * contentWords(f.phrase);
findings.sort((a, b) => b.score - a.score || b.count - a.count || b.n - a.n);
findings = findings.slice(0, TOP);

if (JSON_OUT) {
  console.log(JSON.stringify(findings, null, 2));
} else {
  if (!findings.length) { console.log("no repeated phrases at current thresholds"); process.exit(0); }
  console.log(`repeated phrases (>=${MIN_WORDS} words; cross-file x2+ or in-file x3+; top ${TOP} by distinctiveness):\n`);
  for (const f of findings) {
    console.log(`x${f.count} across ${f.files} file(s): "${f.phrase}"`);
    for (const l of f.locs.slice(0, 6)) console.log(`    ${l.file}:${l.line}`);
    if (f.locs.length > 6) console.log(`    …and ${f.locs.length - 6} more`);
  }
  console.log(`\n${findings.length} finding(s). Judgment stays with the reviewer: motifs are allowed; echoes get one kept, the rest varied.`);
}
