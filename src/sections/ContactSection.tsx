import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import Button from '../components/Button'
import { useSocialLinks } from '../hooks'

const ContactSection: FC = () => {
  const { t } = useTranslation()
  const { all: socialLinks } = useSocialLinks()

  const socialIcons: Record<string, string> = {
    LinkedIn: '💼',
    GitHub: '🔗',
    Email: '✉️',
  }

  return (
    <section 
      id="contact"
      className="py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
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
      </div>
    </section>
  )
}

export default ContactSection
