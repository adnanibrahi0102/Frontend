import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/users':'https://backend-three-kohl.vercel.app/',
    }
  },
  plugins: [react()],
})
