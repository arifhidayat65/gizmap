'use client'

import PostContainer from '../PostContainer'
import { type PostProps, type PostContainerProps } from '../PostTypes'
import { usePostConfig, usePostMetadata } from '../PostHooks'

/**
 * Blog Post Component
 * 
 * A flexible and configurable blog post component that supports different
 * display variants and custom configurations. Handles post metadata,
 * navigation, sharing, and feature configuration.
 * 
 * Features:
 * - Multiple display variants (default, compact, minimal)
 * - Configurable features (progress bar, table of contents, etc.)
 * - Automatic metadata handling
 * - Post navigation
 * - Social sharing
 * - View tracking
 * - Like functionality
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
const Post = ({ 
  post,
  variant = 'default',
  config,
  baseUrl = '',
  className = ''
}: PostProps) => {
  // Get config and feature status
  const { config: finalConfig, hasEnabledFeatures } = usePostConfig(variant, config)

  // Get sharing and navigation data
  const { sharing, navigation } = usePostMetadata(post, baseUrl, [])

  // Don't render if no features are enabled
  if (!hasEnabledFeatures) {
    return null
  }

  const containerProps: PostContainerProps = {
    post,
    config: finalConfig,
    sharing,
    navigation,
    className
  }

  return <PostContainer {...containerProps} />
}

// Prevent unnecessary re-renders
export default Post
