# Batch 7 re-audit — cold read for DAMAGE (read-only; edit nothing)

Repo root `/home/user/the-forge`. Chapters at
`manuscript/makers-ladder/book-1-unfinished-apprentice/chapters/chapter-NN.md`.
Pre-batch versions of every chapter (for comparison only) are at
`/tmp/claude-0/-home-user-the-forge/7cc0ebb2-f4a5-5794-a7a1-533cc8d535d8/scratchpad/base/chapter-NN.md`.
The editors' brief (the rules they applied) is `.../scratchpad/batch7-brief.md`; read it first.
Their change logs are `notes/b1-batch7-log-{A..F}.md` (A Ch1–8 · B Ch9–17 · C Ch18–24 · D Ch26,28,31,35,37,38,39 · E Wick 12,27,30,36,40,42 · F Kessa 25,29,32,34,41 + Cael 33).

## What Batch 7 did
Six editors cut "captions" (image → interpretation → compact statement of meaning: cut the statement,
often the interpretation), thinned "flat"/"flatly" dialogue labels, thinned sentence-initial "Not X."
fragments, trimmed Wick's superlatives, unlabeled Kessa, steadied Cael's sentences, and added three
short beats (Ch24: Tarn's wood dove; Ch24: Cael's "Don't" when thanked; Ch31: Ash's rewritten reason
for leaving). Whole book: 121,841 → 118,665 words. About 350 cuts. Cuts are where damage hides.

## Your job — for your assigned chapters, in order
Read each chapter **as a reader, cold** (current version). Do NOT read the base version first; consult
it only when a passage feels broken, to see what was cut. Report, per chapter:

**1. DAMAGE (the main deliverable).** Anything a cut left broken:
- a pronoun / "that" / "it" / "the second one" whose antecedent was cut;
- a reply to a line that is no longer there, or a "because" whose cause went;
- a paragraph that now opens mid-thought, or two sentences fused without a join;
- doubled words, missing space, stray punctuation, an orphaned italic asterisk, a dropped quotation mark;
- a beat that now happens *twice* because its first mention was cut and the second assumed it;
- a fact that a later chapter needs and this chapter no longer states (check the log's "kept" claims);
- a callback whose source line is gone.
Quote exactly (enough to grep), give the line, rate **BREAK / SEAM / NIT**, and propose the minimal fix
(usually restoring 3–8 words, never the whole cut).

**2. OSCAR'S REGISTER (Oscar-POV chapters only).** His register is LOCKED: wizard, scholar, a bit
mechanical. Flag any sentence the editors *rewrote plainer* (as opposed to cut). Quote it with the base
version beside it. Also flag any place the caption cuts went too far — where a reader now cannot tell
what Oscar concluded and the next beat depends on it.

**3. VOICE (non-Oscar chapters).** Wick 16, coal/door/holding/far side are hers only; Kessa counts;
Cael steady. Flag any place where the edits left Oscar-polish, a new simile, a new aphorism, or a
"not X but Y"; and, for Cael Ch33, whether the steadied sentences read as him and not as dull.

**4. THE THREE NEW BEATS** (whoever has Ch24 / Ch31): do they read as native to the scene and the
speaker? Does Ash's new reason contradict anything she or Oscar says elsewhere in Ch31? Does Cael's
"Don't" pre-empt or cheapen his Ch33 crisis? One paragraph each.

**5. RESIDUE.** The three or four worst remaining caption stacks in your chapters that the editors
missed (quote; don't fix). Only the worst; the book keeps some.

Precision over volume. Under ~1,800 words. No git operations, no edits. Write your report to the path
your prompt names and return it.
