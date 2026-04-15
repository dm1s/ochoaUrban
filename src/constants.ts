import { TeamMember, Article, CaseStudy } from './types';

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Julian Ochoa, AICP',
    role: 'MANAGING DIRECTOR',
    title: 'Managing Director',
    bio: 'Expert in multi-modal transit systems and urban policy frameworks across North America.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Elena Rossi, LEED AP',
    role: 'LEAD PLANNER',
    title: 'Lead Planner',
    bio: 'Specializing in sustainable community integration and biophilic design implementation.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Marcus Chen, AICP, CEP',
    role: 'ECONOMIC STRATEGIST',
    title: 'Economic Strategist',
    bio: 'Bridging the gap between private capital and public good through innovative fiscal modeling.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Urban Economic Development & CDBG-DR Strategy',
    category: 'Planning & Economy',
    readTime: '12 MIN READ',
    author: 'Manuel Ochoa, AICP',
    authorTitle: 'Principal & Founder',
    date: 'October 24, 2024',
    excerpt: 'The landscape of urban economic development is undergoing a seismic shift. No longer can cities rely on the traditional hubs of centralized commerce.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'Adaptive Reuse in Mid-Sized Cities',
    category: 'Architecture',
    readTime: '8 MIN READ',
    author: 'Elena Rossi',
    authorTitle: 'Lead Planner',
    date: 'September 12, 2024',
    excerpt: 'Exploring how historical structures can be reimagined for modern community needs.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'The Social ROI of Public Spaces',
    category: 'Community',
    readTime: '10 MIN READ',
    author: 'Julian Ochoa',
    authorTitle: 'Managing Director',
    date: 'August 28, 2024',
    excerpt: 'Measuring the impact of well-designed public plazas on community health and social cohesion.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'CDBG-DR Strategic Alignment: Gulf Coast Restoration',
    category: 'Disaster Recovery',
    description: 'Redesigning post-storm infrastructure with a focus on flood mitigation and community equity.',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'Affordable Housing Innovation in Urban Infill',
    category: 'Housing & Mixed-Use',
    description: "Policy adjustments that enabled high-density, low-impact housing solutions in Chicago's historic districts.",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
  },
];
