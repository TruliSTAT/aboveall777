import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sportsConfig } from '@/lib/sports'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/shop/ProductCard'
import { ScriptureCallout } from '@/components/ui/ScriptureCallout'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'
import { Logo777 } from '@/components/ui/Logo777'

interface Props {
  params: { sport: string }
}

export async function generateStaticParams() {
  return [
    { sport: 'golf' },
    { sport: 'pickleball' },
    { sport: 'tennis' },
    { sport: 'yoga' },
  ]
}

export default function SportPage({ params }: Props) {
  const config = sportsConfig[params.sport]
  if (!config) notFound()

  const sportProducts = products.filter(p =>
    config.products.includes(p.id)
  )

  return (
    <>
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${config.heroGradient} min-h-[65vh] flex items-center justify-center overflow-hidden px-4 py-20`}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-fredoka font-bold text-white/10 leading-none" style={{ fontSize: '35vw' }}>
            777
          </span>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo777 variant="reversed" size="md" className="opacity-90" />
            <span className="text-6xl">{config.emoji}</span>
          </div>
          <h1 className="font-fredoka font-bold text-6xl md:text-7xl text-white mb-4">
            {config.name}
          </h1>
          <GoldRuleLine width="w-24" className="mx-auto mb-6" />
          <p className="font-nunito text-xl text-white/90 max-w-lg mx-auto leading-relaxed">
            {config.tagline}
          </p>
        </div>
      </section>

      {/* Sport Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow mb-3">Faith + {config.name}</p>
          <h2 className="font-fredoka font-semibold text-4xl text-brand-dark mb-6">
            The Faith Angle
          </h2>
          <p className="font-nunito text-lg text-brand-dark/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            {config.faithAngle}
          </p>
          <ScriptureCallout
            verse={config.verse}
            reference={config.verseReference}
            className="text-left"
          />
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">The Collection</p>
            <h2 className="font-fredoka font-semibold text-4xl text-brand-dark">
              {config.name} Apparel
            </h2>
            <p className="font-nunito text-brand-dark/60 mt-2">Coming Fall 2026 — Pre-order now.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {sportProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="btn-secondary inline-flex">
              View Full Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className={`py-16 px-4 bg-gradient-to-br ${config.heroGradient} text-center`}>
        <p className="font-comfortaa font-bold text-white/60 text-sm uppercase tracking-widest mb-3">Community</p>
        <h2 className="font-fredoka font-bold text-4xl text-white mb-4">
          Find your 777 community
        </h2>
        <p className="font-nunito text-white/80 mb-6 max-w-lg mx-auto">
          Connect with girls who play {config.name} with purpose. 
          Follow us on Instagram and join the 777.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/aboveall777"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-tiffany font-comfortaa font-bold px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
          >
            Follow @aboveall777
          </a>
          <Link href="/contact" className="bg-white/20 text-white border border-white/40 font-comfortaa font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
