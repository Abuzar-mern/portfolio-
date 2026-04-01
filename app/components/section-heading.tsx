import { cn } from "@/lib/utils"
import { AnimateInView } from "./animate-in-view"

type SectionHeadingProps = {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center mb-12", className)}>
      <AnimateInView>
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">{title}</h2>
        <div className="w-12 h-1 bg-blue-500 mb-8" style={{borderBottom: '3px solid #3B82F6'}}></div>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
      </AnimateInView>
    </div>
  )
}
