import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogs'
import Post from '@/components/blog/Post'
import Container from '@/components/common/Container'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id
  }))
}

// Generate metadata for each blog post
export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return {
      title: 'Post Not Found | GizMap Blog',
      description: 'The blog post you\'re looking for doesn\'t exist or has been removed.'
    }
  }

  return {
    title: `${post.title} | GizMap Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [post.imageUrl]
    }
  }
}

// Blog post page component
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <Container size="lg" className="py-8">
      <Post post={post} />
    </Container>
  )
}
