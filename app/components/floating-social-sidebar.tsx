"use client"

import Link from "next/link"
import { Github, Linkedin, Youtube, Mail } from "lucide-react"
import { useState } from "react"

export function FloatingSocialSidebar() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const socialLinks = [
    {
      id: "github",
      href: "https://github.com/abuzarabbassi68-create1",
      icon: Github,
      label: "GitHub",
      color: "hover:text-slate-700 dark:hover:text-slate-300",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/abuzarabbasi1/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      id: "youtube",
      href: "https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD",
      icon: Youtube,
      label: "YouTube",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
    {
      id: "email",
      href: "#contact",
      icon: Mail,
      label: "Email",
      color: "hover:text-orange-600 dark:hover:text-orange-400",
    },
  ]

  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-6">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <div key={social.id} className="flex items-center gap-3 group">
            <Link
              href={social.href}
              target={social.id !== "email" ? "_blank" : undefined}
              rel={social.id !== "email" ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredIcon(social.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`transition-all duration-300 ${social.color} transform group-hover:scale-125`}
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
            {hoveredIcon === social.id && (
              <span className="text-sm font-medium text-foreground bg-background border border-border rounded-md px-3 py-1 whitespace-nowrap shadow-md animate-fadeIn">
                {social.label}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
