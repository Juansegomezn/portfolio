import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
// import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/layout/Footer"
import { Skills } from "@/sections/Skills"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
