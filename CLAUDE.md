# The Maker's Ladder (book series): read this first

This repo is the book series and nothing else. It was split out of `Truckle12/the-forge` on 19 Nov 2026 with its history.

Start every session with `manuscript/makers-ladder/STATUS.md`, then `manuscript/makers-ladder/HOW-WE-WRITE.md`, then the
Decisions Logs in the two book bibles. The bibles win where anything disagrees.

| Path | What it is |
|---|---|
| `manuscript/makers-ladder/` | The books, their canon, the briefs, the Desk page's source. |
| `tools/` | `cadence.mjs` and `repeater.mjs` (measure a chapter; never count by hand), `author-review.mjs`, `typeset-proof.mjs`. |
| `notes/` | Review notes the status page points at. |
| `book/_archive/`, `book2/_archive/`, `prompts/`, `CHECKPOINT.md` | History from the overnight engine the books used until 14 Nov 2026. Not current; do not act on them. |

There is no queue, no agent branch and no pull request: chapters are written in session and committed straight to `main`.
`typeset-proof.mjs` needs `npm install` first (`package.json`).
