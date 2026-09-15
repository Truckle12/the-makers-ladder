# Batch 7 — "Trust the image" (editor's brief, shared by every group)

Repo root `/home/user/the-forge` (run every command from here). Chapters:
`manuscript/makers-ladder/book-1-unfinished-apprentice/chapters/chapter-NN.md` (42 chapters).
Reference: `manuscript/makers-ladder/book-1-unfinished-apprentice/reference/`.

## Why
Four independent readers (the fellow author, two of the five gauntlet personas, and now the editor
Astra — her review is at `notes/b1-review-astra-2026-09-13.md`, read its "Overall judgment",
"The four focal voices" and "Where the voices overlap" sections first) made the same note in
different words: **the prose gives a strong image or action, then interprets it, then adds a
compact statement of its meaning.** Each sentence is fine alone; the stack makes passages feel
rehearsed. Batch 6 fixed this in the non-Oscar voices. This batch does it book-wide, plus four
measured house tics Astra named. Baseline (whole book, `tools/cadence.mjs` watches):
**"flat"/"flatly" 125 · sentence-initial "Not X." fragments 133 · Wick's superlatives 69** (stupid /
worst / whole life; 33 of them in her six chapters).

## THE RULES

**1. The caption pass (Oscar-POV chapters; also the others where it applies).** Find the shape:
(a) a concrete image or action → (b) a sentence interpreting it → (c) a compact abstract statement
of what it means. **Cut (c).** Cut (b) too when (a) already carries it. Keep (b) only when it is the
character *reasoning* in a way the scene needs next (Oscar working out a mechanism is content, not
caption). **Keep every caption that is spoken aloud in dialogue** — Oscar aphorizing to Kessa is
voice. Target: cut roughly half of the captions you find; cut the weakest, keep the ones that
earn it. Astra's Oscar-specific version: stop the narration explaining that a joke conceals pain
right after we watched it do so; let an abandoned sentence, a sleeve adjusted, or silence do it.

**OSCAR'S REGISTER IS LOCKED (author, 2026-09-12): wizard, scholar, a bit mechanical.** Do not
roughen his syntax, his proofs, his grammar metaphors, or his self-correction. Cutting a redundant
sentence is not roughening. Rewriting his sentences to sound plainer IS, and is forbidden.

**2. "flat" / "flatly" as a dialogue label.** 125 in the book; it has become the house tag. Cut
about two-thirds. Delete the tag where the line already reads flat; where a label is needed, let
the action or the character's known manner carry it. Kessa may keep a few — it is her manner —
but not every line. Same for "not unkindly" (6).

**3. Sentence-initial "Not X." fragments** ("Not a cry. Worse." / "Not gone. Just less."). 133 in
the book — the rhythm every voice shares. Thin by about a third; keep the sharpest, and never
leave two in one paragraph. The fix is usually to fold the fragment into the sentence before or
after it, not to add words.

**4. Wick's superlatives** (her POV chapters only: 12, 27, 30, 36, 40, 42): "stupid", "worst",
"whole life", and statements that nobody ever understood her. Trim about a third. Where you cut
one, let her be observant, unfair, amused, or competent instead of arriving at a superlative.
Keep the ones that land ("*I've got loads.*" territory). Never add Oscar-polish in their place.

**5. Kessa (25, 29, 32, 34, 41).** Fewer labels on her own dialogue; slightly more plain
observation and slightly less beautifully-resolved interpretation of it. **The count ritual:** keep
its fullest ceremonial form ("Five. Breathing. Hers." / "Marked.") for the moments it changes or
costs her (Ch25 first five, Ch29's four, Ch40, Ch41, Ch42); ordinary checks can be a word.

**6. Cael (33).** Batch 6 fragmented him. Let more of his thinking settle into complete, steady
sentences; his deliberate physical movement can be reflected in the prose. Do not make him dull
and do not reintroduce writing metaphors or benedictions.

**7. Two small widenings** (groups C and D only, as assigned): one ordinary want or preference for
Tarn beyond debts and fighting; one earlier on-page moment of Cael's private doubt or irritation,
seen from someone else's POV, before his crisis in Ch33. One beat each, a few lines, no new scenes.

**8. Ash, Ch31 (group D).** Her reason for leaving is currently stated as a law of the world
("another hand on it and it isn't your choice anymore"), and the book contradicts it — Ch8 and
the finale are both won by other hands on the choice. Make the reasoning *hers*: a fear of
steering him, or what her own escape taught her, said as her limit rather than the world's rule.
Keep her voice (she is Alberich blood and may sound like Oscar); cut a notch of her
comprehensiveness — she should not sound like an authority on the book's theme.

## Do not
- Do not touch plot, facts, names, items, counts, or the *content* of any line of dialogue.
- Do not cut the aftermath's concrete details (the bread, the stone, the rat, the funeral words,
  the queue at the gate) or any line on the PROTECT list: "So don't use the world." · "Halfway
  and home" · "Is she alive." / "Then get better." · "Zero." / "Marked." · "I've got loads." ·
  "You don't eat the door. You keep the door." · the Setter's "I was, I'm told, a promising
  person" and "I no longer have the part that keeps things" · Ch42 entire except rule 4.
- Do not add similes, aphorisms, or "not X — but Y" reversals. Do not raise em-dashes (≤8/1k).
- Lexicon lock stands: Sarn's words and Oscar's words stay out of other heads and mouths
  (`node tools/cadence.mjs` reports violations per POV).
- Book 1's cosmology is decided (Book 1 bible log 2026-09-13): do not add or remove hints
  about the thing behind Wick's door.

## How to edit safely
- Files may be CRLF. Exact-match replacement in Python, `newline=''`, assert each `old` occurs
  exactly once:
  ```python
  p="manuscript/.../chapter-NN.md"; s=open(p,encoding="utf-8",newline="").read()
  a="exact old text"; b="new text"; assert s.count(a)==1, a[:40]; s=s.replace(a,b,1)
  open(p,"w",encoding="utf-8",newline="").write(s)
  ```
- One chapter at a time, written to disk before the next. No git operations. Only your chapters.
- After each chapter run `node tools/cadence.mjs <file>` and note the before/after for the
  "flat", "Not X." and superlative watches, em-dashes, and the lexicon lock.
- The file must still begin with its `## Chapter …` heading; word count may only go down.

## Deliverable
Change log at `/tmp/claude-0/-home-user-the-forge/7cc0ebb2-f4a5-5794-a7a1-533cc8d535d8/scratchpad/batch7-<group>.md`:
per chapter, each edit as `BEFORE → AFTER` (short quotes) with the rule number it serves, plus the
cadence numbers before/after. List findings you deliberately did not apply. Return the log.
