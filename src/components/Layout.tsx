import type { FC, PropsWithChildren } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: t('common.home') },
    { path: '/projects', label: t('common.projects') },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: t('common.contact') },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark text-white flex flex-col">
      {/* Header */}
      <header className="bg-secondary-800 border-b border-primary-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center font-bold text-lg">
                JS
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Juan Sebastián
                </h1>
                <p className="text-xs text-primary-400">Web UI Developer</p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8 border-t border-secondary-700 pt-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(path)
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-primary-300'
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-blue rounded-t-full" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-900 border-t border-primary-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-4">ABOUT</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate about clean code, scalable architecture, and building exceptional user experiences.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                {navItems.map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-4">LOCATION</h3>
              <p className="text-gray-400 text-sm">
                Tunja, Colombia
                <br />
                jsga008@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-secondary-700 pt-8">
            <p className="text-center text-gray-500 text-sm">
              {t('common.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout