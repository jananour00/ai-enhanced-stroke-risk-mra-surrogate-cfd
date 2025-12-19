import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-sm font-bold">NCZ</div>
              NO CLOT ZONE
            </h3>
            <p className="text-secondary-foreground/80 text-sm">
              Advanced cerebrovascular risk assessment through integrated imaging, CFD modeling, and AI.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/analyze" className="hover:text-accent transition-colors">
                  Analysis
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-accent transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-accent transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@noclotzone.com" className="hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
          <p>&copy; 2025 NO CLOT ZONE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
