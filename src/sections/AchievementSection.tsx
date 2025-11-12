import type { FC } from 'react'
import { useExperience, useSkills } from '../hooks'

const AchievementSection: FC = () => {
  const { all: experiences } = useExperience()
  const { categories: skillCategories } = useSkills()

  // Calculate stats
  const currentJob = experiences.find(exp => exp.current)
  const yearsOfExperience = 2
  const skillCategoriesCount = skillCategories.length
  const totalProjects = experiences.length

  const stats = [
    {
      label: 'Years of Experience',
      value: `${yearsOfExperience}+`,
      icon: '📅',
    },
    {
      label: 'Skill Categories',
      value: skillCategoriesCount,
      icon: '🛠️',
    },
    {
      label: 'Projects Completed',
      value: totalProjects,
      icon: '✨',
    },
    {
      label: 'Quality Commitment',
      value: '100%',
      icon: '⭐',
    },
  ]

  return (
    <section 
      id="achievements"
      className="py-20 px-4 border-b border-primary-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            Achievements & Highlights
          </h2>
          <p className="text-gray-400 text-lg">
            Key milestones and accomplishments in my career
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-secondary-800 border border-secondary-700 p-6 rounded-lg text-center hover:border-primary-700 transition-colors"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Current Role */}
        {currentJob && (
          <div className="bg-secondary-800 border border-primary-800 rounded-lg p-8">
            <p className="text-primary-400 text-sm font-semibold mb-2">CURRENT ROLE</p>
            <h3 className="text-3xl font-bold text-white mb-2">
              {currentJob.position} at {currentJob.company}
            </h3>
            <p className="text-gray-300 mb-6">
              {currentJob.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentJob.technologies.slice(0, 5).map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-primary-900/50 text-primary-300 border border-primary-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default AchievementSection
