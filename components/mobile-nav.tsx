"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
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
              href="#contact"
              className="text-lg font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-8">
            <Button className="w-full" onClick={() => setOpen(false)}>
              Download Resume
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
