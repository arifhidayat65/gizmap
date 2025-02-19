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
import { Button } from '../../common/Button'

const PostContent = ({ 
  post,
  variant = 'default',
  config,
  baseUrl = '',
  className = ''
}: PostProps) => {
  // Get config and feature status
  const { config: finalConfig, hasEnabledFeatures } = usePostConfig(variant, {
    ...config,
    animate: config?.animate ?? true
  })

  // Get sharing and navigation data
  const { sharing, navigation } = usePostMetadata(post, baseUrl)

  // Early returns after hooks
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
