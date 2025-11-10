import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Badge } from '../components'
import { useExperience } from '../hooks'

const Projects: FC = () => {
  const { t } = useTranslation()
  const { all: experiences } = useExperience()

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
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              title={`${exp.position} at ${exp.company}`}
              description={exp.description}
            >
              <div className="mt-4 space-y-4">
                {exp.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {exp.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      label={tech}
                      variant="primary"
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects