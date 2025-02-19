import Link from 'next/link'
import Container from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { blogPosts } from '@/data/blogs'
import PostCard from '@/components/blog/Card'

export default function BlogPostNotFound() {
  // Get latest posts for suggestions
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)

  return (
    <Container size="lg" className="py-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-neutral-900">
          Post Not Found
        </h1>

        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
          Please check the URL or browse our other posts.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/blog">
            <Button variant="primary">
              Browse All Posts
            </Button>
          </Link>

          <Link href="/">
            <Button variant="secondary">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Suggested Posts */}
        {latestPosts.length > 0 && (
          <div className="pt-16">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              Latest Posts
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <PostCard 
                  key={post.id}
                  post={post}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
