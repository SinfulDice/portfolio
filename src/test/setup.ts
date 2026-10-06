// Runs before the tests: adds matchers like toBeInTheDocument(), and resets the page
// and the browser storage after each test so tests don't affect each other.
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.removeAttribute('lang')
  document.documentElement.removeAttribute('data-theme')
  vi.restoreAllMocks()
})
