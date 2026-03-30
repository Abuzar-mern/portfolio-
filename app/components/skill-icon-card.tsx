"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimateInView } from "./animate-in-view"

type SkillIcon = {
  name: string
  icon: React.ReactNode
  color: string
}

type SkillIconCardProps = {
  title: string
  skills: SkillIcon[]
  delay?: number
}

export function SkillIconCard({ title, skills, delay = 0 }: SkillIconCardProps) {
  return (
    <AnimateInView delay={delay}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-foreground">{title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 group cursor-default"
              >
                <div className="mb-2 text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimateInView>
  )
}
