"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    })

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "backdrop-blur-xl bg-black/20 border-b border-white/10"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 font-bold text-xl hover:text-indigo-400 transition-colors">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
            AZ
          </div>
          <span className="hidden sm:inline">Abu Zar</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative pb-1 ${
                activeSection === link.href.slice(1)
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-indigo-400"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Social Icons - Desktop */}
          <div className="hidden sm:flex gap-2">
            <Link
              href="https://github.com/abuzarabbassi68-create1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abuzarabbasi1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all"
            title="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-black/40 border-b border-white/10 px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors py-2 ${
                activeSection === link.href.slice(1)
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-indigo-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Social Icons */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            <Link
              href="https://github.com/abuzarabbassi68-create1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abuzarabbasi1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-400 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
