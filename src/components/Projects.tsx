import { projects } from '../data/projects'
import { useSettings } from '../settings/context'
import { ExternalLink } from './ExternalLink'

export function Projects() {
  const { t } = useSettings()
  return (
    <section id="projects" className="section">
      <h2>{t.projects.title}</h2>
      <div className="project-list">
        {projects.map((project) => {
          const text = t.projects.items[project.id]
          return (
            // R26: title, description, technologies, GitHub link, demo only if it exists, image.
            <article key={project.id} className="card project" aria-labelledby={`project-${project.id}`}>
              {project.image ? (
                <img className="project-image" src={project.image} alt={text.title} />
              ) : (
                <div className="project-image placeholder" role="img" aria-label={text.title}>
                  <span aria-hidden="true">{text.title.charAt(0)}</span>
                </div>
              )}
              <h3 id={`project-${project.id}`}>{text.title}</h3>
              <p>{text.description}</p>
              <ul className="badges" aria-label={t.projects.techLabel}>
                {project.tech.map((tech) => (
                  <li key={tech} className="badge">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <ExternalLink className="button" href={project.repo}>
                  {t.projects.code}
                </ExternalLink>
                {project.demo && (
                  <ExternalLink className="button secondary" href={project.demo}>
                    {t.projects.demo}
                  </ExternalLink>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
