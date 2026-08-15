# WF-06 — Asset Selection

## Purpose

Select approved visual assets for production.

---

## Selection Order

1. Exact approved product asset
2. Approved cabin asset
3. Approved architecture asset
4. Approved family asset
5. Approved people asset
6. Approved location asset
7. Approved material asset

---

## Asset Rule

Only:

status = APPROVED

may be selected automatically.

---

## If No Approved Asset Exists

Do not invent a critical brand/product asset.

Set:

status = REVIEW

and request human review.

---

## Traceability

Every selected asset must be recorded in asset_ids.
