import type { Experience, Skill, SocialLink, Education, Certification } from './types'

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
      'Delivered internal tech talk: "Code that Lasts: SOLID Principles and AI Tips" (Oct 2025)',
      'Maintained high code quality standards with SonarQube',
    ],
    technologies: [
      'React',
      'TypeScript',
      'MUI',
      'GitLab',
      'Jest',
      'Testing Library',
      'SonarQube',
      'ESLint',
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
      'Contributed to Glober-Market internal tool for process optimization',
      'Created analytics dashboard with AppScript and Looker Studio',
    ],
    technologies: ['React', 'Redux', 'SCSS', 'Jest', 'MUI', 'AppScript', 'Git', 'GitHub'],
  },
  {
    id: '3',
    company: 'Semillero SENNOVA',
    position: 'Web Developer Monitor',
    startDate: '2023-08',
    endDate: '2023-11',
    current: false,
    description:
      'Contributed to a research-based educational platform using React and Bootstrap. Developed interactive UI components and improved accessibility with React Router.',
    highlights: [
      'Built interactive UI components with React Router',
      'Improved accessibility standards across platform',
      'Collaborated closely with academic teams, fostering communication and adaptability',
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

export const education: Education[] = [
  {
    id: '1',
    institution: 'SENA - CEGAFE',
    program: 'Technologist in Software Analysis and Development',
    startDate: '2022',
    endDate: '2024',
    description:
      'Focus on software design, development, evaluation, and quality control following industry standards.',
    focus: 'Software Engineering & Clean Code',
  },
  {
    id: '2',
    institution: 'Platzi',
    program: 'Self-Paced Online Learning',
    startDate: '2021',
    endDate: 'Present',
    description: 'Continuous professional development through various technical courses and certifications.',
  },
]

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Frontend Development with React',
    issuer: 'Platzi',
    date: '2023',
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    issuer: 'Platzi',
    date: '2022',
  },
  {
    id: '3',
    title: 'Agile + Scrum Foundations',
    issuer: 'Platzi',
    date: '2023',
  },
  {
    id: '4',
    title: 'Productivity for Developers',
    issuer: 'Platzi',
    date: '2023',
  },
  {
    id: '5',
    title: 'LinkedIn Profile Optimization',
    issuer: 'Platzi',
    date: '2024',
  },
]
