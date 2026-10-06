// Small safe wrappers around localStorage (the browser's little key/value store).
// Some browsers block it (private mode, strict settings): then we just don't remember
// the visitor's choices, but the site keeps working (R10).

export function readSetting(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function saveSetting(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage blocked: the choice simply won't be remembered.
  }
}
