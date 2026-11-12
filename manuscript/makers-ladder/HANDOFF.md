# The Maker's Ladder — handoff to the desktop session (2026-11-12)

Written by the cloud session that carried the books from Batch 6 through the Book 2 decisions. The
author is moving all book work to a desktop session called "the makers ladder". Read this first, then
`STATUS.md` beside it, then the two bibles' Decisions Logs (they win where anything disagrees).

## How the author wants to work (his words, in force)
- **Artifacts, always.** Anything he needs to review goes to him as a claude.ai artifact with a clear ask
  and decisions he can make on the page. Not chat walls, not files.
- **The live decision page is the Maker's Ladder Desk:** https://claude.ai/artifact/8KKoDvLLVaELQs49snmwi9
  Its source is `manuscript/makers-ladder/desk/ladder-desk.html` (publish with that URL to update it in
  place). It declares the `db` capability; his answers are saved in the collection `decisions`, one
  document per card id. Read them with the artifact data tool, record each ruling in the right bible,
  then move the card to the page's "Decided so far" list.
- **All open questions as cards at once**, each with a recommendation. He does not want them drip-fed.
- **Concrete, not abstract.** This is a fantasy novel built on D&D. He has pushed back hard on abstraction.
- **THE WICK RULE (binding):** "Wick's chapters and the far side need to be fucking awesome and shit
  actually needs to happen. It cannot be bland or all inner monologue."
- **Oscar's register is locked:** wizard, scholar, a bit mechanical. Never roughen it.
- **Nothing spends without a heads-up.** `book2/b2-ch01-draft.md` is parked at `status: draft`. Do not
  set anything `ready` without telling him the cost first.
- Wick is 16: child safety is absolute, and Book 2 has no Wick romance.
- He pushes straight to `main`. Commits end with the attribution lines the session is given.

## Decided (all recorded in the bibles)
- **Pen name: J. T. Kennyth. Imprint: Lanternhouse Press.** Nothing was registered under the old names
  (J. K. Alberich / Far Side Press). The cover image, the typesetting script defaults and the EPUB build
  still carry the old names and need updating before any new proof.
- **Book 2:** no time jump · Oscar narrates his own mirror duel · the Wick rule · Ash's mother walked
  out first, made the cradles, and went west over the sea (proof: a coin with no loop) · Ash's five
  chapters approved and in the outline · Cael's romance beat is the person keeping his hearth (Ch5),
  Kessa's is a human working for the old families in Everset (Ch24 on) · the crew reunites at the
  milestone outside Everset and stays in its country (Ch18 rewritten).

## Open on the desk (cards unanswered as of this handoff)
B2-4a Kessa's scar · B2-4b her gift to the door-hearth · B2-4c Tarn's lost word · B2-4d Cael's cost ·
B2-5 the pressure on Wick's chapters · B2-6 tighten to 43 chapters · B2-7a/b/c/d names (the third,
Ash's family, Ash's mother, Kessa's person) · B3-title · B3-spine · B3-edda · KIT (build the Book 2
drafting kit) · B1-1 when to change Book 1. Each card carries a recommended pick; the page has an
"Accept all of Claude's picks" button that has not been tested with a real save.

## What happens after the cards are answered
1. Fold every ruling into `book-2-unset-journeyman/reference/book-2-outline.md` as rev6 (renumber to 43
   chapters if B2-6 is accepted; the proposed map is in `book-2-rev6-proposals.md`).
2. If KIT is approved, build: a short canon digest of what is true now; voice sheets for Ash and
   Feathers; a Book 2 narrator map for `tools/cadence.mjs` (it currently treats every Book 2 chapter as
   Oscar's); a running continuity ledger; the Wick rule in `prompts/personas/chapter-review.md`; and fix
   the drafter persona's "8-point self-check" (the guardrail now has 10).
3. Refresh the stale text in `book2/b2-ch01-draft.md` (it still cites rev3/rev5). Keep it `draft`.
4. Ask before spending, then draft Chapter 1 as a pilot. After his read, draft an arc at a time.

## Book 1 state
Finished: 42 chapters, 118,552 words, through Batch 7. His printed author copy is with test readers; he
expects formatting changes. Six structural fixes are proposed in
`notes/review-2026-09-23-b1-developmental-and-b2-outline.md`; the plan is to decide them with the test
readers' notes in one batch. Release blockers: test reader feedback, a print-resolution cover with a
0.99" spine and the new pen name, the new names on the title and copyright pages, KDP's AI disclosure.
He intends to publish on KDP at no cost: free KDP ISBN for the paperback (Amazon lists it as
"Independently published"; Lanternhouse Press still goes on the cover and copyright page), the ebook
with Lanternhouse Press in the publisher field.

## Audiobook (asked, not started)
About 624,000 characters, roughly 12.8 hours. Estimated $100–200 on ElevenLabs. A one-chapter test was
offered and not approved. Casting sheet: `book-1-unfinished-apprentice/reference/audiobook-pov-sheet.md`.

## Things that live only in the cloud session's scratch space
The typesetting and EPUB build scripts with their fonts and node modules. `tools/typeset-proof.mjs` in
the repo is a copy of the proof builder; it needs `playwright-core`, `pdf-lib`, `hyphen` and the three
font families (EB Garamond, Libre Baskerville, Crimson Pro) installed locally, and its paths edited.
The EPUB and Word builders were never committed; rebuild them when a new proof is needed.
