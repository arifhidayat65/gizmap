const BlogSkeleton = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-pulse space-y-8 w-full max-w-3xl">
        {/* Header Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 bg-neutral-200 rounded w-20"></div>
            <div className="h-4 bg-neutral-200 rounded w-4"></div>
            <div className="h-4 bg-neutral-200 rounded w-24"></div>
          </div>
          <div className="h-8 bg-neutral-200 rounded w-3/4"></div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 bg-neutral-200 rounded w-32"></div>
                <div className="h-3 bg-neutral-200 rounded w-24"></div>
              </div>
            </div>
            <div className="h-4 bg-neutral-200 rounded w-32"></div>
          </div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="aspect-video bg-neutral-200 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-neutral-200 rounded"></div>
          <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
          <div className="h-4 bg-neutral-200 rounded w-4/6"></div>
          <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
          <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-4 bg-neutral-200 rounded w-20"></div>
              <div className="h-4 bg-neutral-200 rounded w-20"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 bg-neutral-200 rounded-full w-16"></div>
              <div className="h-6 bg-neutral-200 rounded-full w-16"></div>
              <div className="h-6 bg-neutral-200 rounded-full w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSkeleton
