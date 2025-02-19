'use client'

import { type BlogListProps } from '@/types/blog'
import BlogCard from '../Card'
import { getTotalPages } from '@/utils/blog'

const BlogList = ({ 
  posts, 
  layout = 'grid', 
  showPagination = true 
}: BlogListProps) => {
  const totalPages = getTotalPages(posts.length)

  return (
    <div className="space-y-8">
      {/* Posts Grid/List */}
      <div className={`grid gap-6 ${
        layout === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {posts.map(post => (
          <BlogCard 
            key={post.id} 
            post={post} 
            variant={layout === 'list' ? 'compact' : 'default'}
          />
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                page === 1
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-primary hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogList
