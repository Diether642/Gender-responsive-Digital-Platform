import { motion } from 'framer-motion'

/** Kicker + serif title + intro paragraph used at the top of each section. */
export default function SectionHeading({ id, kicker, title, intro, tone = 'light', align = 'left' }) {
  const dark = tone === 'dark'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <p
        className={`text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm ${dark ? 'text-coral-soft' : 'text-coral'}`}
      >
        {kicker}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/75' : 'text-ink/70'}`}>
          {intro}
        </p>
      )}
    </motion.div>
  )
}
