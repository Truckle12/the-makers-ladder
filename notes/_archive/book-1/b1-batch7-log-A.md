# Batch 7 — Group A change log (Ch1–8, Oscar POV)

Rules applied: **1** (caption pass, Oscar's register locked), **2** ("flat"/"flatly" and the "not unkindly" family as labels), **3** (sentence-initial "Not X." fragments). Rule 4 does not apply (no Wick POV in this group; every superlative hit in Ch1–8 is Oscar's own — "many people's worst day", "his whole life" — and was left alone by design).

Method: exact-match Python replacement, one chapter at a time, each written to disk before the next, `node tools/cadence.mjs` after each. Files were LF, not CRLF. 56 edits total; every one verified on disk afterward (old text absent, new text present). No git operations; only chapter-01 … chapter-08 touched. Headings intact; every word count went down.

Group totals: **20,124 → 19,417 words (−707)** · em-dash **count unchanged in every chapter** (0 added, 0 removed; densities rose ≤0.3/1k purely from shorter denominators; Ch3 at 7.8/1k is the closest to the ceiling) · "flat" tool-count 17 → 13, of which the *dialogue-label* uses went **6 → 2** (Kessa keeps Ch5 "Flat." and the Ch7 "very flat" callback) · "not unkindly / not unkind" **4 → 0** · sentence-initial "Not X." tool-count **22 → 11** (by eye 25 → 14: three folds became single sentences too long for the regex) · lexicon lock 0 violations throughout (Ch4 "ledgers" and Ch6 "columns" ×6 are literal objects) · no PROTECT-list line touched.

---

## Chapter 1 — Surfacing ("Look Inside" chapter; heaviest scrutiny)

| watch | before | after |
|---|---|---|
| words | 3025 | 2963 |
| em-dashes | 10 (3.3/1k) | 10 (3.4/1k) |
| "flat" | 2 | 1 (survivor: "the flat enormous silence", descriptive) |
| "Not X." | 5 | 2 (by eye 7 → 4) |
| superlative | 0 | 0 |
| lexicon | 0 | 0 |

1. **R1** — `"Off sulking somewhere," he said. The words came out level. He made sure of it. "We'll discuss it."` → `…The words came out level. "We'll discuss it."` (the hand held on the empty shoulder a moment too long already did the work; "He made sure of it" is the narration saying the joke conceals pain)
2. **R3** — `The voice came out of the walls. / Not an echo off them. The script *itself* brightened to speak` → `…/ The script *itself* brightened to speak` (the italic *itself* is the contrast)
3. **R1** — `It was the first thing his hands had ever learned and the truest thing he knew how to do. Magic, the way Oscar made it, was…` → `Magic, the way Oscar made it, was…` (the paragraph already lands on "He could no more fail at it than he could fail to know his own name")
4. **R3** — `Not a barrier. Not resistance, which he would have understood` → `Not a barrier, not resistance, which he would have understood` (two fragments in one paragraph → one)
5. **R1** — `The door knew him. It had been waiting for him. The cold notion` → `The door knew him. The cold notion` (kept "The door knew him" — Ch5 calls it back)
6. **R3/R1** — `entirely and honestly lost. Not turned-around lost. Lost the way a word is lost when the language that held it dies.` → `entirely and honestly lost, the way a word is lost when the language that held it dies.` (the simile already excludes the ordinary kind; rejected-alternative fold)
7. **R1** — `"Right," he said, very quietly. There was no audience for it and no joke in it. "Right."` → `"Right," he said, very quietly. "Right."` (Astra's note exactly: let the repetition and "very quietly" do it)
8. **R2** — `"You came up out of the dead-house," she said. Flat. Not a question.` → `…she said. Not a question.` (first "flat" in the book; the line reads flat without it)
9. **R1/R2** — `"I know it did." That was worse than anything she could have shouted. She had got somewhere first, and she was waiting, not unkindly, for him to catch up. "I know."` → `"I know it did." She had got somewhere first, and she was waiting for him to catch up. "I know."` (the quiet-is-worse gloss had already been made at "and that was what put the bottom out of him" six lines up; the grief on her face is what "not unkindly" was saying)

## Chapter 2 — The Salvage Crew

| watch | before | after |
|---|---|---|
| words | 2342 | 2292 |
| em-dashes | 14 (6.0/1k) | 14 (6.1/1k) |
| "flat" | 2 | 1 (survivor: "beautiful and flat and attached to nothing", descriptive) |
| "Not X." | 1 | 1 |
| superlative | 1 (Oscar: "worst day") | 1 |
| banned-phrase | 1 ("filed that away" — Oscar POV, where it is allowed) | 1 |

1. **R1** — `plainly knew a category he belonged to. He had spent three hundred years being unprecedented. He was not accustomed to being *recognized*.` → `plainly knew a category he belonged to.` ((c) restating (b); also drops a "three hundred years")
2. **R1** — `the big man's careful face had gone gentle, which was worse. It was the gentleness people put on for the very ill.` → `…had gone gentle. It was the gentleness people put on for the very ill.` (the concrete comparison is the "worse")
3. **R1** — `The shoulder was as empty as it had been an hour ago. He had simply not yet learned to stop reaching for it, and there was no one left to mock him for that, either.` → `The shoulder was as empty as it had been an hour ago.` (Ch1 played the full Quill beat; the empty shoulder is enough)
4. **R1** — `Not trust, nothing so warm, but a recalculation. A wizard, however small, was a wizard.` → `Not trust, nothing so warm, but a recalculation.` (aphorism landing)
5. **R2** — `"Right," said Kessa, very flat, raising the crossbow. "There it is."` → `"Right," said Kessa, raising the crossbow. "There it is."` (the Ch7 callback keeps its "very flat"; the words are the callback)

## Chapter 3 — The Dead Don't Knock

| watch | before | after |
|---|---|---|
| words | 2802 | 2700 |
| em-dashes | 21 (7.5/1k) | 21 (7.8/1k) — count unchanged, still ≤8 |
| "flat" | 6 | 5 (all five physical: hammer's "flat economical arc", "knocked Kessa flat", "fling him flat", "hand flat against it", eyes "fast and flat") |
| "Not X." | 4 | 2 (survivors: Oscar's spoken "Not at Cael. At me." and "Not the power; the power stayed gone.") |
| superlative | 0 | 0 |

1. **R1** — `It was not elegant and it did not need to be. The long hammer came around in a flat economical arc` → `The long hammer came around in a flat economical arc`
2. **R1** — `It was not gratitude. He had not expected gratitude. But it was the first time she had looked at him` → `It was the first time she had looked at him` (rejected-alternatives device)
3. **R2** — `found the flat reassessing flick of a frontier scout's eyes` → `found the reassessing flick…` (second "flat" on the same eyes in two lines)
4. **R1** — `with an expression Oscar knew far too well from the inside. The expression of a person discovering exactly how much harm they are capable of and that they have no idea at all how to stop.` → `with an expression Oscar knew far too well from the inside.` (Wick's "I didn't mean—" is the next line)
5. **R1** — `"I'm whole, Wick, look at me, I'm whole." The mercy in him did not even have to be reached for; it was simply the first thing out. But under it Oscar heard the strain,` → `"…I'm whole." But under it Oscar heard the strain,` (the tripled "I'm whole" is the mercy)
6. **R2/R3** — `"No." Plainly. Not unkind. "You didn't *do* anything.` → `"No." Plainly. "You didn't *do* anything.`
7. **R1** — cut the whole paragraph `He had forgotten, somewhere in three centuries of being effortless, that you learn a thing twice: once when you struggle to it, and once when you teach it.` (pure (c) after a paragraph that already lands on "it put the words back in his own mouth"; grepped the book — no later callback to "learn a thing twice"; Ch8's "He had taught it first, to a frightened girl" still refers to the surviving paragraph)
8. **R3** — `"Can you do it for *me.*" Not a question now. The voice he had used on apprentices` → `"Can you do it for *me.*" The voice he had used on apprentices` (the full stop inside the quote already says it)
9. **R1** — `her face had gone past grim into something quieter and worse.` → `…into something quieter.` (her "It's gone" follows)

## Chapter 4 — What the Fire Showed

| watch | before | after |
|---|---|---|
| words | 2949 | 2860 |
| em-dashes | 11 (3.7/1k) | 11 (3.8/1k) |
| "flat" | 2 | 1 (survivor: "laid the knife flat across her knee") |
| "Not X." | 1 | 1 ("Not yet." kept) |
| superlative | 1 (Oscar: "whole life") | 1 |
| lexicon | 1 ("ledgers" — literal, a counting-house) | 1 |

1. **R1** — `He did not let the thought finish. He had got very good, in the last several hours, at not letting certain thoughts finish. He drank,` → `He did not let the thought finish. He drank,` (the abandoned *Made.* is the beat)
2. **R1** — `and went back to the door, and she said nothing, and somehow her saying nothing was the loudest thing in the room.` → `…and she said nothing.`
3. **R2** — `"You just *say* it." Kessa's voice had gone very flat. Her hand had found the crossbow again,` → `"You just *say* it." Kessa's hand had found the crossbow again,` (label → the action that was already there)
4. **R2** — `and went on, steady and not unkind, telling it now` → `and went on, steady, telling it now`
5. **R1** — `and he set every one of them down unsaid and let the quiet stand. It had cost him only the pleasure of being heard.` → `…and let the quiet stand.`
6. **R1** — `and there was no accusation in them, which landed harder than accusation would have, "and Kessa said` → `and there was no accusation in them, "and Kessa said` (the quiet-is-worse device)
7. **R1** — `He missed the weight. He missed the voice. He missed it the way you miss a thing that is part of the architecture of you, so that its loss is not a wound in you but a wound in the *shape* of you.` → `He missed the weight. He missed the voice.` (his line to the fire now follows the plain statement — Astra: "when every reaction receives an elegant metaphor, even his loss of control can sound too controlled")

## Chapter 5 — Old Hands

| watch | before | after |
|---|---|---|
| words | 2324 | 2198 |
| em-dashes | 6 (2.6/1k) | 6 (2.7/1k) |
| "flat" | 2 | 2 ("palm flat against the closed loop"; Kessa's "Flat." — one of her two kept labels) |
| "Not X." | 4 | 1 by tool (by eye 2: "Not a doorway…" kept; "Not a husk, not one of…" is now one sentence) |
| superlative | 0 | 0 |

1. **R1** — `They were the rules underneath language, the rules the deep current ran on, and a thing that is true does not get old.` → `…the rules the deep current ran on.` (the previous sentence already says the grammar "had not changed in all the ages")
2. **R1/R3** — `was the whole of what he had left to be. Not the hand that wrote the working. The hand that could tell you what it said. "Most of it's beyond me.` → `was the whole of what he had left to be. "Most of it's beyond me.` ((c) antithesis after its own (b))
3. **R1** — `The door opened for him the way the tower door had opened for him. Because it knew him. Because, somewhere in the unthinkable depth of years this city had lain sealed, a hand that was his hand had already been here, and signed its work, and gone.` → `The door opened for him the way the tower door had opened for him.` (the signature-is-his-hand reasoning three paragraphs up, and the loop "recognizing" in the paragraph before, already did it)
4. **R1/R3** — `"You've never been here," Kessa said. Flat. Not quite an accusation. Giving him the chance, almost, to have an answer.` → `"You've never been here," Kessa said. Flat.` (kept her label, cut the interpretation; "And yet"/"And yet" two lines later shows what she is doing)
5. **R1** — `"And yet," Kessa agreed, and that was all. She had stopped pushing. She'd looked at` → `…and that was all. She'd looked at`
6. **R3** — `Not a husk. Not one of the cold drowned dead of the upper streets,` → `Not a husk, not one of the cold drowned dead of the upper streets,`
7. **R1** — `Oscar straightened slowly. The cold in the room had nothing to do with the frost. He had seen a great deal in three centuries; … and he had never seen this, a death by deletion, a person taken apart by something that treated the living the way an editor treats a draft: keeping what it wanted, removing what it didn't, and feeling, he was suddenly and absolutely certain, nothing at all about either.` → `Oscar straightened slowly. He had seen a great deal in three centuries; … and he had never seen this, a death by deletion.` (the editing metaphor was stated in the body paragraph, restated here, then spoken — "It was *correcting* something" — then inferred again at L85; the narrated middle restatement goes, the image and the spoken line stay)

## Chapter 6 — The Redactor

| watch | before | after |
|---|---|---|
| words | 2306 | 2179 |
| em-dashes | 10 (4.3/1k) | 10 (4.6/1k) |
| "flat" | 2 | 2 (both physical: "the flat dead end of it", "pressed his ruined hand flat") |
| "Not X." | 4 | 1 (survivor: "Not warmed—*gone.*") |
| superlative | 1 (Oscar: "whole life") | 1 |
| lexicon | 6 ("column(s)" — literal architecture) | 6 |

1. **R3** — `The script on the left-hand stone was wrong. Not damaged. This was the opposite of damage.` → `…was wrong. This was the opposite of damage.`
2. **R1** — `he said slowly, and the slowness was dread.` → `he said slowly.`
3. **R1** — `He did not finish. He had a gift for finishing sentences nobody wanted finished, and for once he set the gift down.` → `He did not finish.`
4. **R1** — `It came up the gallery toward them, and it did not hurry, and the not-hurrying was the most frightening thing Oscar had seen in a day full of frightening things.` → `It came up the gallery toward them, and it did not hurry.`
5. **R1** — `It was reading the wall as it walked. It was editing the world simply by moving through it, the way a careless reader leaves a book changed.` → `It was reading the wall as it walked.` (now runs straight into "And it was reading toward them.")
6. **R1** — `but for the *line,* for the thread it had lost, the way a reader who has lost their place runs a finger back up the page.` → `but for the *line,* for the thread it had lost.` (third finger-on-the-page image in the chapter; "a finger tracing a line of text" and "It only lost the thread" remain)
7. **R3** — `and taken in none of it. Not the salvager. Not the city. Not him. It did not mean anything at all.` → `and taken in none of it, not the salvager, not the city, not him. It did not mean anything at all.` (three fragments in one paragraph)
8. **R1** — `It did not hate. It *corrected.* It treated bodies as drafts the way the tower had treated him as a draft. It belonged to` → `It did not hate. It *corrected.* It belonged to` (the next sentence makes the self-connection directly)
9. **R1** — chapter ending `and he understood that he had not needed to say it. She had read that line a long way back. She was only waiting, the way you wait at the end of a long sentence, for the word the whole thing had been building toward.` → `and he understood that he had not needed to say it.` (Ch5 L63 already explained Kessa's already-knowing in the same terms; the chapter now ends on her look)

## Chapter 7 — The Heart of the City

| watch | before | after |
|---|---|---|
| words | 1872 | 1773 |
| em-dashes | 10 (5.3/1k) | 10 (5.6/1k) |
| "flat" | 1 | 1 (Kessa's "very flat" — the Ch2 callback, kept as her second label) |
| "Not X." | 0 | 0 (an interim tool hit appeared when a cut shortened "Not fear, but a deep devotional unease…" under the regex length; folded, see 6) |
| superlative | 1 (Oscar: "whole life") | 1 |

1. **R1** — `the warmth was somehow worse than the cold had been, because it was *wrong* down here, an exhale where everything else was held breath.` → `…worse than the cold had been, an exhale where everything else was held breath.`
2. **R1** — `exactly how much he wanted to walk through. He had spent a day discovering all the ways he was diminished. And here was the thing that would mend all of it at once. He could feel that it would. The font was not lying.` → `exactly how much he wanted to walk through.` (the wanting is stated again, better, at "And he wanted it…" — kept that one, including "It came from the truest part of him", which Ch8's refusal needs)
3. **R1/R2** — `He did not finish. He was getting better at not finishing. But Kessa finished it for him, very quietly, not unkindly, the way you say a true thing to someone who has nearly arrived at it:` → `He did not finish. But Kessa finished it for him, very quietly:`
4. **R1** — `Not fear, but a deep devotional unease, the look of a person of faith standing in front of a holy thing that belongs to the wrong god.` → `Not fear, but a deep devotional unease.` (Cael says it himself a line later: "I just don't think it's a kind one")
5. **R1** — `He closed his fists over it before the others saw. He was getting practiced at hiding what his body kept trying to confess.` → `He closed his fists over it before the others saw.`
6. **R3** — `something Oscar had not seen on it before. Not fear, but a deep devotional unease.` → `something Oscar had not seen on it before: not fear, but a deep devotional unease.` (fold, no words added)

## Chapter 8 — Setting (climax; deliberately the lightest touch — Astra's priority 3 is that the mechanics stay clear before the peak, and most of this chapter's stacks *are* the mechanics)

| watch | before | after |
|---|---|---|
| words | 2504 | 2452 |
| em-dashes | 15 (6.0/1k) | 15 (6.1/1k) |
| "flat" | 0 | 0 |
| "Not X." | 3 | 3 by tool (by eye 4 → 3: "Not the city. Not the Redactor." folded) |
| superlative | 0 | 0 |

1. **R1** — `the edges of himself beginning to lift and drift like the script off the walls. The font offered to make him whole, and the price was simply to be no one new.` → `…like the script off the walls.` (L19 "completed, and therefore over" and L23 "Faithful. Perfect. Set." had already said it)
2. **R1** — `swept it from the stair into the falling dark, lost not because he had killed it but because he had taken away the world it knew how to follow.` → `swept it from the stair into the falling dark.` (restates "blind, at last, in a city it could no longer read")
3. **R3** — `Not the city. Not the Redactor. Something small and warm and old,` → `Not the city, not the Redactor. Something small and warm and old,` (Quill plant untouched)
4. **R1** — `and there was something under it that had not been there in the tower: not the old effortless certainty, something smaller and truer and more frightened and more alive. "Up.` → `…that had not been there in the tower. "Up.` (arc-summary caption; the "Up… *Move.*" line is the new voice)

---

## Findings deliberately not applied

- **Ch1:** "There was far less self here to burn than there used to be" (mechanism plant for the Ch8 fraying); "He had to." (rhythm, not caption); "Not bleeding. Shedding." (sharpest fragment in the chapter); Kessa's "like a woman who had outlived enough…" intro; "and that was what put the bottom out of him" (kept as the one quiet-is-worse beat, tied to his body); "He kept the hands still, because the part of him…" (his reasoning).
- **Ch2:** "He filed that away. It was not flattering, but it was information." — his tic, allowed in his POV (the tool's BANNED flag is the non-Oscar-POV rule); "names are the cheapest power there is"; "There was a whole history in that sentence. Oscar heard it and chose, for once, not to pick at it." (him restraining the habit — character); the "first lie" line (plot thread); "Not the girl's." (only fragment in the chapter, functional).
- **Ch3:** "That was the horror of what he saw" (real revelation — Oscar reading the spill's lack of a figure); "The fear of it was getting familiar, which did not make it smaller"; "She did not have to." (the silence between them); "Truly fought, the way a crew fights…".
- **Ch4:** the knife-for-an-owner simile and "the rest of it she kept in her hands, and her hands had stopped" (both earn it — Doss without the word grief); the dead-man's-place paragraph and "He did not take it. Not yet." (the decision the scene turns on); "He had, on occasion, been one of the people who were afraid."; "ledgers" (literal).
- **Ch5:** "Not a doorway with a wall behind it." (functional, and cutting it would over-thin the chapter to 1 of 4); the second "That was the horror of it" in the group (both are real turns); "the same dreadful family of things he was beginning to suspect he belonged to himself" (the plant Ch6 escalates to "unable not to know"); "his body always a half-beat behind his mind".
- **Ch6:** "the not-speaking of it walked with them like a fifth set of feet"; "He read to understand and changed nothing; it changed everything and understood nothing" (his proof register — locked); the scholar's-delight caption on "It's correcting itself" (the "human mess" beat); "It only lost the thread."; "column(s)" ×6 literal.
- **Ch7:** "The dead city was a sentence. This was the word it had been built to say." (the climax mechanics at L65 depend on it); "It was not coming for them. It was coming because the sentence ran on, and a thing built to read could no more leave a line unfinished than water could decline to fall downhill" (the in-passing threat needs the intent stated once); Kessa's "very flat" (Ch2 callback).
- **Ch8:** the whole "set" meditation; "He was not built to drink an ocean. He was built to *aim* one."; the on-loan paragraph ("The three of them were doing it, and letting him hold the pen"); "It set him crooked. It set him *his.*"; "Not the ocean. He had spent the ocean."; the final "—not *set,* as it had meant to be. Not whole. / Spent." (one sentence-initial fragment in that paragraph; the sharpest in the group).
- **Not Batch 7 rules, noted but left:** the "the way [X]" simile counts are above the guardrail's ≤3 in every chapter (only cut where the simile was itself the (c) caption: Ch4 architecture, Ch6 ×2, Ch7 ×1); "three hundred years / three centuries" recurs ~2× per chapter (two fell inside cut captions in Ch2 and Ch3, none pursued on its own); "not X but Y" watch hits (1–5 per chapter) are almost all Oscar's precision and were left except where they were the caption (Ch8 "not because he had killed it…").
- **For the coordinator:** `git diff --stat d0d2e49` also shows chapters 09–41 changed — other groups' work, untouched by me.
