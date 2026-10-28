import './style.css'
import './lib/iframe-sync.js'
import { assignments } from './lib/data.js'
import { renderMarkdown } from './lib/md.js'
import { esc, badgeClass } from './lib/utils.js'

const slug = new URLSearchParams(location.search).get('b')
const item = assignments.find((a) => a.slug === slug)
const $ = (selector) => document.querySelector(selector)

if (!item) {
  $('#not-found').hidden = false
} else {
  const title = item.meta.title || item.slug
  document.title = `${title} — Bài tập nhóm`

  $('#head').hidden = false
  $('#title').textContent = title
  $('#meta').innerHTML = [
    item.meta.date ? `<span class="chip">Hạn nộp: ${esc(item.meta.date)}</span>` : '',
    item.meta.status ? `<span class="badge ${badgeClass(item.meta.status)}">${esc(item.meta.status)}</span>` : '',
  ].join('')

  // Bài tập render markdown trực tiếp
  $('#content').innerHTML = renderMarkdown(item.body)
}
