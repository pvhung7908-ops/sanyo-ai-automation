# WF-13 — Error Handler

## Purpose

Centralized error handling for all workflows.

## Error Classes

INPUT_ERROR
AI_ERROR
ASSET_ERROR
PRODUCTION_ERROR
QUALITY_ERROR
SYSTEM_ERROR

## INPUT_ERROR

Reject
→ Log
→ Request correction

## AI_ERROR

Retry
→ Fallback
→ Human Review

Maximum retries:
3

## ASSET_ERROR

Find approved alternative
→ Human Review if unavailable

## PRODUCTION_ERROR

Retry
→ Validate
→ Fallback
→ Human Review

## QUALITY_ERROR

Revision
→ Regenerate
→ Quality Gate

Maximum revisions:
3

## SYSTEM_ERROR

Log:

execution_id
workflow_id
content_id
error_type
error_message
timestamp

→ Alert Operator

## Rule

Never silently discard an execution.
