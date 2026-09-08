# WEBSITE CONTENT SYSTEM

## PURPOSE

Khung vận hành cho nội dung Website. File này **không định nghĩa tone Website** — `01_BRAIN/05_VOICE/VOICE.md` mục 3 hiện ghi rõ tone cho Website là **UNKNOWN**. Mặc định dùng **VOICE CORE** (VOICE.md mục 2).

## CROSS-SYSTEM POSITION

```text
BRAIN          = WHAT SANYO KNOWS
VOICE          = HOW SANYO SPEAKS
SKILLS         = HOW THE SYSTEM EXECUTES
CONTENT SYSTEM = HOW CONTENT IS PLANNED/STRUCTURED FOR WEBSITE
```

Ý tưởng phải đến từ `02_CONTENT/01_IDEAS/CONTENT_IDEA_SYSTEM.md` trước. File này chỉ xử lý cấu trúc cho trang web.

Website ưu tiên: **sự rõ ràng + hữu ích cho khách hàng + có bằng chứng + chính xác**, hơn là hình thức trình bày.

---

## SEARCH / USER INTENT

Chỉ xử lý khi thực sự liên quan (ví dụ trang FAQ, trang giải đáp một câu hỏi cụ thể). Không tự tạo công thức SEO hay từ khoá "chuẩn" — Brain hiện không có dữ liệu nào về search behavior hay từ khoá của khách hàng SANYO. Nếu task yêu cầu tối ưu SEO cụ thể, đây là **UNKNOWN**, cần hỏi lại hoặc dán nhãn GENERAL BEST PRACTICE rõ ràng (không phải SANYO rule).

## CUSTOMER PROBLEM

Mỗi trang/mục phải giải quyết một customer problem cụ thể (từ CONTENT IDEA SYSTEM), không viết trang chỉ để "có nội dung".

## INFORMATION ARCHITECTURE

Sắp xếp nội dung theo trình tự khách hàng cần biết (ví dụ: vấn đề → giải pháp → điều kiện/lưu ý → bước tiếp theo), không theo thứ tự SANYO muốn khoe.

## PAGE OBJECTIVE

Mỗi trang có một mục tiêu rõ (giải thích sản phẩm, giải đáp thắc mắc, xây niềm tin, hỗ trợ quyết định) — không trộn nhiều mục tiêu không liên quan trong một trang.

## MESSAGE HIERARCHY

Ý quan trọng nhất lên đầu trang/mục, theo tinh thần ANSWER-FIRST (`CLAUDE.md` mục 9).

## TRUST / EVIDENCE

Mọi tuyên bố phải theo CLAIM VERIFICATION RULE tại `BRAND.md` mục 13 (VERIFIED FACT / MARKETING POSITION / DO NOT INVENT) — không tự tạo số năm kinh nghiệm, số dự án, chứng nhận nếu chưa xác minh.

## PRODUCT RELEVANCE

Thông tin sản phẩm trên website phải khớp với `01_BRAIN/03_PRODUCT/` — không mở rộng hay suy diễn thêm.

## TECHNICAL ACCURACY

Thông số kỹ thuật theo hệ thống DATA CONFIDENCE tại `PRODUCT_SPECIFICATIONS.md`. Không có dữ liệu = không được đoán, kể cả để "trang web trông đầy đủ hơn".

## CTA

Không bắt buộc mọi trang phải có CTA mạnh. CTA phù hợp với mức độ sẵn sàng của người đọc trang đó (một trang giới thiệu chung không cần CTA "mua ngay") — kế thừa tinh thần CLOSING LADDER tại `05_SALES_CLOSING.md`.

## FAQ (khi hữu ích)

Câu hỏi trong FAQ nên lấy từ `PRODUCT_FAQ.md` và `OBJECTION_LIBRARY.md` — không tự bịa câu hỏi khách hàng chưa từng xuất hiện trong Brain.

---

## KHÔNG ĐƯỢC BỊA

- Tone riêng cho Website (dùng VOICE CORE)
- Công thức SEO hay từ khoá "chuẩn"
- Chứng nhận, số năm kinh nghiệm, số dự án chưa xác minh
- Thông số kỹ thuật ngoài `PRODUCT_SPECIFICATIONS.md`
- Câu hỏi FAQ không có nguồn

## QUALITY GATE

- [ ] Page objective rõ chưa?
- [ ] Customer problem có thật, có nguồn không?
- [ ] Thông tin sản phẩm khớp với `03_PRODUCT/` không?
- [ ] Mọi claim đã qua CLAIM VERIFICATION RULE chưa?
- [ ] Có đang dùng "Website tone" hay công thức SEO tự bịa không — nếu có, xoá
- [ ] CTA (nếu có) có đúng mức độ sẵn sàng của người đọc không?

## SOURCE OF TRUTH

Ý tưởng → `01_IDEAS/CONTENT_IDEA_SYSTEM.md`. Cách nói → `VOICE.md`. Sản phẩm → `03_PRODUCT/`. Claim thương hiệu → `BRAND.md` mục 13. Khách hàng/FAQ → `02_CUSTOMER/`, `03_PRODUCT/PRODUCT_FAQ.md`.
