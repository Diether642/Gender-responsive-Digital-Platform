import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Animates a number from 0 to `to` the first time it scrolls into view.
 * The animated text is hidden from screen readers; they get the final
 * value straight away.
 */
export default function CountUp({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 2,
  delay = 0,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || !inView) return
    const format = (v) => `${prefix}${v.toFixed(decimals)}${suffix}`
    if (reduceMotion) {
      node.textContent = format(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v)
      },
    })
    return () => controls.stop()
  }, [inView, reduceMotion, to, decimals, prefix, suffix, duration, delay])

  return (
    <span className={`tabular-nums lining-nums ${className}`}>
      <span ref={ref} aria-hidden="true">
        {`${prefix}${(0).toFixed(decimals)}${suffix}`}
      </span>
      <span className="sr-only">{`${prefix}${to.toFixed(decimals)}${suffix}`}</span>
    </span>
  )
}
