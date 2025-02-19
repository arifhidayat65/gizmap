import { type BlogPost } from '@/types/blog'
import { type PostConfig } from '../PostConfig'
import { getReadTime } from '../PostUtils'

/**
 * Generate a test blog post with realistic data
 */
export const generateTestPost = (): BlogPost => {
  const content = `
    # Test Post Title

    This is a test post with realistic content. It includes various markdown elements
    to ensure proper rendering and styling.

    ## Section 1

    Here's a paragraph with **bold text** and *italic text*. It also includes
    [a link](https://example.com) and \`inline code\`.

    - List item 1
    - List item 2
    - List item 3

    ### Subsection

    Here's a code block:

    \`\`\`typescript
    const greeting = 'Hello, World!'
    console.log(greeting)
    \`\`\`

    ## Section 2

    > This is a blockquote with some meaningful text that spans multiple lines
    > to test proper blockquote rendering.

    1. Ordered list item 1
    2. Ordered list item 2
    3. Ordered list item 3
  `.trim()

  return {
    id: 'test-post',
    title: 'Comprehensive Test Post',
    excerpt: 'A test post with various content types for thorough component testing.',
    content,
    imageUrl: '/test-image.jpg',
    category: 'guide',
    tags: ['test', 'component', 'markdown'],
    author: {
      name: 'Test Author',
      avatar: '/test-avatar.jpg',
      role: 'Tester'
    },
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: 100,
    likes: 50,
    readTime: getReadTime(content)
  }
}

/**
 * Run accessibility checks on the current document
 */
export const runA11yChecks = () => {
  const issues: string[] = []

  // Check headings hierarchy
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
  let lastLevel = 0
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName[1])
    if (level - lastLevel > 1) {
      issues.push(`Incorrect heading hierarchy: ${heading.tagName}`)
    }
    lastLevel = level
  })

  // Check image alt text
  document.querySelectorAll('img').forEach((img) => {
    if (!img.alt) {
      issues.push(`Missing alt text: ${img.src}`)
    }
  })

  // Check ARIA labels
  document.querySelectorAll('[role]').forEach((el) => {
    if (!el.getAttribute('aria-label')) {
      issues.push(`Missing ARIA label: ${el.outerHTML}`)
    }
  })

  // Check color contrast
  document.querySelectorAll('*').forEach((el) => {
    const style = window.getComputedStyle(el)
    const color = style.color
    const background = style.backgroundColor
    // TODO: Add color contrast ratio calculation
  })

  return issues
}

/**
 * Simulate various user interactions
 */
export const simulateUserInteractions = () => {
  // Simulate scroll
  window.dispatchEvent(new Event('scroll'))
  window.scrollTo(0, document.body.scrollHeight / 2)
  window.dispatchEvent(new Event('scroll'))

  // Simulate clicks
  document.querySelectorAll('button, a').forEach((el) => {
    el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  // Simulate form interactions
  document.querySelectorAll('input').forEach((input) => {
    input.dispatchEvent(new Event('focus', { bubbles: true }))
    input.dispatchEvent(new Event('change', { bubbles: true }))
    input.dispatchEvent(new Event('blur', { bubbles: true }))
  })

  // Simulate hover
  document.querySelectorAll('button, a').forEach((el) => {
    el.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
    el.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }))
  })
}

/**
 * Validate post props and configuration
 */
export const validateProps = (post: BlogPost, config: PostConfig) => {
  const errors: string[] = []

  // Required post fields
  const requiredFields = ['id', 'title', 'content', 'author', 'readTime']
  requiredFields.forEach((field) => {
    if (!post[field as keyof BlogPost]) {
      errors.push(`Missing required field: ${field}`)
    }
  })

  // Config validation
  Object.entries(config).forEach(([key, value]) => {
    if (typeof value !== 'boolean') {
      errors.push(`Invalid config value for ${key}: ${value}`)
    }
  })

  // Content validation
  if (post.content.length < 100) {
    errors.push('Content is too short (minimum 100 characters)')
  }

  // Tags validation
  if (!post.tags.length) {
    errors.push('Post must have at least one tag')
  }

  return errors
}

/**
 * Get test window utilities
 */
export const getTestUtils = (post: BlogPost, config: PostConfig) => ({
  generateTestPost,
  runA11yChecks,
  simulateUserInteractions,
  validateProps: () => validateProps(post, config),
  currentPost: post,
  currentConfig: config
})
