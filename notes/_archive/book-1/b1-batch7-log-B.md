# Batch 7 — Group B change log (chapters 09, 10, 11, 13, 14, 15, 16, 17 — all Oscar POV)

Rules applied: 1 (caption pass, Oscar's register locked — cuts only, no plainer rewrites), 2 ("flat"/"flatly"
labels), 3 (sentence-initial "Not X." fragments). No plot, facts, names, counts or dialogue content touched;
no similes/aphorisms/reversals added; em-dash counts never raised; word counts only go down.
Files are LF; edits made by exact-match Python replace with count==1 asserts. No git operations.

## Chapter 09 — The Thaw

Cadence before → after: words 2048 → 1979 · em-dashes 8 (3.9/1k) → 8 (4.0/1k) · "flat" 1 → 1 (L11 "flat on
her back" — literal, not a label) · "Not X." 2 → 1 · superlatives 0 → 0 · lexicon (Oscar POV) 0 Sarn hits → 0.

1. [R1] `And then, because it had to go somewhere and it always went out the mouth: "Or near enough…` →
   `And then: "Or near enough…` — narration explaining that the joke is a deflection right as we watch it be one.
2. [R1] `"I'd stake my—" He stopped, because his reputation, like his three centuries, had begun to feel like
   borrowed property. "I'm fairly sure…` → `"I'd stake my—" He stopped. "I'm fairly sure…` — the abandoned
   sentence plus "fairly sure" carries it; the borrowed-centuries point was made one paragraph up.
3. [R3] `…he was praying. Not for himself, by the shape of it, but *for the city,*…` → `…he was praying, not for
   himself, by the shape of it, but *for the city,*…` — fragment folded into the sentence before (untracked by the
   regex; folded anyway).
4. [R1] `The name landed quiet in the cold. No one flinched from it. That, too, was new.` → cut `That, too, was
   new.` — the (c) statement.
5. [R1] Dream: `He was *happy,* with a whole and easy happiness he had not felt awake, the contentment of a person
   exactly where they belong, doing exactly what they were made for, with everything they love close to hand.` →
   ends at `…had not felt awake.` — the gallery, the talons, the voice already say it.
6. [R1] Waking: `…left behind it only the ache of having stood, for a moment, inside a life that fit, and the slow
   cold certainty…` → `…left behind it the slow cold certainty…` — cut the (b); kept the sharper "not his".
7. [R3] `Most were empty. Not all. And this was…` → `Most, not all, were empty. And this was…` — the closing
   paragraph had two "Not X." hits; the anaphoric "Not one of those sleepers… / Not one of them…" stays as the
   sharp one.

Deliberately not applied: the decision paragraph's `He suspected they would be worse than the question, and that
the choosing would come out the same regardless.` — it is Oscar's decision logic and the hand-take follows from
it; `quiet, the way a scar should be` — light, and pays off the fraying; the descent sentence's character tags
(`who would never trust him and had decided to keep him anyway` / `who had run out of *no*`) — one sentence, the
chapter's formation image, not a stack.

## Chapter 10 — Marrow

Cadence before → after: words 2538 → 2442 · em-dashes 7 (2.8/1k) → 7 (2.9/1k) · "flat" 5 → 4 (the four left
are the drift-cats' literal "flat eyes"/"flat dead shine") · "Not X." 1 → 1 (Kessa's spoken "Not usually." —
dialogue, untouched) · "not unkindly" 1 → 0 · superlatives 0 → 0 · lexicon 7 → 6 Sarn hits (all Tithe/ledger
context, deliberate).

1. [R1] `"…since the river's in the wrong place." Which was a deflection, and she let him have it, but he noticed
   he had not given her the number.` → `…wrong place." He noticed he had not given her the number.` — the joke
   is visibly a deflection; keep only the thread (the withheld number).
2. [R3] `He reached. Not for the great deep work, he knew better now…` → `He reached, not for the great deep
   work, he knew better now…` — untracked fragment folded.
3. [R1] `Which was a lie, since he had no idea what he'd written at her age; but it was the kind of lie a
   teacher is supposed to tell, and he found he didn't mind that one.` → ends at `…at her age.` — cut the
   generalising (c).
4. [R1] `"They live *on* it," Oscar said. He could not quite keep the thing out of his voice. He thought of a
   font…` → cut the tone sentence; his stammered "they don't—they can't know" shows it.
5. [R2] `"They know there's coin in them," Kessa said, not unkindly.` → `…Kessa said.` — her "with respect"
   in the next line carries the tone.
6. [R1] `…was the dangerous one, because the ones with the weapons only hurt you, and the one with the ledger
   owned you.` → `…was the dangerous one.` — paragraph-ending aphorism; the accountant's own next lines
   ("square what you owe") make the point.
7. [R1] `…a different person than the one who read slopes. This was a person who had stood at a hundred such
   gates.` → cut the second sentence.
8. [R2+R1] `"We brought up nothing," Cael said, and there was a flat finality in it, the voice of an honest
   person stating a fact, and the accountant's…` → `"We brought up nothing," Cael said, and the accountant's…`
   — the line reads flat on its own; Cael's honesty is established.
9. [R1] `It was a small thing. It was nothing; he told himself it was nothing…` → `It was nothing; he told
   himself…` — repeats Ch09's "It was a small thing" verbatim.

Deliberately not applied: the chapter's closing sentence (`…even slightly like the man three centuries deep he
kept catching himself pretending to be`) — it is the chapter's thread, not an aphorism, and the hand-on-hilt
image needs its referent; `It was a new discipline. He was bad at it.` — the next line ("no more time for
discipline") depends on it; `He filed that away… under *things to be suspicious of in myself*` — Oscar's own
lexicon, in his POV, voice.

## Chapter 11 — A Day's Grace

Cadence before → after: words 1928 → 1823 · em-dashes 11 (5.7/1k) → 11 (6.0/1k; count unchanged, density up
only from the shorter chapter) · "flat" 2 → 0 · "Not X." 2 → 1 (Brida's spoken "Not anyone.") · superlatives
1 → 1 (Brida's spoken "the richest and the worst" — rule 4 is Wick-only) · "the way" 7 → 5 · lexicon 1 → 1
("sums" on the tallyman — Tithe, deliberate).

1. [R1] `…without working the ruin. Every door in the town opened onto the same room.` → cut the aphorism;
   Oscar's spoken "That's the genius of it" seals the same paragraph aloud.
2. [R2] `with the flat admiration of a man examining a rival's elegant proof` → `with the admiration of a man
   examining a rival's elegant proof` — tag gone, proof simile (his register) kept.
3. [R1] `She had a point. He was working on it. It was, like not-confessing, a discipline he was bad at.` → cut
   the third sentence (the Ch10 callback re-explains the joke).
4. [R1] `"Why," Cael asked her, gently, the way he asked the hard things.` → `"Why," Cael asked her, gently.`
5. [R1] `—and, for once, closed it again. Because the thing he had been about to say, the clever bitter true thing
   about the elegance of a debt that outlives the body it killed, was not a thing this woman needed to hear said
   cleverly.` → `—and, for once, closed it again.` — Astra's exact case: the opened-and-closed mouth, then
   "Thank you… Just that.", do the work.
6. [R1] `"That's about me," Oscar said. He knew it the way he'd known the door in the tower, the way he'd known
   the frost-shedding thing in the cradle: an animal certainty under the clever centuries. "That's not the
   debt…` → `"That's about me," Oscar said. "That's not the debt…` — two similes and an abstract summary
   between a line and its own restatement.
7. [R2] `her flat eyes found him` → `her eyes found him`.
8. [R3] `The second was that he had no idea why. Not the faintest idea.` → `The second was that he had not the
   faintest idea why.`
9. [R1] `He found he liked that least of all. He had spent three centuries—` → `He had spent three centuries—`
   — the next sentence ("He did not at all care for being the one who knew the least") says it; his
   self-correction untouched.

Deliberately not applied: `which was the wrong thing, and which he knew was the wrong thing the instant Kessa's
head came up` — the doubled "wrong thing" is his rhythm, and Kessa's head is the image; `She said it plainly,
without self-pity` (Brida) — a label, but not the house tag and it is doing tone work on a new character.

## Chapter 13 — The Writ

Cadence before → after: words 2514 → 2425 · em-dashes 9 (3.6/1k) → 9 (3.7/1k) · "flat" 4 → 2 (both literal:
the paper set down flat, his hand flat on the writ) · "Not X." 3 → 1 · superlatives 0 → 0 · "the way" 3 →
3 · lexicon 1 → 1 ("ledger" in Oscar's speech — the Tithe, deliberate).

1. [R2+R1] `even Kessa's flat attention snagged on him more than usual. He knew why. He had stopped performing.
   The arch voice, the cataloguing, the small constant theatre of being the cleverest thing in the room. He
   hadn't the strength for it…` → `even Kessa's attention snagged on him… He had stopped performing. He hadn't
   the strength for it…` — tag off Kessa; the itemised explanation of the performance cut (the two days'
   quiet shows it).
2. [R1] Cut the one-line paragraph `A standing bounty does not care for a man's flattering stories.` — aphorism
   between "flattering stories" and the paper's arrival; the cut-to is stronger.
3. [R3] `something in them he hadn't seen there before. Not suspicion. Nearer to dread.` → `…hadn't seen there
   before: not suspicion, nearer to dread.`
4. [R1] `…closer every time, and never close enough to reach. He let it ache. He'd stopped pretending it
   didn't.` → ends at `…never close enough to reach.`
5. [R1] `The quiet way of it turned every head; he was not a man who volunteered.` → `The quiet way of it turned
   every head.`
6. [R3] `Not unknown, then, Oscar thought. *Worse* than unknown. Known at every fire…` → `*Worse* than unknown,
   then, Oscar thought. Known at every fire…` — this paragraph had two hits; kept `The whole world had heard of
   him. Not one soul had believed in him.`
7. [R2] `Kessa went on, flat, merciless because the truth was merciless.` → `Kessa went on.` — her lines are
   merciless without the label.
8. [R1] `He said it plainly, and he felt the whole chamber turn toward the plainness of it, the way they'd turned
   toward him on a glacier when he'd told them to move. He was doing the thing again, stepping into the
   wheel-shaped gap. He felt the gap take his weight. He let it.` → `He said it plainly, and he felt the whole
   chamber turn toward the plainness of it. He was doing the thing again, stepping into the wheel-shaped gap.` —
   kept the recurring wheel image; the speech that follows is him taking the weight.
9. [R1] `*His* crew. He hadn't meant to start thinking of them as his.` → `*His* crew.`

Deliberately not applied: `That was the thing.` and `which surprised him, because nothing else in him was` —
light and in his rhythm; `set it on the stone between them, flat, the way you set down a thing you don't want to
be holding` — Kessa's physical beat, literal "flat"; `he said it like a person checking a door he already knew
was locked` (Cael) — it does work the dialogue can't; the writ speech and Kessa's "Doss would've called that a
bad job" — spoken.

## Chapter 14 — The Descent

Cadence before → after: words 2234 → 2164 · em-dashes 11 (4.9/1k) → 11 (5.1/1k) · "flat" 1 → 1 (Cael's hand
flat on the shield — literal) · "Not X." 1 → 0 · superlatives 1 → 1 ("the worst of any animal's hunger" —
Oscar POV narration, rule 4 is Wick-only) · lexicon 0 → 0.

1. [R1] Cut the one-line paragraph `She had not been speaking poetically.` — the first body follows immediately.
2. [R1] `with his head bowed and his lips moving, the small private mercy he did for everything that had stopped
   living, and then they went on.` → `with his head bowed and his lips moving, and then they went on.` — we
   watched him do this in Ch09.
3. [R3] `was a shield. Not a salvager's buckler. A real shield, broad and old,` → `was a shield, a real one,
   broad and old,` — folded without adding a "not X but Y".
4. [R3] `The tracery filled. Not with the cold blue-white shine…` → `The tracery filled, not with the cold
   blue-white shine…` — untracked fragment folded.
5. [R1] `"Huh," said Oscar, with the particular delight of a man watching his understanding of the world get
   larger. "It ran cold…` → `"Huh," said Oscar. "It ran cold…` — he says it aloud two lines later ("I love
   being wrong about it"); the spoken version stays.
6. [R1] `…watched him decide to carry the thing anyway: a man who would shoulder a shield *because* it had
   failed the last hand that held it, as if to argue with the fact.` → `…watched him decide to carry the thing
   anyway.` — Astra's exact shape after "It didn't save them."
7. [R1] `…and there were a dozen. The shield bought time. It didn't spend the threat.` → `…and there were a
   dozen.` — the preceding sentence already states it.

Deliberately not applied: `The good claim had been eating crews for a long time.` — plain fact, and "eating"
seeds the hush; `a fleeing thing that runs into food does not keep running` — Oscar working out why the
spiders turned (mechanism, needed); `the place where plans go to be proven wrong` — his wit, and the
chapter's exit line; `Cael took it the way a man takes something he's afraid to want` — does work for a
non-POV character.

## Chapter 15 — The Good Claim

Cadence before → after: words 3033 → 2937 · em-dashes 24 (7.9/1k) → 23 (7.8/1k — one dash left with a
cut; the chapter was at the ceiling, so I made sure a cut carried a dash out) · "flat" 4 → 2 (both literal:
Kessa "Flat on the stone", Cael "lay flat on his back") · "Not X." 2 → 1 (Oscar's spoken "Not to kill it.") ·
superlatives 0 → 0 · "the way" 7 → 7 · lexicon 1 → 0 ("math" went with Wick's label).

1. [R2] `"It's not dying," Wick said, in the small flat voice of someone watching the math go wrong. "Oscar.` →
   `"It's not dying," Wick said. "Oscar.` — the line is flat on its own; also removes the Sarn-word "math".
2. [R3] `looking, *looking.* Not at the beast now, the beast was alive and gave his gift nothing. He looked at the
   *room.*` → `looking, *looking,* not at the beast now, the beast was alive… He looked at the *room.*` —
   untracked fragment folded (no "but" added).
3. [R1] `But she nodded, and there was iron in the nod.` → `But she nodded.` — "I can do that" follows.
4. [R2] `Her flat eyes cut to him.` → `Her eyes cut to him.`
5. [R1] `"We pulled her back." Just that. Like he was checking it was true. "This time we pulled her back."` →
   cut `Like he was checking it was true.` — his own repetition is the checking.
6. [R1] `They let it sit there, the dead man's name nobody said, and for once it didn't poison anything.` → ends
   at `…nobody said.`
7. [R3] `It was a fortune. Not in coin. In *workings,* crated…` → `It was a fortune in *workings,* crated…`
8. [R1] `…in a life that might not be his. And the not-knowing opened under him like the pit had opened under
   the hush, black and bottomless and waiting.` → ends at `…might not be his.` — the cold and "might not be
   his" carry it; simile-caption gone.
9. [R1] `He looked at his crew—gray, bloodied, emptied, standing in the impossible heart of the place that wasn't
   supposed to let anyone out. "And it was true.` → `He looked at his crew. "And it was true.` — mid-speech
   gloss of what the speech itself says ("nobody else could survive it… It nearly killed us"); carries the dash
   out.
10. [R1] `His voice went. He stood there with the rest of the sentence in his mouth and could not get it out, and
    did not try again. What he had instead…` → `His voice went. What he had instead…` — the abandoned sentence
    ("in a hundred years they never once—") does the work; Astra's exact ask.

Deliberately not applied: everything in the pit passage and the grey-token passage (`a vastness, a heat, an
ancient terrible attention… glad, so glad, reaching`; `Not see it, feel it:`; `something in the way she said it
made the hair stand up on his arms… filed it away`) — cosmology hints are locked, so I left those paragraphs
alone even where a fragment could have been folded; `the way you feel a window slam in another room` — same;
`A door, on paper.` — four words, his register; `The plan was good… which was the whole problem` and `the
world came apart in the right order` — voice; `sixteen and unflinching`, `the grim way you smile at the top
of a hill you've decided to hold` — light, and the chapter's exit.

## Chapter 16 — The Squeeze

Cadence before → after: words 2107 → 2027 · em-dashes 8 (3.8/1k) → 7 (3.5/1k) · "flat" 0 → 0 · "Not X."
4 → 3 (all three spoken: Kessa "Not much.", Sarn "Not to me.", Oscar "Not with knives.") · superlatives
0 → 0 · "the way" 2 → 0 · lexicon 6 → 6 (Sarn's "arithmetic"/"ledger"/"sums" — the Tithe's words in the
Tithe's mouth, deliberate).

1. [R1] `…one bored tollman with a ledger. A town learned to go quiet around trouble the way the good claim had
   gone quiet around the hush.` → cut the closing simile-aphorism; the half-empty lanes are the image and
   Kessa reads them aloud next.
2. [R1] `Kessa murmured, reading the street the way she read everything.` → `Kessa murmured.`
3. [R1] `…what he'd felt at the edge of that pit. He filed it with the rest.` → cut `He filed it with the rest.`
   — Ch15 ends on the same tic; the pit reference itself untouched.
4. [R1] `he said, gently, because the next part was the part that mattered.` → `he said, gently.`
5. [R3] `Then the door came apart.\n\nNot their door. The front, the bolted one, kicked in…` → `Then the door came
   apart.\n\nThe front door, the bolted one, kicked in…`
6. [R1] `something almost like respect in them, which sat colder than contempt.` → `something almost like
   respect in them.`
7. [R1] `"No," said Sarn, almost kindly, and that was the thing that turned Oscar's blood to water—the *almost
   kindly.* "You misunderstand…` → `"No," said Sarn, almost kindly. "You misunderstand…` — Astra's named
   overlap tic (explaining that the kind thing is the worse thing, right after we heard it); also −1 em-dash.
8. [R1] `said Wick, surfacing all the way at last, fury doing what fear couldn't.` → `said Wick, surfacing all
   the way at last.`
9. [R1] `…the look on her face was no longer somewhere far away. It was right here, fixed on Oscar, fierce and
   frightened and entirely present.` → ends at `…somewhere far away.` — the stopped shaking and the hand out
   of the pocket are the image.

Deliberately not applied: `And then, because some part of Sarn plainly believed it:` — frames Sarn as
someone making a case for an institution (Astra wants that distinction protected); `sixteen and furious and
right`, `that steady terrible gentleness`, `with the air of a man committing a sin he intended to enjoy` —
one-phrase manners on non-POV characters, doing work; `The whole town. Summoned. To one place. To watch.` —
Oscar working the mechanism; the chapter's last two lines.

## Chapter 17 — The Example

Cadence before → after: words 2584 → 2461 · em-dashes 11 (4.3/1k) → 11 (4.5/1k) · "flat" 1 → 0 · "Not X."
2 → 0 (Oscar's spoken "Not the danger—the danger is real." stays, untracked behind its quote mark) ·
superlatives 0 → 0 · "the way" 5 → 5 · lexicon 4 → 4 (Sarn's ledger/sum and Oscar's "a sum that had not
accounted for this" — all aimed at the Tithe). The square speech — Oscar's canonical Tithe speech — is
untouched; its captions are spoken.

1. [R1] `A ripple went through the crowd. The good claim. The name alone was a wound in this town.` → `A ripple
   went through the crowd.` — Brida's story in Ch11 already made the name a wound.
2. [R2] `"It's a lie." He said it flat and certain and it cracked across the square.` → `"It's a lie." It cracked
   across the square.` — the action carries the label.
3. [R1] `He had them now; he could feel it, the awful held breath of a crowd at the edge of understanding.` →
   `He had them now; he could feel it.`
4. [R1] `After that it happened very fast, and the crew's whole job was to keep the spark alive long enough for
   the fire to catch.` → `After that it happened very fast.` — the next four paragraphs are the job.
5. [R1] `But it held. It *worked.* He filed the small fierce joy of it away for later, when there was a later.` →
   `But it held. It *worked.*` — third "filed… away" in three chapters; "when there was a later" repeats
   Ch15's opening.
6. [R1] `"You've won a town," Sarn said. No bored mask now; just a cold clear assessment, almost respectful.
   "Congratulations.` → `"You've won a town," Sarn said. "Congratulations.` — "the bored mask was gone" was
   already said mid-speech.
7. [R1] `…was a fool's errand, and because some cold honest part of him knew Sarn was right.` → `…was a fool's
   errand.` — Kessa asks it and he answers "Yes" aloud two paragraphs later.
8. [R1] `"Thank Cael," Oscar said, because it was true and because he couldn't carry her gratitude just then,
   not with Sarn's voice still cold in his ears. "He's the one…` → `"Thank Cael," Oscar said. "He's the one…`
   — the deflection is visible.
9. [R1] `there was no guilt in his face at all, just a bone-deep, weary peace. *The one who stands between.*` →
   `there was no guilt in his face at all. *The one who stands between.*`
10. [R3] `"He's right, isn't he," Kessa said quietly, beside him. Not a question. She'd heard enough.` → ends at
    `…beside him.` — the missing question mark already says it.
11. [R3] `He breathed past it. Not yet. Soon, but not yet.` → `He breathed past it. Soon, but not yet.`

Deliberately not applied: Wick's paragraph (`never near the thing that waited under her`) and her hand on the
grey token on the steps — cosmology hints locked; `A square has good acoustics, which Oscar was counting on`,
`it was over, and it was beginning` — voice; `The Tithe's hold on Marrow was broken, not tidily, not forever,
but in the way that mattered…` — the outcome statement, and the reversal is pre-existing; the final paragraph.

## Group B totals

| Ch | words | em-dashes (per 1k) | "flat" | "Not X." | superl. | Sarn-word watch |
|---|---|---|---|---|---|---|
| 09 | 2048 → 1979 | 8 → 8 (3.9 → 4.0) | 1 → 1 (literal) | 2 → 1 | 0 | 0 |
| 10 | 2538 → 2442 | 7 → 7 (2.8 → 2.9) | 5 → 4 (all literal) | 1 → 1 (spoken) | 0 | 7 → 6 |
| 11 | 1928 → 1823 | 11 → 11 (5.7 → 6.0) | 2 → 0 | 2 → 1 (spoken) | 1 (spoken, non-Wick) | 1 |
| 13 | 2514 → 2425 | 9 → 9 (3.6 → 3.7) | 4 → 2 (literal) | 3 → 1 | 0 | 1 |
| 14 | 2234 → 2164 | 11 → 11 (4.9 → 5.1) | 1 → 1 (literal) | 1 → 0 | 1 (Oscar narration) | 0 |
| 15 | 3033 → 2937 | 24 → 23 (7.9 → 7.8) | 4 → 2 (literal) | 2 → 1 (spoken) | 0 | 1 → 0 |
| 16 | 2107 → 2027 | 8 → 7 (3.8 → 3.5) | 0 | 4 → 3 (all spoken) | 0 | 6 |
| 17 | 2584 → 2461 | 11 → 11 (4.3 → 4.5) | 1 → 0 | 2 → 0 | 0 | 4 |
| **all** | **19086 → 18258 (−828)** | **89 → 87; every chapter ≤ 8/1k** | **18 → 10 (10 literal, 0 labels)** | **17 → 8 (7 of the 8 spoken)** | **2 → 2 (none Wick's)** | **20 → 18 (all Tithe)** |

Every "flat" left in the group is a literal surface (lying flat, hand flat, flat eyes of the drift-cats);
"not unkindly" 1 → 0. No em-dash count rose; two fell. No file's heading moved; every word count went down.
"Not X." fragments that were dialogue (Kessa, Sarn, Brida, Oscar) were left as dialogue content. Lexicon lock:
zero violations in any chapter; the remaining Sarn-word hits are all the Tithe's words about the Tithe.
Cosmology: nothing in the pit / grey-token / "thing that waited under her" passages was touched. Chapter 12
(Wick) not opened. No git operations.
