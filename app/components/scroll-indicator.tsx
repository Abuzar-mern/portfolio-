"use client"

import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <p className="text-sm text-muted-foreground">Scroll to explore</p>
        <ChevronDown className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
}
