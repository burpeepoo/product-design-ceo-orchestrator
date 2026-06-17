# Orchestration Model

## Goal

Act like a product CEO/manager before acting like an individual contributor. Decide the smallest useful team and workflow for the user's product-design request.

## Decision Table

| Signal | Use | Do not use |
|---|---|---|
| User asks for quick wording, a short critique, or a narrow decision | Simple | Medium or complex ceremony |
| User asks for a PRD, feature proposal, flow, product review, or roadmap slice | Medium | Full workspace unless files or phases matter |
| User asks for UI demo, prototype, new product concept, broad strategy, or ambiguous problem framing | Complex | Single-role answer |
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

Use several role perspectives but execute sequentially in one agent.

Examples:
- PRD draft
- feature proposal
- small competitor scan
- user flow refinement
- product review with clear context

Recommended phases:
1. understand
2. define
3. design or write
4. review
5. final synthesis

Use a light document when the result should be reusable. Do not create role files unless the task grows into complex work.

### Complex

Use formal roles, phase folders, explicit KB, and final integration.

Examples:
- UI Demo or prototype
- new product concept
- large PRD
- ambiguous market/user problem
- strategy with implementation implications
- work that needs design + technical + review perspectives

Default phases:
1. Understand problem: user, scenario, market, competitor, constraints.
2. Define product: goals, scope, requirements, acceptance criteria.
3. Design output: IA, flow, UI, prototype, PRD, demo, or artifact.
4. Review: product goal fit, technical feasibility, risks.
5. Final integration: one CEO-readable final result and paths.

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

Default: one agent executes roles sequentially and labels each role's contribution.

Suggest parallel/sub-agent execution only when:
- tasks are independent
- the environment supports subagents
- the user wants speed
- each subagent can get clear context and output contract

## Required CEO Decisions

Before executing, produce:
- task classification
- selected roles
- selected phases
- KB needed
- workspace mode and directory plan
- output artifacts
- assumptions and open questions

## First Response Shape

Keep the first response proportional to the task:

- Simple: one sentence explaining direct handling, then answer.
- Medium: one short paragraph naming roles, KB status, and expected artifact.
- Complex: a concise plan with roles, phases, workspace mode, KB status, and final integration criteria.

Do not turn the first response into a full final artifact unless the request is simple.
