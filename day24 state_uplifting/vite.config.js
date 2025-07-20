import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/state_uplifting_in_React/', 
  plugins: [react()],
})
