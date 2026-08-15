# WF-01 to WF-03 — Content Workflow

## WF-01 Content Intake

Trigger:
Manual input / form / approved data source

Steps:

1. Receive input
2. Validate schema
3. Generate content_id
4. Normalize fields
5. Store record
6. Set status = VALIDATING
7. Send to Customer Insight

---

## WF-02 Customer Insight

Input:

content_id
customer_problem
customer_segment

Output:

customer_insight
emotional_context
decision_stage
content_angle

Rules:

Do not invent technical facts.

The insight must remain connected to the customer's real problem.

---

## WF-03 Content Generation

Input:

Customer Insight

Output:

headline
hook
story
analysis
solution
trust
action
cta

Recommended structure:

Problem
→ Insight
→ Explanation
→ Solution
→ Trust
→ Action

Status:

DRAFT → READY
