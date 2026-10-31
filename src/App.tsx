import { WHATSAPP_URL } from './config'
import { projects, skills } from './data'
import { WhatsAppButton } from './WhatsAppButton'
import './App.css'

function App() {
  const heroImage = projects.find((p) => p.id === 'nrg-ug') ?? projects[0]
  const heroWeb = heroImage?.links.find((l) => l.label === 'Website')

  return (
    <div className="site">
      <WhatsAppButton />
      <nav className="nav" aria-label="Primary">
        <div className="wrap nav__inner">
          <a className="nav__mark" href="#top">
            Olaro
          </a>
          <ul className="nav__links">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Reach out
              </a>
            </li>
            <li>
              <a href="mailto:hello@olaro.design">Email</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <div className="hero__grid">
          <div>
            <h1 className="hero__brand">Olaro</h1>
            <p className="hero__name">Peter Celestine</p>
            <p className="hero__headline">
              I build radio apps, streaming platforms, and travel products.
            </p>
            <p className="hero__aside">
              Full-stack work across mobile and web — from{' '}
              <a href="https://www.nrgug.radio/" target="_blank" rel="noreferrer">
                NRG UG Radio
              </a>{' '}
              and{' '}
              <a href="https://streamugradio.com/" target="_blank" rel="noreferrer">
                Stream UG Radio
              </a>{' '}
              to Mesob Live, Playtz, SABC, Teamwork, ThoughtWorks, Vodafone, and
              Mastercard.
            </p>
          </div>

          {heroImage && heroWeb && (
            <a
              className="hero__panel"
              href={heroWeb.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${heroImage.name}`}
            >
              <img
                src={heroImage.image}
                alt={`${heroImage.name} website`}
                loading="eager"
              />
              <span className="hero__panel-caption">
                <span>{heroImage.name}</span>
                <span>Website ↗</span>
              </span>
            </a>
          )}
        </div>
      </header>

      <section className="work wrap" id="work">
        <div className="work__head">
          <p className="work__label">Selected work</p>
          <p className="work__count">{projects.length} projects</p>
        </div>

        <div className="work__grid">
          {projects.map((project) => {
            const hasApp = project.links.some((l) =>
              /app/i.test(l.label),
            )
            return (
              <article key={project.id} className="project">
                <div className="project__media">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    width={1600}
                    height={1000}
                  />
                  <ul className="project__platforms" aria-label="Platforms">
                    <li>Web</li>
                    {hasApp && <li>App</li>}
                  </ul>
                </div>
                <div className="project__body">
                  <div>
                    <h2 className="project__name">{project.name}</h2>
                    <p className="project__summary">{project.summary}</p>
                    <p className="project__tags">
                      {project.category} · {project.year}
                    </p>
                  </div>
                  <div className="project__links">
                    {project.links.map((link) => (
                      <a
                        key={`${project.id}-${link.label}`}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="skills wrap" id="skills">
        <div className="work__head">
          <p className="work__label">Languages & tools</p>
          <p className="work__count">What I ship with</p>
        </div>
        <ul className="skills__grid">
          {skills.map((skill) => (
            <li key={skill.name} className="skills__item">
              <h3 className="skills__name">{skill.name}</h3>
              <p className="skills__detail">{skill.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bottom wrap" id="about">
        <div className="bottom__grid">
          <div>
            <h2>About</h2>
            <p>
              I’m Olaro Peter Celestine — a developer focused on broadcast and
              streaming products. I write Flutter/Dart apps, TypeScript web
              clients, and Go APIs so radio and live platforms work on phones and
              in the browser.
            </p>
            <p>
              That stack shows up across NRG UG Radio, Stream UG Radio, Mesob
              Live, and Playtz — app, website, and backend — plus work with SABC,
              Teamwork, ThoughtWorks, Vodafone Travel, and Mastercard Travel
              Pass.
            </p>
          </div>
          <div id="contact">
            <h2>Reach out</h2>
            <ul className="contact__list">
              <li>
                <a
                  className="contact__whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@olaro.design">hello@olaro.design</a>
              </li>
              <li>
                <a
                  href="https://github.com/OlaroPeterCelestine"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/peter-celestine-olaro-6b2aa6282"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <footer className="footer">
          <span>Olaro Peter Celestine</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </div>
  )
}

export default App
