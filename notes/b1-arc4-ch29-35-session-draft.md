# CHECKPOINT — Arc 4 front half drafted: Ch29–35 (+ full-book review)

**Date:** 2026-07-13
**Session:** interactive (claude/session-cass6g) — not a nightly run
**Book:** Maker's Ladder — Book 1, *The Unfinished Apprentice*
**Task (author):** draft Ch29–35 (the beat that sets the crew toward Everset for the final climax) to the approved rev2 arc-4 outline; then review the full chapter set for tightness/flow/cohesion.

## What was drafted

All seven chapters written to `manuscript/makers-ladder/book-1-unfinished-apprentice/chapters/`, sequentially, each drafted after re-reading the previous. POV rotation per the rev2 outline (Ch30 Kessa locked; Cael's single POV at Ch34; Tarn none).

| Ch | Title | POV | Words | em/1k | Locked beats delivered |
|---|---|---|---|---|---|
| 29 | The Gate That Walks | Oscar | 4,219 | 6.6 | Hunter turn opens Arc 4; Ash snatch read as second captor; **villain seed** (the wax mark that isn't the House's; "the seat that wants it"); POV hard-cuts on the blink (rev2 binding) |
| 30 | The Trail That Ends at a Door | Kessa | 3,470 | 7.5 | ~Ch30 Kessa-POV reunion; trail ends mid-stride; the grown lane; manse wrongness read made/tracker (never deep-current); rescue math fails at the laid table |
| 31 | Tea With the Woman Who Took Him | Wick | 3,907 | 7.2 | Guest + niece reveal heard FRESH by Wick (Oscar pre-explained offscreen); Ash = helper, wants nothing for herself; Everset named as the seat/destination; single architect hint ("My uncle built more than towers. Some of what he built is still running."); door's first southward stir (one beat, held) |
| 32 | Quill | Oscar | 3,760 | 7.7 | Quill GIVEN, bond withheld (owl leans, won't come — Oscar's disbelief he's a person, unstated); talon-absence motif paid; Ash departs solo ("I broke alone" — the door-left-open inheritance); manse lapses (conjured-and-impermanent) |
| 33 | The Road South, Again | Kessa | 3,154 | 7.3 | Forward/tactical: the net (roads closing west→east), Corwen re-acquisition grounded (he doesn't chase, he shrinks the map); the decision to stand; Tarn names the waypost; Quill-refusal ritual observed; Oscar's skyline "snagging" from outside |
| 34 | The Waystation | Cael | 3,923 | 3.8 | **Corwen dies at the waystation, the blow Cael's, the killing is the cost**; wage-men offered surrender and released; Corwen "unwrites the warrant" of Cael's ward (made-work only, no deep-current); dying "Unfetched. Note it—"; the term-report discharges south; Tarn's hook NOT spent; Wick holds the line without burning anyone |
| 35 | Thin Country | Kessa | 3,489 | 6.0 | Aftermath/pivot (dread-leaning, deliberately different dials from Ch33): the kill changed nothing; the land honest-but-*short* (rhyme with the grey, explicitly contrasted); Wick's water-knocking = first faint threshold pressure seen from outside; killed-the-hand realization; marching order for the approach |

Total new prose ≈ 25.9k words. Book 1 now ≈ 107.7k words across 35 chapters (target 120–130k — on pace with Ch36–42 remaining).

Ch29 note: based on the PR #42 draft (which folded in the author's PR #28 feedback — the rebuilt fight, Ash's entrance preserved), then reconciled to rev2: added the villain seed (Corwen's wax mark + "I fetch what the paper names, whole, and I hand it up to the seat that wants it"), and cut the post-blink manse-interior ending to the binding hard-cut (reader shares the crew's ignorance through Ch30).

## Self-checks

- `node tools/cadence.mjs` run on every chapter; all seven within targets (em-dash ≤8/1k; "the way" tic ≤3 genuine — mostly 1–2; banned phrases: none; "not X but Y"/"that was the—" rationed).
- Guardrail 8-point pass per chapter (body-before-mind at the snatch, the reveal, the failed summoning, the kill, the pivot; failed jokes and human mess left un-tidied; POV metaphor fields kept — Kessa never "files"/"arithmetic", Cael no benedictions, Wick never analytical, Tarn finishes and stops).
- Reveal discipline held: no architect scope beyond Ash's single hint; no fair-copy method; no deep-current spectacle (Ch35's threshold pressure is body-only, via Kessa's outside view); the villain stays "the seat" — never named, never explained; Everset=Evermere itch escalated (skyline snags) but unresolved.
- Reading stayed made-only throughout (the thin country reads as the wrong *nothing* to Oscar — he can't tell which silence it is, and says so). Fraying never invoked.

## `[FOR THE AUTHOR]` flags (decisions taken or deferred — all revisable)

1. **Villain seed language (Ch29/31/34/35).** I used the outline's "the seat" as the authority-behind-Corwen and kept whatever *sits* it fully unexplained, per the rev2 reveal cadence. The recommended "Setter" identity is neither named nor foreclosed — all seeds are compatible with any of the outline's three villain options. **The Setter choice still needs your ratification before Ch36–38 are drafted.**
2. **Corwen's force at Ch34** = fourteen wage-men, deliberately pitiable (Cael's POV), three-then-more released on surrender per Cael's pre-agreed terms — humanizes the cost and isolates Corwen as the only unpitiable thing in the room. Restage if you want the fight uglier.
3. **The kill mechanism:** Corwen personally *holds* the improved collar shut on Oscar (ch29's was set-down; this one is maintained — that's why his death releases it, and why nothing gentler than killing him could). His coat is worked (turns thrown steel), so the shield blow below the ear is the one honest opening — Doss's failed shield doing the ending is deliberate.
4. **Corwen's death-report** ("a term written on the paper — *in the event the fetching fails*") makes the pawn-reveal concrete without naming the seat's occupant. It also hard-commits canon that the seat KNOWS the crew is coming from Ch34 onward.
5. **Ch35 "thin country"** — I invented the emptying-southward symptom set (traffic leaning north, wild sign skimmed, the honest-but-short land) as the approach's dread engine. It's designed to pre-figure the erasure-engine without any magic display. If you'd rather the approach country read normal until Ch36, Ch35's middle section is the surgical cut.
6. **Wick's door stir** (Ch31 one beat; Ch35 water-knocking): first faint pressure only, per the ledger ("threshold, not spectacle") — but it starts one chapter earlier than the ledger's "earliest Ch35–37" allows for Ch31's single sentence ("Later she'd wish she had"). It's one line and easily cut if you want the door fully silent until Ch35.
7. **Ash's goodbye monologue (Ch32)** commits new soft canon: *she broke from the line alone, in a room with nobody in it, helped only by someone who'd "walked out ahead and left the door open."* This grounds why she won't come to Everset. Flag for canon-keeper if kept.
8. **Quill behavior:** aloof/unsummonable but useful (scouts, warns, follows at its own altitude) — the outline's recommended option, dramatized nightly (Oscar's private failed call, watched by Kessa in Ch33).

## Queue hygiene (this branch)

Archived to `book/_archive/` with `status: rejected` + reasons: `b1-ch29-draft`, `b1-ch29-draft-rev1`, `b1-ch30-draft`, `b1-ch31-draft` — all superseded by this session's direct drafts. **PR #42 (the old Ch29 draft PR) should be closed without merging once this branch lands.**

## Full-book review

See `notes/b1-full-book-review-ch01-35.md` (same session) for the tightness/flow/cohesion review of Ch1–35 with findings and per-arc verdicts.
