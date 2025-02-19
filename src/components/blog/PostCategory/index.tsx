import Link from 'next/link'
import { type BlogCategory } from '@/types/blog'
import { BLOG_CATEGORIES } from '@/constants/blog'

interface PostCategoryProps {
  category: BlogCategory['id']
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'solid'
  className?: string
}

const PostCategory = ({
  category,
  showIcon = false,
  size = 'md',
  variant = 'default',
  className = ''
}: PostCategoryProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  const variantClasses = {
    default: 'text-neutral-600 hover:text-primary',
    outline: 'border border-neutral-200 rounded-full px-3 py-1 text-neutral-600 hover:border-primary hover:text-primary',
    solid: 'bg-primary/10 rounded-full px-3 py-1 text-primary hover:bg-primary/20'
  }

  const categoryData = BLOG_CATEGORIES.find(cat => cat.id === category)
  if (!categoryData) return null

  return (
    <Link
      href={category === 'all' ? '/blog' : `/blog/category/${category}`}
      className={`
        inline-flex items-center gap-2 capitalize transition-colors
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {showIcon && (
        <svg 
          className="w-4 h-4" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" 
          />
        </svg>
      )}
      <span>{categoryData.name}</span>
    </Link>
  )
}

export default PostCategory
