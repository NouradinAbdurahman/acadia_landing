'use client'

import { motion } from 'framer-motion'
import { Timer, Play, Pause, RotateCcw } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn } from '@/components/animations/motion'
import { Button } from '@/components/ui/button'

const modes = [
  { name: 'Pomodoro', duration: '25 min', description: 'Short focused bursts with breaks' },
  { name: 'Deep Work', duration: '90 min', description: 'Extended focus for complex tasks' },
  { name: 'Review', duration: '15 min', description: 'Quick review sessions' },
]
const sessionProgress = [82, 65, 100, 48]

export function StudyTimerSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timer Preview */}
          <FadeIn>
            <GlassCard className="p-8 text-center" glow>
              <div className="mb-6 rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Current Mode
                  </span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Active
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Timer className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Pomodoro</h3>
                </div>
              </div>

              {/* Timer Display */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative w-64 h-64 mx-auto mb-8"
              >
                {/* Outer ring */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 70 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Time display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-foreground">18:45</span>
                  <span className="text-sm text-muted-foreground mt-2">remaining</span>
                  <div className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    75% complete
                  </div>
                </div>
              </motion.div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                  <RotateCcw className="h-5 w-5" />
                </Button>
                <Button size="icon" className="rounded-full h-16 w-16 gradient-primary text-white border-0">
                  <Pause className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                  <Timer className="h-5 w-5" />
                </Button>
              </div>

              {/* Session info */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span>Session 3 of 4</span>
                <span>|</span>
                <span>Total: 1h 15m today</span>
              </div>
              <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">Today&apos;s sessions</span>
                  <span className="text-xs text-muted-foreground">3/4 completed</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {sessionProgress.map((progress, index) => (
                    <motion.div key={index} initial={{ opacity: 0.6, scaleY: 0.2 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex flex-col items-center gap-2">
                      <div className="h-16 w-full overflow-hidden rounded-md bg-background">
                        <div className="w-full rounded-md bg-gradient-to-t from-primary to-secondary" style={{ height: `${progress}%`, marginTop: `${100 - progress}%` }} />
                      </div>
                      <span className="text-[11px] text-muted-foreground">S{index + 1}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <SectionHeader
              title="Stay focused with smart timers"
              description="Choose from multiple timer modes designed to match your study style and maximize productivity."
              centered={false}
            />

            <div className="mt-8 space-y-4">
              {modes.map((mode, index) => (
                <motion.div
                  key={mode.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Timer className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{mode.name}</h4>
                        <p className="text-sm text-muted-foreground">{mode.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary">{mode.duration}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
              <p className="text-sm text-slate-700 dark:text-slate-200">
                <span className="font-medium text-slate-900 dark:text-white">Pro tip:</span> The Pomodoro technique increases focus by 25% according to research. 
                Acadia automatically tracks your sessions and suggests optimal break times.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
