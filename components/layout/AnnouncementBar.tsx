'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-tiffany text-white py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="font-comfortaa text-sm text-center">
          <span className="text-tiffany-pale mr-2">✦</span>
          Above All 777 is launching soon —{' '}
          <Link href="/contact" className="underline underline-offset-2 hover:text-tiffany-pale transition-colors font-semibold">
            Join the 777
          </Link>{' '}
          for first access
          <span className="text-tiffany-pale ml-2">✦</span>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-tiffany-pale transition-colors"
          aria-label="Dismiss announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
