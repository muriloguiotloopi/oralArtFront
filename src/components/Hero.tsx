import { ArrowDownRight } from 'lucide-react'
import Stars from './ui/Stars'
import ArchArt from './ui/ArchArt'
import { WhatsAppIcon } from './ui/BrandIcons'
import { siteConfig, stats } from '../data/clinic'
import { reviewsData } from '../lib/googleReviews'
import { externalLinkProps, whatsappLink } from '../lib/links'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-noir-950">
      {/* atmosfera: brilho dourado difuso + vinheta */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-18%] right-[-10%] size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.16),transparent_62%)]" />
        <div className="absolute bottom-[-30%] left-[-20%] size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.07),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(8,8,7,0.9))]" />
      </div>

      <div className="container-page relative grid items-center gap-16 pt-16 pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:pt-24 lg:pb-32">
        <div className="animate-rise">
          <span className="eyebrow">
            {siteConfig.tagline} — {siteConfig.address.city}
          </span>

          <h1 className="mt-8 font-display text-[3rem] leading-[1.02] sm:text-[4.2rem] lg:text-[5rem]">
            A arte de desenhar
            <span className="gold-text mt-1 block italic">o seu sorriso.</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-[1.95] font-light text-cream-500">
            Odontologia estética e reabilitadora com planejamento digital. Você aprova a simulação
            do resultado e recebe o orçamento fechado antes de qualquer procedimento começar.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={whatsappLink()} {...externalLinkProps} className="btn-gold">
              <WhatsAppIcon size={16} />
              Agendar avaliação
            </a>
            <a href="#servicos" className="btn-outline">
              Ver tratamentos
              <ArrowDownRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/8 pt-8">
            <Stars rating={reviewsData.rating} size={15} />
            <span className="font-display text-xl text-cream-50">
              {reviewsData.rating.toFixed(1).replace('.', ',')}
            </span>
            <span className="font-sans text-[0.68rem] tracking-[0.18em] text-cream-500 uppercase">
              {reviewsData.total} avaliações no Google
            </span>
          </div>
        </div>

        {/* Visual: moldura em arco (placeholder — trocar por foto do cliente) */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative overflow-hidden rounded-t-[16rem] rounded-b-[3px] border border-gold-700/45 bg-[linear-gradient(180deg,#151312_0%,#0b0a09_100%)]">
            <div className="relative flex aspect-[3/4] flex-col items-center justify-center px-10">
              <ArchArt className="relative w-full" />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/8 px-7 py-5">
              <span className="font-sans text-[0.6rem] tracking-[0.24em] text-cream-500 uppercase">
                Prévia digital do sorriso
              </span>
              <span className="font-display text-sm text-gold-300 italic">DSD 3D</span>
            </div>
          </div>

          <div className="absolute bottom-28 -left-5 hidden border border-gold-700/45 bg-noir-900/95 px-6 py-4 backdrop-blur sm:block lg:animate-float">
            <p className="font-sans text-[0.58rem] tracking-[0.24em] text-cream-500 uppercase">
              Parcelamos em
            </p>
            <p className="mt-1.5 font-display text-2xl text-cream-50">
              12x <span className="text-gold-400 italic">sem juros</span>
            </p>
          </div>
        </div>
      </div>

      {/* faixa de números */}
      <div className="relative border-t border-white/8">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-10 text-center lg:py-12 ${
                index % 2 === 0 ? 'border-r border-white/8' : ''
              } ${index < 2 ? 'border-b border-white/8 lg:border-b-0' : ''} ${
                index === 2 ? 'lg:border-r lg:border-white/8' : ''
              }`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-4xl font-light text-cream-50 sm:text-5xl">
                  {stat.value}
                  <span className="gold-text">{stat.suffix}</span>
                </span>
                <span className="mt-3 block font-sans text-[0.62rem] tracking-[0.22em] text-cream-500 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
