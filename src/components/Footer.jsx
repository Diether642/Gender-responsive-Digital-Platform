import { references } from '../data/references.js'
import { ArrowUp, ExternalLink, Scale } from './icons.jsx'

export default function Footer() {
  return (
    <footer id="references" aria-labelledby="references-title" className="bg-ink text-white/75">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="grid size-9 place-items-center rounded-lg bg-indigo">
                <Scale className="size-5" />
              </span>
              Mind the Gap
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              An awareness platform on workplace gender discrimination and the wage gap in the Philippines, built to
              promote equality, inclusion, empowerment and social responsibility.
            </p>
            <a
              href="#top"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-ink focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <ArrowUp className="size-4" />
              Back to top
            </a>
          </div>

          <div>
            <h2 id="references-title" className="font-display text-2xl font-bold text-white sm:text-3xl">
              References
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Every statistic, law and claim on this site is numbered and linked to its source below.
            </p>

            <ol className="mt-8 space-y-3">
              {references.map((ref, i) => (
                <li
                  key={ref.id}
                  id={`ref-${i + 1}`}
                  className="flex gap-4 rounded-xl border border-white/10 p-4 text-sm leading-relaxed transition-colors target:border-coral target:bg-white/10"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-white tabular-nums">
                    {i + 1}
                  </span>
                  <p className="min-w-0">
                    {ref.author}. ({ref.year}). <cite className="text-white italic">{ref.title}</cite>.{' '}
                    {ref.publisher !== ref.author && `${ref.publisher}. `}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 break-all text-coral-soft underline-offset-2 hover:text-white hover:underline"
                    >
                      {ref.url}
                      <ExternalLink className="size-3.5 shrink-0" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-center text-xs sm:px-6 sm:text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <p className="font-semibold text-white">
            Designed and Developed by Diether B. Forgalidad | Midterm Project for Gender and Society.
          </p>
          <p className="text-white/60">Developed for Gender and Society Project.</p>
        </div>
      </div>
    </footer>
  )
}
