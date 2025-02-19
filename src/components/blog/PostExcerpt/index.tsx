interface PostExcerptProps {
  excerpt: string
  size?: 'sm' | 'md' | 'lg'
  truncate?: number
  className?: string
}

const PostExcerpt = ({
  excerpt,
  size = 'md',
  truncate,
  className = ''
}: PostExcerptProps) => {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  }

  let content = excerpt
  if (truncate && excerpt.length > truncate) {
    content = excerpt.slice(0, truncate).trim() + '...'
  }

  return (
    <p 
      className={`
        text-neutral-600 leading-relaxed
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {content}
    </p>
  )
}

export default PostExcerpt
