"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Youtube, Mail, Download, Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeDownload } from "./resume-download"

const skills = [
  { name: "React.js", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30", position: "top-4 left-0" },
  { name: "Photoshop", color: "bg-blue-500/20 text-blue-300 border-blue-500/30", position: "top-4 right-0" },
  { name: "WordPress", color: "bg-blue-600/20 text-blue-300 border-blue-600/30", position: "bottom-4 left-0" },
  { name: "Illustrator", color: "bg-orange-500/20 text-orange-300 border-orange-500/30", position: "bottom-4 right-0" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - Text */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-green-400">Available for Freelance</span>
            </div>

            {/* H1 Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-syne font-black text-white">
                Hi, I'm
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-syne font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                Abu Zar
              </h1>
            </div>

            {/* Typewriter subtitle */}
            <div className="space-y-4">
              <div className="text-xl md:text-2xl text-slate-300 h-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 font-semibold">
                  IT Professional
                </span>
                <span className="text-indigo-400 animate-pulse ml-1">|</span>
              </div>
              <p className="text-base text-slate-400 leading-relaxed max-w-lg">
                Web Developer, Digital Marketer & Graphic Designer. Founder of Kinza Tech Solutions. Passionate about building beautiful, performant digital experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <ResumeDownload />
              <Button 
                asChild 
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white border-0 font-semibold"
                size="lg"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-500/30 text-slate-300 hover:text-indigo-400 hover:border-indigo-400"
                asChild
              >
                <Link href="#video-cv">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Video CV
                </Link>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6">
              <Link
                href="https://github.com/abuzarabbassi68-create1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abuzarabbasi1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:abuzarabbasi68@gmail.com"
                className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Profile Image */}
          <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
            {/* Animated glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/50 animate-spin" style={{ animationDuration: "20s" }}></div>
            <div className="absolute inset-4 rounded-full border border-violet-500/30 animate-spin" style={{ animationDirection: "reverse", animationDuration: "15s" }}></div>

            {/* Profile image */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-500 p-1">
              <Image
                src="/images/abu-zar-profile-new.png"
                alt="Abu Zar"
                fill
                className="rounded-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating skill chips */}
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`absolute text-xs px-2 py-1 rounded-full border backdrop-blur-sm ${skill.color} ${skill.position}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-indigo-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
