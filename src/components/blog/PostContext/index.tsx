'use client'

import { 
  createContext, 
  useContext, 
  useCallback, 
  useState, 
  useEffect 
} from 'react'
import { type BlogPost } from '@/types/blog'

interface PostContextValue {
  likes: number
  views: number
  hasLiked: boolean
  isLoading: boolean
  incrementViews: () => void
  toggleLike: () => void
}

const PostContext = createContext<PostContextValue | null>(null)

interface PostContextProviderProps {
  post: BlogPost
  children: React.ReactNode
}

export const PostContextProvider = ({ 
  post, 
  children 
}: PostContextProviderProps) => {
  const [likes, setLikes] = useState(post.likes || 0)
  const [views, setViews] = useState(post.views || 0)
  const [hasLiked, setHasLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load initial state from localStorage
  useEffect(() => {
    const loadState = () => {
      try {
        const storedLikes = localStorage.getItem(`blog-post-${post.id}-liked`)
        if (storedLikes) {
          setHasLiked(JSON.parse(storedLikes))
        }
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading post state:', error)
        setIsLoading(false)
      }
    }

    loadState()
  }, [post.id])

  // Save state to localStorage
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(`blog-post-${post.id}-liked`, JSON.stringify(hasLiked))
      } catch (error) {
        console.error('Error saving post state:', error)
      }
    }
  }, [post.id, hasLiked, isLoading])

  const incrementViews = useCallback(() => {
    setViews(prev => prev + 1)
    // Here you would typically make an API call to update the view count
  }, [])

  const toggleLike = useCallback(() => {
    if (!isLoading) {
      setLikes(prev => prev + (hasLiked ? -1 : 1))
      setHasLiked(prev => !prev)
      // Here you would typically make an API call to update the like count
    }
  }, [hasLiked, isLoading])

  const value: PostContextValue = {
    likes,
    views,
    hasLiked,
    isLoading,
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
    throw new Error('usePost must be used within a PostContextProvider')
  }
  return context
}

export default PostContextProvider
