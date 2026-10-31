export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  name: string
  category: string
  year: string
  summary: string
  story: string
  image: string
  links: ProjectLink[]
  featured?: boolean
  stack?: string[]
  role?: string
  caption?: string
}

export const skills = [
  {
    name: 'Flutter',
    detail:
      'One codebase for the Android phones most radio listeners actually own — and iOS when the station needs both.',
    showsIn: ['nrg-ug', 'stream-ug', 'mesob-live', 'playtz', 'sabc-tv'],
  },
  {
    name: 'TypeScript',
    detail:
      'Web clients, admin dashboards, and product sites that stay readable when the live desk is busy.',
    showsIn: ['nrg-ug', 'stream-ug', 'mesob-live', 'playtz', 'flip-avenue'],
  },
  {
    name: 'Go',
    detail: 'APIs that keep live streams, schedules, and news feeds moving without drama.',
    showsIn: ['nrg-ug', 'mesob-live', 'playtz'],
  },
  {
    name: 'Python',
    detail: 'Scripts, services, and backend systems when the job calls for speed of thought.',
    showsIn: ['teamwork', 'thoughtworks'],
  },
  {
    name: 'Django',
    detail: 'Full-stack web apps and admin backends that editors and producers can actually use.',
    showsIn: ['teamwork', 'thoughtworks'],
  },
  {
    name: 'FastAPI',
    detail: 'Lean Python APIs for mobile apps that need answers in a hurry.',
    showsIn: ['vodafone-travel', 'mastercard-travel'],
  },
  {
    name: 'PostgreSQL',
    detail: 'Production data for shows, users, and the stuff you cannot afford to lose.',
    showsIn: ['nrg-ug', 'mesob-live', 'playtz'],
  },
  {
    name: 'Firebase',
    detail: 'Auth, realtime bits, and push — the quiet glue behind many live products.',
    showsIn: ['nrg-ug', 'stream-ug', 'mesob-live'],
  },
  {
    name: 'IoT',
    detail:
      'Connected devices and sensor-driven systems — bridging hardware signals to software people can use.',
    showsIn: [],
  },
  {
    name: 'Automation',
    detail:
      'Workflows that remove the boring work: pipelines, scripts, and systems that keep running without babysitting.',
    showsIn: ['thoughtworks', 'teamwork'],
  },
  {
    name: 'Data analysis',
    detail:
      'Turning raw logs and metrics into clear decisions — dashboards, insights, and stories the team can act on.',
    showsIn: ['sabc-news', 'vodafone-travel'],
  },
]

export const projects: Project[] = [
  {
    id: 'nrg-ug',
    name: 'NRG UG Radio',
    category: 'App · Web · API',
    year: '2023',
    summary:
      'Live listen & watch for Uganda’s youth radio — without missing the next track.',
    story:
      'NRG needed more than a brochure site. I built the website and Flutter apps so listeners can stream, watch, catch shows, and stay close to the desk — on the phone and in the browser.',
    image: '/work/nrg-ug.jpg',
    featured: true,
    stack: ['Flutter', 'TypeScript', 'Go'],
    role: 'App · Website · API',
    caption: 'the one that stays on in the matatu',
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
    category: 'App · Web',
    year: '2023',
    summary: 'Kampala digital radio — live stream, schedule, news, culture.',
    story:
      'Stream UG is radio for people who live on their phones. App and website share one story: what’s on air, what’s next, and what’s happening in the city.',
    image: '/work/stream-ug.jpg',
    featured: true,
    stack: ['Flutter', 'TypeScript'],
    role: 'App · Website',
    caption: 'built for the commute and the late night',
    links: [
      { label: 'Website', url: 'https://streamugradio.com/' },
      { label: 'App', url: 'https://streamugradio.com/changelog' },
    ],
  },
  {
    id: 'mesob-live',
    name: 'Mesob Live',
    category: 'App · Web · API',
    year: '2024',
    summary: 'Habesha cultural radio for East Africa and the diaspora.',
    story:
      'Mesob Live carries culture across borders. I worked across app, website, and API so the live desk reaches listeners wherever they are.',
    image: '/work/mesob-live.jpg',
    featured: true,
    stack: ['Flutter', 'TypeScript', 'Go'],
    role: 'App · Website · API',
    caption: 'culture that doesn’t drop when the signal dips',
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
    category: 'App · Web · API',
    year: '2024',
    summary: 'Streaming that feels like one product on web and mobile.',
    story:
      'Playtz needed identity, profiles, and content rails that feel the same whether you open the site or the app. I helped stitch that together.',
    image: '/work/playtz.jpg',
    featured: true,
    stack: ['TypeScript', 'Go', 'Flutter'],
    role: 'Product · Front-end · API',
    caption: 'one brand, every screen',
    links: [
      { label: 'Website', url: 'https://playtz.com/' },
      {
        label: 'Android app',
        url: 'https://play.google.com/store/apps/details?id=com.playtz.radio',
      },
    ],
  },
  {
    id: 'flip-avenue',
    name: 'Flip Avenue Limited',
    category: 'Web',
    year: '2024',
    summary:
      'Interior architecture studio site — projects, process, and a clear path to book a visit.',
    story:
      'Flip Avenue needed a website that feels like the studio: calm, material-led, and easy for clients in Kampala to explore projects and get in touch.',
    image: '/work/flip-avenue.jpg',
    links: [{ label: 'Website', url: 'https://flipavenueltd.com/' }],
  },
  {
    id: 'sabc-news',
    name: 'SABC News',
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
    category: 'App · Web',
    year: '2022',
    summary:
      'National TV on the web and in your pocket — live, catch-up, and watching at scale.',
    story:
      'SABC TV needed to meet viewers on every screen. Website plus iOS and Android apps for programme guides, live channels, and catch-up.',
    image: '/work/sabc-tv.jpg',
    links: [
      { label: 'Website', url: 'https://www.sabc.co.za/' },
      {
        label: 'Android app',
        url: 'https://play.google.com/store/apps/details?id=tv.sabcplus.vod',
      },
      {
        label: 'iOS app',
        url: 'https://apps.apple.com/za/app/sabc/id6444331178',
      },
    ],
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
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
    category: 'App · Web',
    year: '2021',
    summary: 'Roaming clarity for people on the move.',
    story: 'Travel connectivity product work for people who need signal abroad.',
    image: '/work/vodafone-travel.jpg',
    links: [
      { label: 'Website', url: 'https://travel.vodafone.com/' },
      { label: 'App', url: 'https://travel.vodafone.com/' },
    ],
  },
  {
    id: 'mastercard-travel',
    name: 'Mastercard Travel Pass',
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

export const heroPhrases = [
  'the live listen',
  'the morning drive',
  'the diaspora dial-in',
  'the newsroom cut',
  'the stadium roar',
]

export const statusLines = [
  'DEEP IN VS CODE',
  'ON AIR',
  'SHIPPING QUIETLY',
  'LISTENING FIRST',
]
