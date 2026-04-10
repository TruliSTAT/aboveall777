export interface Product {
  id: string
  name: string
  price: number
  sport: 'golf' | 'pickleball' | 'tennis' | 'yoga'
  description: string
  badge?: string
  featured?: boolean
}

export const products: Product[] = [
  // Golf
  {
    id: 'golf-polo',
    name: 'Above All Golf Polo',
    price: 65,
    sport: 'golf',
    description: 'Performance moisture-wicking polo with faith-inspired 777 embroidery. Designed for the course, styled for purpose.',
    badge: 'Coming Soon',
    featured: true,
  },
  {
    id: 'golf-skort',
    name: '777 Performance Skort',
    price: 58,
    sport: 'golf',
    description: 'Comfortable, athletic skort with 4-way stretch fabric. Built above the ordinary for girls who play above par.',
    badge: 'Coming Soon',
  },
  {
    id: 'golf-cap',
    name: 'Faith & Fairway Cap',
    price: 32,
    sport: 'golf',
    description: 'Structured cap with embroidered 777 icon. The course is your chapel — dress accordingly.',
    badge: 'Coming Soon',
  },
  // Pickleball
  {
    id: 'pickle-dress',
    name: 'Above All Pickleball Dress',
    price: 72,
    sport: 'pickleball',
    description: 'Athletic dress with built-in shorts, 4-way stretch, and rear pocket. Quick hands. Steady heart.',
    badge: 'Coming Soon',
    featured: true,
  },
  {
    id: 'pickle-tank',
    name: '777 Performance Tank',
    price: 45,
    sport: 'pickleball',
    description: 'Lightweight, breathable performance tank with moisture-wicking fabric. Wear your faith on and off the court.',
    badge: 'Coming Soon',
  },
  {
    id: 'pickle-sweatband',
    name: 'Above All Sweatband Set',
    price: 22,
    sport: 'pickleball',
    description: 'Premium wristband + headband set. Gold accent stitching. Because even small details declare something.',
    badge: 'Coming Soon',
  },
  // Tennis
  {
    id: 'tennis-skirt',
    name: 'Above All Tennis Skirt',
    price: 55,
    sport: 'tennis',
    description: 'Pleated performance skirt with compression shorts. Every serve starts with purpose.',
    badge: 'Coming Soon',
    featured: true,
  },
  {
    id: 'tennis-polo',
    name: '777 Performance Polo',
    price: 62,
    sport: 'tennis',
    description: 'Tailored women\'s polo with UV protection and moisture management. Grace under pressure, style above all.',
    badge: 'Coming Soon',
  },
  {
    id: 'tennis-dress',
    name: 'Faith First Tennis Dress',
    price: 78,
    sport: 'tennis',
    description: 'Premium tennis dress with a built-in shorts, deep pockets, and 777 embroidery at the hem. The signature drop.',
    badge: 'Coming Soon',
  },
  // Yoga
  {
    id: 'yoga-set',
    name: 'Above All Flow Set',
    price: 85,
    sport: 'yoga',
    description: 'Matching crop top and high-waist leggings. Buttery soft fabric, four-way stretch. Still your mind. Strengthen your spirit.',
    badge: 'Coming Soon',
    featured: true,
  },
  {
    id: 'yoga-crop',
    name: '777 Crop Top',
    price: 48,
    sport: 'yoga',
    description: 'Supportive yoga crop with built-in shelf bra. The 777 on your chest. The spirit in your heart.',
    badge: 'Coming Soon',
  },
  {
    id: 'yoga-bag',
    name: 'Rise Above Yoga Mat Bag',
    price: 42,
    sport: 'yoga',
    description: 'Canvas yoga mat bag with gold zipper and 777 patch. Carry your practice with purpose.',
    badge: 'Coming Soon',
  },
]

export function getProductsBySport(sport: string): Product[] {
  return products.filter(p => p.sport === sport)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export const sportEmojis: Record<string, string> = {
  golf: '⛳',
  pickleball: '🏓',
  tennis: '🎾',
  yoga: '🧘',
}

export const sportGradients: Record<string, string> = {
  golf: 'from-tiffany to-tiffany-dark',
  pickleball: 'from-gold to-tiffany',
  tennis: 'from-tiffany-mid to-tiffany',
  yoga: 'from-tiffany-pale to-tiffany-mid',
}
