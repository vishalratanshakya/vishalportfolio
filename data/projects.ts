export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  technologies: string[];
  website?: string;
  github?: string;
  description: string;
  longDescription: string;
  features: string[];
  role: string;
  year: string;
  stats?: { label: string; value: string }[];
  screenshots: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'homecraft-services',
    slug: 'homecraft-services',
    number: '01',
    title: 'Home Craft Services',
    category: 'On-Demand Services Platform',
    tagline: 'Connecting users with verified service professionals seamlessly',
    heroImage: '/images/projects/homecraft-services/hero.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cashfree', 'Next.js', 'React.js', 'Node.js', 'MongoDB'],
    website: 'https://home-craft-services.vercel.app/',
    github: 'https://github.com/vishalratanshakya',
    description: 'Home Craft Services is an all-in-one on-demand service booking marketplace connecting clients with service partners across home care, repairs, and beauty.',
    longDescription: 'Home Craft Services is an on-demand services platform designed to streamline service booking workflows across mobile and web. Built with Flutter and Dart for cross-platform apps, alongside a Next.js and Node.js web admin portal, Home Craft Services handles user service discovery, real-time partner dispatching, date/slot selection, automated payment integration via Cashfree, and real-time push notifications powered by Firebase.',
    features: [
      'Multi-panel ecosystem (User, Service Partner, and Admin)',
      'Smart service discovery with keyword search and category filtering',
      'Interactive date & time slot booking engine',
      'Seamless Cashfree payment gateway integration',
      'Real-time booking updates and push notifications',
      'Partner onboarding, approval, and dispatch workflows'
    ],
    role: 'Full Stack & Mobile Lead Developer',
    year: '2026',
    stats: [
      { label: 'Platform Architecture', value: '3 Panels' },
      { label: 'Booking Time', value: '< 30s' },
      { label: 'Payment Gateway', value: 'Cashfree' }
    ],
    screenshots: [
      '/images/projects/homecraft-services/hero.jpg'
    ]
  },
  {
    id: 'talentspark',
    slug: 'talentspark',
    number: '02',
    title: 'TalentSpark',
    category: 'Multi-Vendor E-Commerce Platform',
    tagline: 'A modern multi-vendor marketplace connecting creators and buyers',
    heroImage: '/images/projects/talentspark/hero.jpg',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    website: 'https://telentspark-black.vercel.app/',
    github: 'https://github.com/vishalratanshakya',
    description: 'A robust multi-vendor e-commerce platform with vendor dashboards, product catalogs, shopping carts, and order fulfillment workflows.',
    longDescription: 'TalentSpark enables multiple independent vendors to set up shop, list products, track orders, and manage inventory within a unified web ecosystem. Built with Next.js and Node.js/Express, the platform provides ultra-fast product browsing, responsive cart checkout, secure JWT authentication, and structured MongoDB data modeling.',
    features: [
      'Multi-vendor storefront and dashboard creation',
      'Dynamic product listing with rich media uploading',
      'Shopping cart and smooth multi-step checkout workflow',
      'REST API backend built with Express.js and MongoDB',
      'Responsive editorial UI crafted with Tailwind CSS'
    ],
    role: 'Full Stack Developer',
    year: '2025',
    stats: [
      { label: 'Architecture', value: 'MERN Stack' },
      { label: 'UI Speed', value: '100 Core Web Vitals' },
      { label: 'Vendor Portal', value: 'Integrated' }
    ],
    screenshots: [
      '/images/projects/talentspark/hero.jpg'
    ]
  },
  {
    id: 'rydo',
    slug: 'rydo',
    number: '03',
    title: 'Rydo',
    category: 'Ride Booking & Driver Management App',
    tagline: 'Real-time urban mobility and driver dispatch platform',
    heroImage: '/images/projects/rydo/hero.jpg',
    technologies: ['Flutter', 'Dart', 'MongoDB', 'Node.js', 'Express.js'],
    github: 'https://github.com/vishalratanshakya',
    description: 'A mobile ride-booking application designed around modern ride-hailing workflows, live location updates, and driver management.',
    longDescription: 'Rydo is an original ride-hailing mobile application focused on high-performance geolocation interactions, instant fare calculation, driver availability management, and smooth customer booking loops. Engineered with Flutter and Dart for high FPS smooth rendering across iOS and Android.',
    features: [
      'Real-time passenger ride booking and destination selection',
      'Driver interface for ride requests, acceptance, and trip status',
      'Location-based fare estimation and map routing interface',
      'Ride status tracking with arrival time calculations'
    ],
    role: 'Mobile App Developer',
    year: '2025',
    stats: [
      { label: 'Framework', value: 'Flutter / Dart' },
      { label: 'Target Platforms', value: 'iOS & Android' },
      { label: 'Latency', value: '< 100ms API Response' }
    ],
    screenshots: [
      '/images/projects/rydo/hero.jpg'
    ]
  },
  {
    id: 'sujata-fine-jewels',
    slug: 'sujata-fine-jewels',
    number: '04',
    title: 'SUJATA Fine Jewels',
    category: 'Luxury Jewellery E-Commerce',
    tagline: 'High-end digital boutique for handcrafted fine jewelry',
    heroImage: '/images/projects/sujata/hero.jpg',
    technologies: ['TypeScript', 'Next.js', 'React.js', 'MongoDB', 'Tailwind CSS'],
    website: 'https://sujata-fine-jewels.vercel.app/',
    github: 'https://github.com/vishalratanshakya',
    description: 'A luxury e-commerce experience crafted with high-precision typography, interactive product views, and sleek dark bronze aesthetic.',
    longDescription: 'SUJATA Fine Jewels redefines online luxury shopping with an editorial design philosophy. Designed using Next.js and TypeScript, the site features fluid micro-interactions, high-resolution jewelry collection showcases, bespoke order requests, and an immersive dark luxury aesthetic.',
    features: [
      'Editorial luxury jewelry catalog presentation',
      'High-resolution imagery viewer with macro product zooming',
      'Filtered catalog browsing by precious metals and gemstone',
      'Mobile-first responsive luxury typography and smooth animations'
    ],
    role: 'Frontend & Full Stack Developer',
    year: '2025',
    stats: [
      { label: 'Aesthetic Focus', value: 'Dark Luxury' },
      { label: 'Stack', value: 'Next.js + TypeScript' },
      { label: 'Optimization', value: 'Next Image CDN' }
    ],
    screenshots: [
      '/images/projects/sujata/hero.jpg'
    ]
  },
  {
    id: 'blinkit',
    slug: 'blinkit',
    number: '05',
    title: 'Blinkit App',
    category: 'Grocery Delivery Mobile App',
    tagline: 'Instant 10-minute quick commerce delivery application',
    heroImage: '/images/projects/blinkit/hero.jpg',
    technologies: ['Flutter', 'Dart', 'MongoDB', 'Node.js'],
    github: 'https://github.com/vishalratanshakya',
    description: 'A mobile grocery delivery app focused on ultra-fast product discovery, instant cart checkout, and location-based order dispatching.',
    longDescription: 'Inspired by modern quick-commerce workflows, the Blinkit App concept delivers rapid product categorizations, real-time cart subtotal computations, address selection, and estimated arrival counters. Built with Flutter and Dart to guarantee smooth 60fps animations.',
    features: [
      'Grid-based grocery category navigation (Produce, Snacks, Dairy, Beverages)',
      'Sub-second cart item incrementation and automatic discount pricing',
      'Delivery address selector with geolocation integration'
    ],
    role: 'Mobile Developer',
    year: '2025',
    stats: [
      { label: 'Performance', value: '60 FPS UI' },
      { label: 'Delivery Model', value: '10-Min Q-Commerce' },
      { label: 'Framework', value: 'Flutter Mobile' }
    ],
    screenshots: [
      '/images/projects/blinkit/hero.jpg'
    ]
  },
  {
    id: '360-payz',
    slug: '360-payz',
    number: '06',
    title: '360 Payz',
    category: 'Payment App Client Website',
    tagline: 'Client-facing marketing & documentation web platform for fintech payment system',
    heroImage: '/images/projects/360-payz/hero.jpg',
    technologies: ['Client Website'],
    website: 'https://360payz.com',
    github: 'https://github.com/vishalratanshakya',
    description: 'A high-converting client website for a payment technology application highlighting transaction security, API integration, and features.',
    longDescription: 'Created as a client-facing web application for 360 Payz, this platform presents financial transaction features, developer integration guides, merchant solution tiers, and compliance certifications with sharp typography and corporate fintech aesthetics.',
    features: [
      'Fintech product capability landing pages',
      'Developer API reference and gateway integration portal',
      'High-security compliance & PCI-DSS overview section'
    ],
    role: 'Frontend Web Developer',
    year: '2025',
    stats: [
      { label: 'Type', value: 'Client Web Platform' },
      { label: 'Focus', value: 'Fintech Marketing' },
      { label: 'Security Visuals', value: 'Enterprise Grade' }
    ],
    screenshots: [
      '/images/projects/360-payz/hero.jpg'
    ]
  },
  {
    id: 'up-roadways',
    slug: 'up-roadways',
    number: '07',
    title: 'UP Roadways Digital Radio',
    category: 'Digital Radio & Nostalgic Music Platform',
    tagline: 'A nostalgic digital radio experience designed around UP Roadways bus journeys',
    heroImage: '/images/projects/up-roadways/hero.jpg',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    website: 'https://up-roadways-song.vercel.app/',
    github: 'https://github.com/vishalratanshakya/up-roadways-song',
    description: 'A web-based 24/7 digital radio music platform inspired by memories and emotions of traveling through Uttar Pradesh Roadways.',
    longDescription: 'UP Roadways Digital Radio transforms the idea of a traditional road journey into an immersive web-based music experience. Designed around the concept of "सफ़र का अपना साउंडट्रैक", the platform connects road travels with nostalgic Hindi tracks organized into family and era categories (Dada, Papa, Main). Built with Next.js, React, Node.js, Express, and MongoDB with custom audio interactions and an admin music management backend.',
    features: [
      '24/7 Digital Radio journey listening workflow',
      'Nostalgic Hindi music category filtering (Dada, Papa, Main, All)',
      'Hindi-first editorial UI & cultural typography design',
      'Admin-driven music track upload and management dashboard',
      'Custom audio playback control and responsive web player'
    ],
    role: 'Creator & Lead Developer',
    year: '2026',
    stats: [
      { label: 'Category', value: 'Nostalgic Radio' },
      { label: 'Language', value: 'Hindi First' },
      { label: 'Deployment', value: 'Vercel Live' }
    ],
    screenshots: [
      '/images/projects/up-roadways/hero.jpg'
    ]
  },
  {
    id: 'medical-store',
    slug: 'medical-store',
    number: '08',
    title: 'Siddharth Medical Store',
    category: 'Pharmacy Inventory & Shop Management System',
    tagline: 'Comprehensive inventory management system for medical store client workflows',
    heroImage: '/images/projects/medical-store/hero.jpg',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    website: 'https://shiddhartmedicalstore.vercel.app/',
    github: 'https://github.com/vishalratanshakya/Medical-Store',
    description: 'A specialized medical inventory and sales management web platform engineered for client pharmacy operations.',
    longDescription: 'Engineered specifically for client medical shop operations, Siddharth Medical Store streamlines medicine stock tracking, batch numbers, expiry dates, supplier orders, daily sales reporting, and low-stock alert thresholds. Built with Next.js and MongoDB to ensure fast search indexing and secure shop management.',
    features: [
      'Medicine inventory tracking with batch number & expiry alerts',
      'Real-time low stock notification system',
      'Supplier order generation & transaction history',
      'Daily sales analytics & billing checkout interface',
      'Secure client admin authentication & MongoDB data models'
    ],
    role: 'Full Stack Developer for Client',
    year: '2026',
    stats: [
      { label: 'Type', value: 'Client Application' },
      { label: 'Stack', value: 'Next.js + MongoDB' },
      { label: 'Live Link', value: 'Vercel Deployed' }
    ],
    screenshots: [
      '/images/projects/medical-store/hero.jpg'
    ]
  },
  {
    id: 'apexquant',
    slug: 'apexquant',
    number: '09',
    title: 'ApexQuant',
    category: 'Algorithmic Trading & Strategy Automation',
    tagline: 'No-code algorithmic trading and options strategy platform for Indian markets',
    heroImage: '/images/projects/apexquant/hero.jpg',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
    website: 'https://apex-quant-web.vercel.app/',
    github: 'https://github.com/vishalratanshakya',
    description: 'A modern no-code algorithmic trading platform built for Indian markets (NSE, BSE, MCX), enabling traders to build, backtest, and deploy automated strategies.',
    longDescription: 'ApexQuant is a no-code algorithmic trading and strategy automation SaaS platform engineered for Indian capital markets. It allows traders to design complex strategies (such as Iron Condors, Straddles, and Trend Following scanners), backtest historical market data, deploy to cloud infrastructure, manage risk with auto-square-off controls, and integrate multi-broker accounts (Zerodha, Angel One, Upstox, Groww).',
    features: [
      'No-code Drag-and-Drop Strategy & Scanner Builder',
      'Historical market data backtesting engine for Stocks, Futures & Options',
      'Cloud deployment for continuous 24/7 strategy execution',
      'Real-time P&L monitoring dashboard with risk controls & auto-square-off',
      'Multi-broker API integration (Zerodha, Angel One, Upstox, Groww, 5paisa)',
      'WhatsApp & Telegram instant trade alert notifications'
    ],
    role: 'Full Stack & FinTech Developer',
    year: '2026',
    stats: [
      { label: 'Markets', value: 'NSE, BSE, MCX' },
      { label: 'Brokers', value: 'Zerodha, Upstox+' },
      { label: 'Features', value: 'Paper & Live Trade' }
    ],
    screenshots: [
      '/images/projects/apexquant/hero.jpg'
    ]
  },
  {
    id: 'homenest',
    slug: 'homenest',
    number: '10',
    title: 'HomeNest',
    category: 'Real Estate Platform',
    tagline: 'Modern property discovery and real-estate management app',
    heroImage: '/images/projects/homenest/hero.jpg',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Firebase', 'Tailwind CSS'],
    website: 'https://homenest-realestate.vercel.app',
    github: 'https://github.com/vishalratanshakya',
    description: 'A comprehensive real-estate platform for discovering properties, managing listings, and filtering by location, price, and amenities.',
    longDescription: 'HomeNest streamlines real estate search through intuitive filtering, interactive map visualization, detailed property specifications, and Firebase user authentication. Developed with Next.js and Tailwind CSS, it offers buyers and renters a clean digital portal for discovering their next home.',
    features: [
      'Interactive property listing feed with high-res galleries',
      'Multi-parameter search: location, price range, property type',
      'Firebase Authentication for saved favorite listings',
      'Mobile-responsive layout optimized for high readability'
    ],
    role: 'Full Stack Developer',
    year: '2025',
    stats: [
      { label: 'Platform', value: 'Next.js + Firebase' },
      { label: 'Filter Speed', value: 'Instant Local State' },
      { label: 'Design', value: 'Architectural Editorial' }
    ],
    screenshots: [
      '/images/projects/homenest/hero.jpg'
    ]
  }
];
