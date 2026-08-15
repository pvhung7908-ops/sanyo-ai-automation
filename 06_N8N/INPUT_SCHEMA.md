# Sanyo Yusoki Vietnam — Input Schema

## 1. Minimum Input

Required:

topic
customer_segment
customer_problem
platform
content_type

Optional:

customer_insight
location
product
campaign
reference_asset
tone
duration
cta

---

## 2. Example

{
  "topic": "Nhà ống nhỏ có nên lắp thang máy?",
  "customer_segment": "Gia đình nhiều thế hệ",
  "customer_problem": "Nhà nhỏ nhưng cần di chuyển giữa nhiều tầng",
  "platform": "TikTok",
  "content_type": "Educational",
  "location": "Hanoi",
  "product": "Sanyo Yusoki residential elevator",
  "duration": 60
}

---

## 3. Validation

Reject if:

topic is empty
customer_segment is empty
customer_problem is empty
platform is empty

Generate content_id after validation.

Format:

SYV-YYYY-NNNNNN
