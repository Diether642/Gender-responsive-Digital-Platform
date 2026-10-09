import { getRef } from '../data/references.js'

/**
 * Inline numbered citation, e.g. [1], that jumps to the matching entry in
 * the footer bibliography.
 */
export default function CiteLink({ refId, tone = 'light' }) {
  const ref = getRef(refId)
  const toneClass =
    tone === 'dark'
      ? 'text-white/85 hover:text-white hover:bg-white/15 focus-visible:ring-white'
      : 'text-indigo hover:bg-indigo/10 focus-visible:ring-indigo'

  return (
    <a
      href={`#ref-${ref.number}`}
      className={`inline rounded px-0.5 align-super whitespace-nowrap text-[0.75em] font-semibold leading-none tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 ${toneClass}`}
      aria-label={`Reference ${ref.number}: ${ref.title}`}
    >
      [{ref.number}]
    </a>
  )
}

/**
 * Renders `text` followed by its citations, keeping the last word glued to
 * the markers so a lone [n] never wraps onto its own line.
 */
export function CitedText({ text, refIds, tone }) {
  const cut = text.lastIndexOf(' ') + 1
  return (
    <>
      {text.slice(0, cut)}
      <span className="whitespace-nowrap">
        {text.slice(cut)}
        {refIds.map((id) => (
          <CiteLink key={id} refId={id} tone={tone} />
        ))}
      </span>
    </>
  )
}
