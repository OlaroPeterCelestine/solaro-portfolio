import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

const ease = [0.22, 1, 0.36, 1] as const

/** Expand the intersection root so top-of-viewport sections still fire. */
const inView = { once: true, amount: 0.05, margin: '80px 0px 80px 0px' } as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...inView, once }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ol' | 'ul'
}) {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.07 },
    },
  }

  const Comp = as === 'ol' ? motion.ol : as === 'ul' ? motion.ul : motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Comp
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const reduce = useReducedMotion()

  const item: Variants = {
    // Never fade to 0 — top-of-viewport sections can miss whileInView
    hidden: { opacity: 1, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease },
    },
  }

  const Comp = as === 'li' ? motion.li : motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  )
}
