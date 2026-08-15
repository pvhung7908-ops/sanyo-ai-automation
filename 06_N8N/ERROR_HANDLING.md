# WF-14 — Error Handling

## Error Classes

INPUT_ERROR
AI_ERROR
ASSET_ERROR
PRODUCTION_ERROR
QUALITY_ERROR
SYSTEM_ERROR

---

## INPUT_ERROR

Action:

Reject
→ Log
→ Request corrected input

---

## AI_ERROR

Action:

Retry
→ Retry with fallback parameters
→ Human review if repeated

Maximum automatic retries:
3

---

## ASSET_ERROR

Action:

Search approved alternative
→ If unavailable: Human Review

---

## PRODUCTION_ERROR

Action:

Retry
→ Validate inputs
→ Retry once with fallback
→ Human Review

---

## QUALITY_ERROR

Action:

Revision
→ Regenerate
→ Quality Gate

Maximum:
3 automatic revisions

---

## SYSTEM_ERROR

Action:

Log error
→ Capture workflow
→ Capture execution ID
→ Alert operator

---

## Principle

Never silently discard an execution.
