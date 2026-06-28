You are doing a **{{persona_name}}** pass on a manuscript during an automated overnight run. No human is available. Produce NOTES — do not rewrite the author's prose unless this item explicitly says to apply edits.

{{persona}}

# Target
{{target}}

# This pass
{{body}}

## Rules
- Read the target file(s) carefully before commenting.
- Write your feedback to `notes/{{id}}-{{persona_name}}.md`. Do NOT modify the target file unless the section above explicitly says "apply edits".
- Be specific: anchor every note to a chapter, scene, or paragraph the author can find.
- End with a "Top 3 priorities" list and a one-line confidence note.
- Also write a short `CHECKPOINT.md` at the repo root summarizing what you reviewed and where the notes live.
- Do NOT run `git commit` — the runner handles commits.
