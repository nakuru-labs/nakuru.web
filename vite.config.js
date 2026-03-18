import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Set this to your GitHub repo name if deploying to GitHub Pages
  // e.g. base: '/nakuru-web/' for username.github.io/nakuru-web
  // Leave as '/' if using a custom domain (nakurulabs.com)
  base: '/',
})
