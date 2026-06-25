# Delivery Discipline

Use these gates for medium and complex product-design work. They protect correctness, evidence, review, and maintainability without replacing the CEO orchestrator workflow.

## Gate Summary

| Gate | When | Required record |
|---|---|---|
| Entry Gate | Before durable work starts | `success_criteria`, `evidence_needed`, `review_plan`, `validation_plan`, readiness/source/boundary needs |
| Evidence Gate | Before making claims or recommendations | sources used, assumptions, evidence gaps |
| Review Gate | After first-pass role outputs | cross-role suggestions, concerns, questions, conflicts |
| Completion Gate | Before claiming completion | `validation_performed`, `evidence_collected`, `known_risks`, `unverified_items` |

Simple tasks do not need formal gates, files, or role collaboration unless the user asks for durable output. Still avoid unsupported claims.

## Entry Gate

Before medium or complex execution, define:

```text
success_criteria:
evidence_needed:
review_plan:
validation_plan:
```

Keep these short. The point is to make correctness checkable before writing the artifact.

For PRDs, stories, task splitting, acceptance criteria, or implementation-ready requirements, also define:

```text
requirement_readiness:
  actor:
  goal:
  value:
  scope_boundary:
  dependencies:
  assumptions:
  acceptance_criteria:
  INVEST_check:
  split_needed:
  readiness_disposition:
```

If acceptance criteria, dependencies, or INVEST_check fail, split, rewrite, or document the risk before treating the requirement as ready.

For product strategy, existing-product optimization, setting placement, or adjacent product surfaces, also define boundary and reuse status:

```text
boundary_and_reuse:
  global_vs_local:
  existing_contract:
  adjacent_product_owner:
  reuse_boundary:
  do_not_repeat:
  out_of_scope_because_existing_surface:
```

## Evidence Gate

Use evidence appropriate to the claim:

- Current market or competitor claims: browse or use user-provided sources.
- Existing product review: use screenshots, product docs, analytics, repo evidence, or clearly marked assumptions.
- Technical feasibility: inspect code, architecture notes, dependencies, or mark as unverified.
- User or data claims: use research, interviews, analytics, experiments, or mark as assumptions.

Do not convert missing evidence into confident recommendations. Record the gap and continue only when the recommendation can still be useful with that limitation.

Resolve source authority for source-backed or live-update work:

```text
source_of_truth:
  primary_source:
  secondary_sources:
  live_write_target:
  source_mutability:
  evidence_strength:
  sources_intentionally_not_used:
  unresolved_source_gaps:
```

## Scenario Matrix

Use a scenario_matrix when state, settings, platform behavior, data fields, roles, permissions, localization, analytics, QA, compliance, or cross-module effects could change the recommendation.

```text
scenario_matrix:
  - scenario:
    trigger_or_input:
    expected_behavior:
    affected_surface_or_data_field:
    acceptance_check:
    evidence_status:
```

The matrix should feed acceptance criteria, risk, QA, and follow-up decisions. If omitted for a state-heavy requirement, state why.

## Review Gate

Medium tasks use a light review by the selected role perspectives. Complex tasks use a formal cross-role collaboration loop.

The review output can be Markdown, document, spreadsheet, HTML, JSON, or another format that fits the work. Record:

```text
reviewer_role:
reviews:
suggestions:
concerns:
questions:
conflicts:
```

## CEO Adjudication

CEO / Manager decides how role feedback changes the final artifact:

```text
accepted_changes:
rejected_changes_with_reasons:
deferred_questions:
final_artifact_updates:
```

Rejected or deferred suggestions need a reason. The final artifact must reflect accepted changes.

## Completion Gate

Before claiming a durable task is complete, record:

```text
validation_performed:
evidence_collected:
known_risks:
unverified_items:
```

If validation was not possible, say so directly. Completion without validation status is not complete.

Keep completion evidence in the process appendix or supporting layer unless it is needed for the reader-facing decision. The final reader artifact should lead with the recommendation, not the validation log.

## Red Flags

Stop and tighten the work when any of these appear:

- "This should work" without validation.
- PRD or task artifacts written before acceptance criteria and INVEST_check are clear.
- Source-backed answers that skip primary source, secondary sources, live_write_target, or evidence_strength.
- New strategy that ignores global/local, existing-contract, reuse_boundary, or do_not_repeat checks.
- State-heavy requirements without a scenario_matrix or explicit omission reason.
- Current market, competitor, user, or technical claims without evidence or assumptions.
- Role outputs pasted together without CEO adjudication.
- Selected role work has no unified contribution ledger or no stated final artifact impact.
- Accepted role feedback not reflected in the final artifact.
- Per-role files become competing sources of truth instead of supporting the unified ledger.
- Final reader artifact starts with role, handoff, validation, or decision-node logs instead of the recommendation.
- User pressure for speed causing skipped evidence, review, or validation.
- Heavy workspace or role files created when a light review would preserve correctness.
