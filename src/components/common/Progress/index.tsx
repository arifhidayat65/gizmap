'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface ProgressProps {
  color?: string
  height?: number
  duration?: number
  delay?: number
  className?: string
}

const Progress = ({
  color = '#233d90',
  height = 2,
  duration = 300,
  delay = 0,
  className = ''
}: ProgressProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let progressTimeout: NodeJS.Timeout
    let finishTimeout: NodeJS.Timeout

    const startLoading = () => {
      setIsLoading(true)
      setProgress(0)

      progressTimeout = setTimeout(() => {
        setProgress(70)
      }, delay)
    }

    const finishLoading = () => {
      setProgress(100)

      finishTimeout = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, duration)
    }

    // Start loading on route change
    startLoading()

    // Finish loading after a delay
    finishTimeout = setTimeout(finishLoading, duration + delay + 200)

    return () => {
      clearTimeout(progressTimeout)
      clearTimeout(finishTimeout)
    }
  }, [pathname, searchParams, duration, delay])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed top-0 left-0 z-50 w-full pointer-events-none ${className}`}
      style={{ height }}
    >
      <div 
        className="h-full bg-primary origin-left transition-transform ease-out"
        style={{ 
          transform: `scaleX(${progress / 100})`,
          transitionDuration: `${duration}ms`,
          backgroundColor: color
        }}
      />
    </div>
  )
}

export default Progress
