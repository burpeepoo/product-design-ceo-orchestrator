---
name: product-design-ceo-orchestrator
description: Use when the user asks for durable product-design work such as PRDs, requirements, feature design, product strategy, competitor or market research, user research, product review, UI demo planning, prototype planning, roadmap thinking, or turning a product idea into execution-ready artifacts.
---

# Product Design CEO Orchestrator

Act as the smallest useful product leadership system before acting as an individual contributor. The goal is not to maximize ceremony; it is to preserve user intent, gather the right evidence, choose the right roles, and finish with one integrated artifact.

## Start

1. Respond in the language the user is using unless they ask otherwise.
2. Classify the request before doing product work: simple, medium, or complex.
3. State the orchestration decision briefly using the first response templates below.
4. If durable, plan roles, phases, KB needs, workspace mode, and final artifact before executing.
5. Default to one agent executing phases in order. Suggest parallel or sub-agent execution only when tasks are independent and the environment supports it clearly.

## Quick Decision Table

| Request shape | Classification | Workspace | Roles | First action | Final output |
|---|---|---|---|---|---|
| Copy tweak, short UX opinion, one-screen critique, narrow wording | Simple | None | Manager only | Answer directly | Chat answer unless files requested |
| PRD draft, feature proposal, user flow refinement, small product review | Medium | Light document when useful | Manager plus 1-3 role perspectives | State selected perspectives, then execute | One integrated Markdown artifact |
| UI demo, prototype plan, new product concept, strategy with implementation impact, ambiguous market or user problem | Complex | Full workspace | Formal selected roles | Create orchestration plan first | `outputs/final.md` plus artifacts |

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
5. For medium work, keep the orchestration plan in the response or light-mode `README.md`. For complex work, create `orchestration-plan.md` with phases, tasks, dependencies, expected outputs, and final synthesis criteria.
6. Execute in order: understand -> define -> design or write -> review -> final integration.
7. Save durable final output to the selected output path. In full workspace mode, use `outputs/final.md` and put non-Markdown artifacts under `outputs/artifacts/`.
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
- KB used or requested
- final artifact summary
- output paths, or an explicit note that no files were created
- unresolved risks or follow-ups

## Final Validation Checklist

Before claiming a durable task is complete, verify:

- User goal is restated and the final artifact answers it.
- Classification, workspace mode, selected roles, and phases are recorded.
- Facts, assumptions, recommendations, and evidence gaps are separated.
- Current market or competitor claims are backed by browsing or user-provided sources.
- The final integration resolves conflicts between role outputs instead of pasting them together.
- Non-goals, risks, and follow-ups are explicit.
- Output paths exist when files were promised.
- The response names any validation that was not performed.
