#!/usr/bin/env node
// cadence.mjs — deterministic prose-cadence counter for the book pipeline.
//
// Personas were hand-counting em-dashes and simile tics and getting it wrong
// (a Ch20 pass reported 7.8/1k where the real density was ~13/1k). This makes
// the counts a measurement, not an estimate. Judgment stays with the reviewer:
// the tool lists every hit with its line number so the persona can classify
// which "the way" hits are genuine similes and which "not X but Y" turns are
// earned — but the raw numbers are no longer negotiable.
//
// Zero deps on purpose (like tools/forge.mjs) so it runs inside the engine's
// bare worktrees with nothing installed.
//
// Usage:
//   node tools/cadence.mjs <chapter.md> [more.md ...]
//   node tools/cadence.mjs <chapter.md> --json
//
// Targets it reports against (from Oscar_StyleGuardrail.md):
//   em-dashes ≤8 per 1,000 words · "the way [X]" similes ≤3 (genuine only)

import { readFileSync, existsSync } from "node:fs";

const args = process.argv.slice(2);
const JSON_OUT = args.includes("--json");
const files = args.filter((a) => !a.startsWith("--"));
if (!files.length) {
  console.error("Usage: node tools/cadence.mjs <file.md> [more.md ...] [--json]");
  process.exit(1);
}

// Hard-banned phrases (book-bible hard lines). Any hit is worth a look;
// "filed it away" is banned in non-Oscar POV specifically — the tool just reports.
const BANNED = [
  { name: '"filed it away" (filing lines)', re: /\bfil(?:ed|es|ing) (?:it|that|this|them) away\b/gi },
  { name: '"good girl" (pet-name approval)', re: /\bgood girl\b/gi },
  { name: '"that\'s my girl" (pet-name approval)', re: /\bthat['’]s my girl\b/gi },
];

// Watch patterns — rationed, not banned. Reported with line numbers for judgment.
const WATCH = [
  { name: '"not X but Y"', re: /\bnot\b[^.!?\n]{1,60}?\bbut\b/gi },
  { name: '"that was the"', re: /\bthat was the\b/gi },
];

function stripFrontmatter(text) {
  const m = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return m ? text.slice(m[0].length) : text;
}

function findAll(lines, re) {
  const hits = [];
  lines.forEach((line, i) => {
    for (const m of line.matchAll(re)) {
      hits.push({ line: i + 1, match: m[0], context: line.trim().slice(0, 120) });
    }
  });
  return hits;
}

function analyze(file) {
  const text = stripFrontmatter(readFileSync(file, "utf8"));
  const lines = text.split(/\r?\n/);
  const words = text.split(/\s+/).filter(Boolean).length;

  const emDashes = (text.match(/—/g) || []).length;
  const doubleHyphens = (text.match(/(?<!-)--(?!-)/g) || []).length; // em-dash typed as --
  const dashTotal = emDashes + doubleHyphens;
  const per1k = words ? +((dashTotal / words) * 1000).toFixed(1) : 0;

  // Match with one word of leading context so the idiom forms can be excluded.
  const theWayHits = findAll(lines, /\b(?:\w+['’]?\w* )?the way\b/gi)
    .filter((h) => !/\b(?:all|on) the way\b/i.test(h.match));

  const banned = BANNED.map((b) => ({ name: b.name, hits: findAll(lines, b.re) })).filter((b) => b.hits.length);
  const watch = WATCH.map((w) => ({ name: w.name, hits: findAll(lines, w.re) }));

  return { file, words, emDashes, doubleHyphens, dashPer1k: per1k, theWay: theWayHits, banned, watch };
}

const results = files.map((f) => {
  if (!existsSync(f)) { console.error(`No such file: ${f}`); process.exit(1); }
  return analyze(f);
});

if (JSON_OUT) {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

for (const r of results) {
  const dashVerdict = r.dashPer1k <= 8 ? "within target (≤8)" : "OVER target (≤8)";
  console.log(`\n=== ${r.file}`);
  console.log(`words: ${r.words}`);
  console.log(`em-dashes: ${r.emDashes}${r.doubleHyphens ? ` (+${r.doubleHyphens} typed as "--")` : ""} → ${r.dashPer1k}/1k — ${dashVerdict}`);
  console.log(`"the way" (idioms "all/on the way" excluded): ${r.theWay.length} hit(s) — classify genuine similes yourself, target ≤3 genuine`);
  for (const h of r.theWay) console.log(`  L${h.line}: ${h.context}`);
  if (r.banned.length) {
    console.log(`BANNED-PHRASE HITS:`);
    for (const b of r.banned) for (const h of b.hits) console.log(`  ${b.name} — L${h.line}: ${h.context}`);
  } else {
    console.log(`banned phrases: none found`);
  }
  for (const w of r.watch) {
    console.log(`watch — ${w.name}: ${w.hits.length} hit(s)${w.hits.length ? " (rationed, judge each)" : ""}`);
    for (const h of w.hits.slice(0, 20)) console.log(`  L${h.line}: ${h.context}`);
    if (w.hits.length > 20) console.log(`  … ${w.hits.length - 20} more (use --json for all)`);
  }
}
