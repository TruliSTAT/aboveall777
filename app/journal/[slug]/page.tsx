import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/lib/journal'
import { CategoryPill } from '@/components/ui/CategoryPill'
import { GoldRuleLine } from '@/components/ui/GoldRuleLine'
import { EmailCapture } from '@/components/home/EmailCapture'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = articles.filter(a => a.slug !== params.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-tiffany-gradient py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <CategoryPill label={article.category} className="mb-4 !bg-white/20 !text-white" />
          <h1 className="font-fredoka font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-white/70 font-comfortaa text-sm">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-lg font-nunito text-brand-dark/80 leading-relaxed space-y-5">
            {article.body.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('— ')) {
                return (
                  <div key={i} className="text-right border-t border-tiffany-pale pt-4 mt-6">
                    <p className="font-sacramento text-3xl text-tiffany">Tiffany</p>
                    <p className="font-comfortaa text-sm text-brand-dark/50 mt-1">
                      {paragraph.replace('— ', '')}
                    </p>
                  </div>
                )
              }
              return (
                <p key={i} className="font-nunito text-base leading-relaxed text-brand-dark/80">
                  {paragraph}
                </p>
              )
            })}
          </div>

          <GoldRuleLine className="my-10" />

          {/* Author bio */}
          <div className="bg-offwhite rounded-2xl p-6 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-tiffany-gradient flex items-center justify-center shrink-0">
              <span className="font-fredoka font-bold text-white text-lg">T</span>
            </div>
            <div>
              <p className="font-comfortaa font-bold text-brand-dark">{article.author}</p>
              <p className="font-comfortaa text-xs text-tiffany mb-2">Founder, Above All 777 · Age 14</p>
              <p className="font-nunito text-sm text-brand-dark/70 leading-relaxed">
                Above All 777 was born on a golf course and built on faith. Tiffany is 14 and building a brand for every girl who plays for something greater than the score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture />

      {/* Related Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-fredoka font-semibold text-3xl text-brand-dark mb-8">More from the 777 Journal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(a => (
              <Link
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="group bg-offwhite rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <CategoryPill label={a.category} className="mb-3" />
                <h3 className="font-comfortaa font-bold text-base text-brand-dark group-hover:text-tiffany transition-colors leading-snug mb-2">
                  {a.title}
                </h3>
                <p className="font-nunito text-xs text-brand-dark/50 line-clamp-2">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
