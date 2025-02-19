import Link from 'next/link'

interface PostTagsProps {
  tags: string[]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'solid'
  className?: string
}

const PostTags = ({
  tags,
  size = 'md',
  variant = 'default',
  className = ''
}: PostTagsProps) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }

  const variantClasses = {
    default: 'bg-neutral-100 text-neutral-600 hover:bg-primary hover:text-white',
    outline: 'border border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary',
    solid: 'bg-primary text-white hover:bg-primary/90'
  }

  if (tags.length === 0) return null

  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      {tags.map(tag => (
        <Link
          key={tag}
          href={`/blog/tag/${tag.toLowerCase()}`}
          className={`
            rounded-full transition-colors
            ${sizeClasses[size]}
            ${variantClasses[variant]}
          `}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default PostTags
