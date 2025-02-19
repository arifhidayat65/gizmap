'use client'

import { usePost } from '../PostProvider'
import { Button } from '@/components/common/Button'
import { type BlogPost } from '@/types/blog'

interface PostStatsProps {
  post: BlogPost
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal'
  showViews?: boolean
  showLikes?: boolean
  showLabels?: boolean
  interactive?: boolean
}

const PostStats = ({
  post,
  className = '',
  size = 'md',
  variant = 'default',
  showViews = true,
  showLikes = true,
  showLabels = true,
  interactive = true
}: PostStatsProps) => {
  const { likes, views, hasLiked, toggleLike } = usePost()

  const sizeClasses = {
    sm: 'text-sm gap-3',
    md: 'text-base gap-4',
    lg: 'text-lg gap-6'
  }

  const variantClasses = {
    default: 'text-neutral-500',
    minimal: 'text-neutral-400'
  }

  const iconClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  return (
    <div className={`
      flex items-center
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `}>
      {/* Views */}
      {showViews && views !== undefined && (
        <div className="flex items-center gap-1">
          <svg 
            className={iconClasses[size]} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          </svg>
          <span>
            {views.toLocaleString()}
            {showLabels && ' views'}
          </span>
        </div>
      )}

      {/* Likes */}
      {showLikes && likes !== undefined && (
        interactive ? (
          <Button
            onClick={toggleLike}
            variant="ghost"
            className={`
              flex items-center gap-1 p-0
              ${hasLiked ? 'text-primary' : `${variantClasses[variant]} hover:text-primary`}
            `}
            aria-label={hasLiked ? 'Unlike post' : 'Like post'}
          >
            <svg 
              className={iconClasses[size]}
              viewBox="0 0 24 24" 
              fill={hasLiked ? 'currentColor' : 'none'} 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span>
              {likes.toLocaleString()}
              {showLabels && ' likes'}
            </span>
          </Button>
        ) : (
          <div className="flex items-center gap-1">
            <svg 
              className={iconClasses[size]}
              viewBox="0 0 24 24" 
              fill={hasLiked ? 'currentColor' : 'none'} 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span>
              {likes.toLocaleString()}
              {showLabels && ' likes'}
            </span>
          </div>
        )
      )}
    </div>
  )
}

export default PostStats
