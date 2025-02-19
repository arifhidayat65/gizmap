'use client'

import { usePost } from '../PostProvider'
import PostStats from '../PostStats'
import PostShare from '../PostShare'
import { type BlogPost } from '@/types/blog'
import { useEffect } from 'react'

interface PostSocialProps {
  post: BlogPost
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal'
  showStats?: boolean
  showShare?: boolean
  showLabels?: boolean
  autoIncrement?: boolean
}

const PostSocial = ({
  post,
  className = '',
  size = 'md',
  variant = 'default',
  showStats = true,
  showShare = true,
  showLabels = true,
  autoIncrement = true
}: PostSocialProps) => {
  const { incrementViews } = usePost()
  const postUrl = `https://gizmap.com/blog/${post.id}`

  // Auto-increment views when component mounts
  useEffect(() => {
    if (autoIncrement) {
      incrementViews()
    }
  }, [autoIncrement, incrementViews])

  return (
    <div className={`
      flex items-center justify-between flex-wrap gap-4
      ${className}
    `}>
      {/* Stats */}
      {showStats && (
        <PostStats 
          post={post}
          size={size}
          variant={variant}
          showLabels={showLabels}
          interactive
        />
      )}

      {/* Share */}
      {showShare && (
        <PostShare 
          url={postUrl}
          title={post.title}
          description={post.excerpt}
          size={size}
          variant={variant}
        />
      )}
    </div>
  )
}

export default PostSocial
