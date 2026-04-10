import { GoldRuleLine } from '@/components/ui/GoldRuleLine'
import { ScriptureCallout } from '@/components/ui/ScriptureCallout'
import Link from 'next/link'

const values = [
  { icon: '✝️', title: 'Faith Above All', desc: 'Everything we build starts here. Faith is the foundation, not the finish line.' },
  { icon: '⭐', title: 'Authentic Excellence', desc: 'Real faith, real effort, real results. No performance. Just purpose.' },
  { icon: '🌊', title: 'Purpose-Driven Movement', desc: 'Every practice, every match, every stretch is an act of devotion.' },
  { icon: '🤝', title: 'Sisterhood', desc: 'We rise together. This community lifts. It doesn\'t compare.' },
  { icon: '🔥', title: 'Teen Courage', desc: 'Tiffany built this at 14. You can build anything when you play above all.' },
]

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-tiffany-gradient min-h-[60vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-fredoka font-bold text-white/10 leading-none" style={{ fontSize: '40vw' }}>777</span>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-sacramento text-6xl md:text-8xl text-white leading-none mb-4">
            Above All
          </h1>
          <p className="font-fredoka font-semibold text-3xl md:text-4xl text-white/90">
            At 14, she built a brand where faith meets the field.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <p className="section-eyebrow mb-1">The Beginning</p>
              <h2 className="font-fredoka font-semibold text-4xl text-brand-dark">
                Tiffany&apos;s Story
              </h2>
            </div>
          </div>

          <GoldRuleLine className="mb-10" />

          <div className="prose prose-lg max-w-none font-nunito text-brand-dark/80 leading-relaxed space-y-6">
            <p className="text-xl font-semibold text-brand-dark">
              My name is Tiffany Nichole Morgado. I&apos;m 14 years old, I&apos;ve attended Catholic school my entire life, and I believe faith and sport belong together.
            </p>

            <p>
              I started Above All 777 because I couldn&apos;t find athletic apparel that reflected who I actually am — a girl who loves golf, pickleball, tennis, and yoga, and who doesn&apos;t check her faith at the door when she walks onto the court.
            </p>

            <p>
              The name says everything. Above all — above the noise, above the pressure, above the score — put your faith first. And 777? In scripture, seven is the number of divine completion. Three sevens is a reminder that you are fully and perfectly made for this.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-tiffany-dark font-nunito">
              &ldquo;I was 14 when I realized I was looking for something at the intersection of two worlds I loved: my faith and my sport.&rdquo;
            </blockquote>

            <p>
              I grew up in Catholic school. I grew up on the court. And for a long time, those felt like separate parts of me — the girl in the pew on Sunday and the girl competing on Monday.
            </p>

            <p>
              Above All 777 was born the day I decided they didn&apos;t have to be separate.
            </p>

            <p>
              777 is sacred. It&apos;s the number of divine completion — the Trinity times itself. When I wear it, when I play in it, I&apos;m declaring something. That I&apos;m not just competing for a trophy. That I&apos;m playing for something above all else.
            </p>

            <p>
              This brand is for every girl who&apos;s ever felt that too. Who prays before a match. Who finds God in the silence before a serve. Who knows that the best version of herself shows up when faith and sport are one.
            </p>

            <div className="text-right mt-8">
              <p className="font-sacramento text-3xl text-tiffany">Tiffany</p>
              <p className="font-comfortaa text-sm text-brand-dark/60">Founder, Above All 777</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Meaning of 777 */}
      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">Sacred · Complete · Above All</p>
            <h2 className="font-fredoka font-bold text-5xl text-brand-dark">The Meaning of 777</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { num: '7', title: 'Divine Perfection', desc: 'Seven is God\'s number of completion. Created in 6 days, resting on the 7th — the number of wholeness.' },
              { num: '7', title: 'The Trinity', desc: 'Three sevens represents the Holy Trinity — Father, Son, and Holy Spirit — perfection at its most complete form.' },
              { num: '7', title: 'Above All Else', desc: 'When you wear 777, you\'re declaring you were made to rise above the ordinary, above the score, above all.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-tiffany-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="font-fredoka font-bold text-4xl text-white">{item.num}</span>
                </div>
                <GoldRuleLine width="w-12" className="mx-auto mb-4" />
                <h3 className="font-comfortaa font-bold text-xl text-brand-dark mb-3">{item.title}</h3>
                <p className="font-nunito text-sm text-brand-dark/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-tiffany rounded-2xl p-8 text-center">
            <p className="font-fredoka font-bold text-2xl text-white mb-4">
              Three sevens. One declaration.
            </p>
            <p className="font-nunito text-xl text-white/90">
              You were made to rise above.
            </p>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <ScriptureCallout
            verse="Seek first the Kingdom of God, and all these things shall be added to you."
            reference="Matthew 6:33"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">What We Stand For</p>
            <h2 className="font-fredoka font-semibold text-4xl text-brand-dark">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="font-comfortaa font-bold text-base text-brand-dark mb-2">{v.title}</h3>
                <GoldRuleLine width="w-8" className="mx-auto mb-3 opacity-60" />
                <p className="font-nunito text-xs text-brand-dark/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-tiffany-pale text-center">
        <p className="section-eyebrow mb-3">Be Part of Something Greater</p>
        <h2 className="font-fredoka font-bold text-4xl text-tiffany mb-4">
          Join the 777
        </h2>
        <p className="font-nunito text-brand-dark/70 mb-8 max-w-lg mx-auto">
          Be first. Get founding-member pricing and early access to every drop.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/shop" className="btn-primary">Shop the Collection →</Link>
          <Link href="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
