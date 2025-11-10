import type { FC } from 'react'
import { Card, Badge } from '../components'
import { useEducation, useCertifications, useSkills } from '../hooks'

const EducationSkills: FC = () => {
  const { all: educationList } = useEducation()
  const { all: certificationList } = useCertifications()
  const { all: skillList } = useSkills()

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Continuous learning and professional development
          </p>

          <div className="space-y-6">
            {educationList.map((edu) => (
              <Card key={edu.id} hover>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-300 mb-1">
                      {edu.program}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  {edu.description}
                </p>
                {edu.focus && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-primary-300 font-semibold">FOCUS:</span>
                    <Badge label={edu.focus} variant="primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Professional certifications and achievements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationList.map((cert) => (
              <Card key={cert.id} hover>
                <div className="space-y-2">
                  <h3 className="font-bold text-primary-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 pt-2 border-t border-secondary-700">
                    {cert.date}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Expertise across multiple technologies and practices
          </p>

          <div className="space-y-8">
            {skillList.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h3 className="text-lg font-bold text-primary-300 mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-400 rounded-full" />
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill) => (
                    <Badge
                      key={skill}
                      label={skill}
                      variant="primary"
                      className="hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSkills
