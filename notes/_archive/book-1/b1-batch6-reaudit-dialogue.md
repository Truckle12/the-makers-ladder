# Re-audit — Batch 6 dialogue fixes (Ch13/15/16/19/22/23/24/30/32/34/37/38)

Method: profiles + guardrail; twelve chapters read cold; then word-diffed against `38e728c` (pre-Batch 6); then the two audit notes. `tools/cadence.mjs` run on all twelve (Ch30 Wick-POV: 3 hits, all Ash's mouth, deliberate; Ch32 Kessa-POV: 0; Ch34 Kessa-POV: 3, all in Oscar's mouth).

## 1. Fixed scenes — voice verdicts

**Ch13** — Kessa's ghost-writ: LANDS. Fragments, ends on a fact: "No name. No face. A knot with no ends… I put it with the talking wolves and the warm rivers under the ice." / "And here you are." Cael's "I did a shameful thing in the dark, once. I'd like to do a hard one" lands; his order-saying now ends on the saying.

**Ch15** — Cael over the tags: LANDS. "'That… would be a hard thing.' He closed his fist around the dead. 'Brida's man is down here somewhere. These go up with us.'" Mid-fight quips: "I can make it hate me." / "'No,' said Cael… He held." — both land; Oscar's "That's the spirit" still reads as a reply to "No." Oscar's pit speech now breaks mid-sentence — good.

**Ch16** — Wick's furious speech: LANDS, best fix in the batch: "you decide you're the one that gets spent. Like you're the cheap one… it's you, you're the dead one, you just never count you." Oscar to Brida: in register, plainer. Micro: "that the dying was just the price of the deep. It could." — "It could" reaches back past a clause for its antecedent.

**Ch19** — Cael on the note: LANDS. "A man that civil leaves word. He'll have left it somewhere we'd pass." Kessa's landings: "Civil. Those are the ones I watch." / "He'll come certain. That's worse. He won't hurry." — both land. Duplicate bowl beat gone with no orphan.

**Ch22** — Tarn's recruitment: LANDS. "That's a debt. First one I picked." / "I'll guide you south till you're there or I'm dead." / "Trying'll do." Cael's two lines: "He's paying with his body. For *that*." and "'Don't.' His hand didn't move off the wound. 'Don't do that again.'" — both land. The Ch23 callback ("Told you I was a waste of your evening") was kept in sync.

**Ch23** — Cordon and wild as Q&A: LANDS. "One gate." / "Or all of them." and "Whose." / "Not the House's." / "That's not a whose." / "It's got a keeper." Staccato but not caricature. Oscar's fingertip caption gone; "Kessa was already moving" leaves his quip unanswered.

**Ch24** — Cael's fire line: LANDS ("So I build it bigger."). Wick's body line: LANDS ("It sits in my throat… My hands won't stop."). Oscar's wrong first word: LANDS ("It gets easier" → "*Don't.*" → the true thing).

**Ch30** — Cael's grief-read: LANDS ("She's grieving somebody. Old. Gone hard. I've sat with that kind."). Kessa's "Family." / "To him." lands. Oscar's stairs: LANDS — "Leave it. I'm tired." and "I don't know." are the right imperfect closers; Cael's "Back?" catch correctly moved to Oscar.

**Ch32** — Kessa's rally: LANDS, ends on a fact ("We stood at the rim of the grey with worse odds and no walls at all."). Tarn's pit parable: LANDS — "Both men know there's no second bout… That's what you're picking. Him or us. Be picking that."

**Ch34** — Kessa's first fire speech: LANDS — ledger nouns gone, counts carry it ("I've cut no new watch-sign in five days. The pickets are gone off the fords."). Its closer "We cut its hand off at the wrist. It didn't notice." is the audit's epigram shortened, but Oscar's immediate "It noticed" turns it into a set-up rather than a landing, so it earns its place. Second speech: LANDS — "The grey lied. This hasn't… The grey was hungry. This waits. The grey didn't plan." framed as counting on fingers; "page he can't read ahead on" → "He's stood on two hills and got nothing." Order of march: LANDS, ends "Together. In order." Her narration now has "There was more set aside now than kept." (the profile's own model line); the "knuckle-tap" mystery-image is gone. Tarn's "Rather be in debt to the ground than to him. Ground collects fair." — his. Wick's "It's fine. I'm good at doors." — hers.

**Ch37** — Cael's hall/kitchens: LANDS. He stops mid-sentence ("Here it's — "), Oscar draws the meaning, Cael "did not look pleased to have it said for him," then "It's in kitchens. It's here because they're here… I don't like where the rest of this morning's going." Kessa's rats list ends on "This one's got none of it."

**Ch38** — Cael's bereavement: LANDS. "It isn't a monster. It's somebody's — " He stopped. His mouth worked and nothing came. "It's somebody's." Note "It's you if you'd come home on time" was kept whole though the audit wanted it broken too; it survives as blunt-after-failure, but is the one line still a notch too clean.

Over-corrected into caricature: none found in any of the twelve.

## 2. Damage

None caused by Batch 6 — every cut I traced leaves no orphaned reply, no missing fact, no wrong attribution, no doubled words. The Ch37 "Tarn had been right. Cities leak." callback is safe: Ch36 now has Tarn saying "Fine. Cities leak. Water comes in somewhere. Muck goes out." (antithesis cut, callback intact). Four pre-existing slips the pass walked past (all present in `38e728c`):

- **Ch23**: "'Then we don't take a road,' Kessa said. She'd said it twice already tonight." She has said it once (L49). Count is wrong.
- **Ch32**: "Tarn wiped the map from the dirt… habit older than any of tonight's reasons." The scene is a noon halt.
- **Ch30** Ash: "I don't care to be wrong about twice more, so." Reads as a dropped word.
- **Ch30** Oscar's mouth: "if you'd try the coal on that collar" — "the coal" is locked to Wick's POV. Either mark that she gave him the word, or "your fire."

## 3. Remaining Oscar-register lines (non-Oscar mouths)

- **Ch19 Kessa**, finder briefing closer: "It's the most ordinary thing in the world down here, hiring a man to go and quietly bring a thing home that doesn't want to come." — epigram landing on a sixteen-sentence speech. → end at "I read the board, Oscar. It's pages."
- **Ch19 Kessa**: "Walk in armed, or get carried in sorted." — balanced slogan that sums up Oscar's speech. → "Armed, then. On our feet."
- **Ch13 Kessa**: "…because that's how you teach a town not to feed strays." — general-truth clause. → cut it: "They make the one who's still standing there pay."
- **Ch32 Kessa**: "I mean to pick the ground before the country picks it for me." — chiasmus. → "I mean to pick the ground."
- **Ch13 Cael** (COULD): "A different road, a different mouth, the same bones to the thing." → "Different road. Same bones."
- Narration, same shape — **Ch32 Kessa POV**: "He isn't following us. He's shrinking the country we can be in." → "He isn't following us. He's taking roads."

Oscar's own lexicon (the lock retires Sarn's words from his mouth): **Ch13** "a life that isn't a ledger… a sum that clean"; **Ch23** narration "did the sum"; **Ch34** "It noticed the way a ledger notices." The "arithmetic → proof" swap was done; these were missed (the tool flags all four).

## Per-character verdict

- **Kessa — yes**, in every line under three sentences, and now in her briefings too (Ch34). Proof: Ch37 "No rats. No mice. No pigeons on that roof, no droppings on that sill, no weeds in this crack, and there is *always* weeds in a crack." Last slip: Ch19.
- **Cael — yes.** Proof: Ch38 "It isn't a monster. It's somebody's — " / "It's somebody's." (and Ch22 "Don't. Don't do that again.")
- **Wick — yes.** Proof: Ch16 "you're the dead one, you just never count you."
- **Tarn — yes.** Proof: Ch22 "That's a debt. First one I picked." Ch32's "Be picking that." seals it.

## Three most valuable remaining fixes

1. **Ch19 Kessa's two lines** (the briefing closer and "armed/sorted") — the last place in these twelve where she sums up the scene instead of marking it.
2. **Ch23 "She'd said it twice already tonight"** — make it "once already", or give her a second saying at the sheds (and the Ch32 noon/"tonight" slip while there).
3. **Oscar's Sarn-words**: Ch13 "sum" / "ledger", Ch23 "did the sum", Ch34 "ledger" — one-word edits the tool already flags.

## Revert

Nothing. Every Batch 6 change in these twelve chapters is a net gain and none broke an exchange. The closest call is Ch38 "It's you if you'd come home on time," which I would leave alone rather than break a second time.
