import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abu Zar | MERN Stack Developer & Social Media Marketer",
  description: "Portfolio website of Abu Zar, a MERN Stack Developer and Social Media Marketer based in Pakistan.",
  keywords: ["MERN Stack", "Developer", "Social Media Marketing", "Web Development", "Portfolio", "Abu Zar"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="TiLmLI99drjmqpzO6h1lRZldhyOcajziebAeY_4V-nU" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
