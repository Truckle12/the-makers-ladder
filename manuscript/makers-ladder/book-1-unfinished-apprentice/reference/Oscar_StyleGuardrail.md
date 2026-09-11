# Oscar — Style Guardrail (apply to every new/revised chapter)

**What this is:** an operational checklist that keeps the elevated voice while killing the
*over-consistency* that reads as machine-smoothed. Derived from the Arc 1/2 AI-tell audit.
**How to use it:** run the Self-Check at the bottom before presenting any chapter. The voice
is good; the problem is sameness. Goal = *less uniformly literary*, not less literary.

---

## The core rule
Do not pre-digest every beat into theme. A vivid event should land physically and sometimes
messily **before** the narration interprets it — and sometimes the interpretation should be
left off entirely. "Too perfectly interpreted" is the root tell; everything below serves it.

## Cadence — ration these moves (don't ban them)
- **Em dashes.** Not a default drama rhythm. Watch the repeated `X — Y` and `not X — but Y`
  reversal beat. Vary with periods (harder), commas (softer), colons (explanation), or just a
  plain sentence. Fix the *cadence*, not a quota — deleting to hit a number leaves the same
  rhythm with commas. **Keep** dashes for interruption, real-time self-correction, genuine
  rupture, panic.
- **"Not X, but Y." / "Not X. Not Y. But Z."** Reserve for genuinely sharp contrasts. Not the house move.
- **"the way [X]" similes.** Beautiful but frequent. Cut about a third; keep the sharpest; vary the comparison shape.
- **"That was the thing / the horror / the trouble / the lie / the part."** Reserve for real revelations, not routine pivots.
- **Paragraph landings.** Stop landing most paragraphs on a polished abstract clause. Let many
  end on action, a mundane object, an unresolved line, a practical problem, dialogue that
  doesn't fully resolve the feeling.

## Protected lexicon (do NOT genericize — these are worldbuilding, not filler)
made / unset / set · the deep / the deep current · the work / working · the Tithe · loop-mark ·
ghost-writ · font · reading / looking · the Measure · the skin · the spur · the brace ·
wild-touched · edge-stones · the Alberich line · Everset / Evermere.

**Generic abstractions to watch & concretize** (when 3+ stack in a paragraph, swap one for a
physical detail): silence, weight, wrongness, truth, longing, grief, darkness, absence, shape,
thing, memory (when used vaguely).

## Body before mind
Before a big insight, give a body-first beat: numb hands, breath in cold air, a failed joke, a
wrong first assumption, a too-small reaction, a physical fumble, a petty thought before the
heroic one. Let the body react before the mind explains — and sometimes don't explain.

## Human mess — organic, never a checklist
Add occasional mundane friction, but character-driven and sparing. If every chapter dutifully
includes its mandated mundane detail, that's just a new template. Examples (use rarely):
hunger, fatigue mistakes, smoke in eyes, wet boots, a broken strap, a joke that dies, someone
misunderstanding a poetic line, someone saying something too simple for the moment.

## Per-character voice & metaphor fields — THE #1 FIX
The deepest tell is everyone thinking in one register. Keep them separate:

- **Oscar** — proof, grammar, history, identity, editing/reading. Wit as defense; self-correction; intellectualizes fear.
  - *Reduce:* perfect insights mid-action, "three centuries" repetition, "the way…" overuse, abstract emotional summaries.
  - *Add:* failed jokes, petty irritation, bodily humiliation, wrong guesses, noticing too late.
- **Kessa** — terrain, exits, footing, angles, weather, leverage, watchfulness, plain objects. Clipped, no ornament.
  - *Reduce:* abstract/thematic language; "arithmetic" unless deliberately borrowed.
  - *Add:* trail-reading, distances, counts, watchfulness.
- **Cael** — bodies, vows, mercy, hard things, the hearth. Plain moral center; faith through action.
  - *Reduce:* polished emotional disclosures, neat aphorisms.
  - *Add:* hesitation, repeated words when grieving, fatigue, discomfort at being praised.
- **Wick** — heat, hunger, fear, speed, shame, wanting, sudden fierce loyalty. Blunt kid logic.
  - *Reduce:* Oscar-level polished insight, elegant thematic narration, perfectly framed admiration.
  - *Add:* embarrassment, awkward jokes, sensory heat, messy loyalty. (POV target texture: the audit's Ch12 Wick sample rewrite.)
- **Tarn** — debts/what's owed, the pit, the wild/fetching, bodies as currency. Dry, economical, finishes a thought and stops.
- **Sarn / the Tithe** — ledgers, sums, debt, arithmetic, value, cost. Polite ledger-cruelty. (Give arithmetic to THEM so it stops being everyone's metaphor.)

## Dialogue
Let it be imperfect: interruptions, half-answers, wrong first words, blunt practical comments,
embarrassment after sincerity, dodging the emotional point. Not everyone lands the perfect line
at the perfect moment — especially Wick and Cael.

---

## SELF-CHECK (run before presenting a chapter)
1. Did 3+ paragraphs in a row land on a polished abstract clause? → vary some to action/object/unresolved.
2. Em-dash reversal beat more than ~once a page? → thin it; fix cadence not count.
3. Did a non-Oscar POV or voice drift into Oscar's register? → re-roughen to that character's field.
4. At the big beat, did the body react before the mind explained?
5. Is there at least one genuine, organic bit of mess/imperfection — and not a sprinkled-on one?
6. Did I reserve "That was the —" and "not X but Y" for real turns?
7. Did I protect the lexicon while concretizing generic abstractions?
8. Does any character land the perfect line at the perfect time more than once? → make one imperfect.
9. Run `node tools/cadence.mjs <chapter>`: in a non-Oscar POV the **lexicon lock** must report 0 violations (or each hit is a marked, deliberate borrowing). See "Lexicon lock" below.

## Don't overcorrect
When the user corrects something, apply the **lightest fix that works**. Don't invert the note into the opposite excess, and don't repeat the new note as a drumbeat — one clean touch, then move on.
Keep the elevated style. Keep em dashes where they carry real voice. Keep the editing/sentence
metaphor *system* (just don't let every character share it). The aim is contrast that makes the
best lines feel authored, not minimalism.

---

## Added from the Book Editor pass (forward rules)
- **Mantra:** Trust the scene. Trust the reader. Keep the best line, cut the echo. One clean
  articulation of an insight, then let action carry the rest.
- **Mystery via symptoms, not re-description.** After a thing's first reveal (Wick's door, the
  deep, the token), don't keep re-narrating what it is. Use concrete symptoms — can't taste food,
  the token warm only when unobserved, the mark cold instead of hot, a shadow bending toward old
  stone, avoided eyes. Let the reader infer the dread.
- **Let the apprentice challenge the teacher.** Wick's admiration of Oscar shouldn't be total.
  She should sometimes misunderstand, resent, push back, or be right when he's wrong.
- **Antagonists get a believable logic.** Not clinical evil. The finder / the House should have an
  order-keeping rationale you could half-agree with — a behavioral tell plus a belief.
- **Action = Problem → Plan → Consequence.** Don't explain the tactic before, during, AND after.
  Over-clarity drains urgency; readers infer more than you think.
- **Evolve the question, don't restate it.** Each arc turns the central question (Arc 1: *what is
  Oscar?* → Arc 2: *who wants him, and what does the world do to people like him?*), never re-poses it with new scenery.

## Lexicon lock (2026-09-11 — from the Batch 6 voice audit; enforced by `tools/cadence.mjs`)
Four independent audits found the book's five voices collapsing into Oscar's in the same three ways:
the **epigram landing** (a speech, paragraph or chapter ends on a general truth), **Oscar's lexicon in
other heads and mouths**, and the **balanced antithesis** ("It's not X. It's Y."). The words are the
enforceable part, so they are locked:

- **Sarn's words — the Tithe's only:** arithmetic · sum · ledger · column · entry · math. Not in Kessa's
  tally (hers is *tally / count / marks / sets aside*), not in Cael's, Wick's or Tarn's mouths, and
  **retired from Oscar's mouth** too ("arithmetic" ×3 was his; it stays Sarn's).
- **Oscar's words — Oscar's POV only:** grammar · page · seam · script · clause · written · text ·
  instrument · load-bearing · "I'd like it noted" / "I want that noted" · "filed it away". In any other
  POV's *narration* they are violations; in another character's *mouth* they are violations unless the
  text visibly marks the borrowing (Kessa quoting Tarn's "the pairing posted" is a borrowing; Wick
  saying "I want that noted" is Oscar's tic in her mouth — the author caught it in Ch42).
- **Wick's words — Wick's POV only:** the coal · the door · holding · the far side ("door" allowed in
  others' mouths/narration only after the Warden names it in Ch26; before that she says "lid").
- **The shape rule that goes with the words:** a non-Oscar character does not summarize the scene.
  When a speech is longer than three sentences, check who is talking; from Ch13 on the summarizer's
  voice was Oscar's regardless of speaker. Cut the last clause; end on the fact.

## Hard no (never)
- Never "good girl" / "good boy" / "good lass" / "that's my girl" or any pet-name approval, especially aimed at Wick or any minor. It reads as condescending and creepy. Approval goes in the character's own register (Kessa: tactical; Cael: plain) — never a pet name.

---

## Session decisions — reading scope, fraying, Tarn, Oscar's progression

### Reading = the made, only ("detect magic, but fancy")
Oscar's gift perceives how *worked / made / written* things are constructed: objects, relics,
structures, workings, marks, wards, seals, the deep current as a written medium. It does NOT read
living bodies (no injuries, no anatomy), minds, intentions, attention, or living/natural systems
(animals, springs, ecology, disease). The living and the wild are where his gift returns **nothing**
— and that blindness is thematic: a made man cannot read the unmade, living world. It's a feature.
Before letting reading solve a scene, ask: is the target *made*? If not, the gift is silent and
someone else carries it. **Retro-fixes (scope creep) — DONE:** Ch23 (Borr's knee now observed, not read; "read every blow"→"see"), Ch24 ("attention" reads → reading the reader's ward/net; plain people give his gift nothing, he uses his eyes), Ch25 (spring scoped to the deep current/Script), Ch27 (the grey — he finds NO working). Fraying reserved to the single Ch23 overdraw; removed from Ch27.

### Fraying — rare loaded gun, NOT a gauge
**Definition (unified, 2026-08-14):** fraying = **loss of self-cohesion** in a person or made thing —
the edges of the self literally letting go. It has exactly **two triggers**, both already on the page:
(1) an **unfinished made thing near its font** (Ch7–8, the rime; the Warden names the made-thing case in
Ch26: "spend until there's not enough of him left to hold the shape"), and (2) **catastrophic overdraw**
(Ch23, the spur; Cael knows it as a mender: "I've mended men who frayed," Ch24). Same phenomenon, two
doors into it. Do not fork the term into two meanings in later books.
Fraying is a wizard's *catastrophic overextension* danger, planted for later books, used sparingly
at moments of genuine extreme overreach. It is NOT a per-fight/per-chapter cost and NOT a routine
price of reading or ordinary magic. **Oscar is fully rested after Oressa** (treat downtime as a long
rest); days through the replenishing wild restored him. Do not invoke fraying, "blurry," or
"thinning at the edges" for ordinary exertion. (Pull the Ch27 "you've gone blurry" reading-cost beat.)

### Tarn — his own identity (pick a lane; Cael owns "big")
Cael is the gentle giant: big, broad, slab-muscled. He keeps "big/broad." The only hard rule for
Tarn is: **don't call him big.** Tarn is a **fist-fighter** — forty years in the bowl, fights with
his hands, weathered and economical, the hidden hook underneath. Establish his identity ONCE and
lightly; do NOT keep reminding the reader he's small or that big is Cael's thing — turning one bad
tag into a repeated opposite tag is the same mistake inverted. Fix the "big man" refs pointing at
Tarn (Ch23) without replacing them with a smallness drumbeat.

### Oscar's progression — reader → field architect
Genre risk: his growth currently reads as "I understand more," not "I can do something I couldn't."
Shift it: reading is **input, not output**. Less "Oscar reads the thing and explains it"; more
"Oscar reads a fragment, makes an imperfect call, assigns roles, and commits before he's certain."
His new power is **judgment under incomplete information and command without control** — coordinating
the people who are the answer — not perfect interpretation. Make "doing nothing" an active discipline.
