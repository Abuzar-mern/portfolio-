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
import { CountUpStat } from "./components/count-up-stat"

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
              <Link href="#home" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Home</Link>
              <Link href="#about" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">About</Link>
              <Link href="#skills" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Skills</Link>
              <Link href="#experience" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Experience</Link>
              <Link href="#projects" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Projects</Link>
              <Link href="#education" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Education</Link>
              <Link href="#certifications" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Certifications</Link>
              <Link href="#contact" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Contact</Link>
            </nav>
            
            <div className="flex items-center gap-2">
              <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-blue-500 transition-colors" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-blue-500 transition-colors" title="LinkedIn">
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
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-sm text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for Freelance
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Hi, I'm <span className="text-blue-500">Abu Zar</span></h1>
                <div className="text-xl text-gray-600 min-h-[1.75rem]">
                  <span className="inline-block">IT Professional</span>
                </div>
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
                <div className="flex gap-2">
                  <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-400 transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-400 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-400 transition-all">
                    <Youtube size={20} />
                  </a>
                  <a href="mailto:abuzarabbasi68@gmail.com" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-400 transition-all">
                    <Mail size={20} />
                  </a>
                  <a href="tel:+923199910712" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-400 transition-all">
                    <Phone size={20} />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-80 h-80 rounded-2xl" style={{outline: '3px solid #3B82F6', outlineOffset: '4px'}}>
                  <Image
                    src="/images/abu-zar-profile-new.png"
                    alt="Abu Zar"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    loading="eager"
                    decoding="async"
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
                <CountUpStat value={5} label="Years Experience" />
                <CountUpStat value={6} label="Companies" />
                <CountUpStat value={9} label="Certifications" />
                <CountUpStat value={10} label="Projects" />
              </div>
            </div>
          </div>
        </section>

        {/* Video CV Section */}
        <section id="video-cv" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionHeading title="My Video CV" subtitle="Watch my professional introduction" />
            <div className="max-w-2xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/videoseries?list=UCEN08HLCgJBIw7maCTD"
                  title="Abu Zar Video CV"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                Subscribe to my YouTube channel for more content on web development, digital marketing, and design.
              </p>
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
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: "CorelDRAW", icon: BrandIcons.CorelDRAW },
                      { name: "Photoshop", icon: BrandIcons.Photoshop },
                      { name: "Illustrator", icon: BrandIcons.Illustrator },
                      { name: "InPage", icon: BrandIcons.InPage },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-110" style={{width: '88px', willChange: 'transform'}}>
                        <div className="w-13 h-13 flex items-center justify-center">{<skill.icon />}</div>
                        <span className="text-xs text-gray-700 text-center font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Web Technologies</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: "HTML5", icon: BrandIcons.HTML5 },
                      { name: "CSS3", icon: BrandIcons.CSS3 },
                      { name: "JavaScript", icon: BrandIcons.JavaScript },
                      { name: "WordPress", icon: BrandIcons.WordPress },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-110" style={{width: '88px', willChange: 'transform'}}>
                        <div className="w-13 h-13 flex items-center justify-center">{<skill.icon />}</div>
                        <span className="text-xs text-gray-700 text-center font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MERN Stack */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">MERN Stack (Learning)</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { name: "React.js", icon: BrandIcons.React },
                      { name: "Node.js", icon: BrandIcons.NodeJS },
                      { name: "Express.js", icon: BrandIcons.Express },
                      { name: "MongoDB", icon: BrandIcons.MongoDB },
                    ].map((skill) => (
                      <div key={skill.name} className="relative flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-110" style={{width: '88px', willChange: 'transform'}}>
                        <span className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-300">Learning</span>
                        <div className="w-13 h-13 flex items-center justify-center">{<skill.icon />}</div>
                        <span className="text-xs text-gray-700 text-center font-medium">{skill.name}</span>
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
              <div className="relative pl-12 space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" style={{borderLeft: '2px solid #E2E8F0'}}></div>
                
                <AnimatedExperienceItem
                  title="Instructor"
                  company="Government Technical College Abbottabad"
                  period="Jun 2024 - Present"
                  description="Teaching IT courses including Office automation, Internet & Networking, and IT fundamentals to students."
                  delay={0}
                  isCurrent={true}
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
                title="Noor Al Manzil Tourism"
                description="Designed and developed a full WordPress tourism website for Noor Al Manzil Tourism LLC — a licensed UAE tour operator. Includes tour listings, booking pages, blog, and WhatsApp integration."
                image="/images/project-noor-almanzil.jpg"
                tags={["WordPress", "Web Design", "Tourism", "UAE"]}
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

        {/* Education Section */}
        <section id="education" className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionHeading title="Education" />
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { degree: "BSCS (Bachelor of Science in Computer Science)", institution: "Hazara University, Pakistan", year: "2023" },
                { degree: "F.Sc Pre-Engineering", institution: "Govt HSS Bherkund, Mansehra", year: "2019" },
                { degree: "Matric Science", institution: "Govt HSS Bherkund, Mansehra", year: "2017" },
              ].map((edu, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all flex items-start gap-4">
                  <div className="text-blue-500 mt-1 flex-shrink-0">
                    <Code size={40} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-blue-500 font-medium text-sm">{edu.institution}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                  </div>
                </div>
              ))}
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
                <div key={cert.name} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 mt-1 flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                        <span className="inline-block px-2 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-full">{cert.year}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
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
                  <div className="space-y-3">
                    <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300">
                      <Github size={24} />
                      <div>
                        <p className="text-sm font-medium">@abuzarabbassi68-create1</p>
                        <p className="text-xs text-gray-400">View Profile →</p>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                      <Linkedin size={24} />
                      <div>
                        <p className="text-sm font-medium">Abu Zar Abbasi</p>
                        <p className="text-xs text-blue-100">Connect →</p>
                      </div>
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">&copy; 2024 Abu Zar. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com/abuzarabbassi68-create1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abuzarabbasi1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://wisdomwave045.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Blog">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
