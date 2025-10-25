import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = process.env.VITE_BASE || '/cicd_exam/'

// https://vite.dev/config/
export default defineConfig({
  base: repoBase,
  plugins: [react()],
})
