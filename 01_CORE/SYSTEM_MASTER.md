# SANYO AI OS — System 2 Execution Boundary

sanyo-ai-automation is **System 2: AI Content Production & Automation**.

It receives approved work from System 1 (CLAUDE-WORKSPACE) through the versioned bridge contract in 06_N8N/SYSTEM1_BRIDGE_CONTRACT.json. It does not become a second knowledge base.

## System 2 owns

- Provider routing and credentials held outside Git
- Video production, prompt assembly, character and consistency controls
- Asset selection and production-output references
- n8n orchestration, technical tests and delivery evidence
- Measurement capture and return payloads

## System 1 owns

- Brand, customer, product, sales and voice knowledge
- Content strategy and the decision to approve a job
- General quality-evaluation methodology

## Non-negotiable runtime rules

1. A job must be approved and traceable before System 2 accepts it.
2. System 2 must fail closed when a provider, approved asset or required character reference is unavailable.
3. READY, GENERATED, TESTED and APPROVED are distinct states.
4. No provider call, output claim or publication is implied by a design-time test.

See the System 1 bridge document for the human-readable ownership and hand-off rules. This repository contains the deployed, machine-readable contract and its execution checks.

Status: **INTEGRATION_READY — providers are not live**
