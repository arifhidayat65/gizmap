import { type BlogPost } from '@/types/blog'
import TableOfContents from '../TableOfContents'
import Container from '@/components/common/Container'

interface PostLayoutProps {
  post: BlogPost
  children: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
  showTableOfContents?: boolean
  className?: string
}

const PostLayout = ({
  post,
  children,
  sidebar,
  footer,
  showTableOfContents = true,
  className = ''
}: PostLayoutProps) => {
  return (
    <div className={`space-y-12 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="flex-1 min-w-0">
          {children}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Table of Contents */}
            {showTableOfContents && (
              <TableOfContents />
            )}

            {/* Additional Sidebar Content */}
            {sidebar}
          </div>
        </aside>
      </div>

      {/* Footer Content */}
      {footer && (
        <Container size="lg" className="border-t pt-12">
          {footer}
        </Container>
      )}
    </div>
  )
}

export default PostLayout
