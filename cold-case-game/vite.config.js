import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/,
// so the build needs the repo name as its base path or every asset 404s.
// The deploy workflow sets BASE_PATH; local dev and preview stay at the root.
const base = process.env.BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
