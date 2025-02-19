'use client'

import { useEffect, useState } from 'react'

type TransitionName = 'fade' | 'slide-up' | 'slide-down' | 'scale'

interface TransitionProps {
  children: React.ReactNode
  show?: boolean
  name?: TransitionName
  duration?: number
  delay?: number
  className?: string
}

const getTransitionClasses = (name: TransitionName) => {
  const baseClasses = 'transition-all'
  
  const variants = {
    'fade': {
      initial: 'opacity-0',
      enter: 'opacity-100',
      exit: 'opacity-0'
    },
    'slide-up': {
      initial: 'opacity-0 translate-y-4',
      enter: 'opacity-100 translate-y-0',
      exit: 'opacity-0 translate-y-4'
    },
    'slide-down': {
      initial: 'opacity-0 -translate-y-4',
      enter: 'opacity-100 translate-y-0',
      exit: 'opacity-0 -translate-y-4'
    },
    'scale': {
      initial: 'opacity-0 scale-95',
      enter: 'opacity-100 scale-100',
      exit: 'opacity-0 scale-95'
    }
  }

  return {
    base: baseClasses,
    ...variants[name]
  }
}

const Transition = ({
  children,
  show = true,
  name = 'fade',
  duration = 200,
  delay = 0,
  className = ''
}: TransitionProps) => {
  const [isVisible, setIsVisible] = useState(show)
  const [isRendered, setIsRendered] = useState(show)

  useEffect(() => {
    let enterTimeout: NodeJS.Timeout
    let exitTimeout: NodeJS.Timeout

    if (show) {
      setIsRendered(true)
      enterTimeout = setTimeout(() => {
        setIsVisible(true)
      }, 10) // Small delay for enter animation
    } else {
      setIsVisible(false)
      exitTimeout = setTimeout(() => {
        setIsRendered(false)
      }, duration)
    }

    return () => {
      clearTimeout(enterTimeout)
      clearTimeout(exitTimeout)
    }
  }, [show, duration])

  if (!isRendered) return null

  const { base, initial, enter, exit } = getTransitionClasses(name)
  const transitionStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`
  }

  return (
    <div
      className={`${base} ${isVisible ? enter : initial} ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  )
}

export default Transition
