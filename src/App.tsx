import { projects } from './data'
import { WhatsAppButton } from './WhatsAppButton'
import './App.css'

function App() {
  const heroImage = projects.find((p) => p.id === 'nrg-ug') ?? projects[0]

  return (
    <div className="site">
      <WhatsAppButton />
      <nav className="nav" aria-label="Primary">
        <div className="wrap nav__inner">
          <a className="nav__mark" href="#top">
            Solaro
          </a>
          <ul className="nav__links">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="mailto:hello@solaro.design">Email</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <div className="hero__grid">
          <div>
            <h1 className="hero__brand">Solaro</h1>
            <p className="hero__name">Peter Celestine</p>
            <p className="hero__headline">
              Product design for radio, TV, streaming, and travel.
            </p>
            <p className="hero__aside">
              Work with African media and global brands — from{' '}
              <a href="https://www.nrgug.radio/" target="_blank" rel="noreferrer">
                NRG UG Radio
              </a>
              ,{' '}
              <a href="https://streamugradio.com/" target="_blank" rel="noreferrer">
                Stream UG Radio
              </a>
              , and SABC to Teamwork, ThoughtWorks, Vodafone, and Mastercard.
            </p>
          </div>

          {heroImage && (
            <a
              className="hero__panel"
              href={heroImage.url}
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
                <span>Visit ↗</span>
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
          {projects.map((project) => (
            <a
              key={project.id}
              className={`project project--${project.span}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__media">
                <img
                  src={project.image}
                  alt={`${project.name} — live site`}
                  loading="lazy"
                />
                <span className="project__shade" aria-hidden="true" />
              </div>
              <div className="project__meta">
                <div>
                  <h2 className="project__name">{project.name}</h2>
                  <p className="project__summary">{project.summary}</p>
                  <p className="project__tags">
                    {project.category} · {project.year}
                  </p>
                </div>
                <span className="project__go">Visit ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bottom wrap" id="about">
        <div className="bottom__grid">
          <div>
            <h2>About</h2>
            <p>
              I’m Solaro Peter Celestine. I design products for broadcast,
              streaming, and travel — interfaces that stay clear when things are
              live, loud, or moving fast.
            </p>
            <p>
              Recent collaborators include NRG UG Radio, Stream UG Radio, SABC
              TV, SABC News, Mesob Live, Playtz, Teamwork, ThoughtWorks,
              Vodafone Travel, and Mastercard Travel Pass.
            </p>
          </div>
          <div id="contact">
            <h2>Contact</h2>
            <ul className="contact__list">
              <li>
                <a href="mailto:hello@solaro.design">hello@solaro.design</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
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
          <span>Solaro Peter Celestine</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </div>
  )
}

export default App
