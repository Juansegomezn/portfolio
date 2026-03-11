import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          JG<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-3">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Navigation */}
        <button className='md:hidden p-2 text-foreground' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>
      
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
            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  )
}