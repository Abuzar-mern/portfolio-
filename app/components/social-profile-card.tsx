"use client"

import Link from "next/link"
import { Github, Linkedin, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateInView } from "./animate-in-view"

interface SocialProfileCardProps {
  platform: "github" | "linkedin" | "youtube"
  username: string
  title: string
  description: string
  profileUrl: string
  buttonText: string
  delay?: number
}

export function SocialProfileCard({
  platform,
  username,
  title,
  description,
  profileUrl,
  buttonText,
  delay = 0,
}: SocialProfileCardProps) {
  const isGitHub = platform === "github"
  const isLinkedIn = platform === "linkedin"
  const isYouTube = platform === "youtube"
  
  let bgGradient = "from-slate-800 to-slate-900"
  let icon = Github
  
  if (isLinkedIn) {
    bgGradient = "from-blue-600 to-blue-700"
    icon = Linkedin
  } else if (isYouTube) {
    bgGradient = "from-red-600 to-red-700"
    icon = Youtube
  }

  return (
    <AnimateInView delay={delay}>
      <Card className={`overflow-hidden bg-gradient-to-br ${bgGradient} border-0 text-white`}>
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm opacity-90 mb-1">{title}</p>
              <h3 className="text-2xl md:text-3xl font-bold">{username}</h3>
            </div>
            {icon === Github && <Github className="h-8 w-8 opacity-80" />}
            {icon === Linkedin && <Linkedin className="h-8 w-8 opacity-80" />}
            {icon === Youtube && <Youtube className="h-8 w-8 opacity-80" />}
          </div>
          <p className="text-sm md:text-base opacity-90 mb-6 leading-relaxed">
            {description}
          </p>
          <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className={`w-full transition-all duration-300 ${
                isGitHub
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : isYouTube
                  ? "bg-white text-red-700 hover:bg-red-50"
                  : "bg-white text-blue-700 hover:bg-blue-50"
              }`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {buttonText}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </AnimateInView>
  )
}
