# WF-08 — Quality Gate

## Purpose

Prevent unsafe, inaccurate or off-brand content from continuing.

## Score

Accuracy: 0–10
Brand consistency: 0–10
Customer relevance: 0–10
Clarity: 0–10
Trustworthiness: 0–10
Legal/safety sensitivity: 0–10
CTA: 0–10

## Decision

PASS

All critical categories >= 8

REVIEW

Any critical category = 6–7

FAIL

Any critical category <= 5

## Critical

Accuracy
Brand consistency
Trustworthiness
Legal/safety

## Flow

Output
→ Automated Review
→ Score
→ Decision

PASS
→ WF-09

REVIEW
→ WF-09

FAIL
→ WF-03 or WF-07 revision path

Maximum automatic revisions:
3

After 3:
WF-09
