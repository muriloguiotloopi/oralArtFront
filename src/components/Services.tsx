import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { getIcon } from '../lib/icons'
import { differentials, services, trustBadges } from '../data/clinic'
import { externalLinkProps, whatsappServiceLink } from '../lib/links'

export default function Services() {
  return (
    <section id="servicos" className="section-y relative bg-noir-900">
      <div className="container-page">
        {/* selos de confiança — filete tipográfico, sem caixas */}
        <ul className="grid grid-cols-2 gap-y-8 border-y border-white/8 py-8 lg:grid-cols-4">
          {trustBadges.map((badge, index) => {
            const Icon = getIcon(badge.icon)
            return (
              <li
                key={badge.label}
                className={`flex items-center justify-center gap-3 px-4 text-center lg:px-8 ${
                  index < trustBadges.length - 1 ? 'lg:border-r lg:border-white/8' : ''
                }`}
              >
                <Icon size={17} className="shrink-0 text-gold-500" aria-hidden="true" />
                <span className="font-sans text-[0.68rem] leading-relaxed tracking-[0.14em] text-cream-300 uppercase">
                  {badge.label}
                </span>
              </li>
            )
          })}
        </ul>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Tratamentos"
            title="Especialidades para cada etapa do"
            accent="seu tratamento"
            description="Da manutenção preventiva à reabilitação completa — no mesmo lugar, com a mesma equipe acompanhando você do diagnóstico à revisão final."
          />
        </div>

        {/* grade editorial com filetes, sem cartões arredondados */}
        <div className="mt-20 grid border-t border-l border-white/8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon)
            return (
              <a
                key={service.id}
                href={whatsappServiceLink(service.title)}
                {...externalLinkProps}
                className="group relative flex flex-col border-r border-b border-white/8 p-9 transition duration-500 hover:bg-noir-850 lg:p-11"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px w-0 bg-gradient-to-r from-gold-500 to-transparent transition-all duration-700 group-hover:w-full"
                />

                <div className="flex items-start justify-between">
                  <Icon size={26} className="text-gold-500" aria-hidden="true" strokeWidth={1.2} />
                  <span className="font-sans text-[0.6rem] tracking-[0.24em] text-cream-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-[1.6rem] leading-tight text-cream-50">
                  {service.title}
                </h3>

                {service.highlight ? (
                  <span className="mt-3 font-sans text-[0.55rem] tracking-[0.24em] text-gold-400 uppercase">
                    Mais procurado
                  </span>
                ) : null}

                <p className="mt-4 text-sm leading-[1.9] font-light text-cream-500">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[0.82rem] font-light text-cream-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rotate-45 bg-gold-500"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 pt-9">
                  <p>
                    <span className="block font-sans text-[0.58rem] tracking-[0.22em] text-cream-500 uppercase">
                      a partir de
                    </span>
                    <span className="mt-1.5 block font-display text-2xl text-cream-50">
                      {service.priceFrom}
                    </span>
                  </p>
                  <span className="flex size-10 items-center justify-center rounded-full border border-white/12 text-gold-400 transition duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-noir-950">
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* diferenciais */}
        <div className="mt-24 grid gap-14 lg:grid-cols-3 lg:gap-20">
          {differentials.map((item, index) => (
            <div key={item.title}>
              <span className="font-display text-3xl text-gold-600 italic">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span aria-hidden="true" className="mt-5 block h-px w-full bg-white/8" />
              <h3 className="mt-6 font-display text-2xl text-cream-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.9] font-light text-cream-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
