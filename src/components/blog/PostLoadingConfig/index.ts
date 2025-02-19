import { type PostConfig } from '../PostConfig'

/**
 * Loading state configuration
 * 
 * Extends PostConfig with loading-specific options
 */
interface LoadingConfig extends Omit<PostConfig, 'animate'> {
  // Visual features
  header: boolean
  image: boolean
  footer: boolean
  tableOfContents: boolean
  authorBio: boolean
  stats: boolean
  relatedPosts: boolean

  // Loading-specific features
  showSkeleton: boolean
  showPlaceholders: boolean
  delayMs: number
}

/**
 * Default loading configuration
 * 
 * Preserves the visual structure while disabling interactive features
 */
export const DEFAULT_LOADING_CONFIG: LoadingConfig = {
  // Visual features
  progress: false,
  header: true,
  image: true,
  footer: true,
  tableOfContents: true,
  authorBio: true,
  stats: true,
  relatedPosts: true,

  // Loading-specific features
  showSkeleton: true,
  showPlaceholders: true,
  delayMs: 2000
}

/**
 * Generate loading configuration with overrides
 */
export const generateLoadingConfig = (
  overrides: Partial<LoadingConfig> = {}
): LoadingConfig => ({
  ...DEFAULT_LOADING_CONFIG,
  ...overrides
})

/**
 * Loading configurations for different variants
 */
export const VARIANT_LOADING_CONFIGS = {
  default: DEFAULT_LOADING_CONFIG,
  compact: generateLoadingConfig({
    tableOfContents: false,
    relatedPosts: false,
    delayMs: 1000
  }),
  minimal: generateLoadingConfig({
    footer: false,
    tableOfContents: false,
    authorBio: false,
    stats: false,
    relatedPosts: false,
    showPlaceholders: false,
    delayMs: 500
  })
}

/**
 * Get loading configuration for a specific variant
 */
export const getLoadingConfig = (
  variant: keyof typeof VARIANT_LOADING_CONFIGS = 'default',
  overrides: Partial<LoadingConfig> = {}
): LoadingConfig => ({
  ...VARIANT_LOADING_CONFIGS[variant],
  ...overrides
})

/**
 * Convert loading config to post config
 */
export const toPostConfig = (loadingConfig: LoadingConfig): PostConfig => {
  const { showSkeleton, showPlaceholders, delayMs, ...postConfig } = loadingConfig
  return postConfig
}
