'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell, BellOff, Clock, AlertTriangle, Shield,
  Brain, Timer, Trophy, CheckCheck, Zap,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

/* ─── data ──────────────────────────────────────────────────── */

const features = [
  {
    Icon: Brain,
    title: 'AI Prioritization',
    description: 'ML ranks every alert by context and urgency so only what matters breaks through.',
    color: 'text-violet-500', bg: 'bg-violet-500/10',
    stat: 40, suffix: '%', label: 'fewer interruptions',
  },
  {
    Icon: Clock,
    title: 'Deadline Tracking',
    description: 'Reminders escalate intelligently as due dates approach.',
    color: 'text-blue-500', bg: 'bg-blue-500/10',
    stat: 0, suffix: '', label: 'missed deadlines',
  },
  {
    Icon: Shield,
    title: 'Focus Protection',
    description: 'Study sessions automatically enable Do Not Disturb.',
    color: 'text-green-500', bg: 'bg-green-500/10',
    stat: 2, suffix: '×', label: 'deeper focus',
  },
  {
    Icon: AlertTriangle,
    title: 'Burnout Prevention',
    description: 'Proactive warnings when your stress indicators begin to rise.',
    color: 'text-orange-500', bg: 'bg-orange-500/10',
    stat: 85, suffix: '%', label: 'burnout prevention',
  },
]

const notifications = [
  {
    id: 'burnout',
    category: 'alerts',
    title: 'Burnout Risk Detected',
    message: "You've studied 8+ hours today. Time for a break.",
    time: '2m ago',
    Icon: AlertTriangle,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    dotBg: 'bg-orange-500',
    border: 'border-orange-500/20',
    unread: true,
  },
  {
    id: 'deadline',
    category: 'reminders',
    title: 'Assignment Due in 2 Hours',
    message: 'Math homework · CS101',
    time: '15m ago',
    Icon: Clock,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    dotBg: 'bg-blue-500',
    border: 'border-blue-500/20',
    unread: true,
  },
  {
    id: 'goal',
    category: 'goals',
    title: 'Weekly Goal Achieved! 🎉',
    message: 'You completed 20 study sessions this week.',
    time: '1h ago',
    Icon: Trophy,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/10',
    dotBg: 'bg-green-500',
    border: 'border-green-500/20',
    unread: false,
  },
  {
    id: 'reminder',
    category: 'reminders',
    title: 'Study Session in 30 min',
    message: 'Evening Pomodoro · Physics revision',
    time: '2h ago',
    Icon: Timer,
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
    dotBg: 'bg-violet-500',
    border: 'border-violet-500/20',
    unread: false,
  },
]

const filters = [
  { id: 'all',       label: 'All',       count: 4 },
  { id: 'alerts',    label: 'Alerts',    count: 1 },
  { id: 'reminders', label: 'Reminders', count: 2 },
  { id: 'goals',     label: 'Goals',     count: 1 },
] as const

type FilterId = (typeof filters)[number]['id']

/* ─── component ─────────────────────────────────────────────── */

export function NotificationSection() {
  const [filter, setFilter] = React.useState<FilterId>('all')
  const [dnd, setDnd] = React.useState(false)
  const [dismissed, setDismissed] = React.useState<Set<string>>(new Set())

  const visible = notifications.filter(
    (n) => !dismissed.has(n.id) && (filter === 'all' || n.category === filter)
  )
  const unreadCount = visible.filter((n) => n.unread).length

  function dismiss(id: string) {
    setDismissed((prev) => new Set(prev).add(id))
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: features ── */}
          <div>
            <BlurFade delay={0.1} inView>
              <SectionHeader
                title="Stay informed, not overwhelmed"
                description="Smart notifications that respect your focus time and only alert you when it truly matters."
                centered={false}
              />
            </BlurFade>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <BlurFade key={f.title} delay={0.15 + i * 0.08} inView>
                  <div className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/25 hover:shadow-sm transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110', f.bg)}>
                        <f.Icon className={cn('h-5 w-5', f.color)} />
                      </div>
                      {/* Stat pill */}
                      <div className="text-right">
                        <p className={cn('text-xl font-bold tabular-nums leading-none', f.color)}>
                          <NumberTicker value={f.stat} className={cn('font-bold', f.color)} />
                          {f.suffix}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{f.label}</p>
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>

            {/* Bottom stat strip */}
            <BlurFade delay={0.45} inView>
              <div className="mt-4 rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Notification intelligence</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 94, suffix: '%', label: 'accuracy rate' },
                    { value: 3,  suffix: 's', label: 'avg response'  },
                    { value: 12, suffix: 'k', label: 'alerts filtered' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-lg font-bold text-foreground tabular-nums">
                        <NumberTicker value={s.value} className="font-bold text-foreground" />
                        <span className="text-primary">{s.suffix}</span>
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* ── Right: notification center ── */}
          <BlurFade delay={0.2} inView>
            <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20">

              {/* Header */}
              <div className="px-5 pt-5 pb-4 border-b border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <Bell className="h-5 w-5 text-foreground" />
                      {unreadCount > 0 && !dnd && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary text-[9px] font-bold text-white flex items-center justify-center"
                        >
                          {unreadCount}
                        </motion.span>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-foreground">Notifications</span>
                    {/* Live pulse */}
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-green-500">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      Live
                    </span>
                  </div>

                  <button
                    onClick={() => setDismissed(new Set(notifications.map((n) => n.id)))}
                    className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <CheckCheck className="h-3.5 w-3.5" />
                    Mark all read
                  </button>
                </div>

                {/* Filter chips */}
                <div className="flex items-center gap-1.5">
                  {filters.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilter(f.id)}
                      className={cn(
                        'flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer',
                        filter === f.id
                          ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                          : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      {f.label}
                      <span className={cn(
                        'rounded-full px-1.5 py-0.5 text-[9px] font-bold leading-none',
                        filter === f.id ? 'bg-white/20 text-white' : 'bg-border text-muted-foreground'
                      )}>
                        {f.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Notification list */}
              <div className="relative min-h-[280px]">
                <div className="p-4 space-y-2.5">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {visible.map((n, i) => (
                      <motion.div
                        key={n.id}
                        layout
                        initial={{ opacity: 0, x: -18, scale: 0.97 }}
                        animate={{
                          opacity: dnd ? 0.3 : 1,
                          x: 0,
                          scale: 1,
                          filter: dnd ? 'blur(1px)' : 'blur(0px)',
                        }}
                        exit={{ opacity: 0, x: 20, scale: 0.96 }}
                        transition={{ delay: i * 0.06, duration: 0.22, layout: { duration: 0.2 } }}
                        className={cn(
                          'relative group rounded-xl border p-4 cursor-default',
                          n.border,
                          n.unread ? 'bg-card' : 'bg-muted/30'
                        )}
                      >
                        {/* Unread dot */}
                        {n.unread && (
                          <span className={cn('absolute top-4 right-4 h-2 w-2 rounded-full', n.dotBg)} />
                        )}

                        <div className="flex items-start gap-3 pr-3">
                          <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0', n.iconBg)}>
                            <n.Icon className={cn('h-4 w-4', n.iconColor)} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <p className="text-sm font-semibold text-foreground truncate">{n.title}</p>
                              <span className="text-[10px] text-muted-foreground flex-shrink-0">{n.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{n.message}</p>
                          </div>
                        </div>

                        {/* Dismiss button */}
                        <motion.button
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute bottom-3 right-3 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
                          onClick={() => dismiss(n.id)}
                        >
                          Dismiss
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {visible.length === 0 && !dnd && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-8 text-center"
                    >
                      <p className="text-2xl mb-2">✅</p>
                      <p className="text-sm font-medium text-foreground">All caught up!</p>
                      <p className="text-xs text-muted-foreground mt-1">No notifications in this category.</p>
                    </motion.div>
                  )}
                </div>

                {/* DND overlay */}
                <AnimatePresence>
                  {dnd && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex items-center justify-center backdrop-blur-[3px] bg-card/50 rounded-b-none"
                    >
                      <motion.div
                        initial={{ scale: 0.88, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.88, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="text-center px-6"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-3">
                          <BellOff className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-semibold text-foreground">Focus Mode Active</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          Notifications paused while you study
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer: DND toggle */}
              <div className="border-t border-border/50 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300',
                    dnd ? 'bg-primary/10' : 'bg-muted'
                  )}>
                    {dnd
                      ? <BellOff className="h-4 w-4 text-primary" />
                      : <Bell className="h-4 w-4 text-muted-foreground" />
                    }
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Do Not Disturb</p>
                    <p className="text-[10px] text-muted-foreground">Pause during study sessions</p>
                  </div>
                </div>
                <Switch
                  checked={dnd}
                  onCheckedChange={setDnd}
                  className="data-[state=checked]:bg-primary cursor-pointer"
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
