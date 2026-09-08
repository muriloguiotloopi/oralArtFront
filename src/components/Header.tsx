import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './ui/Logo'
import { WhatsAppIcon } from './ui/BrandIcons'
import { navLinks, siteConfig } from '../data/clinic'
import { externalLinkProps, telLink, whatsappLink } from '../lib/links'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Histerese: liga em 64px, so desliga abaixo de 16px. Com um limiar
    // unico, qualquer reflow perto do ponto de corte faz o estado oscilar.
    const onScroll = () =>
      setScrolled((previous) => (previous ? window.scrollY > 16 : window.scrollY > 64))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      {/* faixa superior discreta */}
      <div className="hidden border-b border-white/6 bg-noir-950 lg:block">
        <div className="container-page flex h-11 items-center justify-between font-sans text-[0.65rem] tracking-[0.2em] text-cream-500 uppercase">
          <span>
            {siteConfig.address.district} · {siteConfig.address.city}
          </span>
          <span className="flex items-center gap-8">
            <span>Seg a sex {siteConfig.hours[0].time}</span>
            <a href={telLink} className="text-gold-400 transition hover:text-gold-200">
              {siteConfig.phoneLabel}
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-white/8 bg-noir-950/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between gap-6">
          {/* o encolhimento e feito por transform: nao afeta o layout */}
          <a
            href="#inicio"
            aria-label={`${siteConfig.name} — início`}
            className={`block origin-left transition-transform duration-500 ${
              scrolled ? 'scale-[0.93]' : ''
            }`}
          >
            <Logo />
          </a>

          <nav aria-label="Navegação principal" className="hidden xl:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative block py-2 font-sans text-[0.7rem] font-normal tracking-[0.22em] text-cream-300 uppercase transition hover:text-gold-200"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-400 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              {...externalLinkProps}
              className="btn-outline hidden px-6 py-3 sm:inline-flex"
            >
              <WhatsAppIcon size={15} />
              Agendar
            </a>
            <a
              href={telLink}
              className="flex size-11 items-center justify-center rounded-[2px] border border-white/12 text-cream-100 transition hover:border-gold-500/50 hover:text-gold-200 sm:hidden"
              aria-label="Ligar para a clínica"
            >
              <Phone size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex size-11 items-center justify-center rounded-[2px] border border-white/12 text-cream-100 transition hover:border-gold-500/50 hover:text-gold-200 xl:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <Menu size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* menu mobile */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-noir-950/80 backdrop-blur-sm"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col border-l border-gold-700/30 bg-noir-900 p-7">
            <div className="flex items-center justify-between">
              <Logo compact />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex size-11 items-center justify-center rounded-[2px] border border-white/12 text-cream-100 transition hover:border-gold-500/50"
                aria-label="Fechar menu"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Navegação mobile" className="mt-12 flex-1">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={link.href} className="border-b border-white/6">
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-4 py-5 font-display text-2xl text-cream-50 transition hover:text-gold-300"
                    >
                      <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gold-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 pt-6">
              <a href={whatsappLink()} {...externalLinkProps} className="btn-gold w-full">
                <WhatsAppIcon size={16} />
                Agendar avaliação
              </a>
              <a href={telLink} className="btn-outline w-full">
                <Phone size={15} aria-hidden="true" />
                {siteConfig.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
