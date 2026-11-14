# Fight Choreographer — Book 1, Ch40 "The Sweep"

**Target:** `manuscript/makers-ladder/book-1-unfinished-apprentice/chapters/chapter-40.md`
**Read first:** book-bible (Cosmology THREE-THINGS + Decisions Log), Oscar_StyleGuardrail, pov-profiles (oscar/cael/kessa/wick/tarn), arc-4-outline (★ FINALE COMBAT DESIGN §Ch40, ★ THE CAUSAL ENGINE §Ch41, ★ LOCKED villain), Ch38, Ch39.

---

# VERDICT: **REVISE** — and it is close to GO.

This is the best-choreographed fight in the book and it clears the design brief on every locked axis: three distinct fronts, genuine de-centering, a villain that is pitiable and beaten because it is empty, and a catastrophe caused by the victory. The prose is not the problem. **The problem is bookkeeping under a stated clock.** The chapter names a nine-second window, sends two people offstage on an assignment, and then never pays either debt — eleven armed made enemies and the crew's two most physical members vanish from the page for the entire crux and come back untouched. In a chapter whose central rule is *step out of the warm and the city eats you*, that reads as fiat, and it is the one thing standing between this and "the best damn thing we've written."

Everything below is fixable inside ~400 added words, most of it in three places. No restructure. One one-word canon leak must be fixed before merge.

**Ranked:** F1–F3 are must-fix (structural fiat / locked-term leak). F4–F7 are should-fix (the fight's teeth, physical plausibility, live gun). F8–F12 are polish.

---

# Cadence (tool-measured — `node tools/cadence.mjs`)

```
words: 3690
em-dashes: 15 → 4.1/1k — within target (≤8)
"the way": 2 hits → only 1 is a genuine simile (L135 "the way you'd flick a cobweb
   off a doorframe"); L41 is the idiom "in the way". → 1 genuine, target ≤3. CLEAN.
banned phrases: none
"not X but Y": 1 (L87 "not as a ward, not as a wall, but as a hearth") → EARNED
"that was the": 1 (L101 "That was the discovery of his life") → EARNED
```

`tools/repeater.mjs`: one finding — "the plain of Everset" ×3 (L11, L117, L201). L11/L201 bookend the chapter; vary L117.

**Not caught by the tool, but a real tic:** `three hundred` appears **5×** (L131 "a three-hundred-year joke", L139 "three hundred years older", L173 "Three hundred years of absence", L201 "three hundred years late", L223 "for three hundred years under a hand"). Oscar's POV profile explicitly rations this ("**'three centuries'** repetition — ration it"). Ch38 and Ch39 carry 2 each, so the arc is running ~9 in three chapters. See F10.

Length note: 3690 words vs Ch38's 2843 and Ch39's 2522, against a bible instruction to "bias to the high end." Climax part 1 is the right chapter to be the longest in the book. The good news is that the ~400 words this review asks for all land in the holes, not in interiority.

---

# Locked-design scorecard

| Requirement (arc-4-outline ★ FINALE COMBAT DESIGN / LOCKED villain) | Delivered? |
|---|---|
| **Front 1** — erasing room as ticking threat; Cael's independent warmth the one thing keeping the crew legible | **YES, and it is the best thing in the chapter** — but the clock has a leak (F2) and every loss is refunded (F6) |
| **Front 2** — seat's made defenses cleared at scale by the sweep, demoted to crowd control | **YES.** Nine seconds, then they walk back for more kit. Demotion is perfect. But the front is then abandoned (F1) |
| **Front 3** — dark-mirror duel Oscar LOSES; the turn is his REFUSAL (human act, not magic); Quill answers on the refusal | **YES.** Three escalating magic failures, total defeat, then "So he stopped doing magic." Textbook |
| **Three fronts distinct?** | **YES** — six movements, each with its own tempo, cleanly transitioned. No mush |
| **De-centering: Oscar's reading/sweep/orchestration get them to the crux; his refusal breaks the Setter; NEITHER ends the font** | **YES, airtight.** He explicitly cannot stop the font at the end: *"he could see the grammar of the thing perfectly and there was nothing in the world he could do with it"* |
| **Ensemble load-bearing, each in-register** | **YES for Kessa/Tarn/Cael. Wick is thin** — she executes an order and never makes a choice (F4) |
| **Runaway caused by their victory** | **YES.** Stated three ways: seat empty → no operator → "the telling was a man, and we unmade him" |
| **Only Wick's door (FAR SIDE, not the deep current) can end it** | **PARTIALLY.** No conflation anywhere — clean. But the "only" leg is implied, not established (F7) |
| **Villain pitiable, empty, not out-fought; "Oh. THERE it is."** | **YES.** It lands. One dial for the author, not a fault (FA-2) |
| **Cost felt by more than the POV** | **YES** — Tarn, Kessa, Wick, Cael all pay. Undercut only by the refunds (F6) |
| **A single brush of fraying licensed** | **YES**, correctly tied to the one prior instance. One word to tidy (F9) |
| **No crew death** | **None.** One ambiguous line to disarm (F5) |

---

# Beat-by-beat findings

## F1 — MUST FIX. The nine-second clock is stated, and the debt it creates is never paid. Eleven armed made enemies leave the chapter offstage.

> L121: *"Nine seconds, maybe. Then the clerks turned, unbothered, and started walking back toward the arcade for more kit."*
> L129: *"The Setter came for him inside the nine seconds."*

**Problem.** This is the chapter's best pacing instinct and its biggest structural hole in the same two lines. You put a number on the window, so the reader starts counting — correctly, because the demoted sweep's whole point is that it *expires*. The chapter then spends ~1,200 words inside the aftermath and never once cashes it. The clerks fetch fresh styluses and are never seen again. Nobody stops them. Nobody reports stopping them. The Setter dies, the font goes runaway, the chapter ends — and eleven made things with working pens are still, as far as the page knows, crossing the plain toward five people whose entire survival rule is *don't let one finish writing*.

Note this is not the "duel takes longer than nine seconds" complaint — "came for him inside the nine seconds" is an arrival-window and reads fine. The debt is the **return**, and the return is exactly what a reader who was given a countdown is waiting for.

**Lightest fix (~60 words, and it also fixes F3).** Make the clerks' return the interruption that *breaks* the duel's spell rather than something the chapter forgets — a single beat between the Setter's death and the font turning inward, in Kessa's mouth, reporting the arcade raid as the answer:

- one line from Kessa on return: the arcade is cold / the cupboard is kindling / Tarn put a door through the wall and the kit is under the rubble — so the clerks who walk back find nothing, and stand about in the cold light with nothing to write with. That resolves Front 2 *by the crew*, on the clock, without a single new capability.
- alternative if you want the clerks live at the end: keep them coming, unarmed, and let the last image include grey figures still politely crossing the plain toward a fight that has stopped mattering because the font is about to strike out everything including them. That's colder and arguably better.

Either way: **one sentence of consequence for a plan the chapter went to the trouble of making.**

## F2 — MUST FIX. Oscar sends Kessa and Tarn *out of the warm*, and the chapter's own central rule says that should cost them. It costs them nothing.

> L91: *"Stay in it. All of you. **Stay in the warm and you'll keep knowing who you are.**"*
> L105: *"Kessa. They resupply from the colonnade… Break the line of supply, not the clerks. Tarn, go with her… Wick, you hold that gap until Kessa's back and then you fall in to Cael and you do not leave the warm."*

**Problem.** Front 1's rule is established in the strongest terms available (Tarn loses a word, Kessa loses her count, Oscar loses his *name*) — and then the hearth is lit and the rule is *immediately* suspended for the two characters who leave the hearth's reach on Oscar's order. They come back whole. Tarn's arrival back is even the chapter's best small gesture (*"Tarn had a hand on the back of Oscar's coat again and Oscar had not felt him arrive"*) — which makes it worse, because the reader is being asked to feel a warm callback about a man who just walked through a memory-eating room for free.

It also strands Oscar's own line: he says *"Everyone stays inside the fire"* in the same breath as ordering two people out of it. Right now that reads as an oversight rather than a choice.

**Lightest fix — pick one (each ~25 words):**
- **(a) Canon-supported reach.** The bible has Cael's warmth *"reaches via a long hall."* Let Cael throw a hall of it after them, visibly, at extra cost — one clause, and it makes Cael's front *more* load-bearing, not less. Oscar can even name the price he's asking Cael to pay, which is his lane (judgment under incomplete information).
- **(b) Make Oscar know he is spending them.** He orders them out anyway, knowing, and says so in half a line — *"and I am sending you out of the only safe thing in this city, and I want it noted"* — then pay it in F6 below. This is the stronger option thematically: field-architect capstone means commanding people into cost.
- **(c)** Both. (a) covers the rule, (b) covers the man.

## F3 — MUST FIX (one word). "the far side" leaks into Oscar's narration one chapter before it pays off as Wick's locked private term.

> L189: *"something moved behind its face like weather on **the far side** of a wall."*

**Problem.** `the far side` is locked (Decisions Log, 2026-07-13) as **Wick's private term** for what her door opens on — renamed specifically to end a collision. Here it appears in Oscar's narration, as plain English, in a simile about *something moving behind a wall* — i.e. the exact image of the far side pressing on the thinned wall of the world, in the chapter immediately before the chapter where that becomes literal. Ch38 already has Wick reaching for the same picture on-page (*"the wall's practically not even —"*). Read in sequence, this lands as a deliberate plant that then goes nowhere, or worse, as Oscar having a word he must not have.

**Lightest fix.** `like weather behind a wall` or `like weather on the other side of a wall`. One word. No other change.

## F4 — SHOULD FIX. Wick leaves the hearth between two paragraphs, off-page, in defiance of a direct order, and nobody notices.

> L105: *"you do not leave the warm, do you hear me, **not for me**, I am not the thing that needs holding tonight"*
> L205: *"Cael sat down slowly **in the middle of them**"*
> L231: *"Wick's voice came from somewhere **near the basin**."*

**Problem.** Three problems in one gap. **(i) Blocking:** she is in the middle at L205 and at the basin at L231 with nothing in between. **(ii) Rules:** the basin is the seat; she is now outside the only thing keeping the crew legible, during the *escalation*, and is not being taken apart — which re-opens F2 at the chapter's final image. **(iii) Character:** her profile is messy loyalty, blunt kid logic, *fierce* — and the guardrail says "let the apprentice challenge the teacher." Right now Wick is the one crew member who only ever executes an order. She holds an assigned gap, reports a number, cries, and delivers the last line. She never chooses anything.

Her drift to the basin is the most motivated action in the chapter and it happens in the white space. **Give it to her.**

**Lightest fix (~40 words, and it fixes F8 too).** One short paragraph before her last line: she is not deciding to move, she is being *pulled* — the wall is thinnest at the seat and something on the far side of it is closer than it has been all night — hand jammed in her pocket on the blank token, which has gone quiet/warm/still. Oscar (in his lane) notices *too late* that she has left the warm and that she does not look like someone who can be called back. Then: *"Ten."*

This is the handoff to Ch41, it costs nothing, and it turns the book's final line from atmosphere into a decision already being made.

## F5 — SHOULD FIX. Cael's cost is the best thing in the chapter and one line reads as a death flag.

> L95: *"'Don't.' The big man's jaw set. 'Don't you dare do the sums out loud. **I know how long I've got.** Get on with your work.'"*

**Problem.** In isolation that is a man rationing a fire. Placed after *"He was grey and running with sweat and his voice came out of him in pieces"* and immediately before he is left burning for the rest of the chapter, plenty of readers will take it as *how long I have to live* — and a Cael death is not on the board in Book 1. (`The big man` is correct — Cael owns "big" — no issue there.)

**Lightest fix.** Anchor the noun: *"I know how long the fire's got"* / *"I know what's left in it."* Same refusal, same register, no crew-death flag.

**Also worth one clause here:** Ch38 made a point of Cael's warmth being *undiminished* inside Everset (*"not a flicker in it"*). Ch40 has him grey and shaking almost at once. That is not a contradiction — holding a hearth over five people against continuous erasure is not lighting a hand — but the text never distinguishes them. Half a line does it: **the fire is as strong as it was; the man is finite.** That's the whole of his tragedy in one clause, and it protects the locked "Cael is independent at Everset."

## F6 — SHOULD FIX. Every erasure is refunded. The room's threat has no permanent teeth.

> L89: *"He remembered water in the channels. He remembered **door.** He remembered five."*
> L203: *"'That's four. Four's fine. We are five and one bird, and **I have the count**.'"*

**Problem.** The room takes the sound of running water, Tarn's word, Kessa's tally and Oscar's name — a magnificent escalation — and the hearth gives all of it back within twenty lines. Nothing is *gone*. That converts the ticking threat into a scare, and it means the reader has no evidence for what the runaway font at the end will actually do to a person, right when the whole handoff depends on believing it.

The design's clock ("stay too long and you are edited out") needs one permanent subtraction to be real.

**Lightest fix (~15 words) — and Tarn is holding the perfect one.** Cael's hearth restores *Oscar's* "door" on-page. Nobody ever gives Tarn his back. Make that deliberate: the hearth comes up, everyone else surfaces, and **Tarn still hasn't got the word.** Then a small hard beat later — he uses "the thing in a wall" again, or he simply stops trying and points — and nobody comments, because there is nothing to say. Book 1 ends with a man who cannot say *door* in the same book whose last hope is a door.

Sharpen the near-miss at **L105**: Oscar says *"you're the one who can put a **door** through a wall"* — to the man the city just took "door" from, thirty-eight lines later. That is either the cruellest accident in the chapter or its best deliberate beat. **Make it deliberate:** Oscar hands the word back, on purpose, in the middle of an order — and it doesn't take. One clause. (If you'd rather Tarn get it back, then let *him* say it, once, plainly, and let that be the restoration — but then something else must stay gone.)

## F7 — SHOULD FIX. The catastrophe's *cause* is airtight. The "only Wick" leg is one exchange short.

> L221: *"He was reading it fast and he wished he weren't, because he could see the grammar of the thing perfectly and **there was nothing in the world he could do with it.**"*

**Confirmed clean first:** there is **no far-side/deep-current conflation anywhere in this chapter.** The only two uses of "the deep current" are correct and arcane — the brace (L135) and the font's rising column (L213). Oscar's reading is explicitly useless against the runaway. That's exactly right, and it is the trap the outline's own legacy Ch41 bullet ("*only the deep can end a runaway deep-flood*") sets for a reviser — **do not let that phrasing into the prose.**

**Problem.** *"nothing in the world"* is a lovely, precise pointer at an answer from outside the world — but it is doing all the work alone, in a subordinate clause, and the chapter never rules out the crew's other tools. Ch41's causal engine wants Ch40 to have closed the door on all four (his reading, Cael's warmth, Kessa's angles, Tarn's fists) so the sacrifice is forced, not chosen from a menu. As drafted, Ch41 has to do that cold.

**Lightest fix (~50 words).** Kessa already asks the right questions twice (*"You'll want to say why"* / *"Which is."*). Give her one more and let Oscar close the doors in his own register — fast, clipped, a list, each tool named and dismissed in four words: warmth can ward it, not drink it; there's no ground to use; nothing to hit. End the list on **the wrong word**, not the right one — he does not have the answer, he only has the shape of the hole where an answer should be. Then Wick's *"Ten."* becomes the answer arriving from outside his gift, which is the whole point of the finale.

**Do not** have Oscar name Wick's door or reason his way to it. His blindness to the far side is locked and it is the mechanism of the tragedy.

## F8 — SHOULD FIX. Wick's blank token is a live gun and it is absent from the chapter before it must be left behind.

**Problem.** The token is canon-tracked through Arc 4 ("goes quiet or stirs near the seat") and Ch41 *requires* it on the seat-stone. Ch39 has it beautifully (*"holding a grey rock in her fist so hard her knuckles had gone the colour of the city"*). Ch40 has it **nowhere** — and this is the chapter that ends four feet from the seat.

**Lightest fix.** Roll into F4: her hand in her pocket on the blank as she drifts to the basin, and one symptom — it has gone *still*, or cold, or she can't feel it at all, which frightens her more than the font does. No explanation. (Optional and stronger: at the sweep, one clause where Oscar has to **aim past his own people** — Cael's shield-relic, Tarn's hook, the grey disc in Wick's pocket that his looking cannot find. That plants the token, adds real tension to the sweep, and pays off the going-unread rule in four words. It also, usefully, proves the sweep is aimed rather than indiscriminate.)

## F9 — POLISH. The fraying brush is licensed and correctly sourced. Trim one of its two markers.

> L119: *"His vision went to **grain at the edges**, and something in him **thinned** in a way he recognized from a bowl in Oressa."*

**Problem.** Two fraying markers in one sentence. The Oressa reference is *exactly* right — it ties the brush to the single licensed Ch23 overdraw and nothing else, which is the discipline the bible asks for. But *"grain at the edges"* sits one synonym away from the explicitly proscribed *"thinning at the edges."*

**Lightest fix.** Keep *"something in him thinned… a bowl in Oressa"* (canon-anchored, load-bearing). Change the vision beat to something not fraying-coded — grain in his vision, or his hands, or the plinth he can't feel properly. One brush, one marker.

## F10 — POLISH. `three hundred` ×5.

L131 / L139 / L173 / L201 / L223. Two of these are the chapter's best lines: **L173** (*"Three hundred years of absence closed like a door in a warm house"*) and **L201** (*"three hundred years late"*). Keep those. Recast L131 (*"a three-hundred-year joke"* — Ch38 already landed that joke; "the joke" alone will do), L139 (make it about practice, not duration), and L223 (*"under a hand"* carries it without the number).

Small logic pinch at L173/L175: *"Three hundred years of absence"* sits beside *"the shoulder that had been empty since the ice"* — one season. The line means the *line's* absence, and it's the better meaning, but the two clauses fight for a beat. One possessive fixes it.

## F11 — POLISH. Kessa's "That's four" is a numeric puzzle at the chapter's emotional exhale.

> L203: *"That's four. Four's fine. We are five and one bird, and I have the count."*

**Problem.** Almost certainly "that's the fourth of them, down" — a lovely bit of Kessa marking the kill in her ledger. But it collides head-on with *"We are five"* in the next clause, so a first-time reader stops to do arithmetic in the two seconds after the Setter dies. Kessa's profile says she *marks* and moves; she does not leave the referent to be inferred when the number is ambiguous.

**Lightest fix.** Give it a hard referent, in her register, no ornament: *"That's the fourth one down."* Then *"We are five and one bird, and I have the count."*

## F12 — POLISH. The refusal aria is delivered by a man being held off the ground by the throat.

> L143: *"It got a hand around his throat and stood him up against the plinth without effort"* → L153/L157: ~180 words of speech, through *"the roaring in his ears."*

**Problem.** The speech is the best writing in the chapter and I would not cut a word of it. But 180 words of clear, cadenced argument while throttled and lifted is the one place the physical stops supporting the beat. The chapter half-acknowledges it (*"He got the words out because words were the last thing he owned"*), which tells me the draft already felt the pinch.

**Lightest fix (~15 words, and it characterizes the villain).** Have the grip **change** on *"You're right."* The Setter is an *operator*: a candidate who is still talking is a candidate not yet finished, and it has three hundred years of not being surprised. It sets him down, or the hand slides to his collar, or it simply loosens by a fraction without meaning to — its first involuntary act. Then the aria runs on air, and the Setter's release at the end lands as the *second* time it let go.

---

# BLOCKER SWEEP

| Check | Result |
|---|---|
| Reading the living / minds / nature | **CLEAN, and unusually disciplined.** The Setter is established MADE three separate times (L5 *"the blood in a made thing"*; L139 *"the seams of the made thing in front of him"*; L201 *"a made thing whose whole composition…"*) so reading it is legal and the page shows the licence. The sweep is scoped to *"every made instrument in the hands of every grey clerk"* — instruments, not clerks. Best of all, **L45** does the hard thing right: *"Oscar knew exactly what that was costing her because he could **see** her jaw."* Observed, not read. Watch only: L55 *"a pressure of attention, the sensation of being carefully read by something the size of a city"* — he is the **object** here, not the reader, so it is legal; keep it attributed to his body/skin and never to his looking |
| Fraying as a routine gauge | **CLEAN** — one brush, correctly tied to the single Ch23 Oressa overdraw. Trim one duplicate marker (F9) |
| Pet-name approval near Wick (16) | **CLEAN.** Approval is Kessa's one tactical word — *"'Marked,' said Kessa"* — which is precisely the guardrail's prescription. *"that girl over there gets to be an old woman who terrorizes a village"* is affectionate, not a pet name, and it is one of the best lines in the book |
| D&D / game vocabulary | **CLEAN.** Named abilities are all on-page canon (the sweep, the brace, the lance). "line of supply," "kit," "high side" are military/plain English, not production vocabulary |
| Tarn called big | **CLEAN.** The one *"The big man"* (L95) is **Cael**, who owns it |
| Tarn's pact-hook spent | **NOT SPENT** — the word "hook" does not occur. He fights with hands only (*"He didn't hit it. He caught the writing wrist with one hand and broke the stylus with the other"*), which is his lane exactly. Gun intact |
| Crew death | **NONE.** One line reads as a flag — see F5 |
| Wick's private terms in Oscar's narration | **ONE LEAK — see F3** (`the far side`, L189; one-word fix). `door` is licensed post-Ch26 and is used well. `the coal` never appears — correct; her fire is rendered externally (*"the air over the strip standing up in a wobble"*, *"sun-struck and blistered"*). Minor: `holding` (a locked private term, and Ch28's payoff phrase) appears three times in her immediate vicinity — L43 *"Wick held her gap"*, L45 *"holding a line with a leash on"*, L105 *"I am not the thing that needs holding tonight"*. I judge all three legal as ordinary English, but the L45 collocation sits closest to her technical sense; free insurance to vary one |

### Carry-in continuity — one problem that starts upstream

**Wick's number regresses across Ch38 → Ch39 → Ch40.** Ch38 runs *seven* (drain) → *seven* (street) → **"Eight."** at the crown, with *"It's thinnest right where we're going."* Ch39, **at the font** — closer still — has her saying *"seven, it's seven, it's still seven."* Ch40 L47 inherits it: *"Still seven."* Then the chapter ends on **"Ten."**

If the scale tracks pressure/thinness it cannot go 8 → 7 as they close on the seat. **The error originates in Ch39, but Ch40's "Still seven" is load-bearing for it and the book's final line depends on the scale reading cleanly.** [FOR THE AUTHOR] — see FA-1.

**Related and fixable inside Ch40: the chapter has two counting systems colliding on the same numbers.** *"Six of them, seven, grey-robed"* (L27, clerks) → *"**Seven,** … Still seven. It's still just watching"* (L47, Wick's gauge) → *"**eleven** grey clerks"* (L117, clerks, up from seven with no reinforcement shown) → *"**Ten.**"* (L233, Wick's gauge, and the last line of the chapter). The Wick/Kessa *number → "Marked"* ritual from Ch38 does disambiguate for an attentive reader, and I'd keep that ritual untouched — but the raw clerk head-count should not sit on 7 twenty lines from her 7, and 11 should not appear un-caused twenty lines from her 10. See FA-3.

---

# KEEP — do not let a reviser sand these off

1. **The opening two sentences.** *"The light came for him like a lamp turned to a page, and Kessa shot the Setter in the throat."* → *"It was, Oscar would think later, the single most useful thing anyone did all night, and it did not work at all."* A crew member acting first, effectively, and futilely, in one breath. Perfect de-centering, perfect Oscar.
2. **The bolt that stays in its throat all chapter** and rolls away against the basin's rim when the robe empties. Best physical object in the fight.
3. **The font's method: it does not roar.** *"it began, calmly, to go over the ground as a careful man goes over a bad page."* And the escalation ladder — pillars → pavement → **the sound of running water** → *"he had just been robbed, and could not have said of what."* That is the whole book's thesis executed as a physical event.
4. **The clerks.** *"They're not soldiers. They're the pen."* / *"Don't let one finish writing."* / *"an expression of mild administrative regret"* / *"where the stylus cupboard was."* Zero mooks. An enemy that cannot be killed and must be *out-administered* is a genuinely new fight.
5. **Tarn stopping the job, not the man** — *"a fist-fighter with forty years in a bowl knows the difference between hurting a man and stopping a job."* One sentence, whole character.
6. **Kessa never once going at a clerk.** *"She got between."* Terrain, angles, footing, counts — and the lamp-standard at its footing. Textbook lane.
7. **"What's the word."** Tarn, standing very still, miming a hinge. The chapter's best beat and the scariest thing in the book. Do not touch a syllable.
8. **Kessa's "How many are we?"** and *"it was the load-bearing wall of the entire woman."*
9. **Oscar losing his own name**, and the specific reason it terrifies him: *"I'm using a dead man's name and the city is taking it back and I can't prove it's mine, I have never once been able to prove it's mine."*
10. **"HERE."** Cael on one knee, palms flat, *"not as a ward, not as a wall, but as a hearth"* — the one earned "not X but Y" in the chapter — and *"the exact warmth of a room with a fire in it and people who know your name."* This is the locked independence paying off, and it pays off better than the outline asked for.
11. **"the work was not reading."** *"knowing a thing is not lifting it, and he had told Kessa exactly that two nights ago in a lamplit street and had not until this moment believed it."* The field-architect capstone, and it lands as a *loss*, which is the correct emotion.
12. **The sweep's total anticlimax.** *"It was nothing to look at. It made no noise."* → sticks and planks → *"Nine seconds, maybe."* → *"That's nine seconds! Nine seconds is a lifetime. Take the nine seconds!"* This is the demotion executed perfectly, and Wick's *"That's it?"* is the right voice asking it.
13. **The three-stage magic defeat** — brace flicked off like a cobweb, the lance's sentence *finished for him* (*"closed the figure early, wrong"*), the unstitching finding every seam already closed. Escalating, technical, and it ends in total loss.
14. **"trying to win a conversation."** The Setter's diagnosis of Oscar is correct, kind, and devastating.
15. **"So he stopped doing magic."** Four words, own line. The hinge of the book.
16. **The whole refusal**, and specifically the *un-clever* register of it: bread with a crust that cracks, a bath so hot it's a moral failing, the second half of a stolen book, an argument with Kessa he's been losing for a month. And *"I am not finished, and I decline to be."*
17. **"Quill," he said. "Come."** — and that Quill can cross the plain at all for a stated, rule-consistent reason: *"a city that had no line in its book for a bird that belonged to nobody but a man who had just declared himself a person."*
18. **"Not thrown off. Not beaten. It let go."** This single line is what keeps the death from reading as a power-fight win. It is doing more work than anything else in the scene. Protect it absolutely.
19. **"I remember the shape of wanting it to come."** The best line the Setter has, and the exact dosage the outline's tonal dial asked for.
20. **"I was, I'm told, a promising person"** repeated verbatim from Ch39. A hollow thing can only produce the same stock sentence. This *is* the imperfection the guardrail's self-check #8 asks for in a run of good lines — do not "vary" it.
21. **The death's mechanism, and that it is a rule, not a mood:** *"a made thing whose whole composition had been the finished shape of a man who had stopped asking, standing in front of a man who would not stop… And a figure with a contradiction in the middle of it cannot hold."* Seeded in Ch39 (*"what is fixed cannot also be asking"*), paid here. Earned, not fiat.
22. **"For about six heartbeats, they had won."**
23. **"the telling was a man, and we unmade him."** The catastrophe as consequence, in nine words.
24. **Cael sitting down and keeping the fire lit anyway.** Faith through action, no benediction. His profile in one gesture.
25. **"Ten."** The last line is right. It just needs the forty words in front of it (F4).
26. **Six clean movements with distinct tempos** — scramble / slow dread / fast quiet violence / slow horror / fast orchestration / stillness — separated by rules, not blended. The pacing architecture is the chapter's quiet achievement and no note above touches it.

---

# [FOR THE AUTHOR]

### FA-1 — Wick's number: fix the scale's direction (canon call; the error starts in Ch39)
Ch38 goes 7 → 7 → **8** as they approach the crown. Ch39, **at the font**, says **7**. Ch40 says 7, then **10**. The book's final line depends on this scale reading cleanly.
- **(a) Monotone pressure gauge (recommended).** The number only rises as the wall thins. Fix Ch39 to 8 (or 9), Ch40 opens on 8 and closes on 10. Cheapest fix, clearest read, and it makes the 10 a genuine spike.
- **(b) It is a *distance*, and lower is closer.** Then Ch38's "Eight" at the crown is the error, and Ch40's 7 → 10 goes the wrong way. Not recommended — it inverts the book's last line.
- **(c) It fluctuates with the font's activity** (it dropped while the font was quiet, spikes when it floods). Most interesting, requires one line of Wick establishing that it moves both ways, probably in Ch38.
Whichever you pick, the canon-keeper should log the scale's meaning and direction, because the number is now load-bearing across four chapters.

### FA-2 — "Oh. *There* it is." — the tonal dial (taste, not a fault)
**My honest read: it lands.** It is pitiable, it is not a boast, and the mechanism behind it is a rule the reader was given in Ch39. Two dials, both legitimate:
- **(a) Keep as written.** The wonder in it is the point — a thing arriving somewhere after a very long walk. **My recommendation.**
- **(b) Make it incomplete.** *"Oh,"* it said. *"That's — "* and nothing. It never gets the word, because *wanting* is the one thing it hasn't got the part for. Colder, more frightening, arguably more consistent with *"I don't have the part that keeps things."* Costs you a beautiful line.
- **(c)** Keep the line, but put one beat of mess between it and the two lines before it. Right now the Setter lands *"I remember the shape of wanting it to come"* → *"I was, I'm told, a promising person"* → *"Oh. There it is."* in immediate succession. Three perfect lines in a row from a hollow thing is the only place the villain risks reading as *composed*. (The Ch39 repetition is your safety valve here — see KEEP #20.)

### FA-3 — The clerk count: seven, or eleven?
L27 says *"Six of them, seven"*; L117 says *"eleven grey clerks."* Eleven is almost certainly deliberate — **there were eleven candidates and Oscar is the eleventh** — and if so it is a gorgeous, horrible detail.
- **(a) Make it deliberate (recommended).** Set the head-count at eleven from the start and give Oscar one flinch at the number — the man who is the eleventh, counting eleven pens. Two clauses, and it also removes the 7/7 collision with Wick's gauge (see Blocker Sweep).
- **(b) Keep it seven throughout**, and lose the resonance.
- **(c) Show the arcade disgorge four more** between the two counts — which usefully makes the resupply threat concrete before Oscar targets it, and gives F1's raid something to have prevented.

### FA-4 — Does the font edit a living mind, or does it edit a *person as a thing*? (new canon either way — log it)
The design brief licenses striking at the crew themselves, so this is not a violation. But the chapter runs **two** mechanisms and they have different consequences for Books 2–3:
- **(i)** *Erase the thing, and the knowledge of it goes with it* — L17's water in the channels, which is elegant and needs no new canon at all. Superb.
- **(ii)** *Reach into a head and take a word* — *"It took a word out of the middle of my head like lifting an egg."* Direct mind-editing, and much more frightening.
The chapter already supplies the framing that keeps (ii) rule-consistent — L77: *"It goes over you and strikes out whatever doesn't belong in a well-run city, and it will take the words and the counts and the names one at a time."* They are being edited **as objects in the room that don't belong**, not read as minds. Keep that framing, and **never let the font "read" a person** in the prose (it *goes over* them). Ask: does the canon-keeper log *"the font can strike out a living person clause by clause"* as Book-1 canon? It has implications for what the runaway does in Ch41 and for what the seat's power means in Book 3.

### FA-5 — Should Quill *strike* the Setter?
> L171: *"it struck the Setter's arm with both feet and every ounce of a barn owl's ridiculous fury."*

The design forbids a power-fight win, and the text already guards it perfectly (*"Not thrown off. Not beaten. It let go"*). But the owl physically breaks the grip one line before the grip is released, which is the only place a reader could mis-attribute the turn.
- **(a) Keep as written (my recommendation).** The fury is body-before-mind, it stops the moment being precious, and the guard line is explicit and doing its job.
- **(b) Cut the strike.** Quill simply comes down through the erasing air and *lands*, and the un-erasable living thing crossing a room that erases everything is the whole argument made visible. Removes all ambiguity; costs you the ridiculous fury, which I'd be sorry to lose.

### FA-6 — Small precision call on Quill's immunity
The city has *"no line in its book for a bird"* — but the Setter remembers *"the line's bird,"* so the line's makers knew of it. Tighten to the ownership rather than the species (*no line in its book for a bird that answers to nobody the city has licensed*) and the rule is airtight. One clause; no canon at stake.

---

## Summary of the revision list, in the order I'd do it

1. **F3** — one word (`the far side` → `behind a wall`). Do this first; it is the only leak.
2. **F1 + F2 together** — one Kessa return-line reporting the arcade raid, plus Cael's hall (or Oscar knowingly spending them). ~85 words, closes the clock debt, the vanished front, and the suspended hearth rule in one pass.
3. **F6** — Tarn never gets "door" back; make L105 a deliberate failed hand-back. ~15 words. Gives the room permanent teeth.
4. **F4 + F8** — one short paragraph: Wick pulled to the basin, hand on the blank, Oscar noticing too late. ~40 words. Fixes blocking, the rule, her agency, and the live gun.
5. **F7** — Kessa's third question; Oscar closes the doors on all four tools and lands on the wrong word. ~50 words.
6. **F5, F9, F10, F11, F12** — line-level. ~40 words total.

That is roughly 240 added words on a 3,690-word chapter, and it takes this from a very good climax to the one the brief asked for.
