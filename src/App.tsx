import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Consultations from './components/Consultations'
import Insurance from './components/Insurance'
import Cases from './components/Cases'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  /*
    Link direto com ancora (ex.: /#convenios, compartilhado no WhatsApp).
    O HTML servido tem apenas <div id="root">: quando o navegador tenta pular
    para a ancora, as secoes ainda nao existem e ele desiste, deixando a
    pagina no topo. Refazemos o salto depois da montagem — e so quando as
    fontes terminam de carregar, porque elas mudam a altura das secoes e
    deslocariam o destino.
  */
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return

    let cancelled = false
    document.fonts.ready.then(() => {
      if (cancelled) return
      // getElementById em vez de querySelector: um hash arbitrario na URL nao
      // e necessariamente um seletor valido.
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-noir-950">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-[2px] focus:bg-gold-500 focus:px-6 focus:py-3 focus:text-xs focus:font-medium focus:tracking-[0.2em] focus:text-noir-950 focus:uppercase"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Services />
        <Consultations />
        <Insurance />
        <Cases />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  )
}
