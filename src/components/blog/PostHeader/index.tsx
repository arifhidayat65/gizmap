import { type BlogPost } from '@/types/blog'
import PostAuthorBio from '../PostAuthorBio'
import PostMeta from '../PostMeta'
import PostTitle from '../PostTitle'
import PostExcerpt from '../PostExcerpt'
import PostDate from '../PostDate'
import Transition from '@/components/common/Transition'
import { type HTMLAttributes } from 'react'

interface PostHeaderProps extends HTMLAttributes<HTMLElement> {
  post: BlogPost
  showAuthor?: boolean
  showMeta?: boolean
  showExcerpt?: boolean
  showDate?: boolean
  animate?: boolean
  titleSize?: 'lg' | 'xl'
  titleAs?: 'h1' | 'h2'
  linkTitle?: boolean
  excerptSize?: 'sm' | 'md' | 'lg'
  excerptTruncate?: number
  spacing?: 'sm' | 'md' | 'lg'
}

const PostHeader = ({ 
  post, 
  showAuthor = true,
  showMeta = true,
  showExcerpt = true,
  showDate = true,
  animate = true,
  titleSize = 'xl',
  titleAs = 'h1',
  linkTitle = false,
  excerptSize = 'md',
  excerptTruncate,
  spacing = 'md',
  className = '',
  ...props
}: PostHeaderProps) => {
  const spacingClasses = {
    sm: 'space-y-3',
    md: 'space-y-4',
    lg: 'space-y-6'
  }

  const content = (
    <header 
      className={`${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {/* Meta Information */}
      <div className="space-y-2">
        {showMeta && (
          <PostMeta 
            post={post}
            size="md"
            variant="default"
          />
        )}
        {showDate && (
          <PostDate 
            date={post.publishedAt}
            updatedDate={post.updatedAt}
            size="md"
          />
        )}
      </div>

      {/* Title */}
      <PostTitle 
        title={post.title}
        href={linkTitle ? `/blog/${post.id}` : undefined}
        as={titleAs}
        size={titleSize}
      />

      {/* Description */}
      {showExcerpt && post.excerpt && (
        <PostExcerpt 
          excerpt={post.excerpt}
          size={excerptSize}
          truncate={excerptTruncate}
        />
      )}

      {/* Author */}
      {showAuthor && (
        <div className={spacing === 'lg' ? 'pt-2' : ''}>
          <PostAuthorBio 
            author={post.author}
            size="md"
            showBio={false}
          />
        </div>
      )}
    </header>
  )

  if (!animate) return content

  return (
    <Transition 
      show
      name="fade"
      duration={300}
    >
      {content}
    </Transition>
  )
}

export default PostHeader
