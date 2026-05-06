'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Send, Sparkles, Search, Calendar, MessageSquare } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn } from '@/components/animations/motion'

const capabilities = [
  { icon: Search, text: 'Local intent parsing for quick responses' },
  { icon: Sparkles, text: 'AI-powered fallback for complex queries' },
  { icon: MessageSquare, text: 'Smart summaries of your academic data' },
  { icon: Calendar, text: 'Deadline and task assistance' },
]

export function AIAssistantSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeIn>
            <SectionHeader
              title="Your intelligent academic companion"
              description="Ask anything about your studies. Get instant answers, summaries, and actionable insights powered by advanced AI."
              centered={false}
            />

            <div className="mt-8 space-y-4">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Chat Preview */}
          <FadeIn delay={0.2}>
            <GlassCard className="p-6 border-border/70 bg-background/90" glow>
              <div className="space-y-4">
                {/* Chat header */}
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border/60 bg-background">
                      <Image
                        src="/logo.png"
                        alt="Acadia AI avatar"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Acadia Assistant</p>
                      <p className="text-xs text-muted-foreground">AI Study Companion</p>
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4 min-h-[280px]">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                      <p className="text-sm">What are my upcoming deadlines?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-3"
                  >
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/60 bg-background flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Acadia AI avatar"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="bg-muted/60 border border-border/60 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                      <p className="text-sm font-medium text-foreground">You have 3 upcoming deadlines:</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>- Math Assignment (Due Tomorrow)</li>
                        <li>- Research Paper (Due in 3 days)</li>
                        <li>- Physics Lab Report (Due in 5 days)</li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                      <p className="text-sm">How is my stress level this week?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-3"
                  >
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/60 bg-background flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Acadia AI avatar"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="bg-muted/60 border border-border/60 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                      <p className="text-sm text-foreground">
                        Your stress levels are moderate this week. You studied 6+ hours daily, so short breaks can help keep focus high.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  <div className="flex-1 rounded-full border border-border/60 bg-muted/40 px-4 py-2">
                    <p className="text-sm text-muted-foreground">Ask anything...</p>
                  </div>
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-sm">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
