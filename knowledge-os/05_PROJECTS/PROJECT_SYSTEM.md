# PROJECT SYSTEM

## PURPOSE

Đây là hệ thống vận hành cho việc quản lý project thực tế của SANYO — định nghĩa cách Knowledge OS xử lý một project từ brief đến thực thi, review, giao nộp, và học hỏi. `05_PROJECTS/` là nơi **thực thi công việc thực tế** — không lưu knowledge chung ở đây.

```text
CLAUDE.md              = system orchestration
01_BRAIN/               = SANYO knowledge
05_VOICE/                = how SANYO speaks
04_SKILLS/               = how the system executes
02_CONTENT / 03_DESIGN / 04_SALES = domain execution systems
PROJECT_SYSTEM.md (file này) = how work is organized and completed
07_EVALUATION/           = how performance is measured
```

Không lớp nào ở trên bị duplicate trong file này.

---

## CORE MODEL

```text
PROJECT
   ↓
BRIEF
   ↓
SOURCE
   ↓
PLAN
   ↓
EXECUTION
   ↓
REVIEW
   ↓
DELIVERABLE
   ↓
LEARNING
```

Một project cụ thể (ví dụ: chiến dịch content Q1, thiết kế lại catalogue sản phẩm, xây training deck cho Sales) nên có một thư mục con trong `05_PROJECTS/` chứa brief + output của project đó — không bắt buộc file cố định nào khác ngoài những gì project thực sự cần.

---

## PROJECT VS KNOWLEDGE

**Thông tin trong một project KHÔNG tự động trở thành SANYO knowledge.**

```text
PROJECT
      ↛
AUTOMATIC BRAIN UPDATE
```

Thông tin đặc thù của project (ngân sách chiến dịch cụ thể, deadline, khách hàng cụ thể trong case study, số liệu riêng của một campaign) ở lại trong project. Chỉ knowledge đã được validate và có thể tái sử dụng mới được promote về `01_BRAIN/` — xem mục LEARNING bên dưới. Không đưa assumption riêng của một project vào Brain chung (đúng nguyên tắc đã có ở `CLAUDE.md` §13).

---

## PROJECT TYPES

Hệ thống hỗ trợ nhiều loại project (Content, Campaign, Sales, Marketing, Design, Website, Training, Research, Internal system development, và các loại hợp lệ khác của SANYO) bằng **MỘT lifecycle chung** (CORE MODEL ở trên) — không tạo hệ thống project riêng cho từng loại. Sự khác biệt giữa các loại project nằm ở bước EXECUTION (dùng đúng domain system nào — xem PROJECT EXECUTION), không nằm ở cấu trúc lifecycle.

---

## PROJECT BRIEF

Mỗi project nên xác định, khi đã biết:

- Objective
- Audience
- Business/customer context
- Desired outcome
- Scope
- Constraints
- Deadline
- Deliverables
- Source materials
- Success criteria

**Không tự bịa thông tin project còn thiếu.** Trường nào chưa biết → ghi UNKNOWN, hỏi lại người dùng nếu ảnh hưởng đến việc thực thi, không tự giả định để brief "trông đầy đủ hơn".

---

## SOURCE MANAGEMENT

Project có thể tham chiếu: `01_BRAIN/`, `02_CONTENT/`, `03_DESIGN/`, `04_SKILLS/`, file chính thức bên ngoài/của project, hoặc tài liệu người dùng cung cấp.

**Không copy nguyên file Brain vào thư mục project.** Luôn tham chiếu đường dẫn nguồn (ví dụ: "màu sắc theo `03_DESIGN/01_BRAND_SYSTEM/BRAND_ASSET_SYSTEM.md`"), không sao chép nội dung — tránh project trở thành bản sao lỗi thời của Brain khi Brain được cập nhật sau này.

---

## PROJECT EXECUTION

Dùng đúng hệ thống theo loại task, theo routing đã có sẵn:

```text
CLAUDE.md
      ↓
01_BRAIN/ (đúng domain: Brand/Customer/Product/Sales/Operation)
      ↓
05_VOICE/VOICE.md
      ↓
04_SKILLS/ (Writing/Design/System)
      ↓
02_CONTENT/ (nếu là content) hoặc 03_DESIGN/ (nếu là design) hoặc 04_SALES/ (nếu là sales)
      ↓
03_DESIGN/01_BRAND_SYSTEM/BRAND_ASSET_SYSTEM.md (nếu có yếu tố thương hiệu thị giác)
```

**Không tạo project-specific rule khi một hệ thống đã có sẵn rule đó.** Ví dụ: không viết lại quy tắc màu sắc riêng cho một project thiết kế — tham chiếu `BRAND_ASSET_SYSTEM.md`; không viết lại quy tắc xử lý objection riêng cho một project sales — tham chiếu `04_SALES/`.

---

## PROJECT REVIEW

Trước khi giao nộp, kiểm tra:

- [ ] Objective đã đạt được chưa?
- [ ] Nguồn thông tin có chính xác không?
- [ ] Có tuân thủ brand compliance không (nếu áp dụng — xem `BRAND_ASSET_SYSTEM.md` § BRAND COMPLIANCE GATE)?
- [ ] Có tuân thủ voice không (nếu áp dụng — xem `VOICE.md` § VOICE QUALITY GATE)?
- [ ] Có phù hợp với khách hàng mục tiêu không (nếu áp dụng)?
- [ ] Thông tin sản phẩm có chính xác không (nếu áp dụng — theo DATA CONFIDENCE tại `PRODUCT_SPECIFICATIONS.md`)?
- [ ] Độ chính xác kỹ thuật có đạt không (nếu áp dụng)?
- [ ] Định dạng có đúng yêu cầu không?
- [ ] Scope có đúng như brief không (không thừa, không thiếu)?
- [ ] Còn UNKNOWN nào chưa giải quyết mà ảnh hưởng đến deliverable không?
- [ ] Có claim nào chưa được hỗ trợ bởi nguồn không?

Không giao nộp khi còn UNKNOWN quan trọng chưa được xử lý hoặc claim chưa xác minh — quay lại bước tương ứng (SOURCE/EXECUTION) thay vì bỏ qua.

---

## DELIVERABLE

Project phải xác định rõ đâu là **deliverable cuối cùng** (final output cần giao) so với các bản nháp/output trung gian trong quá trình làm. **Không tự động lưu mọi output trung gian như một phần knowledge vĩnh viễn** — chỉ deliverable cuối và (khi phù hợp) learning đã validate mới được giữ lại lâu dài.

---

## LEARNING

Sau khi hoàn thành, xác định:

```text
WHAT WORKED
WHAT DID NOT
WHAT WAS LEARNED
WHAT SHOULD CHANGE
```

Áp dụng đúng pipeline đã có ở `CLAUDE.md` §11 (CONTINUOUS IMPROVEMENT): `BEFORE → AFTER → SCORE → LESSON → BEST PRACTICE → VALIDATE → KNOWLEDGE UPDATE` — không định nghĩa lại pipeline này ở đây.

**Chỉ promote learning về `01_BRAIN/` khi cả 4 điều kiện đều đúng:**

1. Có thể tái sử dụng (không chỉ đúng cho riêng project này)
2. Đã được xác minh đủ (không phải suy đoán một lần)
3. Thuộc đúng một domain đã có sẵn trong Brain (không tạo domain mới tuỳ tiện)
4. Không mâu thuẫn với nguồn có thẩm quyền cao hơn (đúng SOURCE OF TRUTH tại `CLAUDE.md` §3)

Nếu chưa đạt đủ 4 điều kiện: **giữ learning ở lại trong project**, hoặc ghi nhận rõ là `HYPOTHESIS` / `UNKNOWN` — không promote lên Brain khi chưa validate.

---

## PROJECT STATUS

```text
PLANNED → ACTIVE → BLOCKED → REVIEW → COMPLETED → ARCHIVED
```

6 trạng thái đơn giản, không thêm workflow quản lý dự án phức tạp (không sprint, không burndown, không multi-level approval trừ khi một project cụ thể thực sự cần và tự định nghĩa trong phạm vi project đó).

---

## ANTI-BLOAT

Chỉ có duy nhất file này trong `05_PROJECTS/` ở cấp hệ thống. Không tạo `PROJECT_TEMPLATE.md`, `PROJECT_BRIEF.md`, `PROJECT_CHECKLIST.md`, `PROJECT_INDEX.md`, `PROJECT_PLAYBOOK.md` trừ khi có nhu cầu thật trong tương lai chứng minh cần thiết.

---

## QUALITY GATE

- [ ] Project lifecycle có rõ ràng không?
- [ ] Thông tin đặc thù project có ở lại trong project, không lan ra Brain không?
- [ ] Không có "Brain contamination" tự động?
- [ ] Có tái sử dụng đúng hệ thống hiện có (Brain/Voice/Skills/Content/Design/Sales) không?
- [ ] UNKNOWN có được giữ nguyên không?
- [ ] Review có bắt buộc trước khi giao nộp không?
- [ ] Learning chỉ được promote sau khi đã validate đủ 4 điều kiện chưa?
- [ ] Có tạo file project không cần thiết nào không?
- [ ] Có mâu thuẫn với phần còn lại của Knowledge OS không?
- [ ] File có tính vận hành (operational) thay vì lý thuyết không?
