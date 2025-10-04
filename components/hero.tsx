import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center py-20">
      <div className="w-full">
        <div className="mb-6">
          <p className="font-mono text-sm text-accent mb-4">Hi, my name is</p>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-4">
            Gustavo Tejeda
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl mb-8">
            DevOps / Cloud / SRE Engineer
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground mb-12">
          Cloud & DevOps Engineer with proven experience automating scalable infrastructure and enhancing security
          posture in cloud-native environments. Skilled in Docker, AWS, Python, and incident response, with a track
          record of improving deployment speed, system reliability, and compliance with PCI-DSS and ISO standards.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button size="lg" className="font-mono" asChild>
            <a href="mailto:gustavo.t138@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-mono bg-transparent">
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/ghostgto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/gustavo-tejedac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
