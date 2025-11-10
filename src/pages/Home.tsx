import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          {t('home.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {t('home.description')}
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          {t('home.cta')}
        </button>
      </div>
    </section>
  )
}

export default Home