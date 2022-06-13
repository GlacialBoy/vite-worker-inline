import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^([^\s]*\.worker\.cjs)$/, replacement: process.env.INLINE ? '$1?worker&inline': '$1?worker' }
    ]
  },
  build: {
    sourcemap: true,
    minify: false,
  }
})
