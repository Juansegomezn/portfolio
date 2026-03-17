import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/data/translations.js";

const testimonialMetadata = [
  {
    author: "Sarah Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    author: "Lina Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    author: "Catalina Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
  },
  {
    author: "Sofia Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
];

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialMetadata.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialMetadata.length) % testimonialMetadata.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-800px h-800px bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"/>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.title}{" "}
            <span className="font-serif italic font-normal text-white">
              {t.titleAccent}
            </span>
          </h2>
        </div>

        <div className="mt-2 max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass-8 rounded-3xl glow-border md:p-12 p-8 flex flex-col items-center animate-fade-in animation-delay-200 transition-all duration-500">
              <div className="absolute -top-4 left-6 rounded-full w-12 h-12 bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-center italic">
                "{t.items[activeIndex].quote}"
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 mb-4 shadow-lg">
                  <img 
                    src={testimonialMetadata[activeIndex].avatar} 
                    alt={testimonialMetadata[activeIndex].author}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="text-lg font-semibold">{testimonialMetadata[activeIndex].author}</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-tighter">
                  {testimonialMetadata[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={previous} 
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5"/>
              </button>
              
              <div className="flex gap-2">
                {testimonialMetadata.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={next} 
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};