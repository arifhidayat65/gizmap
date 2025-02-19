'use client'

import Link from 'next/link'
import { useState } from 'react'

const BlogNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
    { id: 'guide', name: 'Guide' }
  ]

  return (
    <nav className="border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Category Links */}
          <div className="hidden md:flex items-center space-x-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.id === 'all' ? '/blog' : `/blog/category/${category.id}`}
                className="blog-nav-link"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs ml-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Mobile Category Dropdown */}
          <div className="md:hidden w-full max-w-[200px]">
            <select 
              className="form-select w-full"
              onChange={(e) => {
                const path = e.target.value === 'all' ? '/blog' : `/blog/category/${e.target.value}`
                window.location.href = path
              }}
              defaultValue=""
            >
              <option value="" disabled>Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BlogNavbar
