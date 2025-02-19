import { type PostConfig, type PostVariant } from '../PostConfig'

/**
 * Default configuration for blog posts
 */
export const DEFAULT_CONFIG: PostConfig = {
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

/**
 * Variant-specific configurations
 */
export const VARIANT_CONFIGS: Record<PostVariant, Partial<PostConfig>> = {
  default: DEFAULT_CONFIG,
  compact: {
    progress: false,
    header: true,
    image: true,
    footer: true,
    tableOfContents: false,
    authorBio: true,
    stats: true,
    relatedPosts: false,
    animate: false
  },
  minimal: {
    progress: false,
    header: true,
    image: true,
    footer: false,
    tableOfContents: false,
    authorBio: false,
    stats: false,
    relatedPosts: false,
    animate: false
  }
}

/**
 * Feature flags for development/testing
 */
export const FEATURE_FLAGS = {
  enableViewTracking: true,
  enableLikes: true,
  enableSharing: true,
  enableNavigation: true,
  enableComments: false
}

/**
 * Animation configuration
 */
export const ANIMATION_CONFIG = {
  duration: 300,
  easing: 'ease-in-out',
  delay: 0
}

/**
 * Layout configuration
 */
export const LAYOUT_CONFIG = {
  sidebarWidth: 320,
  maxContentWidth: 768,
  headerHeight: 64,
  footerHeight: 80
}

/**
 * Responsive breakpoints
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

/**
 * Social sharing platforms
 */
export const SHARE_PLATFORMS = [
  {
    name: 'Twitter',
    icon: 'twitter',
    getUrl: (url: string, title: string) => 
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    getUrl: (url: string, title: string) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  }
]

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  likes: (postId: string) => `blog-post-${postId}-liked`,
  views: (postId: string) => `blog-post-${postId}-viewed`,
  theme: 'blog-theme',
  fontSize: 'blog-font-size'
}

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  postNotFound: 'The blog post you\'re looking for doesn\'t exist or has been removed.',
  loadError: 'We couldn\'t load the blog post. Please try again later.',
  invalidConfig: 'Invalid post configuration provided.',
  missingProps: 'Required props are missing.'
}
