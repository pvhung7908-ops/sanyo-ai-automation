# WF-06 — Asset Selection

## Purpose

Select approved assets required by the production prompt.

## Input

prompt_id
brief_id
asset_requirements

## Selection Priority

Exact approved product
→ Cabin
→ Architecture
→ Family
→ People
→ Location
→ Material

## Rule

Only APPROVED assets may enter automatic production.

## Missing Asset

Search approved alternatives.

If unavailable:

status = REVIEW
→ WF-09

## Success

Record:

asset_ids
asset_versions
asset_sources

→ WF-07
