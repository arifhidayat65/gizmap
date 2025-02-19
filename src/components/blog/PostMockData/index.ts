import { type BlogPost } from '@/types/blog'

/**
 * Mock data for loading states and testing
 */
export const MOCK_POST: BlogPost = {
  id: 'loading',
  title: 'Loading...',
  excerpt: 'Loading post content...',
  content: '',
  imageUrl: '/assets/image/placeholder.jpg',
  category: 'guide',
  tags: ['loading'],
  author: {
    name: 'Loading...',
    avatar: '/assets/image/placeholder-avatar.jpg',
    role: 'Loading...'
  },
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  readTime: 0,
  views: 0,
  likes: 0
}

/**
 * Generate mock post with custom data
 */
export const generateMockPost = (overrides: Partial<BlogPost> = {}): BlogPost => ({
  ...MOCK_POST,
  ...overrides
})

/**
 * Generate multiple mock posts
 */
export const generateMockPosts = (count: number): BlogPost[] => 
  Array.from({ length: count }, (_, i) => ({
    ...MOCK_POST,
    id: `loading-${i}`,
    title: `Loading Post ${i + 1}...`
  }))

/**
 * Mock loading states
 */
export const LOADING_STATES = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error'
} as const

export type LoadingState = typeof LOADING_STATES[keyof typeof LOADING_STATES]

/**
 * Mock error states
 */
export const ERROR_STATES = {
  none: null,
  notFound: 'not-found',
  network: 'network-error',
  server: 'server-error'
} as const

export type ErrorState = typeof ERROR_STATES[keyof typeof ERROR_STATES]

/**
 * Mock loading configuration
 */
export interface LoadingConfig {
  state: LoadingState
  error: ErrorState
  delay?: number
  retry?: boolean
}

export const DEFAULT_LOADING_CONFIG: LoadingConfig = {
  state: LOADING_STATES.initial,
  error: ERROR_STATES.none,
  delay: 1000,
  retry: true
}

/**
 * Simulate loading delay
 */
export const simulateLoading = (delay: number = 1000): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, delay))

/**
 * Simulate error
 */
export const simulateError = (error: ErrorState = ERROR_STATES.network): Promise<never> =>
  Promise.reject(new Error(`Simulated error: ${error}`))
