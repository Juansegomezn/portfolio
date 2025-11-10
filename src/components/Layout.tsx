import type { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="py-6 px-4 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-4">
            Juan Sebastián Gómez Ayala
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Web UI Developer
          </p>
          <nav className="flex justify-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Home"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4">
        {children}
      </main>
      <footer className="py-6 px-4 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Juan Sebastián Gómez Ayala</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout