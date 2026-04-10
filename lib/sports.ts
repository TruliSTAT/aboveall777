export interface SportConfig {
  slug: string
  name: string
  emoji: string
  tagline: string
  heroGradient: string
  faithAngle: string
  verse: string
  verseReference: string
  products: string[]
}

export const sportsConfig: Record<string, SportConfig> = {
  golf: {
    slug: 'golf',
    name: 'Golf',
    emoji: '⛳',
    tagline: 'The course is your chapel. Tee up with intention.',
    heroGradient: 'from-tiffany to-tiffany-dark',
    faithAngle: 'Golf is a spiritual practice. Patience, precision, and trust — these aren\'t just golf virtues. They\'re spiritual ones. On the course, in the silence between shots, faith speaks.',
    verse: 'Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.',
    verseReference: 'Proverbs 3:5-6',
    products: ['golf-polo', 'golf-skort', 'golf-cap'],
  },
  pickleball: {
    slug: 'pickleball',
    name: 'Pickleball',
    emoji: '🏓',
    tagline: 'Quick hands. Steady heart. Grounded in faith.',
    heroGradient: 'from-gold to-tiffany',
    faithAngle: 'Joy, community, and showing up for each other — pickleball is more than a sport, it\'s a reflection of the community God calls us to. Quick hands. Steady heart.',
    verse: 'I can do all things through Christ who strengthens me.',
    verseReference: 'Philippians 4:13',
    products: ['pickle-dress', 'pickle-tank', 'pickle-sweatband'],
  },
  tennis: {
    slug: 'tennis',
    name: 'Tennis',
    emoji: '🎾',
    tagline: 'Every serve starts with purpose. Every point, played above.',
    heroGradient: 'from-tiffany-mid to-tiffany',
    faithAngle: 'Discipline, resilience, and grace under pressure. Tennis trains your body and your spirit. Every serve is a chance to play above the ordinary.',
    verse: 'Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize.',
    verseReference: '1 Corinthians 9:24',
    products: ['tennis-skirt', 'tennis-polo', 'tennis-dress'],
  },
  yoga: {
    slug: 'yoga',
    name: 'Yoga',
    emoji: '🧘',
    tagline: 'Still your mind. Strengthen your spirit.',
    heroGradient: 'from-tiffany-pale to-tiffany-mid',
    faithAngle: 'Breath, presence, and resting in God\'s peace. Every practice is an opportunity to still the noise and hear what matters most. Be present. Be still.',
    verse: 'Be still, and know that I am God.',
    verseReference: 'Psalm 46:10',
    products: ['yoga-set', 'yoga-crop', 'yoga-bag'],
  },
}

export const allSports = Object.values(sportsConfig)
