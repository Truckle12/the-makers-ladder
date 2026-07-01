#!/usr/bin/env node
// Forge CLI — a small, dependency-free surface onto the engine queue.
//
// Purpose: give any "Data" runtime (Hermes skill, the future always-on bot, or a
// human at a terminal) one reliable, low-token way to read the queue without booting
// the Next app. Reads the same filesystem queue contract the engine uses.
//
// Zero deps on purpose (no gray-matter): parses the flat frontmatter the queue items
// use so it runs anywhere `node` exists. Resolves the repo root from this file's
// location (tools/ -> repo root), so it works regardless of cwd.
//
// Usage:
//   node tools/forge.mjs queue            # human-readable summary (good for Discord)
//   node tools/forge.mjs queue --json     # machine-readable JSON

import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// The book lane's queue dir (kept in config.json). Fall back to "book" if unreadable.
function queueDir() {
  try {
    const cfg = JSON.parse(readFileSync(path.join(ROOT, "config.json"), "utf8"));
    return cfg?.lanes?.book?.queueDir || "book";
  } catch {
    return "book";
  }
}

// Minimal, forgiving frontmatter reader for `--- key: value ---` blocks.
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!mm) continue;
    let v = mm[2].trim().replace(/^["']|["']$/g, "");
    data[mm[1]] = v;
  }
  return data;
}

function scan() {
  const dir = queueDir();
  const abs = path.join(ROOT, dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const d = parseFrontmatter(readFileSync(path.join(abs, f), "utf8"));
      return {
        id: d.id || f.replace(/\.md$/, ""),
        title: d.title || "",
        status: String(d.status || "").toLowerCase(),
        target: d.target || "",
        persona: d.persona_name || "",
        file: `${dir}/${f}`,
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

// Map raw engine statuses to buckets the user thinks in.
function bucket(status) {
  if (status === "review") return "attention"; // finished a pass, awaiting the author
  if (status === "ready") return "ready"; // will run on the next engine pass
  if (status === "draft") return "draft"; // not yet promoted to ready
  return "other";
}

function summarize(items) {
  const counts = { attention: 0, ready: 0, draft: 0, other: 0 };
  for (const it of items) counts[bucket(it.status)]++;
  const attention = items.filter((it) => bucket(it.status) === "attention");
  const ready = items.filter((it) => bucket(it.status) === "ready");
  return { total: items.length, counts, attention, ready };
}

function human(s) {
  const lines = [];
  lines.push(
    `Queue — ${s.total} items: ${s.counts.attention} need you · ${s.counts.ready} ready to run · ${s.counts.draft} draft.`
  );
  if (s.attention.length) {
    lines.push("", "Needs you:");
    for (const a of s.attention) lines.push(`• ${a.id} — ${a.title || "(untitled)"}`);
  }
  if (s.ready.length) {
    lines.push("", "Ready to run:");
    for (const r of s.ready) lines.push(`• ${r.id}${r.target ? ` (${r.target.split("/").pop()})` : ""}`);
  }
  return lines.join("\n");
}

function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const asJson = rest.includes("--json");

  switch (cmd) {
    case "queue": {
      const s = summarize(scan());
      console.log(asJson ? JSON.stringify(s, null, 2) : human(s));
      break;
    }
    default:
      console.log("Usage: node tools/forge.mjs queue [--json]");
      process.exit(cmd ? 1 : 0);
  }
}

main();
