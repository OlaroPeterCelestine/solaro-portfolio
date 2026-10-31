export const WHATSAPP_MESSAGE =
  'Hi Olaro, I saw your portfolio and would like to talk.'

export type WhatsAppContact = {
  label: string
  display: string
  number: string
  url: string
}

function waUrl(number: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    label: 'Uganda',
    display: '+256 762 380 194',
    number: '256762380194',
    url: waUrl('256762380194'),
  },
  {
    label: 'Kenya',
    display: '+254 119 564 688',
    number: '254119564688',
    url: waUrl('254119564688'),
  },
]

/** Primary floating button uses the Uganda number. */
export const WHATSAPP_URL = WHATSAPP_CONTACTS[0].url
