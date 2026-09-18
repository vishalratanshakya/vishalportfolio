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
    role: 'Fullstack Developer',
    period: 'Apr 2026 – Sep 2026',
    location: 'Gaur City Center, Noida, India',
    type: 'Full-time',
    summary: 'Lead developer building scalable full-stack web and mobile applications using modern React, Next.js, Node.js, and Flutter architectures.',
    responsibilities: [
      'Build and maintain full-stack web applications using React.js, Next.js, Node.js and Express.js.',
      'Develop responsive, accessible user interfaces using Tailwind CSS and modern CSS animation techniques.',
      'Design, engineer, and integrate high-throughput REST APIs with MongoDB and Firebase backends.',
      'Fix complex production bugs and continuously optimize frontend and database query performance.',
      'Perform thorough API validation and test automation using Postman.',
      'Collaborate actively within Agile sprint workflows, code reviews, and technical discussions.'
    ],
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Postman', 'Agile']
  },
  {
    id: 'tradesfolks',
    company: 'TradesFolks Pvt. Ltd.',
    role: 'Trainee Developer',
    period: 'Jan 2025 – Apr 2025',
    location: 'Noida, India',
    type: 'Traineership',
    summary: 'Frontend and web app developer intern crafting responsive user interfaces and integrating backend API endpoints.',
    responsibilities: [
      'Developed responsive, accessible web pages using HTML, CSS, JavaScript, and React.js.',
      'Integrated RESTful backend APIs and managed client-side application state.',
      'Debugged frontend layout bugs and cross-browser rendering inconsistencies.',
      'Followed Agile software development workflows and git version control protocols.',
      'Collaborated with senior engineers on internal enterprise web application modules.'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs', 'Git', 'Agile Workflows']
  }
];

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export const EDUCATIONS: EducationItem[] = [
  {
    institution: 'ABES Institute of Technology',
    degree: 'B.Tech in Computer Science (AI Specialization)',
    period: '2022 – 2025',
    location: 'Ghaziabad, India',
    details: 'Focus on Data Structures, Algorithms, Software Engineering, Artificial Intelligence, and Web Technologies.'
  },
  {
    institution: 'Dr. Bhimrao Ambedkar University',
    degree: 'Bachelor of Science (PCM)',
    period: '2019 – 2022',
    location: 'Agra, India',
    details: 'Core foundation in Physics, Chemistry, and Mathematics.'
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
