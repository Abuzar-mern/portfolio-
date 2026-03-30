"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  texts: string[]
  speed?: number
  delay?: number
  className?: string
}

export function TypewriterEffect({
  texts,
  speed = 100,
  delay = 1500,
  className = "",
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } else if (!isDeleting && charIndex === currentText.length) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, delay])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
