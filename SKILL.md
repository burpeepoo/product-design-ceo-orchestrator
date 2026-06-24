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
4. If durable, plan roles, phases, KB needs, workspace mode, delivery discipline gates, skill routing, role contribution ledger, collaboration review, and final knowledge artifact before executing.
5. If the runtime supports subagent orchestration and role tasks are independent, assign those role tasks to subagents. If subagents are unavailable, blocked, unsafe, or tasks are dependent, execute sequentially and record the fallback reason.

## Output Language Contract

The user's current language controls all user-facing output unless the user asks for another language.

This applies to:
- chat responses
- first response templates
- saved Markdown or document artifacts
- workspace `README.md`, `artifact-index.md`, `orchestration-plan.md`, role outputs, review notes, decision logs, and final artifacts
- headings, narrative, recommendations, risks, follow-ups, and validation summaries

English schema keys such as `role`, `task`, `artifact_format`, or `validation_performed` may remain in English for portability, but their values and surrounding explanations must use the user's language.

Do not let English templates, English role names, source document language, or local skill wording override the user's requested language.

Before saving or returning a durable artifact, perform a language consistency pass:
- Determine `artifact_language` from the user's request and current conversation.
- Check headings, narrative, recommendations, risks, follow-ups, tables, and validation summaries against that language.
- Rewrite stray English template text, role labels, and section headings into the artifact language unless they are portable schema keys, code identifiers, quoted source text, product names, or file paths.
- Treat a mixed-language artifact as incomplete. A Chinese artifact with a Chinese opening section and English body sections must be rewritten before delivery.

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

Translate these templates into the user's current language before sending them.

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

## Reader-Facing Decision Artifact Contract

Final reader-facing artifacts must read like product decision documents, not agent process logs or CEO-branded status updates. The default reader is a busy product or design lead who needs to understand the recommendation, tradeoffs, and next action quickly.

CEO / Manager is an internal orchestration hat for selecting roles, routing work, resolving conflicts, and integrating decisions. It is not the default title, heading, or brand for the user's deliverable.

For every durable final artifact, write the reader-facing body before process details:

1. Recommendation: what should be done.
2. Why: the main rationale and evidence that matters for the decision.
3. Plan or solution: what changes, how it works, and what scope is included.
4. Risks: what could be wrong, costly, or unverified.
5. Next steps: what the team should do next.

Use natural headings in the user's language. Prefer headings such as "推荐方案", "为什么这样做", "具体方案", "需要注意的风险", and "下一步" for Chinese outputs. Do not use internal schema names as primary reader-facing headings.

Do not default to reader-facing headings such as "CEO结论", "CEO Summary", "CEO Brief", or "CEO Recommendation" unless the user explicitly asks for a CEO-labeled deliverable or the literal audience is a CEO.

Do not make these process fields the main document structure: `role`, `handoff`, `validation`, `decision_nodes`, `cross_role_review_decision`, `skill_decision`, `evidence_requirement`, `artifact_format`, or `output_path`.

Each major reader-facing section should help the reader make or understand a decision. If a section only records agent process, move it to the process appendix.

## Final Artifact Two-Layer Structure

Durable final artifacts should separate the human decision layer from the process evidence layer:

```text
reader_artifact:
process_appendix:
```

`reader_artifact` is the human-readable decision artifact for reading, forwarding, and decision-making. It contains the recommendation, rationale, solution, risks, and next steps in natural language.

`process_appendix` preserves evidence, assumptions, role outputs, role contribution ledger, handoffs, review relevance, CEO adjudication, validation, risks, unresolved items, and output paths for review, audit, continuation, and knowledge-base maintenance.

Default to one combined artifact with a reader-facing body first and a process appendix after it. Split `reader_artifact` and `process_appendix` into separate files only when the artifact is large, when the selected format makes separate files clearer, or when the user asks for separate files.

Both layers must follow the user's current language unless another language is requested. Portable schema keys may appear in `process_appendix`, but their values and explanations still follow the user's language.

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
- Use the Review Relevance Gate before cross-role review.
- Medium tasks default to `none` or `targeted` review unless decision nodes show real overlap.
- Complex tasks must pass through the gate, but the gate may record `none` when there is no material cross-role decision.

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

## Role Contribution Ledger

For durable medium and complex tasks that use role perspectives beyond a single manager answer, keep one unified role contribution ledger. The ledger is the run-level source of truth for which roles were used, what each role did, what each role contributed, and how that contribution changed the final artifact.

Simple tasks do not need a role contribution ledger unless the user asks for a saved process record.

Medium and light workspace tasks should default to one concise `role-contributions.md` supporting artifact when role work is used. If the task is very light or the process appendix is already the only saved process record, a `role_contributions` section in the `process_appendix` is acceptable. Do not create one file per role by default.

Complex and full workspace tasks require the unified ledger when roles are selected. Per-role files are allowed only when a role has substantial independent working material, evidence, or draft output. Those files support the ledger; they do not replace it.

Record each selected role in this shape:

```text
role_contributions:
  - role:
    task:
    why_selected:
    key_inputs:
    key_outputs:
    decisions_influenced:
    evidence_used:
    risks_or_gaps:
    final_artifact_impact:
    status:
```

`final_artifact_impact` must state how the role changed the reader artifact, process appendix, decision log, artifact index, or follow-up list. If the role had no material effect, record `no material impact` and consider removing that role in future similar tasks.

Keep the full role contribution ledger in `process_appendix` or a supporting artifact. The `reader_artifact` may summarize the roles only when that helps the reader trust or act on the recommendation.

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

## Role / Subagent Handoff Schema

Before assigning work to a role or subagent, create a handoff block. Use it for both parallel subagent dispatch and sequential role execution when the task is durable.

```text
task_id:
handoff_id:
parent_goal:
assignee_type: role | subagent
role:
task:
context:
input_sources:
constraints:
dependencies:
expected_output:
evidence_requirement:
artifact_format:
output_path:
status: planned | in_progress | blocked | in_review | needs_follow_up | complete
exit_condition:
return_contract:
```

The `return_contract` must require:

```text
summary:
decisions:
evidence_used:
artifacts_created:
risks:
open_questions:
next_actions:
```

Do not delegate with only a role name or broad instruction. Each handoff must be specific enough that another agent can complete it and the CEO / Manager can verify and integrate it.

Use `task_id` to track the role task or subtask, and `handoff_id` to track the delegation record. They may match for simple sequential work, but complex or retried delegation should keep them distinct.

Returned role or subagent outputs must come back to CEO / Manager integration. Handoff notes are not a final answer.

## Cross-Role Collaboration Loop

After first-pass role outputs for medium or complex tasks, run cross-role review only when it is decision-driven. The unit of review is a product decision, not a role pair.

### Review Relevance Gate

Before cross-role review, each selected role output should expose:

```text
decisions:
assumptions:
dependencies:
risks:
evidence_gaps:
review_needed_from:
```

CEO / Manager then records:

```text
cross_role_review_decision:
  mode: none | targeted | full
  reason:
  decision_nodes:
```

Trigger cross-role review only when at least one decision node has material overlap:
- Two or more roles affect the same product decision.
- One role's proposal increases another role's feasibility, validation, scope, metric, or usability risk.
- Role assumptions conflict.
- An evidence gap could change the final recommendation.
- A proposed change affects implementation cost, acceptance boundaries, data measurement, release risk, or user comprehension.
- The output will be implemented, reviewed, or released and the role challenge could change the artifact.

Skip cross-role review and record `mode: none` when:
- Role outputs do not materially affect the same decision.
- A role only adds background context and does not change the final artifact.
- The review would only produce generic comments.
- No final artifact section, decision, risk, or follow-up would change.
- The user explicitly asked for speed and the risk is low.

Use `targeted` when 1-3 concrete decision nodes need challenge. Use `full` only when several decisions interact or the task is complex enough that review itself is a durable artifact.

Medium:
- Default to `none` or `targeted`.
- Use one concise review block only for material decision nodes.
- Skip formal review artifacts when the gate records `none`.

Complex:
- Run the Review Relevance Gate before creating review work.
- Create a cross-role review artifact or phase output only for `targeted` or `full`.
- Each relevant reviewer records review items tied to decision nodes:

```text
target_decision:
reviewer_role:
challenge_type: risk | missing_state | feasibility | evidence_gap | metric_gap | usability_gap | scope_gap
concern:
suggested_change:
evidence_or_reason:
impact_if_ignored:
requires_ceo_adjudication: yes | no
```

If a selected reviewer has no material challenge, record:

```text
no_material_challenge:
reason:
```

Do not run all-role review merely because multiple roles were selected.

### CEO Adjudication

CEO / Manager then adjudicates:

```text
accepted_changes:
rejected_changes_with_reasons:
deferred_questions:
final_artifact_updates:
```

Each accepted change must name the artifact section updated. Each rejected or deferred item must name the reason and the risk if the decision is wrong. The final artifact must reflect the adjudication. Do not paste role outputs together without deciding what changes.

## Collaboration Status Exit Conditions

Durable work must not be marked complete while collaboration state is ambiguous.

Use these statuses for role tasks, handoffs, review items, and follow-ups:

| Status | Meaning | Required exit condition |
|---|---|---|
| `planned` | Work is defined but not started | Owner and start trigger are clear |
| `in_progress` | Work is actively being produced | Output path or return contract is still pending |
| `blocked` | Work cannot continue without input, evidence, access, or decision | Blocker is resolved, accepted as a risk, or moved out of scope with rationale |
| `in_review` | Output exists and needs review or decision | Reviewer approves, requests changes, or review is waived with rationale |
| `needs_follow_up` | Non-blocking work remains after the main artifact | Owner, trigger, next action, affected artifact or decision, and required/optional status are recorded |
| `complete` | Work is integrated or explicitly closed | Evidence, review disposition, risks, and next actions are recorded |

Blocked item record:

```text
owner:
blocker:
missing_input_or_decision:
evidence_checked:
unblock_request:
fallback_option:
exit_condition:
final_disposition:
```

Review item record:

```text
reviewer:
review_scope:
requested_decision:
due_or_trigger:
release_blocking: yes | no
exit_condition:
final_disposition:
```

Follow-up item record:

```text
owner:
trigger:
next_action:
affected_artifact_or_decision:
required_or_optional:
exit_condition:
final_disposition:
```

Before final integration, every blocked, review, or follow-up item must be either resolved, explicitly accepted as a risk, moved out of scope with rationale, or recorded as a non-blocking follow-up with owner and trigger.

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
5. For medium work, keep the orchestration plan, delivery gates, execution mode, role handoffs, role skill-routing decisions, role contribution ledger decision, review relevance decision, status exit conditions, final artifact layer decision, and artifact path in the response or light-mode `artifact-index.md`. For complex work, create `orchestration-plan.md` with phases, tasks, dependencies, subagent capability, execution mode, role handoffs, role skill-routing decisions, role contribution ledger location, delivery gates, review relevance gate, decision nodes, status exit conditions, artifact formats, final artifact layers, expected outputs, and final synthesis criteria.
6. Execute in order: understand -> define -> first-pass role outputs -> update role contribution ledger -> cross-role review when useful -> CEO adjudication -> design or write revision -> validation -> reader-facing final integration -> process appendix.
7. Save durable final output to the selected output path and record it in the artifact index. In full workspace mode, put final artifacts under `outputs/` and choose the best format for each artifact. The final output must identify the `reader_artifact`, `process_appendix`, and role contribution ledger location, even when they live in the same file.
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
- artifact language and any requested translation choice
- roles and phases used
- subagent capability, execution mode, and fallback reason when sequential execution is used
- role or subagent handoff blocks and return contracts
- success criteria, evidence needed, review plan, and validation plan for medium/complex work
- role skill-routing decisions
- role contribution ledger or the reason it was not needed
- review relevance decision and decision nodes before cross-role review
- cross-role review and CEO adjudication when multiple role perspectives materially interact with the same decision
- status disposition for blocked, review, and follow-up items
- KB used or requested
- final artifact layer decision: combined artifact or separate `reader_artifact` and `process_appendix`
- reader-facing final artifact summary
- process appendix summary
- artifact format and why it was chosen
- output paths, or an explicit note that no files were created
- validation performed, evidence collected, known risks, and unverified items
- unresolved risks or follow-ups

## Final Validation Checklist

Before claiming a durable task is complete, verify:

- User goal is restated and the final artifact answers it.
- User-facing responses and saved artifacts use the user's current language unless another language was requested.
- Durable artifacts passed a language consistency pass; no mixed-language artifact is delivered except for schema keys, code identifiers, quoted source text, product names, and file paths.
- Classification, workspace mode, selected roles, and phases are recorded.
- Subagent capability and execution mode are recorded for medium/complex work.
- Independent role tasks used subagents when supported; otherwise the fallback reason is explicit.
- Role or subagent work has structured handoff blocks and return contracts before delegation.
- Medium/complex work records success criteria, evidence needs, review plan, and validation plan.
- Role tasks record skill triggers, decisions, evidence requirements, artifact format, and output paths.
- Selected roles have a unified role contribution ledger with tasks, key inputs, key outputs, decisions influenced, evidence used, risks or gaps, final artifact impact, and status.
- The role contribution ledger lives in `process_appendix` or a supporting artifact, not as the main reader-facing structure.
- Per-role files, if any, support the unified ledger instead of becoming separate sources of truth.
- Facts, assumptions, recommendations, and evidence gaps are separated.
- Current market or competitor claims are backed by browsing or user-provided sources.
- Cross-role review is driven by decision nodes rather than role count alone.
- The review relevance gate records `none`, `targeted`, or `full`, with a reason.
- Cross-role review happened when selected roles materially affected the same decision, or the reason for skipping it is explicit.
- CEO / Manager adjudicated accepted, rejected, and deferred role suggestions before final integration.
- Blocked, in-review, and follow-up items have owners, exit conditions, and final dispositions.
- The final artifact starts with a readable `reader_artifact` layer for a busy product or design lead.
- Process-heavy fields, role notes, handoffs, validation, review relevance, and evidence details are in `process_appendix` or an equivalent supporting layer.
- Reader-facing headings are natural language and do not expose internal schema fields as the main document structure.
- Reader-facing headings do not default to "CEO结论", "CEO Summary", "CEO Brief", or similar internal-orchestration labels.
- Each major reader-facing section supports a decision.
- Final artifact reflects the adjudication instead of leaving role feedback as loose notes.
- The final integration resolves conflicts between role outputs instead of pasting them together.
- Medium/complex work has a knowledge-base-ready artifact unless the user explicitly asked not to create one.
- Validation performed, evidence collected, known risks, and unverified items are named.
- Non-goals, risks, and follow-ups are explicit.
- Output paths exist when files were promised.
- The response names any validation that was not performed.
