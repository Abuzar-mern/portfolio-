import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Play,
  Globe,
  ExternalLink,
} from "lucide-react"

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
          <Link href="/" className="flex items-center font-bold text-xl text-foreground">
            Abu Zar
          </Link>
          <nav className="ml-auto hidden md:flex gap-6">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#video-cv", label: "Video CV" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center ml-auto md:ml-4 gap-1">
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
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimateInView direction="left">
                <div className="space-y-5">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance text-white">
                    {"Hi, I'm Abu Zar"}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-300">
                    MERN Stack Developer | Social Media Marketer
                  </p>
                  <p className="text-slate-400 max-w-[600px] leading-relaxed">
                    Results-driven social media marketer and front-end web
                    developer with expertise in creating engaging online content
                    and building responsive web applications. Founder of{" "}
                    <span className="text-blue-400 font-semibold">
                      Kinza Tech Solutions
                    </span>{" "}
                    - Digital Creative Services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <ResumeDownload />
                    <Link href="#contact">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Me
                      </Button>
                    </Link>
                    <Link href="#video-cv">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-500 text-slate-200 hover:bg-slate-700 hover:text-white transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video CV
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
                      alt="Abu Zar - MERN Stack Developer and Social Media Marketer"
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
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading title="About Me" />
            <div className="max-w-3xl mx-auto">
              <AnimateInView>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Results-driven social media marketer and front-end web
                  developer with expertise in creating engaging online content
                  and building responsive web applications. With a robust track
                  record at Hunani Builders and Developers, Government Technical
                  and Vocational Centre, and Abbasi Printing Press, I bring a
                  unique blend of creativity and technical expertise to every
                  project.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Currently teaching at Government Technical College
                  Abbottabad and running{" "}
                  <span className="font-semibold text-primary">
                    Kinza Tech Solutions
                  </span>
                  , a digital creative services company offering web design,
                  social media marketing, and graphic design solutions.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { value: "4+", label: "Years Experience" },
                    { value: "6+", label: "Companies" },
                    { value: "3", label: "Certifications" },
                    { value: "10+", label: "Projects" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-lg bg-muted"
                    >
                      <p className="text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Kinza Tech Solutions Banner */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <AnimateInView>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    Kinza Tech Solutions
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Digital Creative Services - Web Design, Social Media
                    Marketing & Graphic Design
                  </p>
                </div>
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-semibold transition-transform duration-300 hover:scale-105"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Video CV Section */}
        <section id="video-cv" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Watch My Video CV" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <AnimateInView direction="left">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Watch my professional video resume to learn more about my
                    skills, experience, and career journey. Get a closer look at
                    who I am and what I bring to the table.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 4 years of experience in social media marketing,
                    web development, and graphic design, I bring a unique blend
                    of creativity and technical expertise to every project.
                  </p>
                  <div className="pt-2">
                    <ResumeDownload />
                  </div>
                </div>
              </AnimateInView>
              <AnimateInView direction="right" delay={200}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
                  <iframe
                    src="https://drive.google.com/file/d/1lzPEMf7Dnc5EKtSPGAmLD8x-U_S3jFfE/preview"
                    className="w-full h-full absolute inset-0"
                    allow="autoplay"
                    loading="lazy"
                    title="Abu Zar - Video CV"
                  />
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="My Skills"
              subtitle="Technologies and tools I work with"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <AnimatedSkillCard
                title="Web Development"
                skills={["WordPress", "HTML/CSS", "JavaScript", "Tailwind CSS"]}
                delay={100}
              />
              <AnimatedSkillCard
                title="Digital Marketing"
                skills={[
                  "Social Media Marketing",
                  "Content Creation",
                  "SEO Basics",
                  "Analytics",
                ]}
                delay={200}
              />
              <AnimatedSkillCard
                title="Design"
                skills={["CorelDRAW", "Photoshop", "Illustrator", "InPage"]}
                delay={300}
              />
              <AnimatedSkillCard
                title="MERN Stack"
                skills={["React.js", "Node.js", "Express.js", "MongoDB"]}
                delay={400}
              />
              <AnimatedSkillCard
                title="Office Tools"
                skills={[
                  "Microsoft Word",
                  "Excel",
                  "PowerPoint",
                  "QuickBooks",
                ]}
                delay={500}
              />
              <AnimatedSkillCard
                title="Soft Skills"
                skills={[
                  "Communication",
                  "Teamwork",
                  "Problem Solving",
                  "Time Management",
                ]}
                delay={600}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Work Experience" />
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimatedExperienceItem
                  title="Teacher - Web Development & IT"
                  company="Government Technical College Abbottabad"
                  period="May 2025 - Present"
                  description="Teaching web development and digital marketing skills to technical students at a government institution."
                  delay={100}
                />
                <AnimatedExperienceItem
                  title="Social Media Marketer"
                  company="Software Company (Comrex Pakistan)"
                  period="August 2024 - April 2025"
                  description="Managed social media accounts, created marketing campaigns, and increased brand visibility through strategic content."
                  delay={200}
                />
                <AnimatedExperienceItem
                  title="Social Media & Website Consultant"
                  company="Construction Company (Hunani Builders and Developers)"
                  period="January 2022 - July 2024"
                  description="2 years and 6 months experience as a social media and website consultant. Managed online presence, designed website, and handled digital marketing."
                  delay={300}
                />
                <AnimatedExperienceItem
                  title="Frontend Developer"
                  company="Govt. Technical & Vocational Centre - Khaki Mansehra"
                  period="May 2020"
                  description="Developed responsive web interfaces using HTML, CSS, and JavaScript for the institution."
                  delay={400}
                />
                <AnimatedExperienceItem
                  title="Graphic Designer"
                  company="Abbasi Printing Press"
                  period="June 2015 - May 2017"
                  description="3 years experience in printing sector. Created brochures, business cards, banners, and marketing materials."
                  delay={500}
                />
                <AnimatedExperienceItem
                  title="Data Entry Operator"
                  company="Plus Pharmacy, Abbottabad"
                  period="5 months"
                  description="Managed data entry operations and maintained accurate records for pharmacy inventory and sales."
                  delay={600}
                />
                <AnimatedExperienceItem
                  title="Relationship Service Officer"
                  company="Ufone (Mobile Operator)"
                  period="3 months"
                  description="Provided customer service and managed client relationships for the telecom company."
                  delay={700}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="My Projects"
              subtitle="Work from my professional experience"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedProjectCard
                title="Kinza Tech Solutions"
                description="Founded a digital creative services company offering web design, social media marketing, and graphic design solutions."
                image="/images/project-kinza-tech.jpg"
                tags={["Web Design", "Marketing", "Branding"]}
                delay={100}
              />
              <AnimatedProjectCard
                title="Hunani Builders Website"
                description="Designed and developed a responsive website for Hunani Builders and Developers with property listings."
                image="/images/project-hunani-builders.jpg"
                tags={["WordPress", "Web Design"]}
                delay={200}
              />
              <AnimatedProjectCard
                title="Social Media Campaigns"
                description="Created and managed social media marketing campaigns for multiple clients at Comrex Pakistan."
                image="/images/project-social-dashboard.jpg"
                tags={["Marketing", "Analytics"]}
                delay={300}
              />
              <AnimatedProjectCard
                title="Print Design Portfolio"
                description="Collection of print designs created at Abbasi Printing Press including brochures, banners, and business cards."
                image="/images/project-print-design.jpg"
                tags={["CorelDRAW", "Print Design"]}
                delay={400}
              />
              <AnimatedProjectCard
                title="Personal Blog"
                description="Created and maintain WisdomWave blog covering tech, web development, and digital marketing topics."
                image="/images/project-blog.jpg"
                tags={["Blogger", "Content Writing"]}
                delay={500}
              />
              <AnimatedProjectCard
                title="Educational Resources"
                description="Developed educational web content and resources for students at Government Technical College."
                image="/images/project-education.jpg"
                tags={["Education", "Web Dev"]}
                delay={600}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Education" />
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <AnimateInView direction="left" delay={100}>
                  <div className="relative pl-8 pb-8 border-l-2 border-border">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        CIT (Certificate in Information Technology) 2021-2023
                      </h3>
                      <p className="text-muted-foreground">
                        Government Technical and Vocational Centre - Khaki
                        Mansehra
                      </p>
                    </div>
                  </div>
                </AnimateInView>
                <AnimateInView direction="left" delay={200}>
                  <div className="relative pl-8 pb-8 border-l-2 border-border">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        DIT (Diploma in Information Technology) 2021-2022
                      </h3>
                      <p className="text-muted-foreground">
                        Government Technical and Vocational Centre - Khaki
                        Mansehra
                      </p>
                    </div>
                  </div>
                </AnimateInView>
                <AnimateInView direction="left" delay={300}>
                  <div className="relative pl-8 border-l-2 border-border">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        F.Sc (2015-2022)
                      </h3>
                      <p className="text-muted-foreground">
                        Government Higher Secondary School - Bherkund Mansehra
                      </p>
                    </div>
                  </div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Get In Touch"
              subtitle="Feel free to contact me for any project or collaboration"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <AnimateInView direction="left">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <Phone className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                        +92 319 9910712
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <Mail className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                        abuzarabbasi68@gmail.com
                      </span>
                    </div>
                    <div className="flex items-start group">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                        Mohalla Seyadan, Post Office Bherkund, Mansehra,
                        Pakistan
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                    My Company
                  </h3>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">
                        Kinza Tech Solutions
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Digital Creative Services - Web Design, Social Media
                      Marketing & Graphic Design
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                    Connect With Me
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      href="https://linkedin.com/in/abu-zar786"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="transition-all duration-300 hover:bg-slate-800 hover:text-white hover:border-slate-800"
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

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                    Other Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="https://wisdomwave045.blogspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      wisdomwave045.blogspot.com
                    </Link>
                    <Link
                      href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      YouTube Channel
                    </Link>
                  </div>
                </div>
              </AnimateInView>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Send Me a Message
                </h3>
                <AnimatedContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1 text-white">Abu Zar</h2>
              <p className="text-slate-400">
                MERN Stack Developer | Social Media Marketer
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Founder - Kinza Tech Solutions | Digital Creative Services
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://linkedin.com/in/abu-zar786"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-blue-400 hover:bg-slate-800 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-blue-400 hover:bg-slate-800 transition-all duration-300"
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
                  className="text-white hover:text-red-400 hover:bg-slate-800 transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">{`\u00A9 ${new Date().getFullYear()} Abu Zar. All rights reserved.`}</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
