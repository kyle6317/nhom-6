import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Site gồm 3 trang tĩnh: trang chủ, trang thành viên, trang bài tập.
// base './' để build xong bỏ vào đâu chạy cũng được (kể cả GitHub Pages thư mục con).
export default defineConfig({
  base: './',
  build: {
    // Gộp toàn bộ CSS thành đúng 1 file
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        thanhVien: fileURLToPath(new URL('./thanh-vien.html', import.meta.url)),
        baiTap: fileURLToPath(new URL('./bai-tap.html', import.meta.url)),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
