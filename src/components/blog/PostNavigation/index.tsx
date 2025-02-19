import Link from 'next/link'
import { type BlogPost } from '@/types/blog'
import { blogPosts } from '@/data/blogs'

interface PostNavigationProps {
  currentPost: BlogPost
  className?: string
}

const PostNavigation = ({ currentPost, className = '' }: PostNavigationProps) => {
  // Find current post index
  const currentIndex = blogPosts.findIndex(post => post.id === currentPost.id)
  
  // Get previous and next posts
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  if (!previousPost && !nextPost) return null

  return (
    <nav className={`flex items-stretch gap-4 ${className}`}>
      {/* Previous Post */}
      {previousPost && (
        <Link 
          href={`/blog/${previousPost.id}`}
          className="flex-1 group"
        >
          <div className="h-full p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
            <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
              <svg 
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              <span>Previous Post</span>
            </div>
            <h3 className="font-medium text-neutral-900 line-clamp-2 group-hover:text-primary transition-colors">
              {previousPost.title}
            </h3>
          </div>
        </Link>
      )}

      {/* Next Post */}
      {nextPost && (
        <Link 
          href={`/blog/${nextPost.id}`}
          className="flex-1 group"
        >
          <div className="h-full p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors text-right">
            <div className="flex items-center justify-end gap-2 text-sm text-neutral-500 mb-2">
              <span>Next Post</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </div>
            <h3 className="font-medium text-neutral-900 line-clamp-2 group-hover:text-primary transition-colors">
              {nextPost.title}
            </h3>
          </div>
        </Link>
      )}
    </nav>
  )
}

export default PostNavigation
