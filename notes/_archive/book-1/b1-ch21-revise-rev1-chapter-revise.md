# Chapter 21 — "The Cull" — Revise Pass (rev1, edits applied)

**Target:** `manuscript/makers-ladder/book-1-unfinished-apprentice/chapters/chapter-21.md`
**POV:** Oscar (voice profile applied: proof/grammar/reading/identity; wit-as-defense; intellectualizes fear).
**Source feedback:** PR #39 (Truckle12) — two directives, both treated as binding shape-approved.
**Verdict:** **GO** (with edits applied in place). No blocking canon or hard-line issues.

---

## 1. Review findings (4-stage)

### Editor (structure / pacing / earned beats)
- Strong chapter. Clean three-beat shape: the forked road (the country as a net), the crossing (brace saves Cael), the return (unmaking the Cull). The moral turn — Oscar choosing the loud, un-strategic act because he is *tired of being the kind of thing they made* — is earned and lands.
- **Primary structural problem (the PR #39 note):** two catastrophic overdraws in one afternoon read as equal. The **brace** was written as total depletion ("cold and total," reserve emptied, "scoured down to a thin grey thread," "you can barely stand"), and then after a grassy rest Oscar spent an even *larger* working (unmaking the Cull) to a second total collapse. The first max-out drained the tension from the second and was internally incoherent (nothing left to spend, yet he spends more). **Fixed** by compressing the brace cost (see change log).
- **Secondary (the optional PR #39 note):** the makers-built-the-engine / built-him parallel was articulated **three** times (L75 narration, L93 interior restatement, L97 dialogue). The middle interior restatement (L93) was pure re-statement of L75. **Trimmed** to a double.
- Oscar-POV discipline holds: reading is scoped to a *made* thing (the battery), unmaking is of a *worked* thing — both correct per the made-only rule. His progression reads as "can now do a thing he couldn't" (the brace finally holds; then he unmakes a war-engine), not merely "understands more." Good for the reader→field-architect arc.

### AI-tell (counts via `tools/cadence.mjs`, before → after)
| Metric | Before | After | Target |
|---|---|---|---|
| em-dashes /1k | 45 raw → **13.0/1k** | 27 raw → **7.8/1k** | ≤8 ✅ |
| "the way" genuine similes | ~15 flagged (many genuine) | **3** (L29 heart, L31 voice-played-back, L109 held-breath) | ≤3 ✅ |
| banned phrases | none | none | 0 ✅ |
| "not X but Y" | 3 (all genuine contrasts) | 3 | rationed ✅ |
| "that was the" | 6 (mostly genuine turns) | 6 | rationed — left as-is |

- The em-dash load was a genuine default-cadence tell (appositive and setup–reversal dashes). Thinned by converting the *decorative* ones to commas/colons/periods while **keeping** dashes that carry real rupture or interruption (the real-time panic read L37; "Now—*move*—" L41; the brace-writing turn L49; the horror-swerve L47/L51; Cael's appositive L65; the closing city reveal L121). Cadence fixed, not just the count.
- "the way" tic cut from ~15 to 3 by swapping to `as` / `like` / restructuring. Kept only the three sharpest similes.
- "that was the" (6) and "not X but Y" (3) left in place — each surviving instance is a genuine turn (e.g. L47 "That was the part Oscar would keep"; L99 "not agreement, exactly, but…"), not a routine pivot. Within ration.

### Consistency (bible + prior chapters)
- **"Your polite friend" / Corwen's note** (L15, L87): CONSISTENT. "Polite man/friend" = Corwen, established Ch18 (L103/113/119) and Ch19; Corwen's note is on the page in Ch19 (signed *Corwen*, L100). No violation.
- **"the binding in the square"** (L53): CONSISTENT — the Ch17 Tithe confrontation, where Oscar's big working landed (echoed Ch18 L75 "the same as in the square").
- **Refrain** "He was getting better. It might not be enough… a man could stand on that" (L73): deliberate callback to Ch18 L75. Kept intact.
- **Fraying:** invoked only at the unmaking now (the true extreme overreach) — matches the bible's "fraying = rare loaded gun for genuine extreme overreach," and is *more* compliant after compression (one fraying moment, not two). Ch21 predates Oressa, so the "fully rested post-Oressa" rule doesn't constrain it.
- **"big man"** (L111) = Cael — correct owner of "big." No Tarn confusion (Tarn not present).
- **Voice fix:** Kessa narrated "She'd done the same **arithmetic**" (L17) — arithmetic is barred from Kessa's register (reserved for Oscar/the Tithe). Re-roughened to her tactical field: "She'd made the same call."

### Hard lines
- No pet-name approval, no minor sexualization, no D&D/game vocab, no reading of living/minds/nature (the battery is a made working — in scope). No fraying-as-routine. Reveal discipline intact (Everset/Evermere echo untouched). **All clear.**

---

## 2. Change log (before → after + reason)

1. **L17 (Kessa voice).** "She'd done the same arithmetic." → "She'd made the same call." — *"arithmetic" is barred from Kessa's register (Oscar/Tithe only); moved to her tactical field.*
2. **L53 (BRACE COMPRESSION — PR #39 directive 1).** Removed "cold and total" and "his whole self scoured down to a thin grey thread"; "his reserve went out… cold and total" → "a good part of his reserve went out… **Not the bottom.** Close enough to it, though, and fast enough, that the edges of things went thin and grey **for a breath before they steadied.**" — *Makes the brace a hard-but-recoverable hit so the follow-up unmaking is the true near-collapse. Also −2 em-dashes.*
3. **L65 / L73 (depletion language).** "scoured grey" → "grey and worn through"; "scoured-out in the grass" → "wrung-out in the grass." — *Removes the "scoured/emptied" drumbeat between the two costs so the brace doesn't read as total; also thins the repeated word "scoured."*
4. **L103 (relocate the near-collapse imagery).** "his scoured reserve thinning toward something that felt less like tiredness… the grey thread he'd been reduced to fraying finer" → "his reserve thinning down and down, past tiredness… **the last of him drawn out to a thin grey thread that frayed finer** the longer he held the read." — *The thin-grey-thread / fraying image now originates HERE, at the genuine extreme overreach — the true near-collapse — instead of being a callback to the (now-compressed) brace.*
5. **L93 (TRIM THE TRIPLE — PR #39 directive 2).** Cut the middle interior restatement: "He thought about the makers' hand that had built the killing-engine and the makers' hand that had built him—the same slope, the same patient cleverness…" (deleted). Also changed "sorted the world **by the same arithmetic**" → "sorted the world **the same way, keeping some and culling the rest.**" — *Reduces the built-it/built-him parallel from three articulations to two (L75 narration + L97 dialogue); drops a ledger-word echo of L75's "accounting."*
6. **Em-dash cadence thinning (decorative → commas/colons/periods), keeping rupture dashes:** L5, L7, L13, L29, L35, L39, L43, L49, L75, L81, L87, L109, L111. — *Brings em-dashes 13.0 → 7.8/1k; fixes the default setup–reversal rhythm, not just the count.*
7. **"the way" tic → `as`/`like`/restructure:** L5, L35 ("as a war-galley is a rowboat"), L39, L51, L65, L75, L91 ("the same as he set his body in gaps"), L103 (×2), L107 ("but as a structure fights"). Kept L29/L31/L109. — *15 → 3 genuine similes.*

*(No events, scenes, or canon changed. All edits are surgical cadence/voice/redundancy work plus the two shape-approved compressions.)*

---

## 3. Eight-point self-check
1. **3+ paragraphs landing on polished abstract clauses?** No — landings vary (action, dialogue, mundane object: "at things that were no longer there," "took his weight without a word," "The road through was only a road"). ✅
2. **Em-dash reversal beat >~1/page?** Thinned to 7.8/1k; cadence varied, not just counted. ✅
3. **Non-Oscar POV drifting into Oscar's register?** Fixed Kessa's "arithmetic" (L17). Cael/Wick lines stay plain. ✅
4. **Body before mind at the big beat?** Yes — the brace fires and *then* the cost takes him at the knees before any interpretation; the unmaking's fraying is felt before named. ✅
5. **Genuine organic mess?** Cael fumbling his gratitude ("That's— I'm the one who does that"); Oscar's dry "I just got there first, the once." ✅
6. **Reserved "that was the —" / "not X but Y" for real turns?** Yes — surviving instances are genuine. ✅
7. **Protected lexicon intact, generic abstractions concretized?** Lance/brace/the deep current/unmaking/reading preserved; grey-thread now anchored to a specific overreach moment. ✅
8. **Any character landing the perfect line twice?** Cael's gratitude is deliberately imperfect/broken; Oscar deflects rather than lands a clean aphorism. ✅

---

## 4. [FOR THE AUTHOR] — flags (no major change made)
- **None requiring shape approval this pass.** Both PR #39 items were shape-approved by you in-thread, so they were applied, not flagged.
- *Observation only (no action taken):* unmaking the Cull "writes Oscar's name on the road" loudly, which dovetails with the House pressure intensifying into the Ch23–24 cordon. Reads as intentional setup, not a contradiction — noting it so the through-line stays deliberate.

---

## Top 3 priorities (all done this pass)
1. **Compress the brace cost** so the unmaking is the true near-collapse (PR #39 directive 1) — **applied** (L53/L65/L73/L103).
2. **Trim the built-it/built-him triple to a double** (PR #39 directive 2) — **applied** (L93 middle restatement cut).
3. **Cadence/voice cleanup** — em-dashes 13.0→7.8/1k, "the way" 15→3, Kessa's "arithmetic" re-roughened — **applied**.

**Confidence:** High — the two binding directives are cleanly resolved, cadence is within target, and no canon/hard-line issues remain; the only judgment calls (which decorative dashes to keep) preserve the voice.
