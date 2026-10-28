---
title: Bài 7 — HTML và cấu trúc trang web
desc: Quan hệ cha – con giữa các phần tử HTML, vẽ cây thông tin trang web và soạn thảo HTML trực tuyến.
---

# Bài 7: HTML và cấu trúc trang web

> **Nhóm 6 — Tin học 6** · Luyện tập & Vận dụng
> Link nộp bài: <https://kyle6317.github.io/nhom-6/bai7/Nhm6Tin.html>

## LUYỆN TẬP

### Câu 1. Tìm ví dụ về phần tử HTML không thể lồng nhau, tức là không thể có quan hệ cha – con trong cây thông tin của trang web.

**Trả lời:**

Một số phần tử HTML không thể chứa một số phần tử khác theo quy tắc HTML:

- Thẻ `<p>` **không được chứa** thẻ `<p>` khác.
- Thẻ `<h1>` không nên chứa các phần tử tiêu đề khác như `<h2>`.
- Thẻ `<ul>` chỉ nên chứa trực tiếp các phần tử `<li>` và một số phần tử hỗ trợ như `<script>` hoặc `<template>`, không chứa trực tiếp thẻ `<p>`.

**Ví dụ không hợp lệ:**

```html
<p>Đoạn văn thứ nhất
    <p>Đoạn văn thứ hai</p>
</p>
```

Hai thẻ `<p>` không thể lồng nhau theo quy tắc HTML. Trình duyệt có thể tự đóng thẻ `<p>` đầu tiên khi gặp thẻ `<p>` thứ hai.

### Câu 2. Soạn tệp HTML hiển thị một văn bản đơn giản và vẽ cây thông tin các phần tử HTML.

**Trả lời:**

Ví dụ, chọn văn bản có nội dung: *"Xin chào! Chào mừng bạn đến với trang web của em."*

#### a) Mã HTML

Lưu đoạn mã sau vào tệp `index.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang web của em</title>
</head>
<body>
    <h1>Xin chào!</h1>
    <p>Chào mừng bạn đến với trang web của em.</p>
</body>
</html>
```

#### b) Cây thông tin của trang web

```text
html
├── head
│   ├── meta
│   └── title
│       └── "Trang web của em"
└── body
    ├── h1
    │   └── "Xin chào!"
    └── p
        └── "Chào mừng bạn đến với trang web của em."
```

Cây trên thể hiện quan hệ cha – con giữa các phần tử HTML. Phần tử `html` là **gốc của cây**, `head` và `body` là các phần tử con trực tiếp của nó.

## VẬN DỤNG

### Câu 1. Tìm trên mạng các trang web hỗ trợ soạn thảo HTML trực tuyến.

**Trả lời:**

Một số trang web hỗ trợ soạn thảo HTML trực tuyến:

1. **W3Schools Tryit Editor:** <https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default> — cho phép viết mã HTML, chạy thử và xem kết quả ngay trên trình duyệt.
2. **CodePen:** <https://codepen.io/> — hỗ trợ soạn thảo HTML, CSS, JavaScript và xem trước trang web.
3. **JSFiddle:** <https://jsfiddle.net/> — hỗ trợ viết và chạy thử mã HTML, CSS, JavaScript.

Các công cụ trên giúp học sinh thực hành lập trình web mà không cần cài đặt phần mềm soạn thảo chuyên dụng.

### Câu 2. Soạn thảo trang web có nội dung như Hình 7.7.

**Trả lời:**

Do đề bài chưa cung cấp Hình 7.7, dưới đây là mẫu HTML minh họa cách chèn hình ảnh vào trang web.

#### a) Mã HTML

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Lịch sử phát triển HTML</title>
</head>
<body>
    <h3>Lịch sử phát triển HTML</h3>
    <p>
        Các chuẩn HTML của trang web hiện nay được nhà vật lí
        Tim Berners-Lee đưa ra lần đầu tiên vào những năm 1990
        của thế kỉ XX tại Trung tâm Vật lí Hạt nhân CERN.
    </p>
    <p>
        Ý tưởng ban đầu của Berners-Lee là muốn thiết lập một
        chuẩn chung để thể hiện và chia sẻ các văn bản có thể
        trao đổi bên trong cơ quan CERN.
    </p>
    <p>
        Hình ảnh sau là sơ đồ thông tin mà Tim Berners-Lee đưa ra
        lần đầu tiên để minh họa cho ý tưởng của mình. Trong sơ đồ
        này, lần đầu tiên xuất hiện cụm từ "hypertext" (siêu văn bản).
    </p>
    <img src="lichsuHTML.png" alt="Sơ đồ lịch sử phát triển HTML" width="600">
    <p>
        Phiên bản đầu tiên của HTML được thiết lập vào cuối năm
        1991 mang tên "Các thẻ HTML". Văn bản này do chính Tim
        Berners-Lee biên soạn.
    </p>
    <p>
        Từ đó, các phiên bản tiếp theo của HTML lần lượt ra đời
        cùng với sự phát triển của công nghệ Internet.
    </p>
    <p>
        Phiên bản hiện tại là HTML5 ra đời năm 2014.
    </p>
</body>
</html>
```

---

*© 2026 - NHOM 6*
