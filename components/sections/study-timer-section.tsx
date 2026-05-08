'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timer, Pause, RotateCcw, SkipForward, Zap, Brain, BookOpen } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { cn } from '@/lib/utils'

const CIRCUMFERENCE = 2 * Math.PI * 44

const modes = [
  {
    id: 'pomodoro',
    name: 'Pomodoro',
    duration: '25 min',
    time: '18:45',
    progress: 0.75,
    description: 'Short focused bursts with regular breaks to maintain peak concentration.',
    sessions: 4,
    breakDuration: '5 min',
    Icon: Timer,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    gradStart: '#3B82F6',
    gradEnd: '#6366F1',
    blocks: [1, 1, 1, 0],
  },
  {
    id: 'deepwork',
    name: 'Deep Work',
    duration: '90 min',
    time: '58:20',
    progress: 0.35,
    description: 'Sustained deep focus for complex problems and creative work.',
    sessions: 2,
    breakDuration: '20 min',
    Icon: Brain,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    gradStart: '#8B5CF6',
    gradEnd: '#6366F1',
    blocks: [1, 0],
  },
  {
    id: 'review',
    name: 'Review',
    duration: '15 min',
    time: '11:00',
    progress: 0.27,
    description: 'Quick spaced-repetition sessions to reinforce what you have learned.',
    sessions: 6,
    breakDuration: '2 min',
    Icon: BookOpen,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    gradStart: '#22C55E',
    gradEnd: '#0D9488',
    blocks: [1, 1, 0, 0, 0, 0],
  },
]

const focusStats = [
  { label: 'Focused today', value: 75, unit: 'min' },
  { label: 'Day streak', value: 7, unit: 'days' },
  { label: 'Sessions done', value: 23, unit: 'total' },
]

export function StudyTimerSection() {
  const [active, setActive] = useState(modes[0])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Timer card ── */}
          <BlurFade delay={0.1} inView>
            <div className="rounded-2xl border border-border/60 bg-card shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden">

              {/* Mode tab bar */}
              <div className="flex gap-1 p-2.5 border-b border-border/60 bg-muted/30">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActive(mode)}
                    className={cn(
                      'flex-1 rounded-lg py-2 text-xs font-semibold transition-all duration-200 cursor-pointer',
                      active.id === mode.id
                        ? 'bg-card text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {/* Ring */}
                <div className="relative w-52 h-52 mx-auto mb-8">
                  {/* Ambient glow */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.28, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-4 rounded-full blur-2xl"
                    style={{ background: `radial-gradient(circle, ${active.gradStart}55, transparent)` }}
                  />

                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={active.gradStart} />
                        <stop offset="100%" stopColor={active.gradEnd} />
                      </linearGradient>
                    </defs>
                    {/* Decorative outer ring */}
                    <circle cx="50" cy="50" r="48" fill="none" strokeWidth="0.5" className="stroke-border/50" />
                    {/* Track */}
                    <circle cx="50" cy="50" r="44" fill="none" strokeWidth="6" className="stroke-muted" />
                    {/* Progress */}
                    <motion.circle
                      cx="50" cy="50" r="44"
                      fill="none"
                      stroke="url(#timerGrad)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={CIRCUMFERENCE}
                      initial={{ strokeDashoffset: CIRCUMFERENCE * (1 - modes[0].progress) }}
                      animate={{ strokeDashoffset: CIRCUMFERENCE * (1 - active.progress) }}
                      transition={{ duration: 0.9, ease: 'easeInOut' }}
                    />
                  </svg>

                  {/* Time text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={active.id}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="text-4xl font-bold tracking-tighter text-foreground font-mono"
                      >
                        {active.time}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-xs text-muted-foreground mt-1">remaining</span>
                    <motion.div
                      key={active.id + '-pct'}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2.5 rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-semibold text-primary"
                    >
                      {Math.round(active.progress * 100)}% complete
                    </motion.div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  {[
                    { Icon: RotateCcw, size: 'h-11 w-11' },
                  ].map(({ Icon, size }, i) => (
                    <button key={i} className={cn('flex items-center justify-center rounded-full border border-border/70 bg-muted/40 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-foreground cursor-pointer', size)}>
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                  <button
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    style={{ background: `linear-gradient(135deg, ${active.gradStart}, ${active.gradEnd})` }}
                  >
                    <Pause className="h-6 w-6" />
                  </button>
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-muted/40 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-foreground cursor-pointer">
                    <SkipForward className="h-4 w-4" />
                  </button>
                </div>

                {/* Session info */}
                <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-foreground">Today's sessions</span>
                    <span className="text-xs text-muted-foreground">3 of {active.sessions} done</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    {active.blocks.map((done, i) => (
                      <motion.div
                        key={`${active.id}-${i}`}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: i * 0.07, duration: 0.25 }}
                        className={cn('h-2 flex-1 rounded-full', done ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-border')}
                        style={done ? { background: `linear-gradient(to right, ${active.gradStart}, ${active.gradEnd})` } : undefined}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3 w-3 text-primary" />
                      1h 15m focused today
                    </span>
                    <span>{active.duration} · {active.breakDuration} break</span>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* ── Right content ── */}
          <div>
            <BlurFade delay={0.15} inView>
              <SectionHeader
                title="Stay focused with smart timers"
                description="Choose from multiple timer modes designed to match your study style and maximize productivity."
                centered={false}
              />
            </BlurFade>

            {/* Mode cards */}
            <div className="mt-8 space-y-3">
              {modes.map((mode, index) => (
                <BlurFade key={mode.id} delay={0.2 + index * 0.08} inView>
                  <button
                    onClick={() => setActive(mode)}
                    className={cn(
                      'w-full text-left rounded-2xl border p-5 transition-all duration-200 cursor-pointer group',
                      active.id === mode.id
                        ? 'border-primary/40 bg-primary/5 shadow-sm shadow-primary/5'
                        : 'border-border/60 bg-card hover:border-primary/20 hover:bg-card'
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110', mode.bg)}>
                          <mode.Icon className={cn('h-5 w-5', mode.color)} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-semibold text-foreground">{mode.name}</span>
                            <AnimatePresence>
                              {active.id === mode.id && (
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.7 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.7 }}
                                  className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary"
                                >
                                  Active
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{mode.description}</p>
                        </div>
                      </div>
                      <span className={cn('text-sm font-bold flex-shrink-0 mt-0.5', mode.color)}>{mode.duration}</span>
                    </div>

                    {/* Mini session blocks */}
                    <div className="mt-3 flex items-center gap-1.5">
                      {mode.blocks.map((done, i) => (
                        <div
                          key={i}
                          className={cn('h-1.5 flex-1 max-w-8 rounded-full transition-colors duration-300')}
                          style={
                            done
                              ? { background: `linear-gradient(to right, ${mode.gradStart}${active.id === mode.id ? 'ff' : '66'}, ${mode.gradEnd}${active.id === mode.id ? 'ff' : '66'})` }
                              : undefined
                          }
                        >
                          {!done && <div className="h-full w-full rounded-full bg-border" />}
                        </div>
                      ))}
                      <span className="ml-1 text-[10px] text-muted-foreground flex-shrink-0">
                        {mode.sessions} sessions · {mode.breakDuration} breaks
                      </span>
                    </div>
                  </button>
                </BlurFade>
              ))}
            </div>

            {/* Stats row */}
            <BlurFade delay={0.45} inView>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {focusStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border/60 bg-card p-4 text-center">
                    <p className="text-xl font-bold text-foreground tabular-nums">
                      <NumberTicker value={stat.value} className="text-xl font-bold text-foreground" />
                      <span className="text-xs text-muted-foreground font-normal ml-0.5">{stat.unit}</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
