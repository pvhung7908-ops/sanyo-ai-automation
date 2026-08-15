# Sanyo Yusoki Vietnam — AI Provider Master

## 1. Purpose

AI Provider Layer is the provider-independent AI routing layer
between Sanyo AI Automation Core and external AI services.

It does NOT store API keys.

It decides:
- which AI capability is required
- which provider should perform the task
- which fallback provider can be used
- whether the task can run offline
- whether human review is required

---

## 2. Provider Roles

### A. TEXT / REASONING
Primary purpose:
- customer insight
- content strategy
- script generation
- analysis
- rewriting
- quality checking

Provider status:
PLANNED

---

### B. IMAGE
Primary purpose:
- architecture visualization
- elevator visualization
- family scenes
- material visualization
- storyboard references

Provider status:
PLANNED

---

### C. VIDEO
Primary purpose:
- cinematic video generation
- scene generation
- camera movement
- continuity
- product visualization

Preferred engine:
VEO_3

Provider status:
PLANNED

---

### D. SPEECH / VOICE
Primary purpose:
- Vietnamese voiceover
- narration
- pronunciation
- audio generation

Provider status:
PLANNED

---

### E. EMBEDDING / KNOWLEDGE
Primary purpose:
- brand knowledge retrieval
- customer knowledge
- previous campaign retrieval
- learning loop
- semantic search

Provider status:
PLANNED

---

## 3. Core Principle

The system must never depend permanently on one AI provider.

Architecture:

SANYO CORE
    ↓
AI ROUTER
    ↓
CAPABILITY
    ↓
PRIMARY PROVIDER
    ↓
FALLBACK PROVIDER
    ↓
QUALITY GATE

If external AI is unavailable:
- do not fabricate output
- preserve the workflow state
- mark provider status as unavailable
- route to human review or retry

---

## 4. Security

API keys must NEVER be stored in:
- Markdown files
- JSON workflow files
- Git repository
- source code
- prompts
- screenshots

API keys will later be stored in:
- n8n Credentials
OR
- environment variables
OR
- secure secret manager

---

## 5. Current Mode

SYSTEM_MODE = OFFLINE_DESIGN

No external API is required at this stage.

The system can test:
- routing
- capability detection
- fallback logic
- validation
- error handling
- workflow structure

without spending API credits.

---

## 6. Future Provider Mapping

| Capability | Primary | Fallback | Required |
|---|---|---|---|
| TEXT | TBD | TBD | YES |
| REASONING | TBD | TBD | YES |
| IMAGE | TBD | TBD | OPTIONAL |
| VIDEO | VEO_3 | TBD | YES |
| VOICE | TBD | TBD | OPTIONAL |
| KNOWLEDGE | TBD | TBD | OPTIONAL |

---

## 7. Output Contract

Every provider call must eventually return:

{
  "provider": "",
  "capability": "",
  "model": "",
  "status": "",
  "request_id": "",
  "latency_ms": 0,
  "usage": {},
  "output": {},
  "error": null
}

---

## 8. Non-negotiable Rules

1. Never expose API keys.
2. Never publish unvalidated AI output.
3. Never bypass Calibration.
4. Never bypass Quality Gate.
5. Provider failure must be recoverable.
6. Provider can be replaced without rewriting the Core.
7. Human Review remains available.
8. Learning Loop only receives validated results.
