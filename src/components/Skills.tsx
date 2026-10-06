import { skillGroups } from '../data/skills'
import { useSettings } from '../settings/context'

// R23: skills as badges, by group. (Fantasy character sheet = later, R24.)
export function Skills() {
  const { t } = useSettings()
  return (
    <section id="skills" className="section">
      <h2>{t.skills.title}</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.id} className="card" role="group" aria-labelledby={`skills-${group.id}`}>
            <h3 id={`skills-${group.id}`}>{t.skills.groups[group.id]}</h3>
            <ul className="badges">
              {group.skills.map((skill) => (
                <li key={skill.name} className={skill.learning ? 'badge learning' : 'badge'}>
                  {skill.name}
                  {skill.learning && <span className="learning-tag"> · {t.skills.learning}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
