import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to match corporate vibe without blocking spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Samferdsel og baneløsninger som varer
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-blue-100/90 max-w-3xl mx-auto">
          Vi leverer trygge, effektive og moderne leveranser innen bane og infrastruktur – fra grunnarbeid til drift og vedlikehold.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#tjenester" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 transition">Se tjenester</a>
          <a href="#kontakt" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Få tilbud</a>
        </div>
      </div>
    </section>
  )
}
