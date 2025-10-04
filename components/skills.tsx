import { Card } from "@/components/ui/card"
import { Cloud, Container, Server, GitBranch, Terminal, Shield, Activity, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS (EC2, S3, IAM, Lambda, CloudWatch, ECS)", "GCP (Compute Engine, Cloud Functions, Cloud Storage)"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "ECS/AKS"],
  },
  {
    title: "Infrastructure as Code",
    icon: Server,
    skills: ["Terraform", "AWS CDK", "Ansible"],
  },
  {
    title: "CI/CD & Monitoring",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "Prometheus", "Grafana", "CloudWatch", "ELK Stack"],
  },
  {
    title: "Programming & Scripting",
    icon: Terminal,
    skills: ["Python", "Bash"],
  },
  {
    title: "Security Tools",
    icon: Shield,
    skills: ["Nessus", "Nmap", "Burp Suite", "Wireshark"],
  },
  {
    title: "Networking",
    icon: Activity,
    skills: ["TCP/IP", "DNS", "VPNs", "HTTP/HTTPS", "SSH"],
  },
  {
    title: "Operating Systems",
    icon: Database,
    skills: ["Linux (Ubuntu, Amazon Linux)", "Windows Server"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mb-12">
        <h2 className="flex items-center text-3xl font-bold text-foreground mb-4">
          <span className="font-mono text-xl text-accent mr-2">02.</span>
          Skills & Technologies
          <span className="ml-4 h-px flex-1 bg-border"></span>
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="p-6 transition-all hover:border-accent hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="font-mono text-sm text-muted-foreground">
                    <span className="text-accent mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
