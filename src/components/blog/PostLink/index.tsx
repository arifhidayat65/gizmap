import Link from 'next/link'

interface PostLinkProps {
  href: string
  children: React.ReactNode
  icon?: 'arrow-left' | 'arrow-right'
  className?: string
  center?: boolean
}

const PostLink = ({ 
  href, 
  children, 
  icon, 
  className = '',
  center = false
}: PostLinkProps) => {
  const icons = {
    'arrow-left': (
      <svg 
        className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
    ),
    'arrow-right': (
      <svg 
        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
    )
  }

  return (
    <Link 
      href={href}
      className={`
        inline-flex items-center gap-2 text-neutral-600 
        hover:text-primary transition-colors group
        ${center ? 'justify-center' : ''}
        ${className}
      `}
    >
      {icon === 'arrow-left' && icons['arrow-left']}
      <span>{children}</span>
      {icon === 'arrow-right' && icons['arrow-right']}
    </Link>
  )
}

export default PostLink
