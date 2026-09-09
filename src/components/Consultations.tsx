import { Check, Info } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { WhatsAppIcon } from './ui/BrandIcons'
import { budgetSteps, consultationPlans } from '../data/clinic'
import { externalLinkProps, whatsappLink, whatsappServiceLink } from '../lib/links'

/*
  Esta secao substituiu a antiga tabela de valores. A Resolucao CFO-196/2019
  veda divulgar precos e honorarios como atrativo comercial: valores so no
  orcamento individual, depois da avaliacao. O que ficou publico e o processo —
  que e justamente o argumento de transparencia da clinica.
*/
export default function Consultations() {
  return (
    <section id="consultas" className="section-y relative overflow-hidden bg-noir-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 size-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.06),transparent_60%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Consultas"
          title="Transparência desde a"
          accent="primeira conversa"
          description="Escolha o tipo de consulta que faz sentido para o seu momento. O orçamento é individual e apresentado por escrito na avaliação — nada começa sem a sua aprovação."
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

              <span aria-hidden="true" className="mt-8 block h-px w-full bg-white/8" />

              <span className="mt-8 block font-sans text-[0.55rem] tracking-[0.22em] text-cream-500 uppercase">
                O que está incluído
              </span>

              <ul className="mt-5 flex-1 space-y-3.5">
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

        {/* como o orçamento é montado */}
        <div className="mt-20 border border-white/8 bg-noir-900">
          <div className="flex flex-col gap-5 border-b border-white/8 px-7 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-10">
            <div>
              <span className="eyebrow">Orçamento</span>
              <h3 className="mt-4 font-display text-[1.9rem] text-cream-50">
                Como chegamos ao seu valor
              </h3>
              <p className="mt-2 max-w-md text-sm font-light text-cream-500">
                Cada boca é diferente — o valor só faz sentido depois do diagnóstico.
              </p>
            </div>
            <a
              href={whatsappLink(
                'Olá! Gostaria de agendar uma avaliação e receber um orçamento para o meu caso.',
              )}
              {...externalLinkProps}
              className="btn-outline shrink-0"
            >
              Pedir meu orçamento
            </a>
          </div>

          <ol className="grid sm:grid-cols-3">
            {budgetSteps.map((step, index) => (
              <li
                key={step.title}
                className={`px-7 py-9 sm:px-10 ${
                  index < budgetSteps.length - 1
                    ? 'border-b border-white/8 sm:border-r sm:border-b-0'
                    : ''
                }`}
              >
                <span className="font-display text-3xl text-gold-600 italic">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-5 font-display text-xl text-cream-50">{step.title}</h4>
                <p className="mt-3 text-sm leading-[1.9] font-light text-cream-500">{step.text}</p>
              </li>
            ))}
          </ol>

          <p className="flex items-start gap-3 border-t border-white/8 px-7 py-6 text-xs leading-relaxed font-light text-cream-500 sm:px-10">
            <Info size={14} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
            Honorários são apresentados individualmente, por escrito, no plano de tratamento
            entregue após a avaliação clínica — sem compromisso e sem custo para receber o
            orçamento.
          </p>
        </div>
      </div>
    </section>
  )
}
