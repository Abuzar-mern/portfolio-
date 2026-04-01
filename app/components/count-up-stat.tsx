'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpStatProps {
  value: number
  label: string
}

export function CountUpStat({ value, label }: CountUpStatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          
          // Animate from 0 to value over 1.5s
          const duration = 1500
          const startTime = Date.now()
          
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // easeOut function
            const easeOutProgress = 1 - Math.pow(1 - progress, 3)
            
            setDisplayValue(Math.floor(value * easeOutProgress))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          animate()
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [value])

  return (
    <div
      ref={elementRef}
      className="p-4 bg-white rounded-xl border border-gray-200"
    >
      <p className="text-3xl font-bold text-blue-500">{displayValue}+</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )
}
