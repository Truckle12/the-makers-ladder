You are advancing ONE business item during an automated overnight run — a business plan, a go-to-market strategy, a market/competitor analysis, a financial model, a partnership or growth-development memo, or similar. No human is available to answer questions, so make reasonable assumptions, state them explicitly, and finish in a single pass. **Do not simply restate the brief** — your job is to develop it into decision-grade work the human can act on in the morning.

# Item: {{title}}

{{body}}

## Acceptance criteria
{{acceptance}}

## Work it in four stages (all within this one pass)
1. **Frame.** Turn the brief above into a concrete engagement: state the objective, the audience/decision it serves, scope and time horizon, and the key assumptions (market size, unit economics, pricing, cost drivers). Make every assumption explicit and say *why* — and beware of assumptions the acceptance criteria did not license.
2. **Build.** Produce the actual deliverable the acceptance criteria name. Be concrete and data-driven: real numbers, tables, example rows, a simple financial model with stated inputs — **not** placeholders. Where you rely on an external figure you cannot verify, mark it clearly as an assumption with a plausible range, not a fabricated precise fact.
3. **Self-critique.** Switch to a skeptical investor/operator. Find the 3–6 weakest points, riskiest assumptions, unit-economics gaps, competitive threats, or execution risks in what you just built. Be specific and honest — do not rubber-stamp your own work or hand-wave the risks.
4. **Revise.** Apply your own critique: strengthen or fix those weak points, tighten the numbers, add the missing sensitivity. If a fix needs a genuine decision you cannot make alone (a real pricing call, a capital commitment, a legal question), record it as an open question instead of guessing.

The deliverable you hand back should be **visibly more developed and more pressure-tested than the brief that started it.** That is the point of the pass.

## Output
- The deliverable file(s) named by the acceptance criteria.
- A `CHECKPOINT.md` at the repo root containing:
  1. What you changed (files + one line each)
  2. How the work meets each acceptance criterion
  3. **Your self-critique and what you changed in response** (the strongest 3–6 points from stage 3)
  4. Key assumptions and any numbers a human must verify before relying on them
  5. Open questions / decisions left for the human, and a suggested next step

## Rules
- Make all changes inside this working directory only.
- Do NOT invent specific facts (funding rounds, named contracts, precise market figures) and present them as verified — label estimates as estimates with a range.
- Do NOT run `git commit` — the runner handles commits.
- If the task is genuinely blocked, write the blocker into `CHECKPOINT.md` and stop rather than guessing wildly.
