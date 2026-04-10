import Link from 'next/link'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

export function FounderTeaser() {
  return (
    <section className="py-20 px-4 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image (placeholder) */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-tiffany-gradient flex items-center justify-center">
              {/* Placeholder illustration */}
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">⛳</span>
                </div>
                <p className="font-sacramento text-5xl text-white mb-2">Above All</p>
                <p className="font-fredoka font-bold text-4xl text-white/80">777</p>
                <p className="font-nunito text-white/60 text-sm mt-4">Tiffany Nichole Morgado</p>
              </div>
              {/* Decorative gold rule */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="section-eyebrow">Meet the Founder</p>

            <h2 className="font-fredoka font-semibold text-4xl md:text-5xl text-brand-dark leading-tight">
              At 14, she decided{' '}
              <span className="text-tiffany">faith</span> and sport belonged together.
            </h2>

            <GoldRuleLine width="w-16" />

            <p className="font-nunito text-brand-dark/70 text-lg leading-relaxed">
              Tiffany Nichole Morgado grew up on the court and in the pew. At 14, she launched
              Above All 777 — a brand that proves your best game starts when you play for
              something greater than yourself.
            </p>

            <blockquote className="border-l-4 border-gold pl-4 italic font-nunito text-tiffany-dark">
              &ldquo;I couldn&apos;t find athletic apparel that reflected who I actually am — 
              a girl who loves sport and doesn&apos;t check her faith at the door.&rdquo;
              <footer className="not-italic text-sm text-brand-dark/60 mt-2 font-comfortaa">
                — Tiffany, Founder
              </footer>
            </blockquote>

            <Link href="/our-story" className="btn-primary inline-flex">
              Read Tiffany&apos;s Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
