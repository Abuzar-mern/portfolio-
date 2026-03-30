"use client"

import { ReactNode } from "react"
import { AnimateInView } from "./animate-in-view"

interface SkillGridIconCardProps {
  name: string
  icon: ReactNode
  color: string
  delay?: number
}

export function SkillGridIconCard({
  name,
  icon,
  color,
  delay = 0,
}: SkillGridIconCardProps) {
  return (
    <AnimateInView delay={delay || 0} direction="up">
      <div className="flex flex-col items-center gap-3 group cursor-pointer relative">
        {/* Icon container with gradient border */}
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 30px ${color}33`,
          }}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            style={{ backgroundColor: color }}
          />
          
          {/* Icon */}
          <div
            className="relative z-10 w-12 h-12 text-white"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
          >
            {icon}
          </div>
        </div>

        {/* Skill name */}
        <span className="text-xs font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {name}
        </span>

        {/* Tooltip on hover */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
          {name}
        </div>
      </div>
    </AnimateInView>
  )
}
