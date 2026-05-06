'use client'

import { motion } from 'framer-motion'
import { Bell, Clock, AlertTriangle, Shield } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/motion'

const features = [
  {
    icon: Clock,
    title: 'Overdue Alerts',
    description: 'Get notified when tasks are approaching or past their deadlines.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Alerts',
    description: 'Proactive warnings when burnout indicators are detected.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Context-aware notifications based on your schedule and habits.',
  },
  {
    icon: Shield,
    title: 'Anti-Spam System',
    description: 'Intelligent filtering to prevent notification fatigue.',
  },
]

const notifications = [
  {
    type: 'warning',
    title: 'Burnout Risk Detected',
    message: 'You have studied 8+ hours today. Consider taking a break.',
    time: '2m ago',
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-100 dark:bg-orange-500/20',
  },
  {
    type: 'info',
    title: 'Assignment Due Soon',
    message: 'Math homework is due in 2 hours.',
    time: '15m ago',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-500/20',
  },
  {
    type: 'success',
    title: 'Weekly Goal Achieved',
    message: 'You completed 20 study sessions this week!',
    time: '1h ago',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-500/20',
  },
]

export function NotificationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeIn>
            <SectionHeader
              title="Stay informed, not overwhelmed"
              description="Smart notifications that respect your focus time and only alert you when it matters most."
              centered={false}
            />

            <StaggerContainer className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Notification Preview */}
          <FadeIn delay={0.2}>
            <GlassCard className="p-6" glow>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Recent Notifications</h3>
                <span className="text-xs text-primary">3 new</span>
              </div>

              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`p-4 rounded-xl ${notification.bg} border border-border/50`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full ${notification.bg} flex items-center justify-center`}>
                        <Bell className={`h-4 w-4 ${notification.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-foreground text-sm truncate">
                            {notification.title}
                          </h4>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Notification settings</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-4 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">Enabled</span>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
