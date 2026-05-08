'use client'

import {
  Bot,
  BarChart3,
  Heart,
  AlertTriangle,
  Bell,
  Timer,
  BookOpen,
  Calendar,
} from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'

const features = [
  { icon: Bot, label: 'AI Assistant' },
  { icon: BarChart3, label: 'Study Analytics' },
  { icon: Heart, label: 'Mood Tracking' },
  { icon: AlertTriangle, label: 'Risk Detection' },
  { icon: Bell, label: 'Smart Notifications' },
  { icon: Timer, label: 'Pomodoro System' },
  { icon: BookOpen, label: 'Semester Management' },
  { icon: Calendar, label: 'Study Heatmap' },
]

const stats = [
  { value: 10, suffix: '+', label: 'Core features' },
  { value: 4, suffix: ' modes', label: 'Study timer' },
  { value: 100, suffix: '%', label: 'Cross-platform' },
]

export function TrustedFeaturesStrip() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <BlurFade delay={0.1} inView>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-stretch rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden divide-x divide-border/60">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center justify-center px-8 py-5 gap-0.5">
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none">
                    <NumberTicker value={stat.value} className="text-2xl sm:text-3xl font-bold" />
                    <span>{stat.suffix}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Feature pills */}
        <BlurFade delay={0.3} inView>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {features.map((feature, index) => (
              <BlurFade key={feature.label} delay={0.3 + index * 0.05} inView>
                <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-foreground transition-all duration-200 cursor-default">
                  <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  {feature.label}
                </div>
              </BlurFade>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
