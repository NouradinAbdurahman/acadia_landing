'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  GraduationCap, Heart, TrendingUp, Code2, Target,
  Layers, Brain, Shield, BarChart3, Bell,
  Smartphone, Database, ArrowRight, CheckCircle2,
} from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { cn } from '@/lib/utils'

const goals = [
  {
    Icon: GraduationCap,
    title: 'Academic Awareness',
    description: 'Help students understand their performance patterns and make informed decisions about their studies.',
    color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20',
  },
  {
    Icon: Heart,
    title: 'Burnout Prevention',
    description: 'Detect early signs of burnout through stress and mood signals before workload escalates.',
    color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/20',
  },
  {
    Icon: TrendingUp,
    title: 'Productivity Growth',
    description: 'Enable students to optimise study habits and achieve better outcomes with data-driven insights.',
    color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20',
  },
]

const principles = [
  {
    Icon: Code2,
    title: 'Modular Architecture',
    description: 'Feature-based modules with clean separation of concerns for long-term maintainability.',
    color: 'text-violet-500', bg: 'bg-violet-500/10',
  },
  {
    Icon: Target,
    title: 'Explainable Logic',
    description: 'All AI decisions surface the reasoning behind every recommendation and alert.',
    color: 'text-primary', bg: 'bg-primary/10',
  },
  {
    Icon: Layers,
    title: 'Structured Analytics',
    description: 'Data-driven insights grounded in rigorous statistical methods and real usage patterns.',
    color: 'text-teal-500', bg: 'bg-teal-500/10',
  },
]

const techStack = [
  { name: 'Flutter',   label: 'Cross-platform UI',  color: 'text-sky-400',    bg: 'bg-sky-400/10',    Icon: Smartphone },
  { name: 'Dart',      label: 'App language',        color: 'text-blue-400',   bg: 'bg-blue-400/10',   Icon: Code2      },
  { name: 'Supabase',  label: 'Backend + Auth',      color: 'text-green-400',  bg: 'bg-green-400/10',  Icon: Database   },
  { name: 'Riverpod',  label: 'State management',    color: 'text-violet-400', bg: 'bg-violet-400/10', Icon: Layers     },
  { name: 'AI Model',  label: 'Smart assistant',     color: 'text-primary',    bg: 'bg-primary/10',    Icon: Brain      },
]

const capabilities = [
  { Icon: GraduationCap, text: 'Semester & course management' },
  { Icon: BarChart3,     text: 'Performance analytics & GPA tracking' },
  { Icon: Heart,         text: 'Mood, stress & energy logging' },
  { Icon: Brain,         text: 'AI assistant with local intent parsing' },
  { Icon: Bell,          text: 'Smart notification workflows' },
  { Icon: Shield,        text: 'Secure auth & privacy controls' },
]

const stats = [
  { value: 10, suffix: '+', label: 'Core features' },
  { value: 4,  suffix: '',  label: 'Timer modes' },
  { value: 2,  suffix: '',  label: 'Platforms' },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">

      {/* Ambient background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Page hero ── */}
        <div className="text-center mb-24">
          <BlurFade delay={0.05} inView>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/10"
            >
              <Image src="/logo.png" alt="Acadia" width={52} height={52} className="object-contain" />
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              The story behind{' '}
              <AnimatedGradientText colorFrom="#60A5FA" colorTo="#818CF8" speed={0.8}>
                Acadia
              </AnimatedGradientText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.15} inView>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Built to give every student a single connected system for academics and wellbeing —
              so they can succeed without burning out.
            </p>
          </BlurFade>

          {/* Stats row */}
          <BlurFade delay={0.2} inView>
            <div className="mt-10 inline-flex items-center gap-0 rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm">
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="w-px h-12 bg-border/60" />}
                  <div className="px-8 py-4 text-center">
                    <p className="text-2xl font-bold text-foreground tabular-nums">
                      <NumberTicker value={s.value} className="font-bold text-foreground" />
                      <span className="text-primary">{s.suffix}</span>
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* ── Project overview ── */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Left: text */}
            <BlurFade delay={0.1} inView>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Project Overview</p>
                <h2 className="text-3xl font-bold text-foreground mb-6 leading-tight">
                  One app for academic performance and student wellbeing
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Acadia helps students manage semesters, courses, tasks, and study sessions while
                    tracking mood, stress, and energy as part of their daily academic workflow.
                  </p>
                  <p>
                    The system combines structured academic data, analytics, AI-powered recommendations,
                    and burnout risk signals to support better decisions before pressure escalates.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {capabilities.map((cap, i) => (
                    <motion.div
                      key={cap.text}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <cap.Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{cap.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Right: logo card + tech stack */}
            <BlurFade delay={0.2} inView>
              <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20">

                {/* Logo spotlight */}
                <div className="relative flex flex-col items-center justify-center py-12 px-8 bg-gradient-to-b from-primary/[0.06] to-transparent">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.12),transparent_65%)]" />
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-24 h-24 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-2xl shadow-primary/20 mb-5"
                  >
                    <Image src="/logo.png" alt="Acadia" width={64} height={64} className="object-contain p-1" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">Acadia</h3>
                  <p className="text-sm text-muted-foreground mt-1 text-center">Academic Performance &amp; Stress Monitoring</p>
                </div>

                {/* Tech stack */}
                <div className="border-t border-border/50 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Built with</p>
                  <div className="grid grid-cols-5 gap-2">
                    {techStack.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex flex-col items-center gap-1.5 group"
                      >
                        <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110', tech.bg)}>
                          <tech.Icon className={cn('h-5 w-5', tech.color)} />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground text-center leading-tight">{tech.name}</span>
                        <span className="text-[9px] text-muted-foreground text-center leading-tight hidden sm:block">{tech.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Platform badge */}
                <div className="border-t border-border/50 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[Smartphone, Database].map((Icon, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center">
                          <Icon className="h-3 w-3 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">iOS &amp; Android</span>
                  </div>
                  <span className="text-[10px] font-semibold text-green-500 flex items-center gap-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    Available now
                  </span>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* ── Goals ── */}
        <div className="mb-24">
          <BlurFade delay={0.05} inView>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Goals</p>
              <h2 className="text-3xl font-bold text-foreground">What we set out to solve</h2>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-5">
            {goals.map((goal, i) => (
              <BlurFade key={goal.title} delay={0.1 + i * 0.08} inView>
                <div className={cn(
                  'group rounded-2xl border bg-card p-6 hover:shadow-md transition-all duration-200 h-full',
                  goal.border
                )}>
                  <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110', goal.bg)}>
                    <goal.Icon className={cn('h-6 w-6', goal.color)} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* ── Engineering approach ── */}
        <div className="mb-24">
          <BlurFade delay={0.05} inView>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Engineering</p>
              <h2 className="text-3xl font-bold text-foreground">How we build it</h2>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 + i * 0.08} inView>
                <div className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/25 hover:shadow-sm transition-all duration-200 h-full">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110', p.bg)}>
                    <p.Icon className={cn('h-5 w-5', p.color)} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <BlurFade delay={0.1} inView>
          <div className="relative rounded-3xl border border-border/60 bg-card overflow-hidden p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.08),transparent_65%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-foreground mb-3">Ready to see it in action?</h2>
              <p className="text-muted-foreground mb-7 max-w-md mx-auto text-sm leading-relaxed">
                Explore every feature in detail or check out the system architecture behind Acadia.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
                >
                  Explore Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-transparent text-muted-foreground hover:text-foreground hover:border-border px-6 py-2.5 text-sm font-medium transition-colors"
                >
                  View Architecture
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>

      </div>
    </div>
  )
}
