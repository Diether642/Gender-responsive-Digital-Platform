import { motion } from 'framer-motion'
import ActionCard from './ActionCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { actions } from '../data/content.js'

export default function Empowerment() {
  return (
    <section
      id="action"
      aria-labelledby="action-title"
      className="relative overflow-hidden bg-paper py-20 sm:py-28"
    >
      {/* Subtle coral gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgb(244_63_94/0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(244_63_94/0.10),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="action-title"
          align="center"
          kicker="03 — Empowerment & Action"
          title="Closing the gap is a shared responsibility"
          intro="Laws set the floor, but everyday choices at work and at home decide how quickly equality becomes real. Here is what each of us can do."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {actions.map((card) => (
            <ActionCard key={card.id} card={card} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl text-center font-display text-xl leading-snug font-semibold text-ink italic sm:text-2xl"
        >
          Equality at work is not a favor to women. It is the measure of a fair workplace.
        </motion.p>
      </div>
    </section>
  )
}
