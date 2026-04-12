'use client'

import Link from 'next/link'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background 777 watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-fredoka font-bold text-tiffany-pale leading-none"
          style={{ fontSize: 'clamp(200px, 40vw, 520px)', opacity: 0.5 }}
        >
          777
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-0 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6">
          {/* Eyebrow */}
          <p className="section-eyebrow">Faith · Sport · Elevation</p>

          {/* Headline */}
          <div>
            <h1 className="font-sacramento text-7xl md:text-8xl lg:text-9xl text-tiffany leading-none mb-2">
              Rise Above.
            </h1>
            <h1 className="font-fredoka font-bold text-5xl md:text-6xl text-brand-dark leading-tight">
              Play with Purpose.
            </h1>
          </div>

          <GoldRuleLine width="w-24" />

          {/* Subheadline */}
          <p className="font-nunito text-lg md:text-xl text-brand-dark/80 max-w-lg leading-relaxed">
            Faith-inspired sportswear for teen and collegiate women who play for something greater.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary text-base px-8 py-3.5">
              Shop the Collection →
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
              Join the 777
            </Link>
          </div>

          {/* Social proof */}
          <p className="font-nunito text-sm italic text-brand-dark/50">
            Founded by Tiffany, age 14
          </p>
        </div>

        {/* Right decorative 777 */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="flex items-end gap-2 select-none">
              <span className="font-fredoka font-bold text-tiffany-pale leading-none" style={{ fontSize: '160px' }}>
                7
              </span>
              <span className="font-fredoka font-bold text-tiffany-mid leading-none" style={{ fontSize: '200px', marginBottom: '-10px' }}>
                7
              </span>
              <span className="font-fredoka font-bold text-tiffany-pale leading-none" style={{ fontSize: '160px' }}>
                7
              </span>
            </div>
            {/* Sport icons below */}
            <div className="flex justify-center gap-6 mt-4">
              {['⛳', '🏓', '🎾', '🧘'].map((icon, i) => (
                <span key={i} className="text-3xl opacity-60">{icon}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-tiffany/30" />
        <div className="w-2 h-2 rounded-full bg-tiffany/50" />
      </div>
    </section>
  )
}
