import { Shield, Cable, Wrench, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Sikkerhet og prosjektering',
    desc: 'Prosjekt- og byggeledelse, sikker jobb-analyse, samt kvalitet og HMS som grunnpilar i leveransen.',
  },
  {
    icon: Cable,
    title: 'Kabel og kanal',
    desc: 'Graving, kabelkanaler, trekkerør, fundamenter og komplette føringsveier for signal og kraft.',
  },
  {
    icon: Lightbulb,
    title: 'Belysning og el',
    desc: 'Installasjon og oppgradering av belysning, tekniske skap, og elektriske anlegg langs bane og vei.',
  },
  {
    icon: Wrench,
    title: 'Drift og vedlikehold',
    desc: 'Planlagt og akutt vedlikehold for å sikre kontinuerlig og trygg drift av kritisk infrastruktur.',
  },
]

export default function Services() {
  return (
    <section id="tjenester" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Tjenester</h2>
        <p className="mt-3 text-blue-200/80 max-w-2xl">Fra grunnarbeid og kabel til sikring, belysning og vedlikehold – vi leverer nøkkelferdige leveranser for samferdsel.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-xl bg-white text-slate-900 flex items-center justify-center shadow mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-blue-200/80 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
