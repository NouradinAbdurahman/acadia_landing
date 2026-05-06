# Acadia Landing Website

Marketing and product website for **Acadia**, an AI-powered academic performance and stress monitoring platform for students.

This repository is the **landing site** (web), while the core Acadia product is a **cross-platform Flutter app** backed by Supabase.

## Product Context (Source of Truth)

Acadia helps students manage academics and wellbeing in one place. Based on `Doc/documentation.md`, key product capabilities include:

- Authentication with email/password, OTP, and social OAuth
- Academic onboarding and active semester setup
- Course and task/deadline management
- Study timer modes (Pomodoro, Deep Work, Review)
- Mood, stress, and energy logging
- Analytics, risk signals, and recommendation logic
- AI assistant with local intent parsing + model fallback
- Smart notification workflows
- Legal/transparency pages and support flows

Landing site copy and sections are aligned to this product behavior and scope.

## Tech Stack (Landing Site)

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui + Radix UI primitives
- **Animation:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Toasts:** Sonner
- **Analytics:** Vercel Analytics

## Project Structure

```txt
app/                    # Next.js routes/pages (home, about, features, contact, legal, etc.)
components/
  layout/               # Navbar, footer
  sections/             # Home page sections (hero, analytics, AI assistant, etc.)
  features/             # Features page content and sidebar navigation
  shared/               # Reusable UI building blocks (section header, glass card, theme toggle)
  ui/                   # shadcn/ui components
public/                 # Static assets (logo, store badges, screenshots)
Doc/
  documentation.md      # Core Acadia product documentation (truth source)
```

## Main Pages

- `/` Home
- `/features`
- `/architecture`
- `/about`
- `/screenshots`
- `/contact`
- `/privacy`
- `/terms`

## Theme Behavior

- Default theme is **dark**
- User can toggle **dark/light** from the navbar
- Theme preference is persisted in `localStorage`
- Toast theme follows current UI theme

## Branding and Assets

- Main logo: `public/logo.png`
- Store badges:
  - `public/app-store-logo.png`
  - `public/google-play-logo.png`
- Screenshot assets (optional): `public/screenshots/*`

If screenshots are missing, fallback UI is shown in the screenshots grid.

## Support and Contact

- Official support email used across the site: `support@acadia.app`

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Run dev server

```bash
npm run dev
```

### 3) Build production bundle

```bash
npm run build
```

### 4) Start production server

```bash
npm run start
```

### 5) Lint

```bash
npm run lint
```

## Content Guidelines

When updating website content:

- Keep claims consistent with `Doc/documentation.md`
- Avoid over-claiming unsupported features
- Keep support references consistent (`support@acadia.app`)
- Reflect that Acadia product is cross-platform (Flutter + Supabase backend)

## Notes

- This repo focuses on the **website experience**, not the full mobile application runtime.
- Legal pages and product messaging should continue to mirror actual implemented behavior from the core app documentation.
# acadia_landing
