'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatPublishDate, formatReadTime } from '@/utils/blog'
import { type BlogCardProps } from '@/types/blog'

const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (minutes: number) => {
    return `${minutes} min read`
  }

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${post.id}`} className="block">
        <div className="relative aspect-video">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
            <span className="capitalize">{post.category}</span>
            <span>•</span>
            <span>{formatTime(post.readTime)}</span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
            {post.title}
          </h3>
          {variant !== 'compact' && (
            <p className="text-neutral-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-neutral-900">
                {post.author.name}
              </p>
              <p className="text-sm text-neutral-500">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
          {variant !== 'compact' && (
            <div className="flex items-center gap-4 mt-4 text-sm text-neutral-500">
              {post.views && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {post.views.toLocaleString()}
                </span>
              )}
              {post.likes && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes.toLocaleString()}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
