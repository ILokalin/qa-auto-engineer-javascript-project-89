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
    environment: 'jsdom',
    coverage: {
      provider: 'v8', // или 'istanbul'
      reporter: ['text', 'lcov', 'html'], // обязательно lcov
      reportsDirectory: './coverage',
    },
  },
  plugins: [react()],
})
