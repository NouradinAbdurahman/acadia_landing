import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/about-content'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Acadia helps students manage courses, tasks, study sessions, and wellbeing with a cross-platform architecture.',
}

export default function AboutPage() {
  return <AboutContent />
}
