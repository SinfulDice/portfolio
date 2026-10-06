import react from '@vitejs/plugin-react'
// `vitest/config` is Vite's defineConfig plus the `test` settings used by Vitest.
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from https://sinfuldice.github.io/portfolio/
  base: '/portfolio/',
  test: {
    // jsdom = a fake browser, so tests can render the page without opening Chrome.
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
