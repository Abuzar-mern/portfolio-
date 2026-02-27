"use client"

import * as React from "react"

type Theme = "light" | "dark"

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "light",
  setTheme: () => {},
})

export function useTheme() {
  return React.useContext(ThemeContext)
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem("theme") as Theme | null
      if (stored === "light" || stored === "dark") {
        setThemeState(stored)
        document.documentElement.classList.toggle("dark", stored === "dark")
      }
    } catch {}
  }, [])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    try {
      localStorage.setItem("theme", newTheme)
    } catch {}
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
