"use client"

import { useState } from "react"
import { SectionHeading } from "./section-heading"
import { AnimatedProjectCard } from "./animated-project-card"

type ProjectCategory = "all" | "web" | "design" | "marketing" | "education"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: ProjectCategory
  delay: number
  projectUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Kinza Tech Solutions",
    description:
      "Founded a digital creative services company offering web design, social media marketing, and graphic design solutions.",
    image: "/images/project-kinza-tech.jpg",
    tags: ["Web Design", "Marketing", "Branding"],
    category: "web",
    delay: 100,
    projectUrl: "https://v0-kinza-tech-portfolio.vercel.app/",
    githubUrl: "https://github.com/abuzarabbassi68-create1",
  },
  {
    id: "2",
    title: "Hunani Builders Website",
    description:
      "Designed and developed a responsive website for Hunani Builders and Developers with property listings.",
    image: "/images/project-hunani-builders.jpg",
    tags: ["WordPress", "Web Design"],
    category: "web",
    delay: 200,
    projectUrl: "https://hunanibuilders.com/",
  },
  {
    id: "3",
    title: "Social Media Campaigns",
    description:
      "Created and managed social media marketing campaigns for multiple clients at Comrex Pakistan.",
    image: "/images/project-social-dashboard.jpg",
    tags: ["Marketing", "Analytics"],
    category: "marketing",
    delay: 300,
  },
  {
    id: "4",
    title: "Print Design Portfolio",
    description:
      "Collection of print designs including posters, banners, visiting cards, and promotional materials using CorelDRAW, Photoshop and Illustrator.",
    image: "/images/project-print-design.jpg",
    tags: ["CorelDRAW", "Photoshop"],
    category: "design",
    delay: 400,
  },
  {
    id: "5",
    title: "Personal Blog",
    description:
      "Created and maintain WisdomWave blog covering tech, web development, and digital marketing topics.",
    image: "/images/project-blog.jpg",
    tags: ["Blogger", "Content Writing"],
    category: "marketing",
    delay: 500,
    projectUrl: "https://wisdomwave045.blogspot.com/",
  },
  {
    id: "6",
    title: "Educational Resources",
    description:
      "Developed educational web content and resources for students at Government Technical College.",
    image: "/images/project-education.jpg",
    tags: ["Education", "Web Dev"],
    category: "education",
    delay: 600,
  },
  {
    id: "7",
    title: "Noor Al Manzil Website",
    description:
      "Professional WordPress website for Noor Al Manzil featuring responsive design, smooth animations, and professional branding.",
    image: "/images/project-noor-almanzil.jpg",
    tags: ["WordPress", "Web Design"],
    category: "web",
    delay: 700,
    projectUrl: "https://nooralmanzil.ae/",
  },
]

const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web", value: "web" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Education", value: "education" },
]

export function ProjectsFilterSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="Work from my professional experience"
        />

        {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <AnimatedProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              delay={project.delay}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
