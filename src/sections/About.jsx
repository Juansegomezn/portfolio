import { Code2, Lightbulb, Rocket, User, Users } from "lucide-react";
import { useLanguage } from "@/context/languageContext";
import { translations } from "@/data/translations";

const highlightIcons = [Code2, Rocket, Users, Lightbulb];

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary font-medium tracking-wider uppercase text-sm flex items-center gap-2">
                <User size={16} />
                {t.badge}
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t.title}
                <br />
                <span className="text-primary">{t.titleAccent}</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                {t.p1}
              </p>

              <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-300">
                {t.p2}
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-400 mt-8">
                <p className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/50 pl-4">
                  "{t.quote}"
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index];
              return (
                <div 
                  key={index} 
                  className="glass p-6 rounded-xl border border-border/50 animate-fade-in hover:border-primary/30 transition-colors duration-300"
                  style={{animationDelay: `${(index+1) * 100}ms`}}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 mb-4 p-1 rounded-full">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};