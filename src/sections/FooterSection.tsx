import type { FC } from 'react'

const FooterSection: FC = () => {

  return (
    <footer className="bg-secondary-900 border-t border-primary-900">
      {/* Divider */}
      <div className="border-t border-secondary-700 pt-8">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Juan Sebastian Gomez Ayala. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, TypeScript & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
