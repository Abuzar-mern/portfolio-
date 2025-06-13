import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ResumeDownload } from "./components/resume-download"
import { ThemeToggle } from "./components/theme-toggle"
import { MobileNav } from "./components/mobile-nav"
import { AnimateInView } from "./components/animate-in-view"
import { SectionHeading } from "./components/section-heading"
import { AnimatedSkillCard } from "./components/animated-skill-card"
import { AnimatedProjectCard } from "./components/animated-project-card"
import { AnimatedExperienceItem } from "./components/animated-experience-item"
import { AnimatedContactForm } from "./components/animated-contact-form"
import { ScrollToTop } from "./components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            Abu Zar
          </Link>
          <nav className="ml-auto hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center ml-auto md:ml-0">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
        >
          <div className="container px-4 md:px-6 py-16 md:py-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimateInView direction="left">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I&apos;m Abu Zar</h1>
                  <p className="text-xl md:text-2xl text-slate-300">MERN Stack Developer | Social Media Marketer</p>
                  <p className="text-slate-400 max-w-[600px]">
                    Results-driven social media marketer and front-end web developer with expertise in creating engaging
                    online content and building responsive web applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <ResumeDownload />
                    <Link href="#contact">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-transform duration-300 hover:scale-105"
                      >
                        Contact Me
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimateInView>
              <AnimateInView direction="right" delay={300}>
                <div className="flex justify-center">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-slate-700 transition-all duration-500 hover:border-blue-500">
                    <Image
                      src="/images/abu-zar-profile-new.png"
                      alt="Abu Zar"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading title="About Me" />
            <div className="max-w-3xl mx-auto">
              <AnimateInView>
                <p className="text-lg text-muted-foreground mb-6">
                  Results-Driven social media marketer and front-end web developer with expertise in creating engaging
                  online content and building responsive web applications. With a robust track record at the Hunani
                  Builders and Developers, Government Technical and Vocational Centre, and Abbasi Printing Press, I
                  bring a unique blend of creativity and technical expertise to every project.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  My background includes frontend development, WordPress customization, and graphic design. I&apos;m
                  constantly expanding my skills in modern web technologies to deliver high-quality digital solutions.
                </p>
                <div className="flex justify-center mt-8">
                  <Link href="/files/abu-zar-cv.pdf" target="_blank">
                    <Button className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                      <Image src="/files/abu-zar-cv.pdf" alt="Abu Zar CV" width={24} height={24} />
                      View Full CV
                    </Button>
                  </Link>
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <SectionHeading title="My Skills" subtitle="Here are the technologies and tools I work with" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <AnimatedSkillCard
                title="Web Development"
                skills={["WordPress Development", "Frontend Development", "JavaScript", "Responsive Design"]}
                delay={100}
              />
              <AnimatedSkillCard
                title="Digital Marketing"
                skills={["Social Media Marketing", "Content Creation", "Digital Marketing", "SEO Basics"]}
                delay={200}
              />
              <AnimatedSkillCard
                title="Design"
                skills={["Graphic Design", "UI/UX Basics", "Visual Communication", "Brand Identity"]}
                delay={300}
              />
              <AnimatedSkillCard
                title="Business Tools"
                skills={["Microsoft Office", "QuickBooks Desktop", "Google Workspace", "Project Management"]}
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Work Experience" />
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimatedExperienceItem
                  title="Teacher"
                  company="Government Technical College Abbottabad"
                  period="May 2025 - Present"
                  description="Teaching web development and digital marketing skills to technical students."
                  delay={100}
                />
                <AnimatedExperienceItem
                  title="Social Media Marketer"
                  company="Software Company (Comrex Pakistan)"
                  period="August 2024 – April 2025"
                  description="Work as a Social Media Marketer at Comrex Pakistan."
                  delay={200}
                />
                <AnimatedExperienceItem
                  title="Social Media & Website Consultant"
                  company="Construction Company (Hunani Builders and Developers)"
                  period="January 2022 – July 2024"
                  description="2 years and 6 months experience as a social media and website consultant and other duties."
                  delay={300}
                />
                <AnimatedExperienceItem
                  title="Frontend Developer"
                  company="Government Technical and Vocational Centre - Khaki mansehra"
                  period="May 2020"
                  description="Developed responsive web interfaces and provided technical support for the institution's digital presence."
                  delay={400}
                />
                <AnimatedExperienceItem
                  title="Graphic Designer"
                  company="Abbasi Printing Press"
                  period="June 2015 – May 2017"
                  description="3 years experience in printing sector. Created print designs including brochures, business cards, and marketing materials."
                  delay={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <SectionHeading title="My Projects" subtitle="Here are some of my recent web development projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedProjectCard
                title="Hunani Builders Website"
                description="Designed and developed a responsive website for Hunani Builders and Developers with property listings and contact forms."
                image="/placeholder.svg?height=300&width=500&text=Hunani+Builders&bg=blue"
                tags={["WordPress", "Web Design"]}
                delay={100}
              />
              <AnimatedProjectCard
                title="Social Media Dashboard"
                description="Created a social media analytics dashboard for tracking engagement, reach, and conversion metrics."
                image="/placeholder.svg?height=300&width=500&text=Social+Media+Dashboard&bg=purple"
                tags={["Analytics", "Dashboard"]}
                delay={200}
              />
              <AnimatedProjectCard
                title="E-Commerce Platform"
                description="Developed a WordPress-based e-commerce solution with custom product categories and payment integration."
                image="/placeholder.svg?height=300&width=500&text=E-Commerce+Platform&bg=green"
                tags={["WordPress", "E-Commerce"]}
                delay={300}
              />
              <AnimatedProjectCard
                title="Personal Blog"
                description="Created and maintain a personal blog (wisdomwave045.blogspot.com) with custom design elements."
                image="/placeholder.svg?height=300&width=500&text=Personal+Blog&bg=orange"
                tags={["Blogger", "Content"]}
                delay={400}
              />
              <AnimatedProjectCard
                title="Print Design Portfolio"
                description="Collection of print designs created for Abbasi Printing Press including brochures and marketing materials."
                image="/placeholder.svg?height=300&width=500&text=Print+Designs&bg=red"
                tags={["Graphic Design", "Print"]}
                delay={500}
              />
              <AnimatedProjectCard
                title="Educational Website"
                description="Developed an educational resource website for Government Technical College students."
                image="/placeholder.svg?height=300&width=500&text=Educational+Website&bg=teal"
                tags={["Education", "Resources"]}
                delay={600}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Education" />
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimateInView direction="left" delay={100}>
                  <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-400"></div>
                    <div>
                      <h3 className="text-xl font-semibold">F.Sc (2015-2022)</h3>
                      <div className="text-muted-foreground mb-2">
                        <span className="font-medium">Government Higher Secondary School - Bherkund mansehra</span>
                      </div>
                    </div>
                  </div>
                </AnimateInView>
                <AnimateInView direction="left" delay={200}>
                  <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-400"></div>
                    <div>
                      <h3 className="text-xl font-semibold">DIT (Diploma in Information Technology) 2021-2022</h3>
                      <div className="text-muted-foreground mb-2">
                        <span className="font-medium">Government Technical and Vocational Centre - Khaki mansehra</span>
                      </div>
                    </div>
                  </div>
                </AnimateInView>
                <AnimateInView direction="left" delay={300}>
                  <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-400"></div>
                    <div>
                      <h3 className="text-xl font-semibold">CIT (Certificate in Information Technology) 2021-2023</h3>
                      <div className="text-muted-foreground mb-2">
                        <span className="font-medium">Government Technical and Vocational Centre - Khaki mansehra</span>
                      </div>
                    </div>
                  </div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Get In Touch" subtitle="Feel free to contact me for any project or collaboration" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <AnimateInView direction="left">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <Phone className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-primary transition-colors duration-300">+92 319 9910712</span>
                    </div>
                    <div className="flex items-center group">
                      <Mail className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-primary transition-colors duration-300">
                        abuzarabbasi68@gmail.com
                      </span>
                    </div>
                    <div className="flex items-start group">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-primary transition-colors duration-300">
                        Mohalla Seyadan, Post Office Bherkund, Mansehra, Pakistan
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <Link href="https://linkedin.com/in/abu-zar786" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="transition-all duration-300 hover:bg-gray-800 hover:text-white hover:border-gray-800"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600"
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </Button>
                    </Link>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Other Links</h3>
                  <div className="space-y-2">
                    <Link
                      href="https://wisdomwave045.blogspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center group"
                    >
                      <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span> Blog:
                      wisdomwave045.blogspot.com
                    </Link>
                    <Link
                      href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center group"
                    >
                      <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span>{" "}
                      YouTube Channel
                    </Link>
                  </div>
                </div>
              </AnimateInView>

              <div>
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <AnimatedContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Abu Zar</h2>
              <p className="text-slate-400">MERN Stack Developer | Social Media Marketer</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com/in/abu-zar786" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-slate-800 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-slate-800 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-primary hover:bg-slate-800 transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">© {new Date().getFullYear()} Abu Zar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
