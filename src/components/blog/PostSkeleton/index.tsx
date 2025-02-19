const PostSkeleton = () => {
  return (
    <div className="space-y-12 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header Skeleton */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-24 bg-neutral-200 rounded-full"></div>
              <div className="h-8 w-4 bg-neutral-200 rounded"></div>
              <div className="h-8 w-20 bg-neutral-200 rounded"></div>
            </div>
            <div className="h-12 w-3/4 bg-neutral-200 rounded"></div>
            <div className="h-6 w-2/3 bg-neutral-200 rounded"></div>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-12 w-12 bg-neutral-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-5 w-32 bg-neutral-200 rounded"></div>
                <div className="h-4 w-24 bg-neutral-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Image Skeleton */}
          <div className="mb-8">
            <div className="aspect-video bg-neutral-200 rounded-xl"></div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-neutral-200 rounded w-full"></div>
            <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
            <div className="h-4 bg-neutral-200 rounded w-4/6"></div>
            <div className="h-4 bg-neutral-200 rounded w-full"></div>
            <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
          </div>

          {/* Footer Skeleton */}
          <div className="mt-12 pt-8 border-t space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-8 w-20 bg-neutral-200 rounded"></div>
                <div className="h-8 w-20 bg-neutral-200 rounded"></div>
              </div>
              <div className="h-8 w-32 bg-neutral-200 rounded"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className="h-8 w-16 bg-neutral-200 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="w-64 flex-shrink-0 hidden lg:block">
          <div className="space-y-3">
            <div className="h-6 w-40 bg-neutral-200 rounded"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  className="h-4 bg-neutral-200 rounded w-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostSkeleton
