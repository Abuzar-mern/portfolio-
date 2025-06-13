"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ResumeDownload } from "./resume-download"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center font-bold text-xl" onClick={() => setOpen(false)}>
              Abu Zar
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="#home"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-8">
            <ResumeDownload />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
