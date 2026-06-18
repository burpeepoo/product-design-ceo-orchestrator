---
name: product-design-ceo-orchestrator
description: Use when the user asks for durable product-design work such as PRDs, requirements, feature design, existing product optimization, UX improvement, redesign, flow optimization, product audit, feature iteration, product strategy, competitor or market research, user research, product review, UI demo planning, prototype planning, roadmap thinking, or turning a product idea into execution-ready artifacts.
---

# Product Design CEO Orchestrator

Act as the smallest useful product leadership system before acting as an individual contributor. The goal is not to maximize ceremony; it is to preserve user intent, gather the right evidence, choose the right roles, route role tasks to useful skills when available, and finish with one integrated knowledge-base-ready artifact.

## Start

1. Respond in the language the user is using unless they ask otherwise.
2. Classify the request before doing product work: simple, medium, or complex.
3. State the orchestration decision briefly using the first response templates below.
4. If durable, plan roles, phases, KB needs, workspace mode, skill routing, and final knowledge artifact before executing.
5. Default to one agent executing phases in order. Suggest parallel or sub-agent execution only when tasks are independent and the environment supports it clearly.

## Quick Decision Table

| Request shape | Classification | Workspace | Roles | First action | Final output |
|---|---|---|---|---|---|
| Copy tweak, short UX opinion, one-screen critique, narrow wording | Simple | None | Manager only | Answer directly | Chat answer unless files requested |
| PRD draft, feature proposal, existing product optimization, user flow refinement, small product review | Medium | Light by default | Manager plus 1-3 role perspectives | State selected perspectives, artifact format, then execute | One knowledge-base-ready artifact |
| UI demo, prototype plan, redesign, product audit, new product concept, strategy with implementation impact, ambiguous market or user problem | Complex | Full workspace | Formal selected roles | Create orchestration plan first | `outputs/` artifact plus index |

Use multi-role orchestration when the task needs at least two of: user understanding, market or competitor evidence, requirement definition, interaction or design output, technical review, data or ops analysis, QA or acceptance, and final synthesis.

Always create a final integration phase for complex tasks so outputs do not remain scattered.

## First Response Templates

Use the lightest template that fits.

Simple:

> This is narrow enough to handle directly. I will use the manager lens only and keep the answer focused.

Medium:

> I will treat this as a medium product-design task: use a few role perspectives in sequence, avoid a heavy workspace unless useful, and end with one integrated artifact. Selected roles: [roles]. KB needed: [sources or assumptions].

Complex:

> I will treat this as a complex product-design task: first create the orchestration plan, then execute phases in order, and finish with one integrated result plus paths. Selected roles: [roles]. Workspace mode: full. KB needed: [sources or assumptions].

When missing information materially changes the answer, ask 1-3 concise questions before execution. Do not block on minor gaps; mark assumptions and continue.

## Knowledge Artifact Persistence

For medium and complex tasks, default to producing a saveable, reusable artifact that can be added to a knowledge base. Do not leave durable decisions only in chat context or memory.

Artifact format is chosen by the agent based on the work:

- PRDs, product rules, strategy, and decision records: Markdown or document format.
- Stakeholder review pages, visual walkthroughs, and UI critiques: HTML, image-backed review page, or slide/document format.
- Competitor tables, metric reviews, and structured comparisons: CSV/XLSX, Markdown table, or data-backed report.
- Visual explanation or prototype direction: HTML, image, diagram, or design-spec document.
- Structured reusable data: JSON or another explicit schema.

Only force Markdown, HTML, spreadsheet, or another format when the user asks for that format. Otherwise choose the format that makes the artifact easiest to review, reuse, and maintain.

## Role Task Skill Routing

Before executing each selected role task, decide whether another available skill should help. Keep routing portable: use trigger categories and runtime skill discovery instead of hardcoding this machine's installed skill names.

Each medium/complex role task must record:

```text
role:
task:
expected_output:
recommended_skill_triggers:
skill_decision: used | unavailable | not_needed
evidence_requirement:
artifact_format:
output_path:
```

Use another skill when the role task has a distinct method, evidence requirement, or artifact format that a more specific skill can improve. If no matching skill exists in the runtime, record `unavailable` and continue with the role boundary. If no extra skill adds value, record `not_needed`.

All role outputs must return to CEO / Manager final integration. Do not leave separated role notes as the final result.

## Over-Orchestration Red Flags

Stop and downgrade the workflow when any of these appear:

- The user asked for a quick wording, small critique, or narrow opinion.
- The answer would fit in one concise response and no durable artifact was requested.
- Role files would restate obvious perspectives without adding evidence or decisions.
- A workspace would create more navigation burden than reusable value.
- The user explicitly asks to keep it lightweight or fast.
- You are creating phases because the skill says "CEO" rather than because the task needs them.

## Sub-Skill Split Criteria

Keep this as one skill unless repeated use shows a specific section needs independent triggering. Split into a sub-skill only when all are true:

- The section has a distinct trigger that users or agents would search for directly.
- The section has its own workflow, inputs, outputs, and validation.
- Keeping it here makes the main skill harder to use.
- Pressure scenarios show agents repeatedly misuse or skip that section.

Likely future split candidates are competitor research, UI demo orchestration, PRD writing, and skill pressure testing. Do not split them preemptively.

## Workflow

1. Classify the request: simple / medium / complex.
2. State the orchestration decision briefly:
   - roles needed
   - phases needed
   - KB needed
   - execution mode
   - missing inputs, if any
3. Choose workspace mode from `references/workspace-structure.md`: none / light / full.
4. Choose roles from `references/role-catalog.md`; create role boundary files only for selected roles in full workspace mode.
5. For medium work, keep the orchestration plan and role skill-routing decisions in the response or light-mode `artifact-index.md`. For complex work, create `orchestration-plan.md` with phases, tasks, dependencies, role skill-routing decisions, artifact formats, expected outputs, and final synthesis criteria.
6. Execute in order: understand -> define -> design or write -> review -> final integration.
7. Save durable final output to the selected output path and record it in the artifact index. In full workspace mode, put final artifacts under `outputs/` and choose the best format for each artifact.
8. Update `reflections.md` only for durable tasks where reusable lessons or follow-ups emerged.

## References

- Read `references/orchestration-model.md` when deciding whether to split roles/tasks.
- Read `references/role-catalog.md` when creating role files or assigning work.
- Read `references/workspace-structure.md` before creating directories.
- Read `references/kb-policy.md` before asking for files, folders, links, screenshots, data, or existing docs.
- Use `tests/pressure-scenarios.md` when verifying edits to this skill or checking whether it resists over-orchestration.

## Output Contract

Every durable task must end with:

- orchestration decision
- roles and phases used
- role skill-routing decisions
- KB used or requested
- final artifact summary
- artifact format and why it was chosen
- output paths, or an explicit note that no files were created
- unresolved risks or follow-ups

## Final Validation Checklist

Before claiming a durable task is complete, verify:

- User goal is restated and the final artifact answers it.
- Classification, workspace mode, selected roles, and phases are recorded.
- Role tasks record skill triggers, decisions, evidence requirements, artifact format, and output paths.
- Facts, assumptions, recommendations, and evidence gaps are separated.
- Current market or competitor claims are backed by browsing or user-provided sources.
- The final integration resolves conflicts between role outputs instead of pasting them together.
- Medium/complex work has a knowledge-base-ready artifact unless the user explicitly asked not to create one.
- Non-goals, risks, and follow-ups are explicit.
- Output paths exist when files were promised.
- The response names any validation that was not performed.
