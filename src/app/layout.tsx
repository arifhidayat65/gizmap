import './globals.scss'
import './styles/custom.css'
import Header from '../components/common/layouts/Header'
import Footer from '../components/common/layouts/Footer'
import BackToTop from '../components/common/layouts/BackToTop'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GizMap',
  description: 'Platform layanan service terpercaya untuk perangkat elektronik Anda',
  icons: {
    icon: '/izmap.ico',
    apple: '/izmap.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
