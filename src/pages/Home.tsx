import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components'

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
        <Button variant="primary" size="lg">
          {t('home.cta')}
        </Button>
      </div>
    </section>
  )
}

export default Home