// Escape chuỗi trước khi chèn vào template HTML
export function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

// Ảnh đại diện dự phòng: chữ cái đầu tên, vẽ bằng SVG nhúng luôn vào src
export function avatarFallback(name) {
  const letter = (String(name || '?').trim()[0] || '?').toUpperCase()
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
    <rect width="160" height="160" fill="#e3e9f5"/>
    <text x="80" y="84" font-family="system-ui, sans-serif" font-size="64" font-weight="700"
      fill="#5b6b8c" text-anchor="middle" dominant-baseline="central">${letter}</text>
  </svg>`
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
}

// Màu badge theo trạng thái bài tập
export function badgeClass(status) {
  const s = String(status).toLowerCase()
  if (s.includes('chưa')) return 'badge-todo'
  if (s.includes('hoàn thành')) return 'badge-ok'
  if (s.includes('đang')) return 'badge-doing'
  return 'badge-todo'
}
