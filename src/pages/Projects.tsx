import type { FC } from 'react'

const Projects: FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Projects
        </h2>
        <div className="grid gap-6">
          {/* Project cards will be rendered here */}
        </div>
      </div>
    </section>
  )
}

export default Projects