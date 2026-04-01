import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] })

export const metadata: Metadata = {
  title: "Abu Zar | MERN Stack Developer & Digital Marketer | Portfolio",
  description:
    "Abu Zar - IT Professional, Web Developer, Digital Marketer and Graphic Designer from Pakistan. Founder of Kinza Tech Solutions. Explore my MERN Stack projects, skills, and professional experience.",
  keywords: [
    "Abu Zar",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Social Media Marketing",
    "Digital Marketer",
    "Graphic Designer",
    "Kinza Tech Solutions",
    "Digital Creative Services",
    "WordPress Developer",
    "Freelancer",
    "Web Design",
    "UI/UX",
    "Mansehra",
    "Pakistan",
  ],
  authors: [{ name: "Abu Zar Abbasi", url: "https://www.linkedin.com/in/abuzarabbasi1/" }],
  creator: "Abu Zar Abbasi",
  publisher: "Kinza Tech Solutions",
  openGraph: {
    title: "Abu Zar | MERN Stack Developer & Digital Marketer",
    description:
      "Professional portfolio of Abu Zar - MERN Stack Developer, Digital Marketer & Founder of Kinza Tech Solutions. View my projects, skills, and experience.",
    type: "website",
    url: "https://v0-abu-zar-portfolio.vercel.app",
    siteName: "Abu Zar Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Zar | MERN Stack Developer & Digital Marketer",
    description:
      "Professional portfolio of Abu Zar - MERN Stack Developer, Digital Marketer & Founder of Kinza Tech Solutions.",
    creator: "@abuzar",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://v0-abu-zar-portfolio.vercel.app",
  },
  generator: "v0.app"
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="TiLmLI99drjmqpzO6h1lRZldhyOcajziebAeY_4V-nU"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
