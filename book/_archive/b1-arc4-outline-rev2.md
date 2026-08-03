---
id: b1-arc4-outline-rev2
title: Arc 4 storyboard — revise rev1 against the storyboard-architect critique (Ch29-42)
status: rejected
rejected_reason: Superseded. Its rev1 (b1-arc4-outline-rev2-rev1) merged as PR #49, and the arc-4 outline has since been driven to completion in-session: Ch29-42 are DRAFTED and the outline now carries [DRAFTED]/AS-DRAFTED blocks plus the locked Setter villain and finale design. Re-running a storyboard pass on it would rewrite the outline for a book that is already written. Archived 2026-08-03 (author-approved).
persona_name: storyboard-architect
persona_file: prompts/personas/storyboard-architect.md
target: manuscript/makers-ladder/book-1-unfinished-apprentice/reference/arc-4-outline.md
max_turns: 30
---
**APPLY EDITS.** Revise the existing storyboard **in place** at the target file `manuscript/makers-ladder/book-1-unfinished-apprentice/reference/arc-4-outline.md` (this is the rev1 outline, already on disk). Produce an improved version, not a restatement, and keep it shape-only — premises/beats, no prose. Also write your change-log + rationale to `notes/{{id}}-storyboard-architect.md`.

Read first, in order:
1. `manuscript/makers-ladder/book-1-unfinished-apprentice/reference/book-bible.md` — Arc 4 spine, Canon & Glossary, Reveal discipline, and the **Decisions Log** (esp. 2026-06-29 and 2026-06-30).
2. The **target** `reference/arc-4-outline.md` (rev1) — the outline you are revising.
3. The binding critique: `notes/b1-arc4-outline-rev1-rev1-storyboard-architect.md` — a storyboard-architect review of rev1 (this is PR #27). Its §3 is a **dependency map** of the open questions in resolve-first order; treat it as binding direction.

## What this revision must do

**Keep everything rev1 got right** (critique §2): fixed-location Ash who departs solo (~Ch32, PR #10 / 2026-06-30, no Uneasy Caravan); compressed reveal staging; all locked beats and placements; HELD-for-Book-2 lines (architect identity, "the fair copy" off the page — Ash only hints); POV rules (Ch30 Kessa, Cael exactly one at Ch34, Tarn none); living-magic spectacle held to Ch38-41. Do not undo any of this.

**Lock the FRONT HALF (Ch29-~37)** by applying the critique's structural fixes:
- **Ash's want (critique §3 Tier 1 #2):** resolve the canon tension — she is a rebel-*helper*, not a user. Reframe so she wants **nothing from the font for herself**; she steers Oscar to Everset so *he* faces what he was made for and can refuse it, and her gift is **knowledge + Quill + the owl**, not an errand. This removes the "why isn't she at the climax she set up?" dangle and lets her leave at Ch32.
- **Ch29 POV boundary (§4):** Ch29 must **end on the blink** and must NOT show the manse interior — Oscar's POV hard-cuts the instant Ash takes him, so the reader shares the crew's ignorance through Ch30. State it as a binding POV boundary in the outline.
- **Ch30 (§4):** note that Kessa's unease at the conjured manse must read as **made/worked** ("this house shouldn't be here"), not living-magic pressure (reserved).
- **Ch31 reveal-is-not-discovery (§4):** rev1 assigns Oscar to Ch31 as if discovering, but per the locked staging he already learned guest/niece/hint offscreen (Ch29->30). Fix it: either (a) keep Oscar POV but reframe Ch31 as **acceptance**, with the reveal energy belonging to the crew seen through him; or (b) **swap** — Wick POV for Ch31 (receives the reveal fresh, betrayed kid-logic), Oscar POV for Ch32 (the Quill handoff, his beat). Pick one and say why; flag the alternative.
- **Ch32 Quill (§4):** keep the give-at-manse / bond-at-climax split; add a `[FOR THE AUTHOR]` + canon-keeper recommendation to reconcile the bible's Arc-4 line (which lists "Quill given" among *climax* beats) so it reads "given at the manse, bonds at the climax."

**Do NOT invent the BACK HALF (Ch38-41) mechanics.** The critique's Tier 0 #1 finding is that these hang on an unresolved, self-contradictory canon point — the **book-bible calls the font "living" magic, the Decisions Log calls it "new/made-arcane."** This determines whether Oscar (made-only reader) can touch the font, which cascades into "the sweep" and Wick's sacrifice. **This is the author's call — do not decide it.** Instead:
- Keep the back-half chapters as scaffolding, but mark the **font substrate**, **what "the sweep" is**, and **the causal engine of Wick's self-sacrifice** as prominent `[FOR THE AUTHOR]` decisions.
- Structure those chapters so the author can drop in **either** resolution (font = made/arcane → Oscar can turn the erasure-engine's logic outward; font = living → Oscar is blind to it and the sweep/sacrifice must be re-mechanized around someone/something else). Sketch both branches at the chapter level so neither forces a from-scratch rewrite later.
- Explicitly flag the bible↔Decisions-Log contradiction and recommend a **canon-keeper** pass to reconcile it into one canon line before the back half is drafted.

End with the persona's "Top 3 priorities" + a one-line confidence note, and a `CHECKPOINT.md` at the repo root.
