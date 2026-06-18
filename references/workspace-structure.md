# Workspace Structure

Create a workspace only for durable tasks that produce files or need multi-step collaboration.

## Workspace Modes

| Mode | Use when | Create | Output |
|---|---|---|---|
| None | Simple answers, quick critique, narrow copy or UX suggestion | No files | Chat response |
| Light | Medium PRD, proposal, existing product optimization, review, flow, or research summary that should be reusable | One task folder with artifact index and artifacts | `{task-slug}/artifacts/` plus `artifact-index.md` |
| Full | Complex work with phases, selected roles, KB tracking, artifacts, or handoff needs | Full structure below | `{task-slug}/outputs/` plus `artifact-index.md` |

Choose the lightest mode that can preserve the work. Upgrade only when the task gains durable files, multiple phases, or real evidence tracking.

## Light Layout

```text
{task-slug}/
  README.md
  artifact-index.md
  artifacts/
  kb-notes.md
```

Use light layout for medium tasks. Store one or more knowledge-base-ready artifacts under `artifacts/` in the format best suited to the work. A light task may include a concise cross-role review, decision log, or validation note when it improves the artifact.

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
    artifacts/
    artifact-index.md
  reflections.md
```

## File Purposes

- `README.md`: task purpose, current status, how to continue.
- `artifact-index.md`: artifact names, formats, output paths, role sources, evidence gaps, KB destination, and maintenance notes.
- `artifacts/`: light-mode artifacts in the best format for the work.
- `kb-notes.md`: light-mode sources, assumptions, and evidence gaps.
- `ceo-brief.md`: original user request, assumptions, constraints, requested outputs.
- `orchestration-plan.md`: roles, phases, dependencies, KB, delivery discipline gates, execution order, role skill routing, review plan, artifact formats, validation plan, and output contract.
- `kb/README.md`: what sources are needed, available, missing, and used.
- `kb/sources/`: copied or linked local materials when the user allows it.
- `roles/*.md`: role boundary, inputs, outputs, and current assignment.
- `matters/*/brief.md`: phase-specific brief.
- `matters/*/output.md`: phase-specific output.
- `outputs/`: final CEO-readable synthesis and supporting artifacts in appropriate formats.
- `outputs/artifact-index.md`: full-mode index of all final and supporting artifacts.
- `outputs/artifacts/`: HTML, images, diagrams, code, spreadsheets, data files, cross-role review artifacts, decision logs, validation notes, or other deliverables.
- `reflections.md`: lessons, mistakes, follow-ups, and reusable product insight.

## Creation Rules

- Create nothing for none mode.
- For light mode, create `README.md`, `artifact-index.md`, `artifacts/`, and `kb-notes.md` unless the user asks for a different artifact structure.
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
- artifact language
- subagent capability
- execution mode
- fallback reason when sequential
- handoff blocks and return contracts
- role skill-routing decisions
- KB needed and current status
- success criteria
- evidence needed
- evidence status
- review plan
- review status
- validation plan
- validation status
- blocked item disposition
- review item disposition
- follow-up item disposition
- cross-role review depth: none / light / full
- CEO adjudication expectations
- artifact format decisions
- execution order
- final artifact paths
- risks and assumptions

Light-mode `README.md` must include:

- original request
- classification and why light mode was enough
- selected role perspectives
- artifact language
- subagent capability
- execution mode
- fallback reason when sequential
- handoff blocks and return contracts
- KB used or missing
- role skill-routing decisions
- success criteria
- evidence needed
- evidence status
- review plan
- review status
- validation plan
- validation status
- blocked item disposition
- review item disposition
- follow-up item disposition
- artifact format decisions
- final artifact paths

`artifact-index.md` must include:

- artifact name
- artifact format
- artifact language
- output path
- role or phase source
- execution mode
- task id, if applicable
- handoff id, if applicable
- intended knowledge-base destination, if known
- evidence status
- evidence gaps
- review status
- validation performed
- known risks
- unverified items
- status: planned / in_progress / blocked / in_review / needs_follow_up / complete
- status exit condition
- final disposition
- follow-up or maintenance notes
