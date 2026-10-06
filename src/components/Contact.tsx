import { links } from '../data/links'
import { useSettings } from '../settings/context'
import { ExternalLink } from './ExternalLink'

// R3: LinkedIn and GitHub only — no email, no phone, no CV download.
export function Contact() {
  const { t } = useSettings()
  return (
    <section id="contact" className="section">
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <div className="project-links">
        <ExternalLink className="button" href={links.linkedin}>
          LinkedIn
        </ExternalLink>
        <ExternalLink className="button secondary" href={links.github}>
          GitHub
        </ExternalLink>
      </div>
    </section>
  )
}
