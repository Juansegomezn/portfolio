import type { FC } from 'react'
import { useExperience } from '../hooks'
import { Card, Badge } from '../components'

const ProjectsSection: FC = () => {
  const { all: experiences } = useExperience()

  return (
    <section 
      id="projects"
      className="py-20 px-4 border-b border-primary-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and projects I've built
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <Card key={experience.id} hover>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.position}
                  </h3>
                  <p className="text-primary-400 font-medium">
                    {experience.company} • {experience.startDate} {!experience.current && `- ${experience.endDate}`} {experience.current && '(Current)'}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                {experience.description}
              </p>

              {experience.highlights && experience.highlights.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary-300 mb-2">
                    Key Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="primary" />
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
