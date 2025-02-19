'use client'

import { useEffect } from 'react'
import { type BlogPost } from '@/types/blog'

interface PostAnalyticsProps {
  post: BlogPost
  variant?: string
  enabled?: boolean
}

// Add Google Analytics types
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      action: string,
      params: {
        [key: string]: any
      }
    ) => void
  }
}

/**
 * Post Analytics Component
 * 
 * Handles analytics tracking for blog posts including:
 * - Page views
 * - Time on page
 * - Scroll depth
 * - Interactions (likes, shares)
 */
const PostAnalytics = ({
  post,
  variant = 'default',
  enabled = true
}: PostAnalyticsProps) => {
  // Track page view
  useEffect(() => {
    if (!enabled) return

    const trackPageView = () => {
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_view', {
            page_title: post.title,
            page_path: `/blog/${post.id}`,
            post_id: post.id,
            post_category: post.category,
            post_variant: variant
          })
        }
      } catch (error) {
        console.error('Failed to track page view:', error)
      }
    }

    trackPageView()
  }, [post.id, post.title, post.category, variant, enabled])

  // Track time on page
  useEffect(() => {
    if (!enabled) return

    const startTime = Date.now()

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'time_on_page', {
            post_id: post.id,
            time_seconds: timeOnPage
          })
        }
      } catch (error) {
        console.error('Failed to track time on page:', error)
      }
    }
  }, [post.id, enabled])

  // Track scroll depth
  useEffect(() => {
    if (!enabled) return

    let maxScroll = 0
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY + window.innerHeight) / 
        document.documentElement.scrollHeight * 100
      )

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
      }
    }

    window.addEventListener('scroll', trackScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', trackScroll)
      
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'scroll_depth', {
            post_id: post.id,
            depth_percent: maxScroll
          })
        }
      } catch (error) {
        console.error('Failed to track scroll depth:', error)
      }
    }
  }, [post.id, enabled])

  // This is a tracking component, so it doesn't render anything
  return null
}

export default PostAnalytics
