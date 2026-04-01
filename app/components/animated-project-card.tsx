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
      <div className="overflow-hidden transition-all duration-300 hover:shadow-lg group bg-white border border-gray-200 hover:border-blue-500 rounded-xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-700 mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Project
              </Button>
            </Link>
          )}
        </div>
      </div>
    </AnimateInView>
  )
}
