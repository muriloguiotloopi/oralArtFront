import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { InstagramIcon, WhatsAppIcon } from './ui/BrandIcons'
import { siteConfig } from '../data/clinic'
import { externalLinkProps, mailtoLink, telLink, whatsappLink } from '../lib/links'

const channels = [
  {
    renderIcon: () => <WhatsAppIcon size={18} />,
    label: 'WhatsApp',
    value: 'Resposta em até 10 minutos',
    href: whatsappLink(),
    external: true,
  },
  {
    renderIcon: () => <Phone size={18} aria-hidden="true" />,
    label: 'Telefone',
    value: siteConfig.phoneLabel,
    href: telLink,
    external: false,
  },
  {
    renderIcon: () => <Mail size={18} aria-hidden="true" />,
    label: 'E-mail',
    value: siteConfig.email,
    href: mailtoLink(),
    external: false,
  },
  {
    renderIcon: () => <InstagramIcon size={18} />,
    label: 'Instagram',
    value: siteConfig.instagramHandle,
    href: siteConfig.instagramUrl,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contato" className="section-y bg-noir-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contato"
          title="Escolha o canal e fale"
          accent="com a gente"
          description="Sem formulário e sem espera: você fala direto com a recepção da clínica pelo canal que preferir."
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* canais diretos */}
          <div>
            <ul className="border-t border-white/8">
              {channels.map((channel) => (
                <li key={channel.label} className="border-b border-white/8">
                  <a
                    href={channel.href}
                    {...(channel.external ? externalLinkProps : {})}
                    className="group flex items-center gap-6 py-7 transition duration-500"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/12 text-gold-400 transition duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-noir-950">
                      {channel.renderIcon()}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-sans text-[0.58rem] tracking-[0.24em] text-cream-500 uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-1.5 block truncate font-display text-xl text-cream-50 transition group-hover:text-gold-200">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-cream-500 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-400"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <a href={whatsappLink()} {...externalLinkProps} className="btn-gold mt-10 w-full">
              <WhatsAppIcon size={16} />
              Agendar avaliação
            </a>
          </div>

          {/* endereço, horários e mapa */}
          <div className="border border-white/8 bg-noir-950">
            {/*
              PLACEHOLDER DO MAPA.
              Para usar o mapa real, troque este bloco por:
              <iframe
                title="Localização da clínica"
                src="https://www.google.com/maps?q=ENDERECO+REAL&output=embed"
                className="h-60 w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            */}
            <a
              href={siteConfig.googleMapsUrl}
              {...externalLinkProps}
              className="group relative flex h-60 items-center justify-center overflow-hidden border-b border-white/8"
              aria-label="Abrir localização no Google Maps"
            >
              <span aria-hidden="true" className="absolute inset-0">
                <svg viewBox="0 0 400 220" className="size-full" preserveAspectRatio="none">
                  <rect width="400" height="220" fill="#0b0a09" />
                  <g stroke="#c9a227" strokeOpacity="0.18" strokeWidth="8">
                    <path d="M0 60 H400 M0 148 H400 M96 0 V220 M262 0 V220" />
                  </g>
                  <path d="M0 104 L400 26" stroke="#c9a227" strokeOpacity="0.12" strokeWidth="22" />
                  <g fill="#c9a227" fillOpacity="0.07">
                    <rect x="116" y="158" width="56" height="42" />
                    <rect x="286" y="76" width="72" height="54" />
                    <rect x="24" y="76" width="48" height="54" />
                  </g>
                </svg>
              </span>
              <span className="relative flex flex-col items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold-500/60 bg-noir-950/80 text-gold-400 transition duration-500 group-hover:bg-gold-500 group-hover:text-noir-950">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <span className="font-sans text-[0.6rem] tracking-[0.24em] text-cream-300 uppercase">
                  Ver rota no Google Maps
                </span>
              </span>
            </a>

            <div className="p-8 sm:p-10">
              <span className="font-sans text-[0.58rem] tracking-[0.24em] text-gold-500 uppercase">
                Onde estamos
              </span>
              <address className="mt-4 font-display text-xl leading-relaxed text-cream-50 not-italic">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district} — {siteConfig.address.city}/{siteConfig.address.state}
              </address>
              <p className="mt-3 text-xs font-light text-cream-500">
                CEP {siteConfig.address.zip} · estacionamento conveniado no edifício.
              </p>

              <span aria-hidden="true" className="mt-9 block h-px w-full bg-white/8" />

              <span className="mt-9 block font-sans text-[0.58rem] tracking-[0.24em] text-gold-500 uppercase">
                Atendimento
              </span>
              <dl className="mt-5 space-y-3.5">
                {siteConfig.hours.map((entry) => (
                  <div key={entry.day} className="flex items-baseline justify-between gap-4">
                    <dt className="font-sans text-[0.7rem] tracking-[0.14em] text-cream-500 uppercase">
                      {entry.day}
                    </dt>
                    <dd className="font-display text-lg text-cream-50">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
