export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  imageUrl: string;
  category: string;
  tags: string[];
  readTime: number;
  views: number;
  likes: number;
}

export interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
}
