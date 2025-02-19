export interface PostConfig {
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

export type PostVariant = 'default' | 'compact' | 'minimal'

export const defaultConfig: PostConfig = {
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

export const variantConfigs: Record<PostVariant, PostConfig> = {
  default: defaultConfig,
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

export const mergeConfig = (variant: PostVariant, config?: PostConfig): PostConfig => ({
  ...variantConfigs[variant],
  ...config
})
