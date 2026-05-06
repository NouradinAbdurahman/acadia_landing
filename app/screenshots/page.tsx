import type { Metadata } from 'next'
import { ScreenshotsContent } from '@/components/screenshots/screenshots-content'

export const metadata: Metadata = {
  title: 'Screenshots',
  description: 'See Acadia in action - browse through screenshots of the dashboard, tasks, analytics, AI chat, and more.',
}

export default function ScreenshotsPage() {
  return <ScreenshotsContent />
}
