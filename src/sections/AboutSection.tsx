import type { FC } from 'react'

const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 border-b border-primary-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Get to know who I am and what drives my passion for web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Web UI Developer with a strong commitment to clean code and scalable architecture. 
                My journey in web development has been driven by a desire to create beautiful, functional interfaces 
                that solve real problems for users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building responsive, accessible web applications using modern technologies. 
                I focus on writing maintainable code following SOLID principles and best practices in web development.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">My Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe that great software is built on a foundation of clean architecture and thoughtful design. 
                Every line of code matters, and I strive for 100% quality in everything I build.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">When I'm Not Coding</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm continuously learning through Platzi courses, exploring new technologies, and staying updated 
                with industry trends. I'm based in Tunja, Colombia, and passionate about contributing to the tech community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
