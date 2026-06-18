---
name: product-design-ceo-orchestrator
description: Use when the user asks for durable product-design work such as PRDs, requirements, feature design, existing product optimization, UX improvement, redesign, flow optimization, product audit, feature iteration, product strategy, competitor or market research, user research, product review, UI demo planning, prototype planning, roadmap thinking, or turning a product idea into execution-ready artifacts.
---

# Product Design CEO Orchestrator

Act as the smallest useful product leadership system before acting as an individual contributor. The goal is not to maximize ceremony, speed, or output volume; it is to preserve user intent, gather the right evidence, choose the right roles, route role tasks to useful skills when available, and finish with one integrated knowledge-base-ready artifact.

## Start

1. Respond in the language the user is using unless they ask otherwise.
2. Classify the request before doing product work: simple, medium, or complex.
3. State the orchestration decision briefly using the first response templates below.
4. If durable, plan roles, phases, KB needs, workspace mode, delivery discipline gates, skill routing, collaboration review, and final knowledge artifact before executing.
5. If the runtime supports subagent orchestration and role tasks are independent, assign those role tasks to subagents. If subagents are unavailable, blocked, unsafe, or tasks are dependent, execute sequentially and record the fallback reason.

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

## Delivery Discipline Gates

For medium and complex tasks, define correctness before producing the durable artifact. Keep this lightweight, but make it explicit.

Entry gate:

```text
success_criteria:
evidence_needed:
review_plan:
validation_plan:
```

Evidence gate:
- Back current, market, competitor, user, technical, or data claims with browsed sources, user-provided sources, repo evidence, screenshots, logs, tests, or explicit assumptions.
- If evidence is missing, record the gap instead of inventing certainty.

Review gate:
- Medium tasks use a light review by the selected role perspectives.
- Complex tasks use a full cross-role collaboration loop before final integration.

Completion gate:

```text
validation_performed:
evidence_collected:
known_risks:
unverified_items:
```

Simple tasks do not require files, role loops, or formal gates, but do not claim facts, fixes, or completion without evidence.

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

## Subagent Execution Mode

For medium and complex tasks, decide execution mode before role work:

```text
subagent_capability: supported | unavailable | blocked
execution_mode: subagents | sequential
fallback_reason:
```

Use subagents when all are true:
- The runtime exposes a reliable subagent or multi-agent dispatch capability.
- Two or more selected role tasks can proceed independently.
- Each role task has enough context, expected output, evidence requirement, artifact format, and return path.
- The main agent can still keep CEO / Manager orchestration, cross-role review, adjudication, validation, and final integration.

Use sequential execution when any are true:
- Subagents are unavailable, blocked, or unsafe in the current runtime.
- Role tasks depend on each other's unfinished outputs.
- The task is simple or would become slower or less correct with delegation.
- Subagent outputs would be hard to verify or integrate.

Do not split final CEO integration, validation, or adjudication away from the main agent.

## Cross-Role Collaboration Loop

After first-pass role outputs for medium or complex tasks, run the smallest useful collaboration review before final synthesis.

Medium:
- Use one concise cross-role review block only for material disagreements or missing checks.
- Skip formal review artifacts when the selected roles do not overlap or the user explicitly asked for a quick answer.

Complex:
- Create a cross-role review artifact or phase output.
- Each relevant reviewer records:

```text
reviewer_role:
reviews:
suggestions:
concerns:
questions:
conflicts:
```

### CEO Adjudication

CEO / Manager then adjudicates:

```text
accepted_changes:
rejected_changes_with_reasons:
deferred_questions:
final_artifact_updates:
```

The final artifact must reflect the adjudication. Do not paste role outputs together without deciding what changes.

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
   - subagent capability and fallback reason, if any
   - missing inputs, if any
3. Choose workspace mode from `references/workspace-structure.md`: none / light / full.
4. Choose roles from `references/role-catalog.md`; create role boundary files only for selected roles in full workspace mode.
5. For medium work, keep the orchestration plan, delivery gates, execution mode, role skill-routing decisions, review decisions, and artifact path in the response or light-mode `artifact-index.md`. For complex work, create `orchestration-plan.md` with phases, tasks, dependencies, subagent capability, execution mode, role skill-routing decisions, delivery gates, collaboration review plan, artifact formats, expected outputs, and final synthesis criteria.
6. Execute in order: understand -> define -> first-pass role outputs -> cross-role review when useful -> CEO adjudication -> design or write revision -> validation -> final integration.
7. Save durable final output to the selected output path and record it in the artifact index. In full workspace mode, put final artifacts under `outputs/` and choose the best format for each artifact.
8. Update `reflections.md` only for durable tasks where reusable lessons or follow-ups emerged.

## References

- Read `references/orchestration-model.md` when deciding whether to split roles/tasks.
- Read `references/delivery-discipline.md` when defining success criteria, evidence, review, validation, and completion gates.
- Read `references/role-catalog.md` when creating role files or assigning work.
- Read `references/workspace-structure.md` before creating directories.
- Read `references/kb-policy.md` before asking for files, folders, links, screenshots, data, or existing docs.
- Use `tests/pressure-scenarios.md` when verifying edits to this skill or checking whether it resists over-orchestration.

## Output Contract

Every durable task must end with:

- orchestration decision
- roles and phases used
- subagent capability, execution mode, and fallback reason when sequential execution is used
- success criteria, evidence needed, review plan, and validation plan for medium/complex work
- role skill-routing decisions
- cross-role review and CEO adjudication when multiple role perspectives materially interact
- KB used or requested
- final artifact summary
- artifact format and why it was chosen
- output paths, or an explicit note that no files were created
- validation performed, evidence collected, known risks, and unverified items
- unresolved risks or follow-ups

## Final Validation Checklist

Before claiming a durable task is complete, verify:

- User goal is restated and the final artifact answers it.
- Classification, workspace mode, selected roles, and phases are recorded.
- Subagent capability and execution mode are recorded for medium/complex work.
- Independent role tasks used subagents when supported; otherwise the fallback reason is explicit.
- Medium/complex work records success criteria, evidence needs, review plan, and validation plan.
- Role tasks record skill triggers, decisions, evidence requirements, artifact format, and output paths.
- Facts, assumptions, recommendations, and evidence gaps are separated.
- Current market or competitor claims are backed by browsing or user-provided sources.
- Cross-role review happened when selected roles materially affected each other, or the reason for skipping it is explicit.
- CEO / Manager adjudicated accepted, rejected, and deferred role suggestions before final integration.
- Final artifact reflects the adjudication instead of leaving role feedback as loose notes.
- The final integration resolves conflicts between role outputs instead of pasting them together.
- Medium/complex work has a knowledge-base-ready artifact unless the user explicitly asked not to create one.
- Validation performed, evidence collected, known risks, and unverified items are named.
- Non-goals, risks, and follow-ups are explicit.
- Output paths exist when files were promised.
- The response names any validation that was not performed.
