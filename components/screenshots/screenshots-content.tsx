'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { cn } from '@/lib/utils'

/* ─── data ──────────────────────────────────────────────────── */

const categories = ['All','Dashboard','Tasks','Analytics','AI','Wellbeing','Study Timer','Courses','Notification','Settings']

const screenshots = [
  { id: 1,  title: 'Main Dashboard',             category: 'Dashboard',    description: 'Overview of academic performance and daily tasks',                              image: '/screenshots/main-dashboard.png' },
  { id: 2,  title: 'Task Management',            category: 'Tasks',        description: 'Organize and prioritize your assignments',                                       image: '/screenshots/task-management.png' },
  { id: 3,  title: 'AI Chat Assistant',          category: 'AI',           description: 'Get instant answers about your studies',                                        image: '/screenshots/ai-chat-assistant.png' },
  { id: 4,  title: 'Mood Tracking',              category: 'Wellbeing',    description: 'Monitor your emotional wellbeing',                                              image: '/screenshots/mood-tracking.png' },
  { id: 5,  title: 'Study Timer',                category: 'Study Timer',  description: 'Pomodoro, Deep Work, Review, and Practice session modes',                       image: '/screenshots/study-timer.png' },
  { id: 6,  title: 'Courses Overview',           category: 'Courses',      description: 'View all your courses and progress',                                            image: '/screenshots/course-overview.png' },
  { id: 7,  title: 'Study Heatmap',              category: 'Dashboard',    description: 'Visualize your study consistency over time',                                    image: '/screenshots/study-heatmap.png' },
  { id: 8,  title: 'Notification Center',        category: 'Notification', description: 'Smart alerts and reminders that matter',                                        image: '/screenshots/notifications.png' },
  { id: 9,  title: 'Stress Levels',              category: 'Wellbeing',    description: 'Track and manage your stress patterns',                                         image: '/screenshots/stress-levels.png' },
  { id: 10, title: 'AI Insights',                category: 'AI',           description: 'Personalised recommendations from your data',                                   image: '/screenshots/ai-insights.png' },
  { id: 11, title: 'Profile Settings',           category: 'Settings',     description: 'Customise your experience',                                                     image: '/screenshots/profile-settings.png' },
  { id: 12, title: 'Analytics Overview',         category: 'Analytics',    description: 'GPA, study hours, completion rates and consistency',                            image: '/screenshots/analytics-overview.png' },
  { id: 13, title: 'Semester Dashboard',         category: 'Dashboard',    description: 'Upcoming exams and upcoming deadlines',                                       image: '/screenshots/semester-dashboard-overview.png' },
]

/* ─── iPhone 17 Pro Max frame ───────────────────────────────── */

function PhoneFrame({
  src, alt, failed, onError, onClick, index = 0,
}: {
  src: string; alt: string; failed: boolean
  onError: () => void; onClick?: () => void; index?: number
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full text-left cursor-pointer outline-none"
    >
      {/* Exact same frame as hero section */}
      <div className="relative bg-gradient-to-b from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-[3rem] p-3 shadow-2xl transition-shadow duration-300 group-hover:shadow-primary/20">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 dark:bg-slate-800 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
          {failed ? (
            <div className="flex h-full w-full items-center justify-center flex-col gap-2 bg-muted">
              <ImageOff className="h-6 w-6 text-muted-foreground/40" />
              <span className="text-[10px] text-muted-foreground/40 font-mono text-center px-3 leading-tight">{alt}</span>
            </div>
          ) : (
            <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" onError={onError} />
          )}
          {/* Hover tint */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors duration-300" />
        </div>
      </div>
    </motion.button>
  )
}

/* ─── component ─────────────────────────────────────────────── */

export function ScreenshotsContent() {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [selected, setSelected] = React.useState<number | null>(null)
  const [failed, setFailed] = React.useState<Record<number, boolean>>({})
  const tabsRef = React.useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'All'
    ? screenshots
    : screenshots.filter((s) => s.category === activeCategory)

  const currentIdx = selected !== null ? filtered.findIndex((s) => s.id === selected) : -1
  const selectedShot = selected !== null ? screenshots.find((s) => s.id === selected) : null

  function prev() { if (currentIdx > 0) setSelected(filtered[currentIdx - 1].id) }
  function next() { if (currentIdx < filtered.length - 1) setSelected(filtered[currentIdx + 1].id) }

  /* close lightbox if active item no longer in filter */
  React.useEffect(() => {
    if (selected !== null && !filtered.some((s) => s.id === selected)) setSelected(null)
  }, [filtered, selected])

  /* keyboard nav in lightbox */
  React.useEffect(() => {
    if (selected === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, currentIdx, filtered])

  /* keep active filter tab centred */
  React.useEffect(() => {
    const bar = tabsRef.current
    const btn = bar?.querySelector<HTMLElement>(`[data-cat="${activeCategory}"]`)
    if (!bar || !btn) return
    bar.scrollTo({ left: btn.offsetLeft - bar.offsetWidth / 2 + btn.offsetWidth / 2, behavior: 'smooth' })
  }, [activeCategory])

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Header ── */}
        <BlurFade delay={0.05} inView>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              See Acadia{' '}
              <AnimatedGradientText colorFrom="#60A5FA" colorTo="#818CF8" speed={0.8}>
                in action
              </AnimatedGradientText>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Browse every screen of the app — built for iOS and Android.
            </p>
          </div>
        </BlurFade>

        {/* ── Filter tabs ── */}
        <BlurFade delay={0.1} inView>
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl rounded-2xl border border-border/60 shadow-sm" />
            <div
              ref={tabsRef}
              className="relative flex overflow-x-auto lg:flex-wrap lg:justify-center gap-1.5 p-1.5 lg:p-2"
              style={{ scrollbarWidth: 'none' }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                const count = cat === 'All' ? screenshots.length : screenshots.filter((s) => s.category === cat).length
                return (
                  <button
                    key={cat}
                    data-cat={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'relative flex items-center gap-1.5 px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs lg:text-sm font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer flex-shrink-0',
                      isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="cat-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative">{cat}</span>
                    <span className={cn(
                      'relative rounded-full px-1.5 py-0.5 text-[9px] font-bold leading-none',
                      isActive ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'
                    )}>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </BlurFade>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-border/60 p-16 text-center text-muted-foreground text-sm">
                No screenshots in this category yet.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filtered.map((shot, i) => (
                  <div key={shot.id} className="flex flex-col gap-3">
                    <PhoneFrame
                      src={shot.image}
                      alt={shot.title}
                      failed={!!failed[shot.id]}
                      onError={() => setFailed((p) => ({ ...p, [shot.id]: true }))}
                      onClick={() => setSelected(shot.id)}
                      index={i}
                    />
                    <div className="px-1">
                      <p className="text-[10px] font-semibold text-primary uppercase tracking-wide">{shot.category}</p>
                      <p className="text-xs font-semibold text-foreground mt-0.5 leading-tight">{shot.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Lightbox ── */}
        <AnimatePresence>
          {selected !== null && selectedShot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: 'rgba(0,0,0,0.92)' }}
              onClick={() => setSelected(null)}
            >
              {/* Backdrop blur */}
              <div className="absolute inset-0 backdrop-blur-2xl" />

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                disabled={currentIdx === 0}
                className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                disabled={currentIdx === filtered.length - 1}
                className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>

              {/* Phone */}
              <motion.div
                key={selected}
                initial={{ scale: 0.88, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: -8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-[min(280px,55vw)]"
              >
                {/* Same frame as hero section */}
                <div className="relative bg-gradient-to-b from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 dark:bg-slate-800 rounded-b-2xl z-10" />
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {failed[selected] ? (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <ImageOff className="h-8 w-8 text-muted-foreground/40" />
                      </div>
                    ) : (
                      <img
                        src={selectedShot.image}
                        alt={selectedShot.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-5 text-center">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">{selectedShot.category}</p>
                  <p className="text-white font-semibold mt-1">{selectedShot.title}</p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed max-w-[220px] mx-auto">{selectedShot.description}</p>
                  <p className="text-white/30 text-[11px] mt-3 tabular-nums">{currentIdx + 1} / {filtered.length}</p>
                </div>
              </motion.div>

              {/* Dot strip */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {filtered.map((s, di) => (
                  <button
                    key={s.id}
                    onClick={(e) => { e.stopPropagation(); setSelected(s.id) }}
                    className={cn(
                      'rounded-full transition-all duration-300 cursor-pointer',
                      di === currentIdx ? 'w-5 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    )}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
