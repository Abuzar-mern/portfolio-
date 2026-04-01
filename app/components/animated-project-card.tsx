"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

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
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48 w-full overflow-hidden bg-slate-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-slate-900">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        {projectUrl && (
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
