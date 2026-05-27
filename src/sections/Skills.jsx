import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { translations } from '@/data/translations.js';

const getIconUrl = (name) => {
  const map = {
    "Next.js": "nextdotjs",
    "Tailwind CSS": "tailwindcss",
    "Material UI": "mui",
    "HTML": "html5",
    "Node.js": "nodedotjs",
    "Testing Library": "testinglibrary",
    "REST APIs": "insomnia",
    "AppScript": "googleappsscript",
    "AI Tools": "googlegemini",
    "Looker Studio": "looker",
    "SQL": "sqlite",
  };
  const slug = map[name] || name.toLowerCase().replace(/\s+/g, '').replace('.js', 'js');
  return `https://cdn.simpleicons.org/${slug}`;
};

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      id: "frontend",
      label: t.categories.frontend,
      items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Material UI", "Sass", "HTML", "CSS", "Figma"]
    },
    {
      id: "backend",
      label: t.categories.backend,
      items: ["Node.js", "Express", "PHP", "Laravel", "SQL", "MySQL", "PostgreSQL", "REST APIs", "AppScript"]
    },
    {
      id: "tools",
      label: t.categories.tools,
      items: ["Git", "GitHub", "GitLab", "Docker", "Jest", "Redux", "AI Tools", "Looker Studio", "Supabase"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.title} <span className="text-primary italic font-serif">{t.titleAccent}</span></h2>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {skillCategories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-xl transition-all ${activeTab === index ? "bg-primary text-white" : "glass text-muted-foreground hover:bg-white/5"}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            {skillCategories[activeTab].items.map((skill) => (
              <div key={skill} className="glass p-6 rounded-2xl flex flex-col items-center gap-4 group hover:border-primary/50 transition-colors">
                <img 
                  src={getIconUrl(skill)} 
                  alt={skill}
                  className={`w-10 h-10 transition-all duration-300 
                    opacity-50 brightness-5 invert
                    group-hover:opacity-100 group-hover:filter-none`}
                />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};