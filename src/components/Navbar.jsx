import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { Close, Menu, Scale } from './icons.jsx'

const links = [
  { href: '#reality', label: 'The Reality' },
  { href: '#rights', label: 'Know Your Rights' },
  { href: '#action', label: 'Take Action' },
  { href: '#references', label: 'References' },
]

/** Highlights the nav link for whichever section is currently on screen. */
function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

const sectionIds = ['top', ...links.map((l) => l.href.slice(1))]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const active = useActiveSection(sectionIds)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid ? 'bg-paper/85 shadow-[0_1px_0_rgb(15_23_42/0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-lg font-display text-lg font-bold text-ink focus-visible:ring-2 focus-visible:ring-indigo focus-visible:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-lg bg-indigo text-white">
            <Scale className="size-4.5" />
          </span>
          Mind The Gap
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-indigo focus-visible:outline-none ${
                    isActive ? 'text-indigo' : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-indigo/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg text-ink hover:bg-ink/5 focus-visible:ring-2 focus-visible:ring-indigo focus-visible:outline-none md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <Close /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-ink/10 bg-paper px-4 md:hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-ink/5 py-4 text-base font-medium text-ink last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-indigo to-coral"
      />
    </header>
  )
}
