export const BLOG_CATEGORIES = [
  { id: 'all', name: 'All Posts' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'troubleshooting', name: 'Troubleshooting' },
  { id: 'guide', name: 'Guide' }
] as const

export type BlogCategory = typeof BLOG_CATEGORIES[number]

export const BLOG_ROUTES = {
  index: '/blog',
  category: (id: string) => `/blog/category/${id}`,
  post: (id: string) => `/blog/${id}`
} as const

export const BLOG_CONFIG = {
  postsPerPage: 9,
  recentPostsLimit: 3,
  featuredPostsLimit: 4,
  searchPlaceholder: 'Search articles...',
  defaultMetadata: {
    title: 'Blog - GizMap',
    description: 'Latest articles and updates from GizMap'
  }
} as const

export const BLOG_SORT_OPTIONS = [
  { id: 'latest', name: 'Latest' },
  { id: 'oldest', name: 'Oldest' },
  { id: 'popular', name: 'Most Popular' }
] as const

export type BlogSortOption = typeof BLOG_SORT_OPTIONS[number]
