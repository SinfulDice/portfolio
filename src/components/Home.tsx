import { useSettings } from '../settings/context'

export function Home() {
  const { t } = useSettings()
  return (
    <section id="home" className="section home">
      {/* R20: placeholder until the real photo is provided (then: <img src=… alt=…>). */}
      <div className="photo photo-placeholder" role="img" aria-label={t.home.photoAlt}>
        <span aria-hidden="true">PA</span>
      </div>
      <div className="home-text">
        <p className="greeting">{t.home.greeting}</p>
        <h1>Pierre-Antoine Sut</h1>
        <p className="home-title">{t.home.title}</p>
        <p>{t.home.search}</p>
        <p>{t.home.rhythm}</p>
        <a className="button" href="#projects">
          {t.home.cta}
        </a>
      </div>
    </section>
  )
}
