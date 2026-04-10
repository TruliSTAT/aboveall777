import Link from 'next/link'

const sports = [
  {
    name: 'Golf',
    icon: '⛳',
    tagline: 'Tee up with intention.',
    href: '/sports/golf',
    bg: 'from-tiffany to-tiffany-dark',
    shopHref: '/shop/golf',
  },
  {
    name: 'Pickleball',
    icon: '🏓',
    tagline: 'Quick hands, steady heart.',
    href: '/sports/pickleball',
    bg: 'from-gold to-tiffany',
    shopHref: '/shop/pickleball',
  },
  {
    name: 'Tennis',
    icon: '🎾',
    tagline: 'Every serve starts with purpose.',
    href: '/sports/tennis',
    bg: 'from-tiffany-mid to-tiffany',
    shopHref: '/shop/tennis',
  },
  {
    name: 'Yoga',
    icon: '🧘',
    tagline: 'Still your mind. Strengthen your spirit.',
    href: '/sports/yoga',
    bg: 'from-tiffany-pale to-tiffany-mid',
    shopHref: '/shop/yoga',
  },
]

export function SportTiles() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Your Sport. Your Faith.</p>
          <h2 className="font-fredoka font-semibold text-4xl md:text-5xl text-brand-dark mb-4">
            Your 777.
          </h2>
          <p className="font-nunito text-brand-dark/70 text-lg max-w-lg mx-auto">
            We build for girls who compete with purpose.
          </p>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map(sport => (
            <Link
              key={sport.name}
              href={sport.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] flex flex-col justify-end cursor-pointer"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.bg} transition-transform duration-500 group-hover:scale-105`} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Large sport icon, centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 select-none">
                  {sport.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{sport.icon}</span>
                  <span className="font-fredoka font-bold text-xl text-white uppercase tracking-wide">
                    {sport.name}
                  </span>
                </div>
                <p className="font-nunito text-white/90 text-sm leading-snug mb-3">
                  {sport.tagline}
                </p>
                <span className="font-comfortaa text-sm text-gold font-semibold group-hover:underline">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
