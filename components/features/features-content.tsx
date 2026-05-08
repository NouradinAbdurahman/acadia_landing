'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, CheckSquare, Timer, Heart, BarChart3,
  Bot, BookOpen, Bell, Calendar, GraduationCap, CheckCircle2,
} from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'

const features = [
  {
    id: 'dashboard',
    Icon: LayoutDashboard,
    title: 'Academic Dashboard',
    description: 'Your central hub for academic success',
    details: 'Get a comprehensive overview of your academic life in one place. The dashboard shows your current GPA, upcoming deadlines, study progress, and wellbeing metrics at a glance.',
    benefits: [
      'Real-time GPA tracking and predictions',
      'Upcoming deadline calendar',
      'Study streak and consistency metrics',
      'Quick access to all features',
    ],
    color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20',
    gradFrom: '#3B82F6', gradTo: '#6366F1',
  },
  {
    id: 'tasks',
    Icon: CheckSquare,
    title: 'Tasks & Deadlines',
    description: 'Smart task management for students',
    details: 'Create tasks and deadlines linked to courses, set priorities, and estimate required time so your workload is clear and actionable.',
    benefits: [
      'Tasks linked to courses and semesters',
      'Priority and time-estimate support',
      'Deadline tracking in one workflow',
      'Course-based organization',
      'Progress and status tracking',
    ],
    color: 'text-violet-500', bg: 'bg-violet-500/10', border: 'border-violet-500/20',
    gradFrom: '#8B5CF6', gradTo: '#6366F1',
  },
  {
    id: 'study-sessions',
    Icon: Timer,
    title: 'Study Sessions',
    description: 'Focused study time tracking',
    details: 'Run structured study sessions with Pomodoro, Deep Work, Review, and Practice modes while tracking focus and break time separately.',
    benefits: [
      'Pomodoro mode with 4-round flow',
      'Deep Work, Review, and Practice modes',
      'Session history and analytics',
      'Focus and break time tracking',
    ],
    color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20',
    gradFrom: '#6366F1', gradTo: '#8B5CF6',
  },
  {
    id: 'mood-tracking',
    Icon: Heart,
    title: 'Mood Tracking',
    description: 'Monitor your emotional wellbeing',
    details: 'Log mood, stress, and energy with optional factors and notes, then review history to spot wellbeing patterns over time.',
    benefits: [
      'Mood, stress, and energy logging',
      'Optional context factors and notes',
      'Mood history and trend visibility',
      'Supports proactive wellbeing checks',
    ],
    color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/20',
    gradFrom: '#F43F5E', gradTo: '#FB923C',
  },
  {
    id: 'analytics',
    Icon: BarChart3,
    title: 'Analytics Engine',
    description: 'Data-driven insights for improvement',
    details: 'View study and academic analytics including consistency, completion, GPA-related trends, and burnout risk signals from tracked data.',
    benefits: [
      'Study consistency and session metrics',
      'Task completion and workload visibility',
      'GPA and course-level performance trends',
      'Burnout risk and recommendation inputs',
    ],
    color: 'text-teal-500', bg: 'bg-teal-500/10', border: 'border-teal-500/20',
    gradFrom: '#14B8A6', gradTo: '#0EA5E9',
  },
  {
    id: 'ai-assistant',
    Icon: Bot,
    title: 'AI Assistant',
    description: 'Your intelligent study companion',
    details: 'Ask questions about your own data — deadlines, progress, trends — and get contextual responses through local intent handling with LLM fallback.',
    benefits: [
      'Natural-language academic queries',
      'Deadline and task summaries',
      'Data-aware contextual responses',
      'Fast intent path with fallback intelligence',
    ],
    color: 'text-sky-500', bg: 'bg-sky-500/10', border: 'border-sky-500/20',
    gradFrom: '#0EA5E9', gradTo: '#6366F1',
  },
  {
    id: 'semester',
    Icon: BookOpen,
    title: 'Semester Management',
    description: 'Organize your academic terms',
    details: 'Manage multiple semesters, switch active context, and keep course planning structured with semester-specific study goals.',
    benefits: [
      'Create and switch active semesters',
      'Semester-scoped academic data',
      'Weekly study-goal support',
      'Cleaner term-by-term planning',
    ],
    color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20',
    gradFrom: '#F59E0B', gradTo: '#F97316',
  },
  {
    id: 'notifications',
    Icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay informed without overwhelm',
    details: 'Receive meaningful alerts for overdue tasks, elevated risk signals, and key reminders with deduplication to reduce notification fatigue.',
    benefits: [
      'Deadline reminders',
      'Risk and wellbeing alerts',
      'Background notification evaluation',
      'Deduplicated, less noisy delivery',
    ],
    color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20',
    gradFrom: '#F97316', gradTo: '#EF4444',
  },
  {
    id: 'heatmap',
    Icon: Calendar,
    title: 'Study Heatmap',
    description: 'Visualize your consistency',
    details: 'Visualize daily study activity over time to understand consistency patterns and identify strong and weak study periods.',
    benefits: [
      'Daily activity visualization',
      'Streak tracking',
      'Pattern identification',
      'Consistency insights',
    ],
    color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20',
    gradFrom: '#22C55E', gradTo: '#0D9488',
  },
  {
    id: 'results',
    Icon: GraduationCap,
    title: 'Course Results',
    description: 'Track your grades and outcomes',
    details: 'Record and analyze your course results to understand your academic performance and plan for improvement.',
    benefits: [
      'Grade recording',
      'GPA calculation',
      'Performance trends',
      'Goal setting',
    ],
    color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20',
    gradFrom: '#06B6D4', gradTo: '#3B82F6',
  },
]

export function FeaturesContent() {
  const [activeId, setActiveId] = React.useState(features[0].id)
  const tabsRef = React.useRef<HTMLDivElement>(null)
  const f = features.find((feat) => feat.id === activeId)!
  const i = features.findIndex((feat) => feat.id === activeId)

  /* Keep active tab centred in the scrollable tab bar */
  React.useEffect(() => {
    const bar = tabsRef.current
    const btn = bar?.querySelector<HTMLElement>(`[data-id="${activeId}"]`)
    if (!bar || !btn) return
    const offset = btn.offsetLeft - bar.offsetWidth / 2 + btn.offsetWidth / 2
    bar.scrollTo({ left: offset, behavior: 'smooth' })
  }, [activeId])

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Page header ── */}
        <BlurFade delay={0.05} inView>
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Everything you need for{' '}
              <AnimatedGradientText colorFrom="#60A5FA" colorTo="#818CF8" speed={0.8}>
                academic success
              </AnimatedGradientText>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive tools designed to help you manage studies, track wellbeing, and achieve your goals.
            </p>
          </div>
        </BlurFade>

        {/* ── Sticky tab bar ── */}
        <div className="sticky top-16 z-20 mb-8">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl rounded-2xl border border-border/60 shadow-sm" />
          <div
            ref={tabsRef}
            className="relative flex overflow-x-auto gap-1 p-1.5"
            style={{ scrollbarWidth: 'none' }}
          >
            {features.map((feat) => {
              const isActive = activeId === feat.id
              return (
                <button
                  key={feat.id}
                  data-id={feat.id}
                  onClick={() => setActiveId(feat.id)}
                  className={cn(
                    'relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer flex-shrink-0',
                    isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${feat.gradFrom}, ${feat.gradTo})` }}
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <feat.Icon className="relative h-3.5 w-3.5 flex-shrink-0" />
                  <span className="relative">{feat.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Active feature card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div
              className="rounded-2xl border bg-card overflow-hidden shadow-sm"
              style={{ borderColor: `${f.gradFrom}30` }}
            >
              {/* Gradient top stripe */}
              <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, ${f.gradFrom}, ${f.gradTo})` }} />

              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-10">

                  {/* Left: identity */}
                  <div className="md:w-[38%] flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={cn('w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0', f.bg)}
                        style={{ boxShadow: `0 8px 24px ${f.gradFrom}28` }}
                      >
                        <f.Icon className={cn('h-8 w-8', f.color)} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tabular-nums text-muted-foreground/40">
                          {String(i + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground leading-tight">{f.title}</h3>
                        <p className={cn('text-sm font-semibold mt-0.5', f.color)}>{f.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.details}</p>

                    {/* Prev / Next */}
                    <div className="mt-8 flex items-center gap-2">
                      <button
                        disabled={i === 0}
                        onClick={() => setActiveId(features[i - 1].id)}
                        className="flex-1 rounded-xl border border-border/60 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        ← Prev
                      </button>
                      <button
                        disabled={i === features.length - 1}
                        onClick={() => setActiveId(features[i + 1].id)}
                        className="flex-1 rounded-xl border border-border/60 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        Next →
                      </button>
                    </div>
                  </div>

                  {/* Right: benefits */}
                  <div className="md:w-[62%]">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                      Key capabilities
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {f.benefits.map((b, bi) => (
                        <motion.li
                          key={b}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: bi * 0.07, duration: 0.2 }}
                          className={cn('flex items-start gap-2.5 rounded-xl border p-3.5', f.border)}
                        >
                          <CheckCircle2 className={cn('h-4 w-4 flex-shrink-0 mt-0.5', f.color)} />
                          <span className="text-sm text-muted-foreground leading-snug">{b}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Progress dots */}
                    <div className="mt-8 flex items-center gap-1.5">
                      {features.map((feat, di) => (
                        <button
                          key={feat.id}
                          onClick={() => setActiveId(feat.id)}
                          className={cn(
                            'rounded-full transition-all duration-300 cursor-pointer',
                            di === i ? 'w-6 h-2' : 'w-2 h-2 bg-border hover:bg-muted-foreground/40'
                          )}
                          style={di === i ? { background: `linear-gradient(to right, ${f.gradFrom}, ${f.gradTo})` } : undefined}
                        />
                      ))}
                      <span className="ml-2 text-[10px] text-muted-foreground font-medium">
                        {i + 1} of {features.length}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
