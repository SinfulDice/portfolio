import type { ReactNode } from 'react'

// Link to another website: opens in a new tab (R27). `noopener noreferrer` stops the
// other site from controlling this tab or seeing where the visitor came from.
export function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
