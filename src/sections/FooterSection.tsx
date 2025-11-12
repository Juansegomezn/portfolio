import type { FC } from 'react'

interface FooterLink {
  label: string
  href: string
}

const FooterSection: FC = () => {
  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks: FooterLink[] = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/juansegartor' },
    { label: 'GitHub', href: 'https://github.com/JuanSeGArtor' },
    { label: 'Email', href: 'mailto:jsga008@gmail.com' },
  ]

  return (
    <footer className="bg-secondary-900 border-t border-primary-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 mb-4 uppercase">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about clean code, scalable architecture, and building exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 mb-4 uppercase">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 mb-4 uppercase">Connect</h3>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 mb-4 uppercase">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                📍 Tunja, Colombia
              </p>
              <p>
                ✉️ jsga008@gmail.com
              </p>
              <p className="pt-2 text-xs">
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Juan Sebastián Gómez. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
