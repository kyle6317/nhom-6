import './style.css'
import { members, assignments } from './lib/data.js'
import { esc, avatarFallback, badgeClass } from './lib/utils.js'

// Danh sách thành viên trên trang chủ
const grid = document.querySelector('#member-grid')
grid.innerHTML = members.map((m) => `
  <a class="card" href="thanh-vien.html?m=${encodeURIComponent(m.slug)}">
    <img class="card-avatar" src="${esc(m.meta.avatar) || avatarFallback(m.meta.name)}" alt="${esc(m.meta.name || m.slug)}" loading="lazy" />
    <h3>${esc(m.meta.name || m.slug)}</h3>
    ${m.meta.class ? `<p class="card-sub">${esc(m.meta.class)}</p>` : ''}
    <span class="card-more">Xem trang cá nhân →</span>
  </a>
`).join('')

if (!members.length) {
  grid.innerHTML = '<p class="empty">Chưa có thành viên nào. Thêm file .md vào src/content/thanh-vien/ nhé.</p>'
}

// Danh sách bài tập trên trang chủ
const rows = document.querySelector('#assignment-list')
rows.innerHTML = assignments.map((a, i) => `
  <a class="row" href="bai-tap.html?b=${encodeURIComponent(a.slug)}">
    <span class="row-num">${String(i + 1).padStart(2, '0')}</span>
    <span class="row-main">
      <span class="row-title">${esc(a.meta.title || a.slug)}</span>
      ${a.meta.desc ? `<span class="row-desc">${esc(a.meta.desc)}</span>` : ''}
    </span>
    ${a.meta.date ? `<span class="row-date">${esc(a.meta.date)}</span>` : ''}
    ${a.meta.status ? `<span class="badge ${badgeClass(a.meta.status)}">${esc(a.meta.status)}</span>` : ''}
  </a>
`).join('')

if (!assignments.length) {
  rows.innerHTML = '<p class="empty">Chưa có bài tập nào. Thêm file .md vào src/content/bai-tap/ nhé.</p>'
}
