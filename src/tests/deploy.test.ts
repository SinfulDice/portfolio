import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8')

describe('Deployment', () => {
  it('R1: a GitHub Actions workflow publishes the site on GitHub Pages at each push to main', () => {
    expect(workflow).toMatch(/push:\s*\n\s*branches: \[main\]/)
    expect(workflow).toContain('actions/deploy-pages')
    expect(workflow).toMatch(/path: dist/)
  })

  it('R33: lint, tests and build run before publishing, and publishing waits for them', () => {
    const lint = workflow.indexOf('npm run lint')
    const test = workflow.indexOf('npm test')
    const build = workflow.indexOf('npm run build')
    const upload = workflow.indexOf('actions/upload-pages-artifact')
    expect(lint).toBeGreaterThan(-1)
    expect(lint).toBeLessThan(test)
    expect(test).toBeLessThan(build)
    expect(build).toBeLessThan(upload)
    expect(workflow).toMatch(/deploy:\s*\n\s*needs: check-and-build/)
  })
})
