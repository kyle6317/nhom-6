// Khi site được nhúng trong iframe (ví dụ home.html trên GitHub Pages bọc lấy
// site đang chạy trên Cloudflare Pages), báo URL hiện tại về trang cha để
// thanh địa chỉ của trình duyệt luôn khớp với trang đang xem.
// Mở site trực tiếp trên pages.dev thì khối này không làm gì cả.
if (window.self !== window.top) {
  const send = () => {
    parent.postMessage(
      {
        type: 'bt-nhom:url',
        href: location.pathname + location.search,
        title: document.title,
      },
      '*' // trang cha nằm trên github.io, mỗi nhóm một origin nên không biết trước
    )
  }

  // Gửi sau khi trang (và script của từng trang) chạy xong để title cũng đúng
  window.addEventListener('load', send)
  // Bấm back/forward mà trình duyệt phục hồi trang từ bfcache thì gửi lại
  window.addEventListener('pageshow', send)
}
