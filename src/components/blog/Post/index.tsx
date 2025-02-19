'use client'

import { type BlogPost } from '@/types/blog'
import { blogPosts } from '@/data/blogs'
import TableOfContents from '../TableOfContents'
import RelatedPosts from '../RelatedPosts'
import PostImage from '../PostImage'
import PostContent from '../PostContent'
import PostHeader from '../PostHeader'
import PostFooter from '../PostFooter'
import PostReadingProgress from '../PostReadingProgress'
import Container from '@/components/common/Container'

interface BlogPostProps {
  post: BlogPost
  showProgress?: boolean
  showTableOfContents?: boolean
  showRelatedPosts?: boolean
  className?: string
}

const BlogPostComponent = ({ 
  post,
  showProgress = true,
  showTableOfContents = true,
  showRelatedPosts = true,
  className = ''
}: BlogPostProps) => {
  return (
    <>
      {/* Reading Progress */}
      {showProgress && (
        <PostReadingProgress 
          showPercentage
          height={3}
        />
      )}

      <div className={`space-y-12 ${className}`}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Post Header */}
            <PostHeader 
              post={post} 
              className="mb-8"
              spacing="lg"
            />

            {/* Featured Image */}
            <div className="mb-8">
              <PostImage
                src={post.imageUrl}
                alt={post.title}
                aspectRatio="video"
                priority
                blur
              />
            </div>

            {/* Post Content */}
            <PostContent content={post.content} />

            {/* Post Footer */}
            <PostFooter 
              post={post} 
              className="mt-12"
            />
          </article>

          {/* Table of Contents Sidebar */}
          {showTableOfContents && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          )}
        </div>

        {/* Related Posts */}
        {showRelatedPosts && (
          <Container size="lg" className="border-t pt-12">
            <RelatedPosts 
              currentPost={post}
              posts={blogPosts}
              maxPosts={3}
            />
          </Container>
        )}
      </div>
    </>
  )
}

export default BlogPostComponent
