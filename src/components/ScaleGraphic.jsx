import { useEffect, useRef } from 'react'
import { animate, motion, useReducedMotion } from 'framer-motion'

// Pivot of the beam and the points the two pans hang from (SVG units).
const PIVOT = { x: 200, y: 130 }
const LEFT_HANG = { x: 70, y: 130 }
const RIGHT_HANG = { x: 330, y: 130 }

/**
 * Abstract balance scale. The beam tips back and forth and settles level,
 * a visual metaphor for workplace equity. The pans counter-rotate so they
 * always hang straight down.
 */
export default function ScaleGraphic() {
  const beamRef = useRef(null)
  const leftPanRef = useRef(null)
  const rightPanRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const setAngle = (a) => {
      beamRef.current?.setAttribute('transform', `rotate(${a} ${PIVOT.x} ${PIVOT.y})`)
      leftPanRef.current?.setAttribute('transform', `rotate(${-a} ${LEFT_HANG.x} ${LEFT_HANG.y})`)
      rightPanRef.current?.setAttribute('transform', `rotate(${-a} ${RIGHT_HANG.x} ${RIGHT_HANG.y})`)
    }
    if (reduceMotion) {
      setAngle(0)
      return
    }
    const controls = animate(0, [0, -12, 9, -5, 2.5, -1, 0], {
      duration: 5.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 2.5,
      onUpdate: setAngle,
    })
    return () => controls.stop()
  }, [reduceMotion])

  return (
    <div className="relative mx-auto w-full max-w-22rem sm:max-w-md lg:max-w-lg">
      {/* Soft backdrop blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-6 -left-4 size-40 rounded-full bg-indigo/15 blur-3xl sm:size-56"
        animate={{ x: [0, 16, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-4 bottom-0 size-40 rounded-full bg-coral/20 blur-3xl sm:size-56"
        animate={{ x: [0, -14, 0], y: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 400 400" role="img" aria-labelledby="scale-title scale-desc" className="relative w-full">
        <title id="scale-title">A balance scale finding equilibrium</title>
        <desc id="scale-desc">
          An abstract scale with a coral circle on one pan and an indigo square on the other, tipping back and forth
          before settling perfectly level to represent workplace equity.
        </desc>

        <defs>
          <linearGradient id="beam-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="pillar-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0F172A" />
            <stop offset="1" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* Backdrop ring */}
        <circle cx="200" cy="205" r="168" fill="#4F46E5" fillOpacity="0.06" />
        <circle cx="200" cy="205" r="168" fill="none" stroke="#4F46E5" strokeOpacity="0.15" strokeDasharray="4 8" />

        {/* Pillar and base */}
        <rect x="193" y="130" width="14" height="205" rx="7" fill="url(#pillar-grad)" />
        <path d="M140 352 Q200 322 260 352 Z" fill="#0F172A" />
        <rect x="130" y="350" width="140" height="10" rx="5" fill="#0F172A" />

        {/* Beam + pans (rotated together; pans counter-rotate) */}
        <g ref={beamRef}>
          <rect x="55" y="124" width="290" height="12" rx="6" fill="url(#beam-grad)" />

          <g ref={leftPanRef}>
            <line x1="70" y1="130" x2="28" y2="238" stroke="#0F172A" strokeOpacity="0.5" strokeWidth="2" />
            <line x1="70" y1="130" x2="112" y2="238" stroke="#0F172A" strokeOpacity="0.5" strokeWidth="2" />
            <circle cx="70" cy="212" r="25" fill="#F43F5E" />
            <circle cx="62" cy="204" r="7" fill="#fff" fillOpacity="0.35" />
            <path d="M20 238 H120 A50 20 0 0 1 20 238 Z" fill="#0F172A" />
            <circle cx="70" cy="130" r="7" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
          </g>

          <g ref={rightPanRef}>
            <line x1="330" y1="130" x2="288" y2="238" stroke="#0F172A" strokeOpacity="0.5" strokeWidth="2" />
            <line x1="330" y1="130" x2="372" y2="238" stroke="#0F172A" strokeOpacity="0.5" strokeWidth="2" />
            <rect x="307" y="191" width="46" height="46" rx="10" fill="#4F46E5" />
            <rect x="315" y="199" width="12" height="12" rx="3" fill="#fff" fillOpacity="0.3" />
            <path d="M280 238 H380 A50 20 0 0 1 280 238 Z" fill="#0F172A" />
            <circle cx="330" cy="130" r="7" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
          </g>
        </g>

        {/* Pivot */}
        <circle cx={PIVOT.x} cy={PIVOT.y} r="15" fill="#F43F5E" />
        <circle cx={PIVOT.x} cy={PIVOT.y} r="6" fill="#F8FAFC" />
      </svg>

      {/* Floating labels */}
      <motion.span
        aria-hidden="true"
        className="absolute top-[8%] left-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-coral shadow-lg ring-1 shadow-coral/10 ring-coral/20 sm:text-sm"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        Equal work
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute top-[4%] right-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-indigo shadow-lg ring-1 shadow-indigo/10 ring-indigo/20 sm:text-sm"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        Equal pay
      </motion.span>
    </div>
  )
}
