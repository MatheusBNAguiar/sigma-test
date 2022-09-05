/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    environment: 'happy-dom',
    setupFiles: 'setup-test.ts',
  },
})
