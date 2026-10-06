import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

// Renders the whole site, plus a "user" that can click and type like a visitor.
export function renderApp() {
  const user = userEvent.setup()
  return { user, ...render(<App />) }
}
