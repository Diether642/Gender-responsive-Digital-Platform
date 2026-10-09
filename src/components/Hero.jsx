import { motion } from 'framer-motion'
import ScaleGraphic from './ScaleGraphic.jsx'
import CiteLink from './CiteLink.jsx'
import { ArrowDown } from './icons.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-16"
    >
      {/* Subtle dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(79_70_229/0.12)_1px,transparent_1px)] bg-size-[24px_24px] mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-indigo/20 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-indigo shadow-sm sm:text-sm"
          >
            <span className="size-2 rounded-full bg-coral" aria-hidden="true" />
            Gender &amp; Society · Philippines
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={1}
            className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Mind the{' '}
            <span className="relative inline-block text-coral">
              Gap
              <svg
                aria-hidden="true"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full sm:h-4"
              >
                <motion.path
                  d="M4 14 C 50 4, 150 4, 196 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
                />
              </svg>
            </span>
            : Bridging Gender Inequity in the Workplace.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            The Philippines ranks among the world&rsquo;s leaders in gender parity
            <CiteLink refId="wef-2023" />, yet women still carry most of the unpaid care work
            <CiteLink refId="psa-care" /> and only about half take part in the labor force
            <CiteLink refId="psa-lfs-2023" />. Explore the data, know the laws that protect you, and discover how
            employers, employees and allies can build a workplace where everyone has an equal chance to thrive.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-auto">
              {/* Gentle pulse ring behind the CTA */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-indigo"
                animate={{ scale: [1, 1.12], opacity: [0.35, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.a
                href="#reality"
                whileTap={{ scale: 0.97 }}
                className="group relative flex w-full items-center justify-center gap-2 rounded-full border-2 border-indigo bg-indigo px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo/30 transition-colors duration-300 hover:bg-white hover:text-indigo focus-visible:ring-4 focus-visible:ring-indigo/40 focus-visible:outline-none sm:w-auto"
              >
                Explore the Data
                <ArrowDown className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </motion.a>
            </div>
            <a
              href="#rights"
              className="text-center text-sm font-semibold text-ink/70 underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-ink sm:text-left"
            >
              Know your rights
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ScaleGraphic />
        </motion.div>
      </div>

      <motion.a
        href="#reality"
        aria-label="Scroll to the data"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-ink/40 transition-colors hover:text-indigo lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="size-6" />
      </motion.a>
    </section>
  )
}
