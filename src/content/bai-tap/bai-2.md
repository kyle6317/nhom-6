---
title: Bài 2 — CSS và Flexbox
date: 28/10/2026
status: Đang thực hiện
desc: Dựng layout trang tin tức bằng Flexbox, viết style.css riêng, responsive 2 breakpoint.
---

## Yêu cầu

1. Dựng layout *header — sidebar — nội dung — footer* bằng Flexbox (không dùng float)
2. Responsive tối thiểu 2 breakpoint: 768px và 480px
3. Toàn bộ style phải nằm trong một file `style.css` riêng, không viết CSS inline

## Tiến độ của nhóm

- [x] Khung layout chung của trang
- [x] Header và menu điều hướng
- [x] Chia cột phần danh sách bài viết
- [ ] Responsive cho màn hình nhỏ
- [ ] Viết mô tả trong README

## Một đoạn CSS mẫu từ bài

Phần card bài viết dùng `flex-wrap` để tự xuống dòng khi hẹp màn hình:

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 240px;
  border: 1px solid #e5e8ee;
  border-radius: 12px;
}
```

## Ghi chú

Phần khó nhất là giữ khoảng cách đều giữa các card khi số card mỗi hàng khác nhau. Nhóm đã thử `justify-content: space-between` nhưng khi còn lẻ một card thì nó bị đẩy hẳn sang phải, cuối cùng chọn cách dùng `gap` như trong đoạn code trên.
