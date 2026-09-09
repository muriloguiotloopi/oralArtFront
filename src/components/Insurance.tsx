import { BadgeCheck, Info } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { WhatsAppIcon } from './ui/BrandIcons'
import { insurancePlans, insuranceSteps } from '../data/clinic'
import { externalLinkProps, whatsappLink } from '../lib/links'

/** Mensagem do WhatsApp especifica do convenio — evita a pergunta generica. */
function coverageLink(planName: string): string {
  return whatsappLink(
    `Olá! Sou beneficiário do plano ${planName} e gostaria de confirmar a cobertura para o meu caso.`,
  )
}

export default function Insurance() {
  return (
    /* O degrade evita dois blocos vizinhos com o mesmo preto: entra depois de
       Valores (noir-950) e termina no tom de Casos (noir-900). */
    <section
      id="convenios"
      className="section-y bg-[linear-gradient(180deg,var(--color-noir-900),var(--color-noir-950))]"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Convênios"
          title="Seu plano odontológico é"
          accent="aceito aqui"
          description="Somos credenciados às operadoras abaixo. A cobertura de cada procedimento varia conforme o contrato do seu plano — conferimos tudo antes da consulta, sem surpresa no dia."
        />

        {/* grade editorial com filetes, no mesmo padrão da seção de tratamentos */}
        <div className="mt-20 grid border-t border-l border-white/8 md:grid-cols-2 xl:grid-cols-4">
          {insurancePlans.map((plan) => (
            <article
              key={plan.id}
              className="group relative flex flex-col border-r border-b border-white/8 p-9 transition duration-500 hover:bg-noir-850 lg:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px w-0 bg-gradient-to-r from-gold-500 to-transparent transition-all duration-700 group-hover:w-full"
              />

              {/*
                PLACEHOLDER DO LOGO. Assim que o cliente enviar os arquivos
                oficiais (com a autorização de uso de cada operadora), troque o
                <h3> por: <img src="/convenios/amil.svg" alt="Amil Dental" />
              */}
              <div className="flex h-20 items-center justify-center border border-white/10 bg-noir-950 px-5">
                <h3 className="text-center font-display text-[1.35rem] leading-tight text-cream-50">
                  {plan.name}
                </h3>
              </div>

              <span className="mt-7 font-sans text-[0.55rem] tracking-[0.24em] text-gold-500 uppercase">
                {plan.operator}
              </span>

              {plan.brands ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {plan.brands.map((brand) => (
                    <li
                      key={brand}
                      className="border border-gold-700/40 px-2.5 py-1 font-sans text-[0.58rem] tracking-[0.14em] text-gold-300 uppercase"
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              ) : null}

              <p className="mt-4 text-sm leading-[1.9] font-light text-cream-500">
                {plan.description}
              </p>

              <span aria-hidden="true" className="mt-auto block h-px w-full bg-white/8" />

              <span className="mt-7 block font-sans text-[0.55rem] tracking-[0.22em] text-cream-500 uppercase">
                Cobertura em consultório
              </span>
              <ul className="mt-4 space-y-2.5">
                {plan.coverage.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.82rem] font-light text-cream-300"
                  >
                    <BadgeCheck
                      size={14}
                      className="mt-0.5 shrink-0 text-gold-500"
                      aria-hidden="true"
                      strokeWidth={1.4}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={coverageLink(plan.name)}
                {...externalLinkProps}
                className="btn-outline mt-9 w-full px-4 text-[0.66rem] tracking-[0.12em]"
              >
                <WhatsAppIcon size={14} />
                Consultar cobertura
              </a>
            </article>
          ))}
        </div>

        {/* como usar o convênio */}
        <div className="mt-20 grid gap-14 lg:grid-cols-3 lg:gap-20">
          {insuranceSteps.map((step, index) => (
            <div key={step.title}>
              <span className="font-display text-3xl text-gold-600 italic">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span aria-hidden="true" className="mt-5 block h-px w-full bg-white/8" />
              <h3 className="mt-6 font-display text-2xl text-cream-50">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.9] font-light text-cream-500">{step.text}</p>
            </div>
          ))}
        </div>

        {/* ressalvas + saída para quem não achou o próprio plano */}
        <div className="mt-16 border border-white/8 bg-noir-900">
          <p className="flex items-start gap-3 px-7 py-6 text-xs leading-relaxed font-light text-cream-500 sm:px-10">
            <Info size={14} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
            Coberturas, carências e reembolsos seguem o contrato de cada operadora. Procedimentos
            estéticos — lentes de contato dental, clareamento e implantes, por exemplo — costumam
            ficar fora da cobertura e seguem a tabela particular, sempre com o valor fechado por
            escrito antes de iniciar.
          </p>

          <div className="flex flex-col gap-5 border-t border-white/8 px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h3 className="font-display text-[1.6rem] text-cream-50">
                Não encontrou o seu convênio?
              </h3>
              <p className="mt-2 text-sm font-light text-cream-500">
                Envie o nome do plano para a recepção — avaliamos caso a caso.
              </p>
            </div>
            <a
              href={whatsappLink(
                'Olá! Meu convênio não está na lista do site. Podemos verificar se vocês atendem?',
              )}
              {...externalLinkProps}
              className="btn-gold shrink-0"
            >
              <WhatsAppIcon size={15} />
              Verificar meu plano
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
