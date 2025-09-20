import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5002,
    host: true, // écoute sur toutes les interfaces
    allowedHosts: [
      'portfolio.nafety.online' // autorise ton domaine
    ]
  }
})
