"use client"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animated?: boolean
}

export function GradientText({
  children,
  className = "",
  animated = false,
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent ${
        animated ? "animate-gradientMesh" : ""
      } ${className}`}
    >
      {children}
    </span>
  )
}
