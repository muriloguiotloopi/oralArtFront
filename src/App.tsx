import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Cases from './components/Cases'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
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
        <Pricing />
        <Cases />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  )
}
