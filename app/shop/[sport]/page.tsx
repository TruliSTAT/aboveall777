import { notFound } from 'next/navigation'
import { products, sportEmojis } from '@/lib/products'
import { sportsConfig } from '@/lib/sports'
import { ProductCard } from '@/components/shop/ProductCard'

interface Props {
  params: { sport: string }
}

export default function SportShopPage({ params }: Props) {
  const config = sportsConfig[params.sport]
  if (!config) notFound()

  const sportProducts = products.filter(p => p.sport === params.sport)

  return (
    <>
      <section className={`bg-gradient-to-br ${config.heroGradient} py-20 px-4 text-center`}>
        <div className="max-w-3xl mx-auto">
          <span className="text-6xl block mb-4">{sportEmojis[params.sport]}</span>
          <h1 className="font-fredoka font-bold text-5xl text-white mb-3">{config.name}</h1>
          <p className="font-nunito text-lg text-white/80">{config.tagline}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
