import type { FC } from 'react'
import Layout from './components/Layout'
import { About, Footer } from './components'
import { 
  ProjectsSection, 
  AchievementSection, 
  EducationSection, 
  ContactSection 
} from './sections'
import './index.css'

const App: FC = () => {
  return (
    <Layout>
      <About />
      <ProjectsSection />
      <AchievementSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </Layout>
  )
}

export default App