'use client'

import { memo } from 'react'
import PostContainer from '../PostContainer'
import PostError from '../PostError'
import PostErrorBoundary from '../PostErrorBoundary'
import PostAnalytics from '../PostAnalytics'
import PostSEO from '../PostSEO'
import PostPerformance from '../PostPerformance'
import PostDebug from '../PostDebug'
import { type PostProps, type PostContainerProps } from '../PostTypes'
import { usePostConfig, usePostMetadata } from '../PostHooks'
import { ERROR_MESSAGES } from '../PostConstants'
import { Button } from '@/components/common/Button'

/**
 * Blog Post Component
 * 
 * A flexible and configurable blog post component that supports different
 * display variants and custom configurations. Handles post metadata,
 * navigation, sharing, analytics, SEO, performance, debugging, and error handling.
 * 
 * Features:
 * - Multiple display variants (default, compact, minimal)
 * - Configurable features (progress bar, table of contents, etc.)
 * - Automatic metadata handling
 * - Post navigation
 * - Social sharing
 * - View tracking
 * - Like functionality
 * - Error handling and recovery
 * - Analytics tracking
 * - SEO optimization
 * - Performance optimizations
 * - Development debugging
 * 
 * @example
 * // Default variant
 * <Post post={post} />
 * 
 * // Compact variant with base URL
 * <Post 
 *   post={post} 
 *   variant="compact"
 *   baseUrl="https://example.com"
 * />
 * 
 * // Custom configuration
 * <Post 
 *   post={post} 
 *   config={{
 *     progress: false,
 *     relatedPosts: true,
 *     tableOfContents: false
 *   }}
 * />
 */
const PostContent = ({ 
  post,
  variant = 'default',
  config,
  baseUrl = '',
  className = ''
}: PostProps) => {
  // Validate required props
  if (!post) {
    return (
      <PostError 
        title="Missing Post"
        message={ERROR_MESSAGES.missingProps}
        action={
          <Button 
            onClick={() => window.location.href = '/blog'}
            variant="primary"
          >
            Back to Blog
          </Button>
        }
      />
    )
  }

  // Get config and feature status
  const { config: finalConfig, hasEnabledFeatures } = usePostConfig(variant, {
    ...config,
    animate: config?.animate ?? true
  })

  // Get sharing and navigation data
  const { sharing, navigation } = usePostMetadata(post, baseUrl)

  // Don't render if no features are enabled
  if (!hasEnabledFeatures) {
    return (
      <PostError 
        title="Invalid Configuration"
        message={ERROR_MESSAGES.invalidConfig}
        code={JSON.stringify(config, null, 2)}
        action={
          <Button 
            onClick={() => window.location.href = '/blog'}
            variant="primary"
          >
            Back to Blog
          </Button>
        }
      />
    )
  }

  const containerProps: PostContainerProps = {
    post,
    config: finalConfig,
    sharing,
    navigation,
    className
  }

  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <>
      {/* SEO Metadata */}
      <PostSEO 
        post={post}
        baseUrl={baseUrl}
      />

      {/* Performance Optimizations */}
      <PostPerformance 
        post={post}
        enabled={isProduction}
      />

      {/* Analytics Tracking */}
      <PostAnalytics 
        post={post}
        variant={variant}
        enabled={isProduction}
      />

      {/* Debug Panel */}
      <PostDebug 
        post={post}
        config={finalConfig}
      />

      {/* Post Content */}
      <PostContainer {...containerProps} />
    </>
  )
}

// Wrap with error boundary
const Post = (props: PostProps) => (
  <PostErrorBoundary>
    <PostContent {...props} />
  </PostErrorBoundary>
)

// Prevent unnecessary re-renders with deep comparison of config
export default memo(Post, (prevProps, nextProps) => {
  return (
    prevProps.post?.id === nextProps.post?.id &&
    prevProps.variant === nextProps.variant &&
    prevProps.baseUrl === nextProps.baseUrl &&
    prevProps.className === nextProps.className &&
    JSON.stringify(prevProps.config) === JSON.stringify(nextProps.config)
  )
})
