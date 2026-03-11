import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'

const projects = [
  {
    title: "Umbral Circle",
    description: "Umbral Circle: A full-stack social network built with React, Node.js, and MySQL. Featuring secure JWT authentication, real-time server state with TanStack Query, and a customized SCSS theme system.",
    image: "/projects/umbral-circle.jpg",
    tags: ["React", "NodeJS", "MySQL", "Express", "JWT", "TanStack Query", "REact Router", "SCSS", "Axios", "Material UI"],
    link: "https://umbral-circle-client.vercel.app/",
    github: "https://github.com/Juansegomezn/umbral-circle/tree/main",
  },
  {
    title: "VeloWords Translate",
    description: "Modern Google Translate-inspired web app using on-device AI translation via the experimental Chromium Translator API.",
    image: "/projects/velowords-translate.jpeg",
    tags: ["JavaScript", "HTML", "CSS", "AI", "API"],
    link: "https://velowords-translate.vercel.app/",
    github: "https://github.com/Juansegomezn/velowords-translate/tree/main",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Projects 
            <span className="text-primary"> built with purpose.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in animation-delay-200">
            A selection of my recent projects and professional contributions, 
            built with focus on architecture, performance, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in animation-delay-300"
              style={{ animationDelay: `${(index+1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Github className="w-5 h-5"/>
                  </a>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-muted-foreground border border-border/10 hover:border-primary/50 hover:text-primary transition-all duration-300 animate-fade-in"
                      style={{animationDelay: `${(index+1) * 100}ms`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in animation-delay-400">
          <AnimatedBorderButton href="https://github.com/Juansegomezn" target="_blank" rel="noopener noreferrer">
            View All Projects
            <ArrowUpRight className="w-5 h-5 ml-2 inline-block" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}