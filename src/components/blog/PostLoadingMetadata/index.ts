import { type Metadata } from 'next'

/**
 * Default loading metadata
 */
export const DEFAULT_LOADING_METADATA: Metadata = {
  title: 'Loading... | GizMap Blog',
  description: 'Loading blog post content...',
  openGraph: {
    title: 'Loading...',
    description: 'Loading blog post content...',
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Loading...',
    description: 'Loading blog post content...'
  },
  robots: {
    index: false,
    follow: true
  }
}

/**
 * Generate loading metadata with custom values
 */
export const generateLoadingMetadata = (
  overrides: Partial<Metadata> = {}
): Metadata => ({
  ...DEFAULT_LOADING_METADATA,
  ...overrides,
  openGraph: {
    ...DEFAULT_LOADING_METADATA.openGraph,
    ...overrides.openGraph
  },
  twitter: {
    ...DEFAULT_LOADING_METADATA.twitter,
    ...overrides.twitter
  }
})

/**
 * Loading metadata for different sections
 */
export const SECTION_LOADING_METADATA = {
  blog: generateLoadingMetadata({
    title: 'Loading Blog Post... | GizMap Blog',
    description: 'Loading blog post content...'
  }),
  author: generateLoadingMetadata({
    title: 'Loading Author Profile... | GizMap Blog',
    description: 'Loading author profile...'
  }),
  category: generateLoadingMetadata({
    title: 'Loading Category... | GizMap Blog',
    description: 'Loading category posts...'
  })
}

/**
 * Get loading metadata for a specific section
 */
export const getLoadingMetadata = (
  section: keyof typeof SECTION_LOADING_METADATA = 'blog'
): Metadata => SECTION_LOADING_METADATA[section]
