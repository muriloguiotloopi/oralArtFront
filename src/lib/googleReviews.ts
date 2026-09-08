import googleDataRaw from '../data/google-reviews.json'
import { ratingBreakdown, reviews as mockReviews, siteConfig } from '../data/clinic'

/* =====================================================================
   Fonte unica das avaliacoes exibidas na secao de prova social.

   - Em producao, scripts/fetch-google-reviews.mjs roda no GitHub Actions
     e substitui google-reviews.json pelas avaliacoes reais da clinica.
   - Se a API falhar, faltar chave ou nao houver avaliacoes, cai
     automaticamente nos depoimentos mock de clinic.ts.
===================================================================== */

/**
 * Formato do arquivo gerado por scripts/fetch-google-reviews.mjs.
 * O tipo e declarado a mao porque o JSON versionado vem vazio — sem isso o
 * TypeScript infere `never[]` para `reviews` e o build quebra.
 */
type GoogleReviewsFile = {
  source: string
  fetchedAt: string | null
  rating: number | null
  total: number | null
  googleMapsUri: string | null
  reviews: {
    id: string
    author: string
    initials: string
    photoUrl: string | null
    profileUrl: string | null
    rating: number
    timeAgo: string
    publishTime: string | null
    text: string
  }[]
}

const googleData = googleDataRaw as GoogleReviewsFile

export type DisplayReview = {
  id: string
  author: string
  initials: string
  /** Foto e link do perfil: atribuicao exigida pelos termos do Maps Platform. */
  photoUrl: string | null
  profileUrl: string | null
  rating: number
  timeAgo: string
  text: string
  /** So existe nos depoimentos mock — a API do Google nao devolve isso. */
  treatment: string | null
  accent: string
}

/** Tons usados no anel do avatar, ciclados na ordem de exibicao. */
const ACCENTS = ['#c9a227', '#d8bf7d', '#a8841c', '#e3cd96', '#cbb26a']

const isGoogle = googleData.source === 'google' && googleData.reviews.length > 0

const googleReviews: DisplayReview[] = googleData.reviews.map((review, index) => ({
  id: review.id,
  author: review.author,
  initials: review.initials,
  photoUrl: review.photoUrl,
  profileUrl: review.profileUrl,
  rating: review.rating,
  timeAgo: review.timeAgo,
  text: review.text,
  treatment: null,
  accent: ACCENTS[index % ACCENTS.length],
}))

const fallbackReviews: DisplayReview[] = mockReviews.map((review) => ({
  id: review.id,
  author: review.author,
  initials: review.initials,
  photoUrl: null,
  profileUrl: null,
  rating: review.rating,
  timeAgo: review.timeAgo,
  text: review.text,
  treatment: review.treatment,
  accent: review.accent,
}))

export const reviewsData = {
  /** 'google' = dados reais da Places API; 'fallback' = depoimentos mock. */
  source: isGoogle ? ('google' as const) : ('fallback' as const),
  reviews: isGoogle ? googleReviews : fallbackReviews,
  rating: isGoogle && googleData.rating ? googleData.rating : siteConfig.googleRating,
  total: isGoogle && googleData.total ? googleData.total : siteConfig.googleReviewCount,
  profileUrl: (isGoogle && googleData.googleMapsUri) || siteConfig.googleMapsUrl,
  fetchedAt: isGoogle ? googleData.fetchedAt : null,
  /**
   * A Places API nao devolve a distribuicao por estrela. Com dados reais a
   * secao esconde as barras em vez de exibir numeros inventados.
   */
  breakdown: isGoogle ? null : ratingBreakdown,
}

export function formatFetchedAt(iso: string | null): string | null {
  if (!iso) return null
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long' }).format(date)
}
