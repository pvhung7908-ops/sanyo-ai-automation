# Sanyo Yusoki Vietnam — Workflow Master

## 1. Purpose

07_WORKFLOWS converts the Sanyo AI architecture into executable workflow specifications.

---

## 2. Master Architecture

01_CORE
→ 02_VIDEO_BRIEF
→ 03_VEO_3
→ 04_PROMPTS
→ 05_ASSETS
→ 06_N8N
→ 07_WORKFLOWS
→ 08_OUTPUT

---

## 3. Production Pipeline

INPUT
→ INSIGHT
→ CONTENT
→ VIDEO BRIEF
→ PROMPT
→ ASSET
→ PRODUCTION
→ QUALITY GATE
→ HUMAN REVIEW
→ CALIBRATION
→ OUTPUT
→ MEASUREMENT
→ LEARNING

---

## 4. Quality Architecture

There are three different quality layers.

### Quality Gate

Question:

"Is the content acceptable?"

### Human Review

Question:

"Is this trustworthy and appropriate for publication?"

### Calibration

Question:

"Can this approved content be made better without changing what is true?"

---

## 5. Final Output Rule

A production cannot become FINAL until:

Quality Gate = PASS
AND
Human Review = APPROVE
AND
Calibration = PASS

---

## 6. Versioning

Never overwrite:

RAW
REVIEWED
CALIBRATED
FINAL

Each stage creates a traceable version.

---

## 7. Error Handling

WF-14 handles:

INPUT_ERROR
AI_ERROR
ASSET_ERROR
PRODUCTION_ERROR
QUALITY_ERROR
SYSTEM_ERROR

---

## 8. Global Rule

No workflow may bypass:

Brand Profile
System Master
Quality Gate
Human Review
Calibration

---

## 9. Version

Workflow System: v1.1
Status: Calibration Added
