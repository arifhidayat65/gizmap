'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { type BlogPost } from '@/types/blog'

interface PostContextType {
  likes: number
  views: number
  hasLiked: boolean
  incrementViews: () => void
  toggleLike: () => void
}

const PostContext = createContext<PostContextType | null>(null)

interface PostProviderProps {
  post: BlogPost
  children: React.ReactNode
}

export const PostProvider = ({ post, children }: PostProviderProps) => {
  const [likes, setLikes] = useState(post.likes || 0)
  const [views, setViews] = useState(post.views || 0)
  const [hasLiked, setHasLiked] = useState(false)

  const incrementViews = useCallback(() => {
    setViews(prev => prev + 1)
    // Here you would typically make an API call to update the view count
  }, [])

  const toggleLike = useCallback(() => {
    setLikes(prev => prev + (hasLiked ? -1 : 1))
    setHasLiked(prev => !prev)
    // Here you would typically make an API call to update the like count
  }, [hasLiked])

  const value = {
    likes,
    views,
    hasLiked,
    incrementViews,
    toggleLike
  }

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  )
}

export const usePost = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePost must be used within a PostProvider')
  }
  return context
}

// Add to PostStats component:
/*
const { likes, views, hasLiked, toggleLike } = usePost()

<button 
  onClick={toggleLike}
  className={`flex items-center gap-1 ${hasLiked ? 'text-primary' : 'text-neutral-500'}`}
>
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill={hasLiked ? 'currentColor' : 'none'} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  <span>{likes.toLocaleString()}</span>
</button>
*/
