import { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tips Merawat Laptop Agar Tetap Optimal',
    excerpt: 'Pelajari cara-cara efektif untuk merawat laptop agar performa tetap optimal dan tahan lama.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'John Doe',
      avatar: '/assets/images/austin-distel-Hg3BHX6U5jg-unsplash.jpg',
      role: 'Technical Writer'
    },
    publishedAt: '2023-12-01T08:00:00Z',
    imageUrl: '/assets/images/IT-repairing-the-broken-computer-768x513.jpeg',
    category: 'maintenance',
    tags: ['laptop', 'maintenance', 'tips'],
    readTime: 5,
    views: 1200,
    likes: 45
  },
  {
    id: '2',
    title: 'Mengatasi Masalah Blue Screen pada Windows',
    excerpt: 'Panduan lengkap mengatasi masalah blue screen yang sering terjadi pada sistem operasi Windows.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Jane Smith',
      avatar: '/assets/images/cowomen-UUPpu2sYV6E-unsplash.jpg',
      role: 'System Engineer'
    },
    publishedAt: '2023-12-02T10:30:00Z',
    imageUrl: '/assets/images/juja-han-uT55XxQLQGU-unsplash.jpg',
    category: 'troubleshooting',
    tags: ['windows', 'troubleshooting', 'BSOD'],
    readTime: 8,
    views: 2500,
    likes: 72
  },
  {
    id: '3',
    title: 'Panduan Instalasi Windows 11',
    excerpt: 'Langkah-langkah detail untuk menginstal Windows 11 dengan benar, termasuk persiapan dan konfigurasi.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Mike Johnson',
      avatar: '/assets/images/juja-han-uT55XxQLQGU-unsplash.jpg',
      role: 'IT Specialist'
    },
    publishedAt: '2023-12-03T14:15:00Z',
    imageUrl: '/assets/images/kit-formerly-convertkit-BOI9jki3nzY-unsplash.jpg',
    category: 'guide',
    tags: ['windows', 'installation', 'guide'],
    readTime: 10,
    views: 3800,
    likes: 95
  }
]
