# WF-07 — VEO 3 Production

## Purpose

Execute video generation using the approved prompt and assets.

## Input

content_id
brief_id
prompt_id
asset_ids

## Preflight

Check:

Prompt exists
Assets approved
Duration valid
Aspect ratio valid
Brand rules loaded
Negative prompt loaded

## Flow

Preflight
→ Submit Generation
→ Wait
→ Retrieve Output
→ Validate Output
→ Store Version
→ WF-08

## Retry

Maximum automatic production retries:

3

After 3 failures:

ERROR
→ WF-14

## Output

production_id
output_reference
model
generation_status
version
