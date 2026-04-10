'use client'

import { useState } from 'react'

export function EmailCapture() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 px-4 bg-offwhite relative overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-fredoka font-bold text-tiffany-pale leading-none"
          style={{ fontSize: 'clamp(150px, 30vw, 400px)', opacity: 0.4 }}
        >
          777
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="section-eyebrow mb-3">First Access · Early Drops</p>
        <h2 className="font-fredoka font-bold text-5xl md:text-6xl text-tiffany mb-4">
          Be First. Join the 777.
        </h2>
        <p className="font-nunito text-brand-dark/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Get early access to drops, faith devotionals, and notes from Tiffany.
          First 777 members get founding-member pricing.
        </p>

        {status === 'success' ? (
          <div className="bg-tiffany-pale rounded-2xl p-8">
            <p className="font-fredoka font-bold text-3xl text-tiffany mb-2">You&apos;re in. 🙏</p>
            <p className="font-nunito text-tiffany-dark">Check your inbox — a note from Tiffany is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="flex-1 border-2 border-tiffany-pale rounded-full px-5 py-3.5 font-nunito text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-tiffany transition-colors bg-white"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 border-2 border-tiffany-pale rounded-full px-5 py-3.5 font-nunito text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-tiffany transition-colors bg-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary px-8 py-3.5 whitespace-nowrap disabled:opacity-60"
              >
                {status === 'loading' ? 'Joining...' : 'Join the 777 →'}
              </button>
            </div>
            {status === 'error' && (
              <p className="font-nunito text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        )}

        <p className="font-nunito italic text-sm text-tiffany-dark/60 mt-4">
          We don&apos;t do spam. Just purpose.
        </p>
        <p className="font-comfortaa text-xs text-gold font-semibold mt-3 uppercase tracking-wider">
          ✦ 777 founding members
        </p>
      </div>
    </section>
  )
}
