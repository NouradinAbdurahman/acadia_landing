'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const [isMounted, setIsMounted] = React.useState(false)
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark')

  React.useEffect(() => {
    setIsMounted(true)
    const savedTheme = window.localStorage.getItem('theme')
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark'
    applyTheme(initialTheme)
    setTheme(initialTheme)
  }, [])

  function applyTheme(nextTheme: 'dark' | 'light') {
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark')
      return
    }

    document.documentElement.classList.remove('dark')
  }

  function handleThemeChange(nextTheme: 'dark' | 'light') {
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
    applyTheme(nextTheme)
  }

  if (!isMounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <Moon className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {theme === 'dark' ? (
            <Moon className="h-5 w-5 transition-all" />
          ) : (
            <Sun className="h-5 w-5 transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
