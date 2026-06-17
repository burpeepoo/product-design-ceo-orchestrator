# Pressure Scenarios

Use these scenarios when editing this skill or checking whether it remains easy to use. Each scenario should be tested with and without the skill when subagents are available. Without subagents, use them as a manual review checklist against `SKILL.md` and the reference files.

## Success Signals

An agent using this skill should:

- choose the lightest workflow that can produce a correct result
- explain orchestration decisions briefly
- ask only material questions
- avoid fake role work
- record KB status when evidence matters
- finish durable work with one integrated artifact and explicit risks

## Scenario 1: Tiny Copy Fix Under Process Temptation

User request:

> Help me improve this button label: "Submit all family changes".

Pressures:
- The skill has "CEO" in its name.
- Role and workspace references are available.
- The agent may want to show process.

Expected behavior:
- Classify as simple.
- Use manager only.
- No workspace, role files, or orchestration plan.
- Provide the improved label and a short rationale.

Failure this prevents:
- Creating a multi-role plan for a one-line copy task.

## Scenario 2: Medium PRD Without Heavy Workspace

User request:

> Draft a PRD for calendar conflict reminders. Keep it practical.

Pressures:
- PRD is durable product-design work.
- The user asks to keep it practical.
- Missing details could trigger excessive questions.

Expected behavior:
- Classify as medium.
- Use Manager, Requirements Specialist, and QA / Acceptance Specialist.
- Ask only material questions or proceed with marked assumptions.
- Use light workspace if files are requested or useful; otherwise produce one integrated Markdown artifact.

Failure this prevents:
- Creating full phase folders and every role file before writing a useful PRD.

## Scenario 3: Complex UI Demo Needs Formal Orchestration

User request:

> Design a UI demo for a new family weekly report experience. I need something execution-ready.

Pressures:
- The user wants a demo, not just analysis.
- The task needs design, requirements, feasibility, and review.
- Outputs can easily become scattered.

Expected behavior:
- Classify as complex.
- Use full workspace.
- Select Manager, Product Designer, Requirements Specialist, Tech Lead, and QA / Acceptance Specialist.
- Create an orchestration plan before execution.
- End with `outputs/final.md` and any demo artifacts under `outputs/artifacts/`.

Failure this prevents:
- Producing a loose brainstorm without final integration or artifact paths.

## Scenario 4: Competitor Facts Need Evidence

User request:

> Compare the latest onboarding flows of three family calendar apps and turn it into recommendations.

Pressures:
- "Latest" facts may be unstable.
- The agent may rely on memory.
- Product recommendations need evidence.

Expected behavior:
- Classify as medium or complex depending on depth.
- Use Manager and Market Analyst; add Product Designer if UX comparison is required.
- Browse or use user-provided sources before making current claims.
- Record used KB, assumptions, and evidence gaps.

Failure this prevents:
- Fabricating competitor details or treating stale knowledge as current evidence.

## Scenario 5: User Explicitly Says Keep It Lightweight

User request:

> Review this feature idea quickly. Do not make a big framework.

Pressures:
- Product review normally invites multiple roles.
- The user explicitly rejects ceremony.

Expected behavior:
- Downgrade one level from the default.
- Use a concise manager-led review, optionally naming one extra lens.
- Avoid workspace unless the user asks for files.

Failure this prevents:
- Ignoring the user's lightweight preference because the task sounds strategic.

## Scenario 6: Existing Docs Provided But Permission Is Narrow

User request:

> Use the screenshots in this folder to review the settings flow, but do not summarize unrelated docs.

Pressures:
- A folder path may contain tempting extra context.
- Review quality depends on screenshot evidence.

Expected behavior:
- Use only the allowed screenshots.
- State visual inferences and uncertainty.
- Record sources used and sources intentionally not used.
- Do not summarize unrelated files.

Failure this prevents:
- Treating a local folder as blanket permission to inspect or summarize everything.

## Scenario 7: Final Synthesis Must Resolve Conflicts

User request:

> Turn the research and design notes into a final recommendation.

Pressures:
- Role outputs may disagree.
- Copy-pasting all notes feels complete.
- The user needs a CEO-readable decision.

Expected behavior:
- Create a final integration phase.
- Resolve conflicts explicitly.
- Separate facts, assumptions, recommendations, risks, and follow-ups.
- Provide final artifact path if files were promised.

Failure this prevents:
- Leaving scattered role notes without a decision.

## Manual Verification Checklist

Before deploying edits to this skill, confirm:

- `SKILL.md` description starts with "Use when" and only describes triggers.
- `SKILL.md` includes first response templates and over-orchestration red flags.
- `references/orchestration-model.md` includes a decision table and downgrade rule.
- `references/role-catalog.md` includes a role selection matrix.
- `references/workspace-structure.md` includes none, light, and full workspace modes.
- Durable task completion is checked by the final validation checklist.
- These pressure scenarios still map to explicit instructions in the skill.
