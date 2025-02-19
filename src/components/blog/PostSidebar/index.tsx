import { type BlogPost } from '@/types/blog'
import TableOfContents from '../TableOfContents'
import PostAuthorBio from '../PostAuthorBio'
import PostStats from '../PostStats'

interface PostSidebarProps {
  post: BlogPost
  showTableOfContents?: boolean
  showAuthorBio?: boolean
  showStats?: boolean
  className?: string
}

const PostSidebar = ({
  post,
  showTableOfContents = true,
  showAuthorBio = true,
  showStats = true,
  className = ''
}: PostSidebarProps) => {
  if (!showTableOfContents && !showAuthorBio && !showStats) return null

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Table of Contents */}
      {showTableOfContents && (
        <div className="bg-white rounded-lg shadow-sm">
          <TableOfContents />
        </div>
      )}

      {/* Author Bio */}
      {showAuthorBio && (
        <div className="p-6 bg-neutral-50 rounded-lg">
          <PostAuthorBio 
            author={post.author}
            size="md"
            showBio
          />
        </div>
      )}

      {/* Post Stats */}
      {showStats && (
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-neutral-500 mb-3">
            Post Statistics
          </h3>
          <PostStats 
            post={post}
            size="sm"
            variant="minimal"
            showLabels
            interactive={false}
          />
        </div>
      )}
    </div>
  )
}

export default PostSidebar
