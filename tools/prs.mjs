// GitHub PR reconciliation for the queue.
//
// The queue files' local `status:` only reflects reality once a PR *merges*. Real review
// state lives on the PRs (draft, review decision, labels). This maps each engine PR back
// to its queue item id (from the branch name `agent/<lane>/<id>/<timestamp>`) so callers
// can show the true state: awaiting review vs. reviewed vs. approved vs. done.
//
// Graceful: if `gh` is missing/offline/unauthed, returns an empty map and callers fall
// back to local status. Cached 30s so we don't hammer gh.

import { spawnSync } from "node:child_process";

let _cache = null;
let _at = 0;
const TTL_MS = 30000;

function itemIdFromRef(ref) {
  // agent/book/b1-ch30-draft/2026-06-30_00-10-02 -> b1-ch30-draft
  const m = String(ref || "").match(/^agent\/[^/]+\/(.+)\/[^/]+$/);
  return m ? m[1] : null;
}

export function fetchBookPRs({ timeoutMs = 8000 } = {}) {
  const now = Date.now();
  if (_cache && now - _at < TTL_MS) return _cache;

  const map = new Map();
  try {
    const r = spawnSync(
      "gh",
      ["pr", "list", "--state", "all", "--json", "number,headRefName,isDraft,reviewDecision,labels,state,url", "--limit", "100"],
      { encoding: "utf8", windowsHide: true, timeout: timeoutMs, shell: true }
    );
    if (r.status === 0 && r.stdout) {
      for (const pr of JSON.parse(r.stdout)) {
        const id = itemIdFromRef(pr.headRefName);
        if (!id) continue; // skip non-agent PRs (feature branches etc.)
        const rec = {
          number: pr.number,
          url: pr.url,
          isDraft: !!pr.isDraft,
          reviewDecision: pr.reviewDecision || "",
          labels: (pr.labels || []).map((l) => l.name),
          state: pr.state, // OPEN | MERGED | CLOSED
        };
        const prev = map.get(id);
        // Prefer an OPEN pr; otherwise the newest by number.
        if (!prev || (prev.state !== "OPEN" && rec.state === "OPEN") || (prev.state === rec.state && rec.number > prev.number)) {
          map.set(id, rec);
        }
      }
    }
  } catch {
    /* gh unavailable — fall back to local status */
  }
  _cache = map;
  _at = now;
  return map;
}

// Effective status implied by a PR (null if no PR → caller uses local status).
export function prStatus(pr) {
  if (!pr) return null;
  if (pr.state === "MERGED" || pr.state === "CLOSED") return "complete";
  if (pr.reviewDecision === "APPROVED") return "approved";
  if (pr.reviewDecision === "CHANGES_REQUESTED") return "reviewed";
  return "needs_review"; // open PR, no decision yet → awaiting the author
}
