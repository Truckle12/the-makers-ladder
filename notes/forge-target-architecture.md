# The Forge — target architecture (revised against the author's answers)

Companion to `notes/forge-process-gap-audit.md`. The audit diagnosed why the system was abandoned;
this reframes the target against what you actually want, and re-sequences the build.
**Proposal only — nothing here is implemented.**

---

## The correction I owe you

My audit concluded: *"async should own only work with a computable post-condition; stay interactive for
everything judgement-dense."* **That was calibrated for the wrong target.** I assumed unattended meant
overnight batch, so I recommended restricting agents to mechanical sweeps.

Your answer reframes it: *"it doesn't have to be overnight, in fact it's silly that it is. It's more like
I want to provide feedback on steps/gates and have things go do stuff."*

That's a better frame and it inverts my conclusion. **The problem was never that the system put agents on
judgement-dense work. It's that the gate after the work was 24 hours and one pull request away.**

Chat worked for the same reason: chat is a pipeline with a gate after *every* step and zero latency
between them. Ch40 went draft → measure → review → your judgement → revise → measure → ship inside an
hour, and the reason wasn't that a chat model is smarter — it's that I could get a verdict in seconds and
act on it while the context was still warm.

So the real axis isn't async vs. interactive. It's **leash length between gates.** Make the gate cheap and
immediate and agents can do the hard work again. That is what the rest of this document is about.

---

## The unit: a pipeline, not a queue item

Today an item is *one persona, one file, one shot*, and `status:` is a flat enum. The target is an item
that **declares its own steps**, with three step types:

| Type | What it is | Cost |
|---|---|---|
| `agent: <persona>` | spawn the `claude` CLI with that persona — what the engine does today | Opus $ |
| `check: <tool>` | run a zero-dep node tool, capture pass/fail + numbers | **$0, ~1s** |
| `gate: <who>` | stop. set `waiting_on: human`. surface it | your attention |

Declared per lane in `config.json`, overridable per item:

```yaml
lanes:
  book:
    queueDir: book
    branchPrefix: agent/book          # ← stable identifier, unchanged
    pipelines:
      chapter:
        - agent: chapter-drafter
        - check: [cadence, repeater]   # fail routes back, does not reach you
        - agent: fight-choreographer   # notes-only reviewer
        - gate: author                 # ← you see prose + numbers + notes
        - agent: chapter-revise
        - check: [cadence, repeater]
        - gate: author
```

Item frontmatter gains three keys:

```yaml
pipeline: chapter
step: 3
waiting_on: human      # human | agent | none
```

**`check:` is the piece that changes the economics.** 24 of 42 chapters are over the cadence guardrail
today because measurement is advice in a prompt that nothing reads. As a *step* with a real exit code, a
failing check routes back to a repair step and never costs you a look. Most of what I called "the async
lane's proper job" in the audit becomes free steps inside pipelines rather than a separate mode.

**Generalizes with no book-specific engine code** — which is the point, since you want this for every
Forge workflow:
- `game`: `game-design-architect → gate → level-designer → art-director → gate`
- `ideas`: `advance-idea → gate` (that lane already self-critiques in-prompt)
- new lanes get pipelines through the existing `add-lane` skill

---

## The trigger: events, not a clock

Today: cron at 07:00 UTC scans for `status: ready`. That is the "silly" part, and it's also why the
system is untrustworthy — a clock can't know whether you're ready.

Target: **anything that sets `waiting_on: agent` starts the next step.** Event sources:

1. **Hub gate action** (primary — your answer #3)
2. **A completed step** advancing to the next non-gate step
3. **PR label** — keep it. It is the one hop that ever fired, and it's the surface that works from your
   phone. It becomes *an* event source, not *the* mechanism.
4. **Bot command**
5. **Cron** — demoted to a safety-net sweep, or repurposed for genuinely scheduled work (a weekly
   canon-divergence report). Never the primary path.

Implementation that respects the seam: the hub **already** spawns `orchestrate.mjs --only <id>`
(`web/lib/engines/quill.js:62-66`). Gate actions call it directly; a small poll tick (~10s over the queue
dirs, looking for `waiting_on: agent`) is the backstop. Filesystem-only, no new deps, no new seam,
no second engine.

> **This makes the claim-lock defect live, not latent.** Multiple event sources + a poll tick + a cron net
> = concurrent spawns, and `claim()` currently writes into `runs/<RUN_ID>/claims/` where `RUN_ID` is a
> fresh per-process timestamp — so it provides **zero** cross-process exclusion. This must be fixed first
> or the new design double-spends by construction.

---

## The surface: the authoring lane (your answer #3)

A gate is only cheap if it's answerable in ~30 seconds. Today gating means reading a whole 5,000-word
chapter to find what moved, because `web/lib/engines/git-content.js:52-72` returns only `{status, path}` —
so `review.jsx` renders the full revised chapter with nothing marking the change.

What the gate view needs:

- **the rendered artifact** (the Reading Room already does this via `book-doc.js` + `markdown.jsx`)
- **the diff** — the single highest-leverage missing piece
- **the check strip** — cadence, repeater, pass/fail, deltas since last pass
- **the agent's notes**, with its `[FOR THE AUTHOR]` questions rendered as *answerable* items
- **actions**: Approve → advance · Revise (+note) → route back · Reject · Answer

And the part that closes your loop: **capture must create work.** `web/lib/db.js:136-137` already
documents `notes.item_ref` as *"queue_item_id **or** a repo-relative file path"* — and no UI writes the
second form. The hook is already in the schema. Highlight a line while reading → note anchored to
`chapters/chapter-34.md:112` → that note becomes a revise step on that file's pipeline.

That is exactly the loop that was missing when you caught *"Doss's shield?"* and *"I don't think it's been
months yet"* and had to type them to me in a chat instead of tapping them into the thing you were reading.

---

## Delivery (your answer #4)

`tools/publish.mjs` — zero-dep EPUB builder. I've now hand-built the same thing three times in a
scratchpad; it's ~150 lines and proven (`zip -X0` mimetype-first, hand-rolled OPF/nav, validated with
minidom). Takes a chapter range or a manifest, emits a verified EPUB.

**On the email hop: I'd cut it.** There is no SMTP and no API key anywhere by design — the `claude` CLI is
the only external brain. Any email route is a third-party connector that can attach a file but can't
prove what it sent, which is exactly the failure I hit twice. Better:

- `node tools/publish.mjs --chapters 38-42` → a file you can drag to Send-to-Kindle in two seconds
- **a Download EPUB button in the hub** — same generator, no email, nothing unverifiable
- longer term, the in-app reader you mentioned: it's the same `markdown.jsx` path with a mobile reading
  view. Once that exists the Kindle hop is optional rather than the only way to read a draft.

---

## Build order

### Phase 0 — prerequisites (nothing above works without these)
1. **Fix the claim lock.** Move claims to a stable path (`.forge/claims/` or `runs/.claims/`) with a
   PID+timestamp lease. Currently zero cross-process exclusion; the hub and the cron can both run the same
   item and both spend.
2. **`enqueue()` frontmatter passthrough** (`web/lib/engines/quill.js:45-48`). It rebuilds frontmatter from
   a fixed 9-key literal on create/run/promote/park. Without a passthrough, `pipeline:`/`step:`/`waiting_on:`
   are erased by the next button press and the whole design is dead on the hub.
3. **Demote the cron.** Free to do right now — both stale items are archived and there are zero `ready`
   items on disk.

### Phase 1 — one good step, one cheap gate
4. **Rewrite `prompts/book-pass.md`** on the `prompts/advance-idea.md` four-stage pattern
   (spec → build → self-critique → revise, all in one pass) and inject `{{canonFile}}` from `laneCfg`
   (already in scope at `orchestrate.mjs:104-106`). Two templates, one engine line, retroactive to every
   book item. **Cheapest real quality win in the repo.**
5. **Real diff in the Reading Room** (`git-content.js` + `markdown.jsx`; it already shells `git`, no new
   deps). **Highest leverage on the target** — every gate in the design depends on this being fast.

### Phase 2 — the pipeline
6. `pipeline:` / `step:` / `waiting_on:` frontmatter; step loop in `orchestrate.mjs`; `check:` step type
   wired to `cadence.mjs` / `repeater.mjs` with real exit codes and a repair route.
7. Event trigger: hub gate actions spawn the next step; poll tick as backstop; cron becomes the net.

### Phase 3 — the authoring surface
8. Note capture anchored to `file:line` (schema already supports it) that creates or advances work.
9. `[FOR THE AUTHOR]` becomes addressable records with open/answered/applied state. Hub renders "N open
   questions"; answering writes the resolution *and* advances the item. This finally unlocks
   `prompts/personas/flag-resolver.md`, which has never been usable for the book because it keys on
   `D-0NN` ids that only the game bible has.

### Phase 4 — delivery
10. `tools/publish.mjs` + hub download button. In-app reader after.

**Constraint reminders for whoever builds it:** CI pins Node 20 while your box runs 24 — any new
`tools/*.mjs` written to a 22+ API passes locally and fails only in the unattended run, where the evidence
is gitignored. `web/` takes no new npm deps. `forge-workflows.js` must stay isomorphic (no `node:*`
imports). Lane keys, branch prefixes, the five labels, and the root package name are stable identifiers —
none of the above renames any of them.

---

## One thing no architecture fixes

The reason this session produced Ch41 to the standard it did is that **one context held 42 chapters, the
bible, the outline, the style guardrail, and the entire conversation with you** — including your ten
rulings, four continuity catches, and the villain design we worked out together over a dozen turns.

A pipeline of stepwise agents will never have that, and I don't think you should try to buy it with more
turns or a bigger window. The right substitutes are structural: the book-state index (POV, word count,
cadence, last pass, open flags per chapter), a canon-divergence checker that reconciles bible against
prose, and decision records that a later agent can read. Those give a cold agent *most* of what a warm
context had, cheaply.

**Where I'd still keep you in a chat:** arc shape, villain selection, thematic rulings, and first-read
reaction. Not because a pipeline can't run them, but because their natural exchange is two turns —
*"no, the other one"* — and no gate UI beats a sentence.

---

## Recommendation

Phase 0 is three pure defect fixes with no design risk, and Phase 1 is two small changes with immediate
payoff. I'd do those five before committing to the pipeline model, because they're worth having
regardless of whether you like the rest of this. Say the word and I'll start there.
