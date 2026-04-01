import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone, Youtube, Globe, ExternalLink, Award, Briefcase, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeDownload } from "./components/resume-download"
import { ThemeToggle } from "./components/theme-toggle"
import { MobileNav } from "./components/mobile-nav"
import { AnimateInView } from "./components/animate-in-view"
import { SectionHeading } from "./components/section-heading"
import { AnimatedProjectCard } from "./components/animated-project-card"
import { AnimatedExperienceItem } from "./components/animated-experience-item"
import { AnimatedContactForm } from "./components/animated-contact-form"
import { ScrollToTop } from "./components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="#home" className="text-2xl font-bold text-slate-900">Abu Zar</Link>
            
            <nav className="hidden md:flex gap-8">
              <Link href="#home" className="text-sm text-slate-700 hover:text-blue-500">Home</Link>
              <Link href="#about" className="text-sm text-slate-700 hover:text-blue-500">About</Link>
              <Link href="#video-cv" className="text-sm text-slate-700 hover:text-blue-500">Video CV</Link>
              <Link href="#skills" className="text-sm text-slate-700 hover:text-blue-500">Skills</Link>
              <Link href="#experience" className="text-sm text-slate-700 hover:text-blue-500">Experience</Link>
              <Link href="#projects" className="text-sm text-slate-700 hover:text-blue-500">Projects</Link>
              <Link href="#education" className="text-sm text-slate-700 hover:text-blue-500">Education</Link>
              <Link href="#certifications" className="text-sm text-slate-700 hover:text-blue-500">Certifications</Link>
              <Link href="#contact" className="text-sm text-slate-700 hover:text-blue-500">Contact</Link>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimateInView direction="left">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900">Hi, I'm Abu Zar</h1>
                <p className="text-xl text-slate-700">IT Professional | Web Developer | Digital Marketer</p>
                <p className="text-slate-600 leading-relaxed">
                  Detail-oriented IT professional and Computer Science graduate with strong skills in graphic designing, office automation, and web technologies. Founder of Kinza Tech Solutions - Digital Creative Services.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ResumeDownload />
                  <Link href="#contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail size={18} className="mr-2" />
                      Contact Me
                    </Button>
                  </Link>
                  <Link href="#video-cv">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Watch Video CV
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView direction="right" delay={200}>
              <div className="flex justify-center">
                <Image
                  src="/images/abu-zar-profile-new.png"
                  alt="Abu Zar - IT Professional and Web Developer"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="About Me" />
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Detail-oriented IT professional and Computer Science graduate with strong skills in graphic designing, office automation, and web technologies. Experienced in digital documentation, reporting, and visual content creation. Hands-on knowledge of HTML, CSS, and JavaScript, currently learning the MERN stack.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Certified in Information Technology, Graphics and Web Design, Artificial Intelligence, Cybersecurity, and Android Development. Currently teaching at Government Technical College Abbottabad and running Kinza Tech Solutions, a digital creative services company.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "6+", label: "Companies" },
                { value: "9+", label: "Certifications" },
                { value: "10+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4">
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Kinza Tech Banner */}
            <div className="mt-8 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kinza Tech Solutions</h3>
              <p className="text-slate-700 mb-4">Digital Creative Services - Web Design, Social Media Marketing & Graphic Design</p>
              <Link href="https://v0-kinza-tech-portfolio.vercel.app/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink size={18} className="mr-2" />
                  Visit Website
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video CV Section */}
      <section id="video-cv" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Watch My Video CV" />
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-slate-600 leading-relaxed text-center">
              Watch my professional video resume to learn more about my skills, experience, and career journey. Get a closer look at who I am and what I bring to the table.
            </p>
            <p className="text-slate-600 leading-relaxed text-center">
              With over 5 years of experience in IT, graphic design, web development, and digital marketing, I bring a unique blend of creativity and technical expertise to every project.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-slate-600">Video Player</span>
            </div>

            <div className="text-center">
              <ResumeDownload />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Graphic Design */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Graphic Design</h3>
              <p className="text-slate-600">CorelDRAW | Adobe Photoshop | Adobe Illustrator | InPage</p>
            </div>

            {/* Web Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Web Technologies</h3>
              <p className="text-slate-600">HTML | CSS | JavaScript | WordPress</p>
            </div>

            {/* MERN Stack */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">MERN Stack (Learning)</h3>
              <p className="text-slate-600">React.js | Node.js | Express.js | MongoDB</p>
            </div>

            {/* Office Tools */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Office Tools</h3>
              <p className="text-slate-600">MS Word | MS Excel | MS PowerPoint | QuickBooks</p>
            </div>

            {/* Digital Marketing */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Digital Marketing</h3>
              <p className="text-slate-600">Social Media Marketing | Content Creation | SEO Basics | Analytics</p>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Soft Skills</h3>
              <p className="text-slate-600">Communication | Teamwork | Time Management | Problem Solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Professional Experience" />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatedExperienceItem
              title="Teacher - Web Development & IT"
              company="Government Technical College Abbottabad"
              period="May 2025 - Present"
              description="Teaching web development and digital marketing skills to technical students at a government institution."
              delay={0}
            />
            
            <AnimatedExperienceItem
              title="Social Media Marketer"
              company="Software Company (Comrex Pakistan)"
              period="August 2024 - April 2025"
              description="Managed social media accounts, created marketing campaigns, and increased brand visibility through strategic content."
              delay={100}
            />
            
            <AnimatedExperienceItem
              title="IT & Digital Support / Assistant Manager"
              company="Hunani Builders & Developers, Karachi"
              period="January 2022 - July 2024"
              description="Managed digital records, reports, and documentation using MS Office tools. Supported business operations through graphic design and digital content creation. Maintained structured data, daily reports, and assisted in IT-related tasks."
              delay={200}
            />
            
            <AnimatedExperienceItem
              title="IT & Office Automation Intern (Paid - 6 Months)"
              company="Govt. Technical & Vocational Center, Khaki, Mansehra"
              period="May 2020"
              description="Received practical training in office automation, graphics, and basic web-related tasks. Assisted in maintaining documentation, records, and workflow processes. Supported instructors and staff in daily IT and administrative activities."
              delay={300}
            />
            
            <AnimatedExperienceItem
              title="Graphic Designer (Part-Time)"
              company="Baber Printing Press, Mansehra"
              period="June 2015 - May 2017"
              description="Designed posters, banners, visiting cards, and promotional materials. Used CorelDRAW, Adobe Photoshop, Adobe Illustrator, and InPage. Prepared print-ready files and handled client revisions professionally."
              delay={400}
            />
            
            <AnimatedExperienceItem
              title="Data Entry Operator"
              company="Plus Pharmacy, Abbottabad"
              period="5 months"
              description="Managed data entry operations and maintained accurate records for pharmacy inventory and sales."
              delay={500}
            />
            
            <AnimatedExperienceItem
              title="Relationship Service Officer"
              company="Ufone (Mobile Operator)"
              period="3 months"
              description="Provided customer service and managed client relationships for the telecom company."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="My Projects" subtitle="Work from my professional experience" />
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedProjectCard
              title="Kinza Tech Solutions"
              description="Founded a digital creative services company offering web design, social media marketing, and graphic design solutions."
              image="/images/project-kinza-tech.jpg"
              tags={["Web Design", "Marketing", "Branding"]}
              delay={0}
            />
            
            <AnimatedProjectCard
              title="Hunani Builders Website"
              description="Designed and developed a responsive website for Hunani Builders and Developers with property listings."
              image="/images/project-hunani-builders.jpg"
              tags={["WordPress", "Web Design"]}
              delay={100}
            />
            
            <AnimatedProjectCard
              title="Social Media Campaigns"
              description="Created and managed social media marketing campaigns for multiple clients at Comrex Pakistan."
              image="/images/project-social-dashboard.jpg"
              tags={["Marketing", "Analytics"]}
              delay={200}
            />
            
            <AnimatedProjectCard
              title="Print Design Portfolio"
              description="Collection of print designs including posters, banners, visiting cards, and promotional materials using CorelDRAW, Photoshop and Illustrator."
              image="/images/project-print-design.jpg"
              tags={["CorelDRAW", "Photoshop"]}
              delay={300}
            />
            
            <AnimatedProjectCard
              title="Personal Blog"
              description="Created and maintain WisdomWave blog covering tech, web development, and digital marketing topics."
              image="/images/project-blog.jpg"
              tags={["Blogger", "Content Writing"]}
              delay={400}
            />
            
            <AnimatedProjectCard
              title="Educational Resources"
              description="Developed educational web content and resources for students at Government Technical College."
              image="/images/project-education.jpg"
              tags={["Education", "Web Dev"]}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Education" />
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-slate-900">Bachelor of Science in Computer Science (BSCS)</p>
              <p className="text-slate-600 text-sm">Hazara University, Pakistan</p>
            </div>
            
            <div className="p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-slate-900">F.Sc (Pre-Engineering)</p>
              <p className="text-slate-600 text-sm">Government Higher Secondary School Bherkund, Mansehra</p>
            </div>
            
            <div className="p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-slate-900">Matric (Science)</p>
              <p className="text-slate-600 text-sm">Government Higher Secondary School Bherkund, Mansehra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Diplomas & Certifications" subtitle="Professional qualifications and achievements" />
          
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Office Automation Diploma", year: "2016", type: "Diploma" },
              { name: "Spoken English Diploma", year: "2017", type: "Diploma" },
              { name: "Achievement Certificate - Stage Secretary", year: "2019", type: "Certificate" },
              { name: "Diploma in Information Technology (DIT - 1 Year)", year: "2021", type: "Diploma" },
              { name: "IT Certificate - Graphics, Web & Mobile App Designing", year: "2021", type: "Certificate" },
              { name: "Foundation of Artificial Intelligence", year: "2023", type: "Online" },
              { name: "Android Application Development", year: "2023", type: "Online" },
              { name: "Introduction to Cybersecurity", year: "2023", type: "Online" },
              { name: "Soft Skills Diploma", year: "2025", type: "Diploma" },
            ].map((cert) => (
              <div key={cert.name} className="p-4 bg-white border border-slate-200 rounded-lg">
                <p className="font-semibold text-slate-900 text-sm mb-2">{cert.name}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">{cert.year}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{cert.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Get In Touch" subtitle="Feel free to contact me for any project or collaboration" />
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Phone</p>
                  <Link href="tel:+923199910712" className="text-slate-900 hover:text-blue-600">
                    +92 319 9910712
                  </Link>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Email</p>
                  <Link href="mailto:abuzarabbasi68@gmail.com" className="text-slate-900 hover:text-blue-600">
                    abuzarabbasi68@gmail.com
                  </Link>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Location</p>
                  <p className="text-slate-900">Bherkund, Mansehra, Pakistan</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-1">Website</p>
                  <Link href="https://v0-abu-zar-portfolio.vercel.app" className="text-blue-600 hover:underline">
                    v0-abu-zar-portfolio.vercel.app
                  </Link>
                </div>
              </div>

              {/* Kinza Tech Card */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-1">Kinza Tech Solutions</h4>
                <p className="text-sm text-slate-600 mb-4">Digital Creative Services - Web Design, Social Media Marketing & Graphic Design</p>
                <Link href="https://v0-kinza-tech-portfolio.vercel.app/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Visit Company Website
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Connect With Me</h4>
                <div className="space-y-2">
                  <Link href="https://www.linkedin.com/in/abu-zar786" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                    <Linkedin size={18} />
                    LinkedIn
                  </Link>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                    <Github size={18} />
                    GitHub
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                    <Youtube size={18} />
                    YouTube
                  </Link>
                </div>
              </div>

              {/* Other Links */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Other Links</h4>
                <div className="space-y-2">
                  <Link href="https://wisdomwave045.blogspot.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                    <Globe size={18} />
                    WisdomWave Blog
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                    <Youtube size={18} />
                    YouTube Channel
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <AnimatedContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Abu Zar</h3>
              <p className="text-gray-300 mb-2">IT Professional | Web Developer | Digital Marketer</p>
              <p className="text-gray-400 text-sm">Founder - Kinza Tech Solutions | Digital Creative Services</p>
            </div>
            <div className="flex justify-end gap-4">
              <Link href="https://www.linkedin.com/in/abu-zar786" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCEN08HLCgJBIw7maCTD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2026 Abu Zar. All rights reserved.</p>
            <ScrollToTop />
          </div>
        </div>
      </footer>
    </div>
  )
}
