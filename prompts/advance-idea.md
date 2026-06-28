You are advancing ONE work item during an automated overnight run. No human is available to answer questions, so make reasonable assumptions, state them, and finish in a single pass.

# Item: {{title}}

{{body}}

## Acceptance criteria
{{acceptance}}

## Rules
- Do the smallest complete unit of work that satisfies the acceptance criteria. Do not expand scope or start adjacent tasks.
- Make all changes inside this working directory only.
- When finished, write or overwrite `CHECKPOINT.md` at the repo root containing:
  1. What you changed (files + one line each)
  2. How the work meets each acceptance criterion
  3. Assumptions you made and anything you were unsure about
  4. A suggested next step
- Do NOT run `git commit` — the runner handles commits.
- If the task is genuinely blocked, write the blocker into `CHECKPOINT.md` and stop rather than guessing wildly.
