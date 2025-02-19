import { type BlogPost } from '@/types/blog'
import { type PostConfig, type PostVariant } from '../PostConfig'

export interface PostNavigation {
  previousPost: BlogPost | null
  nextPost: BlogPost | null
}

export interface PostSharing {
  url: string
  title: string
  description?: string
}

export interface PostProps {
  post: BlogPost
  variant?: PostVariant
  config?: Partial<PostConfig>
  baseUrl?: string
  className?: string
}

export interface PostContainerProps {
  post: BlogPost
  config: PostConfig
  sharing: PostSharing
  navigation: PostNavigation
  className?: string
}

export interface PostFeatureProps {
  post: BlogPost
  config: PostConfig
  className?: string
}

export interface PostLayoutProps extends PostFeatureProps {
  children: React.ReactNode
}

export interface PostHeaderProps extends PostFeatureProps {
  animate?: boolean
}

export interface PostFooterProps extends PostFeatureProps {
  sharing: PostSharing
  navigation: PostNavigation
}

export interface PostSidebarProps extends PostFeatureProps {
  sharing: PostSharing
}
