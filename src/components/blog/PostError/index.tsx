import { type ReactNode } from 'react'
import { ERROR_MESSAGES } from '../PostConstants'

interface PostErrorProps {
  title?: string
  message?: string
  code?: string
  action?: ReactNode
  className?: string
}

/**
 * Post Error Component
 * 
 * Displays error states for blog posts with consistent styling and optional actions.
 */
const PostError = ({
  title = 'Error',
  message = ERROR_MESSAGES.loadError,
  code,
  action,
  className = ''
}: PostErrorProps) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="w-16 h-16 mb-4 text-neutral-400">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </div>
      
      <h2 className="text-xl font-semibold text-neutral-900 mb-2">
        {title}
      </h2>
      
      <p className="text-neutral-600 mb-4 max-w-md">
        {message}
      </p>

      {code && (
        <code className="px-2 py-1 bg-neutral-100 rounded text-sm text-neutral-600 font-mono mb-4">
          {code}
        </code>
      )}

      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  )
}

export default PostError
