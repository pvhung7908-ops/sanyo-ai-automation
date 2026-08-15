# n8n Environment Rules

## 1. Credentials

Never store credentials in Git.

Use n8n credential management.

---

## 2. Environment Separation

Recommended:

Development
Staging
Production

---

## 3. Naming

Credentials:

SANYO_<SERVICE>_<ENV>

Example:

SANYO_OPENAI_PROD
SANYO_GOOGLE_PROD
SANYO_STORAGE_PROD

---

## 4. Workflow Naming

SANYO | WF-01 | Content Intake
SANYO | WF-02 | Customer Insight
SANYO | WF-03 | Content Generation
SANYO | WF-04 | Video Brief
SANYO | WF-05 | Prompt Assembly
SANYO | WF-06 | Asset Selection
SANYO | WF-07 | VEO Production
SANYO | WF-08 | Quality Gate
SANYO | WF-09 | Human Review
SANYO | WF-10 | Output Management
SANYO | WF-11 | Measurement
SANYO | WF-12 | Learning Loop
SANYO | WF-13 | Error Handler

---

## 5. Version

Environment Rules: v1.0
Status: Foundation
