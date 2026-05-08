'use client'

import { TrendingUp, Clock, CheckCircle2, Flame, BarChart2, Activity } from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { SectionHeader } from '@/components/shared/section-header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'

const performanceData = [
  { month: 'Sep', score: 71 },
  { month: 'Oct', score: 75 },
  { month: 'Nov', score: 73 },
  { month: 'Dec', score: 80 },
  { month: 'Jan', score: 79 },
  { month: 'Feb', score: 85 },
  { month: 'Mar', score: 89 },
  { month: 'Apr', score: 93 },
]

const weeklyData = [
  { day: 'Mon', hours: 3.5 },
  { day: 'Tue', hours: 2.0 },
  { day: 'Wed', hours: 5.0 },
  { day: 'Thu', hours: 1.5 },
  { day: 'Fri', hours: 4.0 },
  { day: 'Sat', hours: 6.5 },
  { day: 'Sun', hours: 3.0 },
]

const areaConfig: ChartConfig = {
  score: { label: 'Performance Score', color: '#3B82F6' },
}

const barConfig: ChartConfig = {
  hours: { label: 'Study Hours', color: '#6366F1' },
}

const metrics = [
  { label: 'GPA', value: 3.72, decimals: 2, unit: '', change: '+0.15', accent: 'text-blue-400' },
  { label: 'Study Hrs', value: 142, decimals: 0, unit: 'h', change: '+12%', accent: 'text-violet-400' },
  { label: 'Tasks Done', value: 87, decimals: 0, unit: '%', change: '+5%', accent: 'text-green-400' },
  { label: 'Burnout Risk', value: 18, decimals: 0, unit: '%', change: '−20%', accent: 'text-orange-400' },
]

const insights = [
  {
    Icon: TrendingUp,
    title: 'GPA Tracking',
    desc: 'Semester-over-semester trends and outcome predictions.',
    bg: 'bg-blue-500/10',
    color: 'text-blue-500',
  },
  {
    Icon: BarChart2,
    title: 'Workload Trends',
    desc: 'Spot course overload and stress peaks before they hit.',
    bg: 'bg-violet-500/10',
    color: 'text-violet-500',
  },
  {
    Icon: Activity,
    title: 'Study Consistency',
    desc: 'Habit scores and streaks to build lasting routines.',
    bg: 'bg-green-500/10',
    color: 'text-green-500',
  },
]

export function AnalyticsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Understand your academic performance"
          description="Comprehensive analytics help you identify patterns, track progress, and make data-driven decisions about your studies."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-5">
          {/* Hero chart card */}
          <BlurFade delay={0.1} inView className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-border/60 bg-card overflow-hidden flex flex-col">
              {/* Header */}
              <div className="px-6 pt-6 pb-2 flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Semester Performance</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Academic year progress</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-500">
                  <TrendingUp className="h-3 w-3" />
                  +31% overall
                </span>
              </div>

              {/* Area chart */}
              <div className="px-2 flex-1">
                <ChartContainer config={areaConfig} className="aspect-auto h-52 w-full">
                  <AreaChart data={performanceData} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
                    <defs>
                      <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.03} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#3B82F6"
                      strokeWidth={2.5}
                      fill="url(#perfGrad)"
                      dot={false}
                      activeDot={{ r: 5, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>

              {/* Metrics footer */}
              <div className="grid grid-cols-4 border-t border-border/40 mt-1">
                {metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={cn('px-4 py-4', i < 3 && 'border-r border-border/40')}
                  >
                    <p className="text-[10px] text-muted-foreground truncate mb-0.5">{m.label}</p>
                    <p className={cn('text-lg font-bold tabular-nums', m.accent)}>
                      <NumberTicker
                        value={m.value}
                        decimalPlaces={m.decimals}
                        className={cn('font-bold', m.accent)}
                      />
                      {m.unit}
                    </p>
                    <p className="text-[10px] text-green-500 font-medium mt-0.5">{m.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Weekly bar chart */}
            <BlurFade delay={0.2} inView>
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-foreground">Weekly Study Hours</p>
                  <span className="text-xs text-muted-foreground">25.5h this week</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Daily distribution</p>
                <ChartContainer config={barConfig} className="aspect-auto h-[130px] w-full">
                  <BarChart data={weeklyData} margin={{ left: -12, right: 4, top: 4, bottom: 0 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="day" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="hours" fill="#6366F1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>
            </BlurFade>

            {/* Insights */}
            <BlurFade delay={0.3} inView className="flex-1">
              <div className="rounded-2xl border border-border/60 bg-card p-5 h-full">
                <p className="text-sm font-semibold text-foreground mb-5">Analytics Features</p>
                <div className="space-y-5">
                  {insights.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 group">
                      <div
                        className={cn(
                          'mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110',
                          item.bg
                        )}
                      >
                        <item.Icon className={cn('h-4 w-4', item.color)} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
