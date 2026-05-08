'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Send, Search, Calendar, MessageSquare, Brain, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'

const capabilities = [
  {
    Icon: Search,
    title: 'Instant answers',
    description: 'Local intent parsing for sub-100ms responses to common queries.',
    color: 'text-blue-500', bg: 'bg-blue-500/10',
  },
  {
    Icon: Brain,
    title: 'Deep AI fallback',
    description: 'Complex questions route to powerful AI for thorough analysis.',
    color: 'text-violet-500', bg: 'bg-violet-500/10',
  },
  {
    Icon: MessageSquare,
    title: 'Smart summaries',
    description: 'Synthesises your academic data into clear, actionable insights.',
    color: 'text-primary', bg: 'bg-primary/10',
  },
  {
    Icon: Calendar,
    title: 'Deadline assistant',
    description: 'Tracks due dates and suggests optimal study schedules.',
    color: 'text-green-500', bg: 'bg-green-500/10',
  },
]

const deadlines = [
  { label: 'Math Assignment', when: 'Due Tomorrow', urgent: true },
  { label: 'Research Paper', when: 'Due in 3 days', urgent: false },
  { label: 'Physics Lab Report', when: 'Due in 5 days', urgent: false },
]

const suggestions = ['Show GPA trend', 'Summarise today', 'Plan study session']

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 0.15, 0.3].map((d, i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: d }}
        />
      ))}
    </div>
  )
}

function AIAvatar({ large = false }: { large?: boolean }) {
  return (
    <div className={cn(
      'rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/60 flex items-center justify-center flex-shrink-0 overflow-hidden',
      large ? 'w-10 h-10' : 'w-7 h-7'
    )}>
      <Image
        src="/logo.png"
        alt="Acadia AI"
        width={large ? 32 : 22}
        height={large ? 32 : 22}
        className="object-contain"
      />
    </div>
  )
}

export function AIAssistantSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: capabilities ── */}
          <div>
            <BlurFade delay={0.1} inView>
              <SectionHeader
                title="Your intelligent academic companion"
                description="Ask anything about your studies. Get instant answers, summaries, and actionable insights powered by advanced AI."
                centered={false}
              />
            </BlurFade>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {capabilities.map((cap, i) => (
                <BlurFade key={cap.title} delay={0.15 + i * 0.08} inView>
                  <div className="group rounded-2xl border border-border/60 bg-card p-4 hover:border-primary/25 hover:shadow-sm transition-all duration-200">
                    <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110', cap.bg)}>
                      <cap.Icon className={cn('h-4 w-4', cap.color)} />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-1">{cap.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>

            {/* Stats strip */}
            <BlurFade delay={0.5} inView>
              <div className="mt-4 flex items-center gap-6 rounded-2xl border border-border/60 bg-card px-5 py-4">
                {[
                  { value: '<100', label: 'ms response' },
                  { value: '99%', label: 'uptime' },
                  { value: '24/7', label: 'available' },
                ].map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <div className="w-px h-8 bg-border/60" />}
                    <div>
                      <p className="text-base font-bold text-foreground">{s.value}</p>
                      <p className="text-[10px] text-muted-foreground">{s.label}</p>
                    </div>
                  </React.Fragment>
                ))}
                <div className="ml-auto flex items-center gap-1.5 text-xs font-medium text-green-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Online
                </div>
              </div>
            </BlurFade>
          </div>

          {/* ── Right: chat UI ── */}
          <BlurFade delay={0.2} inView>
            <div className="rounded-2xl border border-border/60 bg-card shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden">

              {/* Header */}
              <div className="px-5 py-4 border-b border-border/50 bg-gradient-to-r from-primary/[0.07] to-secondary/[0.04]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <AIAvatar large />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-card" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Acadia Assistant</p>
                      <p className="text-[10px] text-muted-foreground font-medium">AI Study Companion</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[300px]">

                {/* User: deadlines */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0, duration: 0.3 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-primary text-primary-foreground px-4 py-2.5 text-sm shadow-sm shadow-primary/20">
                    What are my upcoming deadlines?
                  </div>
                </motion.div>

                {/* AI: deadline list */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="flex gap-2.5"
                >
                  <AIAvatar />
                  <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-muted/60 border border-border/60 px-4 py-3 text-sm">
                    <p className="font-semibold text-foreground mb-2.5">You have {deadlines.length} upcoming deadlines:</p>
                    <div className="space-y-1.5">
                      {deadlines.map((d) => (
                        <div key={d.label} className="flex items-center justify-between gap-3 rounded-lg bg-card/80 border border-border/50 px-3 py-1.5">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className={cn('h-3.5 w-3.5 flex-shrink-0', d.urgent ? 'text-orange-500' : 'text-muted-foreground/60')} />
                            <span className="text-xs font-medium text-foreground">{d.label}</span>
                          </div>
                          <span className={cn(
                            'text-[10px] font-semibold rounded-full px-2 py-0.5 flex-shrink-0',
                            d.urgent ? 'bg-orange-500/10 text-orange-500' : 'bg-muted text-muted-foreground'
                          )}>{d.when}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* User: stress */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75, duration: 0.3 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-primary text-primary-foreground px-4 py-2.5 text-sm shadow-sm shadow-primary/20">
                    How is my stress level this week?
                  </div>
                </motion.div>

                {/* AI: stress answer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                  className="flex gap-2.5"
                >
                  <AIAvatar />
                  <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-muted/60 border border-border/60 px-4 py-3 text-sm text-foreground leading-relaxed">
                    Moderate stress this week. 6+ hour study days are building up — I recommend a 20-min break now to keep focus high.
                  </div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="flex items-center gap-2.5"
                >
                  <AIAvatar />
                  <div className="rounded-2xl rounded-tl-sm bg-muted/60 border border-border/60">
                    <TypingDots />
                  </div>
                </motion.div>
              </div>

              {/* Suggestion chips */}
              <div className="px-4 pb-3 flex items-center gap-2 overflow-x-auto">
                {suggestions.map((s, i) => (
                  <motion.button
                    key={s}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.7 + i * 0.08 }}
                    className="flex-shrink-0 rounded-full border border-border/60 bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                  >
                    {s}
                  </motion.button>
                ))}
              </div>

              {/* Input bar */}
              <div className="border-t border-border/50 px-4 py-3.5 flex items-center gap-2.5">
                <div className="flex-1 rounded-full border border-border/60 bg-muted/40 px-4 py-2.5 text-sm text-muted-foreground select-none">
                  Ask anything...
                </div>
                <button className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm shadow-primary/25 hover:scale-105 active:scale-95 transition-transform cursor-pointer flex-shrink-0">
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  )
}
