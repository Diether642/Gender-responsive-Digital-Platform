import { motion } from 'framer-motion'
import CountUp from './CountUp.jsx'
import { CitedText } from './CiteLink.jsx'
import InfoTooltip from './InfoTooltip.jsx'
import { getRef } from '../data/references.js'

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ComparisonBars({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={item.label}>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-white/80">{item.label}</span>
            <CountUp
              to={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              delay={i * 0.2}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            />
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className={`h-full rounded-full ${item.tone === 'coral' ? 'bg-coral' : 'bg-white'}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 1.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function StatCard({ stat }) {
  const primaryRef = getRef(stat.refIds[0])

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="relative flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="pt-2 text-xs font-semibold tracking-[0.16em] text-coral-soft uppercase">{stat.kicker}</p>
        <InfoTooltip refIds={stat.refIds} />
      </div>

      <div className="mt-6 min-h-30">
        {stat.comparison ? (
          <ComparisonBars items={stat.comparison} />
        ) : (
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <CountUp
              to={stat.value}
              decimals={stat.decimals ?? 0}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="font-display text-6xl leading-none font-bold text-white sm:text-7xl"
            />
            <span className="text-base font-medium text-white/70">{stat.unit}</span>
          </p>
        )}
      </div>

      <h3 className="mt-6 text-lg leading-snug font-semibold text-white sm:text-xl">{stat.headline}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75 sm:text-base">
        <CitedText text={stat.body} refIds={stat.refIds} tone="dark" />
      </p>

      <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/60">
        <span className="font-semibold text-white/80">Reference:</span> {primaryRef.short}, {primaryRef.title} (
        {primaryRef.year})
      </p>
    </motion.article>
  )
}
