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
    label: 'WhatsApp',
    display: '+256 762 380 194',
    number: '256762380194',
    url: waUrl('256762380194'),
  },
]

export const WHATSAPP_URL = WHATSAPP_CONTACTS[0].url
