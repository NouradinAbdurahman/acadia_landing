'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Home, Layers, Cpu, Image as ImageIcon,
  Info, Mail, Menu,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { navItems } from '@/lib/constants/theme'

const navIcons: Record<string, React.ElementType> = {
  '/':             Home,
  '/features':     Layers,
  '/architecture': Cpu,
  '/screenshots':  ImageIcon,
  '/about':        Info,
  '/contact':      Mail,
}

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* lock body scroll while menu open */
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="relative h-9 w-9 overflow-hidden rounded-lg">
                <Image src="/logo.png" alt="Acadia logo" fill className="object-contain" priority />
              </div>
              <span className="font-semibold text-lg text-foreground">Acadia</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 rounded-xl border border-border/60 bg-background/60 p-1 backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-border/60 bg-background/60 backdrop-blur-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] flex flex-col bg-background border-l border-border/60 shadow-2xl md:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                    <Image src="/logo.png" alt="Acadia logo" fill className="object-contain" />
                  </div>
                  <span className="font-bold text-base text-foreground">Acadia</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-xl bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {navItems.map((item, i) => {
                  const Icon = navIcons[item.href] ?? Home
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors overflow-hidden',
                          isActive
                            ? 'text-white'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-pill"
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className={cn(
                          'relative w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                          isActive ? 'bg-white/20' : 'bg-muted/60'
                        )}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="relative text-sm font-semibold">{item.label}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Panel footer */}
              <div className="px-3 py-4 border-t border-border/60">
                <a
                  href="https://apps.apple.com/tr/app/acadia-study-planner/id6761367583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold py-3 shadow-sm shadow-primary/25 hover:opacity-90 transition-opacity"
                >
                  Download on App Store
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
