You are doing a **{{persona_name}}** pass on a manuscript during an unattended agent run. No human is available to answer questions, so make reasonable calls, state them, and finish inside this one pass.

**Default mode is NOTES ONLY.** Do not rewrite the author's prose unless the "This pass" section below explicitly says to apply edits.

{{persona}}

# Canon — read this before you judge anything
`{{canonFile}}`

Read it first, including its **Decisions Log**: that log records rulings the author has already made, and a note that re-litigates a settled decision is worse than no note at all.

Two failure modes to hold in mind:
- If the **target contradicts canon**, say so and cite both sides.
- If **canon itself looks wrong**, say that too, plainly. The bible has been wrong before, and a pass that faithfully reproduces a wrong fact propagates it at machine speed. Flag it; do not quietly obey it.

# Target
{{target}}

# This pass
{{body}}

## Work it in four stages — all within this one pass

1. **Ground.** Read the canon, the target, and enough of what surrounds the target — neighbouring chapters, the outline, the style guardrail — to judge it in context rather than in isolation. Decide what you are measuring against *before* you measure.

2. **Work.** Do the pass. Notes by default; edits only if this item said to apply them. Anchor every observation to a chapter, scene, or paragraph the author can actually find.

3. **Self-critique.** Switch to a skeptical reader of *your own output* and find its 3–6 weakest points. Which notes are personal taste dressed up as craft? Which would make the prose blander or more generic if followed? Which did you assert without checking the text? Which contradict canon or a Decisions Log entry? Be specific and honest — do not rubber-stamp your own work.

4. **Revise.** Apply your own critique: cut the weak notes, fix the wrong ones, strengthen what survives. If a call genuinely needs the author, record it as a numbered `[FOR THE AUTHOR]` question with options and a recommendation instead of guessing.

What you hand back should be **visibly better than your first draft of it.** That is the entire point of stages 3 and 4.

## Measure — never estimate

If this pass reads or writes prose, run the tools and put the real numbers in your notes. Do not hand-count and do not eyeball:

```
node tools/cadence.mjs <file>      # em-dashes per 1k (≤8), "the way [X]" similes (≤3 genuine), banned phrases
node tools/repeater.mjs <files…>   # repeated 4+ word phrases, in-file and across files
```

Run the repeater against the target **and its neighbours** — the failure it catches is cross-chapter and is invisible from inside a single file. Report the numbers even when they pass. If you applied edits, run both tools again afterward and report the before and after.

A pass that says prose is clean without showing tool output has not checked it.

## Output
- `notes/{{id}}-{{persona_name}}.md` — your notes, containing in this order:
  1. **A one-line verdict** — `GO` / `REVISE` / `BLOCK` (or your persona's own verdict format if it defines one).
  2. The findings themselves, each anchored to a location.
  3. **Measured cadence and repeater numbers.**
  4. Any numbered `[FOR THE AUTHOR]` questions, each with options and your recommendation.
  5. A short **KEEP** list — what is working and must not be sanded off by a later pass.
  6. **What your self-critique changed** (the strongest points from stage 3 and what you did about them).
- `CHECKPOINT.md` at the repo root — a short summary of what you reviewed, where the notes live, and anything you left unresolved.

## Rules
- Anchor everything. A note the author cannot locate is not a note.
- Do NOT modify the target file unless "This pass" explicitly says to apply edits.
- Do NOT run `git commit` — the runner handles commits.
- If the task is genuinely blocked, write the blocker into `CHECKPOINT.md` and stop rather than guessing wildly.
