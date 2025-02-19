import Image from 'next/image'
import Link from 'next/link'
import { type BlogPost } from '@/types/blog'

interface PostAuthorBioProps {
  author: BlogPost['author']
  className?: string
  showBio?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const PostAuthorBio = ({ 
  author, 
  className = '',
  showBio = false,
  size = 'md'
}: PostAuthorBioProps) => {
  if (!author.role) return null

  const authorUrl = `/authors/${author.name.toLowerCase().replace(/\s+/g, '-')}`

  const sizeClasses = {
    sm: {
      image: 'w-10 h-10',
      name: 'text-base',
      role: 'text-sm'
    },
    md: {
      image: 'w-12 h-12',
      name: 'text-lg',
      role: 'text-base'
    },
    lg: {
      image: 'w-16 h-16',
      name: 'text-xl',
      role: 'text-lg'
    }
  }

  return (
    <div className={className}>
      <div className="flex items-start gap-4">
        <Link 
          href={authorUrl}
          className="flex-shrink-0 group"
        >
          <Image 
            src={author.avatar} 
            alt={author.name}
            width={size === 'lg' ? 64 : size === 'md' ? 48 : 40}
            height={size === 'lg' ? 64 : size === 'md' ? 48 : 40}
            className={`
              rounded-full transition-transform duration-300
              ${sizeClasses[size].image}
              group-hover:scale-105
            `}
          />
        </Link>
        <div>
          <Link 
            href={authorUrl}
            className={`
              inline-block font-semibold text-neutral-900 hover:text-primary transition-colors
              ${sizeClasses[size].name}
            `}
          >
            {author.name}
          </Link>
          <p className={`text-neutral-600 mt-1 ${sizeClasses[size].role}`}>
            {author.role}
          </p>
          {showBio && (
            <p className="text-neutral-600 mt-2 line-clamp-2">
              {/* Add author bio here when available */}
              Writing about technology, development, and best practices.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostAuthorBio
