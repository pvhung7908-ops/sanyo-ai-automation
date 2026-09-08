# WRITING SKILL

## PURPOSE

Đây là EXECUTION METHOD cho các tác vụ viết — nó định nghĩa **HOW TO EXECUTE A WRITING TASK**, không định nghĩa cách SANYO nói (đó là việc của `01_BRAIN/05_VOICE/VOICE.md`) và không chứa domain knowledge (đó là việc của `01_BRAIN/**`).

## CROSS-SYSTEM POSITION

```text
BRAIN   = WHAT SANYO KNOWS
VOICE   = HOW SANYO SPEAKS
SKILLS  = HOW THE SYSTEM EXECUTES
CLAUDE.md = HOW THE SYSTEM IS ORCHESTRATED
```

Skill này không tạo triết lý viết riêng — nó thực thi VOICE.md, không mâu thuẫn hay thay thế VOICE.md.

---

## KHI NÀO DÙNG SKILL NÀY

Khi task yêu cầu tạo hoặc chỉnh sửa văn bản: nội dung khách hàng, nội dung content (Facebook/TikTok/Website), kịch bản tư vấn/sales, giải thích kỹ thuật, rewrite/edit văn bản có sẵn.

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

Không âm thầm lấp khoảng trống nguồn bằng general model knowledge khi task cần sự thật riêng của SANYO (giá, thông số, chính sách, quy trình).

---

## EXECUTION METHOD

### 1. Task interpretation

Xác định loại tác vụ viết: draft mới / rewrite / short-form / long-form / sales-customer / content / technical explanation. Xác định PRIMARY TASK theo `CLAUDE.md` mục 5 trước khi đọc bất kỳ file nào.

### 2. Source selection

Chỉ đọc đúng file cần theo `CLAUDE.md` mục 6 (KNOWLEDGE ROUTING) — không đọc toàn bộ Brain nếu không cần. VOICE.md gần như luôn cần đọc (quyết định cách nói); các file domain khác đọc theo chủ đề (CUSTOMER/SALES nếu viết cho khách hàng, PRODUCT nếu có nội dung sản phẩm).

### 3. Fact / Inference / Unknown discipline

Mọi thông tin cụ thể (thông số, cam kết, chính sách, số liệu) phải được phân loại: FACT đã xác minh (theo hệ thống DATA CONFIDENCE tại `PRODUCT_SPECIFICATIONS.md`), INFERENCE (có cơ sở nhưng chưa xác nhận — phải đánh dấu rõ nếu xuất hiện trong output), hoặc UNKNOWN (không có nguồn — không viết vào, hoặc hỏi lại người dùng).

### 4. Audience identification

Xác định ai đọc: khách hàng cụ thể, nhóm persona nào (xem `CUSTOMER_PERSONA.md`), đội nội bộ, hay công chúng qua kênh content. Nếu không rõ, hỏi lại thay vì đoán.

### 5. Objective identification

Xác định mục tiêu thật của văn bản: cung cấp thông tin, giải quyết một concern cụ thể, hỗ trợ quyết định — không mặc định "mục tiêu là bán được hàng" nếu task không yêu cầu.

### 6. Message hierarchy

Xác định ý quan trọng nhất cần truyền tải trước, theo tinh thần ANSWER-FIRST (`CLAUDE.md` mục 9) áp dụng cho cấu trúc văn bản, không chỉ cho câu trả lời hội thoại.

### 7. Information selection

Chỉ chọn thông tin liên quan trực tiếp đến audience + objective. MORE INFORMATION ≠ MORE VALUE (`CLAUDE.md` mục 4) — không nhồi mọi thứ đã biết vào một văn bản.

### 8. Structure before wording

Lên khung ý (outline) trước khi viết câu chữ chi tiết. Không polish câu chữ khi cấu trúc ý chưa ổn.

### 9. Drafting — Human Writing Rules từ VOICE.md

Viết theo `VOICE.md` mục 2 (CORE VOICE), mục 5 (HUMAN WRITING RULES — bao gồm danh sách sáo ngữ cấm dùng), mục 6 (WRITING BEHAVIOR). Không lặp lại các quy tắc này ở đây — chỉ thực thi.

### 10. Tone inheritance từ VOICE.md

Chọn tone theo `VOICE.md` mục 3 (bảng TONE theo ngữ cảnh). Với các ngữ cảnh còn UNKNOWN trong VOICE.md (Facebook, TikTok, Website, Training), mặc định dùng VOICE CORE, không tự sáng tác tone riêng cho kênh.

### 11. Final quality check

Xem mục QUALITY CHECK bên dưới.

---

## REWRITE METHOD

- Giữ nguyên ý định gốc của văn bản, trừ khi người dùng minh thị yêu cầu thay đổi.
- Cải thiện: sự rõ ràng, cấu trúc, tính tự nhiên, hiệu quả truyền đạt.
- Không âm thầm thêm claim, số liệu, hay cam kết không có trong bản gốc hoặc không được xác minh.
- Nếu bản gốc chứa lỗi FACT rõ ràng (ví dụ thông số sai theo `PRODUCT_SPECIFICATIONS.md`), báo lại cho người dùng thay vì tự sửa âm thầm.

---

## CÁC CHẾ ĐỘ VIẾT

**Short-form writing** — câu ngắn, một ý chính rõ ràng, hook mở đầu nếu là content. Theo VOICE CORE.

**Long-form writing** — cần outline rõ trước khi viết; vẫn ưu tiên ý quan trọng nhất lên trước nếu là tài liệu giải thích/hướng dẫn.

**Sales/customer communication writing** — bắt buộc kế thừa logic tại `01_BRAIN/04_SALES/`:
- Không tự bịa động cơ khách hàng
- Không biến INFERENCE thành FACT
- Không dùng social pressure (xem SOCIAL PROOF RULES trong 04_SALES)
- Bảo vệ sự tự chủ của khách hàng
- Dùng ONE NEXT BEST ACTION khi phù hợp
- Logic chi tiết (Discovery/Consultation/Objection/Closing/Follow-up) không copy vào đây — chỉ tham chiếu.

**Content writing** — inherit BRAND + VOICE + CUSTOMER + PRODUCT theo routing tại `CLAUDE.md` mục 6. Không tự động biến mọi content thành sales pitch trừ khi task yêu cầu.

**Technical explanation writing** — không bịa thông số kỹ thuật. Dùng hệ thống DATA CONFIDENCE tại `PRODUCT_SPECIFICATIONS.md`. Nếu thiếu dữ liệu xác minh → ghi UNKNOWN hoặc hỏi lại, không đoán.

---

## KHÔNG BAO GIỜ

- Bịa thông số, cam kết, hoặc chính sách không có nguồn
- Dùng sáo ngữ đã cấm trong `VOICE.md` mục 5
- Dùng social pressure hoặc fake urgency trong văn bản sales/customer
- Thay đổi ý nghĩa gốc khi rewrite mà không được yêu cầu
- Tạo văn bản dài hơn mức cần thiết chỉ để "đầy đủ hơn"

## KHI NÀO DỪNG LẠI VÀ HỎI

- Audience hoặc objective không rõ
- Cần thông số/giá/chính sách nhưng không có nguồn xác minh trong Brain
- Phạm vi được phép thay đổi khi rewrite không rõ ràng

---

## QUALITY CHECK

Áp dụng VOICE QUALITY GATE (`VOICE.md` mục 13) và QUALITY GATE tổng (`CLAUDE.md` mục 10). Bổ sung riêng cho writing:

- [ ] Structure đã rõ trước khi viết câu chữ chưa?
- [ ] Audience và objective có khớp với nội dung không?
- [ ] Mọi thông tin cụ thể đã được kiểm FACT/INFERENCE/UNKNOWN chưa?
- [ ] Có đoạn nào thừa, không phục vụ objective không?
