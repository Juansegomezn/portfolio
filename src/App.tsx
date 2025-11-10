import type { FC } from 'react'
import './styles/globals.css'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="py-6 px-4">
        <h1 className="text-2xl font-bold text-center">
          Juan Sebastián Gómez Ayala
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Web UI Developer
        </p>
      </header>
      <main className="container mx-auto px-4">
        {/* Main content will be rendered here */}
      </main>
    </div>
  )
}

export default App
