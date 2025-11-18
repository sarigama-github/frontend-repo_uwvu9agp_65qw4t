import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import References from './components/References'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background subtle aura */}
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(251,191,36,0.10),transparent_35%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <References />
        <Contact />
        <section id="om-oss" className="py-20 bg-slate-950/95">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Om oss</h2>
            <p className="mt-4 text-blue-200/80">
              Site Service Bane AS leverer helhetlige løsninger innen samferdsel og jernbane. Vi kombinerer
              sikkerhet, kvalitet og effektiv gjennomføring – med moderne metodikk og kompetanse.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-200/80">
          <div>© {new Date().getFullYear()} Site Service Bane AS</div>
          <div className="text-sm">Samferdsel • Bane • Infrastruktur</div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  )
}

export default App
