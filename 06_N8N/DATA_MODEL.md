# Sanyo Yusoki Vietnam — Data Model

## 1. Content Item

Fields:

content_id
created_at
updated_at
topic
customer_segment
customer_problem
customer_insight
content_angle
content_type
platform
priority
status
owner
version

---

## 2. Video Brief

Fields:

brief_id
content_id
hook
story
analysis
visual_direction
camera_direction
character_direction
scene_direction
audio_direction
cta
duration
aspect_ratio
status
version

---

## 3. Prompt

Fields:

prompt_id
brief_id
prompt_type
prompt_text
negative_prompt
model
version
status

---

## 4. Asset

Fields:

asset_id
category
name
description
source
file_reference
status
version
usage
restriction

Asset status:

DRAFT
REVIEW
APPROVED
ARCHIVED

Only APPROVED assets may enter production.

---

## 5. Production

Fields:

production_id
content_id
brief_id
prompt_id
asset_ids
model
generation_status
output_reference
created_at
completed_at
version

---

## 6. Quality Review

Fields:

review_id
production_id
accuracy
brand_consistency
customer_relevance
clarity
trustworthiness
legal_safety
cta
overall_score
decision
notes
reviewer
created_at

---

## 7. Measurement

Fields:

measurement_id
content_id
production_id
platform
published_at
views
watch_time
retention
completion_rate
likes
comments
shares
saves
ctr
leads
qualified_leads
contracts
revenue
measurement_date

---

## 8. Learning

Fields:

learning_id
content_id
pattern
result
lesson
recommended_change
confidence
approved
created_at
