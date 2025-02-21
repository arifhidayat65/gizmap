import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer/Footer'
import BackToTop from '@/components/BackToTop'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
