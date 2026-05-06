import type { Metadata } from 'next'
import { Roboto, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Acadia - Academic Performance & Stress Monitoring',
    template: '%s | Acadia',
  },
  description: 'Acadia is an AI-powered academic performance and stress monitoring system designed for modern students. Track your studies, manage stress, and achieve your academic goals.',
  keywords: ['academic', 'performance', 'stress monitoring', 'student', 'productivity', 'AI assistant', 'study tracker'],
  authors: [{ name: 'Acadia Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acadia.app',
    siteName: 'Acadia',
    title: 'Acadia - Academic Performance & Stress Monitoring',
    description: 'AI-powered academic performance and stress monitoring for modern students.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acadia - Academic Performance & Stress Monitoring',
    description: 'AI-powered academic performance and stress monitoring for modern students.',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${roboto.variable} ${geistMono.variable} dark`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-background min-h-screen">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
