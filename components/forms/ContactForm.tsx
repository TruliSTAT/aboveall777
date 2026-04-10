'use client'

import { useState } from 'react'

const subjects = [
  { value: 'general', label: 'General' },
  { value: 'wholesale', label: 'Wholesale' },
  { value: 'press', label: 'Press' },
  { value: 'collab', label: 'Collab' },
  { value: 'prayer', label: 'Prayer Request' },
]

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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

  if (status === 'success') {
    return (
      <div className="bg-tiffany-pale rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">🙏</div>
        <p className="font-fredoka font-bold text-3xl text-tiffany mb-3">Message received.</p>
        <p className="font-nunito text-brand-dark/70 leading-relaxed">
          Your message has been received. Above all — thank you.
          We&apos;ll get back to you within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-comfortaa text-sm font-semibold text-brand-dark mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full border-2 border-tiffany-pale rounded-xl px-4 py-3 font-nunito text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:border-tiffany transition-colors bg-white"
            placeholder="Tiffany"
          />
        </div>
        <div>
          <label className="block font-comfortaa text-sm font-semibold text-brand-dark mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full border-2 border-tiffany-pale rounded-xl px-4 py-3 font-nunito text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:border-tiffany transition-colors bg-white"
            placeholder="Morgado"
          />
        </div>
      </div>

      <div>
        <label className="block font-comfortaa text-sm font-semibold text-brand-dark mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border-2 border-tiffany-pale rounded-xl px-4 py-3 font-nunito text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:border-tiffany transition-colors bg-white"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="block font-comfortaa text-sm font-semibold text-brand-dark mb-2">Subject *</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border-2 border-tiffany-pale rounded-xl px-4 py-3 font-nunito text-brand-dark focus:outline-none focus:border-tiffany transition-colors bg-white"
        >
          {subjects.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-comfortaa text-sm font-semibold text-brand-dark mb-2">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border-2 border-tiffany-pale rounded-xl px-4 py-3 font-nunito text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:border-tiffany transition-colors bg-white resize-y"
          placeholder="Tell us what's on your heart..."
        />
      </div>

      {status === 'error' && (
        <p className="font-nunito text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full py-4 text-base disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send it →'}
      </button>
    </form>
  )
}
