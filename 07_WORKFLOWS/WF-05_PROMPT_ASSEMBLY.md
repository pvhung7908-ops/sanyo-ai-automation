# WF-05 — Prompt Assembly

## Purpose

Build the final generation prompt from approved system layers.

## Input

content_id
brief_id

## Load

01_CORE
02_VIDEO_BRIEF
03_VEO_3
04_PROMPTS
05_ASSETS

## Prompt Priority

1. Brand
2. Customer relevance
3. Technical accuracy
4. Visual consistency
5. Creative enhancement

## Flow

Load Systems
→ Select Prompt Templates
→ Insert Brief
→ Insert Product Rules
→ Insert Visual Rules
→ Insert Negative Prompt
→ Validate
→ Version
→ WF-06

## Rule

Creative instructions must never override verified technical rules.

## Output

prompt_id
prompt_text
negative_prompt
version
