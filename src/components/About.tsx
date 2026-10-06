import { useSettings } from '../settings/context'

export function About() {
  const { t } = useSettings()
  return (
    <section id="about" className="section">
      <h2>{t.about.title}</h2>
      {t.about.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="columns">
        <div className="card">
          <h3>{t.about.hobbiesTitle}</h3>
          <ul>
            {t.about.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>{t.about.languagesTitle}</h3>
          <ul>
            {t.about.spokenLanguages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
