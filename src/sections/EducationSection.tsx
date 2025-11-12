import type { FC } from 'react'
import { useEducation, useCertifications, useSkills } from '../hooks'
import { Card, Badge } from '../components'

const EducationSection: FC = () => {
  const { all: educationList } = useEducation()
  const { all: certifications } = useCertifications()
  const { all: skillCategories } = useSkills()

  return (
    <section 
      id="education"
      className="py-20 px-4 border-b border-primary-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            Education & Learning
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🎓</span> Education
          </h3>
          <div className="space-y-4">
            {educationList.map((edu) => (
              <Card key={edu.id} hover>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {edu.program}
                    </h4>
                    <p className="text-primary-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-300">
                  {edu.description}
                </p>
                {edu.focus && (
                  <p className="text-sm text-gray-400 mt-2">
                    <span className="font-semibold text-primary-300">Focus:</span> {edu.focus}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">📜</span> Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.id} hover className="flex flex-col">
                <h4 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-primary-400 font-medium text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm mb-3 flex-grow">
                  Issued: {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary-900/50 text-primary-300 border border-primary-700 rounded-lg text-sm font-medium hover:bg-primary-900 transition-colors"
                  >
                    View Credential →
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">💡</span> Skills & Technologies
          </h3>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.category}>
                <h4 className="text-lg font-semibold text-primary-300 mb-3">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      label={skill} 
                      variant="primary"
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

export default EducationSection
