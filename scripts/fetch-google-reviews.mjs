/**
 * Busca as avaliacoes reais do Google (Places API New) em tempo de build e
 * grava src/data/google-reviews.json.
 *
 * Roda no GitHub Actions, nunca no navegador: a chave fica em GitHub Secrets
 * e o site continua 100% estatico.
 *
 * Falha de forma silenciosa e proposital — se faltar variavel de ambiente ou
 * a API responder erro, o script sai com codigo 0 e o site usa o fallback
 * (depoimentos de src/data/clinic.ts). Deploy nunca quebra por causa da API.
 */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const OUTPUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'google-reviews.json')

const FALLBACK = {
  source: 'fallback',
  fetchedAt: null,
  rating: null,
  total: null,
  googleMapsUri: null,
  reviews: [],
}

/** A Places API (New) devolve no maximo 5 reviews e nao aceita parametro de ordenacao. */
const FIELD_MASK = 'id,displayName,rating,userRatingCount,googleMapsUri,reviews'

function initialsFrom(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '··'
  const first = parts[0][0] ?? ''
  const last = parts.length > 1 ? (parts.at(-1)[0] ?? '') : ''
  return (first + last).toUpperCase()
}

async function main() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    console.warn('[reviews] GOOGLE_MAPS_API_KEY ou GOOGLE_PLACE_ID ausentes — mantendo fallback.')
    await writeFile(OUTPUT, `${JSON.stringify(FALLBACK, null, 2)}\n`, 'utf8')
    return
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pt-BR&regionCode=BR`

  const response = await fetch(url, {
    headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': FIELD_MASK },
  })

  if (!response.ok) {
    console.warn(`[reviews] Places API respondeu ${response.status} — mantendo fallback.`)
    console.warn(await response.text())
    await writeFile(OUTPUT, `${JSON.stringify(FALLBACK, null, 2)}\n`, 'utf8')
    return
  }

  const place = await response.json()
  const rawReviews = Array.isArray(place.reviews) ? place.reviews : []

  if (rawReviews.length === 0) {
    console.warn('[reviews] Nenhuma avaliação retornada — mantendo fallback.')
    await writeFile(OUTPUT, `${JSON.stringify(FALLBACK, null, 2)}\n`, 'utf8')
    return
  }

  const reviews = rawReviews
    // a API nao ordena; ordenamos localmente as 5 recebidas da mais nova para a mais antiga
    .sort((a, b) => Date.parse(b.publishTime ?? 0) - Date.parse(a.publishTime ?? 0))
    .map((review, index) => {
      const author = review.authorAttribution ?? {}
      return {
        id: review.name ?? `google-${index}`,
        author: author.displayName ?? 'Paciente',
        initials: initialsFrom(author.displayName ?? 'Paciente'),
        // atribuicao obrigatoria pelos termos do Maps Platform
        photoUrl: author.photoUri ?? null,
        profileUrl: author.uri ?? null,
        rating: review.rating ?? 5,
        timeAgo: review.relativePublishTimeDescription ?? '',
        publishTime: review.publishTime ?? null,
        text: review.text?.text ?? review.originalText?.text ?? '',
      }
    })
    .filter((review) => review.text.length > 0)

  const payload = {
    source: 'google',
    fetchedAt: new Date().toISOString(),
    rating: place.rating ?? null,
    total: place.userRatingCount ?? null,
    googleMapsUri: place.googleMapsUri ?? null,
    reviews,
  }

  await writeFile(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log(`[reviews] ${reviews.length} avaliações gravadas (nota ${payload.rating}, ${payload.total} no total).`)
}

main().catch(async (error) => {
  console.warn('[reviews] Falha inesperada — mantendo fallback.')
  console.warn(error)
  await writeFile(OUTPUT, `${JSON.stringify(FALLBACK, null, 2)}\n`, 'utf8')
})
