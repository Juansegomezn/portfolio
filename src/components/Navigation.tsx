import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

interface NavLink {
  id: string
  label: string
  href: `#${string}`
  icon: string
}

const Navigation: FC = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('about')
  const [isOpen, setIsOpen] = useState(false)

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'achievements', 'education', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { id: 'about', label: t('common.home'), href: '#about', icon: '🏠' },
    { id: 'projects', label: t('common.projects'), href: '#projects', icon: '💼' },
    { id: 'achievements', label: 'Achievements', href: '#achievements', icon: '⭐' },
    { id: 'education', label: 'Education', href: '#education', icon: '🎓' },
    { id: 'contact', label: t('common.contact'), href: '#contact', icon: '✉️' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Navigation - Right Side */}
      <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-30">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col gap-2 pr-4">
          {navLinks.map(({ id, href, icon, label }) => (
            <a
              key={id}
              href={href}
              title={label}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50'
                  : 'bg-secondary-800 text-gray-400 hover:text-primary-400 border border-primary-900 hover:border-primary-600'
              }`}
            >
              <span className="text-2xl">{icon}</span>
            </a>
          ))}
        </div>

        {/* Mobile Navigation - Hamburger */}
        <div className="md:hidden pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-800 border border-primary-900 text-gray-400 hover:text-primary-400 transition-all duration-300"
          >
            <span className="text-2xl">{isOpen ? '✕' : '≡'}</span>
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute right-0 top-16 bg-secondary-800 border border-primary-900 rounded-lg shadow-lg overflow-hidden min-w-max">
              {navLinks.map(({ id, href, label, icon }) => (
                <a
                  key={id}
                  href={href}
                  onClick={handleNavClick}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeSection === id
                      ? 'bg-primary-600/20 text-primary-400 border-l-2 border-primary-600'
                      : 'text-gray-400 hover:text-primary-400 hover:bg-secondary-700'
                  }`}
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
