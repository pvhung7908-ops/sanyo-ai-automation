# WF-10 — Calibration Gate

## Purpose

Calibration is the final optimization layer before content enters OUTPUT.

It does not create a new concept.

It refines an already approved production result.

---

## Position

WF-08 Quality Gate
→ WF-09 Human Review
→ WF-10 Calibration
→ WF-11 Output Management

---

## Calibration Objectives

1. Message clarity
2. Brand consistency
3. Customer relevance
4. Visual consistency
5. Scene continuity
6. Camera continuity
7. Character continuity
8. Product consistency
9. Pacing
10. Audio consistency
11. CTA clarity
12. Technical accuracy
13. Trustworthiness

---

## Input

content_id
brief_id
prompt_id
production_id
asset_ids
quality_score
human_review
production_output

---

## Calibration Checklist

### A. Message

Does the final video communicate one clear idea?

Does the first 5 seconds establish the customer problem?

Does the story remain relevant?

Does the CTA match the customer's decision stage?

---

### B. Brand

Check:

Brand name
Brand positioning
Visual identity
Tone
Japanese reliability positioning
Customer trust

Do not introduce unsupported claims.

---

### C. Product

Check:

Product appearance
Cabin proportions
Door configuration
Control panel
Materials
Architecture relationship

Do not alter verified technical characteristics for visual effect.

---

### D. Visual Continuity

Check:

Scene continuity
Character continuity
Cabin continuity
Lighting continuity
Camera continuity
Scale consistency

---

### E. Camera

Check:

Framing
Movement
Lens consistency
Perspective
Transitions
Camera motivation

Avoid unnecessary cinematic movement.

---

### F. Audio

Check:

Voice clarity
Music level
Ambient sound
Dialogue timing
CTA audibility

Voice must remain understandable.

---

### G. Pacing

Check:

Hook speed
Scene duration
Information density
Transition timing
CTA timing

Remove unnecessary scenes.

---

### H. CTA

CTA must be:

Natural
Helpful
Relevant
Non-aggressive

CTA should correspond to customer stage.

---

## Calibration Decision

PASS

No meaningful correction required.

---

CALIBRATE

Minor correction required.

Possible corrections:

- Edit
- Trim
- Reorder
- Replace asset
- Adjust prompt
- Adjust camera
- Adjust audio
- Adjust CTA

---

REGENERATE

The correction cannot be safely achieved through editing.

Return to:

WF-05 Prompt Assembly
or
WF-07 VEO Production

---

## Maximum Automatic Calibration

Maximum:

2 automatic calibration attempts.

If still unresolved:

WF-09 Human Review

---

## Critical Rule

Calibration must never override:

Brand Profile
System Master
Technical rules
Safety rules
Approved product information

---

## Versioning

Every calibration creates a version.

Example:

V01_RAW
V01_REVIEWED
V01_CAL01
V01_CAL02
V02_FINAL

Never overwrite the original production output.

---

## Audit

Record:

calibration_id
content_id
production_id
input_version
output_version
changes
decision
reason
timestamp
operator
workflow_version

---

## Principle

Quality Gate asks:

"Is this acceptable?"

Calibration asks:

"Can this be made clearly better without changing what is true?"

---

## Version

Calibration Gate: v1.0
Status: Foundation
