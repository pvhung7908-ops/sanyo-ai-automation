# LAB SYSTEM

## PURPOSE

`06_LAB/` là môi trường thử nghiệm và kiểm thử có kiểm soát của Knowledge OS.

```text
LAB KHÔNG PHẢI:
- một Brain thứ hai
- một Skills system thứ hai
- một kho knowledge vĩnh viễn
```

LAB tồn tại để thử trước khi tin — không phải nơi lưu trữ kiến thức đã dùng được.

---

## CORE MODEL

```text
IDEA / HYPOTHESIS
      ↓
EXPERIMENT
      ↓
TEST
      ↓
RESULT
      ↓
EVALUATION
      ↓
LESSON
      ↓
VALIDATE
      ↓
OPTIONAL KNOWLEDGE UPDATE
```

---

## LAB VS BRAIN

LAB chứa: thử nghiệm, giả thuyết, test, prototype, prompt experiment, các lần thử thất bại, so sánh, phát hiện tạm thời.

**Nội dung LAB không tự động trở thành Brain knowledge.**

Dùng đúng 4 trạng thái để phân biệt: `HYPOTHESIS` · `UNKNOWN` · `EXPERIMENTAL` · `VALIDATED`.

Chỉ kết quả đã `VALIDATED` và có thể tái sử dụng mới được cân nhắc promote về `01_BRAIN/`. Việc promote phải theo đúng cơ chế Continuous Improvement đã có sẵn tại `CLAUDE.md` §11 (`BEFORE → AFTER → SCORE → LESSON → BEST PRACTICE → VALIDATE → KNOWLEDGE UPDATE`) — **không định nghĩa lại cơ chế này ở đây.**

---

## LAB AREAS

```text
06_LAB/
├── 01_TESTING/     = kiểm tra một hệ thống/rule/routing/output ĐÃ CÓ có hoạt động đúng không
├── 02_EXPERIMENTS/ = thử ý tưởng mới, cách tiếp cận mới, giả thuyết sáng tạo, phương pháp thay thế
└── 03_PROMPTS/     = phát triển, so sánh, tinh chỉnh prompt
```

Không tạo thêm category LAB cố định nào khác ngoài 3 thư mục trên.

---

## TESTING (01_TESTING/)

Mỗi test nên trả lời:

```text
WHAT được test?
WHY?
EXPECTED RESULT?
ACTUAL RESULT?
PASS / FAIL?
WHAT WAS LEARNED?
```

**Không thay đổi hệ thống chỉ vì một test fail.** Trước tiên xác định nguyên nhân fail thuộc loại nào:

- Lỗi implementation
- Lỗi routing
- Lỗi nguồn (source)
- Lỗi reasoning
- Lỗi output
- Lỗi thiết kế test (test design problem — bản thân test sai, không phải hệ thống sai)

Chỉ sau khi xác định đúng loại lỗi mới quyết định có cần sửa hệ thống hay không.

---

## EXPERIMENTS (02_EXPERIMENTS/)

Một experiment nên định nghĩa, khi đã biết: hypothesis, objective, variables, constraints, expected outcome, result, evaluation, lesson.

**Không trình bày kết quả thử nghiệm như sự thật đã được xác lập của SANYO.** Một experiment thành công một lần vẫn chỉ là EXPERIMENTAL, không phải VALIDATED.

---

## PROMPT EXPERIMENTS (03_PROMPTS/)

Trạng thái prompt: `experimental` → `draft` → `tested` → `validated` → `deprecated`.

Một prompt "dùng thấy hay" **không tự động trở thành system rule.** Chỉ promote khi nó đại diện cho một phương pháp có thể tái sử dụng và đã được validate.

---

## EVIDENCE — FACT / HYPOTHESIS / UNKNOWN

Khi đánh giá một experiment, phân biệt rõ:

```text
FACT
INFERENCE / HYPOTHESIS
UNKNOWN
```

**Không biến hypothesis thành fact chỉ vì một lần thử có vẻ thành công.** Bằng chứng lặp lại có thể tăng CONFIDENCE, nhưng không tự động đổi truth category — muốn đổi từ HYPOTHESIS sang FACT/VALIDATED phải qua đúng bước VALIDATE trong CORE MODEL, không phải chỉ vì "thấy nhiều lần rồi".

---

## COMPETITOR / EXTERNAL IDEAS

Quan sát từ đối thủ/bên ngoài có thể dùng làm input cho experiment.

```text
COMPETITOR IDEA ≠ SANYO KNOWLEDGE ≠ SANYO BRAND RULE
```

Khi thích ứng một ý tưởng bên ngoài:

1. Xác định vấn đề khách hàng bên dưới ý tưởng đó
2. Tách cơ chế (mechanism) khỏi cách thực thi (execution)
3. Xác định phần nào là generic (dùng chung được)
4. Xác định phần nào là đặc thù riêng của đối thủ
5. Tạo một hypothesis đặc thù cho SANYO
6. Test hypothesis đó
7. Đánh giá kết quả

**Không bao giờ** copy identity, claim, asset, hay cách thể hiện độc quyền của đối thủ rồi trình bày như knowledge gốc của SANYO. *(Nhất quán với `02_CONTENT/01_IDEAS/CONTENT_IDEA_SYSTEM.md` § NGUỒN Ý TƯỞNG: QUAN SÁT ĐỐI THỦ — không định nghĩa lại, chỉ áp dụng cùng tinh thần ở phạm vi LAB.)*

---

## FAILURE IS ALLOWED

Một experiment thất bại là thông tin hữu ích. **Không xoá experiment thất bại chỉ vì nó thất bại.**

Ghi lại: điều gì thất bại, tại sao thất bại (nếu biết), học được gì, điều gì không nên lặp lại.

Không tổng quát hoá vượt quá bằng chứng thực tế (một thất bại không có nghĩa "phương pháp này luôn sai" nếu chưa test đủ điều kiện).

---

## LAB → BRAIN PROMOTION

Chỉ cân nhắc promote về `01_BRAIN/` khi đủ cả 4 điều kiện:

1. Có thể tái sử dụng
2. Đã được xác minh đủ
3. Thuộc đúng một domain đã có sẵn trong Brain
4. Không mâu thuẫn với nguồn có thẩm quyền cao hơn (`CLAUDE.md` §3 SOURCE OF TRUTH)

Nếu chưa đủ: giữ nguyên trong LAB. **Không tự động sửa `01_BRAIN/`.**

---

## LAB ↔ PROJECT

Experiment đã validated có thể được project sử dụng. Project cũng có thể tự tạo experiment mới trong LAB khi cần.

```text
PROJECT ↔ LAB
```

Quan hệ hai chiều, nhưng **không bên nào tự động ghi đè bên kia** — một kết quả LAB không tự áp vào project đang chạy mà không được project đó chủ động lấy dùng; ngược lại, nhu cầu riêng của một project không tự động trở thành kết luận chung của LAB. *(Đúng tinh thần "Project vs Knowledge" đã có ở `05_PROJECTS/PROJECT_SYSTEM.md` — không định nghĩa lại.)*

---

## ANTI-BLOAT

Không tạo `LAB_TEMPLATE.md`, `EXPERIMENT_TEMPLATE.md`, `TEST_TEMPLATE.md`, `PROMPT_TEMPLATE.md`, `LAB_INDEX.md`, `LAB_PLAYBOOK.md` trừ khi có nhu cầu thật trong tương lai. Dùng ghi chép Markdown ngắn gọn ngay trong 3 thư mục hiện có khi cần lưu một test/experiment/prompt cụ thể.

## BOUNDARY

```text
BRAIN       = SANYO knowledge đã validated
SKILLS      = execution methods
PROJECTS    = công việc thực tế
LAB (file này) = thử nghiệm và kiểm thử
EVALUATION  = đo lường hiệu quả có hệ thống
```

Không lớp nào ở trên bị duplicate trong file này.

---

## QUALITY GATE

- [ ] LAB có rõ ràng là môi trường thử nghiệm không?
- [ ] HYPOTHESIS có bị coi như FACT không?
- [ ] UNKNOWN có được giữ nguyên không?
- [ ] Experiment thất bại có được phép giữ lại không?
- [ ] Quan sát đối thủ có được giữ ở trạng thái input bên ngoài, không lẫn vào SANYO knowledge không?
- [ ] Experiment có tự động sửa Brain không (phải là KHÔNG)?
- [ ] Promotion có bắt buộc qua validate không?
- [ ] Có tái sử dụng đúng hệ thống hiện có không?
- [ ] Có tạo category LAB không cần thiết nào không?
- [ ] Có duplicate với PROJECTS hoặc EVALUATION không?
