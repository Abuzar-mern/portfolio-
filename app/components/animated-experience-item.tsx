import { AnimateInView } from "./animate-in-view"

type AnimatedExperienceItemProps = {
  title: string
  company: string
  period: string
  description: string
  delay?: number
}

export function AnimatedExperienceItem({
  title,
  company,
  period,
  description,
  delay = 0,
}: AnimatedExperienceItemProps) {
  return (
    <AnimateInView delay={delay} direction="left">
      <div className="relative pl-8 pb-8 border-l-2 border-slate-300 dark:border-slate-600 last:border-0 last:pb-0 group">
        {/* Timeline dot with hover effect */}
        <div className="absolute left-[-8px] top-1 w-5 h-5 bg-primary rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-400 shadow-md"></div>
        
        {/* Card background */}
        <div className="ml-2 p-4 rounded-lg bg-muted/50 group-hover:bg-muted transition-all duration-300 border border-border/50 group-hover:border-primary/30">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-3 text-sm">
            <span className="font-medium text-foreground">{company}</span>
            <span className="hidden sm:block sm:mx-2">•</span>
            <span className="text-xs">{period}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </AnimateInView>
  )
}
