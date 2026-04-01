import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { translations } from '@/data/translations.js';

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      id: "frontend",
      label: t.categories.frontend,
      items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap", "Sass", "SCSS", "HTML", "CSS", "Figma"]
    },
    {
      id: "backend",
      label: t.categories.backend,
      items: ["Node.js", "Express", "PHP", "Laravel", "SQL", "MySQL", "REST APIs", "AppScript"]
    },
    {
      id: "tools",
      label: t.categories.tools,
      items: ["Git", "GitLab", "Docker", "Jest", "Testing Library", "Redux", "AI Tools", "Looker Studio"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            {t.title} <span className="font-serif italic font-normal text-white">{t.titleAccent}</span>
          </h2>
        </div>

        {/* Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === index 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                  : "glass hover:bg-white/5 text-muted-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto min-h-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skillCategories[activeTab].items.map((skill) => (
                <div 
                  key={skill}
                  className="group relative p-4 rounded-2xl glass border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-sm md:text-base font-medium group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};