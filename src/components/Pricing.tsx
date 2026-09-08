import { Check, Info } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { WhatsAppIcon } from './ui/BrandIcons'
import { consultationPlans, priceTable } from '../data/clinic'
import { externalLinkProps, whatsappLink, whatsappServiceLink } from '../lib/links'

export default function Pricing() {
  return (
    <section id="valores" className="section-y relative overflow-hidden bg-noir-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 size-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.06),transparent_60%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Consultas e valores"
          title="Transparência desde a"
          accent="primeira conversa"
          description="Escolha o tipo de consulta que faz sentido para o seu momento. Os valores são referências iniciais — o orçamento final é fechado por escrito na avaliação."
        />

        {/* tipos de consulta */}
        <div className="mt-20 grid gap-px border border-white/8 bg-white/8 lg:grid-cols-3">
          {consultationPlans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col p-9 lg:p-11 ${
                plan.featured
                  ? 'bg-[linear-gradient(180deg,rgba(201,162,39,0.12),rgba(11,10,9,1)_55%)]'
                  : 'bg-noir-900 transition duration-500 hover:bg-noir-850'
              }`}
            >
              {plan.featured ? (
                <span className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              ) : null}

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[1.7rem] text-cream-50">{plan.name}</h3>
                <span className="font-sans text-[0.58rem] tracking-[0.2em] text-cream-500 uppercase">
                  {plan.duration}
                </span>
              </div>

              {plan.featured ? (
                <span className="mt-2 font-sans text-[0.55rem] tracking-[0.28em] text-gold-400 uppercase">
                  Recomendado
                </span>
              ) : null}

              <p className="mt-4 text-sm leading-[1.9] font-light text-cream-500">
                {plan.description}
              </p>

              <p className="mt-8 flex items-baseline gap-3">
                <span className="gold-text font-display text-[2.6rem] leading-none">
                  {plan.price}
                </span>
                <span className="font-sans text-[0.6rem] tracking-[0.18em] text-cream-500 uppercase">
                  {plan.priceNote}
                </span>
              </p>

              <span aria-hidden="true" className="mt-8 block h-px w-full bg-white/8" />

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-light">
                    <Check size={14} className="mt-1 shrink-0 text-gold-500" aria-hidden="true" />
                    <span className="text-cream-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappServiceLink(plan.name.toLowerCase())}
                {...externalLinkProps}
                className={`mt-10 w-full ${plan.featured ? 'btn-gold' : 'btn-outline'}`}
              >
                <WhatsAppIcon size={15} />
                {plan.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        {/* tabela de valores base */}
        <div className="mt-20 border border-white/8 bg-noir-900">
          <div className="flex flex-col gap-5 border-b border-white/8 px-7 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-10">
            <div>
              <span className="eyebrow">Tabela de referência</span>
              <h3 className="mt-4 font-display text-[1.9rem] text-cream-50">Valores base</h3>
              <p className="mt-2 text-sm font-light text-cream-500">
                Procedimentos mais procurados da clínica.
              </p>
            </div>
            <a
              href={whatsappLink('Olá! Gostaria de receber a tabela completa de valores.')}
              {...externalLinkProps}
              className="btn-outline shrink-0"
            >
              Pedir tabela completa
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <caption className="sr-only">
                Valores base por procedimento, categoria e condição de parcelamento
              </caption>
              <thead>
                <tr className="border-b border-white/8">
                  <th
                    scope="col"
                    className="px-7 py-5 font-sans text-[0.58rem] font-medium tracking-[0.22em] text-cream-500 uppercase sm:px-10"
                  >
                    Procedimento
                  </th>
                  <th
                    scope="col"
                    className="hidden px-7 py-5 font-sans text-[0.58rem] font-medium tracking-[0.22em] text-cream-500 uppercase md:table-cell"
                  >
                    Categoria
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-5 text-right font-sans text-[0.58rem] font-medium tracking-[0.22em] text-cream-500 uppercase"
                  >
                    Valor base
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-5 text-right font-sans text-[0.58rem] font-medium tracking-[0.22em] text-cream-500 uppercase sm:px-10"
                  >
                    Parcelamento
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row) => (
                  <tr
                    key={row.procedure}
                    className="border-b border-white/6 transition duration-300 last:border-b-0 hover:bg-noir-850"
                  >
                    <th
                      scope="row"
                      className="px-7 py-5 font-display text-[1.05rem] font-normal text-cream-50 sm:px-10"
                    >
                      {row.procedure}
                      <span className="mt-1 block font-sans text-[0.6rem] tracking-[0.16em] text-cream-500 uppercase md:hidden">
                        {row.category}
                      </span>
                    </th>
                    <td className="hidden px-7 py-5 md:table-cell">
                      <span className="font-sans text-[0.6rem] tracking-[0.18em] text-cream-500 uppercase">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-7 py-5 text-right font-display text-lg whitespace-nowrap text-gold-300">
                      {row.price}
                    </td>
                    <td className="px-7 py-5 text-right font-sans text-[0.72rem] tracking-[0.1em] whitespace-nowrap text-cream-500 sm:px-10">
                      {row.installment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="flex items-start gap-3 border-t border-white/8 px-7 py-6 text-xs leading-relaxed font-light text-cream-500 sm:px-10">
            <Info size={14} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
            Valores de referência para planejamento. O plano definitivo depende da avaliação clínica
            individual e é apresentado por escrito, sem compromisso, antes do início do tratamento.
          </p>
        </div>
      </div>
    </section>
  )
}
