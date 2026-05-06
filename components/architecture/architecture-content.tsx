'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Database, 
  Cpu, 
  Shield, 
  Zap, 
  Bot, 
  Bell, 
  Lock,
  Layers,
  ArrowDown,
  GitBranch
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/motion'

const techStack = [
  { name: 'Flutter', description: 'Cross-platform UI framework', icon: Smartphone, color: 'bg-blue-500' },
  { name: 'Supabase', description: 'Backend as a Service', icon: Database, color: 'bg-green-500' },
  { name: 'Riverpod', description: 'State management', icon: GitBranch, color: 'bg-purple-500' },
  { name: 'PostgreSQL', description: 'Relational database', icon: Database, color: 'bg-blue-600' },
  { name: 'Firebase', description: 'Push notifications', icon: Bell, color: 'bg-orange-500' },
  { name: 'NVIDIA NIM', description: 'AI inference', icon: Cpu, color: 'bg-green-600' },
  { name: 'Hive', description: 'Local storage', icon: Database, color: 'bg-yellow-500' },
  { name: 'GoRouter', description: 'Navigation', icon: Layers, color: 'bg-cyan-500' },
]

const architectureLayers = [
  { name: 'UI Layer', description: 'Flutter widgets, screens, and components', color: 'from-blue-500 to-blue-600' },
  { name: 'Providers', description: 'Riverpod state management and business logic', color: 'from-purple-500 to-purple-600' },
  { name: 'Repositories', description: 'Data abstraction and caching layer', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Services', description: 'API clients and external integrations', color: 'from-cyan-500 to-cyan-600' },
  { name: 'Supabase', description: 'Database, auth, and realtime subscriptions', color: 'from-green-500 to-green-600' },
]

const databaseTables = [
  { name: 'users', fields: ['id', 'email', 'name', 'avatar_url', 'created_at'] },
  { name: 'semesters', fields: ['id', 'user_id', 'name', 'start_date', 'end_date'] },
  { name: 'courses', fields: ['id', 'semester_id', 'name', 'credits', 'color'] },
  { name: 'tasks', fields: ['id', 'course_id', 'title', 'due_date', 'priority', 'status'] },
  { name: 'study_sessions', fields: ['id', 'user_id', 'duration', 'mode', 'started_at'] },
  { name: 'mood_entries', fields: ['id', 'user_id', 'mood', 'stress', 'energy', 'date'] },
]

const securityFeatures = [
  { title: 'Row Level Security', description: 'PostgreSQL RLS policies ensure users can only access their own data.' },
  { title: 'Supabase Auth', description: 'Secure authentication with email, OAuth, and magic links.' },
  { title: 'API Security', description: 'All API calls authenticated with JWT tokens and API keys.' },
  { title: 'Data Encryption', description: 'Data encrypted at rest and in transit using industry standards.' },
]

export function ArchitectureContent() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              title="Built with modern technologies"
              description="A robust, scalable architecture designed for performance, security, and maintainability."
            />
          </div>
        </FadeIn>

        {/* Tech Stack */}
        <section className="mt-20">
          <FadeIn>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Core platform
              </span>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <GlassCard className="h-full p-6 text-center">
                  <div className={`w-12 h-12 mx-auto rounded-xl ${tech.color} flex items-center justify-center mb-4`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* System Architecture */}
        <section className="mt-20">
          <FadeIn>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">System Architecture</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Layered design
              </span>
            </div>
          </FadeIn>
          
          <GlassCard className="p-8">
            <div className="space-y-4">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${layer.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="mb-1 inline-flex rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                          Layer {index + 1}
                        </span>
                        <h3 className="font-semibold">{layer.name}</h3>
                        <p className="text-sm text-white/80">{layer.description}</p>
                      </div>
                      <Layers className="h-6 w-6 text-white/60" />
                    </div>
                  </div>
                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Database Schema */}
        <section className="mt-20">
          <FadeIn>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Database Schema</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Supabase Postgres
              </span>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {databaseTables.map((table) => (
              <StaggerItem key={table.name}>
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Database className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground font-mono">{table.name}</h3>
                  </div>
                  <ul className="space-y-1">
                    {table.fields.map((field) => (
                      <li key={field} className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Realtime System */}
        <section className="mt-20">
          <FadeIn>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Realtime System</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Live sync
              </span>
            </div>
          </FadeIn>
          
          <GlassCard className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Supabase Realtime</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acadia uses Supabase Realtime subscriptions to keep data synchronized across devices. 
                  Changes are pushed instantly to all connected clients without polling.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Task updates sync instantly
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Study session progress shared
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Notifications delivered in realtime
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 font-mono text-sm">
                <p className="text-muted-foreground mb-2">// Realtime subscription</p>
                <p className="text-foreground">supabase</p>
                <p className="text-foreground pl-4">.channel(&apos;tasks&apos;)</p>
                <p className="text-foreground pl-4">.on(&apos;postgres_changes&apos;, &#123;</p>
                <p className="text-foreground pl-8">event: &apos;*&apos;,</p>
                <p className="text-foreground pl-8">schema: &apos;public&apos;,</p>
                <p className="text-foreground pl-8">table: &apos;tasks&apos;</p>
                <p className="text-foreground pl-4">&#125;, handleChange)</p>
                <p className="text-foreground pl-4">.subscribe()</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* AI System */}
        <section className="mt-20">
          <FadeIn>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">AI System</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Intent + LLM fallback
              </span>
            </div>
          </FadeIn>
          
          <GlassCard className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Intent Parser</h3>
                <p className="text-sm text-muted-foreground">
                  Local intent parsing identifies user queries and routes to appropriate handlers.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Data Resolver</h3>
                <p className="text-sm text-muted-foreground">
                  Fetches relevant data from local cache and remote database to answer queries.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">LLM Fallback</h3>
                <p className="text-sm text-muted-foreground">
                  Complex queries are processed by NVIDIA NIM for intelligent responses.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Security */}
        <section className="mt-20">
          <FadeIn>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Security</h2>
              <span className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                Production safeguards
              </span>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
