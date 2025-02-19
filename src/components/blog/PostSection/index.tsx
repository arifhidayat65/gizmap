interface PostSectionProps {
  children: React.ReactNode
  className?: string
  border?: boolean
  spacing?: 'sm' | 'md' | 'lg'
}

const PostSection = ({ 
  children, 
  className = '',
  border = true,
  spacing = 'md'
}: PostSectionProps) => {
  const spacingClasses = {
    sm: 'pt-4 mt-4',
    md: 'pt-6 mt-6',
    lg: 'pt-8 mt-8'
  }

  return (
    <div className={`
      ${border ? 'border-t' : ''}
      ${spacingClasses[spacing]}
      ${className}
    `}>
      {children}
    </div>
  )
}

export default PostSection
