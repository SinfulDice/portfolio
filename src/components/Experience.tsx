import { useSettings } from '../settings/context'

export function Experience() {
  const { t } = useSettings()
  const { bachelor, internship } = t.experience
  return (
    <section id="experience" className="section">
      <h2>{t.experience.title}</h2>
      <div className="columns">
        <div className="card">
          <h3>{t.experience.educationTitle}</h3>
          <p className="item-title">{bachelor.title}</p>
          <p className="muted">
            {bachelor.place} · {bachelor.dates}
          </p>
          <p>{t.experience.report}</p>
        </div>
        <div className="card">
          <h3>{t.experience.workTitle}</h3>
          <p className="item-title">{internship.title}</p>
          <p className="muted">
            {internship.place} · {internship.dates}
          </p>
          <p>{internship.tasks}</p>
          <p>{t.experience.jobs}</p>
        </div>
      </div>
    </section>
  )
}
