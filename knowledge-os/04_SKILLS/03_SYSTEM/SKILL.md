# SYSTEM SKILL

## PURPOSE

Đây là EXECUTION METHOD cho reasoning phức tạp, workflow, và các tác vụ cấp hệ thống — nghiên cứu, đánh giá, thiết kế prompt, kiểm thử, cải tiến knowledge, điều phối project. Đây không phải một bản sao của Sales Brain — nó tổng quát hoá kỷ luật lập luận đã được kiểm chứng qua TEST #02–#07 của `01_BRAIN/04_SALES/` để áp dụng cho mọi loại tác vụ hệ thống.

## CROSS-SYSTEM POSITION

```text
BRAIN   = WHAT SANYO KNOWS
VOICE   = HOW SANYO SPEAKS
SKILLS  = HOW THE SYSTEM EXECUTES
CLAUDE.md = HOW THE SYSTEM IS ORCHESTRATED
```

---

## KHI NÀO DÙNG SKILL NÀY

Khi task là: phân tích phức tạp, nghiên cứu, đánh giá/chấm điểm, thiết kế hoặc kiểm thử prompt, thiết kế workflow, phát hiện mâu thuẫn giữa các nguồn, hoặc bất kỳ tác vụ nào cần quyết định "đọc gì / tin gì / làm gì tiếp theo" một cách có kỷ luật.

## SOURCE OF TRUTH

```text
USER-PROVIDED CURRENT CONTEXT
      >
PROJECT FILES / SOURCE DOCUMENTS
      >
01_BRAIN KNOWLEDGE
      >
VALIDATED SKILLS / BEST PRACTICES
      >
GENERAL MODEL KNOWLEDGE
```

Không âm thầm lấp khoảng trống bằng general model knowledge khi task cần sự thật riêng của SANYO/dự án.

---

## EXECUTION METHOD

### 1. Task decomposition

Chia task lớn thành các câu hỏi nhỏ có thể trả lời độc lập trước khi tổng hợp kết luận. Không nhảy thẳng đến kết luận cuối khi task có nhiều phần.

### 2. Knowledge routing

Theo `CLAUDE.md` mục 5–6 (TASK CLASSIFICATION + KNOWLEDGE ROUTING) — không lặp lại logic routing ở đây, chỉ thực thi nó.

### 3. Source hierarchy

Theo SOURCE OF TRUTH ở trên. Khi nhiều nguồn mâu thuẫn: IDENTIFY CONFLICT → STATE CONFLICT → dùng nguồn ưu tiên cao hơn → FLAG UNCERTAINTY nếu cần (đúng `CLAUDE.md` mục 3).

### 4. Fact / Inference / Unknown

```text
FACT      → thông tin đã xác nhận trực tiếp
INFERENCE → suy luận có cơ sở, chưa xác nhận
UNKNOWN   → không đủ dữ liệu để kết luận
```

Không trình bày INFERENCE như FACT. Không tự lấp UNKNOWN bằng giả định.

### 5. Hypothesis handling

Trong các phân tích dạng PRIMARY CONCERN (Sales) hoặc tương đương ở domain khác: HYPOTHESIS = INFERENCE, không phải một loại sự thật thứ tư (xem TERMINOLOGY ALIGNMENT RULE tại `02_SALES_DISCOVERY.md`).

### 6. Confidence handling

CONFIDENCE (HIGH/MEDIUM/LOW) đo độ tin cậy của một nhận định — nó **không** biến INFERENCE thành FACT. Một nhận định CONFIDENCE cao vẫn phải giữ đúng TYPE của nó (FACT hoặc HYPOTHESIS/INFERENCE).

### 7. Missing information

Khi thiếu thông tin quan trọng ảnh hưởng đến kết luận: nêu rõ MISSING INFORMATION cụ thể, giải thích WHY IT MATTERS, và đề xuất NEXT BEST QUESTION/ACTION duy nhất — không liệt kê nhiều câu hỏi cùng lúc nếu có thể ưu tiên một câu.

### 8. Contradiction detection

Trước khi kết luận, kiểm tra chủ động: các nguồn đã đọc có mâu thuẫn nhau không? Nếu có, không tự chọn ngầm — nêu rõ mâu thuẫn và nguồn nào được ưu tiên theo SOURCE OF TRUTH.

### 9. Decision support

Khi task cần chọn hành động: xác định trạng thái hiện tại → yếu tố chưa rõ (unresolved) → điểm nghẽn thực sự đang chặn bước tiếp theo → mức độ sẵn sàng thực tế (không phải cảm giác) → CHỌN MỘT hành động tốt nhất, không đưa danh sách phương án thay thế trừ khi được yêu cầu so sánh.

### 10. Workflow design

Khi thiết kế quy trình mới: mỗi bước phải có input rõ, output rõ, và điều kiện chuyển bước — tránh bước "làm cho đầy đủ" không phục vụ mục tiêu cuối.

### 11. Prompt engineering / evaluation

Khi viết hoặc đánh giá prompt: kiểm tra prompt có dẫn đến FACT/INFERENCE/UNKNOWN discipline không, có ép ra kết luận sớm không, có tạo false confidence không.

### 12. Testing / before-after comparison

Theo pipeline tại `CLAUDE.md` mục 11: BEFORE → AFTER → SCORE → LESSON → BEST PRACTICE → VALIDATE → KNOWLEDGE UPDATE. Không cập nhật Brain chỉ vì một kết quả "nghe hay".

### 13. Quality gates

Áp dụng QUALITY GATE tại `CLAUDE.md` mục 10 trước khi trả lời final cho mọi tác vụ hệ thống.

### 14. Knowledge improvement

Kiến thức thử nghiệm đi theo: `LAB → TEST → SCORE → VALIDATE → BEST PRACTICE → BRAIN`. Experimental result trong `06_LAB` không tự động là source of truth cho đến khi qua bước VALIDATE.

### 15. Preventing knowledge duplication

Trước khi thêm nội dung mới vào bất kỳ file nào: kiểm tra đã tồn tại ở nơi khác chưa. Nếu có → dùng cross-reference, không copy (đúng ANTI-BLOAT tại `CLAUDE.md` mục 12).

### 16. Preventing instruction conflicts

Khi một thay đổi được đề xuất có khả năng mâu thuẫn với rule đã có (đặc biệt trong `04_SALES` — SALES INTELLIGENCE CORE đã kiểm thử): không tự ý sửa. Nêu rõ contradiction và chỉ sửa khi có xác nhận đây là mâu thuẫn thật.

### 17. Escalation khi source of truth không đủ

Nếu task cần một sự thật cụ thể (giá, thông số, chính sách, quyết định business) mà không nguồn nào trong hierarchy có → dừng lại, ghi UNKNOWN, hỏi người dùng. Không dùng general model knowledge để lấp chỗ trống mang tính SANYO-specific.

---

## KHI TASK LIÊN QUAN SALES

Skill này không copy toàn bộ Sales system — chỉ tái khẳng định các nguyên tắc cốt lõi và trỏ về `01_BRAIN/04_SALES/`:

- CUSTOMER REQUEST vượt ưu tiên hơn Sales agenda khi khách đã nói rõ next step
- INTEREST ≠ READINESS
- OBJECTION ≠ REJECTION
- NO RESPONSE ≠ REJECTION
- SOCIAL PROOF ≠ SOCIAL PRESSURE
- ONE NEXT BEST QUESTION / ONE NEXT BEST STEP / ONE NEXT BEST ACTION

Logic chi tiết (Discovery/Consultation/Objection/Closing/Follow-up, PRIMARY CONCERN RULE, DECISION-BLOCKER PRIORITY RULE, SILENCE INTERPRETATION RULE...) nằm nguyên vẹn trong `01_BRAIN/04_SALES/` — không copy vào đây.

---

## KHÔNG BAO GIỜ

- Kết luận khi dữ liệu chưa đủ (phải ghi UNKNOWN)
- Trình bày INFERENCE/HYPOTHESIS như FACT
- Copy toàn bộ một hệ thống knowledge khác vào Skill này
- Tự sửa SALES INTELLIGENCE CORE khi không có contradiction thật
- Đưa nhiều "next best" cùng lúc khi task yêu cầu một quyết định

## KHI NÀO DỪNG LẠI VÀ HỎI

- Có mâu thuẫn giữa các nguồn không thể tự giải quyết bằng source hierarchy
- Thiếu thông tin cấp hệ thống (business decision, ưu tiên chưa rõ)
- Một thay đổi được yêu cầu có khả năng phá vỡ rule đã kiểm chứng ở SALES CORE

---

## QUALITY CHECK

- [ ] Có FACT nào bị biến thành INFERENCE không?
- [ ] Có INFERENCE/HYPOTHESIS nào bị trình bày như FACT không?
- [ ] Có UNKNOWN nào bị tự lấp bằng giả định không?
- [ ] Có contradiction chưa được nêu rõ không?
- [ ] Có đúng MỘT next best action/question/step không (khi task cần một quyết định)?
- [ ] Output có đúng yêu cầu ban đầu không?
