import Image from 'next/image'
import Link from 'next/link'
import { type BlogPost } from '@/types/blog'
import { formatPublishDate } from '@/utils/blog'

interface PostAuthorProps {
  author: BlogPost['author']
  publishedAt: string
  showDate?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const PostAuthor = ({
  author,
  publishedAt,
  showDate = true,
  size = 'md',
  className = ''
}: PostAuthorProps) => {
  const sizeClasses = {
    sm: {
      avatar: 'w-8 h-8',
      name: 'text-sm',
      role: 'text-xs'
    },
    md: {
      avatar: 'w-10 h-10',
      name: 'text-base',
      role: 'text-sm'
    },
    lg: {
      avatar: 'w-12 h-12',
      name: 'text-lg',
      role: 'text-base'
    }
  }

  const authorUrl = `/authors/${author.name.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link href={authorUrl} className="shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          width={size === 'lg' ? 48 : size === 'md' ? 40 : 32}
          height={size === 'lg' ? 48 : size === 'md' ? 40 : 32}
          className={`rounded-full ${sizeClasses[size].avatar}`}
        />
      </Link>
      <div>
        <Link 
          href={authorUrl}
          className={`font-medium text-neutral-900 hover:text-primary transition-colors ${sizeClasses[size].name}`}
        >
          {author.name}
        </Link>
        {author.role && (
          <p className={`text-neutral-500 ${sizeClasses[size].role}`}>
            {author.role}
          </p>
        )}
        {showDate && (
          <p className={`text-neutral-500 ${sizeClasses[size].role}`}>
            {formatPublishDate(publishedAt)}
          </p>
        )}
      </div>
    </div>
  )
}

export default PostAuthor
