"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateInView } from "./animate-in-view"

type AnimatedSkillCardProps = {
  title: string
  skills: string[]
  delay?: number
}

export function AnimatedSkillCard({ title, skills, delay = 0 }: AnimatedSkillCardProps) {
  const [skillValues, setSkillValues] = useState<number[]>(skills.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillValues(skills.map(() => Math.random() * 30 + 70))
    }, 300 + delay)

    return () => clearTimeout(timer)
  }, [skills, delay])

  return (
    <AnimateInView delay={delay}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skillValues[index]}%` }}
                  ></div>
                </div>
                <span className="ml-3 min-w-[80px]">{skill}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimateInView>
  )
}
