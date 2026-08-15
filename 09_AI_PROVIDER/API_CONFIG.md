# Sanyo AI API Configuration

## IMPORTANT

This file contains configuration rules only.

NO API KEY SHALL BE STORED HERE.

---

## Environment Variables

Future configuration:

SANYO_TEXT_PROVIDER=
SANYO_TEXT_MODEL=

SANYO_REASONING_PROVIDER=
SANYO_REASONING_MODEL=

SANYO_IMAGE_PROVIDER=
SANYO_IMAGE_MODEL=

SANYO_VIDEO_PROVIDER=
SANYO_VIDEO_MODEL=

SANYO_VOICE_PROVIDER=
SANYO_VOICE_MODEL=

SANYO_KNOWLEDGE_PROVIDER=
SANYO_KNOWLEDGE_MODEL=

---

## Security Rule

Credentials belong outside Git.

Preferred future architecture:

n8n Credentials
OR
Environment Variables
OR
Secret Manager

Never commit .env files containing real secrets.
