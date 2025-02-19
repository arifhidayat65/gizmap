import { Metadata } from 'next'
import BlogLayout from '@/components/blog/Layout'

export const metadata: Metadata = {
  title: 'Blog - GizMap',
  description: 'Latest articles, guides, and updates about device maintenance and troubleshooting from GizMap.',
  keywords: ['device maintenance', 'troubleshooting', 'tech guides', 'repair tips'],
  openGraph: {
    title: 'GizMap Blog',
    description: 'Latest articles, guides, and updates about device maintenance and troubleshooting.',
    images: [
      {
        url: '/GizMap.png',
        width: 1200,
        height: 630,
        alt: 'GizMap Blog'
      }
    ],
    type: 'website',
    siteName: 'GizMap'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GizMap Blog',
    description: 'Latest articles, guides, and updates about device maintenance and troubleshooting.',
    images: ['/GizMap.png'],
    creator: '@gizmap',
    site: '@gizmap'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://gizmap.com/blog'
  }
}

export default function BlogRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BlogLayout>
      {children}
    </BlogLayout>
  )
}
