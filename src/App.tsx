import { useState } from 'react'
import { WHATSAPP_CONTACTS, WHATSAPP_URL } from './config'
import { lessons, projects, skills } from './data'
import { WhatsAppButton } from './WhatsAppButton'
import './App.css'

const featured = projects.filter((p) => p.featured)
const year = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [frontCard, setFrontCard] = useState(0)
  const [skillIndex, setSkillIndex] = useState(0)
  const activeSkill = skills[skillIndex]

  return (
    <div className="site">
      <WhatsAppButton />

      <nav className="nav" aria-label="Primary">
        <div className="wrap nav__inner">
          <a className="nav__brand" href="#top">
            <span className="nav__brand-hand">Olaro</span>
            <span className="nav__brand-rest">Peter Celestine</span>
          </a>
          <ul className="nav__links">
            <li>
              <a href="#chapters">01 Chapters</a>
            </li>
            <li>
              <a href="#about">02 About</a>
            </li>
            <li>
              <a href="#write">03 Write to me</a>
            </li>
          </ul>
          <button
            type="button"
            className="nav__menu"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
        <div className={`wrap nav__drawer${menuOpen ? ' is-open' : ''}`}>
          <ul>
            <li>
              <a href="#chapters" onClick={() => setMenuOpen(false)}>
                01 Chapters
              </a>
            </li>
            <li>
              <a href="#tools" onClick={() => setMenuOpen(false)}>
                02 Tools
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                03 About
              </a>
            </li>
            <li>
              <a href="#write" onClick={() => setMenuOpen(false)}>
                04 Write to me
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <p className="hero__kicker">
          <span>A working notebook</span>
          <span>{year}</span>
        </p>
        <p className="hero__hello">Hi, I’m Olaro.</p>
        <h1 className="hero__title">
          I build software for the <em>on-air</em> moments:{' '}
          <span className="swap">the live listen</span>
        </h1>
        <p className="hero__lede">
          I’m a full-stack developer. I take radio and streaming products from a
          Flutter app in someone’s hand, to a TypeScript site that loads on a bad
          connection, to the Go, Django, or FastAPI backend quietly holding it
          together. I’m also strong with IoT, automation, and data analysis.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#chapters">
            Start reading ↓
          </a>
          <a className="btn btn--ghost" href="#about">
            Who’s writing this?
          </a>
        </div>

        <p className="stack__hint">go on, tap the covers</p>
        <div className="stack" aria-hidden="true">
          {featured.map((project, index) => (
            <button
              type="button"
              key={project.id}
              className={`polaroid${frontCard === index ? ' is-front' : ''}`}
              style={{ zIndex: frontCard === index ? 10 : index + 1 }}
              onClick={() => setFrontCard(index)}
            >
              <img src={project.image} alt="" />
              <div className="polaroid__label">
                Ch. {String(index + 1).padStart(2, '0')} · {project.name}
              </div>
            </button>
          ))}
        </div>
      </header>

      <section className="section wrap" id="contents">
        <p className="section__eyebrow">Contents</p>
        <h2 className="section__title">Stations, streams &amp; the odd travel brief.</h2>
        <p className="section__sub">
          Ten collaborations — apps and websites where the live moment matters.
        </p>
        <ol className="contents">
          {projects.map((project, index) => (
            <li key={project.id}>
              <a href={`#chapter-${project.id}`}>
                <span className="contents__num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="contents__name">{project.name}</span>
                  <p className="contents__blurb">{project.summary}</p>
                </span>
                <span className="contents__meta">
                  {project.category}
                  <br />
                  {project.year}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a href="#about">
              <span className="contents__num">✎</span>
              <span>
                <span className="contents__name">About the author</span>
                <p className="contents__blurb">
                  Radio desks, diaspora streams &amp; a laptop that travels.
                </p>
              </span>
              <span className="contents__meta">Notes</span>
            </a>
          </li>
        </ol>
      </section>

      <section className="section wrap" id="about">
        <p className="section__eyebrow">Foreword</p>
        <h2 className="section__title">
          Three things I learned <em>the hard way.</em>
        </h2>
        <div className="lessons">
          {lessons.map((lesson) => (
            <article key={lesson.right} className="lesson">
              <p className="lesson__wrong">{lesson.wrong}</p>
              <h3 className="lesson__right">{lesson.right}</h3>
              <p className="lesson__body">{lesson.body}</p>
              <p className="lesson__note">{lesson.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap" id="chapters">
        <p className="section__eyebrow">The chapters</p>
        <h2 className="section__title">
          Each one starts with a <em>listener</em>, not a feature list.
        </h2>
        <p className="section__sub">
          Featured builds — tap Website or App to open the real thing.
        </p>

        {featured.map((project, index) => (
          <article
            key={project.id}
            className="chapter"
            id={`chapter-${project.id}`}
          >
            <div className="chapter__cover">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                width={1600}
                height={1000}
                loading="lazy"
              />
            </div>
            <div>
              <p className="chapter__kicker">
                Chapter {String(index + 1).padStart(2, '0')} · {project.year}
              </p>
              <h3 className="chapter__title">{project.name}</h3>
              <p className="chapter__summary">{project.summary}</p>
              <p className="chapter__story">{project.story}</p>
              {project.stack && (
                <ul className="chapter__stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="chapter__links">
                {project.links.map((link) => (
                  <a
                    key={`${project.id}-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}

        <div style={{ marginTop: '2.5rem' }}>
          <p className="section__eyebrow">Also on the shelf</p>
          <ol className="contents">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <li key={project.id} id={`chapter-${project.id}`}>
                  <a
                    href={project.links[0]?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contents__num">
                      {String(index + 5).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="contents__name">{project.name}</span>
                      <p className="contents__blurb">{project.summary}</p>
                    </span>
                    <span className="contents__meta">
                      {project.category}
                      <br />
                      {project.year}
                    </span>
                  </a>
                </li>
              ))}
          </ol>
        </div>
      </section>

      <section className="section wrap" id="tools">
        <p className="section__eyebrow">Appendix A</p>
        <h2 className="section__title">What’s on the desk.</h2>
        <p className="section__sub">
          Tap a tool and I’ll tell you why it’s there.
        </p>
        <div className="tools__tabs" role="tablist" aria-label="Tools">
          {skills.map((skill, index) => (
            <button
              key={skill.name}
              type="button"
              role="tab"
              aria-selected={skillIndex === index}
              className={skillIndex === index ? 'is-active' : undefined}
              onClick={() => setSkillIndex(index)}
            >
              {String(index + 1).padStart(2, '0')} {skill.name}
            </button>
          ))}
        </div>
        {activeSkill && (
          <div className="tools__panel" role="tabpanel">
            <p className="tools__why">why {activeSkill.name}?</p>
            <p className="tools__detail">{activeSkill.detail}</p>
          </div>
        )}
      </section>

      <section className="section wrap" id="write">
        <p className="section__eyebrow">Last page · write back</p>
        <h2 className="section__title">
          Got a station that <em>needs</em> building?
        </h2>
        <p className="section__sub">
          Open to full-time roles, freelance work, and ambitious side quests.
        </p>
        <div className="letter">
          <p className="letter__dear">Dear Olaro,</p>
          <div className="letter__actions">
            {WHATSAPP_CONTACTS.map((contact) => (
              <a
                key={contact.number}
                className="wa"
                href={contact.url}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp · {contact.display} →
              </a>
            ))}
            <a href="mailto:olaropetercelestine@gmail.com">
              olaropetercelestine@gmail.com →
            </a>
            <a
              href="https://github.com/OlaroPeterCelestine"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/peter-celestine-olaro-6b2aa6282"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <footer className="footer">
          <span>Olaro · written &amp; built by hand</span>
          <div className="footer__links">
            <a href="#top">back to the first page ↑</a>
            <span>© {year}</span>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default App
