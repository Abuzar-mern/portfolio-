import { AnimateInView } from "./animate-in-view"

type AnimatedExperienceItemProps = {
  title: string
  company: string
  period: string
  description: string
  delay?: number
  isCurrent?: boolean
}

export function AnimatedExperienceItem({
  title,
  company,
  period,
  description,
  delay = 0,
  isCurrent = false,
}: AnimatedExperienceItemProps) {
  return (
    <div className="p-4 border-l-4 border-blue-600 bg-white rounded-lg mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>
        <span className="text-xs text-slate-600">{period}</span>
      </div>
      <p className="font-medium text-slate-700 mb-1">{company}</p>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
