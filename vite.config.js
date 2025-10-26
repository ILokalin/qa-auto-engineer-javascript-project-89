import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    watch: false,
    globals: true,
    server: {
      deps: {
        inline: ['@hexlet/chatbot-v2'],
      },
    },
    setupFiles: './vitest.setup.js',
    environment: 'jsdom',
  },
  plugins: [react()],
})