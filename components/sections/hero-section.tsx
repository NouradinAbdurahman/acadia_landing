'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Pointer } from '@/components/magicui/pointer'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Animated grid background */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.06}
        duration={3}
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] dark:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] text-primary"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Academic Performance &amp;{' '}
            <AnimatedGradientText
              colorFrom="#60A5FA"
              colorTo="#818CF8"
              speed={0.8}
            >
              Stress Monitoring
            </AnimatedGradientText>{' '}
            for Modern Students
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Track your studies, manage stress, and achieve your academic goals with AI-powered insights.
            Built for students who want to succeed without burning out.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/features">
              <ShimmerButton
                className="text-base px-8 h-12 gap-2 font-semibold"
                background="rgba(59, 130, 246, 1)"
              >
                Explore Features
                <ArrowRight className="h-5 w-5" />
              </ShimmerButton>
            </Link>
            <Link href="/architecture">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-base px-8 h-12 font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full border border-border/60 hover:border-border bg-transparent cursor-pointer"
              >
                View Architecture
              </motion.button>
            </Link>
          </motion.div>

          {/* Phone Mockup with floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative"
          >
            {/* Outer container — wide enough to host side cards without overlapping the phone */}
            <div className="relative mx-auto max-w-4xl">

              {/* Phone frame — sits in the middle, below the floating cards in z-order */}
              <div className="relative mx-auto w-64 sm:w-72 md:w-80 z-[5]">
                <div className="relative">
                  <Pointer>
                    <div className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Acadia
                    </div>
                  </Pointer>
                  <div className="relative bg-gradient-to-b from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 dark:bg-slate-800 rounded-b-2xl" />
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                      <img
                        src="/hero-mobile-screen.png"
                        alt="Acadia mobile app preview"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Left card — only visible on lg+ where side space ≥ 288px */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-0 xl:left-8 top-[22%] z-20 hidden lg:block"
              >
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">GPA Improved</p>
                      <p className="text-xs text-muted-foreground">+0.3 this semester</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right card — only visible on lg+ */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-0 xl:right-8 top-[38%] z-20 hidden lg:block"
              >
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.7-1.4 2.41l-3.55-.71a24.262 24.262 0 00-9.5 0l-3.55.71c-1.43.29-2.4-1.41-1.4-2.41L5 14.5" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">AI Assistant</p>
                      <p className="text-xs text-muted-foreground">Always ready to help</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
