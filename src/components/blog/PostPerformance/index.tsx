'use client'

import { useEffect, useRef } from 'react'
import { type BlogPost } from '@/types/blog'

interface PostPerformanceProps {
  post: BlogPost
  enabled?: boolean
}

/**
 * Post Performance Component
 * 
 * Handles performance optimizations for blog posts including:
 * - Image lazy loading
 * - Code splitting
 * - Resource prefetching
 * - Performance monitoring
 */
const PostPerformance = ({
  post,
  enabled = true
}: PostPerformanceProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Handle image lazy loading
  useEffect(() => {
    if (!enabled) return

    const lazyLoadImages = () => {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observerRef.current?.unobserve(img)
            }
          }
        })
      })

      document.querySelectorAll('img[data-src]').forEach((img) => {
        observerRef.current?.observe(img)
      })
    }

    lazyLoadImages()

    return () => {
      observerRef.current?.disconnect()
    }
  }, [enabled])

  // Prefetch related posts
  useEffect(() => {
    if (!enabled) return

    const prefetchRelatedPosts = () => {
      const links = document.querySelectorAll('a[data-prefetch]')
      links.forEach((link) => {
        const href = link.getAttribute('href')
        if (href) {
          const prefetcher = document.createElement('link')
          prefetcher.rel = 'prefetch'
          prefetcher.href = href
          document.head.appendChild(prefetcher)
        }
      })
    }

    prefetchRelatedPosts()
  }, [enabled])

  // Monitor performance metrics
  useEffect(() => {
    if (!enabled || typeof window.performance?.mark !== 'function') return

    const recordMetrics = () => {
      // Mark post load start
      performance.mark('post-load-start')

      // Record when post is fully loaded
      window.addEventListener('load', () => {
        performance.mark('post-load-end')
        performance.measure(
          'post-load-time',
          'post-load-start',
          'post-load-end'
        )
      })

      // Record first contentful paint
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime)
            observer.disconnect()
          }
        })
      })

      observer.observe({ entryTypes: ['paint'] })
    }

    recordMetrics()
  }, [enabled])

  // This is a performance optimization component, so it doesn't render anything
  return null
}

export default PostPerformance
