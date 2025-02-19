'use client'

import { useEffect, useState } from 'react'

interface PostReadingProgressProps {
  color?: string
  height?: number
  className?: string
  showPercentage?: boolean
}

const PostReadingProgress = ({
  color = 'var(--primary-color)',
  height = 2,
  className = '',
  showPercentage = false
}: PostReadingProgressProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      const article = document.querySelector('article')
      if (!article) return

      const windowHeight = window.innerHeight
      const articleHeight = article.getBoundingClientRect().height
      const scrollTop = window.scrollY
      const scrollHeight = articleHeight - windowHeight

      const currentProgress = Math.min(
        100,
        Math.max(0, Math.round((scrollTop / scrollHeight) * 100))
      )

      setProgress(currentProgress)
    }

    // Calculate initial progress
    calculateProgress()

    // Add scroll listener
    window.addEventListener('scroll', calculateProgress, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', calculateProgress)
    }
  }, [])

  return (
    <div className={`fixed top-0 left-0 z-50 w-full pointer-events-none ${className}`}>
      {/* Progress Bar */}
      <div 
        className="h-full bg-primary origin-left transition-transform ease-out duration-150"
        style={{ 
          height,
          backgroundColor: color,
          transform: `scaleX(${progress / 100})`
        }}
      />

      {/* Percentage */}
      {showPercentage && progress > 0 && (
        <div 
          className="absolute top-2 right-4 px-2 py-1 text-xs font-medium bg-white/90 text-neutral-900 rounded shadow backdrop-blur-sm"
          style={{ 
            color
          }}
        >
          {progress}%
        </div>
      )}
    </div>
  )
}

export default PostReadingProgress
