import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: For GitHub Pages set base to '/<repo-name>/' or set VITE_BASE env.
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    port: 5173
  }
}))
