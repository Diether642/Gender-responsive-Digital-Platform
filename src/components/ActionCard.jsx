import { motion } from 'framer-motion'
import { CitedText } from './CiteLink.jsx'
import { Building, People } from './icons.jsx'

const icons = { building: Building, people: People }

export const actionCardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ActionCard({ card }) {
  const Icon = icons[card.icon]
  const titleId = `action-${card.id}-title`

  return (
    <motion.article
      aria-labelledby={titleId}
      variants={actionCardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-coral/25 bg-white p-6 shadow-lg shadow-coral/5 transition-[border-color,box-shadow] duration-300 hover:border-coral hover:shadow-2xl hover:shadow-coral/15 sm:p-8 lg:p-10"
    >
      {/* Coral corner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-coral/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex items-center gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-coral text-white shadow-lg shadow-coral/30 transition-transform duration-300 group-hover:-rotate-6">
          <Icon className="size-7" />
        </span>
        <div>
          <h3 id={titleId} className="font-display text-2xl font-bold text-ink sm:text-3xl">
            {card.audience}
          </h3>
          <p className="mt-1 text-sm text-ink/60 sm:text-base">{card.tagline}</p>
        </div>
      </div>

      <ol className="relative mt-8 space-y-6">
        {card.items.map((item, i) => (
          <li key={item.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border-2 border-coral/30 font-display text-sm font-bold text-coral lining-nums"
            >
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70 sm:text-base">
                <CitedText text={item.text} refIds={item.refIds} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </motion.article>
  )
}
