# Sanyo AI — API Test Plan

## TEST 01 — Configuration

Check:
- JSON valid
- environment variable names exist
- no API key committed

Expected:
PASS

## TEST 02 — Provider Registry

Check:
- OpenAI registered
- Anthropic registered
- Google registered

Expected:
PASS

## TEST 03 — Router

Input:
text + standard + normal

Expected:
OpenAI

Input:
review + premium

Expected:
Anthropic

Input:
video + premium

Expected:
Google

## TEST 04 — Security

Check:

git grep for:
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GEMINI_API_KEY=

Expected:
Only .env.example may contain empty placeholders.

## TEST 05 — Offline

The system must pass configuration tests without any API key.

## TEST 06 — Live API

Only after the user has purchased/configured the provider.

Do not test live APIs during offline development.
