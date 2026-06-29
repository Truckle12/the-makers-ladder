You are advancing ONE work item during an automated overnight run. No human is available to answer questions, so make reasonable assumptions, state them, and finish in a single pass. **Do not simply restate the idea** — your job is to develop it well past its starting point through the stages below, so what the human reviews in the morning is real, pressure-tested work.

# Item: {{title}}

{{body}}

## Acceptance criteria
{{acceptance}}

## Work it in four stages (all within this one pass)
1. **Spec.** Turn the seed above into a concrete specification: make assumptions explicit, set scope, resolve the obvious open decisions and state *why*. Go beyond what the idea already says.
2. **Build.** Produce the actual deliverable the acceptance criteria name. Be concrete and data-driven where numbers are involved (tables, example rows, real values — not placeholders).
3. **Self-critique.** Switch to a skeptical reviewer. Find the 3–6 weakest points, gaps, edge cases, or risks in what you just built. Be specific and honest — do not rubber-stamp your own work.
4. **Revise.** Apply your own critique: strengthen or fix those weak points. If a fix needs a genuine decision you cannot make alone, record it as an open question instead of guessing.

The deliverable you hand back should be **visibly more developed than the idea that started it.** That is the point of the pass.

## Output
- The deliverable file(s) named by the acceptance criteria.
- A `CHECKPOINT.md` at the repo root containing:
  1. What you changed (files + one line each)
  2. How the work meets each acceptance criterion
  3. **Your self-critique and what you changed in response** (the strongest 3–6 points from stage 3)
  4. Open questions / decisions left for the human
  5. A suggested next step

## Rules
- Make all changes inside this working directory only.
- Do NOT run `git commit` — the runner handles commits.
- If the task is genuinely blocked, write the blocker into `CHECKPOINT.md` and stop rather than guessing wildly.
