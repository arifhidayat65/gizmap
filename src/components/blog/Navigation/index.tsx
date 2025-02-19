'use client'

import { useState } from 'react'
import { type BlogNavigationProps } from '../../../types/blog'

const BlogNavigation = ({ 
  currentCategory,
  onSearch,
  onCategoryChange 
}: BlogNavigationProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <nav className="border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Search Bar */}
          <div className="flex-1 max-w-xs relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search articles..."
              className="search-input"
            />
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              aria-label="Search"
            >
              <svg 
                className="w-5 h-5 search-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 ml-4">
            <button
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              aria-label="Grid view"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              aria-label="List view"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BlogNavigation
