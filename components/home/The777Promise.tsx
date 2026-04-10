import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

export function The777Promise() {
  return (
    <section className="relative py-24 px-4 bg-tiffany overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-fredoka font-bold text-white leading-none"
          style={{ fontSize: 'clamp(180px, 35vw, 480px)', opacity: 0.08 }}
        >
          777
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Big statement */}
        <p className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-6">
          777 isn&apos;t just a number.
        </p>

        <GoldRuleLine className="mb-6" />

        <div className="space-y-4 mb-8">
          <p className="font-nunito text-xl md:text-2xl text-white/90 leading-relaxed">
            It&apos;s a declaration that you were made for more.
          </p>
          <p className="font-nunito text-xl md:text-2xl text-white/90 leading-relaxed">
            That your purpose runs deeper than the scoreboard.
          </p>
          <p className="font-fredoka font-semibold text-2xl md:text-3xl text-white">
            That above all — faith comes first.
          </p>
        </div>

        <GoldRuleLine className="mb-6" />

        {/* Scripture */}
        <div className="inline-block">
          <p className="font-nunito italic text-tiffany-pale/90 text-base leading-relaxed max-w-xl">
            &ldquo;Seek first the Kingdom of God, and all these things shall be added to you.&rdquo;
          </p>
          <p className="font-comfortaa text-gold text-sm font-bold mt-2 uppercase tracking-wider">
            Matthew 6:33
          </p>
        </div>
      </div>
    </section>
  )
}
