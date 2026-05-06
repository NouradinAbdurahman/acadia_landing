'use client'

import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, LineChart, PieChart } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn } from '@/components/animations/motion'

const metrics = [
  { label: 'Current GPA', value: '3.72', change: '+0.15', positive: true },
  { label: 'Study Hours', value: '142', change: '+12%', positive: true },
  { label: 'Tasks Completed', value: '87%', change: '+5%', positive: true },
  { label: 'Burnout Score', value: 'Low', change: '-20%', positive: true },
]
const monthlyPerformance = [52, 61, 58, 72, 68, 78, 84, 80, 88, 93, 89, 95]

export function AnalyticsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Understand your academic performance"
          description="Comprehensive analytics help you identify patterns, track progress, and make data-driven decisions about your studies."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Analytics Dashboard Preview */}
          <FadeIn>
            <GlassCard className="p-6" glow>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Performance Overview</h3>
                <span className="text-xs text-muted-foreground">This Semester</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-100 dark:bg-slate-700 rounded-xl p-4"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                      <span className={`text-xs ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="h-56 rounded-xl border border-border/70 bg-slate-100/70 dark:bg-slate-700/40 p-4">
                <div className="relative h-full">
                  <div className="pointer-events-none absolute inset-0">
                    {[0, 1, 2, 3].map((line) => (
                      <div
                        key={line}
                        className="absolute left-0 right-0 border-t border-border/60"
                        style={{ top: `${line * 33.33}%` }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-6 top-2 flex items-end justify-between gap-1.5">
                    {monthlyPerformance.map((value, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0.5 }}
                        whileInView={{ height: `${value}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.45 }}
                        className="group relative flex-1 rounded-t-md bg-gradient-to-t from-primary to-secondary/70"
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-muted-foreground">
                    <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Features List */}
          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">GPA Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Track your GPA over time, compare semester performance, and predict future outcomes based on current progress.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Workload Trends</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualize your workload distribution across courses and identify peak stress periods before they happen.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <LineChart className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Study Consistency</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor your study habits with detailed session tracking and consistency scores to build better routines.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.4}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <PieChart className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Semester Comparison</h3>
                    <p className="text-sm text-muted-foreground">
                      Compare your performance across semesters to identify growth areas and celebrate your progress.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
