const refs = [
  {
    title: 'Oppgradering av kabelgrøfter – Østlandet',
    desc: 'Utskifting av kabelkanaler og trekkerør, fundamenter for skap og lysmaster, samt reetablering av terreng.',
  },
  {
    title: 'Sikkerhetstiltak langs spor',
    desc: 'Etablering av sikring, gjerder og adkomstsoner i henhold til regelverk for trygg drift.',
  },
  {
    title: 'Belysningsprosjekt stasjonsområde',
    desc: 'Nye lysmaster og strømforsyning for bedre sikkerhet og universell utforming.',
  },
]

export default function References() {
  return (
    <section id="referanser" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Referanser</h2>
            <p className="mt-3 text-blue-200/80">Et utvalg leveranser innen samferdsel og bane. Flere referanser kan deles på forespørsel.</p>
          </div>
          <div className="lg:w-1/2 grid gap-6">
            {refs.map((r) => (
              <div key={r.title} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
                <div className="text-white font-semibold">{r.title}</div>
                <div className="text-blue-200/80 text-sm mt-2">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
