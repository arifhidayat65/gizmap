'use client'

import BlogNavbar from '../Navbar/BlogNavbar'

interface BlogLayoutProps {
  children: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <BlogNavbar />
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </>
  )
}

export default BlogLayout
