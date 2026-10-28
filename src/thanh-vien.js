import './style.css'
import './lib/iframe-sync.js'
import { members } from './lib/data.js'
import { renderMarkdown } from './lib/md.js'
import { esc, avatarFallback } from './lib/utils.js'

const slug = new URLSearchParams(location.search).get('m')
const member = members.find((m) => m.slug === slug)
const $ = (selector) => document.querySelector(selector)

// Các trường dùng riêng (tên, avatar...), không render thành chip
const RESERVED = ['name', 'avatar', 'order', 'title', 'desc']

// Chip link: email mở mailto, còn lại mở tab mới
const LINK_LABELS = {
  email: 'Email',
  facebook: 'Facebook',
  github: 'GitHub',
  website: 'Website',
  homepage: 'Homepage',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  zalo: 'Zalo',
}

// Nhãn tiếng Việt cho một số trường hay gặp
const LABELS = {
  class: 'Lớp',
  lop: 'Lớp',
  mssv: 'MSSV',
  masv: 'MSSV',
  phone: 'SĐT',
  sdt: 'SĐT',
  age: 'Tuổi',
  birthday: 'Ngày sinh',
  hometown: 'Quê quán',
  major: 'Ngành',
  school: 'Trường',
}

// Key lạ (không nằm trong danh sách trên) -> viết hoa chữ cái đầu làm nhãn
function humanKey(key) {
  const s = key.replaceAll(/[-_]/g, ' ').trim()
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Sinh danh sách chip từ front-matter.
// Trường nào không có trong file markdown thì tự động bỏ qua.
function chips(meta) {
  const out = []
  for (const [key, value] of Object.entries(meta)) {
    if (RESERVED.includes(key) || value == null || value === '') continue

    if (key === 'hobbies' || key === 'sothich' || key === 'so_thich') {
      for (const h of [].concat(value)) {
        if (!h) continue
        out.push(`<span class="chip chip-hobby">${esc(h)}</span>`)
      }
    } else if (LINK_LABELS[key]) {
      const href = key === 'email' ? `mailto:${value}` : value
      const target = key === 'email' ? '' : ' target="_blank" rel="noopener"'
      const text = key === 'email' ? esc(value) : `${LINK_LABELS[key]} ↗`
      out.push(`<a class="chip chip-link" href="${esc(href)}"${target}>${text}</a>`)
    } else if (/^https?:\/\//i.test(String(value))) {
      out.push(`<a class="chip chip-link" href="${esc(value)}" target="_blank" rel="noopener">${esc(humanKey(key))} ↗</a>`)
    } else {
      const label = LABELS[key]
      out.push(`<span class="chip">${label ? `${label}: ` : ''}${esc(value)}</span>`)
    }
  }
  return out.join('')
}

if (!member) {
  $('#not-found').hidden = false
} else {
  const name = member.meta.name || member.slug
  document.title = `${name} — Thành viên nhóm`

  $('#profile').hidden = false
  $('#avatar').src = member.meta.avatar || avatarFallback(name)
  $('#avatar').alt = name
  $('#name').textContent = name
  $('#chips').innerHTML = chips(member.meta)

  // Phần markdown còn lại của file, render như bình thường
  $('#content').innerHTML = renderMarkdown(member.body)
}
