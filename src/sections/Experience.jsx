const experiences = [
  {
    period: "Aug. 2024 — Nov. 2025",
    role: "Web UI Developer",
    company: "Globant",
    description: 
      "Led the UI development for a ChatGPT wrapper and delivered a tech talk on SOLID principles. Developed pixel-perfect components using React and MUI, ensuring high stability with Jest/Testing Library and maintaining architectural integrity through SonarQube standards.",
    technologies: ["React", "TypeScript", "Material UI", "SCSS", "Jest", "SonarQube", "GitLab", "AI-Assisted Dev"],
    current: false,
  },
  {
    period: "Nov. 2023 — Jul. 2024",
    role: "College Trainee Web UI Developer",
    company: "Globant",
    description: 
      "Contributed to internal optimization tools and developed a full-featured contact manager. Strengthened skills in Redux, SCSS, and unit testing while centralizing data systems via AppScript and Looker Studio in Agile environments.",
    technologies: ["React", "Redux", "SCSS", "HTML", "CSS", "JavaScript", "Git", "Material UI", "AppScript", "Looker Studio"],
    current: false,
  },
  {
    period: "Aug. 2023 — Nov. 2023",
    role: "Web Developer Monitor",
    company: "Semillero SENNOVA",
    description: 
      "Designed and implemented UI components for a research-based educational platform. Focused on accessibility, usability, and interactive features using React Router and Bootstrap in a hybrid academic environment.",
    technologies: ["React", "React Router", "Bootstrap", "Reactstrap", "UX/UI"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Career Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Building expertise 
              <span className="text-primary italic font-normal text-white"> 
                {" "}
                step by step.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A timeline of my professional evolution, showcasing the milestones 
              where I've refined my skills and delivered high-quality digital solutions.
            </p>
          </div>

          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]" />
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index} 
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(index) * 150}ms` }}
                >
                  <div className="absolute left-0 top-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {experience.current && <div className="absolute inset-0 bg-primary rounded-full opacity-75 animate-ping" />}
                  </div>

                  <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16 "}`}>
                      <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                        <span className="text-sm text-primary font-medium">{experience.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                          {experience.description}
                        </p>
                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                          {experience.technologies.map((tech, techIdx) => (
                            <span key={techIdx} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-muted-foreground border border-border/10 hover:border-primary/50 hover:text-primary transition-all duration-300 animate-fade-in">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}