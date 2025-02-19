'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg mx-0 fixed-top z-50" id="nav-1">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" href="/">
          <Image
            alt="GizMap Logo"
            src="/izmap.svg"
            width={218}
            height={51}
            priority
            className="img-fluid"
            style={{color: 'transparent', width: 'auto', height: '51px'}}
          />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#main-nav" 
          aria-controls="main-nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span><i className="bi bi-list"></i></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item d-flex align-items-center">
              <Link href="/" className="common-menu nav-link font-menu p-2">Home</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link href="/for-corporate" className="common-menu nav-link font-menu p-2">
                For Corporate
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link href="/about-us" className="common-menu nav-link font-menu p-2">
                About Us
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link href="/blog" className="common-menu nav-link font-menu p-2">
                Blogs
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link href="/partners" className="common-menu nav-link font-menu p-2">
                Partners
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link
                href="https://help.enigmacamp.com/en/support/home"
                className="common-menu nav-link font-menu p-2"
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center d-none d-lg-block">
              <div style={{backgroundColor: '#e1e1e1', width: '3px', height: '100%'}}></div>
            </li>
            <li className="nav-item d-flex align-items-center gap-3 mb-3 mb-md-0">
              <Link
                className="ec-btn ec-btn-md ec-btn-rounded ec-bg-primary-500 ec-neutral-50 justify-content-center link-nostyle btnRegister"
                href="https://account.enigmacamp.com/login"
                target="_blank"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
