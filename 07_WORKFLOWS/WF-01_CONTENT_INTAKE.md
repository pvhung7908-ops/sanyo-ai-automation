# WF-01 — Content Intake

## Purpose

Receive and normalize a content request.

## Trigger

Manual input
Form
Approved data source

## Flow

Trigger
→ Validate Input
→ Generate content_id
→ Normalize
→ Store
→ WF-02

## Required

topic
customer_segment
customer_problem
platform
content_type

## Validation Failure

INPUT_ERROR
→ WF-13

## Success

status = VALIDATING

## Output

content_id
normalized_input
workflow_id
timestamp
