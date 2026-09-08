import SectionHeading from './ui/SectionHeading'
import BeforeAfter from './ui/BeforeAfter'
import { WhatsAppIcon } from './ui/BrandIcons'
import { successCases } from '../data/clinic'
import { externalLinkProps, whatsappLink } from '../lib/links'

export default function Cases() {
  return (
    <section id="casos" className="section-y bg-noir-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Casos de sucesso"
          title="Transformações planejadas"
          accent="passo a passo"
          description="Arraste o comparador para ver o antes e o depois de cada tratamento. Todos conduzidos pela nossa equipe, com acompanhamento até a revisão final."
        />

        <div className="mt-20 grid gap-px border border-white/8 bg-white/8 lg:grid-cols-2">
          {successCases.map((item, index) => (
            <article key={item.id} className="bg-noir-950 p-6 sm:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-[0.58rem] tracking-[0.26em] text-gold-500 uppercase">
                  Caso {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-[0.58rem] tracking-[0.2em] text-cream-500 uppercase">
                  {item.patient} · {item.age} anos
                </span>
              </div>

              <div className="mt-6">
                <BeforeAfter
                  beforeColor={item.palette.before}
                  afterColor={item.palette.after}
                  label={item.treatment}
                />
              </div>

              <h3 className="mt-8 font-display text-[1.9rem] leading-tight text-cream-50">
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

              <p className="mt-5 text-sm leading-[1.95] font-light text-cream-500">{item.summary}</p>

              <dl className="mt-7 flex gap-10 border-y border-white/8 py-5">
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

              <blockquote className="mt-6 border-l border-gold-600/60 pl-5">
                <p className="font-display text-lg leading-relaxed text-cream-100 italic">
                  “{item.quote}”
                </p>
              </blockquote>
            </article>
          ))}
        </div>

        {/* chamada intermediária */}
        <div className="mt-20 flex flex-col items-center border border-gold-700/35 bg-[linear-gradient(180deg,rgba(201,162,39,0.08),transparent)] px-8 py-16 text-center">
          <span className="eyebrow">Sem compromisso</span>
          <h3 className="mt-6 max-w-xl font-display text-[2.2rem] leading-tight text-cream-50 sm:text-[2.7rem]">
            Quer ver como ficaria <em className="gold-text italic">o seu?</em>
          </h3>
          <p className="mt-5 max-w-lg text-sm leading-[1.9] font-light text-cream-500">
            Envie uma foto do seu sorriso pelo WhatsApp e receba uma primeira orientação da nossa
            equipe, sem custo e sem compromisso.
          </p>
          <a
            href={whatsappLink(
              'Olá! Gostaria de enviar uma foto do meu sorriso para uma primeira orientação.',
            )}
            {...externalLinkProps}
            className="btn-gold mt-9"
          >
            <WhatsAppIcon size={16} />
            Enviar minha foto
          </a>
          <p className="mt-7 font-sans text-[0.6rem] tracking-[0.18em] text-cream-500 uppercase">
            Resultados variam conforme cada caso clínico
          </p>
        </div>
      </div>
    </section>
  )
}
