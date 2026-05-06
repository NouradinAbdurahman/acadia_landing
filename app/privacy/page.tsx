import type { Metadata } from 'next'
import {
  Shield,
  Database,
  Settings,
  Lock,
  BadgeCheck,
  Network,
  CalendarClock,
  UserCheck,
  RefreshCw,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Acadia - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <section className="w-full bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-3">
          <header className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
          </header>

          <article className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border/70 bg-card/85 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:mt-10 lg:p-12">
            <div className="prose prose-slate prose-headings:scroll-mt-28 prose-headings:font-semibold prose-p:my-5 prose-p:leading-8 prose-ul:my-5 prose-ul:space-y-2 prose-li:my-2 prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert max-w-none space-y-8">
            <h2 className="flex items-center gap-2 !mt-0"><Shield className="h-5 w-5 text-primary" />1. Introduction</h2>
            <p>
              Welcome to Acadia. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use our application.
            </p>

            <h2 className="flex items-center gap-2"><Database className="h-5 w-5 text-primary" />2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li><strong>Account Information:</strong> Email address, name, and profile picture when you create an account.</li>
              <li><strong>Academic Data:</strong> Courses, tasks, deadlines, grades, and study session information you enter.</li>
              <li><strong>Wellbeing Data:</strong> Mood entries, stress levels, and energy readings you log.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with the app to improve our services.</li>
            </ul>

            <h2 className="flex items-center gap-2"><Settings className="h-5 w-5 text-primary" />3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain the Acadia service</li>
              <li>Personalize your experience and provide insights</li>
              <li>Send notifications and reminders you have enabled</li>
              <li>Improve our AI assistant and analytics features</li>
              <li>Communicate important updates about the service</li>
            </ul>

            <h2 className="flex items-center gap-2"><Lock className="h-5 w-5 text-primary" />4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using Supabase, with encryption at rest and in transit. 
              We implement Row Level Security (RLS) to ensure you can only access your own data. 
              We do not sell or share your personal data with third parties.
            </p>

            <h2 className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" />5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of optional communications</li>
            </ul>

            <h2 className="flex items-center gap-2"><Network className="h-5 w-5 text-primary" />6. Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul>
              <li><strong>Supabase:</strong> For authentication and database services</li>
              <li><strong>Firebase:</strong> For push notifications</li>
              <li><strong>NVIDIA NIM:</strong> For AI processing (queries are anonymized)</li>
            </ul>

            <h2 className="flex items-center gap-2"><CalendarClock className="h-5 w-5 text-primary" />7. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. If you delete your account, 
              we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.
            </p>

            <h2 className="flex items-center gap-2"><UserCheck className="h-5 w-5 text-primary" />8. Children&apos;s Privacy</h2>
            <p>
              Acadia is intended for users aged 13 and older. We do not knowingly collect personal information 
              from children under 13.
            </p>

            <h2 className="flex items-center gap-2"><RefreshCw className="h-5 w-5 text-primary" />9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="flex items-center gap-2"><Mail className="h-5 w-5 text-primary" />10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@acadia.app">
                privacy@acadia.app
              </a>.
            </p>
          </div>
          </article>
        </div>
      </section>
    </main>
  )
}
