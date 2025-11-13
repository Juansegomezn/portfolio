import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'

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
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'achievements', 'education', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }

      // Auto-close mobile menu when scrolling
      if (isOpen) setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    else document.removeEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const navLinks: NavLink[] = [
    { id: 'about', label: t('common.home'), href: '#about', icon: '🏠' },
    { id: 'projects', label: t('common.projects'), href: '#projects', icon: '💼' },
    { id: 'achievements', label: 'Achievements', href: '#achievements', icon: '⭐' },
    { id: 'education', label: 'Education', href: '#education', icon: '🎓' },
    { id: 'contact', label: t('common.contact'), href: '#contact', icon: '✉️' },
  ]

  const handleNavClick = () => setIsOpen(false)

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col gap-3">
        {navLinks.map(({ id, href, icon, label }) => (
          <a
            key={id}
            href={href}
            title={label}
            className={`group flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 shadow-md ${
              activeSection === id
                ? 'bg-primary-600 text-white shadow-primary-600/40'
                : 'bg-secondary-800 text-gray-400 hover:text-primary-400 border border-primary-900 hover:border-primary-600'
            }`}
          >
            <span className="text-xl">{icon}</span>
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-800 border border-primary-900 text-gray-400 hover:text-primary-400 transition-all duration-300 shadow-md"
        >
          <span className="text-2xl">{isOpen ? '✕' : '≡'}</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 bg-secondary-900 border border-primary-900 rounded-xl shadow-lg overflow-hidden w-48 animate-fade-in">
            {navLinks.map(({ id, href, label, icon }) => (
              <a
                key={id}
                href={href}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                  activeSection === id
                    ? 'bg-primary-600/20 text-primary-400 border-l-2 border-primary-600'
                    : 'text-gray-400 hover:text-primary-400 hover:bg-secondary-800'
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
  )
}

export default Navigation
