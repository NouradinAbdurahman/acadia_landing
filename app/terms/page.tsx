import type { Metadata } from 'next'
import {
  FileCheck,
  AppWindow,
  User,
  ShieldAlert,
  Copyright,
  Database,
  AlertTriangle,
  Scale,
  GraduationCap,
  HeartPulse,
  UserX,
  RefreshCw,
  Globe,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Acadia - Read our terms and conditions for using the application.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <section className="w-full bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-3">
          <header className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
          </header>

          <article className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border/70 bg-card/85 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:mt-10 lg:p-12">
            <div className="prose prose-slate prose-headings:scroll-mt-28 prose-headings:font-semibold prose-p:my-5 prose-p:leading-8 prose-ul:my-5 prose-ul:space-y-2 prose-li:my-2 prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert max-w-none space-y-8">
            <h2 className="flex items-center gap-2 !mt-0"><FileCheck className="h-5 w-5 text-primary" />1. Acceptance of Terms</h2>
            <p>
              By accessing or using Acadia, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="flex items-center gap-2"><AppWindow className="h-5 w-5 text-primary" />2. Description of Service</h2>
            <p>
              Acadia is an academic performance and stress monitoring application designed to help students 
              manage their studies, track their wellbeing, and achieve their academic goals. The service 
              includes task management, study tracking, mood monitoring, and AI-powered assistance.
            </p>

            <h2 className="flex items-center gap-2"><User className="h-5 w-5 text-primary" />3. User Accounts</h2>
            <p>To use Acadia, you must:</p>
            <ul>
              <li>Create an account with accurate information</li>
              <li>Be at least 13 years of age</li>
              <li>Keep your account credentials secure</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h2 className="flex items-center gap-2"><ShieldAlert className="h-5 w-5 text-primary" />4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with other users&apos; use of the service</li>
              <li>Not upload malicious content or code</li>
              <li>Provide accurate academic and personal information</li>
            </ul>

            <h2 className="flex items-center gap-2"><Copyright className="h-5 w-5 text-primary" />5. Intellectual Property</h2>
            <p>
              Acadia and its original content, features, and functionality are owned by the Acadia team 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="flex items-center gap-2"><Database className="h-5 w-5 text-primary" />6. User Content</h2>
            <p>
              You retain ownership of the data you enter into Acadia (tasks, grades, mood entries, etc.). 
              By using our service, you grant us a license to store and process this data to provide our services.
            </p>

            <h2 className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-primary" />7. Disclaimer of Warranties</h2>
            <p>
              Acadia is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the service 
              will be uninterrupted, secure, or error-free. The AI assistant provides suggestions and should 
              not be considered professional academic or medical advice.
            </p>

            <h2 className="flex items-center gap-2"><Scale className="h-5 w-5 text-primary" />8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Acadia shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>

            <h2 className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" />9. Academic Decisions</h2>
            <p>
              Acadia is a tool to assist with academic management. You are solely responsible for your academic 
              decisions. We do not guarantee any specific academic outcomes from using our service.
            </p>

            <h2 className="flex items-center gap-2"><HeartPulse className="h-5 w-5 text-primary" />10. Wellbeing Monitoring</h2>
            <p>
              The mood and stress tracking features are for informational purposes only and are not a substitute 
              for professional mental health care. If you are experiencing mental health difficulties, please 
              seek help from a qualified professional.
            </p>

            <h2 className="flex items-center gap-2"><UserX className="h-5 w-5 text-primary" />11. Termination</h2>
            <p>
              We may terminate or suspend your account at any time for violations of these terms. 
              You may also delete your account at any time through the app settings.
            </p>

            <h2 className="flex items-center gap-2"><RefreshCw className="h-5 w-5 text-primary" />12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of significant changes. 
              Continued use of the service after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" />13. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles.
            </p>

            <h2 className="flex items-center gap-2"><Mail className="h-5 w-5 text-primary" />14. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@acadia.app">
                legal@acadia.app
              </a>.
            </p>
          </div>
          </article>
        </div>
      </section>
    </main>
  )
}
