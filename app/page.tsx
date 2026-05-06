import { HeroSection } from '@/components/sections/hero-section'
import { TrustedFeaturesStrip } from '@/components/sections/trusted-features-strip'
import { FeaturesOverview } from '@/components/sections/features-overview'
import { AIAssistantSection } from '@/components/sections/ai-assistant-section'
import { AnalyticsSection } from '@/components/sections/analytics-section'
import { StudyTimerSection } from '@/components/sections/study-timer-section'
import { MoodStressSection } from '@/components/sections/mood-stress-section'
import { NotificationSection } from '@/components/sections/notification-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedFeaturesStrip />
      <FeaturesOverview />
      <AIAssistantSection />
      <AnalyticsSection />
      <StudyTimerSection />
      <MoodStressSection />
      <NotificationSection />
    </>
  )
}
