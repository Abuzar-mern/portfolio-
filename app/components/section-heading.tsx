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
        <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
        <div className="w-20 h-1 bg-primary mb-8 transition-all duration-500 ease-in-out hover:w-32"></div>
        {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      </AnimateInView>
    </div>
  )
}
