import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { WHATSAPP_CONTACTS, WHATSAPP_URL } from './config'
import { lessons, projects, skills } from './data'
import { WhatsAppButton } from './WhatsAppButton'
import './App.css'

const featured = projects.filter((p) => p.featured)
const year = new Date().getFullYear()
const ease = [0.22, 1, 0.36, 1] as const

const polaroidPose = [
  { x: '-6%', y: '6%', rotate: -8 },
  { x: '18%', y: '-2%', rotate: 3 },
  { x: '48%', y: '10%', rotate: 9 },
  { x: '10%', y: '34%', rotate: -2 },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [frontCard, setFrontCard] = useState(1)
  const [skillIndex, setSkillIndex] = useState(0)
  const reduce = useReducedMotion()
  const activeSkill = skills[skillIndex]

  return (
    <div className="site">
      <WhatsAppButton />

      <motion.nav
        className="nav"
        aria-label="Primary"
        initial={reduce ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease }}
      >
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
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="wrap nav__drawer is-open"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <header className="hero wrap" id="top">
        <motion.p
          className="hero__kicker"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
        >
          <span>A working notebook</span>
        </motion.p>
        <motion.p
          className="hero__hello"
          initial={reduce ? false : { opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
        >
          Hi, I’m Olaro.
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
        >
          I build software for the <em>on-air</em> moments:{' '}
          <span className="swap">the live listen</span>
        </motion.h1>
        <motion.p
          className="hero__lede"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease }}
        >
          I’m a full-stack developer. I take radio and streaming products from a
          Flutter app in someone’s hand, to a TypeScript site that loads on a bad
          connection, to the Go, Django, or FastAPI backend quietly holding it
          together. I’m also strong with IoT, automation, and data analysis.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42, ease }}
        >
          <a className="btn btn--solid" href="#chapters">
            Start reading ↓
          </a>
          <a className="btn btn--ghost" href="#about">
            Who’s writing this?
          </a>
        </motion.div>

        <motion.p
          className="stack__hint"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          go on, tap the covers
        </motion.p>
        <div className="stack" aria-hidden="true">
          {featured.map((project, index) => {
            const pose = polaroidPose[index] ?? polaroidPose[0]
            return (
              <motion.button
                type="button"
                key={project.id}
                className={`polaroid${frontCard === index ? ' is-front' : ''}`}
                style={{ left: pose.x, top: pose.y }}
                initial={
                  reduce
                    ? false
                    : { opacity: 0, scale: 0.86, rotate: pose.rotate - 12, y: 40 }
                }
                animate={{
                  opacity: 1,
                  scale: frontCard === index ? 1.04 : 1,
                  rotate: pose.rotate,
                  y: 0,
                  zIndex: frontCard === index ? 12 : index + 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 18,
                  delay: reduce ? 0 : 0.45 + index * 0.08,
                }}
                whileHover={
                  reduce
                    ? undefined
                    : { scale: 1.06, rotate: pose.rotate + (index % 2 ? -2 : 2) }
                }
                whileTap={reduce ? undefined : { scale: 0.98 }}
                onClick={() => setFrontCard(index)}
              >
                <img src={project.image} alt="" />
                <div className="polaroid__label">
                  Ch. {String(index + 1).padStart(2, '0')} · {project.name}
                </div>
              </motion.button>
            )
          })}
        </div>
      </header>

      <section className="section wrap" id="contents">
        <Reveal>
          <p className="section__eyebrow">Contents</p>
          <h2 className="section__title">
            Stations, streams &amp; the odd travel brief.
          </h2>
          <p className="section__sub">
            Ten collaborations — apps and websites where the live moment matters.
          </p>
        </Reveal>
        <Stagger as="ol" className="contents">
          {projects.map((project, index) => (
            <StaggerItem as="li" key={project.id}>
              <a className="contents__row" href={`#chapter-${project.id}`}>
                <span className="contents__num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="contents__main">
                  <span className="contents__name">{project.name}</span>
                  <span className="contents__blurb">{project.summary}</span>
                </span>
                <span className="contents__meta">{project.category}</span>
              </a>
            </StaggerItem>
          ))}
          <StaggerItem as="li">
            <a className="contents__row" href="#about">
              <span className="contents__num">✎</span>
              <span className="contents__main">
                <span className="contents__name">About the author</span>
                <span className="contents__blurb">
                  Swimming, rugby, basketball &amp; triathlon — then back to the
                  desk.
                </span>
              </span>
              <span className="contents__meta">Notes</span>
            </a>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="section wrap" id="about">
        <Reveal>
          <p className="section__eyebrow">Foreword</p>
          <h2 className="section__title">
            Three things I learned <em>the hard way.</em>
          </h2>
          <p className="section__sub">
            Away from the keyboard I love swimming, rugby, basketball, and
            triathlon — movement that keeps the head clear for building.
          </p>
        </Reveal>
        <Stagger className="lessons">
          {lessons.map((lesson) => (
            <StaggerItem key={lesson.right}>
              <article className="lesson">
                <p className="lesson__wrong">{lesson.wrong}</p>
                <h3 className="lesson__right">{lesson.right}</h3>
                <p className="lesson__body">{lesson.body}</p>
                <p className="lesson__note">{lesson.note}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section wrap" id="chapters">
        <Reveal>
          <p className="section__eyebrow">The chapters</p>
          <h2 className="section__title">
            Each one starts with a <em>listener</em>, not a feature list.
          </h2>
          <p className="section__sub">
            Featured builds — tap Website or App to open the real thing.
          </p>
        </Reveal>

        {featured.map((project, index) => (
          <Reveal key={project.id} delay={0.05}>
            <article className="chapter" id={`chapter-${project.id}`}>
              <motion.div
                className="chapter__cover"
                whileHover={reduce ? undefined : { rotate: index % 2 ? -3 : 3, y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
              </motion.div>
              <div>
                <p className="chapter__kicker">
                  Chapter {String(index + 1).padStart(2, '0')} · {project.category}
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
          </Reveal>
        ))}

        <div className="shelf">
          <Reveal>
            <p className="section__eyebrow">Also on the shelf</p>
          </Reveal>
          <Stagger as="ol" className="contents">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <StaggerItem as="li" key={project.id}>
                  <a
                    className="contents__row"
                    id={`chapter-${project.id}`}
                    href={project.links[0]?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contents__num">
                      {String(index + 5).padStart(2, '0')}
                    </span>
                    <span className="contents__main">
                      <span className="contents__name">{project.name}</span>
                      <span className="contents__blurb">{project.summary}</span>
                    </span>
                    <span className="contents__meta">{project.category}</span>
                  </a>
                </StaggerItem>
              ))}
          </Stagger>
        </div>
      </section>

      <section className="section wrap" id="tools">
        <Reveal>
          <p className="section__eyebrow">Appendix A</p>
          <h2 className="section__title">What’s on the desk.</h2>
          <p className="section__sub">
            Tap a tool and I’ll tell you why it’s there.
          </p>
        </Reveal>
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
        <AnimatePresence mode="wait">
          {activeSkill && (
            <motion.div
              key={activeSkill.name}
              className="tools__panel"
              role="tabpanel"
              initial={reduce ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduce ? undefined : { opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="tools__why">why {activeSkill.name}?</p>
              <p className="tools__detail">{activeSkill.detail}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="section wrap" id="write">
        <Reveal>
          <p className="section__eyebrow">Last page · write back</p>
          <h2 className="section__title">
            Got a station that <em>needs</em> building?
          </h2>
          <p className="section__sub">
            Open to full-time roles, freelance work, and ambitious side quests.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
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
        </Reveal>

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
