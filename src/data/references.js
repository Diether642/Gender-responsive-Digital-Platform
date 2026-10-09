/**
 * Single source of truth for every citation on the site.
 *
 * Tooltips, inline [n] markers, accordion citations and the footer
 * bibliography all read from this list, so a reference only ever has to be
 * edited in one place. The number shown on the site is the item's position
 * in this array (1-based).
 *
 * Before submitting, double-check each figure and URL against the original
 * source — especially the PSA unpaid-care entry (ref "psa-care").
 */
export const references = [
  {
    id: 'wef-2023',
    short: 'World Economic Forum',
    author: 'World Economic Forum',
    year: '2023',
    title: 'Global Gender Gap Report 2023',
    publisher: 'World Economic Forum',
    url: 'https://www.weforum.org/publications/global-gender-gap-report-2023/',
  },
  {
    id: 'psa-care',
    short: 'Philippine Statistics Authority',
    author: 'Philippine Statistics Authority',
    year: 'n.d.',
    title: 'National Demographic and Health Survey: Time spent on unpaid care and domestic work',
    publisher: 'Philippine Statistics Authority',
    url: 'https://psa.gov.ph/',
  },
  {
    id: 'psa-lfs-2023',
    short: 'Philippine Statistics Authority',
    author: 'Philippine Statistics Authority',
    year: '2023',
    title: 'Labor Force Survey',
    publisher: 'Philippine Statistics Authority',
    url: 'https://psa.gov.ph/statistics/labor-force-survey',
  },
  {
    id: 'ra-9710',
    short: 'Republic Act No. 9710',
    author: 'Republic of the Philippines',
    year: '2009',
    title: 'Republic Act No. 9710: The Magna Carta of Women',
    publisher: 'Official Gazette of the Republic of the Philippines',
    url: 'https://www.officialgazette.gov.ph/2009/08/14/republic-act-no-9710/',
  },
  {
    id: 'ra-6725',
    short: 'Republic Act No. 6725',
    author: 'Republic of the Philippines',
    year: '1989',
    title:
      'Republic Act No. 6725: An Act Strengthening the Prohibition on Discrimination Against Women with Respect to Terms and Conditions of Employment, Amending for the Purpose Article One Hundred Thirty-Five of the Labor Code, as Amended',
    publisher: 'The LawPhil Project',
    url: 'https://lawphil.net/statutes/repacts/ra1989/ra_6725_1989.html',
  },
  {
    id: 'ra-11313',
    short: 'Republic Act No. 11313',
    author: 'Republic of the Philippines',
    year: '2019',
    title: 'Republic Act No. 11313: Safe Spaces Act',
    publisher: 'Official Gazette of the Republic of the Philippines',
    url: 'https://www.officialgazette.gov.ph/2019/04/17/republic-act-no-11313/',
  },
]

const byId = new Map(references.map((ref, i) => [ref.id, { ...ref, number: i + 1 }]))

/** Look up a reference (with its display number) by id. */
export function getRef(id) {
  const ref = byId.get(id)
  if (!ref) throw new Error(`Unknown reference id: ${id}`)
  return ref
}
