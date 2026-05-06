'use client'
import Image from 'next/image'
import { 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  Code2, 
  Target
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/motion'

const goals = [
  {
    icon: GraduationCap,
    title: 'Academic Awareness',
    description: 'Help students understand their academic performance patterns and make informed decisions.',
  },
  {
    icon: Heart,
    title: 'Burnout Prevention',
    description: 'Detect early signs of burnout and provide actionable interventions.',
  },
  {
    icon: TrendingUp,
    title: 'Productivity Improvement',
    description: 'Enable students to optimize their study habits and achieve better outcomes.',
  },
]

const engineeringPrinciples = [
  {
    icon: Code2,
    title: 'Modular Architecture',
    description: 'Clean separation of concerns with feature-based modules for maintainability.',
  },
  {
    icon: Target,
    title: 'Explainable Logic',
    description: 'All AI decisions are transparent and understandable to users.',
  },
  {
    icon: TrendingUp,
    title: 'Structured Analytics',
    description: 'Data-driven insights based on rigorous statistical methods.',
  },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="The story behind Acadia"
            description="Acadia is built to help students manage academics and wellbeing in one connected system."
          />
        </FadeIn>

        {/* Project Overview */}
        <section className="mt-20">
          <FadeIn>
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Acadia helps students manage semesters, courses, tasks, and study sessions while also tracking
                    mood, stress, and energy in daily academic workflows.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The system combines structured academic data, analytics, recommendations, and risk signals
                    to support better day-to-day study decisions before workload and stress escalate.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with Flutter, Riverpod, and Supabase, Acadia runs cross-platform and keeps data
                    synchronized through secure auth, database policies, and realtime updates.
                  </p>
                </div>
                <div className="rounded-2xl bg-muted/40 p-8 text-center">
                    <div className="relative w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="Acadia logo"
                        fill
                        className="object-contain p-2"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Acadia</h3>
                    <p className="text-muted-foreground mt-2">Academic Performance &amp; Stress Monitoring</p>
                    <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <span>Cross-Platform</span>
                      <span>|</span>
                      <span>Flutter + Supabase</span>
                    </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </section>

        {/* Goals */}
        <section className="mt-20">
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Goals</h2>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {goals.map((goal) => (
              <StaggerItem key={goal.title}>
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <goal.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Engineering Approach */}
        <section className="mt-20">
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Engineering Approach</h2>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {engineeringPrinciples.map((principle) => (
              <StaggerItem key={principle.title}>
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <principle.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

      </div>
    </div>
  )
}
