export interface Article {
  slug: string
  title: string
  category: 'Faith' | 'Sport' | 'Lifestyle' | 'Founder Notes'
  excerpt: string
  body: string
  author: string
  date: string
  readTime: string
}

export const articles: Article[] = [
  {
    slug: 'why-i-started-above-all-777',
    title: 'Why I Started Above All 777 at 14',
    category: 'Founder Notes',
    excerpt: "I was 14 when I realized I was looking for something at the intersection of two worlds I loved: my faith and my sport.",
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
    readTime: '4 min read',
    body: `My name is Tiffany Nichole Morgado. I'm 14 years old, I've attended Catholic school my entire life, and I believe faith and sport belong together.

I started Above All 777 because I couldn't find athletic apparel that reflected who I actually am — a girl who loves golf, pickleball, tennis, and yoga, and who doesn't check her faith at the door when she walks onto the court.

The name says everything. Above all — above the noise, above the pressure, above the score — put your faith first. And 777? In scripture, seven is the number of divine completion. Three sevens is a reminder that you are fully and perfectly made for this.

This brand is for girls like me. Girls who compete hard, pray harder, and want their clothes to say something about who they are.

Above All 777. Play with purpose.

— Tiffany`,
  },
  {
    slug: 'golf-patience-and-prayer',
    title: 'How Golf Taught Me Patience (and Prayer)',
    category: 'Sport',
    excerpt: "There is no sport quite like golf for forcing you to slow down. To breathe. To trust. To surrender the outcome.",
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
    readTime: '5 min read',
    body: `There is no sport quite like golf for forcing you to slow down.

On the course, you can't rush. You can't force it. You stand over the ball, and the only thing between you and that shot is your breath, your alignment, and your trust.

That's prayer.

I didn't realize it at first. I thought golf was just a sport — a beautiful, frustrating, endlessly humbling sport. But somewhere in the silence between shots, I started to hear something.

Patience. Precision. Presence. These aren't just golf virtues. They're spiritual ones.

Proverbs 3:5-6 says: "Trust in the Lord with all your heart, and lean not on your own understanding." On a golf course, that's the whole game. You prepare, you practice, you release — and then you trust.

Above All 777 was born partly on a golf course. In that silence. In that trust.

Play with purpose.`,
  },
  {
    slug: '777-a-number-that-changed-everything',
    title: '777: A Number That Changed Everything',
    category: 'Faith',
    excerpt: "Seven is the number of divine completion. In scripture, in tradition, and now — on every piece of Above All 777.",
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
    readTime: '3 min read',
    body: `Numbers mean things.

In scripture, seven is the number of divine completion and perfection. God created the world in six days and rested on the seventh — the day of wholeness. The Book of Revelation references the sevenfold spirit of God. Lamech lived 777 years, symbolizing perfect rest in God's timing.

Three sevens — 777 — represents the Holy Trinity at its most complete expression. Father, Son, and Holy Spirit. Perfection times perfection.

When I chose 777 for this brand, I was making a declaration.

That every practice, every match, every yoga flow is an act of worship. That you don't play for the score — you play for the King. That above all else, faith comes first.

When you wear 777, you're not just wearing a number. You're wearing a statement about who you are and what you're made for.

Made for more. Made above all.`,
  },
  {
    slug: 'how-pickleball-became-my-prayer',
    title: 'How Pickleball Became My Prayer',
    category: 'Sport',
    excerpt: "I never expected to find God on a pickleball court. But there He was — in the joy, the community, the quick hands and steady heart.",
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
    readTime: '4 min read',
    body: `I never expected to find God on a pickleball court.

Golf I understood — the silence, the solitude, the meditative quality of a long walk between shots. But pickleball is fast, loud, joyful, and social. It didn't feel like prayer at first.

Then I read Philippians 4:13: "I can do all things through Christ who strengthens me."

All things. Including the third-shot drop. Including dinking at the kitchen. Including laughing with your partner after a ball clips the top of the net and somehow goes in.

Joy is spiritual. Community is spiritual. Showing up, playing hard, and lifting your partner up — that's all spiritual.

Pickleball taught me that faith isn't just for the quiet moments. It's for the loud ones too. It's for the moments of pure, ridiculous joy on a court with your best friend on a Tuesday afternoon.

God is in all of it. Quick hands. Steady heart.`,
  },
  {
    slug: 'dressing-with-intention',
    title: 'Dressing with Intention: What You Wear Matters',
    category: 'Lifestyle',
    excerpt: "What if getting dressed was an act of faith? What if the clothes you put on before practice could shape how you show up?",
    author: 'Tiffany Nichole Morgado',
    date: 'April 2026',
    readTime: '3 min read',
    body: `What if getting dressed was an act of faith?

I know it sounds small. But think about it — what you wear before you compete shapes how you feel. And how you feel shapes how you play. And how you play shapes who you're becoming.

Above All 777 was designed with this in mind. Every stitch says something. Every detail is intentional.

The 777 embroidery on your polo isn't decoration. It's a declaration. It's a reminder, before you take the first swing, that you're playing for something greater than a score.

The gold accent on your yoga mat bag isn't just pretty. Gold, in faith traditions, represents what is refined, tested, and found worthy.

Colossians 3:17 says: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus."

Whatever you do. That includes how you dress.

Dress with intention. Play with purpose.`,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles
  return articles.filter(a => a.category === category)
}
