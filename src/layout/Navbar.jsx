import { Button } from '@/components/Button'
import { Languages, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/languageContext';
import { translations } from '@/data/translations';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;

  const navLinks = [
    { name: t.about, href: "#about" },
    { name: t.experience, href: "#experience" },
    { name: t.projects, href: "#projects" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'} z-99`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary ">
          Juan Gomez<span className="text-primary">·</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full ml-8 px-2 py-1 flex items-center gap-3">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
          
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:bg-primary/10 transition-all text-xs font-bold border border-white/5"
          >
            <Languages size={14} className="text-primary" />
            {language === "en" ? "Cambiar a Español" : "Switch to English"}
          </button>
          <a href="#contact">
            <Button size="sm">{t.contact}</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className='md:hidden p-2 text-foreground' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto p-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a 
                href={link.href} 
                key={index} 
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}  
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium"
              >
                <Languages size={18} />
                {language === "en" ? "ES" : "EN"}
              </button>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="lg">{t.contact}</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}