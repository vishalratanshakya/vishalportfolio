export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'meganods',
    company: 'Meganods IT Solutions',
    role: 'Full Stack Developer',
    period: 'Apr 2026 – Sep 2026',
    location: 'Gaur City Center, Noida, India',
    type: 'Full-time',
    summary:
      'Worked on developing and improving full-stack web and mobile applications using modern JavaScript technologies and Flutter, contributing to frontend interfaces, backend integration, and application functionality.',
    responsibilities: [
      'Developed and improved responsive web application interfaces using React.js and Next.js.',
      'Worked on frontend components, page layouts, reusable UI elements, and user interactions.',
      'Contributed to backend functionality and API integration using Node.js and Express.js.',
      'Worked with MongoDB and Firebase for application data and related backend services where applicable.',
      'Used Tailwind CSS to build consistent, responsive user interfaces and Postman to test API endpoints.',
      'Collaborated on web and mobile application features, including Flutter-based development where applicable.'
    ],
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Postman', 'Agile']
  },
  {
    id: 'tradesfolks',
    company: 'TradesFolks Pvt. Ltd.',
    role: 'Web Developer Trainee',
    period: 'Jan 2025 – Apr 2025',
    location: 'Noida, India',
    type: 'Traineership',
    summary:
      'Gained practical experience in web development through hands-on tasks, developing responsive website layouts, and learning structured development workflows.',
    responsibilities: [
      'Gained practical experience in web development through hands-on tasks and practical feature implementations.',
      'Worked on website layouts and responsive user interface components using HTML, CSS, JavaScript, and React.',
      'Practiced implementing website functionality and debugging common frontend and cross-browser issues.',
      'Built practical experience with code organization, version control, and maintaining website components.'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs', 'Git', 'Agile Workflows']
  }
];

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'btech',
    institution: 'ABES Institute of Technology',
    degree: 'B.Tech in Computer Science (AI Specialization)',
    period: '2022 – 2025',
    location: 'Ghaziabad, Uttar Pradesh, India',
    details: 'Focus on Data Structures, Algorithms, Software Engineering, Artificial Intelligence, and Web Technologies.'
  },
  {
    id: 'bsc',
    institution: 'Dr. Bhimrao Ambedkar University',
    degree: 'B.Sc. in Physics, Chemistry and Mathematics (PCM)',
    period: '2019 – 2022',
    location: 'Agra, Uttar Pradesh, India',
    details: 'Core foundation in Physics, Chemistry, and Mathematics.'
  },
  {
    id: 'class12',
    institution: 'National Inter College',
    degree: 'Class 12th — Intermediate',
    period: '2019',
    location: 'Bhongaon, Mainpuri, Uttar Pradesh, India',
    details: 'Senior secondary intermediate education.'
  },
  {
    id: 'class10',
    institution: 'National Inter College',
    degree: 'Class 10th — High School',
    period: '2017',
    location: 'Bhongaon, Mainpuri, Uttar Pradesh, India',
    details: 'High school secondary education.'
  }
];

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Web Developer Internship Certificate',
    issuer: 'TradesFolks Pvt. Ltd.',
    year: '2025'
  },
  {
    title: 'MERN Stack Certification',
    issuer: 'ABESIT College (Summer Internship)',
    year: '2024'
  },
  {
    title: 'Java Internship Certificate',
    issuer: 'AppSquadz Software Pvt. Ltd.',
    year: '2023'
  }
];
