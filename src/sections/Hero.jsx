import { Button } from '@/components/Button'
import { ArrowRight, ChevronDown, Github, Linkedin } from 'lucide-react'
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Redux",
  "Express",
  "SQL",
  "PHP",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Sass",
  "Jest",
  "Testing Library",
  "Figma",
  "Git",
  "GitLab",
  "Docker",
  "AI Tools",
  "REST APIs",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-30"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              backgroundColor:'#284e7d',
              left:`${Math.random() * 100}%`,
              top:`${Math.random() * 100}%`,
              animation:`slow-drift ${Math.random() * 10 + 5}s infinite linear`,
              animationDelay:`-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                Web Developer | Full Stack - Frontend 
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Developing <span className="text-primary glow-text">smarter</span> 
                <br />
                websites with
                <br />
                <span className="font-serif italic font-normal text-white">
                modern technologies.
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in animation-delay-200">
                Crafting seamless <span className="text-foreground">digital products</span> by merging 
                fullstack expertise with <span className="text-foreground">AI-driven workflows</span>. 
                From database architecture to polished frontend, I build systems that perform.
              </p>
            </div>

            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size="lg">
                Contact Me <ArrowRight size={18}/>
              </Button>
              <AnimatedBorderButton />
            </div>

            <div className='flex items-center gap-8 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow me: </span>
              {[
                {icon: Github, href: 'https://github.com/Juansegomezn'},
                {icon: Linkedin, href: 'https://www.linkedin.com/in/juanse-gomez-118b8b1b8/'},
              ].map((link, index) => (
                <a href={link.href} key={index} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <link.icon size={20}/>
                </a>
              ))}
            </div>
          </div>

          <div className='relative animate-fade-in animation-delay-300'>
            <div className='relative max-w-md mx-auto'>
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className='relative glass rounded-2xl p-2 glow-border'>
                <img src="/profile.png" alt="Juan Gomez" className='w-full aspect-[4/5] object-cover rounded-2xl'/>

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-primary"/>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>2+</div>
                  <div className='text-xs text-muted-foreground'>Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className='flex-shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}