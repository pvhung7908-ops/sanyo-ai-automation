# DESIGN SKILL

## PURPOSE

Đây là EXECUTION METHOD cho các tác vụ thiết kế — nó định nghĩa **HOW THE SYSTEM THINKS THROUGH A DESIGN TASK**. Đây không phải một bộ visual brand guideline. `01_BRAIN/01_BRAND/BRAND.md` vẫn là source of truth cho brand identity.

## CROSS-SYSTEM POSITION

```text
BRAIN   = WHAT SANYO KNOWS
VOICE   = HOW SANYO SPEAKS
SKILLS  = HOW THE SYSTEM EXECUTES
CLAUDE.md = HOW THE SYSTEM IS ORCHESTRATED
```

---

## KHI NÀO DÙNG SKILL NÀY

Khi task yêu cầu tạo hoặc đánh giá sản phẩm thị giác: infographic, slide/presentation, visual cho social content, giải thích kỹ thuật/sản phẩm bằng hình ảnh, UI/UX, hoặc design brief/critique.

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

**Lưu ý quan trọng:** `BRAND.md` hiện **chưa chứa** color palette, font, logo usage, hay kích thước cụ thể — chỉ có brand positioning/personality/communication style. Đây là khoảng trống thật trong Brain, không phải điều Skill này được tự lấp đầy. Khi task cần quyết định màu sắc/font/kích thước cụ thể của SANYO → **hỏi người dùng hoặc ghi UNKNOWN**, không tự bịa "màu SANYO" hay "font SANYO".

---

## EXECUTION METHOD

### 1. Design task classification

Xác định loại: infographic / slide / presentation / social visual / UI-UX / technical-product visual / design brief / design critique.

### 2. Objective before aesthetics

Xác định mục đích thị giác phục vụ điều gì (giải thích, hướng dẫn, thuyết phục nhẹ) TRƯỚC khi chọn phong cách. Không bắt đầu bằng "làm cái gì đó đẹp".

### 3. Audience / context

Ai xem, xem ở đâu (điện thoại, buổi tư vấn trực tiếp, website) — quyết định content density và layout. Tham khảo `CUSTOMER_PERSONA.md` nếu audience là khách hàng cụ thể.

### 4. Flow bắt buộc

```text
CONTENT
   ↓
MESSAGE
   ↓
INFORMATION HIERARCHY
   ↓
VISUAL HIERARCHY
   ↓
LAYOUT
   ↓
STYLE
```

Không được đảo ngược flow này (ví dụ chọn STYLE trước khi biết MESSAGE).

### 5. Information hierarchy → Visual hierarchy

Xác định ý nào quan trọng nhất trước khi quyết định kích thước/vị trí/màu sắc nhấn — visual hierarchy phải phản ánh đúng information hierarchy, không phải ngược lại (không nhấn mạnh thứ đẹp mắt nhưng không quan trọng).

### 6. Layout logic

Layout phục vụ luồng đọc tự nhiên theo mức độ quan trọng đã xác định ở bước 5, không phục vụ trước tiên cho "cân đối thị giác".

### 7. Content density

Ưu tiên ít nhưng có chủ đích — tránh nhồi nhét, đặc biệt trên social/mobile.

### 8. Typography hierarchy

Phân cấp rõ giữa tiêu đề / ý chính / chi tiết phụ — không dùng nhiều cấp độ chữ chỉ để "phong phú".

### 9. Image / visual role

Mỗi hình ảnh phải có vai trò rõ (minh hoạ ý cụ thể, không trang trí vô nghĩa) — nhất quán với BRAND.md mục 8 (tránh nội dung sáo rỗng áp dụng cả tinh thần cho thị giác).

### 10. CTA hierarchy (khi liên quan)

Nếu thiết kế có CTA, kế thừa tinh thần Closing tại `05_SALES_CLOSING.md` — một CTA rõ ràng, không thúc ép, không tạo cảm giác phải hành động ngay nếu không có căn cứ thật.

### 11. Presentation / slide logic

Mỗi slide một ý chính; thông tin hỗ trợ đặt phụ; áp dụng cùng flow CONTENT→MESSAGE→HIERARCHY như trên cho từng slide.

### 12. Social content visual logic

Ưu tiên rõ ràng trong 1-2 giây đầu tiên nhìn; density thấp hơn presentation/print.

### 13. Technical / product visual explanation

Không tự bịa thông số hoặc cấu tạo kỹ thuật để minh hoạ — nếu cần số liệu/cấu tạo cụ thể, kiểm tra `01_BRAIN/03_PRODUCT/PRODUCT_SPECIFICATIONS.md` (hệ thống DATA CONFIDENCE). Thiếu dữ liệu → UNKNOWN, không đoán.

### 14. Design brief creation

Trước khi thiết kế, xác lập: OBJECTIVE, AUDIENCE, MESSAGE chính, ĐỊNH DẠNG (kích thước/kênh), CONSTRAINTS (brand/kỹ thuật nếu có). Nếu thiếu mục nào quan trọng, hỏi lại trước khi thiết kế.

### 15. Image-generation prompt construction

Prompt phải bám vào MESSAGE + AUDIENCE đã xác lập ở bước brief, không tự thêm chi tiết thị giác không có căn cứ (màu/phong cách cụ thể của SANYO nếu chưa được xác nhận). Tránh phong cách nhìn chung chung như AI-generated mặc định — tinh thần tương tự nguyên tắc "không viết theo kiểu AI chung chung" của `VOICE.md`, áp dụng loại suy sang thị giác.

### 16. Design review / critique

Đánh giá theo đúng flow ở mục 4: có đúng MESSAGE không → information hierarchy có phản ánh đúng độ quan trọng không → visual hierarchy có khớp không → layout có phục vụ luồng đọc không.

### 17. Final quality gate

Xem mục QUALITY CHECK bên dưới.

---

## KHI NÀO CẦN THAM KHẢO FILE KHÁC

- Quyết định brand-specific (màu, font, logo, giọng thương hiệu) → `BRAND.md` (và hỏi nếu thiếu, xem lưu ý ở đầu file)
- Claim thị giác liên quan sản phẩm → `01_BRAIN/03_PRODUCT/`
- Communication hướng đến khách hàng cụ thể → `01_BRAIN/02_CUSTOMER/`
- Thiết kế có liên quan quá trình bán hàng (CTA, closing) → `01_BRAIN/04_SALES/`

---

## KHÔNG BAO GIỜ

- Tự bịa màu sắc, font, kích thước, hay quy tắc thị giác của SANYO chưa được xác nhận
- Tự bịa thông số/cấu tạo kỹ thuật để minh hoạ
- Tự giả định customer segment không có trong `CUSTOMER_PERSONA.md`
- Đảo ngược flow CONTENT → MESSAGE → HIERARCHY → LAYOUT → STYLE
- Nhồi nhét nội dung chỉ để "trông đầy đủ hơn"

## KHI NÀO DỪNG LẠI VÀ HỎI

- Cần quyết định brand-visual cụ thể (màu/font/logo) mà BRAND.md chưa có
- Cần thông số/cấu tạo sản phẩm để minh hoạ nhưng chưa xác minh
- Objective hoặc audience của thiết kế chưa rõ

---

## QUALITY CHECK

- [ ] MESSAGE đã rõ trước khi vào LAYOUT/STYLE chưa?
- [ ] Visual hierarchy có phản ánh đúng information hierarchy không?
- [ ] Có phần tử nào trang trí vô nghĩa, không phục vụ MESSAGE không?
- [ ] Có bịa brand-visual spec hoặc thông số sản phẩm nào không?
- [ ] Có đúng audience/context (kênh, thiết bị xem) không?
