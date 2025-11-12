import type { FC, PropsWithChildren } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      className="min-h-screen text-white flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #202b37ff 0%, #1f1f1f 100%)',
      }}
    >
      <Navigation />

      <header className="bg-secondary-800 border-b border-primary-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div>
                <h1 className="text-xl font-bold text-white">
                  Juan Gomez
                </h1>
                <p className="text-xs text-primary-400">Software Developer</p>
              </div>
            </button>
            
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-900 border-t border-primary-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-4">ABOUT</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate about clean code, scalable architecture, and building exceptional user experiences.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#achievements" className="text-gray-400 hover:text-primary-400 transition-colors">Achievements</a>
                </li>
                <li>
                  <a href="#education" className="text-gray-400 hover:text-primary-400 transition-colors">Education</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-4">LOCATION</h3>
              <p className="text-gray-400 text-sm">
                Tunja, Colombia
                <br />
                jsga008@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-secondary-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Juan Sebastian Gomez Ayala. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout