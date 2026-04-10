import Link from 'next/link'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'
import { Logo777 } from '@/components/ui/Logo777'

export default function ThankYouPage() {
  const sports = [
    { name: 'Golf', href: '/sports/golf', emoji: '⛳' },
    { name: 'Pickleball', href: '/sports/pickleball', emoji: '🏓' },
    { name: 'Tennis', href: '/sports/tennis', emoji: '🎾' },
    { name: 'Yoga', href: '/sports/yoga', emoji: '🧘' },
  ]

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center px-4 py-24">
      <Logo777 size="xl" className="mb-8" />

      <div className="text-center max-w-2xl mx-auto">
        <p className="font-fredoka font-bold text-5xl md:text-6xl text-gold mb-4">✦ 777 ✦</p>

        <h1 className="font-fredoka font-bold text-4xl md:text-5xl text-brand-dark mb-4">
          You&apos;re in the 777.
        </h1>

        <GoldRuleLine width="w-24" className="mx-auto mb-6" />

        <p className="font-nunito text-lg text-brand-dark/70 leading-relaxed mb-10">
          Check your inbox — a note from Tiffany is on its way.
        </p>

        <p className="font-comfortaa font-bold text-tiffany text-sm uppercase tracking-widest mb-8">
          While you wait, explore the brand ↓
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sports.map(sport => (
            <Link
              key={sport.name}
              href={sport.href}
              className="group bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl block mb-2">{sport.emoji}</span>
              <p className="font-comfortaa font-bold text-sm text-brand-dark group-hover:text-tiffany transition-colors">
                {sport.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/" className="btn-secondary inline-flex">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
