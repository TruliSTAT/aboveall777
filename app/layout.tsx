import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'

export const metadata: Metadata = {
  title: 'Above All 777 — Faith-Inspired Sportswear',
  description: 'Faith-inspired athletic and sportswear for teen girls and collegiate women. Golf, Pickleball, Tennis, Yoga. Founded by Tiffany, age 14.',
  keywords: 'faith sportswear, women athletic wear, golf apparel, pickleball, tennis, yoga, christian sportswear, 777',
  openGraph: {
    title: 'Above All 777',
    description: 'Rise Above. Play with Purpose.',
    url: 'https://aboveall777.com',
    siteName: 'Above All 777',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&family=Fredoka:wght@300;400;500;600;700&family=Comfortaa:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
