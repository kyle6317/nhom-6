import { parseDoc } from './md.js'

// Đọc toàn bộ file markdown trong src/content lúc build.
// Muốn thêm thành viên / bài tập: chỉ cần thêm file .md vào thư mục tương ứng.
const memberFiles = import.meta.glob('../content/thanh-vien/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const assignmentFiles = import.meta.glob('../content/bai-tap/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Tên file (không đuôi .md) chính là slug dùng trên link, ví dụ bai-1
const slugOf = (path) => path.split('/').pop().replace(/\.md$/, '')

// "order" trong front-matter để ép thứ tự; không có thì sort theo tên file
function byOrder(a, b) {
  const oa = a.meta.order ?? 999
  const ob = b.meta.order ?? 999
  return oa - ob || a.slug.localeCompare(b.slug, undefined, { numeric: true })
}

function collect(files) {
  return Object.entries(files)
    .map(([path, raw]) => ({ slug: slugOf(path), ...parseDoc(raw) }))
    .sort(byOrder)
}

export const members = collect(memberFiles)
export const assignments = collect(assignmentFiles)
