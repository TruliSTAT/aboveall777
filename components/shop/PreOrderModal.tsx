'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import type { Product } from '@/lib/products'
import { sportEmojis } from '@/lib/products'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

interface PreOrderModalProps {
  product: Product
  open: boolean
  onClose: () => void
}

export function PreOrderModal({ product, open, onClose }: PreOrderModalProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: '', source: `preorder_${product.id}` }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true) // Show success anyway
    }
    setLoading(false)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-fade-up">
        {/* Header */}
        <div className="bg-tiffany-gradient p-8 relative text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <span className="text-5xl block mb-2">{sportEmojis[product.sport]}</span>
          <p className="font-fredoka font-bold text-2xl text-white">You&apos;re joining the 777.</p>
        </div>

        <GoldRuleLine />

        <div className="p-8">
          {submitted ? (
            <div className="text-center">
              <p className="font-fredoka font-bold text-3xl text-tiffany mb-3">You&apos;re in. 🙏</p>
              <p className="font-nunito text-brand-dark/70 leading-relaxed">
                We&apos;ll notify you the moment <strong>{product.name}</strong> drops. 
                Thank you for believing in Above All 777.
              </p>
              <button onClick={onClose} className="btn-primary mt-6 px-8">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="bg-offwhite rounded-xl p-4 mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-tiffany-pale flex items-center justify-center shrink-0">
                  <span className="text-2xl">{sportEmojis[product.sport]}</span>
                </div>
                <div>
                  <p className="font-comfortaa font-bold text-brand-dark">{product.name}</p>
                  <p className="font-fredoka text-xl text-tiffany">${product.price}</p>
                </div>
              </div>

              <p className="font-nunito text-brand-dark/70 text-sm mb-6 leading-relaxed">
                Leave your email — we&apos;ll notify you the moment this drops. 
                Est. ship date: <strong>Fall 2026</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full border-2 border-tiffany-pale rounded-full px-5 py-3 font-nunito text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-tiffany transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center py-3.5 disabled:opacity-60"
                >
                  {loading ? 'Joining...' : 'Notify Me →'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
