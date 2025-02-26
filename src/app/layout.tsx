import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GSM PROMO - Dashboard',
  description: 'GSM PROMO Dashboard and Profile Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
