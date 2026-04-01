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
  Award,
  BookOpen,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ResumeDownload } from "./components/resume-download"
import { ThemeToggle } from "./components/theme-toggle"
import { MobileNav } from "./components/mobile-nav"
import { AnimateInView } from "./components/animate-in-view"
import { SectionHeading } from "./components/section-heading"
import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { AnimatedSkillCard } from "./components/animated-skill-card"
import { SkillIconCard } from "./components/skill-icon-card"
import { SkillsShowcase } from "./components/skills-showcase"
import { StatsSection } from "./components/stats-section"
import { VideoCVSection } from "./components/video-cv-section"
import { ProjectsFilterSection } from "./components/projects-filter-section"
import { AnimatedProjectCard } from "./components/animated-project-card"
import { AnimatedExperienceItem } from "./components/animated-experience-item"
import { AnimatedContactForm } from "./components/animated-contact-form"
import { ScrollToTop } from "./components/scroll-to-top"
import { FloatingSocialSidebar } from "./components/floating-social-sidebar"
import { SocialProfileCard } from "./components/social-profile-card"
import { PagePreloader } from "./components/page-preloader"
import { BrandIcons } from "./lib/skill-icons"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <PagePreloader />
      <FloatingSocialSidebar />
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Video CV Section */}
        <VideoCVSection />

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading title="About Me" />
            <div className="max-w-3xl mx-auto">
              <AnimateInView>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Detail-oriented IT professional and Computer Science graduate
                  with strong skills in graphic designing, office automation, and
                  web technologies. Experienced in digital documentation,
                  reporting, and visual content creation. Hands-on knowledge of
                  HTML, CSS, and JavaScript, currently learning the MERN stack.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Certified in Information Technology, Graphics and Web Design,
                  Artificial Intelligence, Cybersecurity, and Android
                  Development. Currently teaching at Government Technical
                  College Abbottabad and running{" "}
                  <Link
                    href="https://v0-kinza-tech-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Kinza Tech Solutions
                  </Link>
                  , a digital creative services company.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { value: "5+", label: "Years Experience" },
                    { value: "6+", label: "Companies" },
                    { value: "9+", label: "Certifications" },
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
                <Link
                  href="https://v0-kinza-tech-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-semibold transition-transform duration-300 hover:scale-105"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Website
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
                    With over 5 years of experience in IT, graphic design, web
                    development, and digital marketing, I bring a unique blend of
                    creativity and technical expertise to every project.
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

        {/* Skills Section with Brand Icons and Category Filter */}
        <SkillsShowcase />

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Professional Experience" />
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
                  title="IT & Digital Support / Assistant Manager"
                  company="Hunani Builders & Developers, Karachi"
                  period="January 2022 - July 2024"
                  description="Managed digital records, reports, and documentation using MS Office tools. Supported business operations through graphic design and digital content creation. Maintained structured data, daily reports, and assisted in IT-related tasks."
                  delay={300}
                />
                <AnimatedExperienceItem
                  title="IT & Office Automation Intern (Paid - 6 Months)"
                  company="Govt. Technical & Vocational Center, Khaki, Mansehra"
                  period="May 2020"
                  description="Received practical training in office automation, graphics, and basic web-related tasks. Assisted in maintaining documentation, records, and workflow processes. Supported instructors and staff in daily IT and administrative activities."
                  delay={400}
                />
                <AnimatedExperienceItem
                  title="Graphic Designer (Part-Time)"
                  company="Baber Printing Press, Mansehra"
                  period="June 2015 - May 2017"
                  description="Designed posters, banners, visiting cards, and promotional materials. Used CorelDRAW, Adobe Photoshop, Adobe Illustrator, and InPage. Prepared print-ready files and handled client revisions professionally."
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

        {/* Projects Section with Filter */}
        <ProjectsFilterSection />

        {/* Social Profile Cards Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Connect With Me"
              subtitle="Find me on GitHub and LinkedIn"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <SocialProfileCard
                platform="github"
                username="@abuzarabbassi68-create1"
                title="GitHub Profile"
                description="Explore my repositories, contributions, and open-source projects. See my code and development work in action."
                profileUrl="https://github.com/abuzarabbassi68-create1"
                buttonText="View My Repositories"
                delay={100}
              />
              <SocialProfileCard
                platform="linkedin"
                username="Abu Zar Abbasi"
                title="LinkedIn Profile"
                description="IT Professional | MERN Stack Developer | Digital Marketer. Connect with me to discuss opportunities and collaborations."
                profileUrl="https://www.linkedin.com/in/abuzarabbasi1/"
                buttonText="Connect on LinkedIn"
                delay={200}
              />
              <SocialProfileCard
                platform="youtube"
                username="Abu Zar Channel"
                title="YouTube Channel"
                description="Subscribe to my YouTube channel for web development, digital marketing, and tech tutorials and insights."
                profileUrl="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD"
                buttonText="Subscribe"
                delay={300}
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
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          Bachelor of Science in Computer Science (BSCS)
                        </h3>
                      </div>
                      <p className="text-muted-foreground">Hazara University, Pakistan</p>
                    </div>
                  </div>
                </AnimateInView>
                <AnimateInView direction="left" delay={200}>
                  <div className="relative pl-8 pb-8 border-l-2 border-border">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          F.Sc (Pre-Engineering)
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Government Higher Secondary School Bherkund, Mansehra
                      </p>
                    </div>
                  </div>
                </AnimateInView>
                <AnimateInView direction="left" delay={300}>
                  <div className="relative pl-8 border-l-2 border-border">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full transition-all duration-300 hover:scale-125" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          Matric (Science)
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Government Higher Secondary School Bherkund, Mansehra
                      </p>
                    </div>
                  </div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>

        {/* Diplomas & Certifications Section */}
        <section id="certifications" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Diplomas & Certifications"
              subtitle="Professional qualifications and achievements"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Office Automation Diploma",
                  year: "2016",
                  type: "Diploma",
                },
                {
                  title: "Spoken English Diploma",
                  year: "2017",
                  type: "Diploma",
                },
                {
                  title: "Achievement Certificate - Stage Secretary",
                  year: "2019",
                  type: "Certificate",
                },
                {
                  title: "Diploma in Information Technology (DIT - 1 Year)",
                  year: "2021",
                  type: "Diploma",
                },
                {
                  title: "IT Certificate - Graphics, Web & Mobile App Designing",
                  year: "2021",
                  type: "Certificate",
                },
                {
                  title: "Foundation of Artificial Intelligence",
                  year: "2023",
                  type: "Online - Great Learning",
                },
                {
                  title: "Android Application Development",
                  year: "2023",
                  type: "Online - Great Learning",
                },
                {
                  title: "Introduction to Cybersecurity",
                  year: "2023",
                  type: "Online - Great Learning",
                },
                {
                  title: "Soft Skills Diploma",
                  year: "2025",
                  type: "OEC",
                },
              ].map((cert, index) => (
                <AnimateInView key={cert.title} delay={index * 100}>
                  <div className="p-5 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-primary/10 shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.year} - {cert.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted">
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
                        Bherkund, Mansehra, Pakistan
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <Globe className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <Link
                        href="https://v0-abu-zar-portfolio.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground group-hover:text-primary transition-colors duration-300"
                      >
                        v0-abu-zar-portfolio.vercel.app
                      </Link>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                    My Company
                  </h3>
                  <Link
                    href="https://v0-kinza-tech-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="p-4 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-card-foreground">
                          Kinza Tech Solutions
                        </span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Digital Creative Services - Web Design, Social Media
                        Marketing & Graphic Design
                      </p>
                    </div>
                  </Link>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                    Connect With Me
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      href="https://www.linkedin.com/in/abuzarabbasi1/"
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
                      href="https://github.com/abuzarabbassi68-create1"
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
                      href="https://wisdomwave045.blogspot.com/"
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
                IT Professional | Web Developer | Digital Marketer
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Founder -{" "}
                <Link
                  href="https://v0-kinza-tech-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Kinza Tech Solutions
                </Link>{" "}
                | Digital Creative Services
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/in/abuzarabbasi1/"
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
                href="https://github.com/abuzarabbassi68-create1"
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
