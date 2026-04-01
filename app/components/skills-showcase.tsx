"use client"

import { useState } from "react"
import { AnimateInView } from "./animate-in-view"
import { SectionHeading } from "./section-heading"
import { skillsData, type SkillCategory } from "@/app/lib/brand-icons-complete"

const categories: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "web", label: "Web" },
  { id: "mern", label: "MERN" },
  { id: "adobe", label: "Adobe" },
  { id: "design", label: "Design" },
  { id: "office", label: "Office" },
  { id: "marketing", label: "Marketing" },
];

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = 
    activeCategory === "all" 
      ? skillsData 
      : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Skills & Tools"
          subtitle="Technologies I work with"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-white/5 border border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <AnimateInView key={skill.id} delay={index * 0.05} direction="up">
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                {/* Icon Card */}
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl overflow-hidden"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-xl -z-10"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <span className="text-xs font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 h-8">
                  {skill.name}
                </span>

                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50 font-medium">
                  {skill.name}
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            {filteredSkills.length} skills in {activeCategory === "all" ? "6 categories" : `${activeCategory} category`}
          </p>
        </div>
      </div>
    </section>
  );
}
