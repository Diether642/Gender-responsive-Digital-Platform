import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getRef } from '../data/references.js'
import { ExternalLink, InfoIcon } from './icons.jsx'

/**
 * "i" button that reveals the source of a claim.
 * - Desktop: opens on hover or keyboard focus.
 * - Touch: tap to toggle. Tapping outside or pressing Esc closes it.
 */
export default function InfoTooltip({ refIds }) {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [pinned, setPinned] = useState(false)
  const wrapperRef = useRef(null)
  const tooltipId = useId()
  const open = hovered || focused || pinned
  const refs = refIds.map(getRef)

  useEffect(() => {
    if (!open) return
    const close = () => {
      setHovered(false)
      setFocused(false)
      setPinned(false)
    }
    const onKey = (e) => e.key === 'Escape' && close()
    const onPointer = (e) => {
      if (!wrapperRef.current?.contains(e.target)) close()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(false)}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget)) setFocused(false)
      }}
    >
      <button
        type="button"
        aria-label="Show source for this statistic"
        aria-expanded={open}
        aria-controls={tooltipId}
        onClick={() => setPinned((p) => !p)}
        onFocus={(e) => e.target.matches(':focus-visible') && setFocused(true)}
        className={`grid size-9 place-items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
          open
            ? 'border-white bg-white text-indigo'
            : 'border-white/30 text-white/80 hover:border-white hover:text-white'
        }`}
      >
        <InfoIcon className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full right-0 z-30 mt-2 w-72 max-w-[calc(100vw-4rem)] origin-top-right rounded-xl bg-white p-4 text-left text-ink shadow-2xl ring-1 shadow-black/30 ring-black/5"
          >
            <span className="absolute -top-1.5 right-3.5 size-3 rotate-45 bg-white" aria-hidden="true" />
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-coral uppercase">Source</p>
            <ul className="mt-2 space-y-3">
              {refs.map((ref) => (
                <li key={ref.id} className="text-sm leading-snug">
                  <p className="font-semibold">Reference: {ref.short}</p>
                  <p className="mt-0.5 text-ink/70">
                    <cite className="not-italic">{ref.title}</cite> ({ref.year})
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium">
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo underline-offset-2 hover:underline"
                    >
                      View source <ExternalLink className="size-3.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    <a
                      href={`#ref-${ref.number}`}
                      className="text-ink/60 underline-offset-2 hover:text-ink hover:underline"
                    >
                      Bibliography [{ref.number}]
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
