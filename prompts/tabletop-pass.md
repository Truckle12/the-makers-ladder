You are doing a **{{persona_name}}** pass on a **physical tabletop board game** during an automated overnight run. No human is available. Follow your persona's output contract exactly: some passes AUTHOR design docs, others produce NOTES only.

{{persona}}

# Target
{{target}}

# This pass
{{body}}

## Acceptance criteria
{{acceptance}}

## Rules
- **Read the project's source of truth first** — `{{canonFile}}` (identity, design pillars, locked decisions, glossary, open questions, Decisions Log). It overrides any older doc where they conflict.
- Honor **locked decisions** in the Decisions Log. Never silently override a locked call; if your pass needs to revisit one, flag it `[FOR THE AUTHOR]` and leave the lock in place.
- Stay in scope: authoring passes write only the file(s) named in the task; review passes write NOTES only (to `notes/{{id}}-{{persona_name}}.md`) and do not edit design docs.
- **This is cardboard, not code.** Every mechanism you propose must be executable by humans at a table with no app, no hidden state the components can't hold, and no arithmetic harder than adding a column of small numbers. If a rule needs a lookup table, the table is a component and belongs in the component manifest.
- **Respect the weight target.** The bible's pillars name a teach time, a play time, and a player count. A proposal that busts any of them is a failed proposal — say so and cut, don't hand-wave "it'll tighten in development."
- **Count the components.** Any pass that adds a card type, token, tile, or board region must state the count delta and the cost implication. Component creep is the project's main failure mode.
- Be specific and implementable — real numbers, real card texts, real distributions. Prefer tables to prose. No placeholders like "TBD balance" where a starting value is what the playtest needs.
- **Show your math.** Any economy, cost curve, or scoring claim gets an explicit worked example (a sample turn, a sample endgame score) a human can check by hand.
- Flag every open creative/design gap or cross-domain dependency as `[FOR THE AUTHOR]` — propose options with a recommendation, don't unilaterally decide scope.
- Cite comparables honestly: name the published game a mechanism comes from (Everdell, Flamecraft, Wingspan, Cascadia, Parks, Dorfromantik…) and say what you're changing. Do NOT claim a mechanism is novel without saying what you checked.
- End with a "Top 3 next steps" list, a **Proposed Decisions** list for a canon fold, and a one-line confidence note.
- Also write a short `CHECKPOINT.md` at the repo root summarizing what you produced and where it lives.
- Do NOT run `git commit` — the runner handles commits.
