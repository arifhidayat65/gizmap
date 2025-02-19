import { type Metadata } from 'next'
import { type BlogPost } from '@/types/blog'

export function generateBlogPostMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} - GizMap Blog`,
    description: post.excerpt,
    keywords: [post.category, ...post.tags],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      creator: '@gizmap',
      site: '@gizmap'
    },
    authors: [
      {
        name: post.author.name,
        url: `https://gizmap.com/authors/${post.author.name.toLowerCase().replace(/\s+/g, '-')}`
      }
    ],
    alternates: {
      canonical: `https://gizmap.com/blog/${post.id}`
    }
  }
}

export function generateBlogCategoryMetadata(category: string, count: number): Metadata {
  const title = category === 'all' 
    ? 'All Posts' 
    : `${category.charAt(0).toUpperCase()}${category.slice(1)} Posts`

  return {
    title: `${title} - GizMap Blog`,
    description: `Browse our collection of ${count} ${category === 'all' ? '' : category + ' '}articles about device maintenance and troubleshooting.`,
    openGraph: {
      title,
      description: `Browse our collection of ${count} ${category === 'all' ? '' : category + ' '}articles about device maintenance and troubleshooting.`,
      type: 'website',
      images: [
        {
          url: '/GizMap.png',
          width: 1200,
          height: 630,
          alt: `${title} - GizMap Blog`
        }
      ]
    },
    alternates: {
      canonical: `https://gizmap.com/blog${category === 'all' ? '' : `/category/${category}`}`
    }
  }
}

export function generateBlogTagMetadata(tag: string, count: number): Metadata {
  const title = `Posts tagged "${tag}"`

  return {
    title: `${title} - GizMap Blog`,
    description: `Browse our collection of ${count} articles tagged with "${tag}".`,
    openGraph: {
      title,
      description: `Browse our collection of ${count} articles tagged with "${tag}".`,
      type: 'website',
      images: [
        {
          url: '/GizMap.png',
          width: 1200,
          height: 630,
          alt: `${title} - GizMap Blog`
        }
      ]
    },
    alternates: {
      canonical: `https://gizmap.com/blog/tag/${tag}`
    }
  }
}
