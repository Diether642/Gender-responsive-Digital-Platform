/**
 * Page content. Every claim lists the reference ids (see references.js)
 * that support it; components render those as tooltips and [n] links.
 */

export const stats = [
  {
    id: 'segregation',
    kicker: 'Occupational segregation',
    value: 16,
    prefix: '#',
    suffix: '',
    unit: 'of 146 countries',
    headline: 'High global parity rank, yet an uneven workplace',
    body: 'The Philippines ranks among the top countries worldwide for gender parity, but occupational segregation persists: women remain overrepresented in lower-paying sectors.',
    refIds: ['wef-2023'],
  },
  {
    id: 'unpaid-care',
    kicker: 'Unpaid care work',
    value: 2.5,
    decimals: 1,
    prefix: '',
    suffix: '×',
    unit: 'more time than men',
    headline: 'The invisible second shift',
    body: 'Women spend roughly 2.5 times more time than men on unpaid care and domestic work, limiting their ability to take on full-time paid employment.',
    refIds: ['psa-care'],
  },
  {
    id: 'participation',
    kicker: 'Labor force participation',
    headline: 'Half of women’s potential stays outside the workforce',
    body: 'Only about half of working-age women are in the labor force, compared with more than seven in ten working-age men.',
    comparison: [
      { label: 'Women', value: 50, prefix: '~', suffix: '%', tone: 'coral' },
      { label: 'Men', value: 70, prefix: '', suffix: '%+', tone: 'white' },
    ],
    refIds: ['psa-lfs-2023'],
  },
]

export const laws = [
  {
    id: 'ra-9710',
    code: 'R.A. 9710',
    name: 'The Magna Carta of Women',
    enacted: 'Approved August 14, 2009',
    summary:
      'A comprehensive women’s human rights law that eliminates discrimination against women by recognizing, protecting, fulfilling and promoting their rights, especially those in marginalized sectors.',
    protections: [
      'Prohibits discrimination against women, whether by public or private entities or individuals.',
      'Guarantees non-discrimination in employment in the military, police and similar services, including equal opportunity for appointment, promotion and training.',
      'Guarantees women equal access to education, scholarships and training.',
      'Recognizes women’s right to decent work and grants a special leave benefit of up to two months with full pay after surgery for gynecological disorders.',
    ],
    citation:
      'Republic Act No. 9710, “An Act Providing for the Magna Carta of Women” (2009). Official Gazette of the Republic of the Philippines.',
    refId: 'ra-9710',
  },
  {
    id: 'ra-6725',
    code: 'R.A. 6725',
    name: 'Prohibition on Workplace Discrimination',
    enacted: 'Approved May 12, 1989',
    summary:
      'Strengthens the Labor Code’s ban on discrimination against women employees with respect to the terms and conditions of employment by amending Article 135 of the Labor Code.',
    protections: [
      'Makes it unlawful to pay a woman lower compensation, including wages, salary and fringe benefits, than a man for work of equal value.',
      'Makes it unlawful to favor a male employee over a female employee in promotion, training opportunities, study and scholarship grants solely because of sex.',
      'Allows the affected employee to file a civil action for damages and other affirmative relief.',
      'Violations carry criminal liability under the penal provisions of the Labor Code.',
    ],
    citation:
      'Republic Act No. 6725 (1989), amending Article 135 of Presidential Decree No. 442 (Labor Code of the Philippines). The LawPhil Project.',
    refId: 'ra-6725',
  },
  {
    id: 'ra-11313',
    code: 'R.A. 11313',
    name: 'Safe Spaces Act (Bawal Bastos Law)',
    enacted: 'Approved April 17, 2019',
    summary:
      'Protects everyone from gender-based sexual harassment in streets, public spaces, online, workplaces, and educational and training institutions.',
    protections: [
      'Defines and penalizes gender-based sexual harassment in the workplace, including harassment between peers and by a subordinate toward a superior.',
      'Requires employers to disseminate the law, adopt measures to prevent harassment, and provide an independent internal mechanism to investigate complaints.',
      'Covers online harassment, such as unwanted sexist remarks, threats and the non-consensual sharing of photos.',
      'Holds employers liable when they fail to act on reported harassment.',
    ],
    citation:
      'Republic Act No. 11313, “An Act Defining Gender-Based Sexual Harassment in Streets, Public Spaces, Online, Workplaces, and Educational or Training Institutions” (2019). Official Gazette of the Republic of the Philippines.',
    refId: 'ra-11313',
  },
]

export const actions = [
  {
    id: 'employers',
    audience: 'For Employers',
    tagline: 'Corporate responsibility starts with the systems you build.',
    icon: 'building',
    items: [
      {
        title: 'Run transparent salary audits',
        text: 'Review pay by role and gender every year, publish salary bands, and close any gap for work of equal value.',
        refIds: ['ra-6725', 'wef-2023'],
      },
      {
        title: 'Adopt blind resume screening',
        text: 'Remove names, photos, age and marital status from applications so hiring is based on skills, not unconscious bias.',
        refIds: ['ra-9710'],
      },
      {
        title: 'Open every door equally',
        text: 'Set clear, published criteria for promotions, training and scholarships so opportunities are never allocated by sex.',
        refIds: ['ra-6725'],
      },
      {
        title: 'Build a harassment-free workplace',
        text: 'Publish an anti-harassment policy, train staff, and set up an independent committee to handle complaints quickly and fairly.',
        refIds: ['ra-11313'],
      },
    ],
  },
  {
    id: 'allies',
    audience: 'For Employees & Allies',
    tagline: 'Everyone has a role in making equality the everyday norm.',
    icon: 'people',
    items: [
      {
        title: 'Know your rights and speak up',
        text: 'Learn the protections in the Magna Carta of Women and the Labor Code, and advocate for fair pay and fair treatment for colleagues.',
        refIds: ['ra-9710', 'ra-6725'],
      },
      {
        title: 'Use the reporting mechanisms',
        text: 'Report gender-based harassment to your workplace’s internal committee, and support colleagues who come forward.',
        refIds: ['ra-11313'],
      },
      {
        title: 'Share the load at home',
        text: 'Split unpaid care and domestic work fairly so every household member can take part fully in paid work.',
        refIds: ['psa-care'],
      },
      {
        title: 'Champion accessible childcare',
        text: 'Support childcare and flexible work arrangements in your workplace and community so caregiving is never a barrier to employment.',
        refIds: ['psa-lfs-2023', 'psa-care'],
      },
    ],
  },
]
