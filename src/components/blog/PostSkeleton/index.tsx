interface PostSkeletonProps {
  variant?: 'default' | 'compact' | 'minimal'
  showHeader?: boolean
  showImage?: boolean
  showContent?: boolean
  showFooter?: boolean
  paragraphs?: number
  className?: string
}

/**
 * Post Skeleton Component
 * 
 * Loading skeleton for blog posts with configurable sections and variants.
 */
const PostSkeleton = ({
  variant = 'default',
  showHeader = true,
  showImage = true,
  showContent = true,
  showFooter = true,
  paragraphs = 6,
  className = ''
}: PostSkeletonProps) => {
  const isCompact = variant === 'compact'
  const isMinimal = variant === 'minimal'

  return (
    <div className={`space-y-8 animate-pulse ${className}`}>
      {/* Header Skeleton */}
      {showHeader && (
        <div className="space-y-4">
          {/* Meta */}
          {!isMinimal && (
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 bg-neutral-200 rounded" />
              <div className="h-4 w-4 bg-neutral-200 rounded-full" />
              <div className="h-4 w-24 bg-neutral-200 rounded" />
            </div>
          )}

          {/* Title */}
          <div 
            className={`
              bg-neutral-200 rounded
              ${isCompact ? 'h-8 w-2/3' : 'h-10 w-3/4'}
            `}
          />

          {/* Excerpt */}
          {!isMinimal && (
            <div className="h-6 w-2/3 bg-neutral-200 rounded" />
          )}

          {/* Author */}
          {!isMinimal && (
            <div className="flex items-center gap-3 pt-2">
              <div className="h-12 w-12 bg-neutral-200 rounded-full" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-neutral-200 rounded" />
                <div className="h-4 w-24 bg-neutral-200 rounded" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Image Skeleton */}
      {showImage && (
        <div 
          className={`
            bg-neutral-200 rounded
            ${isCompact ? 'aspect-[2/1]' : 'aspect-video'}
            w-full
          `}
        />
      )}

      {/* Content Skeleton */}
      {showContent && (
        <div className="space-y-4">
          {[...Array(paragraphs)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 w-full bg-neutral-200 rounded" />
              <div className="h-4 w-5/6 bg-neutral-200 rounded" />
              <div className="h-4 w-4/6 bg-neutral-200 rounded" />
            </div>
          ))}
        </div>
      )}

      {/* Footer Skeleton */}
      {showFooter && !isMinimal && (
        <div className="space-y-6 pt-8 border-t">
          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-8 w-24 bg-neutral-200 rounded" />
              <div className="h-8 w-24 bg-neutral-200 rounded" />
            </div>
            <div className="h-8 w-32 bg-neutral-200 rounded" />
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 w-16 bg-neutral-200 rounded" />
            ))}
          </div>

          {/* Navigation */}
          {!isCompact && (
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="h-24 bg-neutral-200 rounded" />
              <div className="h-24 bg-neutral-200 rounded" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PostSkeleton
