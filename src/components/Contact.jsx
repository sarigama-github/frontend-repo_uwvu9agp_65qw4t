import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sender...')
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }
    try {
      // Dummy success for now
      await new Promise((r) => setTimeout(r, 600))
      setStatus('Takk! Vi tar kontakt så snart som mulig.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Noe gikk galt. Prøv igjen.')
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kontakt oss</h2>
          <p className="mt-3 text-blue-200/80">Fortell kort om behov – vi følger opp raskt.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Navn" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40" />
            <input name="email" type="email" required placeholder="E-post" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40" />
          </div>
          <textarea name="message" required rows="5" placeholder="Melding" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40" />
          <div className="flex items-center gap-4">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90">Send</button>
            <div className="text-blue-200/80 text-sm">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}
