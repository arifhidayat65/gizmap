'use client'

import { useState, useEffect } from 'react'
import { type BlogLayoutProps, type BlogCategory } from '../../../types/blog'
import BlogNavigation from '../Navigation'
import BlogSidebar from '../Sidebar'
import Container from '../../common/Container'
import ScrollArea from '../../common/ScrollArea'
import Transition from '../../common/Transition'
import Progress from '../../common/Progress'
import { BLOG_CATEGORIES } from '../../../constants/blog'
import { getRecentPosts, getPopularTags, filterPosts } from '../../../utils/blog'
import { blogPosts } from '../../../data/blogs'

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const [currentCategory, setCurrentCategory] = useState<BlogCategory['id']>(BLOG_CATEGORIES[0].id)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const recentPosts = getRecentPosts(blogPosts)
  const popularTags = getPopularTags(blogPosts)
  const categories = [...BLOG_CATEGORIES]

  // Show content after initial render for smooth transitions
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSearch = (query: string) => {
    // Filter posts based on search query
    const filteredPosts = filterPosts(blogPosts, { search: query })
    // You can update the UI or pass the filtered posts to children components
    console.log('Search query:', query, 'Filtered posts:', filteredPosts)
  }

  const handleCategoryChange = (categoryId: BlogCategory['id']) => {
    setCurrentCategory(categoryId)
  }

  return (
    <>
      {/* Progress Bar */}
      <Progress 
        color="var(--primary-color)"
        height={3}
        duration={400}
      />

      <div className="min-h-screen bg-neutral-50">
        {/* Blog Navigation */}
        <ScrollArea 
          offset={64} 
          className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100/0"
          stickyClass="border-neutral-100 shadow-sm"
        >
          <Container>
            <BlogNavigation 
              currentCategory={currentCategory}
              onSearch={handleSearch}
              onCategoryChange={handleCategoryChange}
            />
          </Container>
        </ScrollArea>

        {/* Main Content */}
        <Container className="py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Content Area */}
            <main className="flex-1 min-w-0">
              <Transition 
                show={isLoaded}
                name="fade"
                duration={300}
              >
                {children}
              </Transition>
            </main>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <ScrollArea 
                offset={96}
                className="lg:sticky lg:top-36"
              >
                <Transition 
                  show={isLoaded}
                  name="slide-up"
                  duration={400}
                  delay={150}
                >
                  <div className="space-y-6">
                    <BlogSidebar
                      categories={categories}
                      recentPosts={recentPosts}
                      popularTags={popularTags}
                    />
                  </div>
                </Transition>
              </ScrollArea>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}

export default BlogLayout
