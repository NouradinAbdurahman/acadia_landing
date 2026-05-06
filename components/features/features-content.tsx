'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  CheckSquare, 
  Timer, 
  Heart, 
  BarChart3, 
  Bot, 
  BookOpen, 
  Bell, 
  Calendar,
  GraduationCap
} from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'
import { SectionHeader } from '@/components/shared/section-header'
import { FadeIn } from '@/components/animations/motion'

const features = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: 'Academic Dashboard',
    description: 'Your central hub for academic success',
    details: 'Get a comprehensive overview of your academic life in one place. The dashboard shows your current GPA, upcoming deadlines, study progress, and wellbeing metrics at a glance.',
    benefits: [
      'Real-time GPA tracking and predictions',
      'Upcoming deadline calendar',
      'Study streak and consistency metrics',
      'Quick access to all features',
    ],
  },
  {
    id: 'tasks',
    icon: CheckSquare,
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
  },
  {
    id: 'study-sessions',
    icon: Timer,
    title: 'Study Sessions',
    description: 'Focused study time tracking',
    details: 'Run structured study sessions with Pomodoro, Deep Work, and Review modes while tracking focus and break time separately.',
    benefits: [
      'Pomodoro mode with round flow',
      'Deep Work and Review session modes',
      'Session history and analytics',
      'Focus and break time tracking',
    ],
  },
  {
    id: 'mood-tracking',
    icon: Heart,
    title: 'Mood Tracking',
    description: 'Monitor your emotional wellbeing',
    details: 'Log mood, stress, and energy with optional factors and notes, then review history to spot wellbeing patterns over time.',
    benefits: [
      'Mood, stress, and energy logging',
      'Optional context factors and notes',
      'Mood history and trend visibility',
      'Supports proactive wellbeing checks',
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics Engine',
    description: 'Data-driven insights for improvement',
    details: 'View study and academic analytics including consistency, completion, GPA-related trends, and burnout risk signals from tracked data.',
    benefits: [
      'Study consistency and session metrics',
      'Task completion and workload visibility',
      'GPA and course-level performance trends',
      'Burnout risk and recommendation inputs',
    ],
  },
  {
    id: 'ai-assistant',
    icon: Bot,
    title: 'AI Assistant',
    description: 'Your intelligent study companion',
    details: 'Ask questions about your own data (deadlines, progress, trends) and get contextual responses through local intent handling with LLM fallback.',
    benefits: [
      'Natural-language academic queries',
      'Deadline and task summaries',
      'Data-aware contextual responses',
      'Fast intent path with fallback intelligence',
    ],
  },
  {
    id: 'semester',
    icon: BookOpen,
    title: 'Semester Management',
    description: 'Organize your academic terms',
    details: 'Manage multiple semesters, switch active context, and keep course planning structured with semester-specific study goals.',
    benefits: [
      'Create and switch active semesters',
      'Semester-scoped academic data',
      'Weekly study-goal support',
      'Cleaner term-by-term planning',
    ],
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay informed without overwhelm',
    details: 'Receive meaningful alerts for overdue tasks, elevated risk signals, and key reminders with deduplication to reduce notification fatigue.',
    benefits: [
      'Deadline reminders',
      'Risk and wellbeing alerts',
      'Background notification evaluation',
      'Deduplicated, less noisy delivery',
    ],
  },
  {
    id: 'heatmap',
    icon: Calendar,
    title: 'Study Heatmap',
    description: 'Visualize your consistency',
    details: 'Visualize daily study activity over time to understand consistency patterns and identify strong and weak study periods.',
    benefits: [
      'Daily activity visualization',
      'Streak tracking',
      'Pattern identification',
      'Consistency insights',
    ],
  },
  {
    id: 'results',
    icon: GraduationCap,
    title: 'Course Results',
    description: 'Track your grades and outcomes',
    details: 'Record and analyze your course results to understand your academic performance and plan for improvement.',
    benefits: [
      'Grade recording',
      'GPA calculation',
      'Performance trends',
      'Goal setting',
    ],
  },
]

export function FeaturesContent() {
  const [activeFeature, setActiveFeature] = React.useState(features[0].id)

  function handleNavClick(featureId: string) {
    setActiveFeature(featureId)
    const element = document.getElementById(featureId)
    if (!element) return
    const yOffset = -120
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="Everything you need for academic success"
            description="Comprehensive tools designed to help you manage studies, track wellbeing, and achieve your goals."
          />
        </FadeIn>

        <div className="mt-16 grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <nav className="hidden lg:block sticky top-32 self-start h-[calc(100vh-9rem)] overflow-y-auto pr-2">
            <div className="space-y-1">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => handleNavClick(feature.id)}
                  className={cn(
                    'w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all',
                    activeFeature === feature.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  )}
                >
                  <feature.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Feature Sections */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.section
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: '-120px 0px -55% 0px' }}
                onViewportEnter={() => setActiveFeature(feature.id)}
                className="scroll-mt-32"
              >
                <GlassCard className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon and Title */}
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>

                    {/* Details and Benefits */}
                    <div className="md:w-2/3">
                      <p className="text-foreground leading-relaxed mb-6">{feature.details}</p>
                      
                      <h4 className="text-sm font-semibold text-foreground mb-4">Key Benefits</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
