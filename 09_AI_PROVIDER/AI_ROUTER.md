# Sanyo AI Router

## Purpose

Convert a workflow requirement into an AI capability request.

---

## Routing Logic

INPUT
↓
IDENTIFY CAPABILITY
↓
CHECK PRIMARY PROVIDER
↓
CHECK PROVIDER STATUS
↓
RUN OR FALLBACK
↓
VALIDATE RESPONSE
↓
QUALITY GATE
↓
CONTINUE WORKFLOW

---

## Capability Mapping

customer_insight → REASONING
content_generation → TEXT
video_brief → REASONING + TEXT
prompt_generation → TEXT
asset_generation → IMAGE
video_generation → VIDEO
voiceover → VOICE
knowledge_retrieval → KNOWLEDGE
quality_check → REASONING

---

## Failure Rule

If provider fails:

PRIMARY
↓
FALLBACK
↓
HUMAN REVIEW

Never:

PRIMARY
↓
FAKE RESULT
