import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { WHATSAPP_URL } from './config'
import {
  heroPhrases,
  lessons,
  projects,
  skills,
  statusLines,
} from './data'
import { WhatsAppButton } from './WhatsAppButton'
import './App.css'

const featured = projects.filter((p) => p.featured)
const drafts = projects.filter((p) => !p.featured)
const year = new Date().getFullYear()
const ease = [0.22, 1, 0.36, 1] as const

const polaroidPose = [
  { x: '2%', y: '8%', rotate: -7 },
  { x: '28%', y: '0%', rotate: 4 },
  { x: '52%', y: '12%', rotate: -3 },
  { x: '18%', y: '38%', rotate: 8 },
]

const projectTypes = [
  'a mobile app',
  'a website',
  'a web platform',
  'a backend & API',
  'something I can’t name yet',
]

const needOptions = [
  'design and build it',
  'just build it',
  'design it',
  'rescue it',
  'think it through with me',
]

const timelines = [
  'this month',
  'in the next few months',
  'whenever it’s right',
  'yesterday, honestly',
]

function useKampalaClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])
  return new Intl.DateTimeFormat('en-UG', {
    timeZone: 'Africa/Kampala',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(now)
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [frontCard, setFrontCard] = useState(0)
  const [skillIndex, setSkillIndex] = useState(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [letter, setLetter] = useState({
    name: '',
    from: '',
    type: projectTypes[0],
    need: needOptions[0],
    when: timelines[1],
  })
  const reduce = useReducedMotion()
  const activeSkill = skills[skillIndex]
  const clock = useKampalaClock()
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v))

  useEffect(() => {
    if (reduce) return
    const phrase = window.setInterval(() => {
      setPhraseIndex((i) => (i + 1) % heroPhrases.length)
    }, 3200)
    const status = window.setInterval(() => {
      setStatusIndex((i) => (i + 1) % statusLines.length)
    }, 5000)
    return () => {
      window.clearInterval(phrase)
      window.clearInterval(status)
    }
  }, [reduce])

  const mailto = useMemo(() => {
    const who = letter.name.trim() || 'there'
    const from = letter.from.trim() || 'somewhere interesting'
    const body = `Dear Olaro,\n\nI'm ${who} from ${from}. I'm working on ${letter.type} and I'd love you to ${letter.need}. We're hoping to start ${letter.when}.\n\n`
    return `mailto:olaropetercelestine@gmail.com?subject=${encodeURIComponent(
      `Portfolio note from ${who}`,
    )}&body=${encodeURIComponent(body)}`
  }, [letter])

  const projectById = useMemo(
    () => Object.fromEntries(projects.map((p) => [p.id, p])),
    [],
  )

  return (
    <div className="site">
      <a className="skip" href="#contents">
        Skip to the story
      </a>

      <div className="progress" aria-hidden="true">
        <div className="progress__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

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
            <span />
            <span />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="wrap nav__drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
            >
              <p className="where">where to?</p>
              <ul>
                <li>
                  <a href="#chapters" onClick={() => setMenuOpen(false)}>
                    <span>01</span> Chapters
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setMenuOpen(false)}>
                    <span>02</span> About
                  </a>
                </li>
                <li>
                  <a href="#write" onClick={() => setMenuOpen(false)}>
                    <span>03</span> Write to me
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
          className="hero__status"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Kampala {clock} · {statusLines[statusIndex]}
        </motion.p>

        <motion.p
          className="hero__kicker"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
        >
          <span>A working notebook</span>
          <span>{year}</span>
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
          I build software for the <em>on-air</em> moments:
          <br />
          <span className="swap">
            <AnimatePresence mode="wait">
              <motion.span
                key={heroPhrases[phraseIndex]}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                {heroPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="hero__lede"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease }}
        >
          I’m a full-stack developer. I take radio and streaming products from a{' '}
          <span className="hl">Flutter app in someone’s hand</span>, to a TypeScript
          site that loads on a bad connection, to the Go, Django, or FastAPI backend
          quietly holding it together. I’m also strong with IoT, automation, and data
          analysis.
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

        <div className="stack-block">
          <p className="stack__hint">go on, move them around</p>
          <div className="stack" aria-hidden="true">
            {featured.map((project, index) => {
              const pose = polaroidPose[index] ?? polaroidPose[0]
              return (
                <motion.div
                  key={project.id}
                  className={`polaroid${frontCard === index ? ' is-front' : ''}`}
                  style={{ left: pose.x, top: pose.y }}
                  drag={!reduce}
                  dragConstraints={{ left: -40, right: 40, top: -30, bottom: 40 }}
                  dragElastic={0.18}
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.86,
                          rotate: pose.rotate - 12,
                          y: 40,
                        }
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
                      : {
                          scale: 1.05,
                          rotate: pose.rotate + (index % 2 ? -2 : 2),
                        }
                  }
                  whileTap={reduce ? undefined : { scale: 0.98, cursor: 'grabbing' }}
                  onPointerDown={() => setFrontCard(index)}
                  onDragStart={() => setFrontCard(index)}
                >
                  <img src={project.image} alt="" />
                  <div className="polaroid__label">
                    <span>
                      Ch. {String(index + 1).padStart(2, '0')}
                    </span>
                    <a href={`#chapter-${project.id}`}>{project.name} →</a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </header>

      <section className="section wrap" id="contents">
        <Reveal>
          <div className="section__head">
            <h2 className="section__title">Contents</h2>
            <p className="section__aside">
              four stations, four very different rooms.
            </p>
          </div>
        </Reveal>
        <ol className="contents">
          {featured.map((project, index) => (
            <li key={project.id}>
              <a className="contents__row" href={`#chapter-${project.id}`}>
                <span className="contents__num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="contents__main">
                  <span className="contents__name">{project.name}</span>
                  <span className="contents__blurb">{project.summary}</span>
                </span>
                <span className="contents__meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <a className="contents__row" href="#about">
              <span className="contents__num">✎</span>
              <span className="contents__main">
                <span className="contents__name">About the author</span>
                <span className="contents__blurb">
                  swimming, rugby, basketball &amp; triathlon
                </span>
              </span>
              <span className="contents__meta">Notes</span>
            </a>
          </li>
        </ol>

        <div className="covers">
          {featured.map((project) => (
            <a
              key={project.id}
              className="cover-card"
              href={`#chapter-${project.id}`}
            >
              <img src={project.image} alt="" />
              <span className="cover-card__caption">{project.caption}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section wrap" id="about">
        <Reveal>
          <p className="section__eyebrow">Foreword</p>
          <h2 className="section__title">
            Three things I learned <em>the hard way.</em>
          </h2>
        </Reveal>
        <Stagger className="lessons">
          {lessons.map((lesson, index) => (
            <StaggerItem key={lesson.right}>
              <article className="lesson">
                <p className="lesson__num">{String(index + 1).padStart(2, '0')}</p>
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
        </Reveal>

        {featured.map((project, index) => (
          <Reveal key={project.id} delay={0.04}>
            <article
              className={`chapter${index % 2 ? ' chapter--flip' : ''}`}
              id={`chapter-${project.id}`}
            >
              <a
                className="chapter__cover"
                href={project.links[0]?.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
                <span className="chapter__cover-note">{project.caption}</span>
              </a>
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
                {project.role && (
                  <p className="chapter__role">My part: {project.role}</p>
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
                  <a href={project.links[0]?.url} target="_blank" rel="noreferrer">
                    Read the chapter →
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="drawer">
          <Reveal>
            <p className="section__eyebrow">Still in the drawer</p>
            <h3 className="drawer__title">Drafts I haven’t finished writing up.</h3>
          </Reveal>
          <Stagger as="ol" className="drawer__list">
            {drafts.map((project) => (
              <StaggerItem as="li" key={project.id}>
                <a
                  className="drawer__row"
                  href={project.links[0]?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="drawer__year">{project.year}</span>
                  <span className="drawer__name">{project.name}</span>
                  <span className="drawer__blurb">{project.summary}</span>
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
            Tap a tool and I’ll tell you why it’s there and where it shows up.
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
              initial={
                reduce ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={
                reduce ? undefined : { opacity: 0, y: -8, filter: 'blur(4px)' }
              }
              transition={{ duration: 0.35, ease }}
            >
              <p className="tools__why">why {activeSkill.name}?</p>
              <p className="tools__detail">{activeSkill.detail}</p>
              {activeSkill.showsIn.length > 0 && (
                <div className="tools__shows">
                  <p className="tools__shows-label">Shows up in</p>
                  <ul>
                    {activeSkill.showsIn.map((id) => {
                      const project = projectById[id]
                      if (!project) return null
                      return (
                        <li key={id}>
                          <a href={`#chapter-${id}`}>{project.name}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="section wrap" id="write">
        <Reveal>
          <p className="section__eyebrow">
            Last page · the part where you write back
          </p>
          <h2 className="section__title">
            Got a station that <em>needs</em> building?
          </h2>
          <p className="section__sub">
            Fill in the blanks and it turns into an email. I’m open to full-time
            roles, freelance projects and the odd ambitious side quest.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            className="letter"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailto
            }}
          >
            <p className="letter__stamp">UG · {year}</p>
            <p className="letter__dear">Dear Olaro,</p>
            <p className="letter__body">
              I’m{' '}
              <input
                aria-label="Your name"
                placeholder="your name"
                value={letter.name}
                onChange={(e) =>
                  setLetter((l) => ({ ...l, name: e.target.value }))
                }
              />{' '}
              from{' '}
              <input
                aria-label="Where you work"
                placeholder="where you work"
                value={letter.from}
                onChange={(e) =>
                  setLetter((l) => ({ ...l, from: e.target.value }))
                }
              />
              . I’m working on{' '}
              <select
                aria-label="Project type"
                value={letter.type}
                onChange={(e) =>
                  setLetter((l) => ({ ...l, type: e.target.value }))
                }
              >
                {projectTypes.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>{' '}
              and I’d love you to{' '}
              <select
                aria-label="What you need"
                value={letter.need}
                onChange={(e) =>
                  setLetter((l) => ({ ...l, need: e.target.value }))
                }
              >
                {needOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              . We’re hoping to start{' '}
              <select
                aria-label="Timeline"
                value={letter.when}
                onChange={(e) =>
                  setLetter((l) => ({ ...l, when: e.target.value }))
                }
              >
                {timelines.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              .
            </p>
            <div className="letter__actions">
              <button type="submit" className="btn btn--solid">
                Seal it &amp; send →
              </button>
              <a className="btn btn--ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Or WhatsApp →
              </a>
            </div>
            <p className="letter__note">
              it opens in your mail app, nothing is stored
            </p>
          </form>
        </Reveal>

        <footer className="footer">
          <div>
            <p className="footer__sign">
              <span className="hand">Olaro</span>
              <span>written, designed &amp; built by hand</span>
            </p>
            <ul className="footer__social">
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
              <li>
                <a href="mailto:olaropetercelestine@gmail.com">
                  olaropetercelestine@gmail.com
                </a>
              </li>
            </ul>
          </div>
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
