# CHECKPOINT — First card list and balance (tabletop-developer pass)

**Run:** tabletop lane, tabletop-developer persona, AUTHOR. Item `t-0003-first-card-list-and-balance`.

## What I did
Authored `games/pretzels-and-beer/design/Balance.md` — the real card list at count against
`design/Systems.md`'s spine (`t-0002`), built the rate math and worked game, then attacked my own
numbers as a hostile optimizer and folded the fixes back into the delivered tables.

## Inputs read
1. `games/pretzels-and-beer/game-bible.md` — pillars, locked Decisions Log through D-023.
2. `games/pretzels-and-beer/design/Concept.md` — theme seed, suit/Keepsake vocabulary.
3. `games/pretzels-and-beer/design/Systems.md` — confirmed it exists and landed (`t-0002`); this pass
   was blocked on that and is unblocked. Pinned the engine-curve bands this pass's numbers build against.
4. Checked for `design/Theme.md` — still doesn't exist (`t-0001` still `status: draft`), so, matching
   Systems.md's own precedent, all names are Concept.md's placeholders / D-012's locked names.

## Deliverable
`games/pretzels-and-beer/design/Balance.md` — full contents:
- **51 Opportunity cards** at real name/cost/pay/memory/effect (Youth 12, Building 13, Prime 14,
  Later Years 12), **11 Wishes**, **18 Life Happens cards** (8 Gentle/6 Natural/4 Hard by D-013 mode).
- Cost-curve histograms and suit splits per chapter deck, plus an `[ASSUMED]` expected-draws model
  (~45% of turns are Take-Opportunity, from Systems.md's own worked example ratio).
- Rate math converting Savings/Spark/Years to a common Memory-per-Year unit, chapter by chapter.
- A full 16-turn worked game ("Dana") with running S/K/Memory totals citing real card names, plus two
  summarized comparison builds (Sam — rush, Ravi — Keepsake collector) for a 3-way score spread
  (37/39/41) and an explicit play-time statement (~53–74 min, fits the 45–75 pillar but tight).
- Three named degenerate strategies attacked with numbers: greedy rush (answered by the existing Wish
  bonus, no change needed), Live-bonus stacking (defended by the Year bottleneck, not a resource cap),
  and vote kingmaking (a real risk on this spread — fixed by making the vote simultaneous/secret instead
  of sequential, without touching the locked +3).
- First-player-advantage check (confirms Systems.md's chapter-rotation fix is sufficient) and the
  OQ-011 playtest this pass owned — found and fixed a real turn-1 Later-Years affordability cliff for
  resource-lopsided players by adding two cheap cards (component delta +2, closes OQ-011).
- Playtest protocol (5 ordered sessions, one question each) and a one-page data-capture sheet.
- Kill list: cut a dominated Building card (Study Group) and a redundant Wish (Craft and Trade); found
  and fixed two more dominated-card pairs in the rate-math audit (Dream House/Second Home, Management
  Role/Dream Job); recommended scoping the Friends module out of the first print-and-play batch.
- Two `[FOR THE AUTHOR]` flags (vote-value magnitude; Ring/Dog Keepsakes' deliberate singularity) and a
  Proposed Decisions block (D-024–D-028) for the bible fold.

## Held for later passes
`t-0004` prices the manifest against this doc's real counts. The author's call on the two
`[FOR THE AUTHOR]` flags. Playtest sessions (protocol written, not yet run — no table exists to run
them against).

## Confidence
High on the card list, rate math, and the two dominance fixes found and applied. Medium on the worked
score spread (one player fully turn-by-turn, two estimated) and the degenerate-strategy conclusions —
real numbers will move once playtested. Medium-low on the vote-kingmaker fix fully working, since
secrecy doesn't stop pre-game table talk; flagged explicitly for the open-vs-secret playtest to surface
what this pass couldn't predict from arithmetic alone.
