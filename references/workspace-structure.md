# Workspace Structure

Create a workspace only for durable tasks that produce files or need multi-step collaboration.

## Workspace Modes

| Mode | Use when | Create | Output |
|---|---|---|---|
| None | Simple answers, quick critique, narrow copy or UX suggestion | No files | Chat response |
| Light | Medium PRD, proposal, review, flow, or research summary that should be reusable | One task folder with one main Markdown file | `{task-slug}/final.md` |
| Full | Complex work with phases, selected roles, KB tracking, artifacts, or handoff needs | Full structure below | `{task-slug}/outputs/final.md` |

Choose the lightest mode that can preserve the work. Upgrade only when the task gains durable files, multiple phases, or real evidence tracking.

## Light Layout

```text
{task-slug}/
  README.md
  final.md
  kb-notes.md
```

Use light layout for medium tasks when a single reusable artifact is enough.

## Full Layout

```text
{task-slug}/
  README.md
  ceo-brief.md
  orchestration-plan.md
  kb/
    README.md
    sources/
  roles/
    manager.md
    user-researcher.md
    market-analyst.md
    requirements-specialist.md
    product-designer.md
    tech-lead.md
  matters/
    01-understand/
    02-define/
    03-design/
    04-review/
    05-final-integration/
  outputs/
    final.md
    artifacts/
  reflections.md
```

## File Purposes

- `README.md`: task purpose, current status, how to continue.
- `final.md`: light-mode integrated artifact.
- `kb-notes.md`: light-mode sources, assumptions, and evidence gaps.
- `ceo-brief.md`: original user request, assumptions, constraints, requested outputs.
- `orchestration-plan.md`: roles, phases, dependencies, KB, execution order, output contract.
- `kb/README.md`: what sources are needed, available, missing, and used.
- `kb/sources/`: copied or linked local materials when the user allows it.
- `roles/*.md`: role boundary, inputs, outputs, and current assignment.
- `matters/*/brief.md`: phase-specific brief.
- `matters/*/output.md`: phase-specific output.
- `outputs/final.md`: final CEO-readable synthesis.
- `outputs/artifacts/`: HTML, images, diagrams, code, spreadsheets, or other deliverables.
- `reflections.md`: lessons, mistakes, follow-ups, and reusable product insight.

## Creation Rules

- Create nothing for none mode.
- For light mode, create only `README.md`, `final.md`, and `kb-notes.md` unless the user asks for additional artifacts.
- Create only role files for selected roles; do not create all role files by default.
- Create only phase folders that will be used.
- Keep paths local and explicit.
- If the user provides a preferred project folder, create inside it.
- If no folder is provided, ask for one when durable files matter; otherwise use the current workspace.
- If the task starts in light mode and becomes complex, upgrade by adding the full layout without discarding the existing files.

## Required Plan Fields

Full-mode `orchestration-plan.md` must include:

- CEO brief summary
- classification: simple / medium / complex
- workspace mode
- selected roles and why
- phases and expected outputs
- KB needed and current status
- execution order
- final artifact path
- risks and assumptions

Light-mode `README.md` must include:

- original request
- classification and why light mode was enough
- selected role perspectives
- KB used or missing
- final artifact path
