'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { type BlogPost } from '@/types/blog'
import { blogPosts } from '@/data/blogs'
import BlogPostComponent from '@/components/blog/Post'
import PostSkeleton from '@/components/blog/PostSkeleton'
import BlogError from '@/components/blog/Error'

interface ErrorState {
  title: string
  message: string
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<ErrorState | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        if (!params.id) {
          throw new Error('No post ID provided')
        }

        // Simulate network delay for loading state demonstration
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const currentPost = blogPosts.find(p => p.id === params.id)
        if (!currentPost) {
          setError({
            title: 'Post not found',
            message: "The blog post you're looking for doesn't exist or has been removed."
          })
          return
        }
        
        setPost(currentPost)
      } catch (err) {
        console.error('Error loading post:', err)
        setError({
          title: 'Error loading post',
          message: "We couldn't load the blog post. Please try again later."
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [params.id])

  if (isLoading) {
    return <PostSkeleton />
  }

  if (error) {
    return (
      <BlogError 
        title={error.title}
        message={error.message}
      />
    )
  }

  if (!post) {
    return null
  }

  return <BlogPostComponent post={post} />
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found - GizMap Blog',
      description: "The blog post you're looking for doesn't exist or has been removed."
    }
  }

  return {
    title: `${post.title} - GizMap Blog`,
    description: post.excerpt,
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
    }
  }
}
