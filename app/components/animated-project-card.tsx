"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { AnimateInView } from "./animate-in-view"

type AnimatedProjectCardProps = {
  title: string
  description: string
  image: string
  tags: string[]
  delay?: number
  projectUrl?: string
  githubUrl?: string
}

export function AnimatedProjectCard({
  title,
  description,
  image,
  tags,
  delay = 0,
  projectUrl,
  githubUrl,
}: AnimatedProjectCardProps) {
  return (
    <AnimateInView delay={delay} direction="up">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group border-0 bg-card hover:scale-105">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            {projectUrl && (
              <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost" className="text-white hover:text-primary">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Project
                </Button>
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost" className="text-white hover:text-primary">
                  <Github className="h-4 w-4 mr-1" />
                  GitHub
                </Button>
              </Link>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-xs"
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
