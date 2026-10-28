import { marked } from 'marked'

marked.setOptions({
  gfm: true,
  breaks: true,
})

// Tách front-matter (phần --- ... --- ở đầu file) và phần markdown còn lại.
// File không có front-matter thì meta là object rỗng.
export function parseDoc(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\s*(\r?\n|$)/)
  if (!match) {
    return { meta: {}, body: raw }
  }
  return {
    meta: parseMeta(match[1]),
    body: raw.slice(match[0].length),
  }
}

// Đọc YAML tối giản: "key: value", mảng viết [a, b] hoặc danh sách "- item".
function parseMeta(text) {
  const meta = {}
  let lastKey = null

  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    // Dòng "- item" thuộc về key phía trên
    const item = line.match(/^\s*-\s+(.+)$/)
    if (item && lastKey) {
      if (!Array.isArray(meta[lastKey])) {
        meta[lastKey] = meta[lastKey] === '' ? [] : [meta[lastKey]]
      }
      meta[lastKey].push(cleanValue(item[1]))
      continue
    }

    const pair = line.match(/^([\w-]+)\s*:\s*(.*)$/)
    if (pair) {
      lastKey = pair[1]
      meta[lastKey] = cleanValue(pair[2])
    }
  }

  return meta
}

function cleanValue(value) {
  let v = value.trim()
  if (v.startsWith('[') && v.endsWith(']')) {
    return v
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean)
  }
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1)
  }
  return v
}

// Render markdown thành HTML
export function renderMarkdown(text) {
  return marked.parse(text)
}
