import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Redireciona /api/* para o backend FastAPI
      // Local:  http://localhost:8000
      // VPS:    troque pelo IP/domínio da sua VPS em produção
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
