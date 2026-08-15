# WF-03 — Content Generation

## Purpose

Generate content using the approved Core and customer insight.

## Input

content_id
customer_insight
content_angle
customer_segment
platform

## Required Core

01_CORE/SYSTEM_MASTER.md
01_CORE/BRAND_PROFILE.md
01_CORE/CONTENT_ENGINE.md

## Flow

Load Core
→ Load Insight
→ Generate Draft
→ Validate Brand
→ Validate Customer Relevance
→ Validate CTA
→ Save Version
→ WF-04

## Content Structure

Problem
→ Insight
→ Explanation
→ Solution
→ Trust
→ Action

## Status

DRAFT
→ READY

## Failure

QUALITY_ERROR
→ WF-14
