# SANYO YUSOKI — PRODUCT SPECIFICATIONS

## PURPOSE

Tài liệu này là nguồn dữ liệu kỹ thuật có kiểm soát.

Mục tiêu:

- Lưu trữ thông số sản phẩm đã xác minh
- Giúp Claude tư vấn chính xác
- Ngăn Claude tự tạo thông số kỹ thuật
- Phân biệt thông tin đã xác minh và chưa xác minh
- Tạo nền tảng cho việc cập nhật catalogue sản phẩm

NGUYÊN TẮC QUAN TRỌNG:

KHÔNG CÓ DỮ LIỆU
=
KHÔNG ĐƯỢC ĐOÁN.

KHÔNG CÓ NGUỒN XÁC MINH
=
KHÔNG ĐƯỢC KHẲNG ĐỊNH.

---

# 1. DATA CONFIDENCE SYSTEM

Mọi thông số kỹ thuật phải được phân loại.

## VERIFIED

Thông tin được xác minh từ:

- Catalogue chính thức
- Hồ sơ kỹ thuật
- Bản vẽ kỹ thuật
- Tài liệu nhà sản xuất
- Xác nhận chính thức từ bộ phận kỹ thuật SANYO

Claude có thể sử dụng để tư vấn.

---

## INTERNAL VERIFIED

Thông tin nội bộ đã được xác nhận.

Có thể sử dụng trong phạm vi nội bộ.

Không tự động sử dụng như tài liệu công bố bên ngoài nếu chưa được phép.

---

## PROJECT DEPENDENT

Thông số phụ thuộc vào:

- Hiện trạng công trình
- Thiết kế
- Kết cấu
- Cấu hình sản phẩm
- Phương án kỹ thuật

Claude phải nói rõ:

> Thông số cuối cùng cần xác nhận theo phương án thực tế của công trình.

---

## NEED CHECK

Có dữ liệu nhưng chưa đủ cơ sở xác minh.

Claude không được dùng để cam kết.

---

## UNKNOWN

Chưa có dữ liệu.

Claude phải trả lời:

> Hiện chưa có dữ liệu xác minh trong hệ thống. Cần kiểm tra catalogue hoặc xác nhận với bộ phận kỹ thuật.

---

# 2. SPECIFICATION RULE

Claude không được:

- Tự tạo kích thước
- Tự tạo tải trọng
- Tự tạo tốc độ
- Tự tạo độ sâu PIT
- Tự tạo chiều cao OH
- Tự tạo công suất
- Tự tạo giá bán
- Tự tạo thời gian giao hàng
- Tự tạo tiêu chuẩn kỹ thuật
- Tự xác nhận khả năng lắp đặt

Nếu thiếu dữ liệu.

---

# 3. PRODUCT SPECIFICATION TEMPLATE

Mỗi sản phẩm hoặc cấu hình được lưu theo cấu trúc:

## PRODUCT NAME

Tên sản phẩm:

Mã sản phẩm:

Nhóm sản phẩm:

Tình trạng kinh doanh:

- Đang kinh doanh
- Tạm ngừng
- Ngừng kinh doanh
- Cần xác minh

---

## PRODUCT APPLICATION

Phù hợp với:

Không phù hợp với:

Điều kiện cần xem xét:

---

## CORE SPECIFICATIONS

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| Tải trọng | | | |
| Số người | | | |
| Tốc độ | | | |
| Số điểm dừng | | | |
| Hành trình | | | |
| Kích thước cabin | | | |
| Kích thước hố thang | | | |
| PIT | | | |
| OH | | | |
| Loại cửa | | | |
| Độ rộng cửa | | | |
| Hệ thống truyền động | | | |
| Điện áp | | | |

QUAN TRỌNG:

Không điền thông số nếu chưa xác minh.

Để trống tốt hơn điền sai.

---

# 4. DIMENSION RULE

Các kích thước phải ghi rõ đơn vị.

Ví dụ:

mm

Không ghi:

1000 x 1200

Mà phải ghi:

1000 mm x 1200 mm

---

# 5. RANGE RULE

Nếu thông số là khoảng:

Không ghi:

PIT: 200

Nếu thực tế phụ thuộc công trình.

Phải ghi:

PIT:

Khoảng áp dụng:
XXX mm – XXX mm

Điều kiện:

Phụ thuộc vào:

DATA STATUS:

PROJECT DEPENDENT

---

# 6. CONFIGURATION RULE

Một sản phẩm có thể có nhiều cấu hình.

Không được coi:

MODEL A

là chỉ có một thông số duy nhất.

Phải ghi rõ:

CONFIGURATION A

CONFIGURATION B

CONFIGURATION C

Ví dụ cấu trúc:

# PRODUCT

## CONFIGURATION A

Thông số

## CONFIGURATION B

Thông số

## CONFIGURATION C

Thông số

---

# 7. SOURCE CONTROL

Mỗi thông số quan trọng phải có nguồn.

SOURCE có thể là:

- Catalogue 2026
- Technical Drawing
- Internal Engineering Confirmation
- Manufacturer Datasheet

Không ghi chung chung:

> Theo tài liệu.

Phải xác định nguồn cụ thể nếu có.

---

# 8. SPECIFICATION PRIORITY

Khi có nhiều nguồn khác nhau:

Ưu tiên:

1. Bản vẽ kỹ thuật áp dụng cho công trình
2. Xác nhận chính thức của kỹ thuật
3. Catalogue chính thức mới nhất
4. Datasheet nhà sản xuất
5. Tài liệu nội bộ
6. Kiến thức ngành chung

Nếu có mâu thuẫn:

Không tự chọn.

Phải đánh dấu:

CONFLICT

và yêu cầu xác minh.

---

# 9. PROJECT-SPECIFIC DATA

Thông số cho một công trình cụ thể phải được lưu riêng.

Không đưa dữ liệu của:

CÔNG TRÌNH A

thành:

THÔNG SỐ CHUẨN CHO MỌI CÔNG TRÌNH.

Ví dụ:

```text
PROJECT A

PIT: XXXX mm
OH: XXXX mm

Chỉ áp dụng cho:

PROJECT A
```

---

# 10. DỮ LIỆU SẢN PHẨM ĐÃ XÁC MINH TỪ CATALOGUE

Phần này được điền từ việc đọc trực tiếp (render PNG + xem trực quan) các file catalogue gốc tại:
`01_BRAIN/03_PRODUCT/SOURCE_DOCS/SANYO_DATA/Product Specification + Cataloge/`

Ngày trích xuất: 2026-09-08.

GHI CHÚ QUAN TRỌNG VỀ THƯƠNG HIỆU (không tự ý đưa vào BRAND.md — cần người dùng xác nhận):

Catalogue "Thẩm Dương_Passenger Elevator.pdf" (trang 1) liệt kê cấu trúc công ty gồm: "Nippon Sanyo Lift Associate CO., Ltd" (Nhật Bản, Toyama), "Shanghai Sanyo Elevator Co., Ltd" và "Shenyang Sanyo Elevator Co., Ltd" (Trung Quốc), và "Sanyo-Yusoki Vietnam Elevator and Equipment Company Limited" (Việt Nam — đơn vị đại lý). Trang 2 cùng file nói "Sanyo Yusoki Elevator (China) Co., Ltd." khởi nguồn từ 1954 (Shenyang Elevator Factory, nhà nước sở hữu), là nhà sản xuất thang máy đầu tiên của Trung Quốc.

Catalogue "Nippon Sanyo Passenger Elevator 3000 series.pdf" (trang 1) lại nói thương hiệu "Nippon Sanyo" được thành lập năm 2019, là thành viên của "Friendly Elevatech Elevator Group" (Nhật Bản), tiền thân là "Osawa Industries" thành lập 1963, trụ sở tại Toyama. "Nippon Sanyo Home Lift 1000 series.pdf" cũng ghi "Member of Japan Friendly Elevatec", "Manufactured under the supervision of Friendly Elevatech Elevator Group of Japan".

→ Đây là hai câu chuyện thương hiệu khác nhau giữa các catalogue (một bên nói gốc Trung Quốc 1954/Shenyang, một bên nói thương hiệu Nippon Sanyo lập 2019 thuộc "Friendly Elevatech Group" Nhật Bản, tiền thân Osawa Industries 1963).

CẬP NHẬT (2026-09-08): Người dùng (SANYO Yusoki Vietnam) đã xác nhận cả hai catalogue đều là nguồn hợp lệ — đây không phải mâu thuẫn cần giải quyết, mà là hai NGUỒN CUNG ỨNG/NHÀ MÁY khác nhau trong cùng hệ thống sản phẩm đang kinh doanh. Yêu cầu: mỗi mục sản phẩm bên dưới phải ghi rõ **Nguồn nhà máy** (Thẩm Dương / Nippon Sanyo / Việt Nam) để phân biệt, thay vì gắn NEED CHECK cho toàn bộ nhóm. Việc đưa câu chuyện xuất xứ nào vào BRAND.md (định vị "Tinh hoa thang máy Nhật Bản") vẫn cần cân nhắc riêng — không tự động suy ra từ việc xác nhận nguồn dữ liệu specs hợp lệ.

---

## PASSENGER ELEVATOR — MR (Machine Room)

**Nguồn nhà máy:** Thẩm Dương (Trung Quốc)

Tên sản phẩm: Passenger Elevator MR (dòng tiêu chuẩn, có phòng máy)

Mã sản phẩm: Chưa xác định (catalogue không ghi mã model)

Nhóm sản phẩm: Thang máy chở khách — có phòng máy (MR)

Tình trạng kinh doanh: Cần xác minh

### PRODUCT APPLICATION

Phù hợp với: Nhà ở, chung cư, văn phòng, thương mại (theo hình ảnh minh họa cabin trong catalogue)

Không phù hợp với: Chưa có dữ liệu

Điều kiện cần xem xét: Có nhiều cấu hình tải trọng/tốc độ/kích thước cabin khác nhau — cần chọn đúng cấu hình theo công trình thực tế

### CORE SPECIFICATIONS — theo cấu hình (CONFIGURATION RULE)

Nguồn chung cho toàn bộ bảng: Thẩm Dương_Passenger Elevator.pdf, trang 43 (PDF page 23). DATA STATUS: VERIFIED (số liệu rõ ràng, nhất quán nội bộ trong bảng).

| Tải trọng (kg) | Tốc độ (m/s) | Kích thước cabin WxDxH (mm) | Cửa (mm) | Kích thước hố thang WxD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|
| 450 | 1.0 | 1100 x 1100 x 2400 | CO 700 x 2100 | 1600 x 1750 | 4050 | 1300 |
| 450 | 1.5 | 1100 x 1100 x 2400 | CO 700 x 2100 | 1600 x 1750 | 4100 | 1400 |
| 630 | 1.0 | 1400 x 1100 x 2400 | CO 800 x 2100 | 1900 x 1750 | 4050 | 1300 |
| 630 | 1.5 | 1400 x 1100 x 2400 | CO 800 x 2100 | 1900 x 1750 | 4100 | 1400 |
| 630 | 1.75 | 1400 x 1100 x 2400 | CO 800 x 2100 | 1900 x 1750 | 4250 | 1450 |
| 630 (cabin xoay 90°) | 1.0 | 1100 x 1400 x 2400 | CO 800 x 2100 | 1800 x 2050 | 4050 | 1300 |
| 630 (cabin xoay 90°) | 1.5 | 1100 x 1400 x 2400 | CO 800 x 2100 | 1800 x 2050 | 4100 | 1400 |
| 630 (cabin xoay 90°) | 1.75 | 1100 x 1400 x 2400 | CO 800 x 2100 | 1800 x 2050 | 4250 | 1450 |
| 800 | 1.0 | 1400 x 1350 x 2400 | CO 800 x 2100 | 1900 x 2000 | 4050 | 1300 |
| 800 | 1.5 | 1400 x 1350 x 2400 | CO 800 x 2100 | 1900 x 2000 | 4100 | 1400 |
| 800 | 1.75 | 1400 x 1350 x 2400 | CO 800 x 2100 | 1900 x 2000 | 4250 | 1450 |
| 800 | 2.00 | 1400 x 1350 x 2400 | CO 800 x 2100 | 1900 x 2000 | 4350 | 1500 |
| 800 | 2.50 | 1400 x 1350 x 2400 | CO 800 x 2100 | 1900 x 2000 | 4700 | 1650 |
| 800 (cabin xoay 90°) | 1.0–2.50 (5 mức: 1.0/1.5/1.75/2.0/2.5) | 1350 x 1400 x 2400 | CO 800 x 2100 | 1350 x 2050 | 4050/4100/4250/4350/4700 (theo tốc độ tăng dần) | 1300/1400/1450/1500/1650 |
| 1000 | 1.0–2.50 (5 mức) | 1100 x 2100 x 2400 | CO 900 x 2100 | 2100 x 2500 | 4050/4100/4250/4350/4700 | 1300/1400/1450/1500/1650 |
| 1000 (biến thể B) | 1.0–2.50 (5 mức) | 1300 x 1800 x 2400 | CO 900 x 2100 | 2200 x 2200 | 4050/4100/4250/4350/4700 | 1300/1400/1450/1500/1650 |
| 1000 (biến thể C) | 1.0–2.50 (5 mức) | 1400 x 1600 x 2400 | CO 900 x 2100 | 2200 x 2120 | 4050/4100/4250/4350/4700 | 1300/1400/1450/1500/1650 |
| 1050 | 1.0–2.50 (5 mức) | 1600 x 1500 x 2400 | CO 900 x 2100 | 2100 x 2150 | 4050/4100/4250/4350/4700 | 1300/1400/1450/1500/1650 |
| 1150 | 1.0–2.50 (5 mức) | 1950 x 1300 x 2400 | CO 1100 x 2100 | 2450 x 2000 | 4100/4300/4350/4450/4700 | 1300/1400/1450/1500/1650 |
| 1250 | 1.0–2.50 (5 mức) | 1950 x 1400 x 2400 | CO 1100 x 2100 | 2450 x 2100 | 4100/4300/4350/4450/4700 | 1300/1400/1450/1500/1650 |
| 1350 | 1.0–2.50 (5 mức) | 1950 x 1500 x 2400 | CO 1100 x 2100 | 2450 x 2200 | 4100/4300/4350/4450/4700 | 1300/1400/1450/1500/1650 |
| 1550 | 1.0–2.50 (5 mức) | 1500 x 2300 x 2400 | CO 1100 x 2100 | 2350 x 2700 | 4100/4300/4350/4450/4700 | 1300/1400/1450/1500/1650 |
| 1550 (Through door) | 1.0–2.50 (5 mức) | 1500 x 2300 x 2400 | CO 1100 x 2100 | 2350 x 2820 | 4100/4300/4350/4450/4700 | 1300/1400/1450/1500/1650 |
| 1600 | 1.0–2.50 (5 mức) | 1950x1750x2400 & 1400x2400x2400 (2 biến thể cabin cùng tải trọng) | CO 1100 x 2100 | 2450x2450 & 2350x2800 | 4100/4300/4350/4450/4700 | 1300/1400/1450/1500/1650 |

Đối chiếu tốc độ ↔ OH/PIT cho các dòng "5 mức": thứ tự tương ứng là 1.0→1.5→1.75→2.0→2.5 m/s ứng với OH và PIT liệt kê theo đúng thứ tự đó.

Hệ thống truyền động: MR (có phòng máy) — DATA STATUS: VERIFIED (Thẩm Dương_Passenger Elevator.pdf, trang 43)

Điện áp: Chưa ghi trong bảng này (catalogue Thẩm Dương_Passenger Elevator.pdf không có cột điện áp) — DATA STATUS: UNKNOWN

Loại cửa: Center Opening (CO) — DATA STATUS: VERIFIED

---

## PASSENGER ELEVATOR — MRL (Machine Room-Less)

**Nguồn nhà máy:** Thẩm Dương (Trung Quốc)

Tên sản phẩm: Passenger Elevator MRL (không phòng máy)

Mã sản phẩm: Chưa xác định

Nhóm sản phẩm: Thang máy chở khách — không phòng máy (MRL)

Tình trạng kinh doanh: Cần xác minh

Nguồn: Thẩm Dương_Passenger Elevator.pdf, trang 44 (PDF page 23, cột phải). DATA STATUS: VERIFIED.

### CORE SPECIFICATIONS

| Tải trọng (kg) | Tốc độ (m/s) | Kích thước cabin WxDxH (mm) | Cửa (mm) | Kích thước hố thang WxD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|
| 630 (biến thể A) | 1.0–1.75 | 1400 x 1100 x 2300 | CO 800 x 2100 | 2050 x 1650 | 4050/4200/4250 | 1300/1400/1450 |
| 630 (biến thể B) | 1.0–1.75 | 1100 x 1400 x 2300 | CO 800 x 2100 | 1800 x 1800 | 4050/4200/4250 | 1300/1400/1450 |
| 800 (biến thể A) | 1.0–1.75 | 1350 x 1400 x 2300 | CO 800 x 2100 | 2000 x 1800 | 4050/4200/4250 | 1300/1400/1450 |
| 800 (biến thể B) | 1.0–1.75 | 1400 x 1350 x 2300 | CO 800 x 2100 | 2050 x 1750 | 4050/4200/4250 | 1300/1400/1450 |
| 800 (Through door) | 1.0–1.75 | 1350 x 1400 x 2300 | CO 800 x 2100 | 2000 x 1920 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (biến thể A) | 1.0–1.75 | 1550 x 1400 x 2300 | CO 900 x 2100 | 2200 x 1800 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (biến thể B) | 1.0–1.75 | 1500 x 1500 x 2300 | CO 900 x 2100 | 2150 x 1900 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (biến thể C) | 1.0–1.75 | 1600 x 1400 x 2300 | CO 900 x 2100 | 2250 x 1800 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (biến thể D) | 1.0–1.75 | 1400 x 1600 x 2300 | CO 900 x 2100 | 2050 x 2000 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (biến thể E) | 1.0–1.75 | 1300 x 1800 x 2300 | CO 900 x 2100 | 2100 x 2200 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (biến thể F) | 1.0–1.75 | 1100 x 2100 x 2300 | CO 900 x 2100 | 2000 x 2500 | 4050/4200/4250 | 1300/1400/1450 |
| 1000 (Through door) | 1.0–1.75 | 1400 x 1600 x 2300 | CO 900 x 2100 | 2050 x 2120 | 4050/4200/4250 | 1300/1400/1450 |
| 1050 (biến thể A) | 1.0–1.75 | 1500 x 1600 x 2300 | CO 900 x 2100 | 2150 x 2000 | 4050/4200/4250 | 1300/1400/1450 |
| 1050 (biến thể B) | 1.0–1.75 | 1600 x 1500 x 2300 | CO 900 x 2100 | 2250 x 1900 | 4050/4200/4250 | 1300/1400/1450 |
| 1150 | 1.0–1.75 | 1450 x 1750 x 2300 | CO 1000 x 2100 | 2450 x 2100 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1250 | 1.0–1.75 | 1550 x 1750 x 2300 | CO 1000 x 2100 | 2500 x 2100 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1350 (biến thể A) | 1.0–1.75 | 1700 x 1750 x 2300 | CO 1000 x 2100 | 2700 x 2100 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1350 (biến thể B) | 1.0–1.75 | 1300 x 2300 x 2300 | CO 1000 x 2100 | 2300 x 2650 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1350 (Through door) | 1.0–1.75 | 1300 x 2300 x 2300 | CO 1000 x 2100 | 2300 x 2820 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1600 (biến thể A) | 1.0–1.75 | 1950 x 1750 x 2300 | CO 1000 x 2100 | 2650 x 2100 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1600 (biến thể B) | 1.0–1.75 | 1400 x 2400 x 2300 | CO 1000 x 2100 | 2450 x 2750 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |
| 1600 (Through door) | 1.0–1.75 | 1400 x 2400 x 2300 | CO 1000 x 2100 | 2450 x 2920 | 4400/4200/4300 (*xem NEED CHECK) | 1500/1600/1650 |

DATA STATUS cho nhóm tải trọng 1150–1600 kg: NEED CHECK — cột "Overhead" trong catalogue ghi "4400 & 4200 & 4300" (thứ tự không tăng dần đều theo tốc độ như các nhóm tải trọng thấp hơn, ngược với format "4050&4200&4250"). Có khả năng lỗi trình bày trong catalogue gốc — cần xác nhận với bộ phận kỹ thuật SANYO trước khi tư vấn.

Hệ thống truyền động: MRL (không phòng máy) — DATA STATUS: VERIFIED

---

## FREIGHT ELEVATOR — MR / MRL

**Nguồn nhà máy:** Thẩm Dương (Trung Quốc)

Tên sản phẩm: Freight Elevator (thang máy chở hàng)

Nhóm sản phẩm: Thang máy chở hàng

Tình trạng kinh doanh: Cần xác minh

Nguồn: Thẩm Dương_Passenger Elevator.pdf, trang 45 (PDF page 24). DATA STATUS: VERIFIED (số liệu rõ ràng); riêng điểm mâu thuẫn nội bộ ghi rõ bên dưới.

### MR Freight Elevator

| Tải trọng (kg) | Tốc độ (m/s) | Cabin WxDxH (mm) | Cửa (mm) | Hố thang WxD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|
| 2000 | 0.5 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2650 | 4200 | 1450 |
| 2000 | 1.0 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2650 | 4200 | 1450 |
| 2000 (Through door) | 0.5 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2860 | 4200 | 1450 |
| 2000 (Through door) | 1.0 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2860 | 4200 | 1450 |
| 3000 | 0.5 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 2950 | 4200 | 1500 |
| 3000 | 1.0 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 2950 | 4250 | 1500 |
| 3000 (Through door) | 0.5 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 3160 | 4200 | 1500 |
| 3000 (Through door) | 1.0 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 3160 | 4250 | 1500 |

NEED CHECK: Tải trọng 2000kg, cả hai mức tốc độ 0.5 và 1.0 m/s đều ghi PIT = 1450mm giống hệt nhau (không tăng theo tốc độ như thông lệ các bảng khác trong cùng catalogue). Cần xác nhận đây có phải là số liệu đúng hay lỗi in ấn.

### MRL Freight Elevator

| Tải trọng (kg) | Tốc độ (m/s) | Cabin WxDxH (mm) | Cửa (mm) | Hố thang WxD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|
| 2000 | 0.5 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2650 | 4200 | 1300 |
| 2000 | 1.0 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2650 | 4200 | 1400 |
| 2000 (Through door) | 0.5 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2860 | 4200 | 1300 |
| 2000 (Through door) | 1.0 | 1800 x 2200 x 2300 | 1500x2200, mở 4 cánh 2 bên | 2775 x 2860 | 4200 | 1400 |
| 3000 | 0.5 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 2950 | 4200 | 1300 |
| 3000 | 1.0 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 2950 | 4250 | 1400 |
| 3000 (Through door) | 0.5 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 3160 | 4200 | 1450 |
| 3000 (Through door) | 1.0 | 2200 x 2500 x 2300 | 1800x2200, mở 4 cánh 2 bên | 3250 x 3160 | 4250 | 1450 |

CONFLICT nội bộ (giữa 2 bảng MR và MRL Freight, cùng catalogue, cùng trang): Với tải trọng giống hệt nhau (2000kg và 3000kg, cùng tốc độ 0.5/1.0 m/s), giá trị PIT ở bảng MR (1450mm đồng nhất) khác với bảng MRL (1300–1450mm tùy tốc độ). Đây là 2 hệ dẫn động khác nhau (MR vs MRL) nên có thể hợp lý là PIT khác nhau — nhưng vì bảng MR không biến thiên theo tốc độ trong khi các bảng khác đều biến thiên, cần xác nhận với kỹ thuật SANYO. DATA STATUS: NEED CHECK cho giá trị PIT của nhóm MR Freight.

---

## PANORAMIC ELEVATOR — MRL

**Nguồn nhà máy:** Thẩm Dương (Trung Quốc)

Tên sản phẩm: Panoramic Elevator MRL (thang máy quan sát/toàn cảnh)

Nhóm sản phẩm: Thang máy panorama

Tình trạng kinh doanh: Cần xác minh

Nguồn: Thẩm Dương_Passenger Elevator.pdf, trang 45 (PDF page 24).

| Tải trọng (kg) | Tốc độ (m/s) | Cabin WxDxH (mm) | Cửa (mm) | Hố thang WxD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|
| 630 | 1.0 | 1100 x 1600 x 400 | CO 800 x 2100 | 2200 x 2150 | 4800 | 1800 |
| 630 | 1.5 | 1100 x 1600 x 400 | CO 800 x 2100 | 2200 x 2150 | 5000 | 2000 |
| 630 | 1.75 | 1100 x 1600 x 400 | CO 800 x 2100 | 2200 x 2150 | 5200 | 2000 |
| 800 | 1.0 | 1300 x 1700 x 2400 | CO 800 x 2100 | 2350 x 2200 | 4800 | 1800 |
| 800 | 1.5 | 1300 x 1700 x 2400 | CO 800 x 2100 | 2350 x 2200 | 5000 | 2000 |
| 800 | 1.75 | 1300 x 1700 x 2400 | CO 800 x 2100 | 2350 x 2200 | 5200 | 2000 |
| 1000 | 1.0 | 1400 x 1800 x 2400 | CO 900 x 2100 | 2500 x 2400 | 4800 | 1800 |
| 1000 | 1.5 | 1400 x 1800 x 2400 | CO 900 x 2100 | 2500 x 2400 | 5000 | 2000 |
| 1000 | 1.75 | 1400 x 1800 x 2400 | CO 900 x 2100 | 2500 x 2400 | 5200 | 2000 |

NEED CHECK: Hàng tải trọng 630kg ghi chiều cao cabin (H) = 400mm — bất thường so với các dòng khác trong cùng bảng (800kg và 1000kg đều ghi H = 2400mm). Nhiều khả năng là lỗi in ấn trong catalogue gốc (thiếu số, có thể đúng ra là 2400mm). KHÔNG được tự sửa/suy đoán — giữ nguyên số liệu gốc và đánh dấu NEED CHECK, phải xác nhận với kỹ thuật SANYO trước khi dùng để tư vấn.

---

## BED ELEVATOR — MR / MRL (thang máy giường bệnh)

**Nguồn nhà máy:** Thẩm Dương (Trung Quốc)

Tên sản phẩm: Bed Elevator

Nhóm sản phẩm: Thang máy giường bệnh / bệnh viện

Tình trạng kinh doanh: Cần xác minh

Nguồn: Thẩm Dương_Passenger Elevator.pdf, trang 46 (PDF page 24). DATA STATUS: VERIFIED.

### MR Bed Elevator (tải trọng 1600kg, chiều cao cabin tính theo car height = 2500mm)

| Tải trọng (kg) | Loại cửa | Tốc độ (m/s) | CW (mm) | CD (mm) | OP (mm) | OPH (mm) | HW (mm) | HD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1600 | Center Opening | 1.0 | 1400 | 2400 | 1100 | 2100 | 2400 | 2800 | 4300 | 1400 |
| 1600 | Center Opening | 1.5 | 1400 | 2400 | 1100 | 2100 | 2400 | 2800 | 4400 | 1500 |
| 1600 | Center Opening | 1.75 | 1400 | 2400 | 1100 | 2100 | 2400 | 2800 | 4500 | 1500 |
| 1600 | Side Opening | 1.0 | 1400 | 2400 | 1100 | 2100 | 2400 | 2900 | 4300 | 1400 |
| 1600 | Side Opening | 1.5 | 1400 | 2400 | 1100 | 2100 | 2400 | 2900 | 4400 | 1500 |
| 1600 | Side Opening | 1.75 | 1400 | 2400 | 1100 | 2100 | 2400 | 2900 | 4500 | 1500 |

### MRL Bed Elevator (tải trọng 1600kg, chiều cao cabin tính theo car height = 2400mm)

| Tải trọng (kg) | Loại cửa | Tốc độ (m/s) | CW (mm) | CD (mm) | OP (mm) | OPH (mm) | HW (mm) | HD (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1600 | Center Opening | 1.0 | 1400 | 2400 | 1100 | 2100 | 2400 | 2800 | 4400 | 1600 |
| 1600 | Center Opening | 1.5 | 1400 | 2400 | 1100 | 2100 | 2400 | 2800 | 4700 | 1700 |
| 1600 | Center Opening | 1.75 | 1400 | 2400 | 1100 | 2100 | 2400 | 2800 | 4900 | 1700 |
| 1600 | Side Opening | 1.0 | 1400 | 2400 | 1100 | 2100 | 2400 | 2900 | 4400 | 1600 |
| 1600 | Side Opening | 1.5 | 1400 | 2400 | 1100 | 2100 | 2400 | 2900 | 4700 | 1700 |
| 1600 | Side Opening | 1.75 | 1400 | 2400 | 1100 | 2100 | 2400 | 2900 | 4900 | 1700 |

Ghi chú nguồn: Bảng chỉ có 1 mức tải trọng (1600kg) trong catalogue — không có dữ liệu cho các mức tải trọng khác của Bed Elevator (UNKNOWN).

---

## PASSENGER ELEVATOR — 3000 SERIES (MR / MRL)

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo Passenger Elevator 3000 Series

Mã sản phẩm: 3000 Series

Nhóm sản phẩm: Thang máy chở khách

Tình trạng kinh doanh: Cần xác minh

Nguồn: Nippon Sanyo Passenger Elevator 3000 series.pdf, trang 33–34 (PDF page 18, mục "仕様書"/Specification & Drawing). DATA STATUS: VERIFIED. Catalogue edition 2024.

### CONFIGURATION MRL (CW Position: Side)

| Tải trọng (kg) | Số người | Tốc độ (m/s) | Kích thước hố thang (mm) | Kích thước cabin (mm) | Diện tích cabin (m²) | Cửa (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|---|---|
| 630 | 8 | 1.0 | 2100 x 1800 | 1100 x 1400 x 2385 | 1.54 | 800 x 2100 | 4200 | 1450 |
| 630 | 8 | 1.6 | 2100 x 1800 | 1100 x 1400 x 2385 | 1.54 | 800 x 2100 | 4300 | 1500 |
| 630 | 8 | 1.75 | 2100 x 1800 | 1100 x 1400 x 2385 | 1.54 | 800 x 2100 | 4300 | 1550 |
| 800 | 10 | 1.0 | 2200 x 1750 | 1400 x 1350 x 2385 | 1.89 | 800 x 2100 | 4200 | 1450 |
| 800 | 10 | 1.6 | 2200 x 1750 | 1400 x 1350 x 2385 | 1.89 | 800 x 2100 | 4300 | 1500 |
| 800 | 10 | 1.75 | 2200 x 1750 | 1400 x 1350 x 2385 | 1.89 | 800 x 2100 | 4300 | 1550 |
| 1000 | 13 | 1.0 | 2400 x 1900 | 1600 x 1500 x 2385 | 2.4 | 900 x 2100 | 4200 | 1450 |
| 1000 | 13 | 1.6 | 2400 x 1900 | 1600 x 1500 x 2385 | 2.4 | 900 x 2100 | 4300 | 1500 |
| 1000 | 13 | 1.75 | 2400 x 1900 | 1600 x 1500 x 2385 | 2.4 | 900 x 2100 | 4300 | 1550 |

Điện áp: 380V 50HZ 3 pha, hoặc 220V 50HZ 1 pha — DATA STATUS: VERIFIED

Ghi chú: MRL 3000 Series chỉ có 3 mức tải trọng (630/800/1000kg) theo catalogue — không thấy mức cao hơn (UNKNOWN nếu có).

### CONFIGURATION MR (CW Position: Rear)

| Tải trọng (kg) | Số người | Tốc độ (m/s) | Kích thước hố thang (mm) | Kích thước cabin (mm) | Diện tích cabin (m²) | Cửa (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|---|---|
| 450 | 6 | 1.0 | 1900 x 1500 | 1400 x 850 x 2385 | 1.19 | 800 x 2100 | 4200 | 1400 |
| 630 | 8 | 1.0 | 1900 x 1750 | 1400 x 1100 x 2385 | 1.54 | 800 x 2100 | 4700 | 1550 |
| 630 | 8 | 1.6 | 1900 x 1750 | 1400 x 1100 x 2385 | 1.54 | 800 x 2100 | 4850 | 1650 |
| 630 | 8 | 1.75 | 1800 x 2050 | 1100 x 1400 x 2385 | 1.54 | 800 x 2100 | 4900 | 1650 |
| 800 | 10 | 1.0 | 1900 x 2000 | 1400 x 1350 x 2385 | 1.89 | 800 x 2100 | 4250 | 1400 |
| 800 | 10 | 1.6 | 1900 x 2000 | 1400 x 1350 x 2385 | 1.89 | 800 x 2100 | 4400 | 1500 |
| 800 | 10 | 1.75 | 1850 x 2050 | 1350 x 1400 x 2385 | 1.89 | 800 x 2100 | 4400 | 1500 |
| 800 | 10 | 2.0 | 1850 x 2050 | 1350 x 1400 x 2385 | 1.89 | 800 x 2100 | 4750 | 1600 |
| 800 | 10 | 2.5 | 1850 x 2050 | 1350 x 1400 x 2385 | 1.89 | 800 x 2100 | 5000 | 1900 |
| 1000 | 13 | 1.0 | 2200 x 2150 | 1600 x 1500 x 2385 | 1.89 | 900 x 2100 | 4250 | 1400 |
| 1000 | 13 | 1.6 | 2200 x 2150 | 1600 x 1500 x 2385 | 1.89 | 900 x 2100 | 4400 | 1500 |
| 1000 | 13 | 1.75 | 2200 x 2050 | 1600 x 1400 x 2385 | 2.4 | 900 x 2100 | 4400 | 1500 |
| 1000 | 13 | 2.0 | 2100 x 2500 | 1100 x 2100 x 2385 | 2.31 | 900 x 2100 | 4750 | 1600 |
| 1000 | 13 | 2.5 | 2100 x 2500 | 1100 x 2100 x 2385 | 2.31 | 900 x 2100 | 5000 | 1900 |
| 1250 | 16 | 1.0–1.75 | 2400 x 2250 | 1800 x 1500 x 2490 | 2.7 | 1000 x 2100 | 4500/4650/4650 | 1400/1600/1600 |
| 1250 | 16 | 2.0–2.5 | 2600 x 2150 | 2000 x 1400 x 2490 | 2.8 | 1100 x 2100 | 4800/5000 | 1700/1900 |
| 1350 | 18 | 1.0–2.5 | 2600 x 2250 | 2000 x 1500 x 2490 | 3.0 | 1100 x 2100 | 4500/4650/4650/4800/5000 | 1400/1600/1600/1700/1900 |
| 1600 | 21 | 1.0–1.6 | 2600 x 2500 | 1950 x 1750 x 2490 | 3.41 | 1100 x 2100 | 4600/4800 | 1400/1600 |
| 1600 | 21 | 1.75–2.0 | 2600 x 2500 | 2000 x 1750 x 2490 | 3.5 | 1100 x 2100 | 4800/4900 | 1600/1700 |
| 1600 | 21 | 2.5 | 2600 x 2500 | 2100 x 1600 x 2490 | 3.36 | 1100 x 2100 | 5150 | 1900 |

Điện áp: 380V 50HZ 3 pha, hoặc 220V 50HZ 1 pha — DATA STATUS: VERIFIED

Ghi chú: Nhóm tải trọng 1250/1350/1600kg có OH/PIT ghi theo cụm nhiều giá trị ứng với nhiều mức tốc độ trong cùng 1 dòng bảng gốc — số liệu giữ nguyên theo đúng thứ tự trình bày trong catalogue, DATA STATUS: VERIFIED nhưng cần đối chiếu kỹ khi tư vấn cấu hình cụ thể do cách trình bày gộp nhiều tốc độ.

Hệ thống truyền động: MR (Rear CW) và MRL (Side CW) — DATA STATUS: VERIFIED

Sản xuất dưới sự giám sát của "Friendly Elevatech Elevator Group of Japan" (theo catalogue, trang bìa 3000 Series) — DATA STATUS: VERIFIED (ghi nhận trong catalogue, chưa xác minh độc lập).

---

## HOME ELEVATOR — 1000 SERIES

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo Home Elevator 1000 Series

Mã sản phẩm: 1000 Series

Nhóm sản phẩm: Thang máy gia đình (Home Elevator)

Tình trạng kinh doanh: Cần xác minh

Nguồn: Nippon Sanyo Home Lift 1000 series.pdf, trang 23 (PDF page 13, mục "仕様書"). DATA STATUS: VERIFIED. Catalogue edition 2024.

### CORE SPECIFICATIONS

| Tải trọng (kg) | Số người | Loại cửa mở | Kích thước hố thang (mm) | Kích thước cabin (mm) | Diện tích cabin (m²) | Cửa (mm) | OH (mm) | PIT (mm) | Vị trí đối trọng (CW) |
|---|---|---|---|---|---|---|---|---|---|
| 320 | 4 | CO (Center Opening) | 1500 x 1350 | 1000 x 1100 x 2200 | 1.1 | 700 x 2000 | 2900 | 150 | Side |
| 320 | 4 | SO (Side Opening) | 1500 x 1400 | 1000 x 1100 x 2200 | 1.1 | 800 x 2000 | 2900 | 150 | Side |
| 400 | 5 | CO | 1700 x 1350 | 1200 x 1100 x 2200 | 1.32 | 800 x 2000 | 2900 | 150 | Side |
| 400 | 5 | SO | 1700 x 1400 | 1200 x 1100 x 2200 | 1.32 | 800 x 2000 | 2900 | 150 | Side |
| 320 | 4 | CO | 1500 x 1550 | 1000 x 1100 x 2200 | 1.1 | 700 x 2000 | 2900 | 150 | Rear |
| 320 | 4 | SO | 1350 x 1600 | 1000 x 1100 x 2200 | 1.1 | 700 x 2000 | 2900 | 150 | Rear |
| 400 | 5 | CO | 1550 x 1550 | 1200 x 1100 x 2200 | 1.32 | 700 x 2000 | 2900 | 150 | Rear |
| 400 | 5 | SO | 1550 x 1600 | 1200 x 1100 x 2200 | 1.32 | 700 x 2000 | 2900 | 150 | Rear |

Điện áp: 380V 50HZ 3 pha, hoặc 220V 50HZ 1 pha — DATA STATUS: VERIFIED

Tốc độ: Không ghi trong bảng kích thước này (UNKNOWN từ bảng). Tuy nhiên bảng "ACE1000 New Energy" (control cabinet, cùng catalogue, trang 6) ghi rõ: "Elevator running speed ≤ 0.63 m/s", "Load ≤ 400 kg", "Maximum number of floors: 7", "Input power supply: Single-phase 220V to 240V, 50/60Hz". DATA STATUS: VERIFIED cho các giá trị này (Nippon Sanyo Home Lift 1000 series.pdf, trang 6) — đây là giới hạn hệ thống của bộ điều khiển ACE1000 dùng cho dòng Home Elevator 1000 Series, không phải thông số riêng theo cấu hình.

Hệ thống truyền động: Bộ điều khiển thông minh ACE1000 (low-voltage, có thể vận hành khẩn cấp 200 lượt khi mất điện) — DATA STATUS: VERIFIED

Chú ý từ catalogue (ghi nguyên văn, áp dụng cho cả Home Elevator và Platform Elevator 1000 Series):
1. Kích thước hố thang trong bảng là kích thước tối thiểu (minimum clearance size).
2. OH và PIT trong bảng là kích thước tối thiểu.
3. Yêu cầu nguồn điện chính: 380V 50HZ 3 pha 5 dây, dây trung tính và dây tiếp đất tách riêng.
4. Bảng chỉ dùng để tham khảo chọn model — nếu cần bản vẽ thi công phải liên hệ bộ phận kỹ thuật.

---

## PLATFORM ELEVATOR — 1000 SERIES (PCH / PCM)

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo Platform Elevator 1000 Series

Mã sản phẩm: PCH, PCM

Nhóm sản phẩm: Thang máy nền tảng (Platform Elevator) — dạng nhỏ gọn, không hố/phòng máy sâu

Tình trạng kinh doanh: Cần xác minh

Nguồn: Nippon Sanyo Home Lift 1000 series.pdf, trang 24 (PDF page 13). DATA STATUS: VERIFIED.

### CORE SPECIFICATIONS

| Model | Tải trọng (kg) | Số người | Kích thước hố thang (mm) | Kích thước cabin (mm) | Diện tích cabin (m²) | Hướng mở cửa | Loại cửa | Cửa (mm) | OH (mm) | PIT (mm) |
|---|---|---|---|---|---|---|---|---|---|---|
| PCH | 250 | 3 | 990 x 1430 | 900 x 950 | 0.86 | Front | Manual Single Swing Door | 695 x 2000 | 2600 | 60 |
| PCH | 320 | 4 | 1190 x 1480 | 1100 x 1000 | 1.1 | Front | Manual Single Swing Door | 725 x 2000 | 2600 | 60 |
| PCM | 250 | 3 | 1010 x 1360 | 900 x 950 x 2000 | 0.86 | Front | Manual Single Swing Door | 715 x 2000 | 2450 | 100 |
| PCM | 320 | 4 | 1210 x 1410 | 1100 x 1000 x 2000 | 1.1 | Front | Manual Single Swing Door | 745 x 2000 | 2450 | 100 |

Loại cửa: Manual Single Swing Door (cửa bản lề mở tay, 1 cánh) — DATA STATUS: VERIFIED

Tốc độ: UNKNOWN (không ghi trong catalogue cho Platform Elevator — khác với Home Elevator, catalogue không có trang control cabinet riêng cho Platform Elevator)

Hệ thống truyền động: Không có phòng máy riêng biệt (dạng platform/kéo cáp gọn, theo hình ảnh minh họa "aluminum shaft" trong catalogue) — cần xác minh thêm với kỹ thuật SANYO.

---

## PLATFORM HOME LIFT — STAR SERIES (S70 / S80)

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo STAR Series — Cabin Style Platform Lift

Mã sản phẩm: S70 (thiết kế cho shaft thép hoặc gạch-bê tông), S80 (shaft nhôm hợp kim tích hợp, kiểu panorama)

Nhóm sản phẩm: Thang máy platform gia đình (Platform Home Lift)

Tình trạng kinh doanh: Cần xác minh

Nguồn: Platform/Platform catalog (1).pdf, trang 1–2 (PDF, 2 trang dạng ảnh spread lớn). DATA STATUS: VERIFIED (chữ rõ ràng trong catalogue).

### CORE SPECIFICATIONS — S70 (Cabin style Platform lift, cho shaft thép/gạch-bê tông)

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| Tải trọng | Tối đa 280 KG | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Kích thước hố/shaft | Từ 950mm x 1000mm đến 1300mm x 1350mm — tổng cộng hơn 30 kích thước để lựa chọn | VERIFIED | Platform catalog (1).pdf, trang 1 |
| PIT | Tối thiểu 100mm | VERIFIED | Platform catalog (1).pdf, trang 2 |
| OH | Chỉ 2500mm (tối thiểu) | VERIFIED | Platform catalog (1).pdf, trang 2 |
| Tốc độ | 0.3 m/s | VERIFIED | Platform catalog (1).pdf, trang 2 |
| Chiều cao cabin | 2100mm | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Hệ thống truyền động | Steel belt traction (đai thép), tỉ lệ 2:1 | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Loại cửa | Manual rotating single door / automatic rotating single door / automatic rotating double doors (tùy chọn) | VERIFIED | Platform catalog (1).pdf, trang 2 |
| Ứng dụng lắp đặt | Có shaft riêng, lắp giữa cầu thang, góc tường, giếng trời — phù hợp townhouse, villa, duplex; không khuyến nghị lắp ngoài trời | VERIFIED | Platform catalog (1).pdf, trang 1 |

### CORE SPECIFICATIONS — S80 (Panoramic platform lift, shaft nhôm hợp kim tích hợp)

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| Tải trọng | Tối đa 280 KG | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Kích thước hố/shaft | Từ 950mm x 1000mm đến 1300mm x 1350mm — tổng cộng hơn 30 kích thước để lựa chọn | VERIFIED | Platform catalog (1).pdf, trang 1 |
| PIT | Tối thiểu 100mm | VERIFIED | Platform catalog (1).pdf, trang 1 |
| OH | Chỉ 2500mm (tối thiểu) | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Tốc độ | UNKNOWN — catalogue không ghi rõ tốc độ riêng cho S80 (chỉ S70 có ghi "running speed 0.3m/s" rõ ràng); có thể giống S70 nhưng KHÔNG được suy đoán | UNKNOWN | — |
| Chiều cao cabin | 2100mm | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Hệ thống truyền động | Steel belt traction gantry structure, không có PIT sâu, không phòng máy | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Loại cửa | Glass manual door (kính trong suốt), tùy chọn cửa đôi tự động | VERIFIED | Platform catalog (1).pdf, trang 1 |
| Biến thể màu shaft | Royal blue, Champagne gold, Dazzling gold, 24 Rose gold bronzes, Elegant black, Dark silver grey | VERIFIED | Platform catalog (1).pdf, trang 2 |
| Biến thể phiên bản | S80-A, S80-B (Fashion edition), S80 Yangwang series (màu Blue/Dark gray/Fishbelly white, có màn hình điều khiển lớn) | VERIFIED | Platform catalog (1).pdf, trang 1 |

Ghi chú: "S70" và "S80" ghi cờ Ý (🇮🇹) trên catalogue kèm dòng chữ "A STAR OF LUXURY FROM ITALY — SALUTE THE PROMINENT DESIGN MASTER" — đây là định vị marketing "phong cách thiết kế Ý", KHÔNG phải tuyên bố xuất xứ sản xuất. Không tự ý diễn giải thành "sản xuất tại Ý" khi tư vấn khách hàng.

---

## VILLA HOME LIFT — IN3000GS / IN2500GS SERIES

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo IN3000GS / IN2500GS Series ("START THE NEW HOME OF LIFE")

Mã sản phẩm: IN3000GS, IN2500GS

Nhóm sản phẩm: Thang máy biệt thự (Villa Home Lift) cao cấp

Tình trạng kinh doanh: Cần xác minh

Nguồn: Villas/Nippon Sanyo High-end villa lift catalogue.pdf, trang bìa mục "IN3000GS/IN2500GS SERIES" (PDF page 4). DATA STATUS: VERIFIED.

### CORE SPECIFICATIONS

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| Hệ thống truyền động | Steel rope traction (kéo cáp thép) | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| Bố trí (Layout) | Gantry | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| Tốc độ | 0.4 – 1.0 m/s | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| OH (Overhead height) | 2900mm | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| PIT (Pit depth) | 300mm | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| Hệ điều khiển | Micro-electronic vector control + VVVF drive | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| Hệ thống an toàn | "Thorough safety protection" (không ghi chi tiết cụ thể) | VERIFIED (ở mức mô tả chung) | High-end villa lift catalogue.pdf, PDF trang 4 |
| Tiêu chuẩn tiết kiệm năng lượng | Grade-A energy consumption | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| Tiêu chuẩn tiếng ồn | Vận hành < 40–45 dB | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 4 |
| Tải trọng | UNKNOWN — không ghi trong trang này | UNKNOWN | — |
| Kích thước cabin | UNKNOWN — không ghi trong trang này | UNKNOWN | — |

---

## VILLA HOME LIFT — IN3000GD / IN2500GD SERIES

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo IN3000GD / IN2500GD Series ("IDEAL ADVANCED LIFE IS MORE BEAUTIFUL")

Mã sản phẩm: IN3000GD, IN2500GD

Nhóm sản phẩm: Thang máy biệt thự (Villa Home Lift) cao cấp

Tình trạng kinh doanh: Cần xác minh

Nguồn: Villas/Nippon Sanyo High-end villa lift catalogue.pdf, PDF trang 7. DATA STATUS: VERIFIED.

### CORE SPECIFICATIONS

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| Hệ thống truyền động | Steel belt traction (kéo đai thép) | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 7 |
| Bố trí (Layout) | Gantry | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 7 |
| Tốc độ | 0.4 – 0.63 m/s | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 7 |
| Hệ điều khiển | Micro-electronic vector control + VVVF drive | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 7 |
| Hệ thống an toàn | "Thorough safety protection" | VERIFIED (mô tả chung) | High-end villa lift catalogue.pdf, PDF trang 7 |
| Tiêu chuẩn tiết kiệm năng lượng | Grade-A energy consumption | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 7 |
| Tiêu chuẩn tiếng ồn | Vận hành < 40 dB | VERIFIED | High-end villa lift catalogue.pdf, PDF trang 7 |
| Tải trọng | UNKNOWN — không ghi trong trang này | UNKNOWN | — |
| Kích thước cabin | UNKNOWN — không ghi trong trang này | UNKNOWN | — |

### CONFIGURATION IN3000GD

OH / PIT / Chiều cao cabin: 3000mm / 150mm / 2400mm — DATA STATUS: VERIFIED (High-end villa lift catalogue.pdf, PDF trang 7)

### CONFIGURATION IN2500GD

OH / PIT / Chiều cao cabin: 2500mm / 300mm / 2200mm — DATA STATUS: VERIFIED (High-end villa lift catalogue.pdf, PDF trang 7)

Ghi chú: Catalogue này (Villas/Nippon Sanyo High-end villa lift catalogue.pdf) chủ yếu là tài liệu trang trí/nội thất cabin (Classic Series, Colorful Space Series, Sightseeing Car Decoration, Door Panel Series, bảng điều khiển) — không có bảng kích thước hố thang/tải trọng/cửa chi tiết theo từng cấu hình như các catalogue "Passenger Elevator" hay "3000 series". Các thông số Tải trọng, Kích thước cabin, Kích thước hố thang, Số điểm dừng, Điện áp cho dòng Villa (IN3000GS/GD, IN2500GS/GD): UNKNOWN — cần bổ sung tài liệu kỹ thuật chi tiết hơn hoặc xác nhận với bộ phận kỹ thuật SANYO.

---

## VILLA HOME LIFT — MINI SERIES (MINI2800 / MINI2500)

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Nippon Sanyo Lift MINI Series ("Compact and Capable, Precision to Perfection")

Mã sản phẩm: MINI2800, MINI2500

Nhóm sản phẩm: Thang máy biệt thự mini (Mini Villa Home Lift) — tối ưu cho hố thang nhỏ

Tình trạng kinh doanh: Cần xác minh

Nguồn: Villas/Nippon sanyo mini villa catalog.pdf, PDF trang 3 (catalog trang 4-5). DATA STATUS: VERIFIED.

### CORE SPECIFICATIONS (chung cho cả dòng MINI)

Hệ thống truyền động: Steel belt trailed gantry structure (kéo đai thép, kết cấu gantry) — DATA STATUS: VERIFIED

Mô tả: Thiết kế cho hố thang nhỏ (small hoistway), OH thấp, tối ưu diện tích cabin/cửa trong không gian nhỏ. Phù hợp lắp trong hố gạch-bê tông, giữa cầu thang, hoặc hố thang ngoài trời (theo catalogue trang 2). Có cả loại cabin kín (closed car) và cabin ngắm cảnh (sightseeing car). DATA STATUS: VERIFIED.

### CONFIGURATION MINI2800

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| OH (Overhead standard) | 2800mm | VERIFIED | mini villa catalog.pdf, PDF trang 3 |
| PIT (Pit depth standard) | 150mm | VERIFIED | mini villa catalog.pdf, PDF trang 3 |
| Chiều cao cabin (Car height) | 2200mm | VERIFIED | mini villa catalog.pdf, PDF trang 3 |
| Tải trọng | UNKNOWN | UNKNOWN | — |
| Tốc độ | UNKNOWN | UNKNOWN | — |

Mô tả riêng: "Focus on small hoistway design, the king of space utilization" — tối ưu cho hố thang nhỏ nói chung.

### CONFIGURATION MINI2500

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| OH (Overhead standard) | 2500mm | VERIFIED | mini villa catalog.pdf, PDF trang 3 |
| PIT (Pit depth standard) | 300mm | VERIFIED | mini villa catalog.pdf, PDF trang 3 |
| Chiều cao cabin (Car height) | 2100mm | VERIFIED | mini villa catalog.pdf, PDF trang 3 |
| Tải trọng | UNKNOWN | UNKNOWN | — |
| Tốc độ | UNKNOWN | UNKNOWN | — |

Mô tả riêng: "MINI2500 expands on the MINI2800 to tackle extreme overhead/height limitations. In situations where the hoistway size is small and the overhead height is limited, the MINI2500 is your optimal choice" — tối ưu cho trường hợp OH cực thấp.

Ghi chú: Catalogue chủ yếu là tài liệu trang trí cabin (Car decoration, Colorful door panel series, bảng điều khiển) — giống cấu trúc catalogue High-end Villa. Không có bảng tải trọng/tốc độ/kích thước hố thang×cabin chi tiết theo từng cấu hình.

---

## GHI CHÚ THÊM VỀ THƯƠNG HIỆU (từ Villas/Home Lift.pdf)

File "Villas/Home Lift.pdf" mang thương hiệu "SANYO YUSOKI" (không phải "Nippon Sanyo" như các catalogue villa khác). Trang bìa trong ghi: "Sanyo Distributors & Branches Cover 70 Countries", "HEADQUARTERS IN CHINA — Shenyang Sanyo Elevator Co., Ltd. (No.152 Shenbei Road, Dadong District, Shenyang, Liaoning, China) và Shanghai Sanyo Elevator Co., Ltd. (No.26 Gudan Road, Xinchang Town, Pudong District, Shanghai, China)". Trang giới thiệu lãnh đạo ghi: "Since the manufacture of China's first elevator in 1954... Sanyo Elevator Group..." — phát ngôn bởi "Ally Wang, Shenyang Sanyo Heavy Industry Group VP, Shenyang & Shanghai Sanyo Elevator CEO".

→ Đây là bằng chứng thứ ba (sau Thẩm Dương_Passenger Elevator.pdf) cho câu chuyện thương hiệu "gốc Trung Quốc, Shenyang/Shanghai, 1954", MÂU THUẪN với câu chuyện "Nippon Sanyo — thành lập 2019, thành viên Friendly Elevatech Elevator Group Nhật Bản, tiền thân Osawa Industries 1963, Toyama" xuất hiện trong các catalogue 3000 Series, Home Lift 1000 Series, High-end Villa, Mini Villa. Hai câu chuyện thương hiệu này KHÔNG nhất quán với nhau trong bộ catalogue nguồn. Claude KHÔNG tự ý dung hòa hay chọn một câu chuyện làm source of truth — đã ghi chú trong mục 10 phía trên và trong báo cáo cuối cùng để người dùng xác nhận với SANYO Yusoki Vietnam.

---

## VILLA/HOME ELEVATOR — VF020 (Cabin Type) / VF030 (Platform Type)

**Nguồn nhà máy:** Nippon Sanyo (Nhật Bản)

Tên sản phẩm: Sanyo Yusoki Home Elevator Series — VF020 (Cabin Type) / VF030 (Platform Type)

Mã sản phẩm: VF020, VF030

Nhóm sản phẩm: Thang máy gia đình (Home Elevator) — thương hiệu "Sanyo Yusoki" (xem ghi chú thương hiệu ở trên)

Tình trạng kinh doanh: Cần xác minh

Nguồn: Villas/Home Lift.pdf, trang 23–24 (PDF page 13, mục "Specification"). DATA STATUS: VERIFIED — bảng số liệu rõ ràng, sắc nét, không mâu thuẫn nội bộ.

### CONFIGURATION VF030 — Platform Type Home Elevator

| Tải trọng (kg) | Tốc độ (m/s) | Tỉ số kéo (Traction Ratio) | Kích thước cabin WxDxH (mm) | Cửa mở WxH (mm) | Kích thước hố thang WxD (mm) | Hành trình (mm) | PIT (mm) | OH (mm) |
|---|---|---|---|---|---|---|---|---|
| 320 | 0.4 | 1:1 | 915 x 845 | 750 x 2000 | 1000 x 1200 | ≤20000 | ≥150 | ≥2400 |
| 400 | 0.4 | 1:1 | 1115 x 845 | 910 x 2000 | 1200 x 1200 | ≤20000 | ≥150 | ≥2400 |

### CONFIGURATION VF020 — Cabin Type Home Elevator

| Tải trọng (kg) | Tốc độ (m/s) | Tỉ số kéo (Traction Ratio) | Kích thước cabin WxDxH (mm) | Cửa mở WxH (mm) | Kích thước hố thang WxD (mm) | Hành trình (mm) | PIT (mm) | OH (mm) |
|---|---|---|---|---|---|---|---|---|
| 320 | 0.4 | 2:1 | 1000 x 1050 x 2300 | 650 x 2100 | 1500 x 1300 | ≤20000 | ≥150 | ≥3500 |
| 400 | 0.4 | 2:1 | 1050 x 1150 x 2300 | 700 x 2100 | 1550 x 1400 | ≤20000 | ≥150 | ≥3500 |

### Thông số lắp đặt chung (cả VF020 và VF030)

| THÔNG SỐ | GIÁ TRỊ | DATA STATUS | SOURCE |
|---|---|---|---|
| Chiều cao cabin tiêu chuẩn (Standard Car Height) | 2.3 m | VERIFIED | Home Lift.pdf, PDF trang 12 |
| Chiều cao cửa mở tiêu chuẩn (Standard Door-Opening Height) | 2.1 m | VERIFIED | Home Lift.pdf, PDF trang 12 |
| PIT tối thiểu | 0.15 m | VERIFIED | Home Lift.pdf, PDF trang 12 |
| Kích thước hố thang tối thiểu (Minimum Shaft Net Size) | "1.1M X 0.15M" (ghi nguyên văn trong catalogue) | NEED CHECK | Home Lift.pdf, PDF trang 12 |
| Kiểu mở cửa | 2 Panel Center Opening / 2 Panel Side Opening / 4 Panel Center Opening / 1 Panel Manual Pulling Door | VERIFIED | Home Lift.pdf, PDF trang 12 |
| Phương án lắp đặt | Concrete Shaft / Surrounded by Stairs / Spacious Hall / Hole in Floors / Outdoor Installation / Landing Door | VERIFIED | Home Lift.pdf, PDF trang 12 |

NEED CHECK: "Minimum Shaft Net Size: 1.1M X 0.15M" — 0.15m (150mm) là kích thước bất thường cho một chiều của hố thang (quá hẹp so với kích thước hố thang trong bảng VF020/VF030 ở trên, vốn tối thiểu là 1000x1200mm). Nhiều khả năng là lỗi in ấn trong catalogue gốc (có thể đúng ra là một giá trị lớn hơn, ví dụ 1.1m x 1.5m). Giữ nguyên số liệu gốc, KHÔNG tự sửa, cần xác nhận với kỹ thuật SANYO.

---

## THANG MÁY VILLA & PLATFORM — BẢNG THÔNG SỐ KỸ THUẬT (nguồn Sanyo Yusoki Việt Nam)

**Nguồn nhà máy:** Sanyo Yusoki Việt Nam (đại lý — không rõ nhà máy gốc)

Tên sản phẩm: Thang máy Villa & Platform (theo bảng thông số kỹ thuật do Sanyo Yusoki Việt Nam phát hành)

Nhóm sản phẩm: Thang máy villa (đối trọng sau/hông, cáp kéo) và thang nâng platform

Tình trạng kinh doanh: Cần xác minh

Nguồn: Villas/SANYO- Giải pháp thang máy Nhập khẩu.pdf — toàn bộ 9 trang. Đây là tài liệu do CHÍNH "Công ty TNHH thiết bị và thang máy Sanyo Yusoki Việt Nam" phát hành (địa chỉ: Số 8BT2 ngõ 66 Kim Giang – Đại Kim – Hoàng Mai – Hà Nội; Điện thoại: 0983.859.969; Website: sanyoyusoki.com; Email: sales@sanyo-yusoki.vn) — có watermark "SANYO YUSOKI" trên các bản vẽ. DATA STATUS: VERIFIED (đây là nguồn có khả năng gần nhất với thực tế kinh doanh tại Việt Nam trong số các catalogue đã đọc, vì do chính pháp nhân Việt Nam phát hành — tuy nhiên KHÔNG có logo/tên gọi "Nippon Sanyo" hay model code (IN3000GS, VF020...) nào xuất hiện, nên chưa thể khẳng định chắc chắn đây là cùng dòng sản phẩm với các catalogue khác; cần xác nhận với công ty).

Đơn vị kích thước trong toàn bộ bảng dưới đây: mm (trừ Tải trọng: kg).

### CONFIGURATION 1 — Đối trọng phía sau (Rear CWT), cửa mở tim (Center Opening)

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1300 | 1400 | 950 | 950 | 600 | 2400 | 3200 | 200 |
| 320 | 1500 | 1500 | 1150 | 1050 | 700 | 2400 | 3200 | 200 |
| 400 | 1600 | 1700 | 1250 | 1250 | 750 | 2400 | 3200 | 200 |

### CONFIGURATION 2 — Đối trọng bên hông (Side CWT), cửa mở tim

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1400 | 1200 | 900 | 950 | 650 | 2400 | 3200 | 200 |
| 320 | 1600 | 1450 | 1100 | 1200 | 750 | 2400 | 3200 | 200 |
| 400 | 1700 | 1550 | 1200 | 1300 | 800 | 2400 | 3200 | 200 |

### CONFIGURATION 3 — MINI, đối trọng sau (rear CWT), cửa mở tay (manual)

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1100 | 1200 | 760 | 880 | 650 | 2300 | 3000 | 150 |
| 320 | 1300 | 1500 | 960 | 1180 | 850 | 2300 | 3000 | 150 |

Ghi chú: Chỉ có 2 mức tải trọng cho cấu hình MINI rear CWT (không có mức 400kg) — UNKNOWN cho các mức khác nếu có.

### CONFIGURATION 4 — MINI, đối trọng hông (side CWT), cửa mở tim

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1400 | 1200 | 900 | 900 | 600 | 2300 | 3000 | 150 |
| 320 | 1600 | 1400 | 1100 | 1100 | 700 | 2300 | 3000 | 150 |
| 400 | 1700 | 1500 | 1200 | 1200 | 750 | 2300 | 3000 | 150 |

### CONFIGURATION 5 — Thang cáp kéo, đối trọng sau

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1300 | 1400 | 950 | 1050 | 600 | 2400 | 3600 | 200 |
| 320 | 1500 | 1500 | 1150 | 1250 | 700 | 2400 | 3600 | 200 |
| 400 | 1600 | 1700 | 1250 | 1250 | 750 | 2400 | 3600 | 200 |

### CONFIGURATION 6 — Thang cáp kéo, đối trọng hông (Pulley dưới cabin)

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1400 | 1200 | 900 | 900 | 650 | 2400 | 3200 | 350 |
| 320 | 1600 | 1450 | 1100 | 1100 | 750 | 2400 | 3200 | 350 |
| 400 | 1700 | 1550 | 1200 | 1300 | 800 | 2400 | 3200 | 350 |

### CONFIGURATION 7 — Thang cáp kéo, đối trọng hông (Pulley trên nóc cabin)

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 250 | 1400 | 1200 | 900 | 950 | 650 | 2400 | 3600 | 200 |
| 320 | 1600 | 1450 | 1100 | 1200 | 750 | 2400 | 3600 | 200 |
| 400 | 1700 | 1550 | 1200 | 1300 | 800 | 2400 | 3600 | 200 |

### CONFIGURATION 8 — Thang nâng Platform (Lifting Platform), đối trọng phía sau

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 150 | 950 | 1100 | 810 | 680 | 675 | 2100 | 2500 | 100 |
| 200 | 1100 | 1300 | 960 | 880 | 825 | 2100 | 2500 | 100 |
| 240 | 1200 | 1400 | 1060 | 980 | 825 | 2100 | 2500 | 100 |

### CONFIGURATION 9 — Thang nâng Platform, đối trọng hông

| Tải trọng (kg) | Rộng hố thang | Sâu hố thang | Rộng cabin | Sâu cabin | Rộng cửa | Cao cabin | OH | PIT |
|---|---|---|---|---|---|---|---|---|
| 150 | 1150 | 950 | 710 | 810 | 590 | 2100 | 2500 | 100 |
| 200 | 1300 | 1100 | 860 | 960 | 740 | 2100 | 2500 | 100 |
| 240 | 1400 | 1200 | 960 | 1060 | 840 | 2100 | 2500 | 100 |

Ghi chú chung (nguyên văn từ catalogue, áp dụng cho các cấu hình 1, 2, 5, 6, 7): "Chiều cao thực của Cabin = Chiều cao vách Cabin − Độ dày trần cabin". Chưa ghi độ dày trần cabin cụ thể — UNKNOWN.

Tải trọng: Đã ghi rõ theo từng cấu hình ở trên — DATA STATUS: VERIFIED.

Tốc độ, Số điểm dừng, Điện áp, Hệ thống truyền động chi tiết: UNKNOWN — catalogue này chỉ có bản vẽ kích thước hố thang/cabin, không ghi tốc độ hay điện áp.

Đối chiếu chéo (cross-check): Villas/shaft-car.pdf (9 trang, bản vẽ kỹ thuật tiếng Anh, cùng dạng bản vẽ) chứa CÙNG một bộ số liệu cho các cấu hình "Rear CWT Center opening", "Side CWT Center opening", "MINI side CWT (Center opening)" — số liệu khớp hoàn toàn với bảng tiếng Việt ở trên (ví dụ Rear CWT 250kg: 1300×1400/950×950/600/2400/3200/200 — giống hệt). Đây là bằng chứng số liệu ổn định giữa 2 nguồn, tăng độ tin cậy DATA STATUS: VERIFIED cho các cấu hình 1, 2, 4 (đối trọng sau, đối trọng hông, MINI side CWT).

---

## THANG CUỐN / BĂNG CHUYỀN — SYF/SRX SERIES (Escalator & Autowalk)

Tên sản phẩm: SANYO YUSOKI Escalator/Autowalk SYF/SRX Series ("Creating Your Excellence")

Mã sản phẩm: SYF-OE110, SYF-OE210 (Ordinary Escalator); SYF-PE110, SYF-PE210 (Public Transportation Escalator); SRX-OM110, SRX-OM210 (Ordinary Autowalk); SRX-PM110 (Horizontal/Public Autowalk)

Nhóm sản phẩm: Thang cuốn (Escalator) / Băng chuyền di động (Autowalk) — thương hiệu "Sanyo Yusoki" (Shenyang Sanyo Elevator Co., Ltd., thành lập 1954, xem ghi chú thương hiệu ở trên)

Tình trạng kinh doanh: Cần xác minh

Nguồn: Pasenger Lift/SANYO YUSOKI Escalator & Autowalk Catalogue(1).pdf, PDF trang 3 (bảng "ESCALATOR & AUTOWALK SOLUTIONS"). DATA STATUS: VERIFIED.

### CORE SPECIFICATIONS — bảng so sánh theo model

| THÔNG SỐ | SYF-OE110 / SYF-OE210 (Escalator thường) | SYF-PE110 (Escalator công cộng) | SYF-PE210 (Escalator công cộng) | SRX-OM110 / SRX-OM210 (Autowalk thường) | SRX-PM110 (Autowalk công cộng) |
|---|---|---|---|---|---|
| Góc nghiêng (Inclination, độ) | 30 / 35 | 23.2 / 27.3 / 30 / 35 | 30 | 10 / 11 / 12 | 0 (nằm ngang) |
| Chiều cao nâng (Vertical Rise) | 2m – 7.5m (6m nếu góc nghiêng 35°) | 2m – 15m | 2m – 25m | 2m – 7.5m | 20m – 120m |
| Số bậc phẳng (Level Steps) | 2/3 | 2/3/4 | 3/4 | — (không áp dụng, là băng chuyền phẳng) | — |
| Tốc độ (m/s) | 0.5 | 0.5 / 0.65 | 0.5 / 0.65 | 0.5 | 0.5 / 0.65 |
| Loại lan can (Balustrade Type) | Glass vertical | Glass vertical / Solid inclined | Glass vertical / Solid inclined | Solid inclined | Glass vertical / Solid inclined |
| Độ rộng bậc/băng (Step/Belt Width, mm) | 1000 / 800 / 600 | 1000 / 800 / 600 | 1000 / 800 / 600 | 1000 / 800 | 1400 / 1200 / 1000 |

Ghi chú: Các thông số "Construction Parameters" chi tiết hơn (bán kính cong R, phản lực gối đỡ tại các điểm R1/R2/R3, kích thước A/B/C/W1-W4...) được trình bày dưới dạng CÔNG THỨC phụ thuộc chiều cao nâng H và góc nghiêng α (ví dụ: A = 1.732×H, R1 = 5.5×L2+17.2...) tại các trang "CONSTRUCTION PARAMETERS" (PDF trang 12–13 cho SYF-OE110/OE210/SYF-PE110; trang 13 cho SYF-PE210/SRX-PM110; trang 14 cho SRX-OM110/OM210) — DATA STATUS: PROJECT DEPENDENT (phụ thuộc thiết kế công trình thực tế, không phải giá trị cố định). KHÔNG áp dụng các công thức này như số liệu cố định khi tư vấn — cần tính toán riêng theo từng công trình hoặc chuyển kỹ thuật xử lý.

Công nghệ đáng chú ý (VERIFIED, mang tính tính năng sản phẩm, không phải thông số kích thước): chế độ tiết kiệm năng lượng tự động (standby khi không có khách, giảm tới 60% năng lượng so với chạy tốc độ đầy đủ), hệ thống bôi trơn tự động PLC (giảm hao hụt mỡ bôi trơn tới 80%), hệ số ma sát tấm ốp chân < 0.45 (đạt tiêu chuẩn EU), bậc thang đã qua kiểm tra tải trọng động 20 triệu lần.

---