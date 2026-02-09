import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import { Linkedin, Github, Twitter, Facebook, Mail } from "lucide-react"
import { bio } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-xl font-bold mb-4">
            Santhosh <span className="text-primary">Portfolio</span>
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {bio.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href={bio.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:border-blue-600 transition-colors text-muted-foreground hover:text-blue-600" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={bio.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:border-foreground transition-colors text-muted-foreground hover:text-foreground" title="GitHub">
              <Github size={20} />
            </a>
            <a href={bio.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:border-sky-500 transition-colors text-muted-foreground hover:text-sky-500" title="Twitter">
              <Twitter size={20} />
            </a>
            <a href={bio.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-background hover:border-blue-700 transition-colors text-muted-foreground hover:text-blue-700" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href={`mailto:${bio.email}`} className="p-2 rounded-full border border-border bg-background hover:border-primary transition-colors text-muted-foreground hover:text-primary" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
