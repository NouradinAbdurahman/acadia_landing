import type { Metadata } from 'next'
import { ArchitectureContent } from '@/components/architecture/architecture-content'

export const metadata: Metadata = {
  title: 'Architecture',
  description: 'Explore the technical architecture of Acadia - built with Flutter, Supabase, and modern technologies.',
}

export default function ArchitecturePage() {
  return <ArchitectureContent />
}
