import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Contact: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {t('contact.description')}
        </p>
        <div className="space-y-4">
          {/* Contact information and form will be added here */}
        </div>
      </div>
    </section>
  )
}

export default Contact