'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated by looking for access token
    const checkAuth = () => {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('access_token='))
      setIsAuthenticated(!!token)
    }

    checkAuth()
    // Listen for storage events (logout)
    window.addEventListener('storage', checkAuth)
    return () => window.removeEventListener('storage', checkAuth)
  }, [])

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' }
  ]

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/izmap.svg"
              alt="GizMap Logo"
              width={350}
              height={350}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-green-500 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-neutral-600 hover:text-green-500 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <Link href="/dashboard" className="btn btn-secondary">
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className="btn btn-secondary">
                  Login
                </Link>
                <Link href="/register" className="btn btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-neutral-600 hover:text-green-500 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              {isAuthenticated ? (
                <Link href="/dashboard" className="btn btn-secondary w-full text-center">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="btn btn-secondary w-full text-center">
                    Login
                  </Link>
                  <Link href="/register" className="btn btn-primary w-full text-center">
                    Register
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
