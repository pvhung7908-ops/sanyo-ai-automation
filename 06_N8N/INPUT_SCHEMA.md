# Sanyo AI OS — System 1 Input Boundary

The canonical machine-readable intake contract is SYSTEM1_BRIDGE_CONTRACT.json. Do not maintain a second field definition here.

## 1. Minimum Input

Required envelope:

- contract_version = 1.1
- job_id
- task_type = ARTICLE, SOCIAL, IMAGE or VIDEO
- System 1 source identity
- approved content objective, audience and platform
- at least one VERIFIED source reference
- assets array (APPROVED assets only)
- return delivery mode

VIDEO additionally requires an approved brief and shot plan. When a recurring character is needed, it requires an APPROVED reference asset and character lock.

---

## 2. Example

See the contract file for an executable field shape. Source facts remain in System 1; System 2 only receives references and approved task context.

---

## 3. Validation

Reject with INVALID_CONTRACT, MISSING_REQUIRED_CONTEXT, MISSING_APPROVED_ASSET or MISSING_APPROVED_CHARACTER as applicable. The job ID comes from System 1 and remains unchanged for the entire execution lifecycle.
