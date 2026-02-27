"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeDownload() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1nB532mDl5YMbhT_jAR0Nk2Jt4tHVhveO",
      "_blank"
    )
  }

  return (
    <Button size="lg" onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  )
}
