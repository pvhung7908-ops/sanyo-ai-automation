# Sanyo Yusoki Vietnam — Workflow Master

## 1. Purpose

07_WORKFLOWS converts the Sanyo AI architecture into executable workflow specifications.

Architecture:

01_CORE
→ 02_VIDEO_BRIEF
→ 03_VEO_3
→ 04_PROMPTS
→ 05_ASSETS
→ 06_N8N
→ 07_WORKFLOWS
→ 08_OUTPUT

---

## 2. Workflow Principle

Each workflow must have:

- Trigger
- Input
- Validation
- Processing
- Decision
- Output
- Error path
- Logging
- Status transition

---

## 3. Master Pipeline

WF-01
→ WF-02
→ WF-03
→ WF-04
→ WF-05
→ WF-06
→ WF-07
→ WF-08
→ WF-09
→ WF-10
→ WF-11
→ WF-12

WF-13 handles errors across all workflows.

---

## 4. Global Status

DRAFT
VALIDATING
READY
PROCESSING
REVIEW
APPROVED
REJECTED
REVISION
PUBLISHED
MEASURED
ARCHIVED
ERROR

---

## 5. Global Rule

No workflow may bypass:

- Brand Profile
- System Master
- Quality Gate
- Human Review when required

---

## 6. Traceability

Every execution must retain:

execution_id
content_id
workflow_id
workflow_version
input_reference
output_reference
timestamp
status

---

## 7. Version

Workflow System: v1.0
Status: Foundation
