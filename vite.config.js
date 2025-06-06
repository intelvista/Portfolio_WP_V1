// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio_WP_V1/', // 👈 เปลี่ยนตามชื่อ repo ของคุณ
  plugins: [react()],
})
