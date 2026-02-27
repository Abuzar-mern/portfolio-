"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimateInView } from "./animate-in-view"
import { Loader2, Send } from "lucide-react"

export function AnimatedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimateInView direction="right">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1 text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 resize-none"
            placeholder="Your message"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full transition-all duration-300 hover:scale-[1.02]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {submitStatus === "success" && (
          <div className="p-3 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md animate-fadeIn">
            Thank you for your message! I will get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-md animate-fadeIn">
            There was an error sending your message. Please try again.
          </div>
        )}
      </form>
    </AnimateInView>
  )
}
