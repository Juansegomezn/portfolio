import type { FC } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const Header: FC = () => {
  return (
    <header className="bg-secondary-800 border-b border-primary-900 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
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
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
