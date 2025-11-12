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
        background: 'linear-gradient(135deg, #0d0d0d 0%, #1f1f1f 100%)',
      }}
    >
      {/* Header */}
      <header className="bg-secondary-800 border-b border-primary-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #3d3dff 0%, #2d35b5 100%)',
                }}
              >
                JS
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Juan Sebastián
                </h1>
                <p className="text-xs text-primary-400">Web UI Developer</p>
              </div>
            </button>
            <LanguageSwitcher />
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default Layout