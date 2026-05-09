'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone, Database, Cpu, Shield, Zap, Bot, Bell,
  Layers, GitBranch, CheckCircle2, ArrowDown, Key, Link2,
  Server, RefreshCw, Lock, ArrowRight,
} from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { cn } from '@/lib/utils'

/* ─── data ──────────────────────────────────────────────────── */

const techStack = [
  { name: 'Flutter',     desc: 'Cross-platform UI',    Icon: Smartphone, color: 'text-sky-300',    bg: 'bg-sky-400/20',    gradFrom: '#38BDF8', gradTo: '#818CF8' },
  { name: 'Supabase',    desc: 'Backend as a Service',  Icon: Database,   color: 'text-green-300',  bg: 'bg-green-400/20',  gradFrom: '#4ADE80', gradTo: '#14B8A6' },
  { name: 'Riverpod',    desc: 'State management',      Icon: GitBranch,  color: 'text-violet-300', bg: 'bg-violet-400/20', gradFrom: '#A78BFA', gradTo: '#6366F1' },
  { name: 'PostgreSQL',  desc: 'Relational database',   Icon: Database,   color: 'text-blue-300',   bg: 'bg-blue-400/20',   gradFrom: '#60A5FA', gradTo: '#3B82F6' },
  { name: 'Firebase',    desc: 'Push notifications',    Icon: Bell,       color: 'text-orange-300', bg: 'bg-orange-400/20', gradFrom: '#FB923C', gradTo: '#EF4444' },
  { name: 'NVIDIA NIM',  desc: 'AI inference engine',   Icon: Cpu,        color: 'text-emerald-300',bg: 'bg-emerald-400/20',gradFrom: '#34D399', gradTo: '#0EA5E9' },
  { name: 'Hive',        desc: 'Local offline storage', Icon: Database,   color: 'text-amber-300',  bg: 'bg-amber-400/20',  gradFrom: '#FBBF24', gradTo: '#F97316' },
  { name: 'GoRouter',    desc: 'Navigation routing',    Icon: Layers,     color: 'text-cyan-300',   bg: 'bg-cyan-400/20',   gradFrom: '#22D3EE', gradTo: '#3B82F6' },
]

const layers = [
  { name: 'UI Layer',          detail: 'Screens · Widgets · Animations · Theming',               gradFrom: '#3B82F6', gradTo: '#6366F1' },
  { name: 'Providers',         detail: 'StateNotifiers · AsyncNotifiers · Computed values',       gradFrom: '#8B5CF6', gradTo: '#6366F1' },
  { name: 'Repositories',      detail: 'Cache-first strategy · Hive + remote sync',              gradFrom: '#6366F1', gradTo: '#06B6D4' },
  { name: 'Services',          detail: 'Supabase client · Firebase messaging · AI calls',        gradFrom: '#06B6D4', gradTo: '#0EA5E9' },
  { name: 'Supabase Backend',  detail: 'PostgreSQL · RLS policies · Realtime channels',          gradFrom: '#22C55E', gradTo: '#0D9488' },
]

const tables = [
  {
    name: 'users', color: 'text-blue-300', bg: 'bg-blue-500/20', border: 'border-blue-500/40',
    fields: [
      { name: 'id',         type: 'uuid',       pk: true },
      { name: 'email',      type: 'text' },
      { name: 'name',       type: 'text' },
      { name: 'avatar_url', type: 'text?',      nullable: true },
      { name: 'created_at', type: 'timestamp' },
    ],
  },
  {
    name: 'semesters', color: 'text-violet-300', bg: 'bg-violet-500/20', border: 'border-violet-500/40',
    fields: [
      { name: 'id',         type: 'uuid',       pk: true },
      { name: 'user_id',    type: 'uuid',       fk: true },
      { name: 'name',       type: 'text' },
      { name: 'start_date', type: 'date' },
      { name: 'end_date',   type: 'date' },
    ],
  },
  {
    name: 'courses', color: 'text-teal-300', bg: 'bg-teal-500/20', border: 'border-teal-500/40',
    fields: [
      { name: 'id',          type: 'uuid',  pk: true },
      { name: 'semester_id', type: 'uuid',  fk: true },
      { name: 'name',        type: 'text' },
      { name: 'credits',     type: 'int' },
      { name: 'color',       type: 'text' },
    ],
  },
  {
    name: 'tasks', color: 'text-orange-300', bg: 'bg-orange-500/20', border: 'border-orange-500/40',
    fields: [
      { name: 'id',         type: 'uuid',      pk: true },
      { name: 'course_id',  type: 'uuid',      fk: true },
      { name: 'title',      type: 'text' },
      { name: 'due_date',   type: 'timestamp?', nullable: true },
      { name: 'priority',   type: 'enum' },
      { name: 'status',     type: 'enum' },
    ],
  },
  {
    name: 'study_sessions', color: 'text-green-300', bg: 'bg-green-500/20', border: 'border-green-500/40',
    fields: [
      { name: 'id',         type: 'uuid',      pk: true },
      { name: 'user_id',    type: 'uuid',      fk: true },
      { name: 'duration',   type: 'int' },
      { name: 'mode',       type: 'text' },
      { name: 'started_at', type: 'timestamp' },
    ],
  },
  {
    name: 'mood_logs', color: 'text-rose-300', bg: 'bg-rose-500/20', border: 'border-rose-500/40',
    fields: [
      { name: 'id',      type: 'uuid', pk: true },
      { name: 'user_id', type: 'uuid', fk: true },
      { name: 'mood',    type: 'int' },
      { name: 'stress',  type: 'int' },
      { name: 'energy',  type: 'int' },
      { name: 'date',    type: 'date' },
    ],
  },
]

const aiSteps = [
  { n: '01', Icon: Cpu,      title: 'Intent Parser',  desc: 'Local pattern matching classifies the query in milliseconds.',         color: 'text-blue-300',    bg: 'bg-blue-500/20',    gradFrom: '#3B82F6', gradTo: '#6366F1' },
  { n: '02', Icon: Database, title: 'Data Resolver',  desc: 'Fetches matching data from cache or Supabase for the matched intent.', color: 'text-teal-300',    bg: 'bg-teal-500/20',    gradFrom: '#14B8A6', gradTo: '#0EA5E9' },
  { n: '03', Icon: Bot,      title: 'LLM Fallback',   desc: 'Unrecognised queries route to NVIDIA NIM for deep AI responses.',     color: 'text-emerald-300', bg: 'bg-emerald-500/20', gradFrom: '#34D399', gradTo: '#0EA5E9' },
]

const security = [
  { Icon: Shield,       title: 'Row Level Security',  desc: 'PostgreSQL RLS policies ensure users can only access their own rows.',    color: 'text-green-300',  bg: 'bg-green-500/20'  },
  { Icon: Lock,         title: 'Supabase Auth',        desc: 'Email + password with OTP verification, and Google / Apple OAuth via PKCE.', color: 'text-blue-300',   bg: 'bg-blue-500/20'   },
  { Icon: Key,          title: 'JWT + API Keys',       desc: 'Every API call is authenticated with short-lived JWT tokens.',           color: 'text-amber-300',  bg: 'bg-amber-500/20'  },
  { Icon: CheckCircle2, title: 'Data Encryption',      desc: 'All data encrypted at rest and in transit with TLS / AES-256.',         color: 'text-violet-300', bg: 'bg-violet-500/20' },
]

const typeColor: Record<string, string> = {
  uuid: 'text-violet-400', text: 'text-green-400', 'text?': 'text-green-400/70',
  int: 'text-blue-400', date: 'text-amber-400', timestamp: 'text-orange-400',
  'timestamp?': 'text-orange-400/70', enum: 'text-rose-400',
}

const codeLines = [
  { indent: 0, text: 'supabase',                     color: 'text-sky-400' },
  { indent: 1, text: ".channel('tasks')",             color: 'text-green-400' },
  { indent: 1, text: ".on('postgres_changes', {",     color: 'text-slate-200' },
  { indent: 2, text: "event: '*',",                   color: 'text-amber-400' },
  { indent: 2, text: "schema: 'public',",             color: 'text-slate-200' },
  { indent: 2, text: "table: 'tasks'",                color: 'text-slate-200' },
  { indent: 1, text: '}, handleChange)',              color: 'text-slate-200' },
  { indent: 1, text: '.subscribe()',                  color: 'text-sky-400' },
]

/* ─── component ─────────────────────────────────────────────── */

export function ArchitectureContent() {
  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Hero ── */}
        <BlurFade delay={0.05} inView>
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Built with{' '}
              <AnimatedGradientText colorFrom="#60A5FA" colorTo="#34D399" speed={0.7}>
                modern technologies
              </AnimatedGradientText>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A robust, scalable architecture designed for performance, security, and maintainability across iOS and Android.
            </p>
            <div className="mt-8 inline-flex items-center gap-0 rounded-2xl border border-border bg-card overflow-hidden shadow-md">
              {[
                { v: 8,  label: 'technologies' },
                { v: 5,  label: 'arch layers'  },
                { v: 14, label: 'DB tables'    },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="w-px h-12 bg-border" />}
                  <div className="px-7 py-4 text-center">
                    <p className="text-xl font-bold text-foreground tabular-nums">
                      <NumberTicker value={s.v} className="font-bold text-foreground" />
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* ── Tech Stack ── */}
        <section className="mb-20">
          <BlurFade delay={0.05} inView>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Stack</p>
                <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
              </div>
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">Core platform</span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techStack.map((t, i) => (
              <BlurFade key={t.name} delay={0.05 + i * 0.05} inView>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  variants={{ rest: { y: 0 }, hover: { y: -5 } }}
                  className="rounded-2xl border border-border/80 bg-card p-5 text-center"
                  style={{ boxShadow: `0 1px 3px ${t.gradFrom}15` }}
                >
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className={cn('w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3', t.bg)}
                    style={{ boxShadow: `0 4px 16px ${t.gradFrom}35` }}
                  >
                    <t.Icon className={cn('h-6 w-6', t.color)} />
                  </motion.div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{t.desc}</p>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ── Architecture Layers ── */}
        <section className="mb-20">
          <BlurFade delay={0.05} inView>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Design</p>
                <h2 className="text-2xl font-bold text-foreground">System Architecture</h2>
              </div>
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">Layered design</span>
            </div>
          </BlurFade>

          <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 space-y-2">
            {layers.map((layer, idx) => (
              <React.Fragment key={layer.name}>
                <BlurFade delay={0.05 + idx * 0.08} inView>
                  <div
                    className="relative rounded-xl p-4 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${layer.gradFrom}35, ${layer.gradTo}20)`,
                      borderLeft: `4px solid ${layer.gradFrom}`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-md text-white tracking-wider"
                          style={{ background: `linear-gradient(135deg, ${layer.gradFrom}, ${layer.gradTo})` }}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">{layer.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{layer.detail}</p>
                        </div>
                      </div>
                      <Layers className="h-4 w-4 text-muted-foreground/60 flex-shrink-0" />
                    </div>
                  </div>
                </BlurFade>
                {idx < layers.length - 1 && (
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                    >
                      <ArrowDown className="h-4 w-4 text-muted-foreground/70" />
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ── Database Schema ── */}
        <section className="mb-20">
          <BlurFade delay={0.05} inView>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Data</p>
                <h2 className="text-2xl font-bold text-foreground">Database Schema</h2>
              </div>
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">Supabase Postgres</span>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tables.map((tbl, i) => (
              <BlurFade key={tbl.name} delay={0.05 + i * 0.06} inView>
                <div className={cn('rounded-2xl border-2 bg-card overflow-hidden', tbl.border)}>
                  {/* table header */}
                  <div className={cn('flex items-center gap-2 px-4 py-3 border-b-2', tbl.border, tbl.bg)}>
                    <Database className={cn('h-4 w-4', tbl.color)} />
                    <span className={cn('text-sm font-bold font-mono', tbl.color)}>{tbl.name}</span>
                  </div>
                  {/* fields */}
                  <div className="p-3 space-y-0.5">
                    {tbl.fields.map((field) => (
                      <div key={field.name} className="flex items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 hover:bg-muted/60 transition-colors">
                        <div className="flex items-center gap-1.5">
                          {field.pk && <Key className="h-3 w-3 text-amber-400 flex-shrink-0" />}
                          {field.fk && <Link2 className="h-3 w-3 text-sky-400 flex-shrink-0" />}
                          {!field.pk && !field.fk && <span className="w-3" />}
                          <span className="text-xs font-mono text-foreground">{field.name}</span>
                        </div>
                        <span className={cn('text-[10px] font-mono font-bold', typeColor[field.type] ?? 'text-muted-foreground')}>
                          {field.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Legend */}
          <BlurFade delay={0.35} inView>
            <div className="mt-4 flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium"><Key className="h-3 w-3 text-amber-400" /> Primary key</span>
              <span className="flex items-center gap-1.5 font-medium"><Link2 className="h-3 w-3 text-sky-400" /> Foreign key</span>
              <span className="flex items-center gap-1.5"><span className="font-mono font-bold text-orange-400/70">type?</span> Nullable</span>
            </div>
          </BlurFade>
        </section>

        {/* ── AI Pipeline + Realtime (two columns) ── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">

          {/* AI Pipeline */}
          <BlurFade delay={0.1} inView>
            <div className="rounded-2xl border border-border/80 bg-card overflow-hidden h-full">
              <div className="px-6 pt-6 pb-4 border-b border-border/80 bg-muted/30">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Intelligence</p>
                <h2 className="text-lg font-bold text-foreground">AI Pipeline</h2>
                <p className="text-xs text-muted-foreground mt-1">Intent parsing with LLM fallback</p>
              </div>
              <div className="p-6 space-y-3">
                {/* Query input */}
                <div className="rounded-xl border border-border/80 bg-muted/50 px-4 py-3 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-muted border border-border/60 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-foreground">Q</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">User query...</span>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="h-4 w-4 text-muted-foreground/70" />
                </div>

                {aiSteps.map((step, si) => (
                  <React.Fragment key={step.title}>
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.1 }}
                      className="rounded-xl border bg-card p-4 flex items-start gap-3"
                      style={{ borderColor: `${step.gradFrom}55` }}
                    >
                      <div
                        className={cn('w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0', step.bg)}
                        style={{ boxShadow: `0 4px 14px ${step.gradFrom}35` }}
                      >
                        <step.Icon className={cn('h-4 w-4', step.color)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white"
                            style={{ background: `linear-gradient(135deg, ${step.gradFrom}, ${step.gradTo})` }}
                          >
                            {step.n}
                          </span>
                          <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                    {si < aiSteps.length - 1 && (
                      <div className="flex justify-center">
                        <ArrowDown className="h-4 w-4 text-muted-foreground/70" />
                      </div>
                    )}
                  </React.Fragment>
                ))}

                <div className="flex justify-center"><ArrowDown className="h-4 w-4 text-muted-foreground/70" /></div>

                {/* Response */}
                <div className="rounded-xl border-2 border-green-500/40 bg-green-500/10 px-4 py-3 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-green-400">Response delivered to user</span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Realtime System */}
          <BlurFade delay={0.15} inView>
            <div className="rounded-2xl border border-border/80 bg-card overflow-hidden h-full">
              <div className="px-6 pt-6 pb-4 border-b border-border/80 bg-muted/30">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Sync</p>
                <h2 className="text-lg font-bold text-foreground">Realtime System</h2>
                <p className="text-xs text-muted-foreground mt-1">Live data sync via Supabase channels</p>
              </div>
              <div className="p-6">
                {/* Live features */}
                <div className="space-y-2.5 mb-5">
                  {[
                    { Icon: RefreshCw, text: 'Task updates sync instantly across devices',   color: 'text-green-400',  bg: 'bg-green-500/20',  gradFrom: '#22C55E' },
                    { Icon: Zap,       text: 'Study session progress shared in realtime',     color: 'text-blue-400',   bg: 'bg-blue-500/20',   gradFrom: '#3B82F6' },
                    { Icon: Bell,      text: 'Notifications delivered via Firebase push',    color: 'text-orange-400', bg: 'bg-orange-500/20', gradFrom: '#F97316' },
                    { Icon: Server,    text: 'Postgres changes streamed over WebSocket',      color: 'text-violet-400', bg: 'bg-violet-500/20', gradFrom: '#8B5CF6' },
                  ].map(({ Icon, text, color, bg, gradFrom }, ri) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ri * 0.07 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', bg)}
                        style={{ boxShadow: `0 3px 10px ${gradFrom}30` }}
                      >
                        <Icon className={cn('h-4 w-4', color)} />
                      </div>
                      <span className="text-sm text-foreground/80">{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Code block */}
                <div className="rounded-xl bg-slate-950 border border-slate-700 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-700 bg-slate-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="ml-2 text-[10px] text-slate-400 font-mono">realtime.dart</span>
                    <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400 font-semibold">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                      </span>
                      live
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm space-y-0.5">
                    {codeLines.map((line, li) => (
                      <motion.div
                        key={li}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: li * 0.06 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-slate-600 text-[11px] w-4 text-right flex-shrink-0 select-none">{li + 1}</span>
                        <span className={cn(line.color)} style={{ paddingLeft: `${line.indent * 1}rem` }}>
                          {line.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* ── Security ── */}
        <section>
          <BlurFade delay={0.05} inView>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Safety</p>
                <h2 className="text-2xl font-bold text-foreground">Security</h2>
              </div>
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">Production safeguards</span>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {security.map((s, i) => (
              <BlurFade key={s.title} delay={0.05 + i * 0.07} inView>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  variants={{ rest: { y: 0 }, hover: { y: -5 } }}
                  className="rounded-2xl border border-border/80 bg-card p-5 h-full"
                >
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-4', s.bg)}
                  >
                    <s.Icon className={cn('h-5 w-5', s.color)} />
                  </motion.div>
                  <p className="text-sm font-bold text-foreground mb-1.5">{s.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
