export interface Job { when: string; title: string; org: string; logo: string; bullets: string[]; }
export interface Project { title: string; description: string; image: string; tags: string[]; link?: string; }
export interface SkillGroup { title: string; items: string[]; }
export interface Awards { title: string; detail: string; images: string[];}
export interface Entry { title: string; detail: string; image: string; }

export const PROFILE = {
  name: 'Carlo John Astudillo',
  shortNameLogo: 'logopic/CAlogo-removebg.png',
  shortName: ['Carlo', 'Astudillo'],
  photo: 'images/PhotoPort.png',
  photoBg: 'background/bgimage.jpg',
  headline: 'I build and ship backend services.',
  lead: 'Software engineer working with Java, Spring Boot, Kubernetes and Azure DevOps',
  email: 'carloasto11@gmail.com',
  github: 'https://github.com/ast2u',
  linkedin: 'https://www.linkedin.com/in/carlo-john-astudillo-34b75b1b7/',
  jobstreet: 'https://ph.jobstreet.com/profiles/carlojohn-astudillo-rqbCNWzBz2',
  cv: 'file-assets/CV_ASTUDILLO-2026-oct152026.pdf',
  facts: [
    { label: 'Exist Software Labs', value: 'Software Engineer, since 2025' },
    { label: 'Summa Cum Laude', value: 'BSIT, NU Philippines' }
  ]
};

// Newest first. Add real results and numbers to the bullets.
export const JOBS: Job[] = [
  {
    when: 'Apr 2025 – Present',
    title: 'Software Engineer',
    org: 'Exist Software Labs, Inc. · Strategic Solutions – Energy',
    logo: 'logopic/e-logo.png',
    bullets: [
      'Develop and enhance Java/Spring Boot microservices and backend applications across 4 projects, handling approximately 16–30 services.',
      'Create Python scripts and notebook-based jobs for data processing and automation.',
      'Build and maintain CI/CD pipelines in Azure DevOps, with images stored in Azure Container Registry.',
      'Investigate production issues through log analysis, troubleshooting, and root cause identification.',
      'Manage Kubernetes resources and deployments in on-premises environments.',
      'Perform database operations, including data transfers between environments, SQL views, and functions.',
      'Deliver feature enhancements and bug fixes while providing development support across multiple projects.',
      'Coordinate with clients and internal teams to investigate issues and implement practical solutions.',
      'Support application deployments, maintenance, and reliability across development and production environments.'
    ]
  },
  {
    when: 'Nov 2023 – Jun 2024',
    title: 'Content Services & DevOps Intern',
    org: 'GHD Group Philippines',
    logo: 'logopic/Black-logo-ghd.jpg',
    bullets: [
        'Contributed to content service migration using GovStack and WordPress.',
        'Gained hands-on experience with DevOps and CI/CD using GitHub and Octopus Deploy.',
        'Participated in application deployment and troubleshooting.'
    ]
  },
  {
    when: 'Sep – Oct 2019',
    title: 'Internship Trainee, Finance',
    org: 'Coca-Cola Beverages Philippines',
    logo: 'logopic/coca-cola-beverages-logo.png',
    bullets: [
        'Managed and organized documents and customer orders.',
        'Recorded and tracked orders using Microsoft Excel.',
        'Supported administrative and order management tasks.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Help Ticket System',
    description: 'Multi-module support app. Admins manage employees and roles, and employees create, update and track tickets.',
    image: 'projects/helpdesk.png',
    tags: ['Spring Boot', 'Angular', 'REST'],
    link: 'https://github.com/ast2u/ecc-helpdesk-program'
  },
  {
    title: 'BikeTrack',
    description: 'Mobile app that records cyclist trip data to help urban traffic planning, with an SOS feature for safety.',
    image: 'projects/project_biketrack.png',
    tags: ['Mobile', 'Android'],
    link: 'https://github.com/ast2u/BikeTrack'
  },
  {
    title: 'Python Phishing Detector',
    description: 'Machine learning notebook that predicts whether a website or email is phishing from a labeled dataset.',
    image: 'projects/pythoncode.png',
    tags: ['Python', 'Jupyter', 'ML'],
    link: 'https://github.com/ast2u/Python-Phishing-Detector'
  },
  {
    title: 'CinemaGo!',
    description: 'Movie review and ticket booking mobile app where users rate movies and pick a supported theatre.',
    image: 'projects/cinemago.png',
    tags: ['OutSystems', 'Mobile']
  },
  {
    title: 'Mobile Game Project',
    description: 'Two to three Android games built in Java with sprites, positioning and custom art, including Leap of Faith.',
    image: 'projects/gamesample.png',
    tags: ['Java', 'Android Studio']
  },
  {
    title: 'Library System',
    description: 'Thesis project that helps a school library monitor its books and read ISBNs. Stopped in 2019 because of the pandemic.',
    image: 'projects/books-bookstore-book-reading-159711.jpeg',
    tags: ['Thesis', 'Java'],
    link: 'https://github.com/ast2u/Library-system'
  }
];

export const SKILLS: SkillGroup[] = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Spring Framework', 'Python', 'C#', 'SQL'] },
  { title: 'DevOps & Cloud', items: ['Kubernetes', 'Docker', 'CI/CD', 'Azure DevOps', 'ACR', 'AWS'] },
  { title: 'Frontend', items: ['Angular', 'JavaScript', 'HTML/CSS', 'WordPress'] },
  { title: 'Design', items: ['UI/UX', 'Photoshop', 'Video editing'] }
];

export const EDUCATION: Entry[] = [
  { title: 'BS Information Technology, Mobile & Internet Technology', 
    detail: 'NU Philippines – Fairview, 2024',
    image: 'logopic/nuf.png'
  },
  { title: 'Senior High School, ICT', 
    detail: 'AMA Computer College, 2020',
    image: 'logopic/amaes.png'
  },
  { title: 'Junior High School', 
    detail: 'National College of Business and Arts, 2018',
    image: 'logopic/ncbalogo.jpg'
   }
];

export const AWARDS: Awards[] = [
  { title: 'Summa Cum Laude', 
    detail: 'NU Philippines – Fairview',
    images: [
      'images/awards2.jpg',
      'images/awards1.jpg',
      'images/awards3.jpg'
    ]
  },
  { title: 'Best Mobile Application', 
    detail: 'IoT Symposium, NU Philippines – Fairview',
    images: [
      'images/awards4.jpg',
      'images/iotsymposium.jpg',
    ]
  }
];
