'use client'

import {
  CheckSquare,
  Timer,
  BarChart3,
  Heart,
  AlertTriangle,
  Bot,
  BookOpen,
  Bell,
  LineChart,
  Calendar,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { BlurFade } from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: CheckSquare,
    title: 'Task Management',
    description: 'Organize assignments, deadlines, and projects with smart prioritization.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Timer,
    title: 'Study Sessions',
    description: 'Track study time with Pomodoro and deep work modes.',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Gain insights into your study patterns and performance trends.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Heart,
    title: 'Mood Tracking',
    description: 'Log and monitor your emotional wellbeing over time.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
  {
    icon: AlertTriangle,
    title: 'Burnout Detection',
    description: 'AI-powered alerts when stress levels become concerning.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Get instant help with queries about your academic data.',
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
  },
  {
    icon: BookOpen,
    title: 'Semester Management',
    description: 'Organize courses, credits, and academic requirements.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Contextual reminders that respect your focus time.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: LineChart,
    title: 'Academic Insights',
    description: 'Detailed reports on GPA, workload, and progress.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Calendar,
    title: 'Study Heatmap',
    description: 'Visualize your study consistency with activity heatmaps.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
]

export function FeaturesOverview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything you need to succeed academically"
          description="Comprehensive tools designed to help you manage your studies, track your wellbeing, and achieve your goals."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.05 * index} inView>
              <div
                className={cn(
                  'group relative overflow-hidden rounded-2xl p-6 h-full',
                  'bg-card border border-border/60',
                  'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
                  'transition-all duration-300 cursor-default'
                )}
              >
                {/* Gradient glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-4', feature.bg)}>
                  <feature.icon className={cn('h-5 w-5', feature.color)} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
