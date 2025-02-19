import { type BlogPost } from '@/types/blog'
import PostWrapper from '../PostWrapper'
import PostLayout from '../PostLayout'
import PostSidebar from '../PostSidebar'
import PostMain from '../PostMain'
import PostReadingProgress from '../PostReadingProgress'
import RelatedPosts from '../RelatedPosts'
import { blogPosts } from '@/data/blogs'

interface PostContainerConfig {
  progress?: boolean
  header?: boolean
  image?: boolean
  footer?: boolean
  tableOfContents?: boolean
  authorBio?: boolean
  stats?: boolean
  relatedPosts?: boolean
  animate?: boolean
}

interface PostContainerProps {
  post: BlogPost
  config?: PostContainerConfig
  className?: string
}

const defaultConfig: PostContainerConfig = {
  progress: true,
  header: true,
  image: true,
  footer: true,
  tableOfContents: true,
  authorBio: true,
  stats: true,
  relatedPosts: true,
  animate: true
}

const PostContainer = ({
  post,
  config = defaultConfig,
  className = ''
}: PostContainerProps) => {
  const {
    progress = true,
    header = true,
    image = true,
    footer = true,
    tableOfContents = true,
    authorBio = true,
    stats = true,
    relatedPosts = true,
    animate = true
  } = config

  return (
    <PostWrapper 
      post={post}
      animate={animate}
      className={className}
    >
      {/* Reading Progress */}
      {progress && (
        <PostReadingProgress 
          showPercentage
          height={3}
        />
      )}

      <PostLayout
        post={post}
        showTableOfContents={false}
        sidebar={
          <PostSidebar 
            post={post}
            showTableOfContents={tableOfContents}
            showAuthorBio={authorBio}
            showStats={stats}
          />
        }
        footer={relatedPosts && (
          <RelatedPosts 
            currentPost={post}
            posts={blogPosts}
            maxPosts={3}
          />
        )}
      >
        <PostMain 
          post={post}
          showHeader={header}
          showImage={image}
          showFooter={footer}
          animate={false}
        />
      </PostLayout>
    </PostWrapper>
  )
}

export default PostContainer
