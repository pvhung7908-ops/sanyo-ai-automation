# Sanyo AI — Cost / Quality Router

## 1. PURPOSE

Select the best provider for each task while controlling cost.

## 2. INPUT

Router receives:

task_type
quality_level
budget_level
latency_priority
fallback_allowed

Example:

{
  "task_type": "video",
  "quality_level": "premium",
  "budget_level": "normal",
  "latency_priority": "normal",
  "fallback_allowed": true
}

## 3. QUALITY LEVELS

ECONOMY
- fast
- low cost
- testing only

STANDARD
- normal production
- acceptable quality

PREMIUM
- important campaign
- flagship content
- high quality

## 4. ROUTING RULES

TEXT

ECONOMY:
Primary text provider

STANDARD:
Primary text provider

PREMIUM:
Primary text provider
→ secondary reviewer
→ human calibration

VIDEO

ECONOMY:
Fast/Lite video provider when available

STANDARD:
Standard video provider

PREMIUM:
High-quality video provider

PREMIUM + BRAND CAMPAIGN:
Video
→ quality gate
→ human review
→ calibration
→ final output

## 5. FALLBACK

If primary provider fails:

1. Retry once if transient error
2. Check provider status
3. Use registered fallback provider
4. Log failure
5. Never silently change provider

## 6. COST CONTROL

Never generate video automatically without a valid approved brief.

Before video generation:

CHECK:
- topic approved
- audience defined
- objective defined
- video brief exists
- prompt exists
- assets exist
- quality gate passed

If any required item is missing:

STOP.

## 7. LEARNING LOOP

Store:

provider
model
task
generation_count
failure_count
quality_score
human_score
production_cost
performance_score

Then calculate:

VALUE_SCORE =
quality_score
+ performance_score
+ reliability_score
- cost_penalty

Future routing should prefer higher VALUE_SCORE.

## 8. IMPORTANT

No automatic provider switching should happen without logging.

Every generated output must be traceable to:

run_id
provider
model
prompt_version
asset_version
workflow_version
calibration_version
