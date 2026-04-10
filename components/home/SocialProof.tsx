export function SocialProof() {
  const placeholders = [
    { icon: '⛳', text: '"Tee up with intention. Above All 777."', handle: '@golf_faithgirl' },
    { icon: '🏓', text: '"Playing with purpose — love this brand!"', handle: '@pickleballqueen' },
    { icon: '🎾', text: '"Finally, sportswear that reflects my faith."', handle: '@tennischamp_777' },
    { icon: '🧘', text: '"Still my mind. Strengthen my spirit. 🙏"', handle: '@yoga_and_faith' },
    { icon: '✝️', text: '"777 is more than a number. It\'s a calling."', handle: '@aboveall777fan' },
    { icon: '🌟', text: '"Tiffany built something amazing at 14. Inspired!"', handle: '@collegiateathlete' },
  ]

  return (
    <section className="py-20 px-4 bg-tiffany-pale/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Community</p>
          <h2 className="font-fredoka font-semibold text-4xl text-brand-dark">The 777 Community</h2>
          <p className="font-nunito text-brand-dark/60 mt-2">Girls who rise. Women who inspire.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-nunito text-sm text-brand-dark/80 leading-relaxed mb-3 italic">
                {item.text}
              </p>
              <p className="font-comfortaa text-xs text-tiffany font-semibold">{item.handle}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/aboveall777"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Follow us @aboveall777
          </a>
        </div>
      </div>
    </section>
  )
}
