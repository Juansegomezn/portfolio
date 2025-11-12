import type { FC } from 'react'
import Layout from './components/Layout'
import { 
  ProjectsSection, 
  AchievementSection, 
  EducationSection, 
  ContactSection, 
  AboutSection,
  FooterSection
} from './sections'
import './index.css'

const App: FC = () => {
  return (
    <Layout>
      <AboutSection />
      <ProjectsSection />
      <AchievementSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </Layout>
  )
}

export default App