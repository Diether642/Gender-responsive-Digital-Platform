import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import StatCard from './StatCard.jsx'
import { stats } from '../data/content.js'

export default function Reality() {
  return (
    <section
      id="reality"
      aria-labelledby="reality-title"
      className="relative overflow-hidden bg-linear-to-br from-indigo to-indigo-deep py-20 text-white sm:py-28"
    >
      {/* Decorative grid + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-size-[48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-coral/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="reality-title"
          tone="dark"
          kicker="01 — The Reality"
          title="The numbers behind the gap"
          intro="A strong global ranking can hide a harder truth. These figures show where Filipino women still face barriers to equal participation and pay in the workplace. Tap or hover the ⓘ icon on any card to see its source."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:[&>*:last-child]:col-span-2 lg:mt-16 lg:grid-cols-3 lg:gap-8 lg:[&>*:last-child]:col-span-1"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
