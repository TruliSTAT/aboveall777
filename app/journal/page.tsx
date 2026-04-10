import Link from 'next/link'
import { articles } from '@/lib/journal'
import { CategoryPill } from '@/components/ui/CategoryPill'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-offwhite py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-fredoka font-bold text-tiffany-pale leading-none opacity-50" style={{ fontSize: '35vw' }}>
            777
          </span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-eyebrow mb-3">Faith · Sport · Life</p>
          <h1 className="font-fredoka font-bold text-5xl md:text-6xl text-brand-dark">
            The 777 Journal
          </h1>
          <GoldRuleLine width="w-20" className="mx-auto my-5" />
          <p className="font-nunito text-lg text-brand-dark/70">
            Stories for girls who play with purpose.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category filters placeholder */}
          <div className="flex gap-2 flex-wrap mb-10">
            {['All', 'Faith', 'Sport', 'Lifestyle', 'Founder Notes'].map(cat => (
              <span
                key={cat}
                className={`font-comfortaa text-sm font-semibold px-4 py-1.5 rounded-full cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-tiffany text-white'
                    : 'bg-tiffany-pale text-tiffany-dark hover:bg-tiffany hover:text-white'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <article key={article.slug} className="group bg-offwhite rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Top color bar */}
                <div className="h-2 bg-tiffany-gradient" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <CategoryPill label={article.category} />
                    <span className="font-comfortaa text-xs text-brand-dark/40">{article.readTime}</span>
                  </div>
                  <h2 className="font-comfortaa font-bold text-xl text-brand-dark leading-snug mb-3 group-hover:text-tiffany transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-nunito text-sm text-brand-dark/60 line-clamp-3 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <GoldRuleLine className="mb-4 opacity-20" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-comfortaa font-semibold text-xs text-tiffany">{article.author}</p>
                      <p className="font-comfortaa text-xs text-brand-dark/40">{article.date}</p>
                    </div>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="font-comfortaa text-sm font-bold text-tiffany hover:text-tiffany-dark transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
