# Sanyo Yusoki Vietnam — Workflow Registry

| ID | Workflow | Purpose | Next |
|---|---|---|---|
| WF-01 | Content Intake | Receive request | WF-02 |
| WF-02 | Customer Insight | Understand customer | WF-03 |
| WF-03 | Content Generation | Create content | WF-04 |
| WF-04 | Video Brief | Build production brief | WF-05 |
| WF-05 | Prompt Assembly | Build generation prompt | WF-06 |
| WF-06 | Asset Selection | Select approved assets | WF-07 |
| WF-07 | VEO 3 Production | Generate video | WF-08 |
| WF-08 | Quality Gate | Evaluate quality | WF-09 |
| WF-09 | Human Review | Human approval | WF-10 |
| WF-10 | Calibration Gate | Final optimization | WF-11 |
| WF-11 | Output Management | Store final output | WF-12 |
| WF-12 | Measurement | Measure performance | WF-13 |
| WF-13 | Learning Loop | Improve system | Future production |
| WF-14 | Error Handler | Handle failures | Recovery |

---

## Master Flow

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
→ WF-13

WF-14 handles errors across the system.

---

## Calibration Principle

No production output is considered FINAL immediately after Human Review.

Human Review
→ Calibration
→ Output

---

## Version

Workflow Registry: v1.1
Status: Calibration Added
