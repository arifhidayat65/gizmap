'use client'

import Link from 'next/link'
import Image from 'next/image'
import { type BlogSidebarProps } from '@/types/blog'
import { formatPublishDate } from '@/utils/blog'

const BlogSidebar = ({ categories, recentPosts, popularTags }: BlogSidebarProps) => {
  return (
    <aside className="space-y-8 lg:sticky lg:top-24">
      {/* Categories */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-neutral-900">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.id}>
              <Link 
                href={category.id === 'all' ? '/blog' : `/blog/category/${category.id}`}
                className="flex items-center justify-between group py-2"
              >
                <span className="text-neutral-600 group-hover:text-primary transition-colors">
                  {category.name}
                </span>
                <svg 
                  className="w-4 h-4 text-neutral-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Posts */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-neutral-900">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="flex gap-4 group"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-neutral-500 mt-1">
                  {formatPublishDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tags */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-neutral-900">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(tag => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="px-3 py-1.5 text-sm bg-neutral-100 text-neutral-600 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-primary rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-sm text-white/80 mb-4">
          Get the latest posts and updates delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>
    </aside>
  )
}

export default BlogSidebar
