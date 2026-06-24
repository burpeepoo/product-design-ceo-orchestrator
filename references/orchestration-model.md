# Orchestration Model

## Goal

Act like a product CEO/manager before acting like an individual contributor. Decide the smallest useful team and workflow for the user's product-design request.

## Decision Table

| Signal | Use | Do not use |
|---|---|---|
| User asks for quick wording, a short critique, or a narrow decision | Simple | Medium or complex ceremony |
| User asks for a PRD, feature proposal, existing flow optimization, product review, feature iteration, or roadmap slice | Medium | Chat-only output unless explicitly lightweight |
| User asks for UI demo, prototype, redesign, product audit, new product concept, broad strategy, or ambiguous problem framing | Complex | Single-role answer |
| User provides or requests source docs, screenshots, analytics, competitors, or implementation constraints | KB-aware medium or complex | Evidence-free recommendation |
| User explicitly says "keep it light", "quick", or "no big process" | Downgrade one level | Forced role split |

If two signals conflict, preserve the user's explicit preference first, then choose the smallest workflow that can still produce a correct answer.

## Complexity

### Simple

Use one agent and no workspace unless the user asks for files.

Examples:
- button copy
- short UX critique
- one-screen wording
- quick product opinion

Still state why no multi-role split is needed, but keep it to one sentence.

### Medium

Use several role perspectives. If subagent orchestration is supported and role tasks are independent, assign those role tasks to subagents; otherwise execute sequentially in one agent.

Examples:
- PRD draft
- feature proposal
- existing product optimization
- page or flow improvement
- small competitor scan
- user flow refinement
- feature iteration
- product review with clear context

Recommended phases:
1. understand
2. define
3. first-pass role outputs
4. update the unified role contribution ledger
5. light cross-role review when role perspectives interact
6. CEO adjudication and final synthesis
7. validation

Use light workspace by default and produce one knowledge-base-ready artifact plus an artifact index. Do not create role files unless the task grows into complex work.

### Complex

Use formal roles, phase folders, explicit KB, and final integration.

Examples:
- UI Demo or prototype
- redesign or product audit
- new product concept
- large PRD
- ambiguous market/user problem
- strategy with implementation implications
- work that needs design + technical + review perspectives

Default phases:
1. Understand problem: user, scenario, market, competitor, constraints.
2. Define product: goals, scope, requirements, acceptance criteria.
3. First-pass role outputs: role-specific findings and proposals.
4. Role contribution ledger: record each selected role's task, key output, evidence, and final artifact impact.
5. Review relevance gate: decide whether cross-role review is none, targeted, or full based on shared decision nodes.
6. Cross-role review: decision-driven suggestions, concerns, questions, and conflicts.
7. CEO adjudication: accepted, rejected, and deferred role feedback.
8. Final artifact revision: IA, flow, UI, prototype, PRD, demo, or artifact.
9. Validation and final integration: one reader-facing result plus process appendix and paths.

## Split Rules

Split into roles when:
- evidence and design judgment are both needed
- solution quality depends on multiple viewpoints
- output will be reviewed or implemented
- user asks for a demo, PRD, competitive analysis, roadmap, or prototype

Do not split when:
- one narrow answer is enough
- user explicitly wants speed over rigor
- role output would be fake busywork
- selected roles cannot produce distinct decisions or evidence
- the "role" would only rename the same reasoning

## Execution Mode

Default for durable medium and complex work: check subagent capability before role execution.

Record:

```text
subagent_capability: supported | unavailable | blocked
execution_mode: subagents | sequential
fallback_reason:
```

Use subagents when:
- the runtime supports subagent or multi-agent orchestration
- two or more selected role tasks are independent
- each role can receive clear context, boundaries, evidence needs, expected output, artifact format, and return path

Use sequential execution when:
- subagents are unavailable, blocked, or unsafe
- tasks are dependent
- the task is simple
- delegation would reduce correctness, evidence quality, or integration clarity

CEO / Manager orchestration, cross-role review, adjudication, validation, and final integration stay with the main agent.

## Handoff Contract

Before role or subagent execution, create a handoff block with:

- task id
- handoff id
- parent goal
- assignee type: role or subagent
- role and task
- context, input sources, constraints, and dependencies
- expected output and evidence requirement
- artifact format and output path
- status and exit condition
- return contract

Use task id to track the role task or subtask, and handoff id to track the delegation record. They may match for simple sequential work, but complex or retried delegation should keep them distinct.

The return contract must require summary, decisions, evidence used, artifacts created, risks, open questions, and next actions. Do not delegate durable work without this return shape.

## Role Skill Routing

For medium and complex work, each role task records portable skill-routing decisions before execution:

- role
- task
- expected output
- recommended skill trigger categories
- skill decision: used / unavailable / not needed
- evidence requirement
- artifact format
- output path

Use runtime skill discovery when available. Do not assume a specific skill name exists on every machine. If a matching skill is unavailable, continue with the role boundary and record the gap.

## Role Contribution Ledger

For durable medium and complex work, keep one unified run-level record of selected role contributions. This ledger answers: which roles were used, why each role was selected, what each role produced, and how that work changed the final artifact.

Use this shape:

- role
- task
- why selected
- key inputs
- key outputs
- decisions influenced
- evidence used
- risks or gaps
- final artifact impact
- status

Medium work should default to one `role-contributions.md` supporting artifact when role work is used. A process appendix `role_contributions` section is acceptable only when the task is very light or the appendix is already the only saved process record. Do not create per-role files by default.

Complex work requires the unified ledger when roles are selected. Per-role files are optional working details for substantial independent role work; they must link back to or summarize into the unified ledger.

The reader-facing artifact should not be organized around the full role ledger. Keep the ledger in the process appendix or supporting layer unless a concise role summary helps the reader trust the recommendation.

## Delivery Discipline

For medium and complex work, record these before execution:

- success criteria
- evidence needed
- review plan
- validation plan

Before completion, record:

- validation performed
- evidence collected
- known risks
- unverified items

Simple tasks do not need formal gates, but unsupported claims must still be marked as assumptions.

## Cross-Role Collaboration

Use cross-role collaboration when selected roles affect the same product decision. Keep it decision-driven: the review target is a decision node, not the fact that multiple roles exist.

Before review, extract from each first-pass role output:

- decisions
- assumptions
- dependencies
- risks
- evidence gaps
- review needed from

Then record:

```text
cross_role_review_decision:
  mode: none | targeted | full
  reason:
  decision_nodes:
```

Use `none` when roles do not materially affect the same decision, when review would produce only generic comments, or when no final artifact section would change.

Use `targeted` when 1-3 decision nodes need challenge from specific roles.

Use `full` only when several decision nodes interact or the review is itself a durable artifact.

Each review item should name:

- target decision
- reviewer role
- challenge type
- concern
- suggested change
- evidence or reason
- impact if ignored
- whether CEO adjudication is required

Review depth:

- Medium: default to `none` or `targeted`; one light review block for material decision nodes only.
- Complex: run the relevance gate first, then create a formal review artifact or review phase output only for `targeted` or `full`.
- CEO / Manager must adjudicate accepted, rejected, and deferred suggestions before final synthesis.
- Final artifacts must reflect accepted changes or state why they were not applied.

## Status Exit Conditions

Durable work cannot be marked complete while collaboration status is unclear.

- `blocked`: close only when the blocker is resolved, accepted as a risk, or moved out of scope with rationale.
- `in_review`: close only when the reviewer approves, requests changes, or review is waived with rationale.
- `needs_follow_up`: close only when owner, trigger, next action, affected artifact or decision, and required/optional status are recorded.
- Final integration must include the disposition of blocked, review, and follow-up items.

## Final Artifact Readability

Final integration produces two layers:

```text
reader_artifact:
process_appendix:
```

`reader_artifact` is written for a busy product or design lead. It should lead with the recommendation, then explain why, the plan or solution, risks, and next steps. Use natural headings in the user's language.

Do not use CEO-branded titles such as "CEO结论", "CEO Summary", or "CEO Brief" as default reader-facing headings. CEO / Manager is an internal orchestration hat, not the default brand for the user's deliverable.

`process_appendix` preserves the evidence trail: assumptions, role outputs, handoffs, review relevance, CEO adjudication, validation, risks, unresolved items, and output paths.

Keep both layers in one artifact by default, with `reader_artifact` first. Split them into separate files only when the artifact is large, the format benefits from separation, or the user asks.

Do not use internal process fields as the main reader-facing outline. Process fields belong in `process_appendix` unless the reader explicitly needs them to make the decision.

## Required Orchestration Decisions

Before executing, produce:
- task classification
- selected roles
- selected phases
- subagent capability
- execution mode
- fallback reason when sequential
- KB needed
- workspace mode and directory plan
- output artifacts
- artifact format decisions
- final artifact layer decision: combined or separate `reader_artifact` and `process_appendix`
- role skill-routing decisions
- role or subagent handoff blocks
- role contribution ledger location
- per-role file decision: none / supporting details only
- blocked, review, and follow-up exit conditions
- success criteria
- evidence needed
- review plan
- validation plan
- cross-role review decision: none / targeted / full
- decision nodes that justify review, if any
- assumptions and open questions

## First Response Shape

Keep the first response proportional to the task:

- Simple: one sentence explaining direct handling, then answer.
- Medium: one short paragraph naming roles, KB status, skill-routing approach, review depth, artifact format, and expected artifact path.
- Complex: a concise plan with roles, phases, workspace mode, KB status, skill-routing approach, review depth, artifact formats, final artifact layers, and final integration criteria.

Write the first response and all user-facing artifact content in the user's current language unless the user asks for another language.

Before saving or returning durable artifact content, run a language consistency pass. Rewrite mixed-language reader-facing headings and prose into the user's language unless the text is a portable schema key, code identifier, quoted source text, product name, or file path.

Do not turn the first response into a full final artifact unless the request is simple.
