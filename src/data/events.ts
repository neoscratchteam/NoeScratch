export interface Event {
  id: string | number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: string;
  category: string;
  tags: string[];
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Global Tech Summit 2026',
    date: '2026-06-15',
    location: 'Kigali Convention Centre',
    description: 'A world-class engineering summit focusing on SaaS architecture, AI integration, and the future of African tech ecosystems.',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad05823c28b?q=80&w=1200&auto=format&fit=crop',
    type: 'CONFERENCE',
    category: 'Conference',
    tags: ['AI', 'SAAS', 'NETWORKING']
  },
  {
    id: 2,
    title: 'Full-Stack Intensive Bootcamp',
    date: '2026-07-10',
    location: 'NeoScratch Innovation Lab',
    description: 'An elite 4-week training program designed to transform junior developers into global-ready senior software engineers.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    type: 'WORKSHOP',
    category: 'Training',
    tags: ['CODING', 'CAREER', 'ENG']
  },
  {
    id: 3,
    title: 'NeoScratch Cloud Release',
    date: '2026-08-05',
    location: 'Virtual Event (Live)',
    description: 'Official launch of our automated cloud migration and management platform tailored for growing African enterprises.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    type: 'PRODUCT LAUNCH',
    category: 'Product Launch',
    tags: ['CLOUD', 'SYSTEMS']
  },
];

export const pastEvents = [
  {
    title: 'PixelMart Unified Headquarters Launch',
    date: '2026-01-10',
    description: 'Successfully deployed the PixelMart ERP and financial headquarters for Mr. Faustin Hagenimana, revolutionizing multi-branch retail management.',
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1775564616/pixelmartsold_yabygf.png',
    author: 'Theogene Iradukunda'
  },
  {
    title: 'SmartStock Ultimate BMS Release',
    date: '2026-02-15',
    description: 'The global release of the SmartStock Business Management System for Mr. Juldas, enabling real-time P&L analytics and branch synchronization.',
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1775564686/smartstock_tbgyi2.png',
    author: 'Theogene Iradukunda'
  },
];
