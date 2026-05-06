'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ 
  children, 
  className, 
  hover = true, 
  glow = false,
  ...props 
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={hover ? { type: 'spring', stiffness: 300, damping: 24 } : undefined}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'bg-white dark:bg-slate-800',
        'backdrop-blur-xl',
        'border border-slate-200 dark:border-slate-700',
        'shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30',
        hover && 'transition-all duration-300 hover:shadow-xl',
        glow && 'glow-sm',
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      {children}
    </motion.div>
  )
}
