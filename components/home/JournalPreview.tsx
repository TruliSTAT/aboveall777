import Link from 'next/link'
import { CategoryPill } from '@/components/ui/CategoryPill'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'

const articles = [
  {
    category: 'Faith',
    title: "Why I Started Above All 777 at 14",
    excerpt: "I was 14 when I realized I was looking for something at the intersection of two worlds I loved: my faith and my sport.",
    slug: 'why-i-started-above-all-777',
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
  },
  {
    category: 'Sport',
    title: "How Golf Taught Me Patience (and Prayer)",
    excerpt: "There is no sport quite like golf for forcing you to slow down. To breathe. To trust. To surrender the outcome.",
    slug: 'golf-patience-and-prayer',
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
  },
  {
    category: 'Faith',
    title: "777: A Number That Changed Everything",
    excerpt: "Seven is the number of divine completion. In scripture, in tradition, and now — on every piece of Above All 777.",
    slug: '777-a-number-that-changed-everything',
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
  },
]

export function JournalPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-eyebrow mb-2">Faith. Sport. Life.</p>
            <h2 className="font-fredoka font-semibold text-4xl md:text-5xl text-brand-dark">
              The 777 Journal
            </h2>
            <p className="font-nunito text-brand-dark/60 mt-2">Stories for girls who play with purpose.</p>
          </div>
          <Link href="/journal" className="btn-secondary text-sm py-2.5 px-6 shrink-0">
            All Posts →
          </Link>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map(article => (
            <article key={article.slug} className="group bg-offwhite rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Color top bar */}
              <div className="h-2 bg-tiffany-gradient" />
              <div className="p-6">
                <CategoryPill label={article.category} className="mb-4" />
                <h3 className="font-comfortaa font-bold text-xl text-brand-dark leading-snug mb-3 group-hover:text-tiffany transition-colors">
                  {article.title}
                </h3>
                <p className="font-nunito text-sm text-brand-dark/60 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <GoldRuleLine className="mb-4 opacity-30" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-comfortaa text-xs text-brand-dark/50">{article.date}</p>
                    <p className="font-comfortaa text-xs font-semibold text-tiffany-dark">{article.author}</p>
                  </div>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="font-comfortaa text-sm font-semibold text-tiffany hover:text-tiffany-dark transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
