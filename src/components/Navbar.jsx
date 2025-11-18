import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#tjenester', label: 'Tjenester' },
  { href: '#referanser', label: 'Referanser' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 via-sky-400 to-amber-400 shadow-lg"></div>
          <div className="leading-tight">
            <div className="text-white font-semibold">Site Service Bane AS</div>
            <div className="text-xs text-blue-200/80">Samferdsel • Bane</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-blue-100/90 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="#kontakt" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Få tilbud</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-blue-100/90 hover:text-white">{l.label}</a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="inline-block px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Få tilbud</a>
          </div>
        </div>
      )}
    </header>
  )
}
