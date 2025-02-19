'use client'

import { useState, useEffect } from 'react'
import { type BlogPost } from '@/types/blog'
import BlogList from '@/components/blog/List'
import { blogPosts } from '@/data/blogs'
import { filterPosts, paginatePosts } from '@/utils/blog'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [layout] = useState<'grid' | 'list'>('grid')
  const [currentPage] = useState(1)

  useEffect(() => {
    // Initialize with all posts
    const filteredPosts = filterPosts(blogPosts, {})
    const paginatedPosts = paginatePosts(filteredPosts, currentPage)
    setPosts(paginatedPosts)
  }, [currentPage])

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Blog</h1>
        <p className="mt-2 text-neutral-600">
          Latest articles, guides, and updates from our team
        </p>
      </div>

      {/* Blog Posts */}
      <BlogList 
        posts={posts}
        layout={layout}
        showPagination={true}
      />
    </div>
  )
}
