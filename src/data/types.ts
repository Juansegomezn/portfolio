/**
 * Core data types for the portfolio application
 * Following TypeScript strict mode best practices
 */

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  role: string
  team: string
  problem: string
  solution: string
  impact: string
  learnings: string[]
  technologies: string[]
  startDate: string
  endDate: string
  featured: boolean
  links?: {
    github?: string
    demo?: string
    article?: string
  }
}

export interface Education {
  id: string
  institution: string
  program: string
  startDate: string
  endDate: string
  description: string
  focus?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  highlights: string[]
  technologies: string[]
}
