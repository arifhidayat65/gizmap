import { useState, useEffect, useCallback } from 'react'
import { type BlogPost } from '@/types/blog'
import { type PostConfig, type PostVariant, mergeConfig } from '../PostConfig'
import { getPostUrl, getAdjacentPosts } from '../PostUtils'
import { type PostNavigation, type PostSharing } from '../PostTypes'

interface UsePostConfigResult {
  config: PostConfig
  hasEnabledFeatures: boolean
}

export const usePostConfig = (
  variant: PostVariant = 'default',
  initialConfig?: Partial<PostConfig>
): UsePostConfigResult => {
  const config = mergeConfig(variant, initialConfig)
  const hasEnabledFeatures = Object.values(config)
    .filter(value => typeof value === 'boolean')
    .some(Boolean)

  return { config, hasEnabledFeatures }
}

interface UsePostMetadataResult {
  sharing: PostSharing
  navigation: PostNavigation
}

export const usePostMetadata = (
  post: BlogPost,
  baseUrl: string = '',
  posts: BlogPost[] = []
): UsePostMetadataResult => {
  const sharing = {
    url: getPostUrl(post, baseUrl),
    title: post.title,
    description: post.excerpt
  }

  const { previous, next } = getAdjacentPosts(post, posts)
  const navigation = {
    previousPost: previous,
    nextPost: next
  }

  return { sharing, navigation }
}

interface UsePostViewsResult {
  views: number
  incrementViews: () => void
}

export const usePostViews = (
  initialViews: number = 0,
  postId: string
): UsePostViewsResult => {
  const [views, setViews] = useState(initialViews)

  const incrementViews = useCallback(() => {
    setViews(prev => prev + 1)
    // Here you would typically make an API call to update the view count
  }, [])

  useEffect(() => {
    // Increment views when component mounts
    incrementViews()
  }, [incrementViews])

  return { views, incrementViews }
}

interface UsePostLikesResult {
  likes: number
  hasLiked: boolean
  toggleLike: () => void
}

export const usePostLikes = (
  initialLikes: number = 0,
  postId: string
): UsePostLikesResult => {
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(false)

  // Load initial state from localStorage
  useEffect(() => {
    const storedLike = localStorage.getItem(`blog-post-${postId}-liked`)
    if (storedLike) {
      setHasLiked(JSON.parse(storedLike))
    }
  }, [postId])

  const toggleLike = useCallback(() => {
    setLikes(prev => prev + (hasLiked ? -1 : 1))
    setHasLiked(prev => !prev)
    localStorage.setItem(`blog-post-${postId}-liked`, JSON.stringify(!hasLiked))
    // Here you would typically make an API call to update the like count
  }, [hasLiked, postId])

  return { likes, hasLiked, toggleLike }
}
