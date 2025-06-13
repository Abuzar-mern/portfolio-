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
      <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
        <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-400"></div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-2">
            <span className="font-medium">{company}</span>
            <span className="hidden sm:block sm:mx-2">•</span>
            <span>{period}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </AnimateInView>
  )
}
