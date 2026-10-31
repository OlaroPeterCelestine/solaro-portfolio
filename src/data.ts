export type Project = {
  id: string
  name: string
  client: string
  category: string
  year: string
  summary: string
  url: string
  image: string
  span: 'wide' | 'tall' | 'normal'
}

export const projects: Project[] = [
  {
    id: 'nrg-ug',
    name: 'NRG UG Radio',
    client: 'NRG Uganda',
    category: 'Radio',
    year: '2023',
    summary: 'Listen & watch live for NRG 106.5 FM Uganda — shows, deejays, news, and events.',
    url: 'https://www.nrgug.radio/',
    image: '/work/nrg-ug.jpg',
    span: 'wide',
  },
  {
    id: 'stream-ug',
    name: 'Stream UG Radio',
    client: 'Stream UG Radio',
    category: 'Radio',
    year: '2023',
    summary: 'Live listen experience for digital radio from Kampala — music, talk, and culture.',
    url: 'https://streamugradio.com/',
    image: '/work/stream-ug.jpg',
    span: 'tall',
  },
  {
    id: 'sabc-news',
    name: 'SABC News',
    client: 'SABC',
    category: 'News',
    year: '2022',
    summary: 'Live news product for South Africa’s public broadcaster.',
    url: 'https://www.sabcnews.com/',
    image: '/work/sabc-news.jpg',
    span: 'normal',
  },
  {
    id: 'sabc-tv',
    name: 'SABC TV',
    client: 'SABC',
    category: 'Television',
    year: '2022',
    summary: 'Programme guides and viewer journeys for national TV.',
    url: 'https://www.sabc.co.za/',
    image: '/work/sabc-tv.jpg',
    span: 'normal',
  },
  {
    id: 'mesob-live',
    name: 'Mesob Live',
    client: 'Mesob',
    category: 'Live',
    year: '2024',
    summary: 'Live culture and entertainment for the Ethiopian diaspora.',
    url: 'https://mesob.live/',
    image: '/work/mesob-live.jpg',
    span: 'wide',
  },
  {
    id: 'playtz',
    name: 'Playtz',
    client: 'Playtz',
    category: 'Entertainment',
    year: '2024',
    summary: 'Streaming identity, profiles, and content navigation.',
    url: 'https://playtz.com/',
    image: '/work/playtz.jpg',
    span: 'normal',
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    client: 'Teamwork.com',
    category: 'SaaS',
    year: '2021',
    summary: 'Project and client work management for agency profitability.',
    url: 'https://www.teamwork.com/',
    image: '/work/teamwork.jpg',
    span: 'normal',
  },
  {
    id: 'thoughtworks',
    name: 'ThoughtWorks',
    client: 'ThoughtWorks',
    category: 'Consulting',
    year: '2021',
    summary: 'Product design on digital engagements with engineering teams.',
    url: 'https://www.thoughtworks.com/',
    image: '/work/thoughtworks.jpg',
    span: 'normal',
  },
  {
    id: 'vodafone-travel',
    name: 'Vodafone Travel',
    client: 'Vodafone',
    category: 'Travel',
    year: '2021',
    summary: 'Roaming and travel connectivity for people on the move.',
    url: 'https://www.vodafone.com/',
    image: '/work/vodafone-travel.jpg',
    span: 'normal',
  },
  {
    id: 'mastercard-travel',
    name: 'Mastercard Travel Pass',
    client: 'Mastercard',
    category: 'Fintech',
    year: '2020',
    summary: 'Travel pass benefits and spend experience abroad.',
    url: 'https://www.mastercard.com/',
    image: '/work/mastercard-travel.jpg',
    span: 'tall',
  },
]
