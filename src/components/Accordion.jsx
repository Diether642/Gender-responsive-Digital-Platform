import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CitedText } from './CiteLink.jsx'
import { getRef } from '../data/references.js'
import { Check, ChevronDown, ExternalLink } from './icons.jsx'

function AccordionItem({ law, index, isOpen, onToggle }) {
  const ref = getRef(law.refId)
  const buttonId = `law-button-${law.id}`
  const panelId = `law-panel-${law.id}`

  return (
    <li
      className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${
        isOpen ? 'border-indigo/40 shadow-xl shadow-indigo/10' : 'border-ink/10 shadow-sm hover:border-indigo/25'
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 p-5 text-left focus-visible:ring-2 focus-visible:ring-indigo focus-visible:outline-none focus-visible:ring-inset sm:p-6"
        >
          <span
            className={`grid size-11 shrink-0 place-items-center rounded-xl font-display text-lg font-bold lining-nums transition-colors sm:size-12 ${
              isOpen ? 'bg-indigo text-white' : 'bg-indigo/10 text-indigo'
            }`}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold tracking-[0.14em] text-coral uppercase">{law.enacted}</span>
            <span className="mt-1 block text-base leading-snug font-semibold text-ink sm:text-lg">
              {law.code}: {law.name}
            </span>
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`grid size-9 shrink-0 place-items-center rounded-full ${isOpen ? 'bg-coral text-white' : 'bg-ink/5 text-ink/60'}`}
            aria-hidden="true"
          >
            <ChevronDown className="size-5" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-t border-ink/10 px-5 pt-5 pb-6 sm:px-6">
              <p className="leading-relaxed text-ink/80">
                <CitedText text={law.summary} refIds={[law.refId]} />
              </p>

              <p className="mt-5 text-sm font-semibold text-ink">Key workplace protections</p>
              <ul className="mt-3 space-y-3">
                {law.protections.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75 sm:text-base">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                      <Check className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Official citation — always visible at the bottom of the panel */}
              <div className="mt-6 rounded-xl border-l-4 border-coral bg-coral-soft/50 p-4">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-coral uppercase">Official citation</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  <CitedText text={law.citation} refIds={[law.refId]} />
                </p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-indigo focus-visible:outline-none"
                >
                  Read the full text ({ref.publisher})
                  <ExternalLink className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

/** Vertical accordion; one law open at a time (the first one by default). */
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <ul className="space-y-4">
      {items.map((law, index) => (
        <AccordionItem
          key={law.id}
          law={law}
          index={index}
          isOpen={openId === law.id}
          onToggle={() => setOpenId((current) => (current === law.id ? null : law.id))}
        />
      ))}
    </ul>
  )
}
