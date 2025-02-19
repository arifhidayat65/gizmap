'use client'

import { type BlogPost } from '@/types/blog'
import BlogCard from '../Card'

interface RelatedPostsProps {
  currentPost: BlogPost
  posts: BlogPost[]
  maxPosts?: number
  className?: string
}

const RelatedPosts = ({
  currentPost,
  posts,
  maxPosts = 3,
  className = ''
}: RelatedPostsProps) => {
  // Get related posts based on category and tags
  const getRelatedPosts = () => {
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
      .slice(0, maxPosts)
      .map(({ post }) => post)
  }

  const relatedPosts = getRelatedPosts()

  if (relatedPosts.length === 0) return null

  return (
    <section className={className}>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        Related Posts
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map(post => (
          <BlogCard 
            key={post.id} 
            post={post}
            variant="compact"
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts
