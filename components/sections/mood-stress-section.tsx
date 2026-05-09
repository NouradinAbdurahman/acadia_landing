'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Sparkles, TrendingDown, TrendingUp } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'

const moods = [
  {
    emoji: '😫', label: 'Awful', color: '#E53935',
    stress: 9, energy: 2, focus: 2,
    insight: 'High stress detected. Consider a mindfulness break and lightening today\'s task load.',
    insightBg: 'bg-red-500/10', insightBorder: 'border-red-500/20', insightText: 'text-red-500 dark:text-red-400',
  },
  {
    emoji: '😔', label: 'Bad', color: '#FF7043',
    stress: 7, energy: 3, focus: 4,
    insight: 'Low energy day. Schedule lighter tasks and prioritise sleep for optimal recovery.',
    insightBg: 'bg-orange-500/10', insightBorder: 'border-orange-500/20', insightText: 'text-orange-500 dark:text-orange-400',
  },
  {
    emoji: '😐', label: 'Neutral', color: '#FFC107',
    stress: 5, energy: 5, focus: 5,
    insight: 'Steady state. A good time for review sessions and consolidating recent learning.',
    insightBg: 'bg-yellow-500/10', insightBorder: 'border-yellow-500/20', insightText: 'text-yellow-600 dark:text-yellow-400',
  },
  {
    emoji: '🙂', label: 'Good', color: '#66BB6A',
    stress: 3, energy: 7, focus: 7,
    insight: 'Good mood! Great conditions for complex problem-solving and learning new material.',
    insightBg: 'bg-green-500/10', insightBorder: 'border-green-500/20', insightText: 'text-green-600 dark:text-green-400',
  },
  {
    emoji: '😄', label: 'Great', color: '#22C55E',
    stress: 1, energy: 9, focus: 9,
    insight: 'Peak state! Tackle your hardest tasks now — focus and retention are at their best.',
    insightBg: 'bg-emerald-500/10', insightBorder: 'border-emerald-500/20', insightText: 'text-emerald-600 dark:text-emerald-400',
  },
]

const historyData = [
  { day: 'Mon', emoji: '😐', color: '#FFC107' },
  { day: 'Tue', emoji: '😔', color: '#FF7043' },
  { day: 'Wed', emoji: '🙂', color: '#66BB6A' },
  { day: 'Thu', emoji: '😄', color: '#22C55E' },
  { day: 'Fri', emoji: '🙂', color: '#66BB6A' },
  { day: 'Sat', emoji: '😄', color: '#22C55E' },
  { day: 'Sun', emoji: '🙂', color: '#66BB6A' },
]

const weekData = [
  { day: 'Mon', mood: 3, stress: 5, energy: 4 },
  { day: 'Tue', mood: 2, stress: 7, energy: 3 },
  { day: 'Wed', mood: 4, stress: 4, energy: 4 },
  { day: 'Thu', mood: 5, stress: 2, energy: 5 },
  { day: 'Fri', mood: 4, stress: 3, energy: 4 },
  { day: 'Sat', mood: 5, stress: 1, energy: 5 },
  { day: 'Sun', mood: 4, stress: 2, energy: 4 },
]

const chartConfig: ChartConfig = {
  mood:   { label: 'Mood',   color: '#22C55E' },
  stress: { label: 'Stress', color: '#F97316' },
  energy: { label: 'Energy', color: '#14B8A6' },
}

const weekStats = [
  { label: 'Avg Mood',   value: 4.1, decimals: 1, unit: '/5',  icon: '😊', color: 'text-green-500' },
  { label: 'Avg Stress', value: 3.1, decimals: 1, unit: '/10', icon: '😤', color: 'text-orange-500' },
  { label: 'Avg Energy', value: 4.2, decimals: 1, unit: '/5',  icon: '⚡', color: 'text-teal-500' },
]

function MetricBar({
  label, value, max = 10, color,
}: { label: string; value: number; max?: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-xs font-bold tabular-nums" style={{ color }}>{value}/{max}</span>
      </div>
      <div className="h-2 rounded-full bg-border/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          animate={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function MoodStressSection() {
  const [activeIndex, setActiveIndex] = React.useState(2) // Neutral — middle emoji by default
  const selected = moods[activeIndex]

  function handlePanEnd(_: PointerEvent, info: { offset: { x: number } }) {
    if (info.offset.x < -40) setActiveIndex(i => Math.min(moods.length - 1, i + 1))
    else if (info.offset.x > 40) setActiveIndex(i => Math.max(0, i - 1))
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Track your mood and stress levels"
          description="Understanding your emotional patterns helps you maintain balance and prevent burnout before it happens."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">

          {/* ── Left: Interactive Check-in Card ── */}
          <BlurFade delay={0.1} inView>
            {/* Outer wrapper handles the animated border glow */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              animate={{
                boxShadow: `0 0 0 1.5px ${selected.color}50, 0 8px 32px ${selected.color}14`,
              }}
              transition={{ duration: 0.45 }}
            >
              {/* Inner bg tint */}
              <motion.div
                className="relative rounded-2xl border border-transparent bg-card"
                animate={{ borderColor: `${selected.color}35` }}
                transition={{ duration: 0.45 }}
              >
                {/* Ambient glow layer */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  animate={{ background: `radial-gradient(ellipse at 30% 20%, ${selected.color}12 0%, transparent 65%)` }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-foreground">How are you feeling today?</p>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Swipe to select</span>
                  </div>

                  {/* ── Coverflow Carousel ── */}
                  <div className="relative mb-1">
                    {/* Swipe zone — catches pan gestures without blocking child clicks */}
                    <motion.div
                      className="relative h-28 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
                      onPanEnd={handlePanEnd as any}
                    >
                      {/* Glow — radial gradient pinned to center, fades to transparent at edges */}
                      <motion.div
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"
                        animate={{ background: `radial-gradient(circle, ${selected.color}90 0%, ${selected.color}30 45%, transparent 72%)` }}
                        transition={{ duration: 0.35 }}
                      />

                      {/* Emoji items */}
                      {moods.map((mood, i) => {
                        const distance = i - activeIndex
                        const absD = Math.abs(distance)
                        return (
                          <motion.button
                            key={mood.label}
                            onClick={() => setActiveIndex(i)}
                            className="absolute flex flex-col items-center gap-1 cursor-pointer focus:outline-none"
                            animate={{
                              x: distance * 78,
                              scale: absD === 0 ? 1.45 : absD === 1 ? 0.68 : 0.48,
                              opacity: absD === 0 ? 1 : absD === 1 ? 0.55 : 0.22,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                            style={{ zIndex: 10 - absD }}
                          >
                            <span className="text-5xl leading-none">{mood.emoji}</span>
                          </motion.button>
                        )
                      })}
                    </motion.div>

                    {/* Active indicator bar */}
                    <div className="flex justify-center mt-1 mb-3">
                      <motion.div
                        className="h-1 rounded-full"
                        animate={{ width: 28, backgroundColor: selected.color }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* "I'm feeling…" label */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={selected.label}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.18 }}
                        className="text-center text-sm font-semibold mb-5"
                        style={{ color: selected.color }}
                      >
                        I&apos;m feeling {selected.label}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Animated metric bars */}
                  <div className="space-y-3 mb-5">
                    <MetricBar label="Stress Level" value={selected.stress} color="#F97316" />
                    <MetricBar label="Energy Level" value={selected.energy} color="#14B8A6" />
                  </div>

                  {/* Dynamic insight */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected.label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className={cn(
                        'rounded-xl border p-3.5 flex items-start gap-2.5',
                        selected.insightBg, selected.insightBorder
                      )}
                    >
                      <Sparkles className={cn('h-3.5 w-3.5 flex-shrink-0 mt-0.5', selected.insightText)} />
                      <p className={cn('text-xs leading-relaxed', selected.insightText)}>
                        {selected.insight}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 7-day history strip */}
                <div className="border-t border-border/40 px-6 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    7-day history
                  </p>
                  <div className="grid grid-cols-7 gap-1">
                    {historyData.map((d, i) => (
                      <motion.div
                        key={d.day}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, type: 'spring', stiffness: 280 }}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                          style={{
                            backgroundColor: `${d.color}18`,
                            border: `1.5px solid ${d.color}45`,
                          }}
                        >
                          {d.emoji}
                        </div>
                        <span className="text-[9px] text-muted-foreground">{d.day}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </BlurFade>

          {/* ── Right: Weekly Trends ── */}
          <BlurFade delay={0.2} inView>
            <div className="h-full rounded-2xl border border-border/60 bg-card flex flex-col overflow-hidden">
              <div className="px-6 pt-6 pb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Weekly Wellbeing Trends</p>
                <span className="text-xs text-muted-foreground">Last 7 days</span>
              </div>

              <div className="px-2 flex-1">
                <ChartContainer config={chartConfig} className="aspect-auto h-52 w-full">
                  <LineChart data={weekData} margin={{ left: 8, right: 12, top: 8, bottom: 0 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 11 }} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line dataKey="mood"   type="monotone" stroke="var(--color-mood)"   strokeWidth={2.5} dot={{ r: 3, fill: 'var(--color-mood)'   }} activeDot={{ r: 5 }} />
                    <Line dataKey="stress" type="monotone" stroke="var(--color-stress)" strokeWidth={2.5} dot={{ r: 3, fill: 'var(--color-stress)' }} activeDot={{ r: 5 }} />
                    <Line dataKey="energy" type="monotone" stroke="var(--color-energy)" strokeWidth={2.5} dot={{ r: 3, fill: 'var(--color-energy)' }} activeDot={{ r: 5 }} />
                  </LineChart>
                </ChartContainer>
              </div>

              {/* Week stat pills */}
              <div className="grid grid-cols-3 border-t border-border/40 mt-1">
                {weekStats.map((stat, i) => (
                  <div key={stat.label} className={cn('px-4 py-4 text-center', i < 2 && 'border-r border-border/40')}>
                    <p className="text-base mb-0.5">{stat.icon}</p>
                    <p className={cn('text-base font-bold tabular-nums', stat.color)}>
                      <NumberTicker value={stat.value} decimalPlaces={stat.decimals} className={cn('font-bold', stat.color)} />
                      <span className="text-xs text-muted-foreground font-normal">{stat.unit}</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Insight chips */}
              <div className="border-t border-border/40 p-5 space-y-2.5">
                {[
                  { Icon: TrendingUp,   text: 'Mood improved 18% vs last week',    color: 'text-green-500',  bg: 'bg-green-500/10'  },
                  { Icon: TrendingDown, text: 'Stress dropped 32% since Monday',   color: 'text-orange-500', bg: 'bg-orange-500/10' },
                ].map(({ Icon, text, color, bg }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <div className={cn('w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0', bg)}>
                      <Icon className={cn('h-3.5 w-3.5', color)} />
                    </div>
                    <p className="text-xs text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
