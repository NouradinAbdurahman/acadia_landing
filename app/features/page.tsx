import type { Metadata } from 'next'
import { FeaturesContent } from '@/components/features/features-content'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all the powerful features of Acadia - from task management and study sessions to AI assistant and mood tracking.',
}

export default function FeaturesPage() {
  return <FeaturesContent />
}
