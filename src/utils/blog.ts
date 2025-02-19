import { type BlogPost, type PartialBlogSearchParams } from '@/types/blog'
import { BLOG_CONFIG } from '@/constants/blog'

export const formatPublishDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatReadTime = (minutes: number): string => {
  return `${minutes} min read`
}

const isValidString = (str: string | undefined): str is string => {
  return typeof str === 'string' && str.trim().length > 0
}

export const filterPosts = (posts: BlogPost[], params: PartialBlogSearchParams): BlogPost[] => {
  let filtered = [...posts]

  if (isValidString(params.category) && params.category !== 'all') {
    filtered = filtered.filter(post => post.category === params.category)
  }

  if (isValidString(params.tag)) {
    filtered = filtered.filter(post => post.tags.includes(params.tag!))
  }

  if (isValidString(params.query)) {
    const searchQuery = params.query.toLowerCase().trim()
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery)
    )
  }

  if (params.sort) {
    switch (params.sort) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0))
        break
    }
  }

  return filtered
}

export const paginatePosts = (posts: BlogPost[], page: number = 1): BlogPost[] => {
  const start = (page - 1) * BLOG_CONFIG.postsPerPage
  const end = start + BLOG_CONFIG.postsPerPage
  return posts.slice(start, end)
}

export const getPopularTags = (posts: BlogPost[]): string[] => {
  const tagCount = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)

  return Object.entries(tagCount)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag)
    .slice(0, 10)
}

export const getRecentPosts = (posts: BlogPost[]): BlogPost[] => {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, BLOG_CONFIG.recentPostsLimit)
}

export const getFeaturedPosts = (posts: BlogPost[]): BlogPost[] => {
  return [...posts]
    .sort((a, b) => ((b.views || 0) + (b.likes || 0)) - ((a.views || 0) + (a.likes || 0)))
    .slice(0, BLOG_CONFIG.featuredPostsLimit)
}

export const getTotalPages = (totalPosts: number): number => {
  return Math.ceil(totalPosts / BLOG_CONFIG.postsPerPage)
}
