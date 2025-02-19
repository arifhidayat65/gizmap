import { type BlogPost } from '@/types/blog'
import { type PostConfig } from '../PostConfig'

/**
 * Get the estimated read time for a blog post
 */
export const getReadTime = (content: string): number => {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Format a date for display
 */
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Get related posts based on category and tags
 */
export const getRelatedPosts = (
  currentPost: BlogPost,
  posts: BlogPost[],
  limit: number = 3
): BlogPost[] => {
  const otherPosts = posts.filter(post => post.id !== currentPost.id)
  
  // Score each post based on matching category and tags
  const scoredPosts = otherPosts.map(post => {
    let score = 0
    
    // Category match
    if (post.category === currentPost.category) {
      score += 2
    }
    
    // Tag matches
    const matchingTags = post.tags.filter(tag => 
      currentPost.tags.includes(tag)
    ).length
    score += matchingTags

    return { post, score }
  })

  // Sort by score and get top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)
}

/**
 * Get the URL for a blog post
 */
export const getPostUrl = (post: BlogPost, baseUrl: string = ''): string => {
  return `${baseUrl}/blog/${post.id}`
}

/**
 * Check if a post should show a specific feature based on config
 */
export const shouldShowFeature = (
  feature: keyof PostConfig,
  config: PostConfig
): boolean => {
  return config[feature] ?? true
}

/**
 * Get the previous and next posts
 */
export const getAdjacentPosts = (
  currentPost: BlogPost,
  posts: BlogPost[]
): { previous: BlogPost | null; next: BlogPost | null } => {
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  
  const currentIndex = sortedPosts.findIndex(post => post.id === currentPost.id)
  
  return {
    previous: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
    next: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  }
}

/**
 * Format a number for display (e.g., 1000 -> 1K)
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}
