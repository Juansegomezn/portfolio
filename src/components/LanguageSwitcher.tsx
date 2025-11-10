import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <div className="flex gap-1 bg-secondary-700 p-1 rounded-lg border border-primary-800">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-4 py-1.5 rounded font-medium text-sm transition-all duration-300 ${
          i18n.language === 'en'
            ? 'bg-gradient-blue text-white shadow-lg'
            : 'text-gray-400 hover:text-primary-300'
        }`}
        aria-label="Switch to English"
        aria-pressed={i18n.language === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-4 py-1.5 rounded font-medium text-sm transition-all duration-300 ${
          i18n.language === 'es'
            ? 'bg-gradient-blue text-white shadow-lg'
            : 'text-gray-400 hover:text-primary-300'
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