'use client'

import { useEffect, useState, useCallback } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

const TableOfContents = ({ className = '' }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Function to get all headings from the article
  const getHeadings = useCallback(() => {
    const articleHeadings = Array.from(document.querySelectorAll('article h2, article h3'))
      .map(heading => ({
        id: heading.id || heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '',
        text: heading.textContent || '',
        level: Number(heading.tagName.charAt(1))
      }))
      .filter(heading => heading.id && heading.text)

    // Set IDs for headings that don't have them
    articleHeadings.forEach(heading => {
      const element = document.getElementById(heading.id)
      if (element && !element.id) {
        element.id = heading.id
      }
    })

    return articleHeadings
  }, [])

  // Update active heading based on scroll position
  const updateActiveHeading = useCallback(() => {
    const headingElements = headings.map(heading => 
      document.getElementById(heading.id)
    ).filter((element): element is HTMLElement => element !== null)

    const headingPositions = headingElements.map(element => ({
      id: element.id,
      position: element.getBoundingClientRect().top
    }))

    // Find the first heading that's at or below the top of the viewport
    const activeHeading = headingPositions.find(heading => 
      heading.position >= 0
    ) || headingPositions[0]

    if (activeHeading) {
      setActiveId(activeHeading.id)
    }
  }, [headings])

  // Initialize headings
  useEffect(() => {
    setHeadings(getHeadings())
  }, [getHeadings])

  // Set up scroll listener
  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      window.requestAnimationFrame(updateActiveHeading)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings, updateActiveHeading])

  if (headings.length === 0) return null

  return (
    <nav className={`hidden lg:block ${className}`}>
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map(heading => (
          <li 
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 text-sm transition-colors ${
                activeId === heading.id
                  ? 'text-primary font-medium'
                  : 'text-neutral-600 hover:text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth'
                })
                setActiveId(heading.id)
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
