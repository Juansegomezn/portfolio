import { Award, Code2, Lightbulb, Rocket, User, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Applying SOLID principles and clean code practices to ensure maintainable software.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Developing responsive, pixel-perfect UI components optimized for speed and scalability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Skilled in Agile SCRUM environments, working with multicultural international teams.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging AI tools and agent-based workflows to drive project success and efficiency.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary font-medium tracking-wider uppercase text-sm flex items-center gap-2">
                <User size={16} />
                About Me
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                Architecting scalable systems
                <br />
                <span className="text-primary">driven by AI and clean logic.</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                As a <span className="text-foreground">Frontend Developer</span> with experience at 
                <span className="text-foreground"> Globant</span>, I specialize in building scalable, 
                user-centric interfaces through a blend of technical precision and agile collaboration with global teams.
              </p>

              <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-300">
                I focus on <span className="text-foreground">software craftsmanship</span> and structural integrity, 
                leveraging <span className="text-foreground">AI-driven innovation</span> and SOLID principles to 
                optimize development lifecycles and deliver high-performance digital products.
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-400 mt-8">
                <p className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/50 pl-4">
                  "Focus on architecting digital solutions that prioritize 
                  <span className="text-foreground"> long-term maintainability</span> and structural integrity—ensuring every 
                  system is as robust for the developers as it is intuitive for the users."
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-xl border border-border/50 animate-fade-in"
                style={{animationDelay: `${(index+1) * 100}ms`}}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 mb-4 p-1 rounded-full hover:bg-primary/20">
                  <highlight.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}