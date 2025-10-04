import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-accent mb-4">05. What's Next?</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          I'm always open to new opportunities and collaborations. Whether you have a question, an interesting project,
          or just want to connect, feel free to reach out. I'll do my best to get back to you!
        </p>

        <div className="mb-12 space-y-3 text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            <a href="mailto:gustavo.t138@gmail.com" className="hover:text-accent transition-colors">
              gustavo.t138@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-accent" />
            <span>+1 829-930-4757</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Santo Domingo, Dominican Republic</span>
          </div>
        </div>

        <Button size="lg" className="font-mono" asChild>
          <a href="mailto:gustavo.t138@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Say Hello
          </a>
        </Button>
      </div>

      <footer className="mt-20 border-t border-border pt-8 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS · Deployed on Vercel
        </p>
        <p className="mt-2 font-mono text-xs text-muted-foreground">© 2025 Gustavo Tejeda. All rights reserved.</p>
      </footer>
    </section>
  )
}
