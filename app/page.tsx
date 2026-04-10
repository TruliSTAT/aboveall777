import { HeroSection } from '@/components/home/HeroSection'
import { SportTiles } from '@/components/home/SportTiles'
import { The777Promise } from '@/components/home/The777Promise'
import { FounderTeaser } from '@/components/home/FounderTeaser'
import { EmailCapture } from '@/components/home/EmailCapture'
import { JournalPreview } from '@/components/home/JournalPreview'
import { SocialProof } from '@/components/home/SocialProof'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SportTiles />
      <The777Promise />
      <FounderTeaser />
      <EmailCapture />
      <JournalPreview />
      <SocialProof />
    </>
  )
}
