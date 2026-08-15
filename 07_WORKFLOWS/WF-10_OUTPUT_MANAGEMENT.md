# WF-10 — Output Management

## Purpose

Store approved production outputs with full traceability.

## Structure

08_OUTPUT/
└── YYYY/
    └── MM/
        └── CONTENT_ID/
            ├── brief/
            ├── prompts/
            ├── production/
            ├── review/
            └── final/

## Naming

CONTENT_ID_VERSION_TYPE

Example:

SYV-2026-000001_V01_FINAL

## Rule

Never overwrite an approved output.

Create a new version.

## Flow

Approved
→ Create Output Package
→ Store Metadata
→ Store Final Reference
→ Set PUBLISHED_READY

→ WF-11
