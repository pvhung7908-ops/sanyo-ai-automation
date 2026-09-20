# AI AUTOMATION BRIDGE

## PURPOSE

Đây là **INTERFACE CONTRACT**, không phải một knowledge base thứ hai. File này định nghĩa cách CLAUDE-WORKSPACE bàn giao một task đã duyệt cho `sanyo-ai-automation`, và cách kết quả thực thi quay trở lại.

Contract version hiện hành: **1.1**. Schema machine-readable được triển khai một lần tại `sanyo-ai-automation/06_N8N/SYSTEM1_BRIDGE_CONTRACT.json`; file này là hướng dẫn ownership và vận hành cho con người. Không copy schema sang knowledge base.

```text
CLAUDE-WORKSPACE     = KNOWLEDGE / REASONING / ORCHESTRATION
sanyo-ai-automation  = EXECUTION / AUTOMATION
```

Hai hệ thống **không được merge vật lý**. File này chỉ mô tả interface — không tái tạo logic của bất kỳ hệ thống nào ở hai phía.

---

## 1. SOURCE OF TRUTH

```text
BRAND / CUSTOMER / PRODUCT / SALES / VOICE STRATEGY
      → CLAUDE-WORKSPACE (01_BRAIN/)

VISUAL BRAND IDENTITY
      → CLAUDE-WORKSPACE
        03_DESIGN/01_BRAND_SYSTEM/BRAND_ASSET_SYSTEM.md

VIDEO PRODUCTION LOGIC
      → sanyo-ai-automation
        03_VEO_3/

CHARACTER SYSTEM
      → sanyo-ai-automation
        03_VEO_3/CHARACTER_SYSTEM.md

CONSISTENCY RULES
      → sanyo-ai-automation
        03_VEO_3/CONSISTENCY_RULES.md

PROMPT SYSTEM
      → sanyo-ai-automation
        04_PROMPTS/

ASSET SYSTEM
      → sanyo-ai-automation
        05_ASSETS/

AUTOMATION
      → sanyo-ai-automation
        06_N8N/ , 07_WORKFLOWS/

AI PROVIDER
      → sanyo-ai-automation
        09_AI_PROVIDER/ , 10_API_CONFIG/

TECHNICAL TESTING
      → sanyo-ai-automation
        13_TESTING/

GENERAL OUTPUT EVALUATION (methodology)
      → CLAUDE-WORKSPACE
        07_EVALUATION/EVALUATION_SYSTEM.md
```

Không hệ thống nào ở trên bị duplicate trong file này — chỉ tham chiếu.

---

## 2. TASK ROUTING

```text
USER REQUEST
      ↓
CLAUDE CLASSIFICATION (CLAUDE.md §5)
      ↓
KNOWLEDGE / REASONING (01_BRAIN/ — gồm 01_BRAND, 02_CUSTOMER, 03_PRODUCT, 04_SALES, 05_VOICE, 06_OPERATION; cùng 02_CONTENT/, 03_DESIGN/, 04_SKILLS/)
      ↓
APPROVED TASK
      ↓
AI AUTOMATION BRIDGE (file này)
      ↓
sanyo-ai-automation
      ↓
EXECUTION
      ↓
TECHNICAL TEST (13_TESTING)
      ↓
QUALITY EVALUATION (07_EVALUATION methodology, áp dụng phía automation)
      ↓
RESULT RETURN
```

Bridge **không chứa**: customer strategy, sales strategy, product knowledge, brand strategy, VEO prompt engineering rules, camera rules, character rules, scene rules. Những phần đó ở nguyên trong hệ thống source-of-truth tương ứng (mục 1).

---

## 3. JOB CONTRACT

Bridge nhận bốn loại job:

~~~text
ARTICLE → TEXT
SOCIAL  → TEXT
IMAGE   → IMAGE
VIDEO   → VIDEO
~~~

Tất cả job dùng cùng envelope. VIDEO có các trường bổ sung ở mục 4; object character/video dưới đây minh hoạ một VIDEO job có nhân vật lặp lại. System 1 chỉ gửi job đã được APPROVED; System 2 mới chọn provider sau khi kiểm tra trạng thái kết nối thật.

Contract ví dụ (conceptual), không phải cấu hình provider sống:

```json
{
  "contract_version": "1.1",
  "job_id": "...",
  "task_type": "ARTICLE|SOCIAL|IMAGE|VIDEO",

  "source": {
    "system": "CLAUDE_WORKSPACE",
    "project_id": "...",
    "task_id": "..."
  },

  "content": {
    "objective": "...",
    "audience": "...",
    "angle": "...",
    "platform": "...",
    "approval_status": "APPROVED"
  },

  "customer_context": {
    "insight": "...",
    "primary_concern": "...",
    "confidence": "..."
  },

  "product_context": {
    "product_id": "...",
    "verified_facts": []
  },

  "brand_context": {
    "brand_source": "CLAUDE_WORKSPACE/03_DESIGN/01_BRAND_SYSTEM/BRAND_ASSET_SYSTEM.md",
    "approved_brand_assets": []
  },

  "voice_context": {
    "voice_source": "CLAUDE_WORKSPACE/01_BRAIN/05_VOICE/VOICE.md"
  },

  "character": {
    "required": true,
    "character_id": "...",
    "reference_asset_id": "...",
    "identity_status": "APPROVED"
  },

  "video": {
    "brief_id": "...",
    "shot_plan_status": "APPROVED",
    "shots": [{ "shot_id": "..." }]
  },

  "source_refs": [
    {
      "type": "FILE",
      "path": "...",
      "section": "...",
      "status": "VERIFIED"
    }
  ],

  "assets": [
    { "asset_id": "...", "status": "APPROVED" }
  ],

  "return_delivery": {
    "mode": "SYNC_RESPONSE|CALLBACK_WEBHOOK|FILE_REFERENCE"
  },

  "execution": {
    "provider": null,
    "model": null,
    "status": "PENDING"
  }
}
```

**Quan trọng:** đây là ví dụ cấu trúc contract, không phải cấu hình provider đang chạy. Không tự điền tên model VEO cụ thể như thể đang active. Không đánh dấu `execution.status` là đã chạy khi chưa gọi thật. Không mặc định API khả dụng. `provider`/`model` giữ `null` trong contract mẫu — chỉ lớp execution/provider-routing phía `sanyo-ai-automation` mới được điền giá trị thật, sau khi provider thực sự đã được chọn.

`assets` chỉ chứa asset có trạng thái `APPROVED`. `source_refs` phải có ít nhất một nguồn `VERIFIED`; reference chỉ truy vết bằng chứng, không biến nội dung của nó thành fact tự động.

System 1 gửi `return_delivery.mode = SYNC_RESPONSE` trong triển khai hiện tại: n8n trả Result Contract ngay trên HTTP response. `CALLBACK_WEBHOOK` và `FILE_REFERENCE` là các chế độ hợp đồng dành cho kết quả bất đồng bộ sau khi endpoint/lưu trữ tương ứng đã được kiểm tra.

### Source Traceability

`source_refs` dùng để truy vết FACT đã sử dụng trong contract — **không phải nơi chứa nội dung kiến thức**. Giữ đúng nguyên tắc `FACT ≠ INFERENCE ≠ UNKNOWN` đã có ở toàn hệ thống. Không copy nội dung nguồn vào bridge; không biến bridge thành một cơ sở dữ liệu kiến thức thứ hai.

**Một source reference không tự động khiến claim đó được coi là verified.** Bản thân nguồn được trỏ tới phải có thẩm quyền (đúng SOURCE OF TRUTH ở mục 1) và nội dung được tham chiếu phải đã được xác minh từ trước — `source_refs` chỉ trỏ đến bằng chứng, không thay thế việc xác minh.

---

## 4. VIDEO CHARACTER / ASSET REFERENCE CONTRACT

**Character:** truyền bằng reference, không copy toàn bộ Character System vào bridge.

```text
character.required
character_id                 (bắt buộc khi required=true)
reference_asset_id           (bắt buộc khi required=true)
identity_status = APPROVED   (bắt buộc khi required=true)

video.brief_id
video.shot_plan_status = APPROVED
video.shots[]                (ít nhất một shot)

reference_asset_id phải xuất hiện trong assets[] với status = APPROVED
```

Việc áp dụng `03_VEO_3/CHARACTER_SYSTEM.md` và `03_VEO_3/CONSISTENCY_RULES.md` vẫn thuộc trách nhiệm của execution system, không phải bridge.

**Face-consistency pipeline bắt buộc cho VIDEO có `character.required=true`:**

```text
approved character reference
→ character lock
→ generation per shot
→ identity QC cho từng generated shot
→ technical/quality/human approval
→ final video
```

Không có character reference ở trạng thái APPROVED → không được đánh dấu production-ready. Không suy diễn identity chỉ từ mô tả văn bản khi cần một approved reference asset. `NOT_APPLICABLE` chỉ dùng cho video không yêu cầu nhân vật lặp lại; nó không thay thế identity QC.

**Asset:** tham chiếu bằng ID/path/URI — không copy binary asset vào Knowledge OS. Giữ nguyên trạng thái APPROVED (theo `ASSET_MASTER.md` § Asset Status). Không âm thầm thay thế bằng asset chưa duyệt.

---

## 5. EXECUTION STATUS

```text
DRAFT → READY → SUBMITTED → RUNNING → GENERATED → TESTED → EVALUATED → APPROVED
```

Failure states: `BLOCKED` · `FAILED` · `REJECTED` · `REGENERATE`

**Quan trọng — không được đánh đồng:**

```text
READY   ≠ GENERATED
GENERATED ≠ APPROVED
TESTED  ≠ QUALITY APPROVED
```

Không cho phép một trạng thái mang tính thiết kế (design-only) bị diễn giải như đã sinh AI thành công thật.

---

## 6. EVALUATION RETURN CONTRACT

```json
{
  "contract_version": "1.1",
  "job_id": "...",
  "task_type": "...",

  "execution": {
    "status": "...",
    "provider": "...",
    "model": "...",
    "output_reference": "..."
  },

  "technical_test": {
    "status": "PASS|FAIL|NOT_RUN",
    "tests": []
  },

  "quality_evaluation": {
    "status": "PASS|FAIL|NOT_RUN",
    "score": null,
    "criteria": [],
    "critical_failures": []
  },

  "identity_evaluation": {
    "status": "PASS|FAIL|NOT_RUN|NOT_APPLICABLE",
    "character_id": "...",
    "character_lock": "LOCKED|NOT_LOCKED|NOT_REQUIRED|NOT_APPLICABLE",
    "per_shot": [],
    "identity_drift": "NONE|MINOR|MATERIAL|NOT_EVALUATED"
  },

  "human_review": {
    "status": "PENDING|APPROVED|REJECTED|NOT_REQUIRED|NOT_RUN"
  },

  "next_action": "APPROVE|REGENERATE|REVIEW|BLOCK"
}
```

## 6A. MEASUREMENT RETURN CONTRACT

Sau khi output đã được publish và dữ liệu nền tảng được xác minh, System 2 trả một `measurement_event` version 1.1 về System 1:

```json
{
  "contract_version": "1.1",
  "job_id": "...",
  "source": { "system": "SANYO_AI_AUTOMATION" },
  "measurement_status": "MEASURED",
  "measured_at": "...",
  "metrics": {
    "views": 0,
    "watch_time": 0,
    "completion_rate": 0,
    "engagement_rate": 0,
    "leads": 0,
    "contracts": 0,
    "revenue": 0
  }
}
```

Không tự sinh số liệu đo lường. Khi chưa có platform connector và delivery endpoint đã kiểm tra, Measurement Return ở trạng thái `NOT_RUN`, không phải `MEASURED`.

Không coi `score` là bằng chứng chất lượng. Critical failures không được trung bình hoá đi (đúng nguyên tắc đã có ở `07_EVALUATION/EVALUATION_SYSTEM.md` § PASS/FAIL). Technical PASS **không** tự động nghĩa là Quality PASS.

Dùng `NOT_APPLICABLE` cho `identity_evaluation.status` khi việc đánh giá identity không liên quan — ví dụ video không chứa nhân vật người lặp lại. **Không coi `NOT_APPLICABLE` là một dạng thất bại.**

### Evaluation Boundary

```text
Technical testing         → sanyo-ai-automation/13_TESTING
General quality methodology → CLAUDE-WORKSPACE/07_EVALUATION
```

Bridge chỉ định nghĩa interface — không tái tạo phương pháp luận evaluation của bên nào.

---

## 7. ERROR HANDLING

```text
MISSING_REQUIRED_CONTEXT
INVALID_CONTRACT
MISSING_APPROVED_CHARACTER
MISSING_APPROVED_ASSET
PROVIDER_NOT_CONNECTED
GENERATION_FAILED
TECHNICAL_TEST_FAILED
IDENTITY_DRIFT
QUALITY_GATE_FAILED
HUMAN_REVIEW_REQUIRED
```

Mỗi lỗi phải dẫn đến một next action xác định (`APPROVE|REGENERATE|REVIEW|BLOCK` — xem mục 6). Không được âm thầm tiếp tục khi gặp lỗi.

---

## 8. OWNERSHIP BOUNDARIES

```text
CLAUDE-WORKSPACE sở hữu: chiến lược, kiến thức, cách nói, phương pháp đánh giá chất lượng chung, quyết định "task này có nên thực thi không"

sanyo-ai-automation sở hữu: cách thực thi video, character/consistency/camera/scene logic,
prompt engineering, asset binary, workflow automation, provider routing, technical testing

Bridge sở hữu: hình dạng của dữ liệu trao đổi giữa hai bên — không sở hữu logic của bên nào
```

---

## 9. NO-DUPLICATION RULE

```text
FACT      → source reference (không copy nội dung)
RULE      → source reference
ASSET     → asset reference (ID/path/URI)
CHARACTER → character ID + approved reference
PROMPT    → prompt/version reference
OUTPUT    → output reference
```

Nếu thông tin đã tồn tại trong một hệ thống source-of-truth (mục 1), bridge tham chiếu đến nó — không sao chép.

---

## 10. LIVE VEO 3 BOUNDARY

Tại thời điểm tích hợp hiện tại (đã xác nhận qua audit trực tiếp — đọc `AI_PROVIDER_MASTER.md`, `provider_mapping.js`, `API_CONFIG_MASTER.json`, và node code thật trong `SANYO_AI_AUTOMATION_MASTER.json`):

```text
VEO 3 = ARCHITECTURALLY MAPPED

NOT LIVE
```

Bridge **không được** khẳng định: API đã kết nối, generation đã thành công, provider đang active, hay video đã được tạo — cho đến khi việc thực thi thật đã được xác minh (không phải chỉ file tồn tại hay object JS không rỗng).

---

## FUTURE FLOW

```text
CLAUDE
      ↓
approved task
      ↓
bridge contract (file này)
      ↓
automation (sanyo-ai-automation)
      ↓
provider
      ↓
VEO 3
      ↓
output
      ↓
technical test
      ↓
identity evaluation
      ↓
quality evaluation
      ↓
human review
      ↓
final output
      ↓
learning/evaluation record
```
