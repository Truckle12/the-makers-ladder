# The Maker's Ladder — Overnight Pipeline

How the nightly-agents `book` lane is wired to **finish Arc 3** and **storyboard Arc 4**. Canon source: `book-bible.md`. Locked style rules: `Oscar_StyleGuardrail.md`.

## Locked decisions (2026-06-28)
- **Arc 3 = Ch18–28.** **Arc 4 = Ch29–~42** (target ~42 / typical-fantasy word count; flexible — whatever the story needs).
- The **hunter turn opens Arc 4** → **Arc 3 is revision-only** (no new drafting owed).
- **All 11 chapters (18–28)** get the consistency review; **18–26** also get the cadence/tic revision (27/28 are clean → consistency + final only).
- **Fraying ≡ made-thing unraveling** — same phenomenon, deliberately seeded for future books.
- **Ch28:** extend (incident, not interiority) toward word count.
- **Ash** = niece of the original Oscar; crew thinks captive, learns guest (Arc-4 on-page reveal — don't leak early).
- **Edits are applied** surgically on a branch you approve, with a change log (not notes-only).
- **Review is sequenced** in one agent (editor → AI-tell → consistency → final verdict), not parallel.
- **Readers** read the final, revised, concatenated arc.

## Personas (`prompts/personas/`)
- `chapter-review` — sequenced 4-stage review (notes + verdict; no edits).
- `line-reviser` — applies surgical cadence/tic edits + change log.
- `reader-progression-fan`, `reader-literary`, `reader-skeptic` — Amazon-style arc reviews.
- `storyboard-architect` — Arc 4 outline / fleshed premises.
- `authors-chair` — your proxy; the standard the review's stage-4 verdict is held to.

## Batches (promote each to `status: ready` after you've reviewed the prior one)
- **Batch 0 (now, parallel):** Arc 4 storyboard — `b1-arc4-outline`. Independent of Arc 3.
- **Batch 1 — Review (Ch18–28):** `b1-ch##-review`. Sequenced 4-stage notes + verdict. No file changes.
- **Batch 2 — Revise (Ch18–26):** `b1-ch##-revise`. Applies edits informed by Batch 1 verdicts; change logs; you approve each branch/PR.
- **Batch 3 — Final + extend:** re-review revised 18–26; extend Ch28; arc-wide continuity sweep.
- **Batch 4 — Package + readers:** concatenate revised Arc 3 → `arc-3-complete.md`, run the two-pass audit, then the 3 reader personas on it.

Each item runs on its own branch; in CI it opens a draft PR you triage. Promote a batch by flipping its items `draft → ready` and pushing.

## Still open `[FOR THE AUTHOR]`
- Arc 4 middle shape (the storyboard will propose options to choose from).
- Book 3 title (deferred). Comps (deferred).
