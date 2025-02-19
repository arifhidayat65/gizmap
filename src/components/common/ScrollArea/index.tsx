'use client'

import { useEffect, useState } from 'react'

interface ScrollAreaProps {
  children: React.ReactNode
  className?: string
  offset?: number
  stickyClass?: string
}

const ScrollArea = ({
  children,
  className = '',
  offset = 0,
  stickyClass = ''
}: ScrollAreaProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  return (
    <div 
      className={`transition-all duration-200 ${className} ${
        isScrolled ? stickyClass : ''
      }`}
    >
      {children}
    </div>
  )
}

export default ScrollArea
