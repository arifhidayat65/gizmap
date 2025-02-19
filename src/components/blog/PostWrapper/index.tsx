'use client'

import { type BlogPost } from '@/types/blog'
import PostContextProvider from '../PostContext'
import Transition from '@/components/common/Transition'

interface PostWrapperProps {
  post: BlogPost
  children: React.ReactNode
  animate?: boolean
  className?: string
}

const PostWrapper = ({
  post,
  children,
  animate = true,
  className = ''
}: PostWrapperProps) => {
  const content = (
    <PostContextProvider post={post}>
      <div className={`relative ${className}`}>
        {children}
      </div>
    </PostContextProvider>
  )

  if (!animate) return content

  return (
    <Transition 
      show
      name="fade"
      duration={300}
    >
      {content}
    </Transition>
  )
}

export default PostWrapper
