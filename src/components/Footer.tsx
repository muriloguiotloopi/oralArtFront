import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './ui/Logo'
import { InstagramIcon, WhatsAppIcon } from './ui/BrandIcons'
import { navLinks, services, siteConfig } from '../data/clinic'
import {
  externalLinkProps,
  mailtoLink,
  telLink,
  whatsappLink,
  whatsappServiceLink,
} from '../lib/links'

const socials = [
  { label: 'WhatsApp', href: whatsappLink(), render: () => <WhatsAppIcon size={17} />, external: true },
  {
    label: 'Instagram',
    href: siteConfig.instagramUrl,
    render: () => <InstagramIcon size={17} />,
    external: true,
  },
  {
    label: 'Telefone',
    href: telLink,
    render: () => <Phone size={17} aria-hidden="true" />,
    external: false,
  },
  {
    label: 'E-mail',
    href: mailtoLink(),
    render: () => <Mail size={17} aria-hidden="true" />,
    external: false,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-noir-950">
      <div className="container-page grid gap-14 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
        <div>
          <Logo />
          <p className="mt-7 max-w-xs text-sm leading-[1.95] font-light text-cream-500">
            {siteConfig.tagline}. Planejamento digital, equipe especializada e um plano de
            tratamento transparente do início ao fim.
          </p>

          <div className="mt-8 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.external ? externalLinkProps : {})}
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-full border border-white/12 text-cream-300 transition duration-500 hover:border-gold-500 hover:bg-gold-500 hover:text-noir-950"
              >
                {social.render()}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-sans text-[0.58rem] font-medium tracking-[0.26em] text-gold-500 uppercase">
            Navegação
          </h2>
          <ul className="mt-6 space-y-3.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="font-display text-lg text-cream-300 transition hover:text-gold-200"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-[0.58rem] font-medium tracking-[0.26em] text-gold-500 uppercase">
            Tratamentos
          </h2>
          <ul className="mt-6 space-y-3.5">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  className="font-display text-lg text-cream-300 transition hover:text-gold-200"
                  href={whatsappServiceLink(service.title)}
                  {...externalLinkProps}
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[0.58rem] font-medium tracking-[0.26em] text-gold-500 uppercase">
            Contato
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-gold-600" aria-hidden="true" />
              <address className="text-sm leading-relaxed font-light text-cream-500 not-italic">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district} — {siteConfig.address.city}/{siteConfig.address.state}
              </address>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
              <a
                className="text-sm font-light text-cream-500 transition hover:text-gold-200"
                href={telLink}
              >
                {siteConfig.phoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
              <a
                className="text-sm font-light break-all text-cream-500 transition hover:text-gold-200"
                href={mailtoLink()}
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-page flex flex-col gap-3 py-7 pb-28 font-sans text-[0.6rem] tracking-[0.16em] text-cream-500 uppercase sm:flex-row sm:items-center sm:justify-between sm:pr-56 sm:pb-7">
          <p>
            © {year} {siteConfig.legalName} · {siteConfig.cro}
          </p>
          <p>Layout demonstrativo — conteúdo e valores ilustrativos</p>
        </div>
      </div>
    </footer>
  )
}
