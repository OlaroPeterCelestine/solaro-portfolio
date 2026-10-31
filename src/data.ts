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
  story: string
  image: string
  links: ProjectLink[]
  featured?: boolean
  stack?: string[]
}

export const skills = [
  {
    name: 'Flutter',
    detail:
      'One codebase for the Android phones most radio listeners actually own — and iOS when the station needs both.',
  },
  {
    name: 'TypeScript',
    detail:
      'Web clients, admin dashboards, and product sites that stay readable when the live desk is busy.',
  },
  {
    name: 'Go',
    detail: 'APIs that keep live streams, schedules, and news feeds moving without drama.',
  },
  {
    name: 'Python',
    detail: 'Scripts, services, and backend systems when the job calls for speed of thought.',
  },
  {
    name: 'Django',
    detail: 'Full-stack web apps and admin backends that editors and producers can actually use.',
  },
  {
    name: 'FastAPI',
    detail: 'Lean Python APIs for mobile apps that need answers in a hurry.',
  },
  {
    name: 'PostgreSQL',
    detail: 'Production data for shows, users, and the stuff you cannot afford to lose.',
  },
  {
    name: 'SQLite',
    detail: 'Local and lightweight storage when the app has to work offline first.',
  },
  {
    name: 'Firebase',
    detail: 'Auth, realtime bits, and push — the quiet glue behind many live products.',
  },
  {
    name: 'JavaScript',
    detail: 'Interactive frontends and Node services around the bigger systems.',
  },
  {
    name: 'IoT',
    detail:
      'Connected devices and sensor-driven systems — bridging hardware signals to software people can use.',
  },
  {
    name: 'Automation',
    detail:
      'Workflows that remove the boring work: pipelines, scripts, and systems that keep running without babysitting.',
  },
  {
    name: 'Data analysis',
    detail:
      'Turning raw logs and metrics into clear decisions — dashboards, insights, and stories the team can act on.',
  },
]

export const projects: Project[] = [
  {
    id: 'nrg-ug',
    name: 'NRG UG Radio',
    client: 'NRG Uganda',
    category: 'App · Web · API',
    year: '2023',
    summary: 'Live listen & watch for Uganda’s youth radio — without missing the next track.',
    story:
      'NRG needed more than a brochure site. I built the website and Flutter apps so listeners can stream, watch, catch shows, and stay close to the desk — on the phone and in the browser.',
    image: '/work/nrg-ug.jpg',
    featured: true,
    stack: ['Flutter', 'TypeScript', 'Go'],
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
    category: 'App · Web',
    year: '2023',
    summary: 'Kampala digital radio — live stream, schedule, news, culture.',
    story:
      'Stream UG is radio for people who live on their phones. App and website share one story: what’s on air, what’s next, and what’s happening in the city.',
    image: '/work/stream-ug.jpg',
    featured: true,
    stack: ['Flutter', 'TypeScript'],
    links: [
      { label: 'Website', url: 'https://streamugradio.com/' },
      { label: 'App', url: 'https://streamugradio.com/changelog' },
    ],
  },
  {
    id: 'mesob-live',
    name: 'Mesob Live',
    client: 'Mesob',
    category: 'App · Web · API',
    year: '2024',
    summary: 'Habesha cultural radio for East Africa and the diaspora.',
    story:
      'Mesob Live carries culture across borders. I worked across app, website, and API so the live desk reaches listeners wherever they are.',
    image: '/work/mesob-live.jpg',
    featured: true,
    stack: ['Flutter', 'TypeScript', 'Go'],
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
    category: 'App · Web · API',
    year: '2024',
    summary: 'Streaming that feels like one product on web and mobile.',
    story:
      'Playtz needed identity, profiles, and content rails that feel the same whether you open the site or the app. I helped stitch that together.',
    image: '/work/playtz.jpg',
    featured: true,
    stack: ['TypeScript', 'Go', 'Flutter'],
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
    category: 'Web',
    year: '2022',
    summary: 'Live news for South Africa’s public broadcaster.',
    story:
      'News has to stay clear when everything is breaking. Work on the live news product for a national broadcaster.',
    image: '/work/sabc-news.jpg',
    links: [{ label: 'Website', url: 'https://www.sabcnews.com/' }],
  },
  {
    id: 'sabc-tv',
    name: 'SABC TV',
    client: 'SABC',
    category: 'Web',
    year: '2022',
    summary: 'Programme guides and viewer journeys for national TV.',
    story: 'TV product surfaces for schedules and watching at scale.',
    image: '/work/sabc-tv.jpg',
    links: [{ label: 'Website', url: 'https://www.sabc.co.za/' }],
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    client: 'Teamwork.com',
    category: 'Web',
    year: '2021',
    summary: 'Project work that helps agencies stay profitable.',
    story: 'SaaS product work around projects, clients, and delivery.',
    image: '/work/teamwork.jpg',
    links: [{ label: 'Website', url: 'https://www.teamwork.com/' }],
  },
  {
    id: 'thoughtworks',
    name: 'ThoughtWorks',
    client: 'ThoughtWorks',
    category: 'Consulting',
    year: '2021',
    summary: 'Shipping with engineering teams across the stack.',
    story: 'Digital product delivery alongside consultants and engineers.',
    image: '/work/thoughtworks.jpg',
    links: [{ label: 'Website', url: 'https://www.thoughtworks.com/' }],
  },
  {
    id: 'vodafone-travel',
    name: 'Vodafone Travel',
    client: 'Vodafone',
    category: 'App · Web',
    year: '2021',
    summary: 'Roaming clarity for people on the move.',
    story: 'Travel connectivity product work for people who need signal abroad.',
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
    category: 'App · Web',
    year: '2020',
    summary: 'Travel benefits that make sense at the border.',
    story: 'Travel pass product work for spend and benefits abroad.',
    image: '/work/mastercard-travel.jpg',
    links: [
      { label: 'Website', url: 'https://www.mastercard.com/' },
      { label: 'App', url: 'https://www.mastercard.com/' },
    ],
  },
]

export const lessons = [
  {
    wrong: 'Ship the stream first.',
    right: 'Ship the listen moment first.',
    body: 'Radio products win when someone taps play and hears something in under a second. The fancy schedule can wait.',
    note: '↳ learned this on live desks',
  },
  {
    wrong: 'One platform is enough.',
    right: 'App and web have to feel like one station.',
    body: 'Listeners bounce between phone and browser. If the brand breaks between them, trust breaks with it.',
    note: '↳ NRG, Stream UG, Mesob',
  },
  {
    wrong: 'Backend is invisible.',
    right: 'Backend is the on-air reliability.',
    body: 'APIs, databases, and push are why the live show does not drop mid-sentence. Quiet work. Loud impact.',
    note: '↳ Go · Firebase · Postgres',
  },
]
