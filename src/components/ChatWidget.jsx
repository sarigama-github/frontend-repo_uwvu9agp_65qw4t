import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hei! Jeg er her for å svare på spørsmål om Site Service Bane. Hvordan kan jeg hjelpe?' },
  ])
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, open])

  const sendMessage = async (e) => {
    e.preventDefault()
    const value = inputRef.current.value.trim()
    if (!value) return
    setMessages((m) => [...m, { role: 'user', content: value }])
    inputRef.current.value = ''
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: value }] }),
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.reply || 'Beklager, jeg forstod ikke helt. Kan du utdype?' }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Beklager, noe gikk galt. Prøv igjen om litt.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} className="group w-14 h-14 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center hover:scale-105 transition">
          <MessageCircle />
        </button>
      )}
      {open && (
        <div className="w-[340px] sm:w-[380px] rounded-2xl overflow-hidden border border-white/15 bg-slate-900/95 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="text-white font-medium">AI Chat</div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
          </div>
          <div ref={containerRef} className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === 'assistant' ? 'bg-white text-slate-900' : 'bg-white/10 text-white ml-auto'}`}>
                {m.content}
              </div>
            ))}
            {loading && <div className="text-blue-200/80 text-sm">Skriver…</div>}
          </div>
          <form onSubmit={sendMessage} className="flex items-center gap-2 p-3 border-t border-white/10">
            <input ref={inputRef} placeholder="Skriv en melding…" className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40" />
            <button className="px-3 py-2 rounded-lg bg-white text-slate-900 hover:opacity-90 disabled:opacity-50" disabled={loading}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
