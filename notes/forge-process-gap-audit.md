# The Forge — process gap audit

**Question:** why did Book 1 get finished in an interactive chat instead of through the system we built?

**Method:** 6 read-only subsystem surveys (engine, personas+tools, hub, bot+skills, CI/labels, canon layer)
→ 4 independent gap lenses → synthesis → adversarial critique. 12 agents, no files modified.
Every headline number below was **re-verified by hand** after the audit; where the audit and the
re-check disagreed, the re-check wins and is marked.

---

## The diagnosis, in one sentence

**The system automates the part that needs judgement (generating prose) and leaves to a human the parts
that are mechanical (measuring, tracking state, reconciling canon) — so every real unit of work had to be
dragged back into a context where deciding and verifying could happen in the same head.**

The engine's atom is *(one persona × one file × one night × one `claude -p` call)*. The book's atom is
*(one decision × N chapters × iterate until the numbers pass)*. Nothing in the repo can express the second.
`orchestrate.mjs:158` is a single un-looped `await sh(...)`, and its only success predicate is
`if (record.diffstat)` at `:190` — "the diff is non-empty." A draft→measure→review→revise cycle that
took me ~18 minutes in one context (Ch40: draft → fight-choreographer notes → revise → repeater fix,
all inside one hour) costs four queue items, four cold-start amnesiac agents, four label actions and
four nights in the pipeline.

---

## Verified evidence

| Claim | Verified |
|---|---|
| Personas that were ever queued more than once | **3 of 22**: `chapter-revise` ×13, `storyboard-architect` ×5, `chapter-drafter` ×5. Everything else ≤1. |
| `fight-choreographer` — best notes in the repo (66 KB) — queue items | **0.** It has never run through the engine. |
| Chapters over the ≤8 em-dash/1k guardrail | **24 of 42.** Ch01–17 all fail (worst: ch15 at 16.4). Ch29–42 all pass. |
| Chapters that had a pass, produced notes, flipped status, and are *still* over target | **ch19 (8.4), ch20 (13.3)** — `notes/b1-ch19-revise.md`, `notes/b1-ch20-revise.md` exist. |
| Chapters in Ch18–28 that pass | **only ch18, ch21, ch26, ch27** — and ch18/ch21 are exactly the two with a `-rev1` follow-through item. |
| Book-lane agent PRs merged, ever | 6 (PRs #15, #16, #17, #49, #51, and the Ch29 draft #42). |
| Labels: `apply` / `canon` / `next` firings | **zero.** |
| Ch29–42 (the whole back half) | 20 direct commits on `claude/session-cass6g`. Zero engine runs. |

The two-chapter tell is the cleanest proof in the repo: **a pass ran on Ch19/Ch20, wrote notes, marked
itself done, and changed nothing measurable.** That is the system working exactly as designed.

---

## ⚠️ Two things that need a decision before the next cron

**1. Two live `status: ready` items would spend Opus tonight — and one of them would damage canon.**

- `book/b1-arc4-outline-rev2.md` → `persona_name: storyboard-architect`,
  `target: reference/arc-4-outline.md`. That is the file I just filled with `[DRAFTED]` markers and
  AS-DRAFTED blocks for Ch36–42. A storyboard pass would rewrite the outline **for a book that is
  already written.**
- `book/b1-ch21-revise.md` → `chapter-revise` on `chapter-21.md`, superseded by `b1-ch21-revise-rev1`
  (merged as PR #51).

This is not a money leak, it's a canon-loss risk, and it exists because **`groom.mjs` has no concept of a
stale `ready`.** The money rules in CLAUDE.md are enforced by human memory, and human memory just failed
for eleven days. *(Tell me and I'll archive both — I have not touched them.)*

**2. Latent prompt-injection in the label pipeline — low severity today, cheap to close.**

`advance-on-label.yml` runs `on: pull_request_target` with `contents: write`. `advance-from-pr.mjs:38-42`
harvests comments and reviews from **any non-bot login**, and `:80-81` stamps them
*"Incorporate this reviewer feedback as binding direction; where it conflicts with the task above, the
feedback wins."* That text is committed to `main` and later executed by an Opus agent with
`--permission-mode acceptEdits` and `Write`/`Edit` allowlisted.

**Verified mitigating fact:** the repo is **private, 0 forks, you are the sole collaborator.** So this is
currently unreachable. It becomes real the moment you add a collaborator or make it public. One-line fix:
filter `fb` to `pr.author.login` + an allowlist.

---

## Findings

### 1. The loop cannot close inside one context — the reviewer is always a stranger

One item = one persona = one invocation. `session_id` is captured (`orchestrate.mjs:167`), written to
results.json, and **never reused** — `--resume` appears only in `bot/lib/claude.mjs`. The book lane
defaults notes-only; `fight-choreographer.md:3` says "a separate reviser applies edits"; the hand-off is
the `apply` label, which has fired zero times.

The design already pays the tax and admits it: the persona is required to emit "a short KEEP list so the
reviser doesn't sand off what works" — an instruction that exists *only* because the reviser is an
amnesiac stranger. In this session there was no KEEP list problem, because the reviewer and the reviser
were the same context.

### 2. A decision has no identity, so the system can ask but has nowhere to receive

The personas escalate well — `notes/b1-ch40-fight-choreographer.md` has numbered `[FOR THE AUTHOR]`
options with recommendations. You answered by **hand-editing a completed run's notes file**
(`notes/b1-ch29-ch34-fight-choreographer.md`, "author chose option (b)"), and I transcribed ten rulings
from one chat message into prose across three reference files.

`tools/author-review.mjs:18` is `const MARKER = /\[FOR THE AUTHOR\]/i` — an occurrence *counter* with no
open/closed state. It counts the line in `arc-4-outline.md` that merely *describes* the convention, and
counts already-resolved flags as open. The committed `AUTHOR-REVIEW.md` says 7 flags from 2026-07-03;
re-running it today reports 53 across 15 files. `prompts/personas/flag-resolver.md` — the only automated
closer — keys on `D-0NN` ids: the *game* bible has 32 of them, `book-bible.md` has **zero**.

**Root cause:** escalations and rulings are strings found in files, not records with identity, state, and
a resolution link. No addressable unit ⇒ no reply slot ⇒ every answer arrives as chat prose.

### 3. The control plane models the work, never the book

"What are the POVs for the rest of the chapters?" and "what happened to Wick's token?" were unanswerable
by any component. No chapter file has frontmatter. The nine tables in `web/lib/db.js` have no
chapter/POV/word-count/pass-history column. `web/app/api/chapters/route.js` is a bare `readdirSync`.
The bot is grounded in `forge queue --json` — queue metadata, not book state.

The one authoritative-looking answer in the repo is **wrong**: `book-bible.md:17` lists Wick's POV
chapters as "Ch12, Ch28, Ch31". Ch37 and Ch41 are also hers.

### 4. There is no post-condition — "non-empty diff" is the entire success test

`orchestrate.mjs:168` records `is_error: true` into a note and then falls straight through to
`git add -A` (`:179`) and `gh pr create` (`:210`). `tools/cadence.mjs` exits non-zero only for a *missing
file*; "OVER target" is stdout prose that nothing reads. `book-quality-gate/SKILL.md:36` says the quiet
part out loud: *"there is no CI gate. The pass/fail call is yours."*

That's why 24 of 42 chapters are over a guardrail the repo has had a measuring tool for since June.
**Detecting it never needed an engine, a persona, or a night.**

### 5. Canon has no fact identity and no computable blast radius

`canon-keeper.md` says update "the affected entry" (singular). The shield ruling required rewriting the
same fact at **five sites in one file**. The `the deep → the far side` rename landed at `book-bible.md:193`
and missed `:241`, plus `pov-profiles/wick.md` and `Oscar_StyleGuardrail.md` — whose protected lexicon
*still* fuses "the deep / the deep current", the exact conflation `book-bible.md:150` headlines as
**"DO NOT CONFLATE"**. My own commit claims "prose blast radius was one line in Ch20"; `chapter-20.md:7`
still carries the retired term.

The deepest version of this: **the Ch34 shield error happened because the agent faithfully obeyed a wrong
bible.** No amount of prompt discipline fixes that. Nothing in the system reconciles bible against prose,
so a wrong fact propagates at machine speed and is caught only by a human holding Ch14 and Ch34 at once.

### 6. Context is passed by value at emit time and never re-bound

The single `draft` firing embedded PR #10's entire 729-line outline into 13 queue items. Every archived
item's `rejected_reason` records the resulting drift ("drafted to the rev2 outline (Wick-POV swap per
rev2)"). `advance-from-pr.mjs:105-108` has a comment explaining that the file-*reference* form would make
"a canon-labeled outline fix reach every later chapter automatically" — added one day *after* the only
`draft` firing, so it has never executed.

Also: `revise` forwards human comments but **never the agent's own `notesPath`**, which the engine
computes and results.json records — so the next agent can't read the review that caused it to exist.
And the author's quoted context is truncated to 300 chars in two places, mid-word, then labelled
*"binding direction."*

### 7. Overnight mode is unobservable and unbudgeted

`runs/` is gitignored and currently empty; nothing in `web/` or `bot/` reads it. `record.cost` is assigned
inside the *success* branch, so failed items report $0. Every rehearsal affordance (`--dry-run`, the
`CLAUDE_BIN` mock) is CLI-only — the hub's `runNow` passes a fixed argv with no flag pass-through and no
cancel. After a night, what a human actually sees is: some draft PRs, maybe.

---

## Three defects that will silently defeat any fix built on top of them

Found by the adversarial pass; all three verified.

- **The claim lock does nothing.** `orchestrate.mjs:5` promises "atomic lockfile, so re-runs don't
  double-process", but `claim()` writes into `runs/<RUN_ID>/claims/` where `RUN_ID` is a fresh
  per-process timestamp. **Two processes never share a claims directory.** The hub's `runNow` spawns
  `orchestrate.mjs <lane> --only <id>` on demand while the cron runs the same lane — both claim, both
  branch, both commit, both spend. The only real guard is a CI-only `gh pr list` dedupe that local
  hub-driven runs skip entirely.
- **`enqueue()` is a frontmatter bulldozer.** `web/lib/engines/quill.js:45-48` rebuilds queue frontmatter
  from a **fixed 9-key literal** with `max_turns: 25` hardcoded, and re-runs it on create/run/promote/park.
  Any new frontmatter key — `canon_file:`, `stages:`, `gate:`, `targets:` — is silently erased on the next
  button press. Every frontmatter-based proposal is dead on the hub without a passthrough here.
- **The hub cannot queue a generative pass at all.** `FORGE_WORKFLOWS` has 14 entries and **none** maps to
  `chapter-drafter`, `line-reviser`, `canon-keeper`, or `storyboard-architect`. `tasks/route.js` hard-rejects
  anything not in the registry. So "the pipeline never fired" is partly a missing-UI problem, not only a
  design flaw — and that's three object literals, not an engine change.

---

## What to build, in order

The audit's first draft recommended a `--resume` multi-stage engine loop as step 1. **The critique killed
that and I agree with the critique:** it multiplies unattended Opus spend before any budget control exists,
and it reimplements in engine code something `prompts/advance-idea.md` already does in a template. The
ideas lane *already* has draft → self-critique → revise in one invocation. `prompts/book-pass.md` is
18 lines with no self-critique stage. **That gap is the whole difference, and it's a template edit.**

1. **Rewrite `prompts/book-pass.md` on the `advance-idea.md` four-stage pattern**, and add
   `{{canonFile}}` from `laneCfg` (already in scope at `orchestrate.mjs:104-106`) so every book pass reads
   the bible and honours the Decisions Log. **Two templates + one line of engine code, retroactive to all
   20 existing book items, immune to `enqueue()`.** Highest leverage per byte in the repo.
2. **Put `cadence.mjs --json` and `repeater.mjs` in a plain PR check.** $0, ~1 second, no LLM, no queue,
   no night. This is what 24 failing chapters actually needed. Do not route a deterministic check through
   the most expensive substrate available.
3. **`tools/queue-audit.mjs` + a per-run spend cap** — every `ready` item with age, superseding items,
   estimated spend, as a pre-nightly annotation step. Before anything that increases per-item turns.
4. **Fix the two silent defeaters**: the claim lock, and the `enqueue()` frontmatter passthrough.
5. **Then** identity: `tools/index.mjs` + chapter frontmatter → `state/index.json` (POV, words, cadence,
   last pass, open flags), then `D-0NN` decision records and a state-aware `author-review.mjs`.
   *De-risking note: adding frontmatter to 42 chapters is safe — `web/lib/book-doc.js`,
   `markdown.jsx`, and `cadence.mjs` all already call `stripFrontmatter()`.*
6. **Only then**, if the four-stage template demonstrably isn't enough, a real engine stage loop.

**CI runs Node 20; your box runs 24.** Any new `tools/*.mjs` must be written to the v20 API or it will
pass locally and fail only in the unattended run — where the evidence is gitignored.

---

## Do not build

- **A chat channel bolted onto pull requests.** `advance-from-pr.mjs` snapshots the PR once at label time;
  inline review comments are never queried; an empty-bodied review is dropped. The reply quantum is 24
  hours and one full artifact regeneration. PR #38's "prove me wrong or we find a new villain" was
  answered twelve days later by a chat commit. No polish fixes that substrate.
- **More personas.** 22 exist; three have ever been used twice; `authors-chair.md` (the most elaborate
  file in `prompts/personas/`) has never run. The bottleneck is not roles.
- **RAG / embeddings over the manuscript.** The drafting bundle is ~30% of a 200k window. What binds is
  `maxTurns: 25` and the absence of an index. A structured chapter/POV index beats vector search for
  "who knows what by Ch31," which is the question that actually breaks.
- **A second engine (Crucible/Anvil).** Resist until the first one can close one loop.
- **Blocking CI gates on merge, or auto-merge.** Keep the human merge. Gates belong *inside* the run.

**The boundary I'd draw:** async should own only work with a **computable post-condition** — cadence
sweeps, repetition sweeps, canon-divergence reports, index regeneration, flag aggregation. Almost all of
those need no LLM at all. **Stay interactive forever:** villain selection, arc shape, thematic rulings,
first-read reaction to prose, and anything whose natural exchange is two turns ("no, the other one").
You already called this in your first message of the session. You were right, and the correct conclusion
is stronger than you put it: it isn't just outlines — it's every judgement-dense step, and the current
split is precisely inverted.

---

## Open questions for you

1. **Archive the two live `ready` items?** (Say the word — untouched so far.)
2. **What is overnight actually *for*?** If the answer is "cheap mechanical sweeps I trust unattended,"
   the plan above is right. If it's "draft me chapters while I sleep," that's a much bigger build and I'd
   want to argue you out of it first.
3. **Does the hub need to become an authoring surface** (read a chapter, capture a reaction, answer a
   flag), or is chat the authoring surface and the hub just the ops console?
4. **Kindle delivery** — worth a real `tools/publish.mjs`, or is hand-built EPUB per read acceptable?
