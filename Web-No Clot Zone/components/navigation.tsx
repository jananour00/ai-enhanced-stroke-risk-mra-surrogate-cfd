"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-[120px]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo-no-clot-zone.png" alt="NO CLOT ZONE" className="h-40 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/technology" className="text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </Link>
            <Link href="/models" className="text-muted-foreground hover:text-foreground transition-colors">
              Models
            </Link>
            <Link href="/workflow" className="text-muted-foreground hover:text-foreground transition-colors">
              Workflow
            </Link>
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/analyze" className="text-muted-foreground hover:text-foreground transition-colors">
              Analyze
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4"></div>

          {/* Mobile Menu */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t border-border pt-4">
            <Link href="/technology" className="block text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </Link>
            <Link href="/models" className="block text-muted-foreground hover:text-foreground transition-colors">
              Models
            </Link>
            <Link href="/workflow" className="block text-muted-foreground hover:text-foreground transition-colors">
              Workflow
            </Link>
            <Link href="/features" className="block text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/analyze" className="block text-muted-foreground hover:text-foreground transition-colors">
              Analyze
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
