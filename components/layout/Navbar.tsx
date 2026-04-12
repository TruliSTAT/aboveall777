'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react'
import { Logo777 } from '@/components/ui/Logo777'

const sports = [
  { name: 'Golf', href: '/sports/golf' },
  { name: 'Pickleball', href: '/sports/pickleball' },
  { name: 'Tennis', href: '/sports/tennis' },
  { name: 'Yoga', href: '/sports/yoga' },
]

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Journal', href: '/journal' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sportsOpen, setSportsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-white border-b border-tiffany-pale transition-all duration-300 ${
          scrolled ? 'h-16 shadow-md' : 'h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo777 size={scrolled ? 'sm' : 'md'} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 1).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-comfortaa font-semibold text-brand-dark hover:text-tiffany transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/our-story"
              className="font-comfortaa font-semibold text-brand-dark hover:text-tiffany transition-colors text-sm"
            >
              Our Story
            </Link>
            {/* Sports Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSportsOpen(true)}
              onMouseLeave={() => setSportsOpen(false)}
            >
              <button className="flex items-center gap-1 font-comfortaa font-semibold text-brand-dark hover:text-tiffany transition-colors text-sm">
                Sports <ChevronDown size={14} className={`transition-transform ${sportsOpen ? 'rotate-180' : ''}`} />
              </button>
              {sportsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-tiffany-pale py-2 min-w-[160px]">
                  {sports.map(sport => (
                    <Link
                      key={sport.href}
                      href={sport.href}
                      className="block px-4 py-2 font-comfortaa text-sm text-brand-dark hover:bg-tiffany-pale hover:text-tiffany transition-colors"
                    >
                      {sport.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/journal"
              className="font-comfortaa font-semibold text-brand-dark hover:text-tiffany transition-colors text-sm"
            >
              Journal
            </Link>
            <Link
              href="/contact"
              className="font-comfortaa font-semibold text-brand-dark hover:text-tiffany transition-colors text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden lg:flex items-center gap-1.5 text-brand-dark hover:text-tiffany transition-colors">
              <ShoppingBag size={20} />
            </button>
            <Link
              href="/shop"
              className="hidden lg:inline-flex btn-primary text-sm py-2 px-5"
            >
              Join the 777 →
            </Link>
            <button
              className="lg:hidden p-2 text-brand-dark hover:text-tiffany transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-tiffany-pale">
            <Logo777 size="md" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-brand-dark hover:text-tiffany transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-between p-6">
            <nav className="space-y-1">
              {[
                { name: 'Shop', href: '/shop' },
                { name: 'Our Story', href: '/our-story' },
                { name: 'Sports', href: '#', sub: sports },
                { name: 'Journal', href: '/journal' },
                { name: 'Contact', href: '/contact' },
              ].map(item => (
                <div key={item.name}>
                  {item.sub ? (
                    <div>
                      <p className="font-comfortaa font-bold text-2xl text-brand-dark py-3 border-b border-tiffany-pale/50">
                        {item.name}
                      </p>
                      <div className="pl-4 space-y-0.5 mt-1">
                        {item.sub.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="block font-comfortaa text-lg text-tiffany py-2 hover:text-tiffany-dark transition-colors"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-comfortaa font-bold text-2xl text-brand-dark py-3 border-b border-tiffany-pale/50 hover:text-tiffany transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="space-y-3">
              <Link href="/shop" onClick={() => setMobileOpen(false)} className="btn-primary block text-center text-base">
                Join the 777 →
              </Link>
              <div className="flex justify-center gap-6 pt-2">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/above.all.777' },
                  { name: 'TikTok', href: 'https://tiktok.com/@above.all.777' },
                  { name: 'Pinterest', href: 'https://pinterest.com/aboveall777' },
                  { name: 'YouTube', href: 'https://youtube.com/@aboveall777' },
                  { name: 'X', href: 'https://x.com/aboveall777' },
                  { name: 'Facebook', href: 'https://facebook.com/aboveall777' },
                ].map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-comfortaa text-xs text-tiffany-dark hover:text-tiffany transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
