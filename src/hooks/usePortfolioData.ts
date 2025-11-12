import { useCallback } from 'react'
import type { Experience, Skill, SocialLink } from '../data/types'
import {
  experiences as experiencesData,
  skills as skillsData,
  socialLinks as socialLinksData,
  education as educationData,
  certifications as certificationsData,
} from '../data/portfolio-data'


export const useExperience = (): { all: Experience[]; current: Experience | undefined; total: number } => {
  const getCurrentExperience = useCallback((): Experience | undefined => {
    return experiencesData.find((exp) => exp.current)
  }, [])

  const getAllExperiences = useCallback((): Experience[] => {
    return experiencesData.sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    )
  }, [])

  return {
    all: getAllExperiences(),
    current: getCurrentExperience(),
    total: experiencesData.length,
  }
}

export const useSkills = () => {
  const getSkillsByCategory = useCallback((category: string): string[] => {
    const skill = skillsData.find((s) => s.category === category)
    return skill?.items ?? []
  }, [])

  const getAllSkills = useCallback((): Skill[] => {
    return skillsData
  }, [])

  return {
    all: getAllSkills(),
    byCategory: getSkillsByCategory,
    categories: skillsData.map((s) => s.category),
  }
}

export const useSocialLinks = () => {
  const getLinkByPlatform = useCallback(
    (platform: string): SocialLink | undefined => {
      return socialLinksData.find((link) => link.platform === platform)
    },
    []
  )

  return {
    all: socialLinksData,
    byPlatform: getLinkByPlatform,
  }
}

export const useEducation = () => {
  return {
    all: educationData,
    total: educationData.length,
  }
}

export const useCertifications = () => {
  return {
    all: certificationsData,
    total: certificationsData.length,
  }
}
