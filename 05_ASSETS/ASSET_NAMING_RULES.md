# Sanyo Yusoki Vietnam — Asset Naming Rules

## 1. Purpose

Create predictable asset IDs for humans, AI systems and N8N workflows.

## 2. Standard Structure

CATEGORY_TYPE_NAME_VERSION

Example:

CABIN_SMART_INTERIOR_FRONT_V01

## 3. Category Codes

BRAND
ELEVATOR
CABIN
ARCH
FAMILY
PERSON
MAT
LOC
REF
PROD

## 4. Naming Rules

Use:

- English
- Uppercase
- Underscores
- Short descriptive names
- Version numbers

Avoid:

- Spaces
- Vietnamese diacritics
- Special characters
- Ambiguous names
- Random filenames

## 5. Versioning

V01
V02
V03

A major visual change should create a new version.

## 6. Status

DRAFT
REVIEW
APPROVED
ARCHIVED

## 7. Example

PERSON_HOMEOWNER_F01_V01

Means:

PERSON
→ Homeowner role
→ Female character 01
→ Version 01

## 8. Production Rule

Only APPROVED assets should enter production workflows.
