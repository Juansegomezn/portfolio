import type { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <header className="py-6 px-4 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              Juan Sebastián Gómez Ayala
            </h1>
            <LanguageSwitcher />
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            {t('common.web_ui_developer', 'Web UI Developer')}
          </p>
          <nav className="flex justify-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={t('common.home')}
            >
              {t('common.home')}
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={t('common.projects')}
            >
              {t('common.projects')}
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={t('common.contact')}
            >
              {t('common.contact')}
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 flex-grow">
        {children}
      </main>
      <footer className="py-6 px-4 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>{t('common.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout