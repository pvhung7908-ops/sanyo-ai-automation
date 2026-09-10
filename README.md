# SANYO AI OS — System 2

Execution layer for Sanyo Yusoki Việt Nam. This repository is **System 2: AI Content Production & Automation**; CLAUDE-WORKSPACE remains System 1: Knowledge, Reasoning and Content Intelligence.

## Boundary

- No repository merge and no duplicated knowledge base
- System 1 submits approved ARTICLE, SOCIAL, IMAGE or VIDEO jobs through the versioned bridge contract
- System 2 returns structured result and measurement events
- System 2 owns provider routing, VEO, prompts, assets, characters and workflow execution

The n8n importable workflow is at 06_N8N/SANYO_AI_AUTOMATION_MASTER.json; its intake endpoint is POST /webhook/sanyo/system1/jobs after n8n is deployed.

## Mục tiêu

- Chuẩn hóa Prompt AI
- Quản lý nội dung Marketing
- Xây dựng Video Brief
- Quản lý tài sản truyền thông
- Xây dựng Workflow AI Automation
- Lưu trữ và kiểm soát phiên bản

## Hệ thống

Obsidian → Knowledge Base  
GitHub → Version Control  
n8n → Automation  
AI → Processing  
Output → Marketing / Sales / Content

## Nguyên tắc

- Chuẩn hóa
- Tái sử dụng
- Kiểm soát phiên bản
- Tự động hóa
- Kaizen liên tục

## Current status

**INTEGRATION_READY.** The workflow validates and accepts/rejects System 1 contracts but no external provider is live. It returns PROVIDER_NOT_CONNECTED rather than pretending to generate output.

## Version

v1.1
