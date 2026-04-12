'use client'

import Link from 'next/link'
import { Logo777 } from '@/components/ui/Logo777'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'
import { useState } from 'react'

export function Footer() {
  const [footerEmail, setFooterEmail] = useState('')

  const handleFooterSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!footerEmail) return
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: footerEmail }),
      })
      setFooterEmail('✓ Joined!')
    } catch {
      // silent
    }
  }

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo777 variant="dark" size="lg" className="mb-4" />
            <p className="font-nunito text-white/70 text-sm leading-relaxed max-w-xs mt-4">
              Rise Above. Play with Purpose.
            </p>
            <p className="font-nunito text-white/50 text-xs mt-3">
              Faith-inspired sportswear for teen and collegiate women.<br />
              Founded by Tiffany, age 14.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                { name: 'Instagram', href: 'https://instagram.com/above.all.777' },
                { name: 'TikTok', href: 'https://tiktok.com/@above.all.777' },
                { name: 'Pinterest', href: 'https://pinterest.com/aboveall777' },
                { name: 'YouTube', href: 'https://youtube.com/@aboveall777' },
                { name: 'X', href: 'https://x.com/aboveall777' },
                { name: 'Facebook', href: 'https://facebook.com/aboveall777' },
              ].map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center font-comfortaa text-xs text-white/60 hover:text-tiffany hover:border-tiffany transition-colors"
                  aria-label={social.name}
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-comfortaa font-bold text-tiffany text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Golf', 'Pickleball', 'Tennis', 'Yoga'].map(sport => (
                <li key={sport}>
                  <Link href={`/shop/${sport.toLowerCase()}`} className="font-nunito text-sm text-white/70 hover:text-tiffany transition-colors">
                    {sport}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h4 className="font-comfortaa font-bold text-tiffany text-sm uppercase tracking-wider mb-4">Brand</h4>
            <ul className="space-y-2">
              {[
                { name: 'Our Story', href: '/our-story' },
                { name: 'Journal', href: '/journal' },
                { name: 'Contact', href: '/contact' },
                { name: 'Wholesale Inquiry', href: '/contact' },
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="font-nunito text-sm text-white/70 hover:text-tiffany transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-comfortaa font-bold text-tiffany text-sm uppercase tracking-wider mb-4">Join the 777</h4>
            <p className="font-nunito text-sm text-white/70 mb-4 leading-relaxed">
              Faith-forward drops. No spam. Just purpose.
            </p>
            <form className="flex gap-2" onSubmit={handleFooterSignup}>
              <input
                type="email"
                placeholder="your@email.com"
                value={footerEmail}
                onChange={e => setFooterEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-nunito text-white placeholder-white/40 focus:outline-none focus:border-tiffany transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-tiffany flex items-center justify-center text-white hover:bg-tiffany-dark transition-colors shrink-0"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <GoldRuleLine className="mb-6 opacity-30" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-nunito text-xs text-white/40">
            © 2026 Above All 777. Built by faith, launched at 14.
          </p>
          <div className="flex gap-6">
            {[
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms', href: '/terms' },
            ].map(item => (
              <Link key={item.name} href={item.href} className="font-nunito text-xs text-white/40 hover:text-tiffany transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
