import type { FC } from 'react'
import Layout from './components/Layout'
import { 
  HeroSection, 
  ProjectsSection, 
  AchievementSection, 
  EducationSection, 
  ContactSection 
} from './sections'
import './index.css'

const App: FC = () => {
  return (
    <Layout>
      <ProjectsSection />
      <AchievementSection />
      <EducationSection />
      <ContactSection />
    </Layout>
  )
}

export default App