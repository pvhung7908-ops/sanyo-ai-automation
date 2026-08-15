# Sanyo Yusoki Vietnam — n8n Automation Master

## 1. Purpose

This document defines the automation architecture for the Sanyo AI Content Operating System.

n8n is the orchestration layer connecting:

Customer Insight
→ Content Engine
→ Video Brief
→ Prompt System
→ Asset System
→ VEO 3 Production
→ Quality Gate
→ Output
→ Measurement
→ Improvement

n8n must orchestrate the system.
It must not replace the Core knowledge system.

---

## 2. Architecture Principles

1. Modular workflows
2. Single source of truth
3. Stable data contracts
4. Human review for sensitive decisions
5. Approved assets only
6. Version-controlled prompts
7. Traceable content IDs
8. Error recovery
9. Measurement-driven improvement
10. No secrets inside Git

---

## 3. Core Pipeline

INPUT
→ VALIDATE
→ CUSTOMER INSIGHT
→ CONTENT
→ VIDEO BRIEF
→ PROMPT ASSEMBLY
→ ASSET SELECTION
→ PRODUCTION
→ QUALITY GATE
→ HUMAN REVIEW
→ OUTPUT
→ PUBLISH
→ MEASURE
→ LEARN
→ IMPROVE

---

## 4. Workflow Naming

WF-01 Content Intake
WF-02 Customer Insight
WF-03 Content Generation
WF-04 Video Brief
WF-05 Prompt Assembly
WF-06 Asset Selection
WF-07 VEO Production
WF-08 Quality Gate
WF-09 Human Review
WF-11 Output Management
WF-12 Measurement
WF-13 Learning Loop
WF-14 Error Handler

---

## 5. Status Model

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

## 6. Automation Rule

Every production object must have a unique ID.

Example:

SYV-2026-000001

The ID must remain unchanged throughout the lifecycle.

---

## 7. Human-in-the-Loop

Human approval is required when content contains:

- Technical specifications
- Safety claims
- Legal claims
- Customer testimonials
- Pricing
- Performance guarantees
- Regulatory statements
- Unverified product claims

---

## 8. Secrets

Never store:

- API keys
- Passwords
- Access tokens
- OAuth secrets
- Private credentials

inside Git repository files.

Use n8n credentials/environment configuration.

---

## 9. Version

System: n8n Automation Layer
Version: v1.0
Status: Foundation
