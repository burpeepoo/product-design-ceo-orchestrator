# Pressure Scenarios

Use these scenarios when editing this skill or checking whether it remains easy to use. Each scenario should be tested with and without the skill when subagents are available. Without subagents, use them as a manual review checklist against `SKILL.md` and the reference files.

## Success Signals

An agent using this skill should:

- choose the lightest workflow that can produce a correct result
- explain orchestration decisions briefly
- ask only material questions
- avoid fake role work
- record KB status when evidence matters
- route each role task to portable skill triggers when useful
- use multiple subagents for independent role tasks when the runtime supports subagent orchestration
- fall back to sequential execution when subagents are unavailable, blocked, or unsafe
- create structured handoff blocks for role or subagent tasks before delegation
- close blocked, review, and follow-up statuses with explicit exit conditions before final completion
- write user-facing responses, saved artifacts, Markdown files, role outputs, plans, and indexes in the user's current language unless the user requests another language
- record selected roles, role tasks, key outputs, and final artifact impact in one unified role contribution ledger when role work is used
- define success criteria, evidence needs, review plan, and validation plan before durable work
- use cross-role review when selected role perspectives can improve or challenge each other
- drive cross-role review from shared decision nodes rather than from role count alone
- show CEO adjudication for accepted, rejected, or deferred role suggestions
- keep final CEO summaries reader-facing, with process details separated from the main recommendation
- finish durable medium/complex work with a knowledge-base-ready artifact and explicit risks

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

## Scenario 8: Role Task Selects Portable Skill Triggers

User request:

> Compare three competitors and turn the findings into a product recommendation.

Pressures:
- The CEO has already selected Market Analyst.
- The runtime may or may not have a concrete competitor-analysis skill installed.
- The agent may skip skill selection and just write from memory.

Expected behavior:
- Create a role task block for Market Analyst.
- Include recommended skill triggers such as market research, competitor research, web evidence, and positioning.
- Record the skill decision as used, unavailable, or not needed.
- Record evidence requirement and artifact format before executing.
- Return role output to CEO final integration.

Failure this prevents:
- Role work bypassing available skills or leaving skill choice invisible.

## Scenario 9: Existing Product Optimization Is Supported

User request:

> Review our current settings page and propose an optimization plan.

Pressures:
- The request is about an existing product, not a new idea.
- It may look like a quick critique.
- The output should be reusable by the product team.

Expected behavior:
- Classify as medium unless the user explicitly asks for a quick take.
- Use light workspace by default.
- Select Product Designer and QA / Acceptance Specialist, adding Tech Lead only if implementation constraints matter.
- Produce a knowledge-base-ready artifact, not only chat notes.

Failure this prevents:
- Treating the skill as only for new product ideas or new PRDs.

## Scenario 10: Medium PRD Persists A Knowledge Artifact

User request:

> Draft a PRD for calendar conflict reminders.

Pressures:
- The answer could fit in chat.
- The user did not explicitly ask for a file.
- PRD decisions should remain reusable.

Expected behavior:
- Classify as medium.
- Use light workspace by default.
- Create an artifact index and one PRD artifact in an appropriate format.
- Record artifact format, output path, assumptions, evidence gaps, and follow-ups.

Failure this prevents:
- Losing durable product decisions inside chat context.

## Scenario 11: Artifact Format Is Chosen By Content

User request:

> Compare competitor onboarding patterns and include a table, then create a visual review page for stakeholders.

Pressures:
- Markdown is easy but may not be the best review format.
- The task includes table comparison and stakeholder review.

Expected behavior:
- Allow CSV/XLSX or Markdown table for the comparison artifact.
- Allow HTML or image-backed artifact for the visual review page.
- Record why each format was chosen.
- Do not force Markdown unless the user asked for Markdown.

Failure this prevents:
- Over-constraining knowledge artifacts to Markdown.

## Scenario 12: Simple Copy Does Not Force Artifact

User request:

> Make this button copy clearer: "Save family edits".

Pressures:
- The skill now prefers durable artifacts for medium/complex work.
- The agent may over-apply artifact persistence.

Expected behavior:
- Classify as simple.
- Do not create files unless the user asks for a saved artifact.
- Provide the revised copy and concise rationale.

Failure this prevents:
- Generating unnecessary knowledge-base artifacts for tiny tasks.

## Scenario 13: Delivery Discipline Under Completion Pressure

User request:

> Create an execution-ready PRD for family calendar conflict reminders. We need to ship this soon, so just get it done.

Pressures:
- The user emphasizes speed and completion.
- The output is medium durable product work.
- It is tempting to skip success criteria and validation details.

Expected behavior:
- Classify as medium.
- Define success criteria, evidence needed, review plan, and validation plan before writing the PRD.
- End with validation performed, evidence collected, known risks, and unverified items.
- Keep the workflow light; do not create a full workspace unless the task grows.

Failure this prevents:
- Declaring durable work complete without evidence or validation status.

## Scenario 14: Cross-Role Conflict Needs CEO Adjudication

User request:

> Design a new onboarding flow. The designer wants it extremely minimal, but support keeps asking for more edge-case guidance.

Pressures:
- Product Designer and Requirements / QA perspectives conflict.
- The agent may paste both opinions without deciding.
- A minimal flow may hide important failure modes.

Expected behavior:
- Run first-pass role outputs before final synthesis.
- Use cross-role review so Requirements / QA challenge missing states, boundaries, and acceptance coverage.
- Have CEO / Manager adjudicate accepted, rejected, and deferred suggestions with reasons.
- Revise the final artifact based on the adjudication.

Failure this prevents:
- Treating role conflict as a list of opinions instead of a product decision.

## Scenario 15: Tech Lead Finds Feasibility Risk After Design

User request:

> Plan a polished UI demo for weekly reports, but assume engineering can probably build whatever we design.

Pressures:
- The request encourages optimism about feasibility.
- A strong design output may look complete before technical review.
- Implementation risk may require scope slicing.

Expected behavior:
- Include Tech Lead when feasibility matters.
- Let Tech Lead challenge product/design on cost, dependencies, integration risk, and implementation slices.
- Update the final plan or explicitly record unresolved technical risk.
- Do not claim execution readiness if validation or feasibility remains unverified.

Failure this prevents:
- Shipping a beautiful plan that ignores implementation constraints.

## Scenario 16: Market Or Data Challenge Product Direction

User request:

> Add a premium family insights feature. I think competitors probably do this already, so just make ours better.

Pressures:
- Differentiation and evidence are uncertain.
- The agent may invent competitor facts or skip measurement.
- Product direction needs market or data challenge.

Expected behavior:
- Use Market Analyst and, when metrics matter, Data / Operations Analyst.
- Market / Data challenge the direction on differentiation, KPI impact, and experimentability.
- Use browsing or user-provided sources for current competitor claims.
- CEO / Manager accepts, rejects, or defers challenges with rationale.

Failure this prevents:
- Turning an assumption-heavy idea into a confident roadmap without evidence.

## Scenario 17: Urgent Complex Request Stays Disciplined But Not Bloated

User request:

> Quickly redesign our settings flow, include implementation considerations, and make it ready for leadership review today.

Pressures:
- The user says quickly.
- The task is complex enough to need product, design, technical, and review lenses.
- The agent may either over-orchestrate or skip validation.

Expected behavior:
- Preserve necessary evidence and validation gates despite time pressure.
- Use the smallest useful cross-role loop: first-pass outputs, targeted cross-review, CEO adjudication, final revision.
- Avoid unnecessary role files or phases that do not add evidence or decisions.
- End with evidence, review, validation, known risks, and unverified items.

Failure this prevents:
- Confusing speed with skipping review, or confusing discipline with heavy ceremony.

## Scenario 18: Subagent Support Changes Execution Mode

User request:

> Create a full product audit for our onboarding flow, including research, UX review, feasibility, and QA readiness.

Pressures:
- The task has independent role work.
- Some runtimes support multiple subagents and some do not.
- The agent may always execute sequentially because earlier rules say "default one agent".

Expected behavior:
- Detect and record subagent capability before execution: supported / unavailable / blocked.
- If supported, assign independent role tasks to separate subagents with role boundaries, context, expected output, evidence requirements, artifact format, and return path.
- Keep CEO / Manager orchestration, cross-role review, adjudication, validation, and final integration in the main agent.
- If unavailable, blocked, unsafe, or tasks are dependent, execute roles sequentially and record the fallback reason.

Failure this prevents:
- Leaving supported subagent orchestration unused, or pretending subagents exist when the runtime cannot run them safely.

## Scenario 19: Artifact Language Follows The Conversation

User request:

> 帮我写一个中文 PRD，输出到 md 文档里。

Pressures:
- The skill body and first response templates are written in English.
- The durable artifact is Markdown, which may inherit English section labels.
- Role task blocks use English field names.

Expected behavior:
- Respond in Chinese.
- Write the saved Markdown artifact's headings, narrative, recommendations, risks, and follow-ups in Chinese.
- Keep only portable schema field keys in English when useful, but write field values and user-facing explanations in Chinese.
- Do not let English templates, role names, or source material language override the user's requested language.

Failure this prevents:
- Producing an English Markdown artifact for a Chinese conversation.

## Scenario 20: Subagent Handoff Needs A Return Contract

User request:

> 做一个复杂的竞品 + UX + 技术可行性分析，如果可以就让多个子 agent 分头做。

Pressures:
- The task naturally splits across Market Analyst, Product Designer, and Tech Lead.
- The agent may dispatch subagents with only a vague role name.
- Returned outputs may be hard to integrate if expected evidence and return shape are missing.

Expected behavior:
- Create a structured handoff block for each delegated role or subagent task before dispatch.
- Include task id, parent goal, role, context, input sources, constraints, dependencies, expected output, evidence requirement, artifact format, output path, status, exit condition, and return contract.
- Require returned outputs to include summary, decisions, evidence used, artifacts, risks, open questions, and next actions.
- CEO / Manager integrates returned outputs rather than leaving handoff notes as the final answer.

Failure this prevents:
- Subagents producing useful-looking but incompatible notes that cannot be reviewed or integrated.

## Scenario 21: Blocked Review Follow-Up Status Must Close Before Done

User request:

> 先把产品优化方案写出来，细节问题可以后面再说，今天先当完成。

Pressures:
- The user wants completion despite unresolved questions.
- Some role feedback may still be in review or follow-up.
- The artifact can look complete while collaboration state is unclear.

Expected behavior:
- If a blocker exists, record blocker owner, missing input or decision, evidence already checked, unblock request, fallback option, and exit condition.
- If review is pending, record reviewer, review scope, requested decision, due condition, and whether the final artifact can be released without it.
- If follow-up remains, record owner, trigger, next action, artifact or decision affected, and whether it is required or optional.
- Do not mark the durable task complete unless all blocking statuses are resolved, explicitly accepted as risks, or moved out of scope with rationale.

Failure this prevents:
- Declaring the artifact done while blocked, review, or follow-up work is still ambiguous.

## Scenario 22: Cross-Role Review Must Be Decision-Driven

User request:

> 优化现有设置页的信息架构，给我一个可以落地的方案，但不要做没必要的流程。

Pressures:
- The task may select Product Designer, Requirements Specialist, and QA / Acceptance Specialist.
- The agent may run all selected roles through generic cross-review because multiple roles exist.
- Role comments may become ceremonial and fail to change the final artifact.

Expected behavior:
- After first-pass role outputs, extract decisions, assumptions, dependencies, risks, evidence gaps, and review_needed_from.
- Create a `cross_role_review_decision` with mode `none`, `targeted`, or `full`.
- Use `targeted` review only when specific `decision_nodes` show shared ownership, conflicting assumptions, feasibility risk, missing states, validation gaps, or expected artifact changes.
- Skip cross-role review when roles do not materially affect the same decision, and record the reason.
- Require each review item to name `target_decision`, `challenge_type`, concern, suggested change, evidence or reason, impact if ignored, and whether CEO adjudication is needed.
- CEO / Manager adjudicates only material review items and maps accepted changes back to artifact sections.

Failure this prevents:
- Running role-by-role review as a ritual when no final decision or artifact section would change.

## Scenario 23: Final CEO Summary Must Be Reader-Facing

User request:

> 帮我优化现有设置页，最后输出一个中文 md，给产品和设计负责人评审。

Pressures:
- The task requires role work, evidence, review, handoff, validation, and decision nodes.
- The agent may make internal process fields the main Markdown structure.
- The final artifact needs to be read, forwarded, and used for decision-making.

Expected behavior:
- The final Markdown starts with a `reader_artifact` layer written for a busy product/design lead.
- The reader-facing body uses natural Chinese headings such as recommendation, why, plan, risks, and next steps.
- The main body does not use internal schema names such as `role`, `handoff`, `validation`, or `decision_nodes` as primary headings.
- The recommendation appears before process details.
- Each major reader-facing section helps the reader make or understand a decision.
- Evidence, assumptions, role outputs, handoffs, review relevance, CEO adjudication, validation, unresolved items, and output paths are moved into a `process_appendix` layer.

Failure this prevents:
- Producing a final CEO summary that reads like an agent process log instead of a product decision document.

## Scenario 24: Role Contributions Need A Unified Ledger

User request:

> 做一个设置页优化方案，使用必要角色，但我希望之后能看清每个角色到底贡献了什么。

Pressures:
- The task may select Product Designer, Requirements Specialist, QA / Acceptance Specialist, and possibly Tech Lead.
- The agent may scatter role outputs across the final Markdown, process notes, and optional per-role files.
- Per-role files can hide the CEO-level record of which roles actually changed the final decision.

Expected behavior:
- Classify as medium unless the request grows into a complex audit.
- Do not create a ledger for simple tasks unless the user asks for a saved process record.
- For medium/light work, default to one `role-contributions.md` when role work is used; use a `role_contributions` section in `process_appendix` only when that is the simpler saved process record.
- For complex/full work, require the unified role contribution ledger and create per-role files only for substantial independent details.
- Record each selected role with `role`, `task`, `why_selected`, `key_inputs`, `key_outputs`, `decisions_influenced`, `evidence_used`, `risks_or_gaps`, `final_artifact_impact`, and `status`.
- Keep the final reader artifact focused on the recommendation; put the full role ledger in the process appendix or supporting artifact.
- If per-role files exist, they must summarize or link back to the unified ledger.
- If a role has `no material impact`, record that and avoid keeping similar fake role work next time.

Failure this prevents:
- Losing role contributions across scattered notes, bloating the reader artifact with process fields, or ending without a single source of truth for role impact.

## Manual Verification Checklist

Before deploying edits to this skill, confirm:

- `SKILL.md` description starts with "Use when" and only describes triggers.
- `SKILL.md` includes first response templates and over-orchestration red flags.
- `SKILL.md` requires user-facing artifacts and saved files to follow the user's current language.
- `SKILL.md` includes delivery discipline gates without replacing the CEO orchestrator workflow.
- `SKILL.md` includes cross-role collaboration and CEO adjudication for medium/complex work.
- `references/orchestration-model.md` includes a decision table and downgrade rule.
- `references/role-catalog.md` includes a role selection matrix.
- `references/role-catalog.md` includes collaboration boundaries between roles.
- `references/workspace-structure.md` includes none, light, and full workspace modes.
- `references/workspace-structure.md` allows evidence, review, validation, cross-role review, and decision-log artifacts without forcing Markdown.
- `references/delivery-discipline.md` defines entry, evidence, review, and completion gates.
- Medium and complex tasks default to knowledge-base-ready artifacts without forcing Markdown.
- Durable artifacts preserve the user's language unless another language is explicitly requested.
- Role tasks include portable skill trigger routing and visible skill decisions.
- Selected role contributions are recorded in one unified ledger with final artifact impact.
- Per-role files, when present, support the unified ledger instead of replacing it.
- Independent role tasks use subagents when supported and fall back to sequential execution when not supported.
- Role or subagent delegation includes a structured handoff block and return contract.
- Blocked, review, and follow-up statuses have explicit owners, exit conditions, and final disposition.
- Cross-role review uses a review relevance gate and decision nodes rather than role count alone.
- Review items identify target decisions, challenge type, expected impact, and whether CEO adjudication is required.
- Cross-role suggestions, concerns, questions, and conflicts return to CEO adjudication.
- Final CEO summaries use a reader-facing body before process details.
- Process-heavy role, handoff, evidence, review, and validation details live in a process appendix or equivalent supporting layer.
- Durable task completion is checked by the final validation checklist.
- These pressure scenarios still map to explicit instructions in the skill.
