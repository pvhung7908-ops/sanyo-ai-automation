# WF-11 — Output Management

## Output structure

OUTPUT/
└── YYYY/
    └── MM/
        └── CONTENT_ID/
            ├── brief/
            ├── prompts/
            ├── production/
            ├── review/
            └── final/

---

## Naming

CONTENT_ID_VERSION_TYPE

Example:

SYV-2026-000001_V01_FINAL

---

## Rule

Never overwrite a previous approved output.

Create a new version.

## Evidence rule

An output reference may be marked generated only after a provider executor returns it. Technical test, per-shot identity QC for applicable VIDEO work, quality evaluation and human approval must each record their own evidence. A workflow design test is not production evidence.
