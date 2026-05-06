'use client'

import { motion } from 'framer-motion'
import { 
  Bot, 
  BarChart3, 
  Heart, 
  AlertTriangle, 
  Bell, 
  Timer 
} from 'lucide-react'

const features = [
  { icon: Bot, label: 'AI Assistant' },
  { icon: BarChart3, label: 'Study Analytics' },
  { icon: Heart, label: 'Mood Tracking' },
  { icon: AlertTriangle, label: 'Risk Detection' },
  { icon: Bell, label: 'Smart Notifications' },
  { icon: Timer, label: 'Pomodoro System' },
]

export function TrustedFeaturesStrip() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <feature.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
