import SectionHeading from './ui/SectionHeading'
import { WhatsAppIcon } from './ui/BrandIcons'
import { successCases } from '../data/clinic'
import { externalLinkProps, whatsappLink } from '../lib/links'

/*
  Antes esta secao trazia comparador antes/depois e depoimento de paciente.
  A Resolucao CFO-196/2019 reserva a divulgacao de imagens de diagnostico e de
  conclusao ao proprio profissional executor — a clinica, como pessoa juridica,
  nao pode. Ficou a descricao do protocolo: etapas, tempo e sessoes.
*/
export default function Cases() {
  return (
    <section id="protocolos" className="section-y bg-noir-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Protocolos"
          title="Cada caso tem um"
          accent="plano próprio"
          description="Exemplos de tratamentos completos conduzidos pela nossa equipe: as etapas, o tempo e o número de sessões envolvidos. O diagnóstico é sempre individual e presencial."
        />

        <div className="mt-20 grid gap-px border border-white/8 bg-white/8 lg:grid-cols-2">
          {successCases.map((item, index) => (
            <article key={item.id} className="flex flex-col bg-noir-950 p-8 sm:p-10">
              <span className="font-sans text-[0.58rem] tracking-[0.26em] text-gold-500 uppercase">
                Protocolo {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-6 font-display text-[1.9rem] leading-tight text-cream-50">
                {item.treatment}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[0.58rem] tracking-[0.2em] text-gold-400 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-[1.95] font-light text-cream-500">
                {item.summary}
              </p>

              <dl className="mt-8 flex gap-10 border-t border-white/8 pt-6">
                <div>
                  <dt className="font-sans text-[0.55rem] tracking-[0.22em] text-cream-500 uppercase">
                    Duração
                  </dt>
                  <dd className="mt-1.5 font-display text-lg text-cream-50">{item.duration}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[0.55rem] tracking-[0.22em] text-cream-500 uppercase">
                    Sessões
                  </dt>
                  <dd className="mt-1.5 font-display text-lg text-cream-50">{item.sessions}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {/* chamada intermediária */}
        <div className="mt-20 flex flex-col items-center border border-gold-700/35 bg-[linear-gradient(180deg,rgba(201,162,39,0.08),transparent)] px-8 py-16 text-center">
          <span className="eyebrow">Sem compromisso</span>
          <h3 className="mt-6 max-w-xl font-display text-[2.2rem] leading-tight text-cream-50 sm:text-[2.7rem]">
            Quer entender <em className="gold-text italic">o seu caso?</em>
          </h3>
          {/*
            A versao anterior convidava a enviar foto do sorriso para receber
            orientacao. Diagnostico a distancia e vedado — o convite agora e
            para a avaliacao presencial.
          */}
          <p className="mt-5 max-w-lg text-sm leading-[1.9] font-light text-cream-500">
            O diagnóstico é presencial. Na avaliação examinamos, explicamos as possibilidades e
            você sai com o plano de tratamento por escrito.
          </p>
          <a
            href={whatsappLink(
              'Olá! Gostaria de agendar uma avaliação para entender as possibilidades para o meu caso.',
            )}
            {...externalLinkProps}
            className="btn-gold mt-9"
          >
            <WhatsAppIcon size={16} />
            Agendar avaliação
          </a>
          <p className="mt-7 font-sans text-[0.6rem] tracking-[0.18em] text-cream-500 uppercase">
            Resultados variam conforme cada caso clínico
          </p>
        </div>
      </div>
    </section>
  )
}
