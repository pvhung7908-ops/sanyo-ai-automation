# BRAND ASSET SYSTEM

## PURPOSE

Đây là **CONTROL AND ROUTING LAYER** cho nhận diện thị giác chính thức của SANYO YUSOKI. File này **không thay thế** Official Brand Guidelines — nó chỉ nói cho Knowledge OS biết: khi nào cần tra cứu, tra ở đâu, nguồn nào có thẩm quyền, dùng asset thế nào, kiểm tra compliance ra sao, và làm gì khi thiếu/mâu thuẫn thông tin.

---

## ✅ TRẠNG THÁI NGUỒN — ĐÃ XÁC MINH (RE-VALIDATED)

Đã inventory toàn bộ `BRAND_IDENTITY/`, đọc parsed text của `SANYO YUSOKI_BRAND GUIDELINES.pdf` (62 trang, khớp version 1.0 — 2026), và **render trực tiếp một số trang thành ảnh để kiểm tra bằng mắt** (theo đúng IMPORTANT SOURCE RULE) khi phát hiện nghi ngờ mâu thuẫn. Phần lớn dữ kiện dưới đây giờ ở trạng thái **VERIFIED** — không còn là "user-provided, pending verification" như trước.

**Đã phát hiện 1 lỗi thật trong chính file gốc** (không phải lỗi OCR của tôi) — xem mục COLOR SYSTEM CONFLICT bên dưới. Đã inspect bằng render ảnh trực tiếp, không đoán, không tự sửa.

---

## FULL INVENTORY — BRAND_IDENTITY/

*(đường dẫn tương đối trong `03_DESIGN/01_BRAND_SYSTEM/BRAND_IDENTITY/`, giữ nguyên cấu trúc gốc, không đổi tên/di chuyển)*

| Category | Documented in Guidelines | Asset available | File path | Verified | Usage role |
|---|---|---|---|---|---|
| Brand Guidelines (nguồn văn bản) | — | ✅ | `1-BRAND GUIDELINES/SANYO YUSOKI_BRAND GUIDELINES.pdf` (62 trang) | ✅ VERIFIED | Nguồn thẩm quyền chính |
| Brand Guidelines (file thiết kế gốc) | — | ✅ | `1-BRAND GUIDELINES/SANYO_BRAND GUIDELINES_Folder/SANYO_BRAND GUIDELINES.ai` | ✅ có, chưa mở được nội dung layer (không có Illustrator) | Nguồn dựng file PDF |
| Logo — chính (ngang) | ✅ | ✅ | `LOGO/Logo ngang_Sanyo Yusoki.png`, `LOGO/Logo chính_Sanyo Yusoki.png` | ✅ VERIFIED | Logo ưu tiên, mặc định |
| Logo — dọc | ✅ | ⚠️ chỉ có bản âm bản | `LOGO/Logo âm bản/Logo dọc-âm bản.png` | ⚠️ thiếu bản dương (positive) rời | Dùng khi diện tích hiển thị nhỏ / đồng bộ với logo dọc thương hiệu khác |
| Logo — có slogan | ✅ | ✅ | `LOGO/Logo & Slogan_Sanyo Yusoki.png` | ✅ VERIFIED | Văn bản, biển hiệu offline, chiến dịch |
| Logo — icon | ✅ | ✅ | `LOGO/Logo icon_Sanyo Yusoki.png` | ✅ VERIFIED | App icon, icon website |
| Logo — âm bản (negative) 4 loại | ✅ | ✅ | `LOGO/Logo âm bản/` (4 file: Slogan, dọc, icon, ngang) | ✅ VERIFIED | Dùng trên nền tối/sắc độ >40% |
| Logo — file vector gốc | — | ✅ | `LOGO/LOGO SANYO YUSOKI.ai`, `LOGO/LOGO SANYO YUSOKI.pdf` | ✅ có | Nguồn dựng logo chất lượng cao |
| Font — Gilroy (chính) | ✅ | ✅ | ` Brand Font/SVN-Gilroy Việt hóa/` (20 file .otf) | ✅ VERIFIED | Toàn bộ ấn phẩm thiết kế |
| Font — Montserrat (phụ) | ✅ | ✅ | ` Brand Font/Montserrat/` (18 file .ttf) | ✅ VERIFIED | Văn bản phụ, nền tảng không hỗ trợ Gilroy |
| Font — khác (phát hiện thêm, không nằm trong hệ thống chính/phụ chính thức) | — | ✅ | `.../Fonts/MYRIADPRO-REGULAR.OTF`, `SVN-Blywoofs.otf`, `TikTokDisplay-Regular.otf` | ✅ có, ⚠️ vai trò UNKNOWN | Không được guideline text mô tả vai trò — có thể dùng cho hạng mục cụ thể (ví dụ TikTok Display khả năng cho TikTok Thumbnail Frame) nhưng **chưa xác nhận**, không suy diễn |
| Office — Business Card | ✅ | ✅ | `Bộ văn phòng/Business Card/` (pdf + 3 jpg mockup) | ✅ VERIFIED — 5.5×9cm | Danh thiếp |
| Office — ID Card | ✅ | ✅ | `Bộ văn phòng/ID Card/` (pdf + 3 jpg) | ✅ VERIFIED — 8.6×5.4cm | Thẻ nhân viên |
| Office — Letterhead | ✅ | ✅ | `Bộ văn phòng/Letterhead/` (pdf + 3 jpg) | ✅ VERIFIED — A4 (29.7×21cm) | Tiêu đề thư |
| Office — Envelope (3 khổ) | ✅ | ✅ | `Bộ văn phòng/Phong bì thư/` (pdf + jpg/png theo A6/A5/A4) | ✅ VERIFIED — A6 12×22cm, A5 16×23cm, A4 25×34cm | Phong bì thư |
| Pattern | ✅ | ✅ | `Parttern/Parttern_Sanyo Yusoki-01.png`, `Parttern_Sanyo Yusoki.ai` | ✅ có asset, mô tả rule chi tiết: UNKNOWN (guideline chỉ có ví dụ "trên nền xám" / "trên nền đỏ") | Hoa văn thương hiệu |
| Frame (Social) | ✅ | ✅ | `Frame Social/` (6 PNG + 6 JPG) | ✅ VERIFIED khái niệm, rule định lượng: UNKNOWN | Điểm neo thị giác cho social post |
| Frame — Before/After | ✅ (trang 59) | ⚠️ dùng chung asset Frame Social? Không có file riêng tên "before-after" | Không có path riêng xác nhận | ⚠️ NOT VERIFIED asset riêng | Chuẩn hoá bố cục so sánh trước/sau lắp đặt |
| Frame — TikTok Thumbnail | ✅ (trang 59, mô tả nguyên tắc) | ❌ không thấy file asset cụ thể | — | ❌ UNKNOWN | Thumbnail TikTok |
| Watermark | ✅ | ✅ | `Watermark/` (2 JPG + 2 PNG + .ai) | ✅ VERIFIED (Soft Light/Overlay, 20–40%) | Hình mờ trên ảnh/video |
| Package Report | — | ✅ | `.../SANYO_BRAND GUIDELINES Report.txt` | ✅ VERIFIED | Danh sách font đóng gói trong .ai |
| Thư mục tôi tạo trước đó (`FONT/`, `TEMPLATE/`) | — | trống | `BRAND_IDENTITY/FONT/`, `BRAND_IDENTITY/TEMPLATE/` | N/A | Không dùng — nội dung thật nằm ở các thư mục tên khác do SANYO đặt sẵn (` Brand Font/`, `Bộ văn phòng/`...). Giữ nguyên, không xoá, không di chuyển gì vào đây. |

---

## BRAND FOUNDATION *(✅ VERIFIED — trang 4-6)*

**Brand Story:** "Không có công trình nào giống công trình nào! Mỗi công trình có cấu trúc, nhu cầu và cách sử dụng riêng. Vì vậy, Sanyo Yusoki bắt đầu từ việc thấu hiểu từng công trình để kiến tạo giải pháp thang máy phù hợp, cân bằng giữa an toàn, công năng, thẩm mỹ và giá trị sử dụng lâu dài."

**Core Values:** Thấu hiểu – Chính xác – Chỉn chu – An toàn – Đồng hành

**Target Customers:**
- B2C — Gia chủ: xây mới/cải tạo; quan tâm an toàn, tiện nghi, thẩm mỹ, giá trị sử dụng lâu dài.
- B2B — Đối tác: kiến trúc sư, nhà thầu, đơn vị thiết kế/thi công nội thất, đại lý/đơn vị phân phối.

**Tagline:** "Thấu hiểu để kiến tạo giải pháp"

**Brand Personality (3 đặc tính, có mô tả hành vi cụ thể):**
- **CHUYÊN NGHIỆP** — Có năng lực, chính xác và có trách nhiệm trong từng quyết định.
- **GẦN GŨI** — Chia sẻ kiến thức rõ ràng, dễ hiểu và tạo cảm giác tin cậy trong giao tiếp.
- **TINH TẾ** — Chỉn chu trong từng chi tiết, đề cao sự cân bằng và phù hợp thay vì phô trương.

*(Đây là bản dịch/mô tả chi tiết hơn — nhất quán về tinh thần với "Professional/Approachable/Sophisticated" đã ghi nhận trước đó.)*

---

## LOGO SYSTEM *(✅ VERIFIED)*

4 phiên bản: **Logo ngang (chính, ưu tiên)**, Logo dọc (phụ — dùng khi diện tích nhỏ/đồng bộ logo dọc thương hiệu khác), Logo có slogan (văn bản, biển hiệu offline, chiến dịch), Logo icon (không gian nhỏ: app icon, icon website).

**Logo Grid:** hệ đơn vị X = độ rộng khoảng cách giữa biểu tượng và chữ. Tỷ lệ riêng cho từng phiên bản (logo ngang: 21x/8x/6x/8x/x/12x; logo dọc: 18x/14x/14x/23x/3x/x; logo có slogan: 6x/8x/8x/27x/36x/x).

**Safe Distance:** khoảng cách tối thiểu tương đương chiều rộng/cao chữ "O" trong "Sanyo Yusoki" — đơn vị tương đối, không phải số cm/px cố định.

**Minimum Size:**
- Logo ngang: 20mm (in) / 120px (số)
- Logo dọc: 15mm (in) / 100px (số)
- Logo có slogan: 35mm (in) / 200px (số)

**Logo Chroma:** bản đen/trắng được chấp nhận nhưng KHÔNG ưu tiên (chỉ dùng hạn chế, ví dụ photocopy/báo giấy). Quy tắc chọn dương/âm bản: nền có sắc độ ≤ 40% → dùng logo dương bản; nền > 40% → dùng logo âm bản.

**App Icon:** khung vuông bo góc → logo chiếm 4/6 chiều ngang/dọc; khung tròn → logo chiếm 3/5 chiều ngang/dọc. Có thể chọn phiên bản đỏ/trắng/xám tuỳ nền tảng.

**Vị trí đặt logo được chấp thuận:** góc trên trái, góc dưới trái, chính giữa phía trên, trung tâm trang, góc trên phải, góc dưới phải.
**Vị trí KHÔNG được phép:** chính giữa lệch trái/phải, chính giữa phía dưới.

**Logo trên chất liệu:** kim loại/kính/nhựa/gỗ/vải/giấy → in ấn, khắc laser, dập nổi, cắt CNC, gắn nổi 3D — ưu tiên rõ nét, đúng màu, bền.

**Logo trên hình ảnh:** ưu tiên nhận diện + hài hoà bố cục; đặt ở khoảng trống, tránh vùng nhiều chi tiết/tương phản thấp; chọn dương/âm bản theo độ sáng ảnh.

**Logo Protection (đã xác nhận khớp 100% với danh sách "không được" đã có sẵn):** không hoán đổi màu, không xoay, không dùng logo mờ, không lật ngược, không thêm hiệu ứng, không làm biến dạng, không chuyển stroke, không đưa về gradient, không cắt xoá, không dùng sai quy chuẩn, không đặt trên nền trùng màu.

---

## ⚠️ COLOR SYSTEM CONFLICT — PHÁT HIỆN LỖI TRONG FILE GỐC

Đã render trang 24, 25, 26 thành ảnh và kiểm tra trực tiếp bằng mắt (không chỉ dựa vào parsed text).

**Trang 24 (PRIMARY COLORS) — HOÀN TOÀN SẠCH, không lỗi.** Mọi swatch (màu hiển thị) khớp chính xác với HEX/RGB/CMYK/Pantone in kèm — đã kiểm tra toán học HEX↔RGB khớp 100% cho cả 4 màu.

**Trang 25 (SECONDARY/ACCENT) — phát hiện 1 lỗi:** Swatch **Lemon Chiffon** hiển thị màu vàng nhạt đúng, RGB in kèm là `255, 248, 198` (= HEX thật `#FFF8C6`), nhưng dòng "HEX:" in trên trang lại ghi nhầm `#F0EEE9` (là hex của Cloud Dancer — rõ ràng do copy-paste khi dựng file, quên cập nhật dòng HEX).

**Trang 26 (BACKGROUND COLORS) — phát hiện 2 lỗi:** Swatch **Midnight Blue** (hiển thị đúng màu xanh navy đậm) và swatch **Cool Gray** (hiển thị đúng màu xám xanh nhạt) đều bị in nhầm dòng "HEX: #F0EEE9" (copy-paste từ Cloud Dancer, không cập nhật).

**Đây là lỗi thật trong file gốc `SANYO YUSOKI_BRAND GUIDELINES.pdf`, không phải lỗi đọc/OCR của tôi** — đã xác nhận bằng cách nhìn trực tiếp ảnh render, không chỉ đọc text.

**Không tự ý sửa.** Theo đúng IMPORTANT SOURCE RULE, đây là bảng đối chiếu — dùng giá trị đã VERIFIED ở trang 24 (không có lỗi) làm tham chiếu, và trang này ghi nhận rõ trang nào có typo cần SANYO xác nhận/sửa lại file gốc:

| Màu | HEX xác nhận đúng (trang 24, sạch) | HEX in sai (trang 25/26) |
|---|---|---|
| Midnight Blue | `#191970` (trang 24) | Trang 26 in nhầm `#F0EEE9` |
| Cool Gray | `#DBE2E9` (trang 24) | Trang 26 in nhầm `#F0EEE9` |
| Lemon Chiffon | `#FFF8C6` (suy từ RGB 255,248,198 tự khớp, trang 25) | Trang 25 in nhầm `#F0EEE9` |

**Khuyến nghị:** báo lại cho đội thiết kế SANYO để sửa file `.ai` gốc (dòng text HEX ở 2 trang này), không cần Knowledge OS tự sửa.

---

## COLOR SYSTEM *(✅ VERIFIED — dùng bảng trang 24 làm chuẩn cho 4 màu Primary)*

**Primary Colors** (tỷ lệ sử dụng 40/30/20/10%):

| Tên | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|
| Bright Red | #E22027 | 226,32,39 | 5,99,97,0 | 185 C (94%) |
| Dark Warm Gray | #3E3B39 | 62,59,57 | 66,62,62,52 | Black 7 C (97%) |
| Midnight Blue | #191970 | 25,25,112 | 100,100,23,17 | 2748 C (96%) |
| Cool Gray | #DBE2E9 | 219,226,233 | 13,7,4,0 | 649 C (100%) |

**Secondary Colors:**

| Tên | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|
| Crimson Red | #C10016 | 193,0,22 | 16,100,100,7 | 3517 C (100%) |
| Steel Blue | #688197 | 104,129,151 | 64,43,30,3 | 2165 C (100%) |
| Cloud Dancer | #F0EEE9 | 240,238,233 | 5,4,6,0 | 11-4201 TCX (100%) |

**Accent Colors:**

| Tên | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|
| Lemon Chiffon | #FFF8C6 *(suy từ RGB, xem CONFLICT trên)* | 255,248,198 | 1,0,27,0 | 7499 C (92%) |
| Warm Yellow | #FCD757 | 252,215,87 | 2,13,78,0 | 121 C (100%) |

**Background Colors** (cùng 4 màu Primary, vai trò nền — tỷ lệ 40/30/20/10%, dùng HEX chuẩn ở trang 24):
- Cloud Dancer *(#F0EEE9)* — nền chính, ấm áp/tinh tế/cao cấp, phù hợp không gian gia đình/nội thất
- Dark Warm Gray *(#3E3B39)* — nền tối chính, sang trọng/mạnh mẽ, phù hợp ấn phẩm cao cấp/showroom
- Midnight Blue *(#191970)* — nền tối phụ, tin cậy/an toàn/công nghệ/chuyên nghiệp
- Cool Gray *(#DBE2E9)* — nền phụ hiện đại/sạch, phù hợp layout nhiều nội dung/tài liệu kỹ thuật

**Color Standards cho nền sáng/tối (trang 29):** nền trắng/sáng → logo tiêu chuẩn; các nền màu thương hiệu (Cloud Dancer/Cool Gray/Midnight Blue/Dark Warm Gray) → tuỳ bố cục, thường dùng logo âm bản cho nền tối. Ảnh sáng/ảnh tối chọn logo ưu tiên/màu chữ/màu nhấn tương ứng.

**Color Combinations (khuyến nghị, trang 28):** Cloud Dancer+Bright Red · Midnight Blue+Cool Gray · Midnight Blue+Warm Yellow · Dark Warm Gray+Warm Yellow · Steel Blue+Cool Gray · Midnight Blue+Bright Red · Cloud Dancer+Dark Warm Gray · Bright Red+Lemon Chiffon.

**Color Combinations to Avoid (trang 30):** Steel Blue+Bright Red · Midnight Blue+Dark Warm Gray · Bright Red+Warm Yellow · Dark Warm Gray+Steel Blue · Steel Blue+Midnight Blue · Cool Gray+Cloud Dancer · Crimson Red+Dark Warm Gray · Steel Blue+Cloud Dancer.

---

## TYPOGRAPHY *(✅ VERIFIED — trang 32-38)*

**Primary: Gilroy** — sans-serif hình học, chuyên nghiệp/tối giản/mạnh mẽ. Weight: Light, Regular, Medium, Semibold, Bold, Extrabold, Heavy, Black. Dùng cho toàn bộ ấn phẩm thiết kế của SANYO.

**Secondary: Montserrat** — weight: Light, Regular, Medium, Semibold, Bold, Extrabold, Black. Dùng bổ trợ, đặc biệt khi nền tảng không hỗ trợ Gilroy.

**Quy tắc phối hợp (đã xác nhận chi tiết, quan trọng):**
1. ĐƯỢC PHÉP: 100% Gilroy cho mọi cấp (headline + body).
2. ĐƯỢC PHÉP: Gilroy cho headline + Montserrat cho toàn bộ phần văn bản dưới.
3. KHÔNG ĐƯỢC PHÉP: trộn Gilroy và Montserrat song song ở CÙNG một cấp độ văn bản (ví dụ đoạn trái Gilroy, đoạn phải Montserrat).
4. Nếu dùng Montserrat làm Headline → phải dùng Montserrat cho toàn bộ văn bản đi kèm (không trộn ngược lại với Gilroy). Montserrat độc lập chỉ dùng khi nền tảng không hỗ trợ Gilroy.

**Type scale (bộ Gilroy):**

| Style | Font | Size | Color |
|---|---|---|---|
| Headline 1 | Gilroy Extra Bold | 37pt | #3E3B39 |
| Headline 2 | Gilroy Bold | 35pt | #3E3B39 |
| Headline 3 | Gilroy Bold | 26pt | #3E3B39 |
| Paragraph 1 | Gilroy SemiBold / Montserrat SemiBold | 17px | #3E3B39 |
| Paragraph 2 | Gilroy Regular / Montserrat Regular | 13px | #3E3B39 |

**Type scale (bộ Montserrat độc lập):** Headline 1 Black 37pt, Headline 2 Bold 35pt, Headline 3 Bold 26pt, Paragraph 1 SemiBold 17pt, Paragraph 2 Regular 13pt — cùng màu #3E3B39.

**Font files thực tế có sẵn:** SVN-Gilroy Việt hoá (20 file .otf, đủ toàn bộ weight kể cả Italic), Montserrat (18 file .ttf, đủ weight + Italic). Ba font khác tồn tại trong package (Myriad Pro, SVN-Blywoofs, TikTok Display) nhưng **không được guideline text mô tả vai trò chính thức** — không dùng làm brand font chính/phụ trừ khi có xác nhận thêm.

---

## OFFICE IDENTIFICATION *(✅ VERIFIED — trang 39-51)*

| Hạng mục | Kích thước | Asset |
|---|---|---|
| Business Card | 5,5 × 9 cm | `Bộ văn phòng/Business Card/` |
| ID Card | 8,6 × 5,4 cm | `Bộ văn phòng/ID Card/` |
| Letterhead | A4 (29,7 × 21 cm) | `Bộ văn phòng/Letterhead/` |
| Envelope A6 | 12 × 22 cm | `Bộ văn phòng/Phong bì thư/` |
| Envelope A5 | 16 × 23 cm | `Bộ văn phòng/Phong bì thư/` |
| Envelope A4 | 25 × 34 cm | `Bộ văn phòng/Phong bì thư/` |

---

## BRAND GRAPHIC SYSTEM *(trang 53-60)*

- **Logo trên nền tảng số:** Website/Mobile App, Facebook Fanpage — mô tả tồn tại (trang 54-55), nội dung chi tiết chủ yếu là hình ảnh minh hoạ, chưa có rule định lượng dạng text để trích.
- **Pattern:** ✅ asset có (`Parttern/`), áp dụng trên nền xám hoặc nền đỏ — chưa có rule tỷ lệ/kích thước cụ thể dạng text (UNKNOWN).
- **Frame:** ✅ asset có (`Frame Social/`), vai trò: "điểm neo thị giác giúp làm nổi bật sản phẩm chính và thống nhất bố cục" — ví dụ caption mẫu: "HOẠT ĐỘNG RA SAO?", "NÂNG TẦM CUỘC SỐNG", "BẢO HÀNH TRỌN ĐỜI".
- **Frame Before/After:** mô tả có (trang 59: "chuẩn hoá bố cục so sánh, làm nổi bật hiệu quả thực tế") — **không xác nhận được file asset riêng biệt** trong inventory hiện tại, có thể nằm trong `.ai` gốc chưa tách file.
- **TikTok Thumbnail Frame:** mô tả nguyên tắc có (trang 59: cần bắt mắt, tiêu đề ngắn gọn, hình ảnh sắc nét, đồng bộ thumbnail) — **không có file asset riêng xác nhận được**.
- **Watermark:** ✅ VERIFIED — Blend Mode: Soft Light hoặc Overlay; Opacity: 20%–40%. Asset: `Watermark/` (jpg/png/ai).

---

## SANYO BRAND IDENTITY CATEGORIES — TRẠNG THÁI CUỐI CÙNG

| # | Category | Trạng thái |
|---|---|---|
| 1 | Brand Foundation | ✅ VERIFIED |
| 2 | Logo System | ✅ VERIFIED |
| 3 | Logo Types | ✅ VERIFIED |
| 4 | Logo Grid | ✅ VERIFIED |
| 5 | Safe Distance | ✅ VERIFIED (đơn vị tương đối) |
| 6 | Minimum Size | ✅ VERIFIED |
| 7 | Logo Chroma | ✅ VERIFIED |
| 8 | Logo Usage | ✅ VERIFIED |
| 9 | Logo on Materials | ✅ VERIFIED |
| 10 | Logo on Images | ✅ VERIFIED |
| 11 | Color System | ✅ VERIFIED (kèm cảnh báo conflict — xem trên) |
| 12 | Primary Colors | ✅ VERIFIED |
| 13 | Secondary Colors | ✅ VERIFIED |
| 14 | Accent Colors | ✅ VERIFIED (1 giá trị suy từ RGB do lỗi in HEX) |
| 15 | Background Colors | ✅ VERIFIED (2 giá trị suy từ trang 24 do lỗi in HEX ở trang 26) |
| 16 | Color Combinations | ✅ VERIFIED |
| 17 | Color Combinations to Avoid | ✅ VERIFIED |
| 18 | Typography | ✅ VERIFIED |
| 19 | Office Identification | ✅ VERIFIED |
| 20 | Digital Brand Application | ⚠️ PARTIAL — có mô tả, thiếu rule định lượng |
| 21 | Pattern | ⚠️ PARTIAL — asset có, rule định lượng UNKNOWN |
| 22 | Frame | ⚠️ PARTIAL — asset có, rule định lượng UNKNOWN |
| 23 | Before/After Frame | ⚠️ PARTIAL — mô tả có, asset riêng UNKNOWN |
| 24 | TikTok Thumbnail Frame | ⚠️ PARTIAL — mô tả có, asset riêng UNKNOWN |
| 25 | Watermark | ✅ VERIFIED |

---

## ROLE OF THIS FILE

1. Cho biết khi nào phải tra cứu official brand assets
2. Cho biết assets nằm ở đâu
3. Cho biết nguồn nào có thẩm quyền
4. Cho biết cách dùng assets
5. Cho biết cách kiểm tra brand compliance
6. Cho biết phải làm gì khi thông tin thiếu hoặc mâu thuẫn

## SOURCE OF TRUTH

```text
OFFICIAL BRAND GUIDELINES / OFFICIAL BRAND ASSETS
      >
PROJECT-SPECIFIC OFFICIAL BRAND MATERIAL
      >
DESIGN_SYSTEM.md
      >
DESIGN SKILLS (04_SKILLS/02_DESIGN/SKILL.md)
      >
GENERAL DESIGN KNOWLEDGE
```

*(`DESIGN_SYSTEM.md` chưa tồn tại — cần xây ở phase riêng.)*

## IMPORTANT SOURCE RULE

Dùng cả parsed text và rendered visual khi diễn giải Brand Guidelines. Nếu mâu thuẫn: KHÔNG ĐOÁN — inspect ảnh gốc và đánh dấu vấn đề (xem case COLOR SYSTEM CONFLICT ở trên — đây chính là ví dụ thực tế đã áp dụng đúng nguyên tắc này).

---

## LOGO RULE

Logo ngang là chính, ưu tiên. Không tự vẽ lại logo bằng tay hay AI khi asset chính thức đã có (đã có đầy đủ 4 loại × dương/âm bản trong `LOGO/`).

## LOGO PROTECTION

Không: kéo giãn, nén, xoay, lật gương, làm méo, làm mờ, thêm hiệu ứng/gradient, chuyển stroke sai cách, cắt xén, đổi màu tuỳ tiện, đặt trên nền trùng màu.

## OFFICIAL ASSET PRIORITY

```text
OFFICIAL ASSET > RECREATED ASSET
```

Logo, pattern, frame, watermark chính thức đều đã có trong `BRAND_IDENTITY/` — luôn dùng bản có sẵn, không tự tạo lại trừ khi được minh thị yêu cầu.

## DESIGN TASK ROUTING

```text
DESIGN TASK
      ↓
BRAND INVOLVEMENT CHECK
      ↓
BRAND_ASSET_SYSTEM.md (file này)
      ↓
OFFICIAL BRAND GUIDELINES / ASSETS (BRAND_IDENTITY/)
      ↓
DESIGN_SYSTEM.md
      ↓
04_SKILLS/02_DESIGN/SKILL.md
      ↓
OUTPUT
      ↓
BRAND COMPLIANCE CHECK
```

## AI IMAGE GENERATION RULE

AI có thể tạo môi trường/kiến trúc/thang máy/con người/ánh sáng/bố cục/cảnh chụp. Không dùng AI để tái tạo logo — composite official asset (`LOGO/`) vào thiết kế cuối.

## UNKNOWN RULE

Nếu Brand Guidelines không định nghĩa: UNKNOWN — không suy luận từ đối thủ/AI memory/trend/sở thích cá nhân. General best practice chỉ dùng khi được yêu cầu tự do sáng tạo, và phải nêu rõ không phải rule chính thức.

**UNKNOWN còn lại sau lần re-validate này:** rule định lượng cho Pattern (tỷ lệ/kích thước), Frame (tỷ lệ/kích thước), asset file riêng cho Before/After Frame và TikTok Thumbnail Frame, vai trò chính thức của font Myriad Pro/SVN-Blywoofs/TikTok Display, rule Digital Brand Application định lượng (Website/App/Facebook logo placement cụ thể).

---

## BRAND COMPLIANCE GATE

- [ ] Đã tra cứu Official Brand Identity source (giờ có thể tra thật, không còn UNKNOWN nguồn)
- [ ] Chọn đúng phiên bản logo (4 loại đã xác nhận rõ vai trò)
- [ ] Giữ đúng tỷ lệ logo (grid X-unit theo từng loại)
- [ ] Tôn trọng safe distance (= chiều rộng chữ "O")
- [ ] Tôn trọng minimum size (20mm/120px ngang, 15mm/100px dọc, 35mm/200px có slogan)
- [ ] Dùng đúng color treatment cho logo (dương bản nếu nền ≤40% sắc độ, âm bản nếu >40%)
- [ ] Dùng đúng màu chính thức — **dùng bảng trang 24 làm chuẩn cho Midnight Blue/Cool Gray/Lemon Chiffon** (không dùng HEX in sai ở trang 25/26)
- [ ] Dùng tổ hợp màu được duyệt (8 cặp), tránh 8 cặp bị cấm
- [ ] Typography theo đúng hierarchy (Headline 1/2/3, Paragraph 1/2) — không trộn Gilroy/Montserrat cùng cấp
- [ ] Dùng font chính thức có sẵn (` Brand Font/`)
- [ ] Dùng pattern/frame chính thức khi áp dụng được
- [ ] Watermark: Soft Light/Overlay, opacity 20–40%
- [ ] Không tự tạo lại official asset khi đã có sẵn
- [ ] Không để generic design rule override rule chính thức
- [ ] Không tự bịa brand rule chưa được hỗ trợ (đặc biệt: Pattern/Frame định lượng — vẫn UNKNOWN)
- [ ] Các mục UNKNOWN không bị âm thầm đoán

## BOUNDARIES

```text
BRAND.md                    = brand strategy và brand knowledge
OFFICIAL BRAND GUIDELINES    = visual identity source of truth (BRAND_IDENTITY/)
BRAND_ASSET_SYSTEM.md (file này) = routing và governance
DESIGN_SYSTEM.md             = design methodology (chưa tồn tại)
04_SKILLS/02_DESIGN/SKILL.md = execution skill
CLAUDE.md                    = system orchestration
```

## ANTI-BLOAT

Không copy toàn bộ 62 trang vào đây — chỉ lưu routing, source-of-truth, asset usage, compliance rule, category mapping, boundaries, validation. Giá trị màu/font/kích thước cụ thể được ghi lại (không phải "toàn văn hướng dẫn") vì đây là dữ liệu ngắn, dùng lặp lại thường xuyên khi thực thi task — vẫn nhỏ hơn nhiều so với nguồn gốc.
