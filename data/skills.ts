export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core programming languages I write fluently for web, server, and mobile environments.',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Async workflows, DOM, functional pattern, Closures, V8 optimization.' },
      { name: 'TypeScript', level: 'Advanced', description: 'Strict typing, generics, utility types, robust full-stack architecture.' },
      { name: 'Dart', level: 'Advanced', description: 'Cross-platform Flutter compilation, sound null safety, isolates.' },
      { name: 'Java', level: 'Intermediate', description: 'OOP fundamentals, data structures, backend utilities.' },
      { name: 'HTML5 & CSS3', level: 'Expert', description: 'Semantic markup, CSS Grid, Flexbox, custom animations, WCAG.' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    subtitle: 'Modern frontend, SSR, backend, and cross-platform mobile frameworks.',
    skills: [
      { name: 'React.js', level: 'Expert', description: 'Custom hooks, Context, Server Components, Virtual DOM performance.' },
      { name: 'Next.js (App Router)', level: 'Advanced', description: 'SSR, SSG, ISR, API Routes, Turbopack, SEO & Metadata optimization.' },
      { name: 'Node.js', level: 'Advanced', description: 'Event loop, non-blocking I/O, REST service clustering.' },
      { name: 'Express.js', level: 'Advanced', description: 'Middleware pipelines, authentication, API routing architecture.' },
      { name: 'Flutter', level: 'Advanced', description: 'Custom widgets, State management (Provider/Riverpod), native bridge.' },
      { name: 'Tailwind CSS', level: 'Expert', description: 'Custom design systems, dark mode palettes, responsive layouts.' }
    ]
  },
  {
    title: 'Database & Cloud Services',
    subtitle: 'Scalable datastores, serverless cloud functions, and real-time syncing.',
    skills: [
      { name: 'MongoDB', level: 'Advanced', description: 'Document modeling, aggregation pipelines, Mongoose ORM indexing.' },
      { name: 'Firebase', level: 'Advanced', description: 'Firestore database, Firebase Auth, Cloud Storage, Push Messaging.' },
      { name: 'SQL / Relational DBs', level: 'Intermediate', description: 'Schema design, JOIN queries, transaction isolation.' }
    ]
  },
  {
    title: 'Payment Integration',
    subtitle: 'Secure payment gateway checkout workflows and webhook handlers.',
    skills: [
      { name: 'Cashfree Payments', level: 'Advanced', description: 'Order creation, session token checkout, webhook signatures.' }
    ]
  },
  {
    title: 'Tools & Workflows',
    subtitle: 'Developer tools, version control, API testing, and collaborative processes.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branching models, PR code reviews, interactive rebase, CI/CD.' },
      { name: 'Postman', level: 'Advanced', description: 'API collection testing, mock servers, automated environment scripts.' },
      { name: 'Agile & Scrum', level: 'Advanced', description: 'Sprint planning, backlog grooming, daily standups, rapid delivery.' },
      { name: 'RESTful API Design', level: 'Expert', description: 'Resource modeling, status codes, JWT auth, rate limiting.' },
      { name: 'Responsive Web Design', level: 'Expert', description: 'Fluid typography, mobile-first breakpoints, touch-friendly UI.' }
    ]
  }
];
