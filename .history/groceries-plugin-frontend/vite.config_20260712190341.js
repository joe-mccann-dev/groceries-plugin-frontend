import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Source - https://stackoverflow.com/a/73560133
// Posted by Darwin Island
// Retrieved 2026-07-12, License - CC BY-SA 4.0
  server: {
    host: '127.0.0.1'
  }


})
