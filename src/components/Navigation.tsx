import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

interface NavLink {
  id: string
  label: string
  href: `#${string}`
}

const Navigation: FC = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('hero')

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'achievements', 'education', 'contact']
      
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
    { id: 'hero', label: t('common.home'), href: '#hero' },
    { id: 'projects', label: t('common.projects'), href: '#projects' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: t('common.contact'), href: '#contact' },
  ]

  return (
    <nav className="flex justify-evenly gap-8 border-t border-secondary-700 pt-4 flex-wrap">
      {navLinks.map(({ id, label, href }) => (
        <a
          key={id}
          href={href}
          className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
            activeSection === id
              ? 'text-primary-400'
              : 'text-gray-300 hover:text-primary-300'
          }`}
        >
          {label}
          {activeSection === id && (
            <span 
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
              style={{
                background: 'linear-gradient(90deg, #3d3dff 0%, #2d35b5 100%)',
              }}
            />
          )}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
