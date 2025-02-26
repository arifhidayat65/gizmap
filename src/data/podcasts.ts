import { Podcast } from '../types/podcast';

export const podcasts: Podcast[] = [
  {
    id: '1',
    title: 'Tech Repair Tips: iPhone Screen Replacement',
    description: 'Learn professional techniques for iPhone screen replacement and common pitfalls to avoid.',
    audioUrl: 'https://storage.googleapis.com/gizmap-podcasts/tech-repair-tips-1.mp3',
    thumbnailUrl: '/images/austin-distel-Hg3BHX6U5jg-unsplash.jpg',
    duration: '15:30',
    author: 'John Tech',
    publishedAt: '2024-01-15',
    category: 'Repair Tips'
  },
  {
    id: '2',
    title: 'Smart TV Troubleshooting Guide',
    description: 'Expert guide on diagnosing and fixing common Smart TV issues.',
    audioUrl: 'https://storage.googleapis.com/gizmap-podcasts/smart-tv-guide-1.mp3',
    thumbnailUrl: '/images/cowomen-UUPpu2sYV6E-unsplash.jpg',
    duration: '20:45',
    author: 'Sarah Electronics',
    publishedAt: '2024-01-10',
    category: 'Troubleshooting'
  },
  {
    id: '3',
    title: 'Gaming Console Maintenance 101',
    description: 'Essential maintenance tips to keep your gaming console running smoothly.',
    audioUrl: 'https://storage.googleapis.com/gizmap-podcasts/console-maintenance-1.mp3',
    thumbnailUrl: '/images/juja-han-uT55XxQLQGU-unsplash.jpg',
    duration: '18:15',
    author: 'Mike Gaming',
    publishedAt: '2024-01-05',
    category: 'Maintenance'
  }
];
