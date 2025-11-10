import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Projects: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          {t('projects.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {t('projects.description')}
        </p>
        <div className="grid gap-6">
          {/* Project cards will be rendered here */}
        </div>
      </div>
    </section>
  )
}

export default Projects