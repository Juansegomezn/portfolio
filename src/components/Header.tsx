import type { FC } from 'react'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const Header: FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Juan Gomez')
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detect if scrolled down
      setIsScrolled(window.scrollY > 50)

      // Only detect active section if scrolled
      if (window.scrollY > 50) {
        const sections = ['about', 'projects', 'achievements', 'education', 'contact']
        const sectionNames: Record<string, string> = {
          about: 'About',
          projects: 'Projects',
          achievements: 'Achievements',
          education: 'Education',
          contact: 'Contact',
        }

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 150 && rect.bottom > 150) {
              setActiveSection(sectionNames[sectionId])
              return
            }
          }
        }
      } else {
        setActiveSection('Juan Gomez')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-40 border-b border-primary-900 shadow-lg' 
          : 'relative'
      } h-[70px] flex items-center justify-between transition-all duration-300 w-full`}
      style={{
        padding: '0 5%',
        boxSizing: 'border-box',
        borderBottom: 'none',
        backgroundColor: isScrolled ? 'rgba(17, 20, 27, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(2px)' : 'none',
      }}
    >
      <h1 className="text-xl font-bold text-white">{activeSection}</h1>
      <LanguageSwitcher />
    </header>
  )
}

export default Header
