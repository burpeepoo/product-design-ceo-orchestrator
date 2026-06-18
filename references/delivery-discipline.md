# Delivery Discipline

Use these gates for medium and complex product-design work. They protect correctness, evidence, review, and maintainability without replacing the CEO orchestrator workflow.

## Gate Summary

| Gate | When | Required record |
|---|---|---|
| Entry Gate | Before durable work starts | `success_criteria`, `evidence_needed`, `review_plan`, `validation_plan` |
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

## Evidence Gate

Use evidence appropriate to the claim:

- Current market or competitor claims: browse or use user-provided sources.
- Existing product review: use screenshots, product docs, analytics, repo evidence, or clearly marked assumptions.
- Technical feasibility: inspect code, architecture notes, dependencies, or mark as unverified.
- User or data claims: use research, interviews, analytics, experiments, or mark as assumptions.

Do not convert missing evidence into confident recommendations. Record the gap and continue only when the recommendation can still be useful with that limitation.

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

## Red Flags

Stop and tighten the work when any of these appear:

- "This should work" without validation.
- Current market, competitor, user, or technical claims without evidence or assumptions.
- Role outputs pasted together without CEO adjudication.
- Accepted role feedback not reflected in the final artifact.
- User pressure for speed causing skipped evidence, review, or validation.
- Heavy workspace or role files created when a light review would preserve correctness.
