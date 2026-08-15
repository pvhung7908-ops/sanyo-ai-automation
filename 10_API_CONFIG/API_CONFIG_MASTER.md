# Sanyo Yusoki Vietnam — API Config Master

## 1. PURPOSE

API Config Master is the configuration layer between:

SANYO AI CORE
→ WORKFLOWS
→ AI PROVIDER LAYER
→ API CONFIG
→ OUTPUT

The system must be able to change AI providers without rewriting the core workflow.

## 2. GOLDEN RULES

1. Never store API keys in Git.
2. Never hard-code API keys inside workflow files.
3. Provider credentials are loaded from environment variables.
4. Provider selection is controlled by the AI Router.
5. Every AI task must have:
   - task_type
   - quality_level
   - budget_level
   - latency_priority
6. Video generation must remain separated from text generation.
7. Human Review remains mandatory before final output.
8. Calibration remains mandatory before final output.
9. Failed Quality Gate must never reach FINAL OUTPUT.
10. Provider failure must trigger fallback or retry policy.

## 3. INITIAL PROVIDER STRATEGY

PRIMARY TEXT:
OpenAI

SECONDARY TEXT / REVIEW:
Anthropic

VIDEO:
Google Gemini / Veo

IMAGE:
Google Gemini image generation or another registered image provider

VOICE:
Configurable provider; do not hard-code yet.

## 4. ACTIVATION POLICY

Initial state:

TEXT_PRIMARY = DISABLED until API key exists
TEXT_REVIEW = DISABLED until API key exists
VIDEO = DISABLED until API key exists
IMAGE = DISABLED until API key exists
VOICE = DISABLED until API key exists

The system can be developed and tested offline before purchasing services.

## 5. SECURITY

Never commit:

.env
API keys
OAuth tokens
service account private keys
cookies
session tokens

Only .env.example is allowed in Git.

## 6. CONFIGURATION PRINCIPLE

Provider configuration must be externalized.

Example:

OPENAI_API_KEY
ANTHROPIC_API_KEY
GEMINI_API_KEY

The workflow reads the appropriate environment variable.

## 7. OUTPUT

The API router must return:

provider
task
model
quality_level
budget_level
fallback_provider
reason
cat > 10_API_CONFIG/PROVIDER_MATRIX.md <<'EOF'
# Sanyo AI — Provider Selection Matrix

| Task | Primary | Secondary | Priority | Notes |
|---|---|---|---|---|
| Content strategy | OpenAI | Anthropic | Quality | Brand reasoning |
| Customer insight | OpenAI | Anthropic | Quality | Vietnamese customer context |
| Script generation | OpenAI | Anthropic | Quality | Sanyo tone |
| Script review | Anthropic | OpenAI | Accuracy | Independent review |
| Prompt generation | OpenAI | Anthropic | Quality | Structured prompts |
| Image generation | Google Gemini Image | Other registered provider | Visual | Asset/reference creation |
| Video generation | Google Veo | Other registered provider | Quality | Main video engine |
| Video rapid testing | Google Veo Fast/Lite when appropriate | — | Cost/Speed | A/B testing |
| Voice | Configurable | Configurable | Naturalness | Add later |
| Final QA | Primary AI + Human | Secondary AI | Safety | Never fully automatic |
| Learning analysis | OpenAI | Anthropic | Reasoning | Performance feedback |

## CURRENT VIDEO NOTE

Google's current Gemini API documentation lists Veo 3.1, Veo 3.1 Fast and Veo 3.1 Lite variants.

The router therefore uses a configurable VIDEO_MODEL rather than hard-coding a single model into the workflow.

## DECISION RULE

Do not select a provider only because it is cheaper.

Decision order:

1. Brand accuracy
2. Customer relevance
3. Output quality
4. Consistency
5. Reliability
6. Latency
7. Cost

Cost is important, but it must not override brand safety or quality.

## INITIAL RECOMMENDATION

For Sanyo:

TEXT:
OpenAI PRIMARY

REVIEW:
Anthropic SECONDARY

VIDEO:
Google Veo PRIMARY

IMAGE:
Google Gemini IMAGE PRIMARY

VOICE:
Add after the core pipeline is proven

This keeps the initial system simple.
