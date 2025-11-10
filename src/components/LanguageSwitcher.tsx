import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        aria-label="Switch to English"
        aria-pressed={i18n.language === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 rounded font-medium transition-colors ${
          i18n.language === 'es'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        aria-label="Switch to Spanish"
        aria-pressed={i18n.language === 'es'}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageSwitcher