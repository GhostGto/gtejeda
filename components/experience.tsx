import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "August 2024 — Present",
    title: "Junior DevOps Engineer",
    company: "Change Financial",
    location: "Santo Domingo",
    description:
      "Automated deployment pipelines using Infrastructure as Code (IaC) tools such as AWS CDK and Terraform, reducing release time by 30%. Developed monitoring and alerting solutions with CloudWatch, Prometheus, and Grafana, decreasing incident response time by 25%.",
    technologies: ["AWS CDK", "Terraform", "Docker", "Kubernetes", "ECS/AKS", "CloudWatch", "Prometheus", "Grafana"],
  },
  {
    period: "March 2022 — August 2024",
    title: "IT Security Operations Analyst",
    company: "Scotia GBS",
    location: "Santo Domingo",
    description:
      "Led vulnerability scanning and penetration testing campaigns, reducing exploitable weaknesses by 40%. Automated security and operational processes using Python and Bash scripting to improve efficiency and reliability. Conducted threat hunting and incident response.",
    technologies: ["Python", "Bash", "Nessus", "Nmap", "Burp Suite", "Wireshark"],
  },
  {
    period: "December 2020 — March 2022",
    title: "Technical Support to User",
    company: "OPTIC (Presidential Office for ICT)",
    location: "Santo Domingo",
    description:
      "Provided L1/L2 hardware and software support for government personnel, achieving a 95% ticket resolution rate. Installed security patches and removed malware to protect sensitive information systems. Delivered remote and onsite support.",
    technologies: ["Windows Server", "Linux", "Active Directory", "Security Patching"],
  },
  {
    period: "August 2018 — May 2019",
    title: "Technical Support",
    company: "Integradores de Tecnología y Sistemas (ITS)",
    location: "Santo Domingo",
    description:
      "Configured and maintained IT infrastructure for employees, reducing downtime through proactive maintenance. Executed system updates and malware remediation across multiple departments.",
    technologies: ["Windows", "Linux", "Network Configuration", "System Administration"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mb-12">
        <h2 className="flex items-center text-3xl font-bold text-foreground mb-4">
          <span className="font-mono text-xl text-accent mr-2">03.</span>
          Experience
          <span className="ml-4 h-px flex-1 bg-border"></span>
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 transition-all hover:border-accent hover:shadow-lg">
            <div className="grid gap-4 lg:grid-cols-[200px_1fr]">
              <div className="font-mono text-sm text-muted-foreground">{exp.period}</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {exp.title} · <span className="text-accent">{exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
