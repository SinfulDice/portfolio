import photo from '../assets/photo.jpg'
import { useSettings } from '../settings/context'

export function Home() {
  const { t } = useSettings()
  return (
    <section id="home" className="section home">
      {/* R20: the photo always has alternative text. */}
      <img className="photo" src={photo} alt={t.home.photoAlt} width={220} height={220} />
      <div className="home-text">
        <p className="greeting">{t.home.greeting}</p>
        <h1>Pierre-Antoine Sut</h1>
        <p className="home-title">{t.home.title}</p>
        <p className="hook">{t.home.hook}</p>
        <p>{t.home.search}</p>
        <p>{t.home.rhythm}</p>
        <a className="button" href="#projects">
          {t.home.cta}
        </a>
      </div>
    </section>
  )
}
