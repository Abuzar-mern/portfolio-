"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateInView } from "./animate-in-view"

type AnimatedProjectCardProps = {
  title: string
  description: string
  image: string
  tags: string[]
  delay?: number
}

export function AnimatedProjectCard({ title, description, image, tags, delay = 0 }: AnimatedProjectCardProps) {
  return (
    <AnimateInView delay={delay} direction="up">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group bg-white dark:bg-slate-800 border dark:border-slate-700">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
          <p className="text-muted-foreground mb-4 dark:text-slate-300">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="transition-all duration-300 hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-slate-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimateInView>
  )
}
