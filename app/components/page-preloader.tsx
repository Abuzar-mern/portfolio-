"use client"

import { useEffect, useState } from "react"

export function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 pointer-events-none">
      {/* Animated gradient loader */}
      <div className="flex flex-col items-center gap-6">
        {/* AZ Logo Loader */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full p-1 animate-spin">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                AZ
              </span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-sm font-medium text-muted-foreground">Loading portfolio...</p>

        {/* Animated progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full animate-[slideInRight_1s_ease-in-out]"></div>
        </div>
      </div>
    </div>
  )
}
