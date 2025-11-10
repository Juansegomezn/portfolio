import type { FC } from 'react'

const Home: FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Welcome
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Web UI Developer with expertise in React, TypeScript, and modern frontend development.
        </p>
      </div>
    </section>
  )
}

export default Home