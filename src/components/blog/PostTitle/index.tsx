import { type HTMLAttributes } from 'react'
import Link from 'next/link'

interface PostTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string
  href?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  truncate?: boolean
  className?: string
}

const PostTitle = ({
  title,
  href,
  as: Component = 'h1',
  size = 'lg',
  truncate = false,
  className = '',
  ...props
}: PostTitleProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  const content = (
    <Component 
      className={`
        font-bold text-neutral-900 leading-tight
        ${sizeClasses[size]}
        ${truncate ? 'line-clamp-2' : ''}
        ${className}
      `}
      {...props}
    >
      {title}
    </Component>
  )

  if (href) {
    return (
      <Link 
        href={href}
        className="group"
      >
        <Component 
          className={`
            font-bold text-neutral-900 leading-tight
            group-hover:text-primary transition-colors
            ${sizeClasses[size]}
            ${truncate ? 'line-clamp-2' : ''}
            ${className}
          `}
          {...props}
        >
          {title}
        </Component>
      </Link>
    )
  }

  return content
}

export default PostTitle
