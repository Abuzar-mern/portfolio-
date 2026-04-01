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
      <div className="relative pl-8 pb-8 last:border-0 last:pb-0 group">
        {/* Timeline dot */}
        <div className="absolute left-[-8px] top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm transition-all duration-300 group-hover:scale-125"></div>
        
        {/* Card background */}
        <div className="p-5 rounded-xl bg-white border border-gray-200 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">
              {title}
            </h3>
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-full">{period}</span>
          </div>
          <p className="font-medium text-gray-700 mb-1">{company}</p>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </AnimateInView>
  )
}
