'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/izmap.svg"
              alt="GizMap Logo"
              width={128}
              height={40}
              className="w-32 h-10"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-neutral-600 hover:text-green-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-neutral-600 hover:text-green-500 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about-us" className="text-neutral-600 hover:text-green-500 transition-colors duration-200">
              About Us
            </Link>
            <Link href="/blog" className="text-neutral-600 hover:text-green-500 transition-colors duration-200">
              Blog
            </Link>
            <Link href="/faq" className="text-neutral-600 hover:text-green-500 transition-colors duration-200">
              FAQ
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="btn btn-secondary"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="btn btn-primary"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link href="/" className="text-neutral-600 hover:text-green-500 transition-colors duration-200 py-2">
              Home
            </Link>
            <Link href="/about-us" className="text-neutral-600 hover:text-green-500 transition-colors duration-200 py-2">
              About Us
            </Link>
            <Link href="/blog" className="text-neutral-600 hover:text-green-500 transition-colors duration-200 py-2">
              Blog
            </Link>
            <Link href="/faq" className="text-neutral-600 hover:text-green-500 transition-colors duration-200 py-2">
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                href="/login" 
                className="btn btn-secondary w-full text-center"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="btn btn-primary w-full text-center"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
