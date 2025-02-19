import { Suspense } from 'react'
import PostLoadingSkeleton from '@/components/blog/PostLoadingSkeleton'
import { getLoadingMetadata } from '@/components/blog/PostLoadingMetadata'
import { getLoadingConfig, toPostConfig } from '@/components/blog/PostLoadingConfig'

/**
 * Blog Post Loading Page
 * 
 * Displays a loading skeleton while the blog post content is being fetched.
 * Uses Suspense boundaries for better loading UX and performance.
 * 
 * Features:
 * - Loading skeleton UI
 * - SEO-friendly metadata
 * - Suspense boundaries
 * - Robot control
 * - Social metadata
 * - Consistent configuration
 */
export default function BlogPostLoading() {
  const loadingConfig = getLoadingConfig('default', {
    showPlaceholders: true,
    delayMs: 2000
  })

  return (
    <Suspense 
      fallback={null}
      // Use loading config delay
      unstable_expectedLoadTime={loadingConfig.delayMs}
    >
      <PostLoadingSkeleton 
        variant="default"
        showSidebar={loadingConfig.tableOfContents || loadingConfig.authorBio}
        paragraphs={6}
        className="py-8"
        showPlaceholders={loadingConfig.showPlaceholders}
      />
    </Suspense>
  )
}

/**
 * Loading Metadata
 * 
 * Provides SEO-friendly metadata for the loading state.
 * Prevents indexing of loading states while allowing link following.
 * Includes OpenGraph and Twitter card metadata for social sharing.
 */
export const metadata = getLoadingMetadata('blog')

/**
 * Loading Config
 * 
 * Provides default configuration for the loading state.
 * This ensures consistent behavior between loading and loaded states.
 * Disables interactive features while preserving visual structure.
 */
export const config = toPostConfig(
  getLoadingConfig('default', {
    // Disable interactive features in loading state
    progress: false,
    stats: false,
    relatedPosts: false
  })
)
