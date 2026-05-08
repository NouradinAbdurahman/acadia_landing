'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Github, Linkedin, Twitter, Send,
  MapPin, Clock, CheckCircle2, ChevronDown, MessageSquare,
} from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

/* ─── data ──────────────────────────────────────────────────── */

const contactInfo = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'support@acadia.app',
    href: 'mailto:support@acadia.app',
    color: 'text-blue-500', bg: 'bg-blue-500/10',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Ankara, Turkey',
    href: null,
    color: 'text-rose-500', bg: 'bg-rose-500/10',
  },
  {
    Icon: Clock,
    label: 'Response time',
    value: 'Within 24 hours',
    href: null,
    color: 'text-green-500', bg: 'bg-green-500/10',
  },
]

const socials = [
  { Icon: Github,   label: 'GitHub'   },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter,  label: 'Twitter'  },
]

const faqs = [
  {
    q: 'Is Acadia free to use?',
    a: 'Acadia is built for students. Access details are shared through official in-app and release updates.',
  },
  {
    q: 'Does Acadia support multiple platforms?',
    a: 'Yes. Acadia is built with Flutter and supports iOS and Android from a single shared architecture.',
  },
  {
    q: 'How can I report a bug or suggest a feature?',
    a: 'Email support@acadia.app or open an issue on GitHub. We review everything within 24 hours.',
  },
  {
    q: 'Is my data private and secure?',
    a: 'All data is stored in Supabase with row-level security. We never share your academic or wellbeing data with third parties.',
  },
]

/* ─── FAQ item ───────────────────────────────────────────────── */

function FAQItem({ q, a, index, open, onToggle }: { q: string; a: string; index: number; open: boolean; onToggle: () => void }) {
  return (
    <BlurFade delay={0.05 + index * 0.06} inView>
      <div className="border border-border/60 rounded-2xl overflow-hidden bg-card transition-colors hover:border-primary/20">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer"
        >
          <span className="text-sm font-semibold text-foreground leading-snug">{q}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0">
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BlurFade>
  )
}

/* ─── component ─────────────────────────────────────────────── */

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [focused, setFocused] = React.useState<string | null>(null)
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1400))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Header ── */}
        <BlurFade delay={0.05} inView>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Get in{' '}
              <AnimatedGradientText colorFrom="#60A5FA" colorTo="#818CF8" speed={0.8}>
                touch
              </AnimatedGradientText>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Questions, feedback, or ideas? We read everything and reply within 24 hours.
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* ── Left: form ── */}
          <BlurFade delay={0.1} inView>
            <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20">

              {/* Gradient stripe */}
              <div className="h-[3px] w-full bg-gradient-to-r from-primary to-secondary" />

              <div className="p-6 sm:p-8">
                {/* Card header */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-foreground">Send us a message</h2>
                    <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -12 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      className="flex flex-col items-center text-center py-12 gap-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 22, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
                      >
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
                        <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
                          Thank you for reaching out — we will get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-2 rounded-full border border-border/60 px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { id: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name'        },
                          { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com'  },
                        ].map((field) => (
                          <div key={field.id} className="space-y-1.5">
                            <Label htmlFor={field.id} className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              {field.label}
                            </Label>
                            <div className={cn(
                              'rounded-xl border bg-muted/30 transition-all duration-200',
                              focused === field.id ? 'border-primary/60 shadow-sm shadow-primary/10' : 'border-border/60'
                            )}>
                              <Input
                                id={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                required
                                onFocus={() => setFocused(field.id)}
                                onBlur={() => setFocused(null)}
                                className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <Label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Subject
                        </Label>
                        <div className={cn(
                          'rounded-xl border bg-muted/30 transition-all duration-200',
                          focused === 'subject' ? 'border-primary/60 shadow-sm shadow-primary/10' : 'border-border/60'
                        )}>
                          <Input
                            id="subject"
                            placeholder="What is this about?"
                            required
                            onFocus={() => setFocused('subject')}
                            onBlur={() => setFocused(null)}
                            className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Message
                        </Label>
                        <div className={cn(
                          'rounded-xl border bg-muted/30 transition-all duration-200',
                          focused === 'message' ? 'border-primary/60 shadow-sm shadow-primary/10' : 'border-border/60'
                        )}>
                          <Textarea
                            id="message"
                            placeholder="Your message..."
                            rows={5}
                            required
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            className="border-0 bg-transparent shadow-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 text-sm shadow-sm shadow-primary/25 hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-muted-foreground">
                        Or email directly at{' '}
                        <a href="mailto:support@acadia.app" className="text-primary hover:underline font-medium">
                          support@acadia.app
                        </a>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </BlurFade>

          {/* ── Right: info + socials + FAQ ── */}
          <div className="space-y-5">

            {/* Contact info */}
            <BlurFade delay={0.15} inView>
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
                <div className="space-y-3">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0', item.bg)}>
                        <item.Icon className={cn('h-4 w-4', item.color)} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-foreground truncate">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Socials */}
            <BlurFade delay={0.2} inView>
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">Follow us</p>
                <div className="flex gap-2.5">
                  {socials.map((s, i) => (
                    <motion.div
                      key={s.label}
                      aria-label={s.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -3, scale: 1.08 }}
                      className="flex-1 flex flex-col items-center gap-1.5 rounded-xl border border-border/60 bg-muted/30 py-3"
                    >
                      <s.Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-[10px] font-semibold text-muted-foreground">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* FAQ */}
            <BlurFade delay={0.25} inView>
              <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">FAQ</p>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <FAQItem
                      key={faq.q}
                      q={faq.q}
                      a={faq.a}
                      index={i}
                      open={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                    />
                  ))}
                </div>
              </div>
            </BlurFade>

          </div>
        </div>
      </div>
    </div>
  )
}
