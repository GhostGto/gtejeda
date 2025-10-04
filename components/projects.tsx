import { Card } from "@/components/ui/card"
import { Github } from "lucide-react"

const projects = [
  {
    title: "DevOps Journey",
    description:
      "Comprehensive DevOps learning path and practical implementations covering CI/CD, containerization, orchestration, and cloud infrastructure. Documentation and examples for various DevOps tools and practices.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    github: "https://github.com/ghostgto/devopsJourney",
  },
  {
    title: "Jenkins GitOps with Kubernetes",
    description:
      "Complete GitOps pipeline implementation using Jenkins for automated deployments to Kubernetes clusters. Includes Helm charts, CI/CD configurations, and best practices for GitOps workflows.",
    technologies: ["Jenkins", "Kubernetes", "Helm", "GitOps", "Docker"],
    github: "https://github.com/ghostgto/jenkins-gitops-k8s",
  },
  {
    title: "Spring Boot on Kubernetes",
    description:
      "Production-ready Spring Boot application deployed on Kubernetes with complete CI/CD pipeline, monitoring, and auto-scaling configurations. Demonstrates microservices architecture patterns.",
    technologies: ["Spring Boot", "Kubernetes", "Docker", "Java", "Prometheus"],
    github: "https://github.com/ghostgto/spring-boot-k8s",
  },
  {
    title: "Jenkins GitOps with Docker",
    description:
      "Automated Docker-based deployment pipeline using Jenkins and GitOps principles. Includes multi-stage builds, security scanning, and automated testing workflows.",
    technologies: ["Jenkins", "Docker", "GitOps", "Bash", "Python"],
    github: "https://github.com/ghostgto/jenkins-gitops-docker",
  },
  {
    title: "90 Days DevOps - Nginx Bootstrap",
    description:
      "Part of the 90 Days of DevOps challenge, featuring Nginx configuration with Bootstrap frontend. Demonstrates web server optimization, load balancing, and containerization.",
    technologies: ["Nginx", "Bootstrap", "Docker", "Linux"],
    github: "https://github.com/ghostgto/90devops-nginx-bootstrap",
  },
  {
    title: "Full Stack Bootcamp Projects",
    description:
      "Collection of full-stack applications built during bootcamp training, showcasing modern web development practices, API design, and deployment strategies.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    github: "https://github.com/ghostgto/fullstackbootcamp",
  },
  {
    title: "GitOps Certification Examples",
    description:
      "Practical examples and implementations for GitOps certification preparation. Covers ArgoCD, Flux, and various GitOps patterns for Kubernetes deployments.",
    technologies: ["ArgoCD", "Flux", "Kubernetes", "Helm", "Git"],
    github: "https://github.com/ghostgto/gitops-certification-examples",
  },
  {
    title: "Social Media App",
    description:
      "Full-stack social media application with user authentication, real-time updates, and cloud deployment. Demonstrates modern web architecture and DevOps practices.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    github: "https://github.com/ghostgto/socialMediaapp",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <h2 className="flex items-center text-3xl font-bold text-foreground mb-4">
          <span className="font-mono text-xl text-accent mr-2">04.</span>
          Featured Projects
          <span className="ml-4 h-px flex-1 bg-border"></span>
        </h2>
        <p className="text-muted-foreground">
          Some projects that demonstrate my skills in DevOps, Cloud, and Software Engineering
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col p-6 transition-all hover:border-accent hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="rounded-lg bg-accent/10 p-3">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="font-mono text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
