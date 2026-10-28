---
title: Bài 9 — Tạo danh sách, bảng
desc: Tạo bảng HTML bằng thuộc tính style và viết chương trình Python sinh tệp HTML bảng điểm.
---

# Bài 9: Tạo danh sách, bảng

> **Nhóm 6 — Tin học 6** · Luyện tập & Vận dụng
> Link nộp bài: <https://kyle6317.github.io/nhom-6/bai9/Nhm6Tin.html>

## LUYỆN TẬP

**Đề bài:** Sửa lại chương trình trong Hình 9.5a, sử dụng thuộc tính `style` thay vì thuộc tính `border` để tạo viền cho bảng. Sử dụng màu xanh cho viền của ô hai dòng đầu bảng và sử dụng 3 màu đỏ, vàng, xanh cho ba chữ Toán, Vật lí và Hóa học.

**Lời giải:**

```html
<table style="border-collapse: collapse;">
    <tr>
        <th rowspan="2" style="border: 2px solid blue;">Họ tên</th>
        <th rowspan="3" style="border: 2px solid blue;">Điểm thi</th>
    </tr>
    <tr>
        <td style="border: 2px solid red;">Toán</td>
        <td style="border: 2px solid yellow;">Vật lí</td>
        <td style="border: 2px solid green;">Hóa học</td>
    </tr>
</table>
```

## VẬN DỤNG

**Đề bài:** Cho trước một bảng dữ liệu cỡ n×4, mỗi hàng tương ứng với một bộ (họ tên, điểm Toán, điểm Vật lí, điểm Hóa học). Viết chương trình Python để tạo ra tệp HTML thực hiện việc vẽ bảng tương tự như Hình 9.5 và bổ sung dữ liệu vào các hàng phía dưới.

**Lời giải:**

```python
def generate_html_table(data):
    html_content = "<table style=\"border-collapse: collapse;\">"
    # Thêm tiêu đề cho bảng
    html_content += "<tr>"
    html_content += "<th style=\"border: 2px solid blue;\">Họ tên</th>"
    html_content += "<th style=\"border: 2px solid blue;\">Điểm Toán</th>"
    html_content += "<th style=\"border: 2px solid blue;\">Điểm Vật lí</th>"
    html_content += "<th style=\"border: 2px solid blue;\">Điểm Hóa học</th>"
    html_content += "</tr>"
    # Thêm dữ liệu từ list data vào bảng
    for row in data:
        html_content += "<tr>"
        for value in row:
            html_content += f"<td style=\"border: 2px solid black;\">{value}</td>"
        html_content += "</tr>"
    html_content += "</table>"
    return html_content

# Dữ liệu ban đầu
initial_data = [
    ["Họ tên", "Điểm Toán", "Điểm Vật lí", "Điểm Hóa học"],
    ["Nguyễn Văn A", "8.5", "7.0", "9.0"],
    ["Trần Thị B", "7.0", "8.0", "8.5"]
]

# Dữ liệu mới cần bổ sung
new_data = [
    ["Lê Quang C", "6.5", "7.5", "8.0"],
    ["Phạm Thị D", "9.0", "8.5", "7.5"]
]

# Kết hợp dữ liệu cũ và mới
combined_data = initial_data + new_data

# Tạo nội dung HTML cho bảng dữ liệu
html_content = generate_html_table(combined_data)

# Lưu nội dung HTML vào tệp
with open("data_table.html", "w") as file:
    file.write(html_content)

print("Tạo tệp HTML thành công!")
```

---

*© 2026 - NHOM 6*
