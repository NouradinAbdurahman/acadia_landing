'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/shared/section-header'
import { GlassCard } from '@/components/shared/glass-card'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { socialLinks } from '@/lib/constants/theme'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'support@acadia.app', href: 'mailto:support@acadia.app' },
  { icon: MapPin, label: 'Location', value: 'Ankara, Turkey', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
]

const socialLinksData = [
  { icon: Github, label: 'GitHub', href: socialLinks.github },
  { icon: Linkedin, label: 'LinkedIn', href: socialLinks.linkedin },
  { icon: Twitter, label: 'Twitter', href: socialLinks.twitter },
]

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <SectionHeader
            title="Get in touch"
            description="Have questions, feedback, or want to learn more about Acadia? We would love to hear from you."
          />
        </FadeIn>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn>
            <GlassCard className="p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is this about?" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-white border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Need direct help?{' '}
                    <a href="mailto:support@acadia.app" className="text-primary hover:underline">
                      support@acadia.app
                    </a>
                  </p>
                </form>
              )}
            </GlassCard>
          </FadeIn>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">Follow Us</h2>
                
                <StaggerContainer className="flex gap-4">
                  {socialLinksData.map((social) => (
                    <StaggerItem key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground">Is Acadia free to use?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Acadia is built for students, and product access details are shared through official in-app and release updates.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Does Acadia support multiple platforms?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes. Acadia is built with Flutter and supports mobile, web, and desktop targets through one shared architecture.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">How can I contribute?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Check out our GitHub repository for contribution guidelines and open issues.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
