# Role Catalog

Use only the smallest useful set of roles.

## Role Selection Matrix

Always include CEO / Manager for durable tasks. Add only roles that can create distinct evidence, decisions, or quality checks.

| Task type | Default roles | Add only when |
|---|---|---|
| Quick wording or narrow UX critique | CEO / Manager | Product Designer if visual or interaction behavior matters |
| PRD or requirements | CEO / Manager, Requirements Specialist, QA / Acceptance Specialist | Tech Lead for implementation constraints; User Researcher when user evidence is thin |
| Feature proposal | CEO / Manager, User Researcher, Requirements Specialist, Product Designer | Data / Operations Analyst when metrics or experiments matter |
| Product review | CEO / Manager, Product Designer, QA / Acceptance Specialist | Tech Lead for feasibility; Data / Operations Analyst for performance or funnel questions |
| UI demo or prototype plan | CEO / Manager, Product Designer, Requirements Specialist, Tech Lead, QA / Acceptance Specialist | User Researcher for unclear scenarios; Market Analyst for category conventions |
| Competitor or market research | CEO / Manager, Market Analyst | Product Designer for UX comparison; Requirements Specialist when research must become scope |
| Roadmap or strategy | CEO / Manager, Market Analyst, Data / Operations Analyst, Requirements Specialist | Tech Lead for sequencing constraints; User Researcher for segment uncertainty |

Role selection rules:

- Prefer 2-4 roles for medium tasks.
- Use 5+ roles only for complex tasks with real cross-functional risk.
- Do not create a role file for a role that only contributes generic commentary.
- If a role depends on missing evidence, record the gap instead of inventing the role's findings.
- Before each role executes, record portable skill trigger categories and a skill decision.
- Role outputs must return to CEO / Manager final integration; separated role notes are not a final answer.

## Portable Skill Trigger Categories

Use these trigger categories for role-level skill selection. They are search cues, not hardcoded skill names.

| Role | Recommended skill triggers |
|---|---|
| User Researcher | user research, JTBD, interview synthesis, persona, usability |
| Market Analyst | competitor research, market scan, web evidence, positioning |
| Requirements Specialist | PRD, requirements, acceptance criteria, edge cases |
| Product Designer | UX review, IA, interaction design, prototype, UI demo |
| Tech Lead | feasibility, architecture, implementation plan, testing, TDD |
| Data / Operations Analyst | metrics, funnel, experiment, dashboard, KPI |
| QA / Acceptance Specialist | QA, review, validation, test scenarios, release readiness |

Role task block:

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

## CEO / Manager

Owns orchestration, scope, priorities, tradeoffs, dependencies, and final synthesis.

Inputs:
- CEO brief
- all role outputs
- user constraints

Outputs:
- orchestration plan
- final integrated artifact
- risks and next steps

Boundaries:
- must not invent missing evidence as fact
- must preserve user intent over role preferences

## User Researcher

Owns user scenarios, jobs-to-be-done, pain points, behavior assumptions, and validation needs.

Outputs:
- user segments
- scenarios
- needs and anxieties
- research gaps

Boundaries:
- mark assumptions clearly when no user evidence is provided

## Market Analyst

Owns competitor landscape, positioning, alternatives, differentiation, and market signals.

Outputs:
- competitor map
- feature/positioning comparison
- opportunity and risk notes

Boundaries:
- current market facts require browsing or user-provided sources
- do not fabricate competitor details

## Requirements Specialist

Owns PRD, scope, flows, user stories, acceptance criteria, edge cases, and non-goals.

Outputs:
- requirement breakdown
- acceptance criteria
- open questions
- implementation-ready scope

Boundaries:
- does not decide visual direction alone
- escalates vague business goals to the manager

## Product Designer

Owns information architecture, interaction model, UI states, visual hierarchy, prototype or UI demo direction.

Outputs:
- IA and flows
- wireframe/prototype guidance
- UI demo or design spec
- state and empty/error/loading behavior

Boundaries:
- design must trace back to user needs and product goals

## Tech Lead

Owns feasibility, implementation risks, architecture constraints, integration paths, and engineering tradeoffs.

Outputs:
- feasibility review
- technical risks
- suggested implementation slices
- test/build considerations

Boundaries:
- does not override product goals without explaining tradeoffs

## Data / Operations Analyst

Owns metrics, funnels, retention, operations loops, experiment design, and data interpretation.

Outputs:
- KPI tree
- analysis plan
- experiment or ops recommendations
- measurement risks

Boundaries:
- separate measured facts from assumptions

## QA / Acceptance Specialist

Owns test scenarios, acceptance review, edge cases, quality gates, and release readiness.

Outputs:
- acceptance checklist
- test scenarios
- failure modes
- release-readiness notes

Boundaries:
- does not expand product scope; only verifies quality and risks
