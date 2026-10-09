import { motion } from 'framer-motion'
import Accordion from './Accordion.jsx'
import SectionHeading from './SectionHeading.jsx'
import { laws } from '../data/content.js'

export default function Rights() {
  return (
    <section id="rights" aria-labelledby="rights-title" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="rights-title"
            kicker="02 — Know Your Rights"
            title="The laws that protect you at work"
            intro="Philippine law already prohibits discrimination against women at work. Knowing these protections is the first step to claiming them. Select a law to read a short summary and its official citation."
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-md rounded-xl border border-ink/10 bg-white p-4 text-sm leading-relaxed text-ink/60"
          >
            <span className="font-semibold text-ink">Note:</span> These summaries are simplified for awareness and
            education. They are not legal advice. Always refer to the full text of each law.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Accordion items={laws} />
        </motion.div>
      </div>
    </section>
  )
}
