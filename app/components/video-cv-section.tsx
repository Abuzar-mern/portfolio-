"use client"

import Link from "next/link"
import { Play, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"

export function VideoCVSection() {
  return (
    <section id="video-cv" className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Video CV"
          subtitle="Learn more about me through my video introduction"
        />

        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Video Placeholder Card */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10"></div>

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulsing glow */}
                  <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-xl animate-pulse"></div>

                  {/* Play button */}
                  <button className="relative w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 flex items-center justify-center shadow-lg hover:shadow-xl transform transition-transform hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </button>
                </div>
              </div>

              {/* Video title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-2">
                  Video CV Coming Soon
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Subscribe to my YouTube channel for updates when it goes live
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white border-0 font-semibold"
                size="lg"
              >
                <Link href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5 mr-2" />
                  Subscribe on YouTube
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-500/30 text-slate-300 hover:text-indigo-400 hover:border-indigo-400"
              >
                <Link href="#contact" className="flex items-center">
                  Get In Touch Instead
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
