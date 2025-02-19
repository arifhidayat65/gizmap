import { type BlogPost } from '@/types/blog'
import PostTags from '../PostTags'
import PostActions from '../PostActions'
import PostNavigation from '../PostNavigation'
import PostAuthorBio from '../PostAuthorBio'
import PostLink from '../PostLink'
import PostSection from '../PostSection'

interface PostFooterProps {
  post: BlogPost
  className?: string
}

const PostFooter = ({ post, className = '' }: PostFooterProps) => {
  return (
    <footer className={`${className} divide-y divide-neutral-100`}>
      {/* Actions and Tags */}
      <PostSection border={false} spacing="lg">
        <div className="space-y-6">
          <PostActions post={post} />
          <PostTags 
            tags={post.tags}
            size="md"
            variant="default"
          />
        </div>
      </PostSection>

      {/* Author Bio */}
      <PostSection spacing="lg">
        <PostAuthorBio 
          author={post.author}
          size="lg"
          showBio
        />
      </PostSection>

      {/* Category Link */}
      <PostSection spacing="lg">
        <div className="text-center">
          <PostLink 
            href={`/blog/category/${post.category}`}
            icon="arrow-right"
            center
          >
            More posts in {post.category}
          </PostLink>
        </div>
      </PostSection>

      {/* Post Navigation */}
      <PostSection spacing="lg">
        <PostNavigation currentPost={post} />
      </PostSection>

      {/* Back to Blog */}
      <PostSection spacing="lg">
        <div className="text-center">
          <PostLink 
            href="/blog"
            icon="arrow-left"
            center
          >
            Back to all posts
          </PostLink>
        </div>
      </PostSection>
    </footer>
  )
}

export default PostFooter
