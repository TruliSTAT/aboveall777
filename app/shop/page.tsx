'use client'

import { useState } from 'react'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/shop/ProductCard'
import { FilterBar } from '@/components/shop/FilterBar'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.sport === activeFilter)

  return (
    <>
      {/* Shop Header */}
      <section className="bg-hero-gradient py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-fredoka font-bold text-tiffany-pale leading-none opacity-30" style={{ fontSize: '30vw' }}>
            777
          </span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-eyebrow mb-3">Faith-Inspired Sportswear</p>
          <h1 className="font-fredoka font-semibold text-5xl md:text-6xl text-brand-dark mb-2">
            The <span className="font-sacramento text-tiffany" style={{ fontSize: '1.2em' }}>Collection</span>
          </h1>
          <p className="font-nunito text-lg text-brand-dark/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Faith-inspired sportswear for the girl who plays above the ordinary.
          </p>
          <GoldRuleLine width="w-16" className="mx-auto mt-6" />
          <div className="mt-6 inline-flex items-center gap-2 bg-gold/10 border border-gold rounded-full px-5 py-2">
            <span className="text-lg">⏳</span>
            <span className="font-comfortaa font-bold text-gold text-sm uppercase tracking-wider">
              Launching Soon — Pre-Order Now
            </span>
          </div>
        </div>
      </section>

      <FilterBar active={activeFilter} onChange={setActiveFilter} />

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-comfortaa text-xl text-brand-dark/50">No products found.</p>
          </div>
        ) : (
          <>
            <p className="font-nunito text-sm text-brand-dark/50 mb-6">
              Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              {activeFilter !== 'all' ? ` in ${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}` : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-tiffany-pale py-16 px-4 text-center">
        <p className="section-eyebrow mb-3">Be First</p>
        <h2 className="font-fredoka font-bold text-4xl text-tiffany mb-4">
          Join the founding 777.
        </h2>
        <p className="font-nunito text-brand-dark/70 mb-6 max-w-lg mx-auto">
          Get early access, founding-member pricing, and notes from Tiffany before the world knows our name.
        </p>
        <a href="/#join-777" className="btn-primary inline-flex">
          Join the 777 →
        </a>
      </section>
    </>
  )
}
