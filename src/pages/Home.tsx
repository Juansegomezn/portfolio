import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../components'
import { useExperience, useSkills } from '../hooks'

const Home: FC = () => {
  const { t } = useTranslation()
  const { current: currentJob, total: totalExperience } = useExperience()
  const { categories: skillCategories } = useSkills()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4 border-b border-primary-900">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                {t('home.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                {t('home.description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  {t('home.cta')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 border-b border-secondary-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary-800 border border-secondary-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {totalExperience}+
              </div>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-secondary-800 border border-secondary-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {skillCategories.length}
              </div>
              <p className="text-gray-400">Skill Categories</p>
            </div>
            <div className="bg-secondary-800 border border-secondary-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">
                100%
              </div>
              <p className="text-gray-400">Commitment to Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Role */}
      {currentJob && (
        <section className="py-12 px-4 border-b border-secondary-800">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-300 mb-6">Currently Working At</h3>
            <div className="bg-secondary-800 border border-primary-800 p-8 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    {currentJob.position}
                  </h4>
                  <p className="text-primary-400 font-medium">@ {currentJob.company}</p>
                </div>
                <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-700">
                  Current
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                {currentJob.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentJob.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-xs border border-primary-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Home