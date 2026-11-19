# How a Maker's Ladder chapter gets written

The books are written in a working session with the author, not through the overnight engine. There
is no queue item, no agent branch, no pull request and no label. (Since 19 Nov 2026 the books have a repo of their own; the engine stayed behind in the old one. Old queue items are in `book/_archive/` and `book2/_archive/`.)

## What is true, and where
| What | Where |
|---|---|
| Series canon and the series Decisions Log | `book-1-unfinished-apprentice/reference/book-bible.md` |
| Book 2 canon and its Decisions Log | `book-2-unset-journeyman/reference/book-bible.md` |
| Book 2's plan, chapter by chapter | `book-2-unset-journeyman/reference/book-2-outline.md` |
| Style rules and the self-check | `book-1-unfinished-apprentice/reference/Oscar_StyleGuardrail.md` |
| Each narrator's voice | `book-1-unfinished-apprentice/reference/pov-profiles/` |
| Where things stand and what waits on the author | `STATUS.md` |
| The author's decisions page (the Desk) | https://claude.ai/artifact/8KKoDvLLVaELQs49snmwi9 (source `desk/ladder-desk.html`) |

The bibles' Decisions Logs win over every other file.

## One chapter, five steps
1. **Draft.** The session writes the chapter to its outline entry, following `briefs/drafter.md`.
   The author gets a heads-up before a draft starts.
2. **Measure.** `node tools/cadence.mjs <chapter> --pov <narrator>` and `node tools/repeater.mjs
   <chapter>`. Revise until the numbers pass. Never count by hand.
3. **Cold read.** A fresh reader with no view of the draft's history reads it against
   `briefs/reviewer.md` and returns GO, REVISE or BLOCK with quoted lines. Fix what it finds. A
   second reader (`briefs/cold-reader.md`) is for arc ends and anything the author will judge as a
   whole.
4. **The author reads.** The chapter goes to him as an artifact with a clear ask. His notes are
   applied; anything he rules goes into the right bible's Decisions Log the same day.
5. **Commit** to `main` (`book2: chNN draft`), and update `STATUS.md`.

Book 2 drafts Chapter 1 as a pilot, then one arc at a time with his read at each arc's end.

## Rules that never bend
- **The Wick rule (author):** "Wick's chapters and the far side need to be fucking awesome and shit
  actually needs to happen. It cannot be bland or all inner monologue."
- **Oscar's register is locked:** wizard, scholar, a bit mechanical. Never roughen it.
- **One narrator per chapter**, third person limited, past tense, in that narrator's own words. No
  other narrator borrows Oscar's vocabulary (the cadence tool checks this).
- **Wick is 16.** Child safety is absolute. Book 2 has no Wick romance.
- **Concrete, not abstract.** This is a fantasy novel built on D&D; none of the game's words reach
  the page.
- **New canon is the author's.** A choice the outline does not cover is flagged `[FOR THE AUTHOR]`
  and put on the Desk as a card with a recommendation. All open cards go to him at once.

## Tools
- `tools/cadence.mjs`: dash density, the "the way" habit, banned phrases, the rationed patterns and
  the vocabulary lock. It only knows Book 1's narrators, so pass `--pov` for Book 2.
- `tools/repeater.mjs`: repeated phrases across chapters.
- `tools/typeset-proof.mjs`: the print proof (needs fonts and packages installed; see `STATUS.md`).
