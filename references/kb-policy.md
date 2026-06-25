# Knowledge Base Policy

KB means the material that should inform the product-design work.

## Decide KB Needs

Ask for or search local context when the task depends on:

- existing product docs
- screenshots or UI flows
- user feedback
- analytics or funnel data
- competitor references
- brand/design system
- technical constraints
- existing code or repo behavior
- prior decisions or roadmaps

## Ask the User When

Ask 1-3 concise questions when missing information changes the output materially.

Examples:
- target user is unknown
- product stage is unknown
- output format is unclear
- source docs or screenshots are required
- competitor list is required and browsing is not enough
- implementation platform matters

Do not block on minor gaps. Mark assumptions and continue.

## Record KB Status

In `kb/README.md`, record:

- needed sources
- provided sources
- sources used
- sources intentionally not used
- open evidence gaps

## Source Of Truth Resolver

When the task depends on existing docs, live Feishu/Lark material, Base records, project cards, Figma, analytics, chat history, or repo behavior, resolve source authority before answering or writing.

```text
source_of_truth:
  primary_source:
  secondary_sources:
  live_write_target:
  source_mutability: live | current_snapshot | stable_reference | stale_or_unknown
  evidence_strength: direct | corroborated | inferred | missing
  sources_intentionally_not_used:
  unresolved_source_gaps:
```

Use direct live sources when a field, owner, status, or document state may have changed. If the first source is blank, keep checking credible secondary sources when the user asked for source-backed truth. Do not infer from memory when an accessible source can verify the answer.

For `live_doc_update` work, record the exact live_write_target, target table/view/field or document section, write scope, and post-write validation handle before editing.

## Use Evidence Carefully

- Do not claim current market facts without browsing or user-provided sources.
- Do not treat a local folder path as permission to summarize everything unless the user allowed it.
- Distinguish facts, assumptions, and recommendations.
- For screenshots/images, state what was visually inferred.
- For data files, state metric definitions, timeframe, and uncertainty.
- For source-backed ownership, status, or requirement answers, state evidence_strength and unresolved source gaps.
- For live document writes, verify the target changed before claiming completion.

## Output Evidence

Final output should include:

- "Used KB" list
- "Assumptions" list
- "Evidence gaps" list
- source-of-truth decision when existing or live sources matter
- "What to collect next" when relevant
