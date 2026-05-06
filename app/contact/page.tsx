import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Acadia team. We would love to hear from you.',
}

export default function ContactPage() {
  return <ContactContent />
}
