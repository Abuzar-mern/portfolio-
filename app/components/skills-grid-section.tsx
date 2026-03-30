"use client"

import { useState } from "react"
import { SectionHeading } from "./section-heading"
import { SkillGridIconCard } from "./skill-grid-icon-card"
import { SkillIconsV2, skillsByCategory } from "@/app/lib/skill-icons-v2"

type CategoryType = "all" | "web" | "mern" | "adobe" | "design" | "office" | "marketing"

const categories: { label: string; value: CategoryType }[] = [
  { label: "All Skills", value: "all" },
  { label: "Web", value: "web" },
  { label: "MERN", value: "mern" },
  { label: "Adobe", value: "adobe" },
  { label: "Design", value: "design" },
  { label: "Office", value: "office" },
  { label: "Marketing", value: "marketing" },
]

export function SkillsGridSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all")

  const getSkillsForCategory = (category: CategoryType) => {
    const skillKeys = skillsByCategory[category]
    if (!Array.isArray(skillKeys)) return []
    
    return skillKeys.map((skillName) => {
      const skillData = skillsByCategory.all.find(
        (s) => typeof s === "object" && s.name === skillName
      )
      return skillData as typeof skillsByCategory.all[number]
    })
  }

  const displaySkills = getSkillsForCategory(activeCategory)

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {displaySkills.map((skill, index) => {
            const iconData = (SkillIconsV2 as any)[skill.icon]
            return (
              <SkillGridIconCard
                key={`${skill.name}-${index}`}
                name={skill.name}
                icon={iconData}
                color={skill.color}
                delay={index * 50}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
