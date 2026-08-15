# Sanyo Yusoki Vietnam — Asset Master

## 1. Purpose

Asset Master is the central asset management layer of the Sanyo AI Automation system.

It defines how visual assets are identified, classified, selected and reused across:

- Content production
- Video Brief
- VEO 3
- Prompt System
- N8N workflows

## 2. Asset Philosophy

One approved asset should be reusable across many productions.

The system should prefer:

Approved Asset
→ Correct Asset ID
→ Correct Prompt
→ Consistent Visual Output

rather than allowing AI to invent brand-critical visual details.

## 3. Asset Categories

- Brand
- Elevator
- Cabin
- Architecture
- Family
- People
- Materials
- Location
- Reference
- Production

## 4. Asset Priority

Priority 1:
Brand-critical assets

Priority 2:
Product-critical assets

Priority 3:
Character and environment assets

Priority 4:
Decorative and supporting assets

## 5. Asset Status

Each asset should have one status:

- DRAFT
- REVIEW
- APPROVED
- ARCHIVED

Only APPROVED assets should be used for production.

## 6. Asset Metadata

Every important asset should record:

- Asset ID
- Category
- Name
- Description
- Source
- Version
- Status
- Usage
- Restrictions
- Related prompts

## 7. Version

Asset Master: v1.0
Status: Foundation
