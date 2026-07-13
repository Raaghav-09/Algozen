import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  // This is a JavaScript project, so the `@/*` path alias lives in jsconfig.json.
  // Point vite-tsconfig-paths at it so the build and the editor share one source of truth.
  plugins: [react(), tailwindcss(), tsconfigPaths({ configNames: ['jsconfig.json'] })],
})
