# Product Design CEO Orchestrator

A reusable agent skill for product-management and product-design work that benefits from CEO-style orchestration without unnecessary ceremony.

The skill helps an agent decide when to answer directly, when to use a few product-role perspectives, when each role should route to another available skill, when role outputs should review each other, and when to create a full multi-phase workspace for durable product artifacts such as PRDs, feature proposals, UI demo plans, competitor research, product reviews, existing product optimization, UX redesign, and roadmap strategy.

## What This Skill Optimizes For

- correct scope before execution
- correctness, evidence, and long-term maintainability over fastest possible output
- user-facing artifacts that follow the user's current language
- the lightest useful workflow
- explicit role selection
- subagent orchestration when the runtime supports it and role tasks are independent
- structured handoff contracts for role and subagent work
- portable role-level skill routing
- delivery discipline gates before claiming durable work is complete
- explicit blocked, review, and follow-up exit conditions
- cross-role collaboration and CEO adjudication when roles disagree
- evidence-aware product recommendations
- knowledge-base-ready artifacts instead of scattered notes
- artifact formats chosen for the work instead of forced Markdown
- clear validation before claiming completion

## When It Activates

Use this skill when the user asks for durable product-design work such as:

- PRDs and requirements
- feature design and user flows
- existing product optimization
- UX improvement, redesign, and flow optimization
- product audits and feature iteration
- product strategy and roadmap thinking
- competitor or market research
- user research synthesis
- product reviews
- UI demo or prototype planning
- turning a product idea into execution-ready artifacts

For tiny copy tweaks or narrow UX opinions, the skill intentionally downgrades to a lightweight manager-only response.

## Repository Layout

```text
.
├── SKILL.md
├── README.md
├── LICENSE
├── package.json
├── skill.json
├── bin/
│   └── product-design-ceo-orchestrator.js
├── lib/
│   └── install.js
├── references/
│   ├── kb-policy.md
│   ├── delivery-discipline.md
│   ├── orchestration-model.md
│   ├── role-catalog.md
│   └── workspace-structure.md
└── tests/
    ├── install.test.js
    └── pressure-scenarios.md
```

## Install

### npm / npx

Install explicitly with `npx`:

```bash
npx product-design-ceo-orchestrator install --ai codex
```

Supported explicit targets:

```bash
npx product-design-ceo-orchestrator install --ai codex
npx product-design-ceo-orchestrator install --ai claude
npx product-design-ceo-orchestrator install --ai cursor
```

Overwrite an existing local copy:

```bash
npx product-design-ceo-orchestrator install --ai codex --force
```

Install into a custom agent skills directory:

```bash
npx product-design-ceo-orchestrator install \
  --target ~/.my-agent/skills/product-design-ceo-orchestrator
```

Preview the target path without writing files:

```bash
npx product-design-ceo-orchestrator install --ai codex --dry-run
```

### Codex

Manual Git install for Codex:

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/burpeepoo/product-design-ceo-orchestrator.git \
  ~/.codex/skills/product-design-ceo-orchestrator
```

Restart Codex or open a new session after installation.

### Claude Code

Manual Git install for Claude Code:

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/burpeepoo/product-design-ceo-orchestrator.git \
  ~/.claude/skills/product-design-ceo-orchestrator
```

### Other Agent Runtimes

If your agent supports local skills, copy or clone this repository into that runtime's skills directory. The required entry point is:

```text
SKILL.md
```

The `references/` and `tests/` folders should stay next to `SKILL.md`.

## Update

If installed with npm / npx, re-run the explicit install with `--force`:

```bash
npx product-design-ceo-orchestrator@latest install --ai codex --force
```

If installed with Git, update an installed copy with:

```bash
cd ~/.codex/skills/product-design-ceo-orchestrator
git pull --ff-only
```

Use the equivalent path for other agent runtimes.

## Usage

Ask naturally for product-design help. Examples:

```text
Draft a PRD for calendar conflict reminders.
```

```text
Review this product idea quickly. Do not make a big framework.
```

```text
Design a UI demo for a new family weekly report experience. I need something execution-ready.
```

```text
Review our current settings page and propose an optimization plan.
```

The skill chooses among three operating modes:

| Mode | Use when | Output |
|---|---|---|
| None | quick critique, copy, narrow UX suggestion | chat answer |
| Light | medium PRD, proposal, existing product optimization, review, flow, research summary | artifact index plus knowledge-base-ready artifacts |
| Full | complex work with roles, phases, KB, artifacts, or handoff | workspace with `outputs/` artifacts and index |

## Role-Level Skill Routing

For medium and complex tasks, each selected role records a portable skill-routing decision before execution:

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

The skill uses trigger categories rather than hardcoded local skill names. For example, Market Analyst may look for competitor research, market scan, web evidence, or positioning skills; Product Designer may look for UX review, IA, interaction design, prototype, or UI demo skills. If the runtime does not provide a matching skill, the role records `unavailable` and continues.

## Subagent Execution

For medium and complex tasks, the skill records whether the runtime supports subagent orchestration. If supported and role tasks are independent, those tasks are assigned to subagents with explicit context, evidence requirements, expected output, artifact format, and return path.

If subagents are unavailable, blocked, unsafe, or the tasks are dependent, the skill falls back to sequential execution and records the reason. CEO / Manager orchestration, cross-role review, adjudication, validation, and final integration stay with the main agent.

## Handoff And Status Closure

Role and subagent work uses structured handoff blocks: task id, handoff id, parent goal, role, task, context, sources, constraints, dependencies, expected output, evidence requirement, artifact format, output path, status, exit condition, and return contract.

Blocked, review, and follow-up items must have owners, exit conditions, and final dispositions. Durable work should not be marked complete while a blocking status is unresolved or while review/follow-up ownership is unclear.

## Output Language

The skill writes chat responses and user-facing saved artifacts in the user's current language unless another language is requested. This includes Markdown files, workspace indexes, orchestration plans, role outputs, reviews, decision logs, and final artifacts.

Portable schema keys may remain in English, but headings, narrative, recommendations, risks, and follow-ups should follow the user's language.

## Delivery Discipline

Medium and complex tasks define success criteria, evidence needs, review plan, and validation plan before execution. Before claiming durable work is complete, the final output records validation performed, evidence collected, known risks, and unverified items.

This skill optimizes for correctness, evidence, and maintainability. It does not optimize for the fastest possible answer when speed would hide uncertainty or skip validation.

## Cross-Role Collaboration

When selected roles materially affect the same product decision, their first-pass outputs go through a cross-role review. Roles record suggestions, concerns, questions, and conflicts; CEO / Manager then adjudicates accepted, rejected, and deferred feedback before the final artifact is revised.

## Knowledge Artifacts

Medium and complex tasks default to a saveable artifact suitable for a knowledge base. The artifact does not have to be Markdown:

- PRDs, product rules, strategy, and decision records: Markdown or document format.
- Stakeholder review pages, visual walkthroughs, and UI critiques: HTML, image-backed review page, or slide/document format.
- Competitor tables, metric reviews, and structured comparisons: CSV/XLSX, Markdown table, or data-backed report.
- Visual explanation or prototype direction: HTML, image, diagram, or design-spec document.
- Structured reusable data: JSON or another explicit schema.

Simple tasks stay lightweight unless the user asks for a saved artifact.

## Validation

The skill includes pressure scenarios in `tests/pressure-scenarios.md`. Use them when changing the skill to verify it still:

- avoids over-orchestration
- keeps saved artifacts in the user's language
- uses role perspectives only when they add distinct value
- uses subagents for independent role tasks when supported, with sequential fallback when unsupported
- uses structured handoff contracts for role and subagent tasks
- closes blocked, review, and follow-up states before claiming durable work is complete
- routes role tasks to portable skill triggers when useful
- applies delivery discipline gates for durable medium/complex work
- uses cross-role collaboration and CEO adjudication when role perspectives interact
- creates knowledge-base-ready artifacts for medium/complex work
- allows artifact format to fit the content instead of forcing Markdown
- recognizes existing product optimization as in scope
- records KB and evidence status when needed
- backs current market or competitor claims with sources
- finishes durable work with one integrated recommendation

Basic static checks:

```bash
npm test
npm pack --dry-run
test -s SKILL.md
test -s references/delivery-discipline.md
test -s references/orchestration-model.md
test -s references/role-catalog.md
test -s references/workspace-structure.md
test -s references/kb-policy.md
test -s tests/pressure-scenarios.md
rg -n "description: Use when|Output Language Contract|Subagent Execution Mode|Delivery Discipline Gates|Cross-Role Collaboration Loop|Role Selection Matrix|Workspace Modes|Pressure Scenarios" .
```

## Publishing Workflow

Future updates should be committed and pushed to this repository:

```bash
git status -sb
git add SKILL.md README.md LICENSE package.json skill.json .gitignore bin lib references tests
git commit -m "update product design ceo orchestrator skill"
git push
```

For npm releases:

```bash
npm test
npm pack --dry-run
npm login --auth-type=web
npm publish --auth-type=web
```

Use the web/passkey flow for npm publishing. Complete the browser prompt with the account passkey or security key; do not ask another agent to handle the secret factor. If publishing returns `EOTP` because the local CLI session is still using an older token, refresh the session with `npm login --auth-type=web` and retry `npm publish --auth-type=web`.

For larger behavior changes, update `tests/pressure-scenarios.md` first so the expected behavior is explicit before editing the skill.

## License

MIT. See `LICENSE`.
