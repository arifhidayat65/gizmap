import { ButtonLink } from '@/components/common/Button'

interface BlogErrorProps {
  title?: string
  message?: string
  actionText?: string
  actionLink?: string
  className?: string
}

const BlogError = ({
  title = 'Not Found',
  message = "The content you're looking for doesn't exist or has been removed.",
  actionText = 'Back to Blog',
  actionLink = '/blog',
  className = ''
}: BlogErrorProps) => {
  return (
    <div className={`min-h-[50vh] flex flex-col items-center justify-center text-center py-12 ${className}`}>
      <div className="max-w-md px-4">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
          {title}
        </h1>
        <p className="text-neutral-600 mb-6">
          {message}
        </p>
        <ButtonLink 
          href={actionLink}
          icon="arrow-left"
          size="lg"
        >
          {actionText}
        </ButtonLink>
      </div>
    </div>
  )
}

export default BlogError
