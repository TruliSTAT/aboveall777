import { ContactForm } from '@/components/forms/ContactForm'
import { Logo777 } from '@/components/ui/Logo777'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

const socials = [
  { name: 'Instagram', handle: '@above.all.777', href: 'https://instagram.com/above.all.777', icon: '📸' },
  { name: 'TikTok', handle: '@above.all.777', href: 'https://tiktok.com/@above.all.777', icon: '🎵' },
  { name: 'Pinterest', handle: '@aboveall777', href: 'https://pinterest.com/aboveall777', icon: '📌' },
  { name: 'YouTube', handle: '@aboveall777', href: 'https://youtube.com/@aboveall777', icon: '▶️' },
  { name: 'X / Twitter', handle: '@aboveall777', href: 'https://x.com/aboveall777', icon: '✖️' },
  { name: 'Facebook', handle: '@aboveall777', href: 'https://facebook.com/aboveall777', icon: '📘' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="section-eyebrow mb-3">We&apos;d love to hear from you</p>
          <h1 className="font-fredoka font-semibold text-5xl text-brand-dark mb-4">
            Get in Touch
          </h1>
          <GoldRuleLine width="w-16" className="mx-auto" />
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <h2 className="font-comfortaa font-bold text-2xl text-brand-dark mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Info — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Logo777 size="lg" className="mb-6" />
              <p className="font-nunito text-brand-dark/70 text-sm leading-relaxed">
                We&apos;d love to hear from you. Whether it&apos;s about sport, faith, wholesale, 
                or a prayer request — reach out. Every message matters.
              </p>
            </div>

            <div>
              <h3 className="font-comfortaa font-bold text-base text-brand-dark mb-4">Find Us Online</h3>
              <div className="space-y-2">
                {socials.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-tiffany-pale transition-colors group"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <div>
                      <p className="font-comfortaa font-semibold text-sm text-brand-dark group-hover:text-tiffany transition-colors">
                        {social.name}
                      </p>
                      <p className="font-nunito text-xs text-brand-dark/50">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <GoldRuleLine className="opacity-40" />

            <div>
              <h3 className="font-comfortaa font-bold text-base text-brand-dark mb-2">Email</h3>
              <a
                href="mailto:hello@aboveall777.com"
                className="font-nunito text-tiffany hover:text-tiffany-dark transition-colors"
              >
                hello@aboveall777.com
              </a>
            </div>

            <div className="bg-tiffany-pale rounded-2xl p-5">
              <p className="font-fredoka font-bold text-xl text-tiffany mb-2">777</p>
              <p className="font-nunito text-sm text-brand-dark/70 italic leading-relaxed">
                &ldquo;Above all — faith comes first. We&apos;re here for you.&rdquo;
              </p>
              <p className="font-comfortaa text-xs text-tiffany-dark mt-2">— Tiffany, Founder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
