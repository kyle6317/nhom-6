# Trang nộp bài tập nhóm

Trang web tĩnh làm bằng **Vite**, toàn bộ nội dung viết bằng **Markdown** — thêm thành viên hay bài tập chỉ cần thả thêm file `.md`, không cần đụng vào code.

## Chạy dự án

```bash
npm install     # cài 1 lần
npm run dev     # chạy dev server, xem tại địa chỉ Vite in ra
npm run build   # build ra thư mục dist/
npm run preview # xem thử thư mục dist/ sau khi build
```

## Cấu trúc thư mục

```
├── index.html            # Trang chủ (hero + danh sách thành viên + bài tập)
├── thanh-vien.html       # Trang cá nhân của một thành viên (?m=<tên-file>)
├── bai-tap.html          # Trang chi tiết một bài tập (?b=<tên-file>)
├── vite.config.js
├── public/
│   ├── hero.jpg          # Ảnh hero trang chủ — thay file này bằng ảnh của nhóm
│   ├── favicon.svg
│   └── avatars/          # Ảnh đại diện (đường dẫn ghi trong front-matter)
└── src/
    ├── style.css         # Toàn bộ CSS của site (tách riêng một file)
    ├── main.js           # Trang chủ: render danh sách từ file markdown
    ├── thanh-vien.js     # Trang thành viên
    ├── bai-tap.js        # Trang bài tập
    ├── lib/
    │   ├── md.js         # Tách front-matter + render markdown (thư viện marked)
    │   ├── data.js       # Đọc toàn bộ file .md trong src/content lúc build
    │   └── utils.js      # Hàm tiện ích (escape, avatar dự phòng, màu badge)
    └── content/
        ├── thanh-vien/   # 1 file .md = 1 thành viên
        └── bai-tap/      # 1 file .md = 1 bài tập
```

## Thêm thành viên

Tạo file `.md` mới trong `src/content/thanh-vien/`. **Tên file chính là đường dẫn trên link** (viết không dấu, không khoảng trắng), ví dụ `tran-quoc-bao.md` → `thanh-vien.html?m=tran-quoc-bao`.

```markdown
---
name: Trần Quốc Bảo
class: 21IT2
mssv: 21105207
email: bqbao.dev@gmail.com
facebook: https://facebook.com/username
github: https://github.com/username
avatar: avatars/tran-quoc-bao.png
hobbies: [Cà phê, Bóng đá]        # mảng viết ngang, hoặc:
# hobbies:                        #   mỗi dòng một "- item"
#   - Cà phê
#   - Bóng đá
order: 1                          # số nhỏ hiện trước (không có thì sort theo tên file)
---

## Giới thiệu

Phần markdown còn lại của file sẽ được render bình thường ở dưới phần thông tin.
```

Trường nào **không khai báo trong front-matter thì không được render** — cứ bỏ tự nhiên, trang không báo lỗi.

### Các trường được nhận diện sẵn

| Trường | Cách hiển thị |
| ------ | ------------- |
| `name` | Tên lớn dưới avatar |
| `avatar` | Ảnh tròn (đường dẫn trong `public/` hoặc URL ngoài) |
| `email` | Chip link, bấm mở soạn thư |
| `facebook`, `github`, `website`, `instagram`, `linkedin`, `zalo` | Chip link mở tab mới |
| `hobbies` (hoặc `sothich`) | Chip màu xanh nhạt, hỗ trợ 1 giá trị hoặc mảng |
| `order` | Sắp xếp danh sách trên trang chủ |
| Trường khác tùy ý | Chip "Tên trường: giá trị"; nếu giá trị là URL thì tự thành link |

Muốn đổi nhãn tiếng Việt cho trường mới (ví dụ `hometown` → "Quê quán"), thêm vào object `LABELS` trong `src/thanh-vien.js`.

## Thêm bài tập

Tạo file `.md` trong `src/content/bai-tap/`, ví dụ `bai-4.md` → `bai-tap.html?b=bai-4`. Phần markdown được render trực tiếp.

```markdown
---
title: Bài 4 — Form và sự kiện
date: 15/11/2026
status: Đang thực hiện
desc: Làm form đăng ký, kiểm tra dữ liệu bằng JavaScript.
---

## Yêu cầu

- ...
```

| Trường | Cách hiển thị |
| ------ | ------------- |
| `title` | Tiêu đề trang (không có thì dùng tên file) |
| `date` | Chip "Hạn nộp: ..." |
| `status` | Badge màu: có "chưa" → xám, có "hoàn thành" → xanh lá, có "đang" → vàng |
| `desc` | Dòng mô tả nhỏ trong danh sách bài tập |
| `order` | Sắp xếp danh sách |

## Đổi hình thức

- **Ảnh hero**: thay `public/hero.jpg` (ảnh ngang, khoảng 1344×768 trở lên).
- **Tên nhóm / màu chữ hero**: sửa trực tiếp trong `index.html` (khối `.hero`), tiêu đề `<title>` ở 3 file html, dòng `topbar-name` và footer ở 2 trang con.
- **Màu sắc**: sửa các biến `--accent`, `--bg`... ở đầu `src/style.css`.

## Deploy

```bash
npm run build
```

Toàn bộ trang nằm trong `dist/`. Vì `vite.config.js` đã đặt `base: './'` (đường dẫn tương đối) nên bỏ `dist/` vào đâu chạy cũng được:

- **Cloudflare Pages** (đang dùng): push code, hoặc kéo-thả `dist/`, được link kiểu `nhom-6.pages.dev`.
- **Netlify / Vercel**: tương tự, trỏ build command `npm run build`, output `dist`.

## Nộp qua GitHub Pages (home.html bọc iframe)

Nếu yêu cầu nộp bằng link `*.github.io` trong khi site thật chạy trên Cloudflare Pages, dùng file **`home.html`** nằm ở gốc project. Đây là trang độc lập (không cần build, không phụ thuộc dự án), bọc toàn màn hình site pages.dev trong iframe:

```
github.io/home.html  ──iframe──▶  nhom-6.pages.dev
```

**Cách dùng:**

1. Đưa `home.html` lên repo dùng GitHub Pages (nếu muốn là trang mặc định khi vào `github.io/<repo>/` thì đổi tên thành `index.html`).
2. **Quan trọng:** phải `npm run build` rồi deploy lại lên Cloudflare Pages sau khi project đã có `src/lib/iframe-sync.js` (đã có sẵn). Script này khiến site con tự gửi URL hiện tại về `home.html` qua `postMessage` — nếu chưa deploy lại, site vẫn mở bình thường nhưng thanh địa chỉ sẽ không tự cập nhật khi bấm link bên trong trang.

**Cơ chế đồng bộ URL (2 chiều):**

- Trong iframe → thanh địa chỉ: mỗi lần chuyển trang bên trong site, `home.html` ghi đường dẫn vào tham số `?p=`, ví dụ `home.html?p=%2Fthanh-vien.html%3Fm%3Dle-cam-li`. Tiêu đề tab trình duyệt cũng được đồng bộ theo từng trang.
- Thanh địa chỉ → iframe: mở link có `?p=...` (chia sẻ cho thầy/bạn) thì iframe mở đúng trang đó ngay từ đầu; bấm back/forward của trình duyệt cũng kéo iframe theo.

Đổi tên miền pages.dev thì sửa dòng `const SITE = '...'` trong `home.html`.

## Ghi chú kỹ thuật

- Markdown render bằng [marked](https://marked.js.org/) — GFM có bảng, danh sách check `- [x]`, code block.
- Front-matter là YAML tối giản tự xử lý trong `src/lib/md.js` (chỉ `key: value`, mảng `[a, b]` hoặc danh sách `- item`), không cần thư viện YAML.
- Nội dung do chính nhóm viết nên không có bước sanitize HTML; đừng nộp markdown từ nguồn lạ vào `src/content/`.
- File markdown nào bị thiếu/xóa mà còn ai giữ link tới sẽ thấy trang "Không tìm thấy thành viên/bài tập" kèm link về trang chủ.
