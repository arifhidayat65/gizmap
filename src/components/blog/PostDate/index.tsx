import { formatPublishDate } from '@/utils/blog'

interface PostDateProps {
  date: string
  updatedDate?: string
  size?: 'sm' | 'md' | 'lg'
  showUpdated?: boolean
  className?: string
}

const PostDate = ({
  date,
  updatedDate,
  size = 'md',
  showUpdated = true,
  className = ''
}: PostDateProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  const isUpdated = showUpdated && updatedDate && updatedDate !== date

  return (
    <div className={`text-neutral-500 ${sizeClasses[size]} ${className}`}>
      <time dateTime={date}>
        {formatPublishDate(date)}
      </time>
      {isUpdated && (
        <>
          <span className="mx-2">•</span>
          <span className="text-neutral-400">
            Updated{' '}
            <time dateTime={updatedDate}>
              {formatPublishDate(updatedDate)}
            </time>
          </span>
        </>
      )}
    </div>
  )
}

export default PostDate
