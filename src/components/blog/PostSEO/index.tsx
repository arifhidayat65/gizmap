'use client'

import { type BlogPost } from '@/types/blog'
import Head from 'next/head'

interface PostSEOProps {
  post: BlogPost
  baseUrl?: string
  defaultImage?: string
}

/**
 * Post SEO Component
 * 
 * Handles SEO metadata for blog posts including:
 * - Title and description
 * - Open Graph tags
 * - Twitter cards
 * - JSON-LD structured data
 */
const PostSEO = ({
  post,
  baseUrl = '',
  defaultImage = '/assets/image/blog-default.jpg'
}: PostSEOProps) => {
  const url = `${baseUrl}/blog/${post.id}`
  const imageUrl = post.imageUrl || `${baseUrl}${defaultImage}`
  const publishDate = new Date(post.publishedAt).toISOString()
  const modifiedDate = post.updatedAt 
    ? new Date(post.updatedAt).toISOString()
    : publishDate

  // Article structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: `${baseUrl}/authors/${post.author.name.toLowerCase().replace(/\s+/g, '-')}`
    },
    publisher: {
      '@type': 'Organization',
      name: 'GizMap',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/GizMap.png`
      }
    },
    datePublished: publishDate,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{post.title} | GizMap Blog</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={imageUrl} />
      <meta property="article:published_time" content={publishDate} />
      <meta property="article:modified_time" content={modifiedDate} />
      <meta property="article:author" content={post.author.name} />
      <meta property="article:section" content={post.category} />
      {post.tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </Head>
  )
}

export default PostSEO
