import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Juan is one of the most talented engineers I've worked with. His attention to detail and technical leadership were instrumental to our success.",
    author: "Sarah Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Juan is one of the most talented engineers I've worked with. His attention to detail and technical leadership were instrumental to our success.",
    author: "Lina Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Juan is one of the most talented engineers I've worked with. His attention to detail and technical leadership were instrumental to our success.",
    author: "Catalina Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "Juan is one of the most talented engineers I've worked with. His attention to detail and technical leadership were instrumental to our success.",
    author: "Sofia Xuan",
    role: "CTO, Caps Corporate.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Feedback that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks for itself.
            </span>
          </h2>
        </div>

        <div className="mt-2 max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass-8 rounded-3xl glow-border md:p-6 p-4 flex flex-col items-center animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-6 rounded-full w-12 h-12 bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-12">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 mb-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="text-lg font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "w-8 bg-primary" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}