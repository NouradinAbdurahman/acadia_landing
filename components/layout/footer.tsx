'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { navItems, socialLinks } from '@/lib/constants/theme'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  function handleStoreClick(store: 'App Store' | 'Google Play') {
    toast.info(`${store} version is not published yet.`)
  }

  return (
    <footer className="border-t border-border bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Acadia logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-xl text-foreground">Acadia</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Academic Performance &amp; Stress Monitoring for Modern Students. 
              Built with AI to help you achieve your academic goals.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleStoreClick('App Store')}
                className="cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-90 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                aria-label="App Store coming soon"
              >
                <Image
                  src="/app-store-logo.png"
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="h-auto w-auto max-w-[180px]"
                />
              </button>
              <button
                type="button"
                onClick={() => handleStoreClick('Google Play')}
                className="cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-90 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                aria-label="Google Play coming soon"
              >
                <Image
                  src="/google-play-logo.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="h-auto w-auto max-w-[180px]"
                />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems
                .filter((item) => item.href !== '/contact')
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@acadia.app"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Acadia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
