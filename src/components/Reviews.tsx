import { ArrowUpRight, PenLine } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Stars from './ui/Stars'
import GoogleG from './ui/GoogleG'
import { formatFetchedAt, reviewsData } from '../lib/googleReviews'
import { externalLinkProps, googleReviewUrl } from '../lib/links'

export default function Reviews() {
  const { source, reviews, rating, total, profileUrl, breakdown, fetchedAt } = reviewsData
  const isLive = source === 'google'
  const updatedAt = formatFetchedAt(fetchedAt)
  const ratingLabel = rating.toFixed(1).replace('.', ',')

  return (
    <section id="avaliacoes" className="section-y bg-noir-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Feedbacks"
          title="O que nossos"
          accent="pacientes dizem"
          description="Depoimentos publicados por pacientes no perfil da clínica no Google. Nada é editado — leia na fonte e, se você já foi nosso cliente, deixe também a sua."
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-[20rem_1fr] lg:items-start lg:gap-16">
          {/* painel resumo */}
          <aside className="border border-white/8 bg-noir-900 p-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <GoogleG className="size-5" />
              <span className="font-sans text-[0.6rem] tracking-[0.22em] text-cream-500 uppercase">
                Avaliações do Google
              </span>
            </div>

            <div className="mt-8 flex items-end gap-4">
              <span className="gold-text font-display text-6xl leading-none">{ratingLabel}</span>
              <div className="pb-1.5">
                <Stars rating={rating} size={15} />
                <p className="mt-2 font-sans text-[0.6rem] tracking-[0.18em] text-cream-500 uppercase">
                  {total} avaliações
                </p>
              </div>
            </div>

            {/*
              A Places API nao devolve a distribuicao por estrela. Com dados
              reais as barras somem em vez de exibirmos numeros inventados.
            */}
            {breakdown ? (
              <ul className="mt-8 space-y-2.5">
                {breakdown.map((row) => (
                  <li key={row.stars} className="flex items-center gap-3">
                    <span className="w-3 font-sans text-[0.65rem] text-cream-500">{row.stars}</span>
                    <span className="h-0.5 flex-1 bg-white/10">
                      <span className="block h-0.5 bg-gold-500" style={{ width: `${row.percent}%` }} />
                    </span>
                    <span className="w-9 text-right font-sans text-[0.65rem] text-cream-500">
                      {row.percent}%
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-9 space-y-3">
              <a
                href={googleReviewUrl}
                {...externalLinkProps}
                className="btn-gold w-full px-6"
              >
                <PenLine size={15} aria-hidden="true" />
                Avaliar clínica
              </a>
              <a href={profileUrl} {...externalLinkProps} className="btn-outline w-full px-6">
                Ver todas no Google
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <p className="mt-6 text-center font-sans text-[0.6rem] leading-relaxed tracking-[0.12em] text-cream-500 uppercase">
              {isLive && updatedAt ? `Atualizado em ${updatedAt}` : 'Abre direto no perfil da clínica'}
            </p>
          </aside>

          {/* depoimentos */}
          <ul className="grid gap-px border border-white/8 bg-white/8 sm:grid-cols-2">
            {reviews.map((review, index) => (
              <li
                key={review.id}
                className={`flex flex-col bg-noir-900 p-8 transition duration-500 hover:bg-noir-850 ${
                  // com 5 avaliacoes reais, a ultima ocupa a linha inteira
                  index === reviews.length - 1 && reviews.length % 2 === 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {review.photoUrl ? (
                      <img
                        src={review.photoUrl}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="size-11 shrink-0 rounded-full border object-cover"
                        style={{ borderColor: `${review.accent}55` }}
                      />
                    ) : (
                      <span
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border font-display text-sm"
                        style={{ borderColor: `${review.accent}55`, color: review.accent }}
                        aria-hidden="true"
                      >
                        {review.initials}
                      </span>
                    )}
                    <div>
                      {/* atribuicao obrigatoria: nome e link do perfil do autor */}
                      {review.profileUrl ? (
                        <a
                          href={review.profileUrl}
                          {...externalLinkProps}
                          className="font-display text-lg text-cream-50 transition hover:text-gold-200"
                        >
                          {review.author}
                        </a>
                      ) : (
                        <p className="font-display text-lg text-cream-50">{review.author}</p>
                      )}
                      <p className="font-sans text-[0.58rem] tracking-[0.18em] text-cream-500 uppercase">
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>
                  <GoogleG className="mt-1 size-4 shrink-0 opacity-70" />
                </div>

                <Stars rating={review.rating} size={13} className="mt-6" />

                <p className="mt-4 flex-1 text-sm leading-[1.95] font-light text-cream-300">
                  {review.text}
                </p>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
