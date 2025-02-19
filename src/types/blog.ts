export type BlogCategory = {
  id: 'all' | 'maintenance' | 'troubleshooting' | 'guide'
  name: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role?: string
  }
  publishedAt: string
  updatedAt?: string
  imageUrl: string
  category: BlogCategory['id']
  tags: string[]
  readTime: number
  views?: number
  likes?: number
}

export interface BlogSearchParams {
  category?: BlogCategory['id']
  tag?: string
  query?: string
  sort?: 'latest' | 'oldest' | 'popular'
  page?: number
}

export interface BlogLayoutProps {
  children: React.ReactNode
}

export interface BlogNavigationProps {
  currentCategory?: BlogCategory['id']
  onSearch: (query: string) => void
  onCategoryChange: (category: BlogCategory['id']) => void
}

export interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured' | 'compact'
}

export interface BlogListProps {
  posts: BlogPost[]
  layout?: 'grid' | 'list'
  showPagination?: boolean
}

export interface BlogSidebarProps {
  categories: BlogCategory[]
  recentPosts: BlogPost[]
  popularTags: string[]
}

export interface BlogSearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export interface BlogCategorySelectProps {
  categories: BlogCategory[]
  currentCategory?: BlogCategory['id']
  onChange: (categoryId: BlogCategory['id']) => void
  className?: string
}
