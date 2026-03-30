"use client"

import { useEffect, useRef, useState } from "react"
import { AnimateInView } from "./animate-in-view"
import { Award, Users, FileText, CheckCircle } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  number: number
  suffix: string
  label: string
  delay: number
}

function StatCard({ icon, number, suffix, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let currentCount = 0
          const increment = number / 30
          const timer = setInterval(() => {
            currentCount += increment
            if (currentCount >= number) {
              setCount(number)
              clearInterval(timer)
            } else {
              setCount(Math.floor(currentCount))
            }
          }, 50)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [number])

  return (
    <AnimateInView delay={delay} direction="up">
      <div
        ref={ref}
        className="group relative p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
      >
        {/* Background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4">
          {/* Icon */}
          <div className="p-3 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-all duration-300 group-hover:scale-110">
            <div className="text-indigo-400 group-hover:text-indigo-300">{icon}</div>
          </div>

          {/* Number with animation */}
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            {count}
            <span className="text-2xl">{suffix}</span>
          </div>

          {/* Label */}
          <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {label}
          </p>
        </div>
      </div>
    </AnimateInView>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      number: 5,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: 6,
      suffix: "+",
      label: "Companies Worked",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      number: 9,
      suffix: "+",
      label: "Certifications",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: 10,
      suffix: "+",
      label: "Projects Completed",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-indigo-950/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
