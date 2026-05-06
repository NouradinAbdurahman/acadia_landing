'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn } from '@/components/animations/motion'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const moods = [
  { emoji: '😫', label: 'Awful', color: '#E53935', value: 5 },
  { emoji: '😔', label: 'Bad', color: '#FF7043', value: 15 },
  { emoji: '😐', label: 'Neutral', color: '#FFC107', value: 25 },
  { emoji: '🙂', label: 'Good', color: '#66BB6A', value: 35 },
  { emoji: '😄', label: 'Great', color: '#22C55E', value: 20 },
]

const weekData = [
  { day: 'Mon', mood: 4, stress: 3, energy: 4 },
  { day: 'Tue', mood: 3, stress: 4, energy: 3 },
  { day: 'Wed', mood: 4, stress: 2, energy: 4 },
  { day: 'Thu', mood: 5, stress: 2, energy: 5 },
  { day: 'Fri', mood: 4, stress: 3, energy: 4 },
  { day: 'Sat', mood: 5, stress: 1, energy: 5 },
  { day: 'Sun', mood: 4, stress: 2, energy: 4 },
]

const chartConfig = {
  mood: {
    label: 'Mood',
    color: '#22C55E',
  },
  stress: {
    label: 'Stress',
    color: '#F97316',
  },
  energy: {
    label: 'Energy',
    color: '#14B8A6',
  },
} satisfies ChartConfig

export function MoodStressSection() {
  const [selectedMood, setSelectedMood] = React.useState('Good')

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Track your mood and stress levels"
          description="Understanding your emotional patterns helps you maintain balance and prevent burnout before it happens."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Mood Tracker */}
          <FadeIn>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-foreground mb-6">How are you feeling today?</h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
                {moods.map((mood, index) => (
                  <motion.button
                    key={mood.label}
                    type="button"
                    onClick={() => setSelectedMood(mood.label)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition-all ${
                      selectedMood === mood.label
                        ? 'border-primary bg-primary/10 shadow-sm'
                        : 'border-border/60 bg-background/60 hover:border-primary/40 hover:bg-muted/40'
                    }`}
                  >
                    <span className="text-2xl">{mood.emoji}</span>
                    <span
                      className={`text-xs font-medium ${
                        selectedMood === mood.label ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {mood.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Mood distribution */}
              <div className="space-y-3">
                <div className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-xs text-primary">
                  Selected mood: <span className="font-semibold">{selectedMood}</span>
                </div>
                <p className="text-sm text-muted-foreground">This week&apos;s distribution</p>
                <div className="h-4 rounded-full overflow-hidden flex">
                  {moods.map((mood) => (
                    <motion.div
                      key={mood.label}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mood.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      style={{ backgroundColor: mood.color }}
                      className="h-full"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Mostly positive this week</span>
                  <span>55% good or better</span>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Weekly Trends */}
          <FadeIn delay={0.2}>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-foreground mb-6">Weekly Trends</h3>
              
              <div className="space-y-6">
                <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                  <ChartContainer config={chartConfig} className="h-56 w-full !aspect-auto">
                    <LineChart data={weekData} margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Line
                        dataKey="mood"
                        type="monotone"
                        stroke="var(--color-mood)"
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line
                        dataKey="stress"
                        type="monotone"
                        stroke="var(--color-stress)"
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line
                        dataKey="energy"
                        type="monotone"
                        stroke="var(--color-energy)"
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>

                {/* Insights */}
                <div className="p-4 rounded-xl bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 dark:border-green-500/30">
                  <p className="text-sm text-slate-700 dark:text-slate-200">
                    <span className="font-medium text-slate-900 dark:text-white">Insight:</span> Your mood tends to improve towards the weekend. 
                    Consider scheduling challenging tasks earlier in the week.
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
