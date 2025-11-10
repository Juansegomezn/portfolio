import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Button } from '../components'
import { useSocialLinks } from '../hooks'

const Contact: FC = () => {
  const { t } = useTranslation()
  const { all: socialLinks } = useSocialLinks()

  const socialIcons: Record<string, string> = {
    LinkedIn: '💼',
    GitHub: '🔗',
    Email: '✉️',
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline group"
            >
              <Card hover className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">
                    {socialIcons[link.platform] || '🔗'}
                  </div>
                  <span className="text-primary-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {link.platform}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {link.label}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                >
                  Connect
                </Button>
              </Card>
            </a>
          ))}
        </div>

        {/* Email Alternative */}
        <div className="bg-gradient-to-r from-primary-900/30 to-secondary-900 border border-primary-800 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Prefer email?
          </h3>
          <p className="text-gray-400 mb-4">
            Send me a direct message at
          </p>
          <a
            href="mailto:jsga008@gmail.com"
            className="inline-block px-6 py-3 bg-gradient-blue text-white rounded-lg hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 font-medium"
          >
            jsga008@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact