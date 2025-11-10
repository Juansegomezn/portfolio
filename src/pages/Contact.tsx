import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Button } from '../components'
import { useSocialLinks } from '../hooks'

const Contact: FC = () => {
  const { t } = useTranslation()
  const { all: socialLinks } = useSocialLinks()

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {t('contact.description')}
        </p>
        <div className="grid gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Card
                title={link.platform}
                description={link.label}
                hover
              >
                <Button
                  variant="outline"
                  size="md"
                  className="mt-4"
                >
                  Visit {link.platform}
                </Button>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact