# FACEBOOK CONTENT SYSTEM

## PURPOSE

Khung vận hành cho nội dung Facebook. File này **không định nghĩa tone Facebook** — `01_BRAIN/05_VOICE/VOICE.md` mục 3 hiện ghi rõ tone cho Facebook là **UNKNOWN**. Mặc định dùng **VOICE CORE** (VOICE.md mục 2) cho đến khi có bổ sung.

## CROSS-SYSTEM POSITION

```text
BRAIN          = WHAT SANYO KNOWS
VOICE          = HOW SANYO SPEAKS
SKILLS         = HOW THE SYSTEM EXECUTES
CONTENT SYSTEM = HOW CONTENT IS PLANNED/STRUCTURED FOR FACEBOOK
```

Ý tưởng phải đến từ `02_CONTENT/01_IDEAS/CONTENT_IDEA_SYSTEM.md` trước. File này chỉ xử lý cấu trúc cho kênh Facebook.

---

## OBJECTIVE

Xác định rõ mục tiêu bài viết (giáo dục / làm rõ / xây niềm tin / hỗ trợ quyết định...), kế thừa từ CONTENT IDEA SYSTEM.

## AUDIENCE / CONTEXT

Ai đọc, đọc trong bối cảnh nào (lướt feed, được chia sẻ, tìm hiểu chủ động) — tham khảo `CUSTOMER_PERSONA.md` khi nhắm một nhóm cụ thể.

## TOPIC

Chủ đề phải bám vào một customer problem/question/concern thật (từ bước IDEA), không phải chủ đề chung chung.

## OPENING

Câu/đoạn mở đầu nêu rõ vấn đề đang được nói tới — tránh mở đầu bằng sáo ngữ đã cấm ở `VOICE.md` mục 5 (ví dụ "Trong thời đại ngày nay...").

## MESSAGE HIERARCHY

Ý quan trọng nhất đi trước, theo tinh thần ANSWER-FIRST (`CLAUDE.md` mục 9, `04_SKILLS/01_WRITING/SKILL.md`).

## EVIDENCE

Mọi claim cụ thể (thông số, chính sách, quy trình) phải theo DATA CONFIDENCE tại `PRODUCT_SPECIFICATIONS.md`. Không dùng số liệu, testimonial, hay case chưa xác nhận.

## EXPLANATION

Giải thích đủ để khách hiểu, không giả định khách đã biết thuật ngữ kỹ thuật — áp dụng CUSTOMER LANGUAGE RULE (`CUSTOMER_PERSONA.md`).

## CUSTOMER RELEVANCE

Mỗi bài phải trả lời được: bài này giúp ích gì cho khách hàng, không chỉ có lợi cho SANYO.

## CTA

Không bắt buộc. Nếu có, CTA phải nhẹ, đúng objective, không ép — kế thừa tinh thần `05_SALES_CLOSING.md`.

## COMMENT / CONVERSATION CONSIDERATIONS

Khi trả lời bình luận liên quan sản phẩm/giá/kỹ thuật, áp dụng cùng discipline như tư vấn: không bịa thông số, không dùng social pressure ("nhà người ta có", "ai cũng lắp"), không tạo cảm giác khan hiếm giả. Với bình luận mang tính phản đối/băn khoăn, tinh thần xử lý theo `04_SALES_OBJECTION.md` (ghi nhận trước khi giải thích) áp dụng được dù đây là content, không phải hội thoại bán hàng trực tiếp.

---

## KHÔNG ĐƯỢC BỊA

- Tone riêng cho Facebook (dùng VOICE CORE)
- Công thức engagement hay con số hiệu suất
- Testimonial/case khách hàng chưa xác nhận
- Thông số kỹ thuật ngoài `PRODUCT_SPECIFICATIONS.md`

## QUALITY GATE

- [ ] Objective rõ chưa?
- [ ] Topic bám đúng customer problem/question thật không?
- [ ] Mở đầu có tránh sáo ngữ cấm không?
- [ ] Evidence có nguồn xác minh không?
- [ ] Có đang dùng "Facebook tone" tự bịa không — nếu có, xoá và dùng VOICE CORE
- [ ] CTA (nếu có) có phù hợp, không ép không?
- [ ] Có social pressure hoặc fake urgency không?

## SOURCE OF TRUTH

Ý tưởng → `01_IDEAS/CONTENT_IDEA_SYSTEM.md`. Cách nói → `VOICE.md`. Khách hàng → `02_CUSTOMER/`. Sản phẩm → `03_PRODUCT/`. Xử lý phản đối trong bình luận → `04_SALES/04_SALES_OBJECTION.md`. Kỹ thuật viết → `04_SKILLS/01_WRITING/SKILL.md`.
