import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/data/translations.js";

const socialLinks = [
  { icon: Github, href: 'https://github.com/Juansegomezn', label: 'Github' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/juanse-gomez-118b8b1b8/', label: 'LinkedIn' },
];

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              JG<span className="text-primary">·</span>
            </a>
            <p className="text-xs text-muted-foreground mt-2 font-medium">
              © {currentYear} Juan Gomez. {t.rights}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};