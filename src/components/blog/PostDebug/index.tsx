'use client'

import { useState } from 'react'
import { type BlogPost } from '@/types/blog'
import { type PostConfig } from '../PostConfig'

interface PostDebugProps {
  post: BlogPost
  config: PostConfig
  enabled?: boolean
  className?: string
}

/**
 * Post Debug Component
 * 
 * Development tool for debugging blog posts. Shows:
 * - Post metadata
 * - Current configuration
 * - Performance metrics
 * - Component tree
 * - State changes
 */
const PostDebug = ({
  post,
  config,
  enabled = process.env.NODE_ENV === 'development',
  className = ''
}: PostDebugProps) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!enabled) return null

  return (
    <div 
      className={`
        fixed bottom-4 right-4 z-50 
        bg-white rounded-lg shadow-lg
        ${className}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 text-sm text-neutral-600 hover:text-primary"
      >
        <svg 
          className="w-5 h-5" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
          />
        </svg>
        <span>Debug</span>
      </button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="p-4 space-y-4">
          {/* Post Info */}
          <section>
            <h3 className="font-medium text-neutral-900 mb-2">Post Info</h3>
            <pre className="text-xs bg-neutral-50 p-2 rounded overflow-auto">
              {JSON.stringify(
                {
                  id: post.id,
                  title: post.title,
                  category: post.category,
                  tags: post.tags,
                  publishedAt: post.publishedAt,
                  updatedAt: post.updatedAt
                }, 
                null, 
                2
              )}
            </pre>
          </section>

          {/* Configuration */}
          <section>
            <h3 className="font-medium text-neutral-900 mb-2">Configuration</h3>
            <pre className="text-xs bg-neutral-50 p-2 rounded overflow-auto">
              {JSON.stringify(config, null, 2)}
            </pre>
          </section>

          {/* Performance */}
          <section>
            <h3 className="font-medium text-neutral-900 mb-2">Performance</h3>
            <div className="space-y-1 text-sm">
              {performance.getEntriesByType('measure').map((entry) => (
                <div key={entry.name} className="flex justify-between">
                  <span>{entry.name}:</span>
                  <span>{Math.round(entry.duration)}ms</span>
                </div>
              ))}
            </div>
          </section>

          {/* Component Tree */}
          <section>
            <h3 className="font-medium text-neutral-900 mb-2">Components</h3>
            <div className="text-sm space-y-1">
              {Array.from(document.querySelectorAll('[data-component]')).map((el, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-neutral-100 flex-shrink-0" />
                  <span>{el.getAttribute('data-component')}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default PostDebug
