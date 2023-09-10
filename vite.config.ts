import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const getBase = process.env.BASE_PATH ? { base: process.env.BASE_PATH } : {}

export default defineConfig({
  plugins: [react()],
  ...getBase,
})
