import { type BlogPost } from '@/types/blog'
import { formatReadTime } from '@/utils/blog'
import PostCategory from '../PostCategory'

interface PostMetaProps {
  post: BlogPost
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showCategory?: boolean
  showReadTime?: boolean
  variant?: 'default' | 'minimal'
}

const PostMeta = ({
  post,
  className = '',
  size = 'md',
  showCategory = true,
  showReadTime = true,
  variant = 'default'
}: PostMetaProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  if (!showCategory && !showReadTime) return null

  return (
    <div className={`flex items-center gap-2 text-neutral-500 ${sizeClasses[size]} ${className}`}>
      {showCategory && (
        <PostCategory 
          category={post.category}
          variant={variant === 'default' ? 'solid' : 'default'}
          size={size}
          showIcon={variant === 'default'}
        />
      )}
      {showCategory && showReadTime && (
        <span className="text-neutral-300">•</span>
      )}
      {showReadTime && (
        <span>{formatReadTime(post.readTime)}</span>
      )}
    </div>
  )
}

export default PostMeta
