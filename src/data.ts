export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  name: string
  client: string
  category: string
  year: string
  summary: string
  image: string
  links: ProjectLink[]
}

export const skills = [
  {
    name: 'Dart & Flutter',
    detail: 'iOS and Android radio & streaming apps',
  },
  {
    name: 'TypeScript',
    detail: 'Web apps, admin dashboards, and product sites',
  },
  {
    name: 'Go',
    detail: 'APIs and backends for live media products',
  },
  {
    name: 'JavaScript',
    detail: 'Interactive frontends and Node services',
  },
  {
    name: 'Python',
    detail: 'Scripts, services, and backend systems',
  },
  {
    name: 'Django',
    detail: 'Full-stack web apps and admin backends',
  },
  {
    name: 'FastAPI',
    detail: 'High-performance Python APIs',
  },
  {
    name: 'PostgreSQL',
    detail: 'Relational data for production products',
  },
  {
    name: 'SQLite',
    detail: 'Local and lightweight app databases',
  },
  {
    name: 'Firebase',
    detail: 'Auth, realtime data, and cloud messaging',
  },
  {
    name: 'Kotlin & Swift',
    detail: 'Native layers alongside Flutter mobile builds',
  },
]

export const projects: Project[] = [
  {
    id: 'nrg-ug',
    name: 'NRG UG Radio',
    client: 'NRG Uganda',
    category: 'Radio',
    year: '2023',
    summary:
      'Built the website and Flutter apps for NRG 106.5 FM — live listen & watch, shows, news, and events.',
    image: '/work/nrg-ug.jpg',
    links: [
      { label: 'Website', url: 'https://www.nrgug.radio/' },
      {
        label: 'Android app',
        url: 'https://play.google.com/store/apps/details?id=com.nrgug.player',
      },
      {
        label: 'iOS app',
        url: 'https://apps.apple.com/ug/app/nrg-radio-uganda/id6633429782',
      },
    ],
  },
  {
    id: 'stream-ug',
    name: 'Stream UG Radio',
    client: 'Stream UG Radio',
    category: 'Radio',
    year: '2023',
    summary:
      'App and website for Kampala digital radio — live stream, schedule, news, and culture.',
    image: '/work/stream-ug.jpg',
    links: [
      { label: 'Website', url: 'https://streamugradio.com/' },
      { label: 'App', url: 'https://streamugradio.com/changelog' },
    ],
  },
  {
    id: 'mesob-live',
    name: 'Mesob Live',
    client: 'Mesob',
    category: 'Live',
    year: '2024',
    summary:
      'App, website, and API for Habesha cultural radio — live shows for East Africa and the diaspora.',
    image: '/work/mesob-live.jpg',
    links: [
      { label: 'Website', url: 'https://www.mesob.live/' },
      {
        label: 'Android app',
        url: 'https://play.google.com/store/apps/details?id=com.mesob.player',
      },
    ],
  },
  {
    id: 'playtz',
    name: 'Playtz',
    client: 'Playtz',
    category: 'Entertainment',
    year: '2024',
    summary:
      'Streaming product across web and app — identity, profiles, and content navigation.',
    image: '/work/playtz.jpg',
    links: [
      { label: 'Website', url: 'https://playtz.com/' },
      {
        label: 'Android app',
        url: 'https://play.google.com/store/apps/details?id=com.playtz.radio',
      },
    ],
  },
  {
    id: 'sabc-news',
    name: 'SABC News',
    client: 'SABC',
    category: 'News',
    year: '2022',
    summary: 'Live news product for South Africa’s public broadcaster.',
    image: '/work/sabc-news.jpg',
    links: [{ label: 'Website', url: 'https://www.sabcnews.com/' }],
  },
  {
    id: 'sabc-tv',
    name: 'SABC TV',
    client: 'SABC',
    category: 'Television',
    year: '2022',
    summary: 'Programme guides and viewer journeys for national TV.',
    image: '/work/sabc-tv.jpg',
    links: [{ label: 'Website', url: 'https://www.sabc.co.za/' }],
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    client: 'Teamwork.com',
    category: 'SaaS',
    year: '2021',
    summary: 'Project and client work management for agency profitability.',
    image: '/work/teamwork.jpg',
    links: [{ label: 'Website', url: 'https://www.teamwork.com/' }],
  },
  {
    id: 'thoughtworks',
    name: 'ThoughtWorks',
    client: 'ThoughtWorks',
    category: 'Consulting',
    year: '2021',
    summary: 'Digital product delivery with engineering teams across the stack.',
    image: '/work/thoughtworks.jpg',
    links: [{ label: 'Website', url: 'https://www.thoughtworks.com/' }],
  },
  {
    id: 'vodafone-travel',
    name: 'Vodafone Travel',
    client: 'Vodafone',
    category: 'Travel',
    year: '2021',
    summary: 'Roaming and travel connectivity for people on the move.',
    image: '/work/vodafone-travel.jpg',
    links: [
      { label: 'Website', url: 'https://www.vodafone.com/' },
      { label: 'App', url: 'https://www.vodafone.com/' },
    ],
  },
  {
    id: 'mastercard-travel',
    name: 'Mastercard Travel Pass',
    client: 'Mastercard',
    category: 'Fintech',
    year: '2020',
    summary: 'Travel pass benefits and spend experience abroad.',
    image: '/work/mastercard-travel.jpg',
    links: [
      { label: 'Website', url: 'https://www.mastercard.com/' },
      { label: 'App', url: 'https://www.mastercard.com/' },
    ],
  },
]
