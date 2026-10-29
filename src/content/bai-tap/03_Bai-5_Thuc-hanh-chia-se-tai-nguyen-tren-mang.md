---
title: Bài 5 — Thực hành chia sẻ tài nguyên trên mạng
desc: Chia sẻ tệp, thư mục, máy in và toàn bộ ổ đĩa qua mạng LAN với các quyền Read, Read/Write.
---

# Bài 5: Thực hành chia sẻ tài nguyên trên mạng

## LUYỆN TẬP

### Câu 1. Thực hành chia sẻ tệp và thư mục

**Trả lời:**

Thực hiện lần lượt các bước sau trên **hai máy tính A và B trong cùng một mạng LAN**.

#### a) Chia sẻ với quyền Read (chỉ đọc)

- **Máy A:** Tạo một thư mục chứa các thư mục con và tệp văn bản. Nhấn chuột phải vào thư mục, chọn `Properties → Sharing → Advanced Sharing`, tích chọn `Share this folder` và thiết lập quyền chỉ đọc (`Read`).
- **Máy B:** Truy cập thư mục chia sẻ của máy A qua mạng LAN.

**Kết quả:** Máy B có thể mở và đọc tệp nhưng không thể sửa hoặc xóa tệp trong thư mục chia sẻ bằng quyền này.

#### b) Chia sẻ với quyền Read/Write (đọc và ghi)

- **Máy A:** Mở phần thiết lập chia sẻ và cấp thêm quyền `Change` cho người dùng được phép truy cập.
- **Máy B:** Mở lại thư mục chia sẻ, thử đọc và chỉnh sửa tệp văn bản.

**Kết quả:** Máy B có thể đọc, sửa và tạo tệp trong phạm vi quyền được cấp.

#### c) Hủy chia sẻ

- **Máy A:** Mở `Properties → Sharing → Advanced Sharing`, bỏ chọn `Share this folder` rồi nhấn `OK`.
- **Máy B:** Thử truy cập lại thư mục đã chia sẻ.

**Kết quả:** Máy B không còn truy cập được thư mục thông qua kết nối chia sẻ đó.

#### d) Đảo vai trò

Máy B thực hiện lần lượt các bước chia sẻ với quyền `Read`, `Read/Write` và hủy chia sẻ. Máy A kiểm tra kết quả tương tự.

> **Lưu ý:** Quyền truy cập thực tế còn phụ thuộc vào quyền chia sẻ và quyền bảo mật của thư mục (*Security permissions*).

### Câu 2. Thực hành chia sẻ máy in

**Trả lời:**

Thực hiện theo các bước sau — **Nhóm 1 chia sẻ máy in cho nhóm 2**:

1. Kết nối máy in với máy tính của nhóm 1 và cài đặt trình điều khiển máy in.
2. Trên máy tính nhóm 1, mở phần quản lý máy in, chọn máy in cần chia sẻ.
3. Mở `Printer properties → Sharing`, tích chọn `Share this printer` và đặt tên chia sẻ.
4. Trên máy tính nhóm 2, thêm máy in mạng bằng cách tìm máy in được chia sẻ hoặc nhập đường dẫn mạng của máy tính nhóm 1.
5. Thử in một tài liệu để kiểm tra.

**Đổi lại vai trò:** Nhóm 2 chia sẻ máy in, nhóm 1 kết nối và thực hiện in thử tương tự.

**Kết quả:** Các máy tính trong mạng có thể sử dụng chung máy in mà không cần kết nối trực tiếp với máy in trên từng máy.

## VẬN DỤNG

### Câu 1. Tìm hiểu và thực hiện việc chia sẻ toàn bộ một đĩa

**Trả lời:**

Có thể chia sẻ toàn bộ một ổ đĩa trong Windows để các máy tính khác truy cập các tệp và thư mục bên trong ổ đĩa đó.

#### Các bước thực hiện

| Bước | Thao tác |
|:----:|----------|
| **Bước 1** | Mở File Explorer, nhấn chuột phải vào ổ đĩa muốn chia sẻ, chọn `Properties`. |
| **Bước 2** | Chọn thẻ `Sharing`, nhấn `Advanced Sharing`. |
| **Bước 3** | Tích chọn `Share this folder`, sau đó đặt tên chia sẻ cho ổ đĩa. |
| **Bước 4** | Nhấn `Permissions` để thiết lập quyền truy cập (chi tiết bảng dưới đây). |
| **Bước 5** | Nhấn `Apply → OK` để lưu thiết lập. |

Các quyền truy cập thiết lập ở **Bước 4**:

| Quyền | Ý nghĩa |
|-------|---------|
| `Read` | Chỉ đọc dữ liệu. |
| `Change` | Đọc, tạo, sửa và xóa dữ liệu trong phạm vi quyền được cấp. |
| `Full Control` | Có toàn quyền theo các quyền được thiết lập. |

> Nên chỉ cấp quyền cần thiết cho người dùng được phép truy cập.

#### Cách truy cập từ máy tính khác

Trên máy tính cùng mạng LAN, mở File Explorer và nhập vào thanh địa chỉ:

```
\\Tên-máy-tính\Tên-chia-sẻ
```

Ví dụ, nếu máy tính có tên `PC01` và tên chia sẻ là `Data`, nhập:

```
\\PC01\Data
```

Nếu hệ thống yêu cầu, người dùng cần xác thực bằng tài khoản được phép truy cập.

#### Kết luận

Chia sẻ toàn bộ ổ đĩa cho phép máy tính khác truy cập nhiều tệp và thư mục trong ổ đĩa đó. Vì vậy, cần thiết lập quyền phù hợp để bảo vệ dữ liệu, tránh chia sẻ thông tin riêng tư hoặc dữ liệu quan trọng ngoài ý muốn.

---

*© 2026 - NHOM 6*
