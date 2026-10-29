---
title: Bài 8 — Định dạng văn bản
desc: Dùng thẻ strong, em, h1, h2, ul, li để định dạng văn bản và chọn màu cho tiêu đề bài thơ.
---

# Bài 8: Định dạng văn bản

## LUYỆN TẬP

### Luyện tập 1. Hãy sửa lại phần tử sau để làm nổi bật ý chính của câu

Phần tử cần sửa:

```html
<p> thẻ strong vào thẻ em được sử dụng để nhấn mạnh vào nội dung trong phần tử. Thẻ B chỉ có tác dụng in đậm văn bản <p>
```

**Lời giải:**

```html
<p><strong>Thẻ strong</strong> vào <em>thẻ em</em> được sử dụng để nhấn mạnh vào nội dung trong phần tử. Thẻ <strong>B</strong> chỉ có tác dụng in đậm văn bản.</p>
```

### Luyện tập 2. Trình bày đoạn văn bản sau bằng mã HTML

Đoạn văn bản cần trình bày:

- **INTERNET TỐC ĐỘ CAO**
- *Dịch vụ Internet tốc độ cao là dịch vụ internet cáp quang chất lượng cao, ổn định, giá cả hợp lí.*
- **Các tính năng nổi bật:**
  - Tốc độ siêu cao từ 150 MBps trở lên
  - Lắp đặt nhanh chóng trong 24h
  - Phù hợp với cá nhân/Hộ gia đình
  - Tặng modem 2 băng tần
  - Miễn phí lắp đặt hỗ trợ 24/7

**Lời giải:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INTERNET TỐC ĐỘ CAO</title>
</head>
<body>
    <h1>INTERNET TỐC ĐỘ CAO</h1>
    <p><em>Dịch vụ Internet tốc độ cao là dịch vụ internet cáp quang
    chất lượng cao, ổn định, giá cả hợp lí.</em></p>
    <h2><strong>Các tính năng nổi bật:</strong></h2>
    <ul>
        <li>Tốc độ siêu cao từ 150 MBps trở lên</li>
        <li>Lắp đặt nhanh chóng trong 24h</li>
        <li>Phù hợp với cá nhân/Hộ gia đình</li>
        <li>Tặng modem 2 băng tần</li>
        <li>Miễn phí lắp đặt hỗ trợ 24/7</li>
    </ul>
</body>
</html>
```

## VẬN DỤNG

### Vận dụng 1. Hãy chỉ ra các bước cần thực hiện để sử dụng một màu cụ thể trong bức ảnh làm màu cho tiêu đề một bài thơ

**Lời giải:**

1. **Chọn màu cụ thể:** Trước tiên, bạn cần quyết định màu sắc bạn muốn sử dụng cho tiêu đề của bài thơ.
2. **Chọn ảnh nền:** Chọn một bức ảnh phù hợp để sử dụng làm nền cho tiêu đề. Bạn cũng có thể sử dụng một ảnh trắng đơn giản và thêm màu sắc sau đó.
3. **Tạo tiêu đề trong HTML:** Sử dụng thẻ `<h1>`, `<h2>`, hoặc `<h3>` để tạo tiêu đề của bài thơ.
4. **Thêm ảnh nền và thuộc tính `color`** để thay đổi màu chữ.

### Vận dụng 2. Hãy đưa ra các định dạng một đoạn văn bản để được kết quả như hình

*(Hình minh họa trong đề bài — xem bài nộp gốc trên GitHub Pages.)*

**Lời giải:**

- Định dạng chữ đậm
- Định dạng chữ thường
- Định dạng cỡ chữ

---

*© 2026 - NHOM 6*
