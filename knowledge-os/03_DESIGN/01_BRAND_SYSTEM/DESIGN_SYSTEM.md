# DESIGN SYSTEM

## 1. PURPOSE

Đây là **operational design system** của SANYO — định nghĩa **HOW** hệ thống áp dụng các yếu tố Brand Identity đã được xác minh (`BRAND_ASSET_SYSTEM.md`) khi tạo ra design output thật. Đây **không phải** một bản Brand Guidelines khác.

```text
BRAND_ASSET_SYSTEM = WHAT SANYO's official brand chứa và đã được định nghĩa chính thức
DESIGN_SYSTEM       = HOW hệ thống áp dụng các yếu tố đó khi tạo design
04_SKILLS/02_DESIGN/SKILL.md = HOW hệ thống tư duy qua một design task
```

## SOURCE OF TRUTH

```text
OFFICIAL BRAND GUIDELINES / OFFICIAL ASSETS
      ↓
BRAND_ASSET_SYSTEM.md
      ↓
DESIGN_SYSTEM.md (file này)
      ↓
04_SKILLS/02_DESIGN/SKILL.md
      ↓
DESIGN OUTPUT
```

Không đảo ngược hierarchy này. Không override rule Brand Identity đã verified bằng general design knowledge.

---

## 2. DESIGN PRINCIPLES

- **Objective trước thẩm mỹ** — không bắt đầu bằng trang trí (xem DESIGN DECISION FLOW).
- **Hierarchy phản ánh đúng tầm quan trọng** — không phải thứ đẹp mắt nhất được nhấn mạnh nhất.
- **Official asset trước, tự tạo sau** — nếu SANYO đã có asset chính thức, dùng nó.
- **Trung thực về UNKNOWN** — không lấp khoảng trống bằng general design trend rồi trình bày như rule SANYO.
- **Nhất quán với tính cách thương hiệu** — Chuyên nghiệp, Gần gũi, Tinh tế (`BRAND_ASSET_SYSTEM.md` § BRAND FOUNDATION) phải thể hiện qua lựa chọn thị giác, không chỉ qua lời nói.

---

## 3. DESIGN INPUT

Trước khi thiết kế, xác định: task type, audience (`01_BRAIN/02_CUSTOMER/CUSTOMER_PERSONA.md` nếu nhắm nhóm cụ thể), objective, content/message nguồn (từ `02_CONTENT/01_IDEAS/CONTENT_IDEA_SYSTEM.md` nếu là content), channel, và **BRAND INVOLVEMENT CHECK** — task có liên quan logo/màu/font/asset SANYO không → nếu có, bắt buộc tra `BRAND_ASSET_SYSTEM.md` trước khi thiết kế (đúng DESIGN TASK ROUTING đã định nghĩa ở đó).

---

## 4. CONTENT → MESSAGE → INFORMATION HIERARCHY

Áp dụng flow đã có ở `04_SKILLS/02_DESIGN/SKILL.md`:

```text
CONTENT → MESSAGE → INFORMATION HIERARCHY → VISUAL HIERARCHY → LAYOUT → STYLE
```

Không lặp lại chi tiết flow này — chỉ áp dụng. DESIGN_SYSTEM bổ sung phần **STYLE** cụ thể hoá bằng brand asset thật (mục 6-10 bên dưới), điều mà Skill (execution method chung) không có vì Skill không chứa domain knowledge.

---

## 5. VISUAL HIERARCHY

Visual hierarchy phải phản ánh information hierarchy — dùng chính hệ thống thị giác đã verified:
- **Màu**: theo tỷ lệ chính thức 40/30/20/10% (Bright Red/Dark Warm Gray/Midnight Blue/Cool Gray) — chi tiết xem `BRAND_ASSET_SYSTEM.md` § COLOR SYSTEM. Yếu tố quan trọng nhất trên trang không nhất thiết phải là Bright Red — tỷ lệ 40% là hướng dẫn phân bổ diện tích màu, không phải luật "ý quan trọng nhất = màu đỏ".
- **Chữ**: theo type scale đã verified (Headline 1/2/3, Paragraph 1/2) — chi tiết xem `BRAND_ASSET_SYSTEM.md` § TYPOGRAPHY.
- Không tạo thêm cấp độ hierarchy ngoài những gì đã verified chỉ để "phong phú hơn".

---

## 6. BRAND ASSET SELECTION

```text
Cần asset thương hiệu?
      ↓
Có trong BRAND_ASSET_SYSTEM.md inventory không?
      ↓
CÓ → dùng đúng file path đã ghi trong inventory, không vẽ lại, không AI redraw, không xấp xỉ
      ↓
CÓ MÔ TẢ NHƯNG KHÔNG CÓ FILE → ghi "DOCUMENTED BUT ASSET NOT AVAILABLE", không tự tạo
      ↓
KHÔNG CÓ TRONG GUIDELINES → UNKNOWN, không tự bịa
```

Không dùng asset generic "cho tiện" khi asset chính thức đã tồn tại.

---

## 7. LOGO APPLICATION

Spec kỹ thuật (grid, safe distance, minimum size, chroma, vị trí cho phép/cấm, protection rule) đã VERIFIED đầy đủ tại `BRAND_ASSET_SYSTEM.md` § LOGO SYSTEM — **không lặp lại ở đây**.

DESIGN_SYSTEM chỉ định nghĩa **logic chọn phiên bản** theo ngữ cảnh thực thi:
- Mặc định: **logo ngang** (chính, ưu tiên)
- Diện tích hiển thị nhỏ / cần đồng bộ với logo dọc thương hiệu khác: **logo dọc**
- Văn bản, biển hiệu offline, chiến dịch truyền thông cụ thể: **logo có slogan**
- App icon, icon website, không gian rất nhỏ: **logo icon**
- Chọn dương/âm bản theo quy tắc sắc độ nền đã verified (≤40% → dương, >40% → âm)

---

## 8. COLOR APPLICATION

Toàn bộ giá trị màu (HEX/RGB/CMYK/Pantone), tỷ lệ dùng, tổ hợp được duyệt/cấm → route về `BRAND_ASSET_SYSTEM.md` § COLOR SYSTEM. **Không tạo thêm "màu SANYO" mới, không tự đoán HEX/RGB/CMYK.**

**Bắt buộc:** khi dùng Midnight Blue, Cool Gray, hoặc Lemon Chiffon, lấy giá trị từ bảng đã VERIFIED trong `BRAND_ASSET_SYSTEM.md` (dựa trên trang 24 sạch), **không** dùng giá trị in sai ở trang 25/26 của guideline gốc — trạng thái conflict này phải được giữ nguyên, không tự "sửa" hay che giấu.

Quy trình chọn màu: xác định vai trò của composition (nền chính/nền tối/điểm nhấn) → tra tỷ lệ 40/30/20/10 tương ứng → ưu tiên tổ hợp đã duyệt → tránh tổ hợp bị cấm.

---

## 9. TYPOGRAPHY APPLICATION

Font, weight, type scale → route về `BRAND_ASSET_SYSTEM.md` § TYPOGRAPHY. Không tự tạo hierarchy chữ ngoài những gì đã verified.

**Logic chọn phối hợp theo 3 trường hợp đã verified:**
1. Nền tảng hỗ trợ đầy đủ Gilroy, cần đồng bộ tối đa → 100% Gilroy.
2. Cần cân bằng giữa bản sắc (Gilroy) và khả năng đọc/tương thích nền tảng → Gilroy cho headline + Montserrat cho body (trường hợp phổ biến nhất cho digital).
3. Nền tảng không hỗ trợ Gilroy → Montserrat độc lập toàn bộ (không trộn ngược lại Gilroy).

Nếu một task cần quyết định typography mà nguồn chính thức chưa định nghĩa (ví dụ cỡ chữ cho một định dạng chưa có trong guideline): hỏi người dùng hoặc gắn nhãn rõ **GENERAL BEST PRACTICE**, không trình bày như rule SANYO.

---

## 10. PATTERN / FRAME / WATERMARK APPLICATION

- **Pattern**: asset có sẵn (`Parttern/`), dùng trên nền xám hoặc nền đỏ theo ví dụ đã verified. Tỷ lệ/kích thước áp dụng cụ thể: UNKNOWN — không tự đặt số.
- **Frame (Social)**: asset có sẵn (`Frame Social/`), dùng làm điểm neo thị giác cho sản phẩm/bố cục. Tỷ lệ/kích thước cụ thể: UNKNOWN.
- **Frame Before/After**: nguyên tắc đã verified (chuẩn hoá bố cục so sánh), nhưng **DOCUMENTED BUT ASSET NOT AVAILABLE** — không tự tạo file mới thay thế mà không báo trước.
- **TikTok Thumbnail Frame**: nguyên tắc đã verified (bắt mắt, tiêu đề ngắn, ảnh sắc nét, đồng bộ), **DOCUMENTED BUT ASSET NOT AVAILABLE**.
- **Watermark**: Blend Mode Soft Light/Overlay, Opacity 20–40% — đã VERIFIED, áp dụng trực tiếp, asset có sẵn (`Watermark/`).

---

## 11. IMAGE DIRECTION

AI có thể tạo: môi trường, kiến trúc, thang máy, con người, ánh sáng, bố cục, cảnh chụp, không khí lifestyle. AI **không được dùng** để tái tạo logo, hình học logo, pattern chính thức, frame chính thức, hay bất kỳ official asset nào khi bản gốc đã có sẵn (composite official asset vào, không AI-redraw) — xem AI IMAGE GENERATION RULE tại `BRAND_ASSET_SYSTEM.md`.

Định hướng hình ảnh phải phản ánh tính cách thương hiệu (Chuyên nghiệp/Gần gũi/Tinh tế) và tinh thần "cụ thể, thực tế" của `VOICE.md` mục 2.4 — không dùng ảnh stock chung chung không liên quan bối cảnh thật của SANYO.

---

## 12. LAYOUT PRINCIPLES

Kế thừa flow tại `04_SKILLS/02_DESIGN/SKILL.md` (CONTENT→MESSAGE→HIERARCHY→LAYOUT→STYLE), áp dụng cụ thể với vị trí logo đã verified (góc trên/dưới trái, top-center, page-center, góc trên/dưới phải — cấm center lệch trái/phải và bottom-center) và safe distance/minimum size tương ứng. Layout phải chừa đủ safe zone cho logo trước khi đặt các thành phần khác.

---

## 13. CHANNEL APPLICATION

| Kênh | Tone | Rule thị giác chính thức | Ghi chú |
|---|---|---|---|
| TikTok | UNKNOWN → dùng VOICE CORE (`VOICE.md`) | TikTok Thumbnail Frame: documented, asset unavailable | Xem `02_CONTENT/02_TIKTOK/CONTENT_SYSTEM.md` |
| Facebook | UNKNOWN → dùng VOICE CORE | Logo trên Fanpage Facebook: mô tả có (trang 55), rule định lượng UNKNOWN | Xem `02_CONTENT/03_FACEBOOK/CONTENT_SYSTEM.md` |
| Website | UNKNOWN → dùng VOICE CORE | Logo trên Website/App: mô tả có (trang 54), rule định lượng UNKNOWN | Xem `02_CONTENT/04_WEBSITE/CONTENT_SYSTEM.md` |
| Training | UNKNOWN → dùng VOICE CORE | Không có rule thị giác riêng | Xem `02_CONTENT/05_TRAINING/CONTENT_SYSTEM.md` |

Không tự tạo rule SANYO riêng cho từng kênh khi nguồn ghi UNKNOWN. Nếu cần best practice cụ thể, gắn nhãn **GENERAL BEST PRACTICE**, không trình bày như rule chính thức.

---

## 14. INFORMATION DENSITY

Density thấp cho social (TikTok/Facebook — ưu tiên rõ ràng trong 1-2 giây đầu), density cao hơn cho Website/tài liệu kỹ thuật/catalogue (người đọc chủ động tìm thông tin). Nguyên tắc chung kế thừa từ `04_SKILLS/02_DESIGN/SKILL.md` mục 7 (Content density) — không tạo công thức số liệu riêng không có nguồn.

---

## 15. TECHNICAL / PRODUCT DESIGN

Mọi claim kỹ thuật/thông số trong thiết kế (infographic sản phẩm, sơ đồ, catalogue) phải route về hệ thống DATA CONFIDENCE tại `01_BRAIN/03_PRODUCT/PRODUCT_SPECIFICATIONS.md`. Không bịa thông số, cấu tạo, hay số liệu để minh hoạ — thiếu dữ liệu xác minh = UNKNOWN, không đoán để "trông đầy đủ hơn".

---

## 16. SALES / COMMERCIAL MATERIAL

Tài liệu sales (proposal, catalogue trình bày, slide tư vấn) phải:
- Dùng đúng brand asset đã verified (business card/letterhead/envelope đã có sẵn trong `Bộ văn phòng/` làm mẫu tham chiếu phong cách chính thức).
- Kế thừa tinh thần Closing của `01_BRAIN/04_SALES/05_SALES_CLOSING.md` cho mọi CTA trong tài liệu: **ONE NEXT BEST STEP**, không thúc ép, không tạo urgency giả, không dùng social pressure ("nhà người ta có", "ai cũng lắp").
- Không tự thêm testimonial/case khách hàng chưa xác nhận (đồng nhất với nguyên tắc đã áp dụng ở `02_CONTENT`).

---

## 17. DESIGN ADAPTATION

Một hệ thống design có thể thích ứng qua: Facebook, TikTok, Website, Presentation, Catalogue, Sales Proposal, Infographic, Training, Print.

**Được thay đổi khi thích ứng:** information density, hierarchy trình bày, kích thước/tỷ lệ, ngữ cảnh tương tác.

**KHÔNG được thay đổi:** brand identity, tính toàn vẹn của logo, màu đã verified, typography đã verified, tính cách thị giác cốt lõi của SANYO.

---

## 18. WHAT MUST NEVER BE INVENTED

- Màu, font, kích thước logo, hay bất kỳ giá trị brand nào ngoài `BRAND_ASSET_SYSTEM.md`
- Rule định lượng cho Pattern/Frame khi nguồn chưa định nghĩa
- Tone riêng cho từng kênh khi `VOICE.md` ghi UNKNOWN
- Động cơ/tâm lý khách hàng không có trong `01_BRAIN/02_CUSTOMER/`
- Thông số/cấu tạo sản phẩm không có trong `01_BRAIN/03_PRODUCT/`
- Testimonial, case khách hàng, hay bằng chứng chưa xác nhận
- CTA mang tính ép buộc, khan hiếm giả, hoặc social pressure

---

## 19. UNKNOWN / NEEDS VERIFICATION

Kế thừa nguyên trạng từ `BRAND_ASSET_SYSTEM.md` — **không được tự lấp bằng suy đoán ở lớp DESIGN_SYSTEM này**:

- Rule định lượng: Pattern, Frame (Social), Digital Brand Application (Website/App/Facebook logo placement cụ thể)
- Asset chưa xác nhận: Frame Before/After, TikTok Thumbnail Frame
- Vai trò chưa xác nhận: font Myriad Pro / SVN-Blywoofs / TikTok Display
- Conflict màu chưa được SANYO xác nhận sửa: HEX in sai của Midnight Blue, Cool Gray, Lemon Chiffon ở trang 25-26 guideline gốc (dùng giá trị verified ở trang 24 thay thế khi thực thi, nhưng giữ nguyên trạng thái "conflict chưa được nguồn gốc xác nhận sửa")
- Tone theo kênh: TikTok, Facebook, Website, Training (kế thừa từ `VOICE.md`)

---

## 20. DESIGN QUALITY GATE

- [ ] Đã dùng `BRAND_ASSET_SYSTEM.md` làm source of truth cho asset/màu/font chưa?
- [ ] Có đang lặp lại nội dung Brand Guidelines thay vì tham chiếu không?
- [ ] Có brand rule nào bị tự bịa không?
- [ ] Official rule và general best practice đã được phân biệt rõ (có gắn nhãn) chưa?
- [ ] Các mục UNKNOWN có bị âm thầm đoán không?
- [ ] Đã dùng đúng official asset khi có sẵn chưa (không AI-redraw, không tự vẽ lại)?
- [ ] Có tôn trọng `VOICE.md` (tone, human writing rules nếu có text đi kèm) không?
- [ ] Có tôn trọng nguồn CUSTOMER/PRODUCT/SALES (không bịa động cơ, thông số, hay dùng pressure) không?
- [ ] Hệ thống có áp dụng được cho nhiều loại design task không, hay chỉ dùng được cho một trường hợp cụ thể?
- [ ] File có mang tính vận hành (operational) thay vì lý thuyết không?
- [ ] Có tạo file không cần thiết nào không?
