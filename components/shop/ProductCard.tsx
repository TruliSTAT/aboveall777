'use client'

import { useState } from 'react'
import type { Product } from '@/lib/products'
import { sportEmojis } from '@/lib/products'
import { PreOrderModal } from './PreOrderModal'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const sportColors: Record<string, string> = {
    golf: 'bg-gradient-to-br from-tiffany-pale to-tiffany-mid',
    pickleball: 'bg-gradient-to-br from-gold/20 to-tiffany-pale',
    tennis: 'bg-gradient-to-br from-tiffany-mid/30 to-tiffany-pale',
    yoga: 'bg-gradient-to-br from-tiffany-pale to-white',
  }

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Product Image Placeholder */}
        <div className={`relative aspect-square ${sportColors[product.sport]} flex items-center justify-center`}>
          <div className="text-center">
            <span className="text-6xl block mb-3">{sportEmojis[product.sport]}</span>
            <div className="w-20 h-20 rounded-full bg-tiffany/10 flex items-center justify-center mx-auto">
              <span className="font-fredoka font-bold text-2xl text-tiffany">777</span>
            </div>
          </div>
          {/* Coming Soon Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-gold text-white text-xs font-comfortaa font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-5">
          <p className="font-comfortaa text-xs text-tiffany-dark uppercase tracking-wider mb-1 capitalize">
            {product.sport}
          </p>
          <h3 className="font-comfortaa font-bold text-brand-dark text-lg leading-snug mb-2 group-hover:text-tiffany transition-colors">
            {product.name}
          </h3>
          <p className="font-nunito text-sm text-brand-dark/60 line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-fredoka font-semibold text-2xl text-tiffany">
              ${product.price}
            </span>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary text-sm py-2 px-5"
            >
              Pre-Order Now →
            </button>
          </div>
        </div>
      </div>

      <PreOrderModal
        product={product}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
