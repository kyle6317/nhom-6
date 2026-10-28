---
title: Bài 1 — Giới thiệu bản thân bằng HTML
date: 20/09/2026
status: Đã hoàn thành
desc: Tạo trang profile cá nhân bằng HTML thuần và đưa lên GitHub Pages.
---

## Mục tiêu

- Làm quen với cấu trúc một trang HTML hoàn chỉnh
- Dùng đúng các thẻ tiêu đề, danh sách, bảng và liên kết theo ngữ nghĩa
- Đưa trang lên GitHub Pages để cả nhóm cùng review chéo

## Nội dung thực hiện

Mỗi thành viên tạo một trang `index.html` giới thiệu bản thân, gồm phần tiêu đề, ảnh đại diện, bảng thông tin liên hệ và một đoạn mô tả ngắn. Trang phải vượt qua kiểm tra của [W3C Validator](https://validator.w3.org/) không có lỗi nào.

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Giới thiệu bản thân</title>
  </head>
  <body>
    <h1>Nguyễn Minh Anh</h1>
    <p>Sinh viên lớp 21IT2 — thích vẽ UI và chụp ảnh.</p>
    <a href="mailto:minhanh211@gmail.com">Liên hệ</a>
  </body>
</html>
```

## Kết quả review chéo trong nhóm

| Thành viên | Điểm | Nhận xét |
| ---------- | :--: | -------- |
| Nguyễn Minh Anh | 10 | Bố cục rõ ràng, thẻ dùng đúng ngữ nghĩa |
| Trần Quốc Bảo | 9.5 | Quên thẻ `alt` cho ảnh đại diện |
| Lê Thị Cẩm Ly | 9.75 | Code sạch, validate W3C không lỗi |

> Điểm do cả nhóm tự review chéo trước khi nộp, không phải điểm chính thức của giảng viên.
