import { SimulatorItem, StatItem, TrainingProgram } from './types';

export const SIMULATORS_DATA: SimulatorItem[] = [
  {
    id: 'web-mobile',
    title: 'WEB & MOBILE DEVELOPMENT',
    subtitle: 'High-Performance Web & Mobile Apps',
    category: 'web-mobile',
    badge: 'WEB & MOBILE',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    description: 'Responsive cloud web applications, progressive web suites, and fluid cross-platform iOS & Android mobile ecosystems engineered for scale.',
    specs: {
      level: 'Production Ready',
      type: 'React, Next.js, Flutter, React Native',
      motion: 'Cloud-Native Architecture',
      visual: 'Tailored Responsive UI/UX'
    }
  },
  {
    id: 'core-services',
    title: 'SOFTWARE SERVICES',
    subtitle: 'Full-Lifecycle Digital Engineering',
    category: 'services',
    badge: 'OUR SERVICES',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    description: 'EMPOWERING MODERN ENTERPRISES WITH BESPOKE WEB, MOBILE, STANDALONE SOFTWARE, AUTOMATION & AI.',
    specs: {
      level: 'Enterprise Grade',
      type: 'Web, Mobile, Standalone, Automation & AI',
      motion: 'Agile Full-Lifecycle Engineering',
      visual: 'High Performance & 99.9% Reliability'
    }
  },
  {
    id: 'ai-automation',
    title: 'AUTOMATION & AI SYSTEMS',
    subtitle: 'Process Automation & Cognitive AI',
    category: 'automation',
    badge: 'AI & AUTOMATION',
    image: '/pos-system.jpg',
    description: 'Autonomous workflow bots, cognitive business logic adapters, high-throughput standalone desktop software, and custom machine learning models.',
    specs: {
      level: 'Cutting-Edge',
      type: 'Workflow RPA, Python AI/ML, Desktop POS/ERP',
      motion: 'End-to-End Autonomous Pipelines',
      visual: 'Intelligent Dashboards & Telemetry'
    }
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-1',
    ghostNumber: '1994',
    highlightText: 'IN 1994.',
    fullText: 'Increasing number of flight simulators since it has gone into operation',
    iconName: 'screens'
  },
  {
    id: 'stat-2',
    ghostNumber: '15.900',
    highlightText: '15.600 square meters',
    fullText: 'Turkish Airlines FTC is carrying out its activities at a total area of',
    iconName: 'tower'
  },
  {
    id: 'stat-3',
    ghostNumber: '800',
    highlightText: '800 STUDENTS',
    fullText: 'Capable of giving training services to approximately at the same time.',
    iconName: 'pilot'
  },
  {
    id: 'stat-4',
    ghostNumber: '21',
    highlightText: '21 SIMULATORS',
    fullText: 'Which 8.420 square meters is a closed area with',
    iconName: 'simulator'
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'atpl-integrated',
    title: 'Airline Transport Pilot License (ATPL Frozen)',
    category: 'cockpit',
    duration: '18 - 24 Months',
    description: 'Comprehensive ab-initio cadet training taking aspiring aviators from zero hours to commercial multi-engine instrument rating.'
  },
  {
    id: 'type-rating-a320',
    title: 'Airbus A320 / A330 Type Rating',
    category: 'type-rating',
    duration: '5 - 6 Weeks',
    description: 'Initial and recurrent type qualification on state-of-the-art Level-D Full Flight Simulators with zero flight time training (ZFTT).'
  },
  {
    id: 'type-rating-b737',
    title: 'Boeing 737 NG & MAX Type Rating',
    category: 'type-rating',
    duration: '5 - 6 Weeks',
    description: 'FAA and EASA accredited type conversion course covering normal, abnormal, and emergency procedures.'
  },
  {
    id: 'cabin-crew-initial',
    title: 'Initial Cabin Crew Attestation (CCA)',
    category: 'cabin',
    duration: '6 Weeks',
    description: 'EASA compliant safety, medical first aid, security, CRM, and service excellence training.'
  }
];
