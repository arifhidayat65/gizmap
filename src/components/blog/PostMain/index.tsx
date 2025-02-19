import { type BlogPost } from '@/types/blog'
import PostHeader from '../PostHeader'
import PostImage from '../PostImage'
import PostContent from '../PostContent'
import PostFooter from '../PostFooter'

interface PostMainProps {
  post: BlogPost
  showHeader?: boolean
  showImage?: boolean
  showFooter?: boolean
  animate?: boolean
  className?: string
}

const PostMain = ({
  post,
  showHeader = true,
  showImage = true,
  showFooter = true,
  animate = false,
  className = ''
}: PostMainProps) => {
  return (
    <div className={className}>
      {/* Post Header */}
      {showHeader && (
        <PostHeader 
          post={post} 
          className="mb-8"
          spacing="lg"
          animate={animate}
          showAuthor={false}
        />
      )}

      {/* Featured Image */}
      {showImage && (
        <div className="mb-8">
          <PostImage
            src={post.imageUrl}
            alt={post.title}
            aspectRatio="video"
            priority
            blur
          />
        </div>
      )}

      {/* Post Content */}
      <PostContent content={post.content} />

      {/* Post Footer */}
      {showFooter && (
        <PostFooter 
          post={post} 
          className="mt-12"
        />
      )}
    </div>
  )
}

export default PostMain
