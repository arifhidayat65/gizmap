import { type HTMLAttributes } from 'react'
import Container from '@/components/common/Container'
import PostSkeleton from '@/components/blog/PostSkeleton'
import PostLayout from '@/components/blog/PostLayout'
import { MOCK_POST } from '@/components/blog/PostMockData'

interface PostLoadingSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'compact' | 'minimal'
  showSidebar?: boolean
  paragraphs?: number
}

/**
 * Sidebar Loading Skeleton
 */
const SidebarSkeleton = () => (
  <div className="space-y-8 animate-pulse">
    {/* Table of Contents Skeleton */}
    <div className="space-y-4 p-4 bg-neutral-50 rounded-lg">
      <div className="h-6 w-40 bg-neutral-200 rounded" />
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-full bg-neutral-200 rounded" />
        ))}
      </div>
    </div>

    {/* Author Bio Skeleton */}
    <div className="space-y-4 p-6 bg-neutral-50 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 bg-neutral-200 rounded-full" />
        <div className="space-y-2">
          <div className="h-5 w-32 bg-neutral-200 rounded" />
          <div className="h-4 w-24 bg-neutral-200 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-neutral-200 rounded" />
        <div className="h-4 w-5/6 bg-neutral-200 rounded" />
        <div className="h-4 w-4/6 bg-neutral-200 rounded" />
      </div>
    </div>

    {/* Stats Skeleton */}
    <div className="space-y-3 p-4 bg-neutral-50 rounded-lg">
      <div className="h-5 w-28 bg-neutral-200 rounded" />
      <div className="flex items-center justify-between">
        <div className="h-4 w-20 bg-neutral-200 rounded" />
        <div className="h-4 w-16 bg-neutral-200 rounded" />
      </div>
    </div>
  </div>
)

/**
 * Post Loading Skeleton Component
 * 
 * A reusable loading skeleton for blog posts with configurable options.
 * Can be used in both page and component loading states.
 */
const PostLoadingSkeleton = ({
  variant = 'default',
  showSidebar = true,
  paragraphs = 6,
  className = ''
}: PostLoadingSkeletonProps) => {
  const content = (
    <PostLayout
      post={MOCK_POST}
      showTableOfContents={false}
      sidebar={showSidebar ? <SidebarSkeleton /> : undefined}
    >
      <PostSkeleton 
        variant={variant}
        showHeader
        showImage
        showContent
        showFooter
        paragraphs={paragraphs}
      />
    </PostLayout>
  )

  // If used as a page loading state, wrap with container
  if (className.includes('py-8')) {
    return (
      <Container size="lg" className={className}>
        {content}
      </Container>
    )
  }

  // If used as a component loading state, return without container
  return content
}

export default PostLoadingSkeleton
