import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abu Zar | MERN Stack Developer & Digital Marketer",
  description:
    "Portfolio website of Abu Zar - MERN Stack Developer, Social Media Marketer & Founder of Kinza Tech Solutions. Based in Mansehra, Pakistan.",
  keywords: [
    "Abu Zar",
    "MERN Stack Developer",
    "Social Media Marketing",
    "Web Development",
    "Kinza Tech Solutions",
    "Digital Creative Services",
    "WordPress Developer",
    "Mansehra",
    "Pakistan",
  ],
  authors: [{ name: "Abu Zar" }],
  openGraph: {
    title: "Abu Zar | MERN Stack Developer & Digital Marketer",
    description:
      "Portfolio of Abu Zar - MERN Stack Developer, Social Media Marketer & Founder of Kinza Tech Solutions.",
    type: "website",
  },
    generator: 'v0.app'
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
