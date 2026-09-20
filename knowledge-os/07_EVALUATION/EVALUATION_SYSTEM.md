# EVALUATION SYSTEM

## PURPOSE

Đo lường Knowledge OS có tạo ra công việc **tốt hơn, chính xác hơn, hữu ích hơn, nhất quán hơn** hay không.

```text
EVALUATION KHÔNG PHẢI:
- một Brain khác
- một Skills system khác
- một LAB khác
```

EVALUATION diễn giải hiệu suất — không tạo ra kiến thức, không thực thi task, không chạy thử nghiệm.

---

## CORE MODEL

```text
TASK
      ↓
OUTPUT
      ↓
EVALUATION
      ↓
SCORE
      ↓
FEEDBACK
      ↓
LESSON
      ↓
VALIDATION
      ↓
OPTIONAL SYSTEM / KNOWLEDGE UPDATE
```

---

## WHAT EVALUATION MEASURES

Xem xét, **chỉ khi liên quan** (không ép mọi tiêu chí lên mọi task):

1. Task understanding
2. Source accuracy
3. FACT/INFERENCE/UNKNOWN discipline
4. Customer relevance
5. Product accuracy
6. Sales logic
7. Voice consistency
8. Brand compliance
9. Design quality
10. Content quality
11. Usefulness
12. Output completeness
13. Next best action/step
14. Claim safety
15. Customer autonomy

Một task viết content ngắn không cần chấm "Brand compliance" nếu không có yếu tố thị giác thương hiệu; một task thuần kỹ thuật không cần chấm "Customer autonomy" nếu không có tương tác khách hàng. Chọn đúng tiêu chí liên quan, không chấm máy móc toàn bộ 15 mục cho mọi task.

---

## SCORE MODEL

Thang điểm 1–10 khi hữu ích, nhưng:

```text
MỘT CON SỐ ĐIỂM LÀ EVALUATION TOOL, KHÔNG PHẢI FACT.
```

Điểm số bắt buộc phải có lý do/bằng chứng đi kèm — không tạo cảm giác chính xác giả (false precision, ví dụ "8.7/10" khi không có cơ sở phân biệt với "8/10" hay "9/10").

Với đánh giá quan trọng, luôn nêu đủ 4 phần:

```text
SCORE + WHY + EVIDENCE + IMPROVEMENT
```

---

## PASS / FAIL

Dùng `PASS` / `NEEDS REVISION` khi phù hợp. **Điểm cao không tự động = PASS nếu vi phạm một rule mang tính critical.**

Ví dụ critical failure (không được "trung bình hoá" đi bằng các điểm tốt khác):

- Claim kỹ thuật không có nguồn hỗ trợ
- Testimonial bịa
- Dùng sai official brand asset trong task có yếu tố thương hiệu
- Bỏ qua UNKNOWN rồi tự bịa câu trả lời

Một output có 9 phần tốt và 1 critical failure vẫn là `NEEDS REVISION`, không phải "9/10 nên coi là pass".

---

## BEFORE / AFTER

Có thể so sánh BEFORE KNOWLEDGE OS vs AFTER KNOWLEDGE OS, nhưng phải công bằng — cùng task, cùng constraint, cùng mức độ sẵn có của nguồn, cùng bộ tiêu chí đánh giá.

**Không kết luận "cải thiện" chỉ vì output mới dài hơn.** MORE INFORMATION ≠ MORE VALUE (đã là nguyên tắc lõi tại `CLAUDE.md` §4) — áp dụng nguyên nó ở đây, không định nghĩa lại.

Lưu bản so sánh tại `07_EVALUATION/02_BEFORE_AFTER/` khi cần.

---

## BEST PRACTICE

Một output thành công **không tự động** trở thành Best Practice.

Trước khi promote thành Best Practice:

1. Xác định điều gì đã hiệu quả
2. Xác định tại sao nó hiệu quả
3. Xác minh có thể tái sử dụng được
4. Test lại khi phù hợp (có thể dùng `06_LAB/01_TESTING/`)
5. Kiểm tra mâu thuẫn với rule hiện có
6. Validate

Sau đó mới được cân nhắc lưu vào `07_EVALUATION/03_BEST_PRACTICES/`, và **chỉ** promote tiếp lên đúng lớp Brain/Skill/System tương ứng nếu thực sự có căn cứ (áp dụng cùng 4 điều kiện promotion đã có ở `05_PROJECTS/PROJECT_SYSTEM.md` § LEARNING và `06_LAB/LAB_SYSTEM.md` § LAB → BRAIN PROMOTION — không định nghĩa lại ở đây).

---

## FAILURE ANALYSIS

Khi một output fail, phân loại nguyên nhân khi có thể:

```text
SOURCE · ROUTING · REASONING · KNOWLEDGE · SKILL · EXECUTION · DESIGN · CONTENT · USER INPUT · EVALUATION DESIGN
```

*(Nhất quán với phân loại lỗi test đã có ở `06_LAB/LAB_SYSTEM.md` § TESTING — mở rộng thêm DESIGN/CONTENT/USER INPUT/EVALUATION DESIGN cho phạm vi rộng hơn của Evaluation.)*

**Không tự động sửa hệ thống chỉ vì một lần fail** — xác định đúng loại lỗi trước.

---

## CRITICAL RULE — EVALUATION KHÔNG ĐƯỢC THƯỞNG:

- Hallucination
- Sự tự tin không có căn cứ (unsupported confidence)
- Dài dòng không cần thiết
- Sự cụ thể giả (fake specificity — số liệu/chi tiết nghe "chắc chắn" nhưng không có nguồn)
- Social pressure
- Fake urgency
- Bằng chứng bịa đặt
- Sao chép đối thủ
- Sự phức tạp không cần thiết

**Một câu trả lời ngắn hơn có thể chấm điểm cao hơn nếu nó chính xác và hữu ích hơn.**

---

## EVALUATION VS LAB

```text
LAB        = thử nghiệm và test có kiểm soát
EVALUATION = đo lường chất lượng/hiệu suất của output và hệ thống
```

LAB tạo ra bằng chứng (evidence). EVALUATION diễn giải hiệu suất. Không duplicate LAB system — Evaluation không tự chạy experiment, nó đánh giá kết quả đã có.

## EVALUATION VS PROJECT

```text
PROJECT    = công việc thực tế hoàn chỉnh
EVALUATION = đánh giá chất lượng công việc đó
```

Một project có thể chứa bước đánh giá (đã có ở `05_PROJECTS/PROJECT_SYSTEM.md` § PROJECT REVIEW), nhưng **nguyên tắc đánh giá tập trung ở file này** — Project Review áp dụng các tiêu chí từ đây, không tự định nghĩa tiêu chí riêng.

---

## EVALUATION → SYSTEM IMPROVEMENT

Dùng đúng cơ chế Continuous Improvement đã có sẵn tại `CLAUDE.md` §11:

```text
BEFORE → AFTER → SCORE → LESSON → BEST PRACTICE → VALIDATE → KNOWLEDGE UPDATE
```

Không định nghĩa lại cơ chế này.

Kết quả đánh giá có thể gợi ý cải thiện cho: Brain, Voice, Skill, Content system, Design system, Sales system, hoặc Routing. **Nhưng không tự động sửa các hệ thống đó** — chỉ đề xuất, việc sửa thực sự đi qua đúng quy trình validate ở nơi tương ứng (`06_LAB/LAB_SYSTEM.md`, `05_PROJECTS/PROJECT_SYSTEM.md`).

---

## UNKNOWN

Nếu evaluation không thể xác định điều gì đó đúng hay sai vì thiếu nguồn/bằng chứng: **UNKNOWN.**

Không chấm một giả định chưa được hỗ trợ như thể nó đúng.

---

## QUALITY GATE

- [ ] Evaluation có dựa trên bằng chứng không?
- [ ] Chỉ dùng tiêu chí liên quan đến task, không ép toàn bộ 15 mục?
- [ ] Score có kèm lý do (WHY + EVIDENCE + IMPROVEMENT) không?
- [ ] Critical failure có bị "trung bình hoá" mất không (phải là KHÔNG)?
- [ ] UNKNOWN có được giữ nguyên không?
- [ ] Hallucination có bị phạt điểm không?
- [ ] Dài dòng hơn có tự động được thưởng điểm không (phải là KHÔNG)?
- [ ] Customer autonomy có được bảo vệ trong tiêu chí đánh giá không?
- [ ] Brand compliance có được đánh giá khi liên quan không?
- [ ] Product accuracy có được đánh giá khi liên quan không?
- [ ] Best Practice có bắt buộc qua validate không?
- [ ] Có tự động sửa hệ thống nào không (phải là KHÔNG)?
- [ ] Có duplicate với LAB/PROJECT/SKILLS/BRAIN không?

---

## ANTI-BLOAT

Chỉ có file này ở cấp hệ thống trong `07_EVALUATION/`. Không tạo `EVALUATION_PLAYBOOK.md`, `EVALUATION_FRAMEWORK.md`, `SCORING_SYSTEM.md`, `QUALITY_SYSTEM.md`, `QA_SYSTEM.md` trừ khi có nhu cầu thật trong tương lai. Dùng 3 thư mục con đã có sẵn (`01_SCORECARDS/`, `02_BEFORE_AFTER/`, `03_BEST_PRACTICES/`) để lưu kết quả cụ thể khi cần, không tạo thêm category mới.
