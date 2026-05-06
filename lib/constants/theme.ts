export const colors = {
  primary: {
    DEFAULT: '#3B82F6',
    dark: '#2563EB',
  },
  secondary: '#6366F1',
  
  dark: {
    backgroundStart: '#0F172A',
    backgroundEnd: '#020617',
    surface: '#1E293B',
  },
  
  light: {
    background: '#F8FAFC',
  },
  
  text: {
    dark: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.54)',
    },
    light: {
      primary: '#0F172A',
      secondary: '#64748B',
      tertiary: '#94A3B8',
    },
  },
  
  status: {
    error: '#EF4444',
    success: '#22C55E',
  },
  
  mood: {
    awful: '#E53935',
    bad: '#FF7043',
    neutral: '#FFC107',
    good: '#66BB6A',
    great: '#22C55E',
  },
  
  accent: {
    stress: '#EA580C',
    energy: '#0D9488',
  },
} as const;

export const gradients = {
  primary: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
  hero: 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
  darkBg: 'linear-gradient(180deg, #0F172A 0%, #020617 100%)',
  lightBg: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
  glow: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
} as const;

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/screenshots', label: 'Screenshots' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
} as const;
