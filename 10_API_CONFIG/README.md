# 10_API_CONFIG

This directory controls external AI provider configuration.

It does NOT contain credentials.

Architecture:

CORE
↓
WORKFLOW
↓
AI PROVIDER
↓
API CONFIG
↓
COST / QUALITY ROUTER
↓
AI SERVICE
↓
QUALITY GATE
↓
CALIBRATION
↓
OUTPUT

Current strategy:

OpenAI = primary text
Anthropic = secondary review
Google = video/image
Human = final review

No provider is activated until credentials are configured.
