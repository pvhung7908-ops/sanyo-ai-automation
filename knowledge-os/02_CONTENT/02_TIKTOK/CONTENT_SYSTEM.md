# TIKTOK CONTENT SYSTEM

## PURPOSE

Khung vận hành (operational framework) cho nội dung TikTok. File này **không định nghĩa tone TikTok** — `01_BRAIN/05_VOICE/VOICE.md` mục 3 hiện ghi rõ tone cho TikTok là **UNKNOWN**. Cho đến khi VOICE.md được bổ sung, mọi nội dung TikTok dùng **VOICE CORE** (VOICE.md mục 2) làm mặc định.

## CROSS-SYSTEM POSITION

```text
BRAIN          = WHAT SANYO KNOWS
VOICE          = HOW SANYO SPEAKS
SKILLS         = HOW THE SYSTEM EXECUTES
CONTENT SYSTEM = HOW CONTENT IS PLANNED/STRUCTURED FOR TIKTOK
```

Ý tưởng nội dung phải đến từ `02_CONTENT/01_IDEAS/CONTENT_IDEA_SYSTEM.md` trước khi vào file này. File này chỉ xử lý bước cấu trúc/định dạng cho kênh TikTok, không tạo ý tưởng.

---

## KHI NÀO NỘI DUNG TIKTOK LÀ PHÙ HỢP

Phù hợp khi: ý tưởng có thể truyền tải qua hình ảnh/hành động ngắn, giải quyết một câu hỏi/nỗi lo cụ thể của khách hàng (theo `CUSTOMER_PERSONA.md`, `OBJECTION_LIBRARY.md`), hoặc minh hoạ một khoảnh khắc thực tế (thi công, sử dụng, trải nghiệm).

Không phù hợp khi: nội dung cần giải thích kỹ thuật sâu, nhiều điều kiện/ngoại lệ (loại này phù hợp Website/FAQ hơn — xem `04_WEBSITE`).

## OBJECTIVE

Mỗi video phải có một objective rõ, thừa hưởng từ CONTENT IDEA SYSTEM (giáo dục / làm rõ / xây niềm tin / nhận biết vấn đề...). Không làm video "cho có mặt trên kênh".

## AUDIENCE / CONTEXT

Ai xem, xem trên điện thoại, thường lướt nhanh — tham khảo đúng nhóm khách hàng liên quan trong `CUSTOMER_PERSONA.md` nếu nội dung nhắm đến một persona cụ thể.

## HOOK

3 giây đầu phải nêu rõ vấn đề/câu hỏi mà video giải quyết. Hook phải bám vào **customer problem/question** thật (từ CONTENT IDEA SYSTEM), không phải một câu giật tít không liên quan nội dung.

## CORE MESSAGE

Một thông điệp chính duy nhất mỗi video — trùng với "Message" đã xác định ở bước IDEA.

## INFORMATION SEQUENCE

Thứ tự thông tin đi theo mức độ quan trọng giảm dần (đúng nguyên tắc MESSAGE HIERARCHY của `04_SKILLS/01_WRITING/SKILL.md`) — không dồn thông tin quan trọng vào cuối video.

## VISUAL / ACTION REQUIREMENT

Video cần có hành động/hình ảnh cụ thể minh hoạ message (không chỉ nói suông trước camera nếu có thể minh hoạ bằng cảnh thật — ví dụ: thi công, thao tác sử dụng). Không bịa cảnh quay hay số liệu hiện trường không có thật.

## SPOKEN / TEXT RELATIONSHIP

Lời nói và chữ trên màn hình nên củng cố cùng một message, không chứa hai thông tin khác nhau khiến người xem phân tán.

## PROOF / EVIDENCE

Nếu video có claim cụ thể (thông số, quy trình, chính sách), claim đó phải theo hệ thống DATA CONFIDENCE tại `PRODUCT_SPECIFICATIONS.md`. Không dùng testimonial hay câu chuyện khách hàng chưa được xác nhận là thật.

## CTA

Không bắt buộc mọi video phải có CTA (xem `01_IDEAS/CONTENT_IDEA_SYSTEM.md` — CTA chỉ khi phù hợp objective). Nếu có CTA, phải nhẹ, không thúc ép — kế thừa tinh thần `05_SALES_CLOSING.md` (ONE NEXT BEST STEP, không tạo urgency giả).

## DURATION / LENGTH

**UNKNOWN.** Không có nguồn nào trong Brain quy định độ dài video chuẩn cho SANYO. Không áp dụng con số "best practice" chung của ngành như thể đó là quy tắc của SANYO — nếu người dùng cần con số cụ thể, phải hỏi hoặc dán nhãn rõ là GENERAL BEST PRACTICE (không phải SANYO rule), theo `CLAUDE.md` mục 6 / CHANNEL UNKNOWN RULE.

---

## KHẢ NĂNG MỞ RỘNG

Khung này được thiết kế để có thể bổ sung rule cụ thể cho TikTok sau này (khi có dữ liệu/quyết định thật) mà không cần viết lại cấu trúc — chỉ cần điền vào đúng mục tương ứng (ví dụ mục DURATION / LENGTH) khi có nguồn hỗ trợ.

---

## KHÔNG ĐƯỢC BỊA

- Tone riêng cho TikTok (dùng VOICE CORE)
- Độ dài/tần suất đăng "chuẩn"
- Công thức tương tác (engagement formula)
- Testimonial hoặc câu chuyện khách hàng chưa xác nhận
- Thông số kỹ thuật không có trong `PRODUCT_SPECIFICATIONS.md`

## QUALITY GATE

- [ ] Objective rõ chưa?
- [ ] Hook bám đúng customer problem/question thật không?
- [ ] Core message có trùng với Message ở bước IDEA không?
- [ ] Claim (nếu có) có nguồn xác minh không?
- [ ] CTA (nếu có) có nhẹ, không ép không?
- [ ] Có phần nào đang dùng "TikTok tone" tự bịa không — nếu có, xoá và dùng VOICE CORE
- [ ] Có social pressure hoặc fake urgency không?

## SOURCE OF TRUTH

Ý tưởng → `01_IDEAS/CONTENT_IDEA_SYSTEM.md`. Cách nói → `VOICE.md`. Khách hàng → `02_CUSTOMER/`. Sản phẩm → `03_PRODUCT/`. Kỹ thuật viết → `04_SKILLS/01_WRITING/SKILL.md`.
