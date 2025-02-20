'use client'

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/izmap.svg"
              alt="GizMap Logo"
              width={350}
              height={350}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-neutral-600 hover:text-primary">
              Home
            </Link>
            <Link href="/about-us" className="text-neutral-600 hover:text-primary">
              About Us
            </Link>
            <Link href="/blog" className="text-neutral-600 hover:text-primary">
              Blog
            </Link>
            <Link href="/faq" className="text-neutral-600 hover:text-primary">
              FAQ
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="custom-button custom-button-secondary"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="custom-button custom-button-primary"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
