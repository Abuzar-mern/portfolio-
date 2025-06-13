"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeDownload() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")

    // Set the href to the PDF file path
    link.href = "/files/abu-zar-cv.pdf"

    // Set the download attribute with the desired filename
    link.download = "Abu_Zar_Resume.pdf"

    // Append the link to the body
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
  }

  return (
    <Button size="lg" onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  )
}
