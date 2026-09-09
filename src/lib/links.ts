import { siteConfig } from '../data/clinic'

/* =====================================================================
   Sem backend: toda conversao acontece via link direto.
   WhatsApp (api oficial wa.me), tel:, mailto: e links externos.
===================================================================== */

/**
 * Monta o link da API do WhatsApp com mensagem pre-preenchida.
 * Ex.: whatsappLink('Quero saber sobre implantes')
 */
export function whatsappLink(message: string = siteConfig.whatsappMessage): string {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}

/** Mensagem contextualizada por servico — melhora a taxa de resposta. */
export function whatsappServiceLink(service: string): string {
  return whatsappLink(
    `Olá! Vim pelo site e gostaria de saber mais sobre ${service}. Podemos conversar?`,
  )
}

export const telLink = `tel:${siteConfig.phoneRaw}`

export function mailtoLink(
  subject = 'Agendamento de avaliação',
  body = 'Olá! Gostaria de agendar uma avaliação.',
): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`
}

/* =====================================================================
   Links do Google — todos derivados do mesmo Place ID (clinic.ts).
   Um placeid invalido faz o Google responder 404, e uma busca por endereco
   (maps.google.com/?q=...) abre a area do mapa em vez do perfil da clinica.
===================================================================== */

/** Formulario "Escrever avaliacao" do perfil da clinica. */
export const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${siteConfig.googlePlaceId}`

/** Lista completa de avaliacoes do perfil. */
export const googleReviewsUrl = `https://search.google.com/local/reviews?placeid=${siteConfig.googlePlaceId}`

/** Ficha da clinica no Maps, com o pin exato em vez de uma busca por endereco. */
export const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${siteConfig.googlePlaceId}`

export const fullAddress = `${siteConfig.address.street} — ${siteConfig.address.district}, ${siteConfig.address.city}/${siteConfig.address.state} · CEP ${siteConfig.address.zip}`

/** Props padrao para qualquer link que abre fora do site. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const
