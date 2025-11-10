import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Badge } from '../components'
import { useExperience } from '../hooks'

const Projects: FC = () => {
  const { t } = useTranslation()
  const { all: experiences } = useExperience()

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('projects.description')}
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              hover
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-300 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    @ <span className="font-semibold text-primary-400">{exp.company}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <span className="text-xs text-gray-500">
                    {exp.startDate} → {exp.endDate || 'Present'}
                  </span>
                  {exp.current && (
                    <span className="bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-700">
                      Active
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              {exp.highlights.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary-300 mb-2 uppercase">Key Highlights</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-primary-400 mt-1">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-secondary-700">
                <p className="text-xs font-semibold text-primary-300 mb-3 uppercase">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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