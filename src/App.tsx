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
import Navigation from './components/Navigation'

const App: FC = () => {
  return (
    <>
    <Navigation />
    
    <Layout>
      <AboutSection />
      <ProjectsSection />
      <AchievementSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </Layout>
    </>
  )
}

export default App