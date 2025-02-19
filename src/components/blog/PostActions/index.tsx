import { type BlogPost } from '@/types/blog'
import PostSocial from '../PostSocial'
import PostSection from '../PostSection'

interface PostActionsProps {
  post: BlogPost
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal'
  showStats?: boolean
  showShare?: boolean
  showLabels?: boolean
  autoIncrement?: boolean
  border?: boolean
  spacing?: 'sm' | 'md' | 'lg'
}

const PostActions = ({
  post,
  className = '',
  size = 'md',
  variant = 'default',
  showStats = true,
  showShare = true,
  showLabels = true,
  autoIncrement = true,
  border = false,
  spacing = 'md'
}: PostActionsProps) => {
  const content = (
    <PostSocial 
      post={post}
      size={size}
      variant={variant}
      showStats={showStats}
      showShare={showShare}
      showLabels={showLabels}
      autoIncrement={autoIncrement}
    />
  )

  if (border) {
    return (
      <PostSection 
        border={border}
        spacing={spacing}
        className={className}
      >
        {content}
      </PostSection>
    )
  }

  return (
    <div className={className}>
      {content}
    </div>
  )
}

export default PostActions
