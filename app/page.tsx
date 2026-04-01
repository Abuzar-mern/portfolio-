import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Globe,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  BarChart3,
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

// Simple brand icons inline SVGs
const BrandIcons = {
  CorelDRAW: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#009A44" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">C</text>
    </svg>
  ),
  Photoshop: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#001E36" />
      <text x="12" y="16" textAnchor="middle" fill="#31A8FF" fontSize="10" fontWeight="bold">Ps</text>
    </svg>
  ),
  Illustrator: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#FF7C00" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Ai</text>
    </svg>
  ),
  InPage: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#1a237e" />
      <text x="12" y="16" textAnchor="middle" fill="#FFD700" fontSize="9" fontWeight="bold">IP</text>
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#E34F26" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#1572B6" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text x="12" y="16" textAnchor="middle" fill="black" fontSize="9" fontWeight="bold">JS</text>
    </svg>
  ),
  WordPress: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#21759B" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">W</text>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#20232A" />
      <circle cx="12" cy="12" r="3" fill="#61DAFB" />
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#339933" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">N</text>
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#404040" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">EX</text>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#001E2B" />
      <circle cx="12" cy="12" r="3" fill="#13AA52" />
    </svg>
  ),
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">AZ</div>
            Abu Zar
          </Link>

          <div className="ml-auto flex items-center gap-3">
            <nav className="hidden md:flex gap-8">
              <Link href="#home" className="text-sm text-gray-700 hover:text-blue-500">Home</Link>
              <Link href="#about" className="text-sm text-gray-700 hover:text-blue-500">About</Link>
              <Link href="#skills" className="text-sm text-gray-700 hover:text-blue-500">Skills</Link>
              <Link href="#experience" className="text-sm text-gray-700 hover:text-blue-500">Experience</Link>
              <Link href="#projects" className="text-sm text-gray-700 hover:text-blue-500">Projects</Link>
              <Link href="#contact" className="text-sm text-gray-700 hover:text-blue-500">Contact</Link>
            </nav>
            
            <div className="flex items-center gap-2">
              <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-blue-500">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-blue-500">
                <Linkedin size={20} />
              </a>
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-sm text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Available for Freelance
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Hi, I'm Abu Zar</h1>
                <p className="text-xl text-gray-600">IT Professional | MERN Stack Developer | Digital Marketer | Graphic Designer</p>
                <p className="text-gray-700 leading-relaxed">
                  Detail-oriented IT professional with 5+ years of experience in graphic design, web development, and digital marketing. Founder of Kinza Tech Solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ResumeDownload />
                  <a href="#contact">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <Mail size={18} className="mr-2" />
                      Contact Me
                    </Button>
                  </a>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-500">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-500">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/images/abu-zar-profile-new.png"
                    alt="Abu Zar"
                    fill
                    className="object-cover rounded-2xl border-4 border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <SectionHeading title="About Me" />
            <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-4">
              <p>Detail-oriented IT professional and Computer Science graduate with strong skills in graphic designing, office automation, and web technologies.</p>
              <p>Currently teaching at Government Technical College Abbottabad and running Kinza Tech Solutions, a digital creative services company specializing in web design, social media marketing, and graphic design.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-4">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "6+", label: "Companies" },
                  { value: "9+", label: "Certifications" },
                  { value: "10+", label: "Projects" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-white rounded-xl border border-gray-200">
                    <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Skills" />
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {/* Graphic Design */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Graphic Design</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {[
                      { name: "CorelDRAW", icon: BrandIcons.CorelDRAW },
                      { name: "Photoshop", icon: BrandIcons.Photoshop },
                      { name: "Illustrator", icon: BrandIcons.Illustrator },
                      { name: "InPage", icon: BrandIcons.InPage },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <div className="w-12 h-12">{<skill.icon />}</div>
                        <span className="text-xs text-gray-700 text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Web Technologies</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {[
                      { name: "HTML5", icon: BrandIcons.HTML5 },
                      { name: "CSS3", icon: BrandIcons.CSS3 },
                      { name: "JavaScript", icon: BrandIcons.JavaScript },
                      { name: "WordPress", icon: BrandIcons.WordPress },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <div className="w-12 h-12">{<skill.icon />}</div>
                        <span className="text-xs text-gray-700 text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MERN Stack */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">MERN Stack (Learning)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {[
                      { name: "React.js", icon: BrandIcons.React },
                      { name: "Node.js", icon: BrandIcons.NodeJS },
                      { name: "Express.js", icon: BrandIcons.Express },
                      { name: "MongoDB", icon: BrandIcons.MongoDB },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <div className="w-12 h-12">{<skill.icon />}</div>
                        <span className="text-xs text-gray-700 text-center">{skill.name}</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Learning</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Communication", "Teamwork", "Time Management", "Problem Solving"].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Experience" />
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 space-y-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <AnimatedExperienceItem
                  title="Instructor"
                  company="Government Technical College Abbottabad"
                  period="Jun 2024 - Present"
                  description="Teaching IT courses including Office automation, Internet & Networking, and IT fundamentals to students."
                  delay={0}
                />
                <AnimatedExperienceItem
                  title="Senior Graphic Designer"
                  company="Comrex Pakistan"
                  period="Dec 2023 - May 2024"
                  description="Managed social media accounts, created promotional designs, and coordinated digital marketing campaigns."
                  delay={100}
                />
                <AnimatedExperienceItem
                  title="Graphic Designer & Web Developer"
                  company="Hunani Builders & Developers"
                  period="Apr 2022 - Nov 2023"
                  description="Designed website, created marketing materials, and managed digital presence for real estate company."
                  delay={200}
                />
                <AnimatedExperienceItem
                  title="Graphic Design Instructor"
                  company="Mansehra Institute of Technology"
                  period="Jun 2022 - Aug 2022"
                  description="Taught graphic design fundamentals including CorelDRAW, Photoshop, and digital design principles."
                  delay={300}
                />
                <AnimatedExperienceItem
                  title="Content Creator & Blogger"
                  company="WisdomWave Blog"
                  period="2020 - Present"
                  description="Creating technical content and tutorials on web development, design, and digital marketing."
                  delay={400}
                />
                <AnimatedExperienceItem
                  title="Freelance Graphic Designer"
                  company="Self-employed"
                  period="2018 - Present"
                  description="Providing graphics design services including logo design, flyers, banners, and digital content."
                  delay={500}
                />
                <AnimatedExperienceItem
                  title="Founder & Owner"
                  company="Kinza Tech Solutions"
                  period="2021 - Present"
                  description="Founded digital creative services company offering web design, social media marketing, and graphic design."
                  delay={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Projects" />
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              <AnimatedProjectCard
                title="Kinza Tech Solutions"
                description="Founded a digital creative services company offering web design, social media marketing, and graphic design."
                image="/images/project-kinza-tech.jpg"
                tags={["Web Design", "Marketing"]}
                projectUrl="https://v0-kinza-tech-portfolio.vercel.app/"
              />
              <AnimatedProjectCard
                title="Hunani Builders Website"
                description="Designed responsive website for real estate company with modern design and property listings."
                image="/images/project-hunani-builders.jpg"
                tags={["WordPress", "Design"]}
                projectUrl="https://github.com/abuzarabbassi68-create1"
              />
              <AnimatedProjectCard
                title="WisdomWave Blog"
                description="Created and maintain blog featuring tech tutorials, web development tips, and digital marketing insights."
                image="/images/project-blog.jpg"
                tags={["Blogger", "Content"]}
                projectUrl="https://wisdomwave045.blogspot.com/"
              />
              <AnimatedProjectCard
                title="Print Design Portfolio"
                description="Collection of professional print designs including logos, posters, banners, and marketing materials."
                image="/images/project-print-design.jpg"
                tags={["CorelDRAW", "Design"]}
                projectUrl="https://github.com/abuzarabbassi68-create1"
              />
              <AnimatedProjectCard
                title="Noor Al Manzil Website"
                description="Professional WordPress website featuring responsive design and smooth animations."
                image="/images/project-noor-almanzil.jpg"
                tags={["WordPress", "Design"]}
                projectUrl="https://nooralmanzil.ae/"
              />
              <AnimatedProjectCard
                title="Social Media Campaigns"
                description="Managed multiple social media marketing campaigns with analytics and content strategy."
                image="/images/project-social-dashboard.jpg"
                tags={["Marketing", "Analytics"]}
                projectUrl="https://github.com/abuzarabbassi68-create1"
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Certifications" />
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                { name: "Information Technology", issuer: "NCVET", year: "2021" },
                { name: "Graphics Design", issuer: "NCVET", year: "2020" },
                { name: "Web Design", issuer: "NCVET", year: "2020" },
                { name: "Artificial Intelligence", issuer: "Microsoft", year: "2022" },
                { name: "Cybersecurity", issuer: "Cisco", year: "2023" },
                { name: "Android Development", issuer: "Google", year: "2021" },
                { name: "Digital Marketing", issuer: "Google", year: "2022" },
                { name: "Social Media Marketing", issuer: "HubSpot", year: "2023" },
                { name: "Python Programming", issuer: "Coursera", year: "2022" },
              ].map((cert) => (
                <div key={cert.name} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-500 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Get In Touch" />
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <AnimatedContactForm />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact Info</h3>
                  <div className="space-y-3">
                    <a href="mailto:abuzarabbasi68@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
                      <Mail size={20} />
                      abuzarabbasi68@gmail.com
                    </a>
                    <a href="tel:+923199910712" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
                      <Phone size={20} />
                      +92 319 9910712
                    </a>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin size={20} />
                      Mansehra, Pakistan
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Connect</h3>
                  <div className="space-y-2">
                    <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-900 text-white rounded-lg hover:opacity-90">
                      <Github size={20} />
                      @abuzarabbassi68-create1
                    </a>
                    <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg hover:opacity-90">
                      <Linkedin size={20} />
                      Abu Zar Abbasi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">&copy; 2024 Abu Zar. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
