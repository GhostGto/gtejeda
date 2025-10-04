export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mb-12">
        <h2 className="flex items-center text-3xl font-bold text-foreground mb-4">
          <span className="font-mono text-xl text-accent mr-2">01.</span>
          About Me
          <span className="ml-4 h-px flex-1 bg-border"></span>
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a Cloud & DevOps Engineer based in Santo Domingo, Dominican Republic, with a strong background in
            automating scalable infrastructure and enhancing security in cloud-native environments. Currently working as
            a Junior DevOps Engineer at Change Financial, where I focus on Infrastructure as Code, containerization, and
            monitoring solutions.
          </p>
          <p>
            My journey in tech started with technical support roles, which gave me a solid foundation in troubleshooting
            and system administration. I then transitioned into IT Security Operations at Scotia GBS, where I led
            vulnerability assessments and automated security processes. This experience shaped my approach to building
            secure, reliable infrastructure.
          </p>
          <p>
            I hold an Associate Degree in Cybersecurity from ITLA and completed CCNA preparation. I'm passionate about
            DevOps culture, Site Reliability Engineering practices, and continuously improving system reliability and
            performance. When I'm not working on infrastructure, I enjoy contributing to open-source projects and
            exploring new cloud technologies.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="h-80 w-80 rounded-lg border-2 border-accent bg-card"></div>
            <div className="absolute -right-4 -top-4 h-80 w-80 rounded-lg border-2 border-accent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
