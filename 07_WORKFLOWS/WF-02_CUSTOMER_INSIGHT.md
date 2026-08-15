# WF-02 — Customer Insight

## Purpose

Transform customer information into a useful customer insight.

## Input

content_id
customer_segment
customer_problem

## Flow

Read Input
→ Identify Problem
→ Identify Context
→ Identify Decision Stage
→ Generate Insight
→ Validate
→ WF-03

## Output

customer_insight
emotional_context
decision_stage
content_angle

## Rule

Do not invent customer facts.

The insight must remain connected to the stated customer problem.

## Failure

AI_ERROR
→ WF-14
