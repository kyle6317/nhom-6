---
title: Bài 4 — Giao thức mạng
desc: Quy tắc gọi điện thoại minh họa giao thức, chuyển đổi địa chỉ IP, tìm hiểu DNS và lệnh ping.
---

# Bài 4: Giao thức mạng

## LUYỆN TẬP

### Câu 1. Nêu các quy tắc khi gọi điện thoại bằng máy để bàn để làm rõ giao thức gọi điện thoại.

**Trả lời:**

Các quy tắc khi gọi điện thoại bằng máy để bàn:

1. **Nhấc ống nghe:** Hệ thống phát tín hiệu mời quay số.
2. **Quay số:** Người gọi nhập số điện thoại của người nhận.
3. **Chờ kết nối:** Hệ thống kiểm tra số điện thoại và kết nối cuộc gọi.
4. **Phát tín hiệu:**
   - Nếu người nhận chưa nhấc máy, điện thoại người nhận reo chuông, người gọi nghe nhạc chờ hoặc tín hiệu chờ.
   - Nếu số điện thoại bận, hệ thống phát tín hiệu báo bận.
   - Nếu số điện thoại không hợp lệ hoặc có lỗi, hệ thống phát tín hiệu báo lỗi.
5. **Nói chuyện:** Khi người nhận nhấc máy, hai bên có thể trao đổi thông tin.
6. **Kết thúc cuộc gọi:** Một trong hai bên đặt ống nghe xuống để kết thúc cuộc gọi.

Những quy tắc trên giúp hai bên thực hiện cuộc gọi theo một trình tự thống nhất, tương tự như cách các thiết bị mạng tuân theo giao thức truyền thông.

### Câu 2. Xác định địa chỉ IP tương ứng ở dạng thập phân và nhị phân.

**Trả lời:**

#### a) Chuyển địa chỉ IP nhị phân sang thập phân

Địa chỉ IP nhị phân:

```
11000000 10101000 00001101 11010010
```

Mỗi nhóm 8 bit được chuyển sang một số thập phân:

| Nhóm 8 bit | Giá trị thập phân |
|------------|-------------------|
| `11000000` | 192 |
| `10101000` | 168 |
| `00001101` | 13 |
| `11010010` | 210 |

**Kết quả:** Địa chỉ IP thập phân là **192.168.13.210**.

#### b) Chuyển địa chỉ IP thập phân sang nhị phân

Địa chỉ IP thập phân: `131.214.23.16`

Chuyển từng số sang dạng nhị phân 8 bit:

| Số thập phân | Nhị phân 8 bit |
|--------------|----------------|
| 131 | `10000011` |
| 214 | `11010110` |
| 23 | `00010111` |
| 16 | `00010000` |

**Kết quả:** Địa chỉ IP nhị phân là:

```
10000011 11010110 00010111 00010000
```

## VẬN DỤNG

### Câu 1. Tìm hiểu giao thức tên miền DNS.

**Trả lời:**

#### a) Lợi ích của việc dùng tên miền thay thế cho địa chỉ IP

- Tên miền dễ nhớ và dễ sử dụng hơn địa chỉ IP.
- Giúp người dùng truy cập website thuận tiện mà không cần ghi nhớ các dãy số IP.
- DNS giúp chuyển đổi tên miền thành địa chỉ IP tương ứng để các thiết bị có thể tìm đến máy chủ cần truy cập.

**Ví dụ:** Người dùng có thể nhập `google.com` thay vì phải nhớ địa chỉ IP của máy chủ Google.

#### b) Các lớp tên miền

Tên miền được chia thành nhiều nhóm, trong đó có các nhóm phổ biến:

| Nhóm tên miền | Ví dụ |
|---------------|-------|
| **Tên miền cấp cao nhất dùng chung (gTLD)** | `.com`, `.org`, `.net`, `.edu` |
| **Tên miền cấp cao nhất theo mã quốc gia (ccTLD)** | `.vn` của Việt Nam, `.jp` của Nhật Bản, `.uk` của Vương quốc Anh |
| **Tên miền cấp dưới** | Các phần tên miền nằm bên trái tên miền cấp cao hơn, chẳng hạn `edu.vn` hoặc `example.com` |

#### c) Tổ chức nào phụ trách việc cấp tên miền ở Việt Nam?

Tại Việt Nam, **Trung tâm Internet Việt Nam (VNNIC)** thuộc Bộ Khoa học và Công nghệ là đơn vị quản lý tài nguyên Internet quốc gia, trong đó có tên miền quốc gia `.vn`.

Người dùng có thể đăng ký tên miền `.vn` thông qua các nhà đăng ký tên miền `.vn` được công nhận.

### Câu 2. Tìm hiểu lệnh ping và thử nghiệm sử dụng lệnh này.

**Trả lời:**

#### a) Lệnh ping là gì?

`ping` là lệnh mạng dùng để kiểm tra khả năng liên lạc giữa máy tính của em với một máy tính hoặc thiết bị mạng khác thông qua mạng IP.

Lệnh này thường gửi các gói tin yêu cầu phản hồi **ICMP Echo Request** và chờ nhận **ICMP Echo Reply**.

#### b) Cách sử dụng lệnh ping

Trên Linux, mở Terminal và nhập:

```bash
ping -c 4 google.com
```

Lệnh trên gửi 4 gói tin đến máy chủ tương ứng rồi kết thúc.

#### c) Cách đọc kết quả

Nếu kết nối thành công, kết quả có dạng:

```text
❯ ping -c 4 google.com
PING google.com (2404:6800:4003:c11::65) 56 data bytes
64 bytes from se-in-f101.1e100.net (2404:6800:4003:c11::65): icmp_seq=1 ttl=109 time=35.1 ms
64 bytes from se-in-f101.1e100.net (2404:6800:4003:c11::65): icmp_seq=2 ttl=109 time=61.6 ms
64 bytes from se-in-f101.1e100.net (2404:6800:4003:c11::65): icmp_seq=3 ttl=109 time=35.3 ms
64 bytes from se-in-f101.1e100.net (2404:6800:4003:c11::65): icmp_seq=4 ttl=109 time=34.8 ms

--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 34.829/41.716/61.601/11.481 ms
```

*(Ảnh chụp màn hình kết quả lệnh ping — xem bài nộp gốc trên GitHub Pages.)*

Kết quả trên cho biết máy tính nhận được phản hồi. Giá trị `time` thể hiện **thời gian khứ hồi của gói tin**.

Nếu xuất hiện thông báo hết thời gian chờ hoặc không thể tìm thấy tên máy chủ, có thể kết nối mạng gặp vấn đề, máy chủ không phản hồi hoặc DNS không phân giải được tên miền.

---

*© 2026 - NHOM 6*
