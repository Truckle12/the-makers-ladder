# The Maker's Ladder — where things stand

Read this first, then `HOW-WE-WRITE.md`, then the Decisions Logs in the two bibles (they win where
anything disagrees). Updated at the end of every working session. Last updated **2026-11-14**.

The author decides on the Maker's Ladder Desk: https://claude.ai/artifact/8KKoDvLLVaELQs49snmwi9
Its source is `desk/ladder-desk.html` (publish to that URL to update it in place). His answers are
saved in its `decisions` store, one document per card id. Each ruling is recorded in the right
bible, then its card moves to the page's "Decided so far" list.

## How the author wants to work
- **Artifacts, always.** Anything he reviews reaches him as a claude.ai artifact with a clear ask and
  decisions he can make on the page. Not long chat messages, not files.
- **All open questions as cards at once**, each with a recommendation.
- **A heads-up before any draft starts.**
- Book work is committed straight to `main`.
- The rules for the prose itself are in `HOW-WE-WRITE.md`.

## Book 1 — *The Unfinished Apprentice*: finished, out with test readers
- 42 chapters, 118,552 words, revised through Batch 7 (2026-09-15).
- His printed author copy is with test readers. He expects formatting changes.
- Six structural fixes are proposed in
  `notes/review-2026-09-23-b1-developmental-and-b2-outline.md`. The plan is to decide them together
  with the test readers' notes, in one batch (card B1-1).
- **Pen name J. T. Kennyth, imprint Lanternhouse Press.** Nothing was registered under the old
  names. The cover image, the typesetting defaults and the EPUB build still carry the old names.
- **Before release:** test reader feedback; a print-resolution cover with a 0.99" spine and the new
  pen name; the new names on the title and copyright pages; KDP's AI disclosure.
- He intends to publish on KDP at no cost: the free KDP ISBN for the paperback (Amazon lists it as
  "Independently published"; Lanternhouse Press still goes on the cover and copyright page), and the
  ebook with Lanternhouse Press in the publisher field. Worksheet:
  `book-1-unfinished-apprentice/reference/publishing-kdp-listing.md`.
- **Proof builds:** `tools/typeset-proof.mjs` is a copy of the proof builder. It needs
  `playwright-core`, `pdf-lib`, `hyphen` and three font families (EB Garamond, Libre Baskerville,
  Crimson Pro) installed, and its paths edited. The EPUB and Word builders were never committed and
  must be rebuilt when a new proof is needed.
- **Audiobook (asked, not started):** about 624,000 characters, roughly 12.8 hours, an estimated
  $100–200 on ElevenLabs. A one-chapter test was offered and not approved. Casting sheet:
  `book-1-unfinished-apprentice/reference/audiobook-pov-sheet.md`.

## Book 2 — *The Unset Journeyman*: outline approved at rev5, nothing drafted
Ruled since rev5 (all in the Book 2 bible's log): no time jump · Oscar narrates his own mirror duel ·
the Wick rule · Ash's mother walked out first, made the cradles, and went west over the sea (proof: a
coin with no loop) · Ash's five chapters approved · Cael's romance beat is the person keeping his
hearth (Ch5), Kessa's is a human working for the old families in Everset (Ch24 on) · the crew
reunites at the milestone outside Everset and stays in its country.

**Open on the Desk** (each card has a recommended pick):
- B2-4a Kessa's scar · B2-4b her gift to the door-hearth · B2-4c Tarn's lost word · B2-4d Cael's cost
- B2-5 the pressure on Wick's chapters
- B2-6 tighten to 43 chapters (the proposed map is in
  `book-2-unset-journeyman/reference/book-2-rev6-proposals.md`)
- B2-7a/b/c/d names: the third, Ash's family, Ash's mother, Kessa's person
- KIT: the Book 2 drafting kit
- The page's "Accept all of Claude's picks" button has not been tested with a real save.

**Chapter 1 needs B2-5, B2-6 and KIT answered first.** Chapter 1 is Wick on the far side, so B2-5
decides what happens in it; B2-6 renumbers the outline.

**After the cards are answered:**
1. Fold every ruling into the outline as rev6.
2. If KIT is approved: a short digest of what is true now; voice sheets for Ash and Feathers; a
   Book 2 narrator map in `tools/cadence.mjs`; a running continuity ledger.
3. Heads-up to the author, then draft Chapter 1 as a pilot. After his read, one arc at a time.

## Book 3 — title not chosen: holds only, no plan
- The seat is a ward keyed to the bloodline. The master went through to hold the door from inside.
- The twin blank in Wick's pocket leans away from her, toward the sealed wound.
- Two sentries on the far side (the master and the third), and a bird on both sides of the wall.
- Ash's road over the sea; the twelfth left unfinished; the Redactor spent, not unmade.
- Open on the Desk: B3-title (*The Unmade Master* vs *The Made Master* / *The Remade Master*; the
  choice decides whether the ending is triumphant or tragic) · B3-spine (a one-page spine before
  Book 2 is drafted, so its setups point somewhere real) · B3-edda.

## What was retired on 2026-11-14
The overnight engine last landed book work on 2026-07-13; everything since was written in sessions.
The books no longer use it. Moved, not deleted: the parked Chapter 1 queue item
(`book2/_archive/`), the June pipeline plan and the Arc 1–4 working documents
(`book-1-unfinished-apprentice/reference/_archive/`), and Book 1's 53 run notes
(`notes/_archive/book-1/`).
