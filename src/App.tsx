import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useSettings } from './settings/context'
import { SettingsProvider } from './settings/SettingsProvider'

export default function App() {
  return (
    <SettingsProvider>
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SettingsProvider>
  )
}

function Footer() {
  const { t } = useSettings()
  return <footer className="footer">{t.footer}</footer>
}
