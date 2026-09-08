import { useEffect, useState } from 'react'
import { WhatsAppIcon } from './ui/BrandIcons'
import { externalLinkProps, whatsappLink } from '../lib/links'

/** Botao flutuante de WhatsApp — aparece apos o usuario rolar a primeira dobra. */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink()}
      {...externalLinkProps}
      aria-label="Falar com a clínica no WhatsApp"
      className={`fixed right-5 bottom-5 z-40 flex items-center gap-3 rounded-[2px] border border-gold-500 bg-gold-500 px-6 py-4 font-sans text-[0.68rem] tracking-[0.2em] text-noir-950 uppercase shadow-gold transition-all duration-500 hover:border-gold-300 hover:bg-gold-300 sm:right-8 sm:bottom-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <WhatsAppIcon size={18} />
      <span className="hidden sm:inline">Agendar</span>
    </a>
  )
}
