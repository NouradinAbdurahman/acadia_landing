'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const categories = [
  'All',
  'Dashboard',
  'Tasks',
  'Analytics',
  'AI',
  'Wellbeing',
  'Study Timer',
  'Courses',
  'Notification',
  'Settings',
]

const screenshots = [
  {
    id: 1,
    title: 'Main Dashboard',
    category: 'Dashboard',
    description: 'Overview of your academic performance and daily tasks',
    image: '/screenshots/main-dashboard.png',
  },
  {
    id: 2,
    title: 'Task Management',
    category: 'Tasks',
    description: 'Organize and prioritize your assignments',
    image: '/screenshots/task-management.png',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    category: 'AI',
    description: 'Get instant answers about your studies',
    image: '/screenshots/ai-chat-assistant.png',
  },
  {
    id: 4,
    title: 'Mood Tracking',
    category: 'Wellbeing',
    description: 'Monitor your emotional wellbeing',
    image: '/screenshots/mood-tracking.png',
  },
  {
    id: 5,
    title: 'Study Timer',
    category: 'Study Timer',
    description: 'Focus with Pomodoro and deep work modes',
    image: '/screenshots/study-timer.png',
  },
  {
    id: 6,
    title: 'Courses Overview',
    category: 'Courses',
    description: 'View all your courses and progress',
    image: '/screenshots/course-overview.png',
  },
  {
    id: 7,
    title: 'Study Heatmap',
    category: 'Dashboard',
    description: 'Visualize your study consistency',
    image: '/screenshots/study-heatmap.png',
  },
  {
    id: 8,
    title: 'Notification Center',
    category: 'Notification',
    description: 'Smart alerts and reminders',
    image: '/screenshots/notifications.png',
  },
  {
    id: 9,
    title: 'Stress Levels',
    category: 'Wellbeing',
    description: 'Track and manage your stress',
    image: '/screenshots/stress-levels.png',
  },
  {
    id: 10,
    title: 'AI Insights',
    category: 'AI',
    description: 'Personalized recommendations',
    image: '/screenshots/ai-insights.png',
  },
  {
    id: 11,
    title: 'Profile Settings',
    category: 'Settings',
    description: 'Customize your experience',
    image: '/screenshots/profile-settings.png',
  },
  {
    id: 12,
    title: 'Analytics Overview',
    category: 'Analytics',
    description:
      'Track GPA, study hours, completion rates, and consistency with clear charts and insights.',
    image: '/screenshots/analytics-overview.png',
  },
  {
    id: 13,
    title: 'Semester Dashboard Overview',
    category: 'Dashboard',
    description:
      'Track your selected semester with upcoming exams, deadlines, academic risk score, and AI insights in one view.',
    image: '/screenshots/semester-dashboard-overview.png',
  },
]

export function ScreenshotsContent() {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [selectedScreenshot, setSelectedScreenshot] = React.useState<number | null>(null)
  const [failedImages, setFailedImages] = React.useState<Record<number, boolean>>({})

  const filteredScreenshots = activeCategory === 'All'
    ? screenshots
    : screenshots.filter(s => s.category === activeCategory)

  const currentIndex = selectedScreenshot !== null
    ? filteredScreenshots.findIndex(s => s.id === selectedScreenshot)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedScreenshot(filteredScreenshots[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredScreenshots.length - 1) {
      setSelectedScreenshot(filteredScreenshots[currentIndex + 1].id)
    }
  }

  React.useEffect(() => {
    if (selectedScreenshot === null) return

    const existsInCurrentFilter = filteredScreenshots.some(
      screenshot => screenshot.id === selectedScreenshot
    )

    if (!existsInCurrentFilter) setSelectedScreenshot(null)
  }, [filteredScreenshots, selectedScreenshot])

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="See Acadia in action"
            description="Browse through screenshots of the app to get a feel for the user experience."
          />
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setActiveCategory(category)
                  setSelectedScreenshot(null)
                }}
                className={cn(
                  'cursor-pointer',
                  activeCategory === category && 'gradient-primary text-white border-0'
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Screenshots Grid */}
        <StaggerContainer
          key={activeCategory}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredScreenshots.map((screenshot) => (
            <StaggerItem key={screenshot.id}>
              <motion.button
                onClick={() => setSelectedScreenshot(screenshot.id)}
                className="w-full text-left group"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <GlassCard className="overflow-hidden">
                  <div className="relative aspect-[9/19.5] overflow-hidden bg-muted">
                    {failedImages[screenshot.id] ? (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-xs text-muted-foreground">
                        Add image: {screenshot.image}
                      </div>
                    ) : (
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={() =>
                          setFailedImages(prev => ({ ...prev, [screenshot.id]: true }))
                        }
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">{screenshot.category}</span>
                    <h3 className="font-semibold text-foreground mt-1">{screenshot.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{screenshot.description}</p>
                  </div>
                </GlassCard>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {filteredScreenshots.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-border/70 p-8 text-center text-muted-foreground">
            No screenshots in this category yet.
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedScreenshot !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedScreenshot(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                disabled={currentIndex === 0}
                className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors disabled:opacity-30"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                disabled={currentIndex === filteredScreenshots.length - 1}
                className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors disabled:opacity-30"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-sm w-full"
              >
                {(() => {
                  const screenshot = screenshots.find(s => s.id === selectedScreenshot)
                  if (!screenshot) return null
                  return (
                    <>
                      {/* Large screenshot */}
                      <div className="aspect-[9/19.5] overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      {/* Caption */}
                      <div className="mt-6 text-center">
                        <span className="text-primary text-sm font-medium">{screenshot.category}</span>
                        <p className="text-white/60 text-sm mt-1">
                          {currentIndex + 1} of {filteredScreenshots.length}
                        </p>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
