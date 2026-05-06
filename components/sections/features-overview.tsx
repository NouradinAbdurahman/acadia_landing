'use client'

import { motion } from 'framer-motion'
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
  Calendar
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { StaggerContainer, StaggerItem } from '@/components/animations/motion'

const features = [
  {
    icon: CheckSquare,
    title: 'Task Management',
    description: 'Organize assignments, deadlines, and projects with smart prioritization.',
  },
  {
    icon: Timer,
    title: 'Study Sessions',
    description: 'Track study time with Pomodoro and deep work modes.',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Gain insights into your study patterns and performance trends.',
  },
  {
    icon: Heart,
    title: 'Mood Tracking',
    description: 'Log and monitor your emotional wellbeing over time.',
  },
  {
    icon: AlertTriangle,
    title: 'Burnout Detection',
    description: 'AI-powered alerts when stress levels become concerning.',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Get instant help with queries about your academic data.',
  },
  {
    icon: BookOpen,
    title: 'Semester Management',
    description: 'Organize courses, credits, and academic requirements.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Contextual reminders that respect your focus time.',
  },
  {
    icon: LineChart,
    title: 'Academic Insights',
    description: 'Detailed reports on GPA, workload, and progress.',
  },
  {
    icon: Calendar,
    title: 'Study Heatmap',
    description: 'Visualize your study consistency with activity heatmaps.',
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

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <GlassCard className="p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
