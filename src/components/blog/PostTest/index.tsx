'use client'

import { type BlogPost } from '@/types/blog'
import { type PostConfig } from '../PostConfig'
import { DEFAULT_CONFIG } from '../PostConstants'
import { getTestUtils } from '../PostTestUtils'

// Extend window interface for test utilities
declare global {
  interface Window {
    __POST_TEST__?: ReturnType<typeof getTestUtils>
  }
}

interface PostTestProps {
  post: BlogPost
  config?: PostConfig
  enabled?: boolean
}

/**
 * Post Test Component
 * 
 * Testing utility for blog post components. Provides:
 * - Test data generation
 * - Component testing helpers
 * - Accessibility checks
 * - Prop validation
 * - Event simulation
 * 
 * @example
 * // In development or test environment
 * <PostTest post={post} config={config} />
 * 
 * // Access test utilities in browser console
 * window.__POST_TEST__.generateTestPost()
 * window.__POST_TEST__.runA11yChecks()
 * window.__POST_TEST__.simulateUserInteractions()
 * window.__POST_TEST__.validateProps()
 */
const PostTest = ({
  post,
  config = DEFAULT_CONFIG,
  enabled = process.env.NODE_ENV === 'test'
}: PostTestProps) => {
  if (!enabled) return null

  // Expose test utilities
  if (typeof window !== 'undefined') {
    window.__POST_TEST__ = getTestUtils(post, config)

    // Log available test utilities
    console.info('PostTest utilities available:', Object.keys(window.__POST_TEST__))
    
    // Log initial validation results
    const validationErrors = window.__POST_TEST__.validateProps()
    if (validationErrors.length > 0) {
      console.warn('PostTest validation errors:', validationErrors)
    }

    // Log accessibility issues
    const a11yIssues = window.__POST_TEST__.runA11yChecks()
    if (a11yIssues.length > 0) {
      console.warn('PostTest accessibility issues:', a11yIssues)
    }
  }

  // This is a testing utility component, so it doesn't render anything
  return null
}

export default PostTest
