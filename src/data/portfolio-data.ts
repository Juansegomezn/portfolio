import type { Experience, Skill, SocialLink } from './types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Globant',
    position: 'Web UI Developer',
    startDate: '2024-08',
    endDate: null,
    current: true,
    description:
      'Developed scalable and pixel-perfect UI components using React, TypeScript, and MUI. Integrated RESTful APIs with clean, modular code following ESLint and SonarQube standards.',
    highlights: [
      'Led UI development for ChatGPT wrapper project (Landing Page, Dashboard, Settings)',
      'Delivered internal tech talk on SOLID Principles and AI Tips',
      'Maintained high code quality standards with SonarQube',
    ],
    technologies: [
      'React',
      'TypeScript',
      'MUI',
      'API Integration',
      'Jest',
      'Testing Library',
      'ESLint',
      'SonarQube',
    ],
  },
  {
    id: '2',
    company: 'Globant',
    position: 'College Trainee',
    startDate: '2023-11',
    endDate: '2024-07',
    current: false,
    description:
      'Built a contact manager app and contributed to internal tools. Designed and deployed Dashboard AppScript + Looker Studio for centralized analytics.',
    highlights: [
      'Developed React Contact List with Redux and SCSS',
      'Contributed to Glober-Market internal tool',
      'Created analytics dashboard with AppScript and Looker Studio',
    ],
    technologies: ['React', 'Redux', 'SCSS', 'Jest', 'MUI', 'AppScript', 'Git'],
  },
  {
    id: '3',
    company: 'Semillero SENNOVA',
    position: 'Web Developer Monitor',
    startDate: '2023-08',
    endDate: '2023-11',
    current: false,
    description:
      'Contributed to a research-based educational platform using React and Bootstrap. Developed interactive UI components and improved accessibility.',
    highlights: [
      'Built interactive UI components with React Router',
      'Improved accessibility standards',
      'Collaborated with academic teams',
    ],
    technologies: ['React', 'Bootstrap', 'Reactstrap', 'React Icons', 'React Router'],
  },
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'SASS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      'React',
      'Redux',
      'Styled Components',
      'MUI',
      'Bootstrap',
      'React Router',
      'TailwindCSS',
    ],
  },
  {
    category: 'Testing & Quality',
    items: ['Jest', 'Testing Library', 'ESLint', 'SonarQube', 'Unit Testing'],
  },
  {
    category: 'Architecture & Design',
    items: [
      'MVC',
      'SPA',
      'Component Reusability',
      'API Integration',
      'Clean Code',
      'SOLID Principles',
      'Responsive Design',
    ],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'GitHub', 'GitLab', 'AppScript', 'Figma', 'Agile', 'SCRUM'],
  },
]

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/juan-gomez-118b8b1b8/',
    icon: 'linkedin',
    label: 'LinkedIn Profile',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/JuanSeGArtor',
    icon: 'github',
    label: 'GitHub Profile',
  },
  {
    platform: 'Email',
    url: 'mailto:jsga008@gmail.com',
    icon: 'mail',
    label: 'Send Email',
  },
]
