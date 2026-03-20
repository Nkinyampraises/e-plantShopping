import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping", // Keep ONLY this one (your repo name)
  plugins: [react()],
}) 
