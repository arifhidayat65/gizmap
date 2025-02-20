'use client'

import Link from 'next/link'
import Image from 'next/image'
import FooterLink from '../../Footer/FooterLink'
import ServiceIcon from '../../Icon/ServiceIcon'
import SocialIcon from '../../Icon/SocialIcon'
import { socialIcons, serviceIcons, quickLinks, contactInfo } from '@/constants/footer'

const Footer = () => {
  const renderSocialIcons = () => (
    <div className="flex space-x-4">
      {Object.entries(socialIcons).map(([key, { path, href, className }]) => (
        <SocialIcon key={key} path={path} href={href} className={className} />
      ))}
    </div>
  )

  const renderQuickLinks = () => (
    <div className="col-span-1">
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {quickLinks.map(({ href, label }) => (
          <li key={href}>
            <FooterLink href={href}>{label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderServices = () => (
    <div className="col-span-1">
      <h3 className="text-lg font-bold mb-4">Services</h3>
      <ul className="space-y-2">
        {Object.entries(serviceIcons).map(([key, { path, href, label }]) => (
          <li key={key}>
            <FooterLink href={href} iconPath={path}>
              {label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderContactInfo = () => (
    <div className="col-span-1">
      <h3 className="text-lg font-bold mb-4">Contact Us</h3>
      <ul className="space-y-2">
        {Object.entries(contactInfo).map(([key, { icon, text }]) => (
          <li key={key} className={`flex ${key === 'address' ? 'items-start' : 'items-center'}`}>
            <ServiceIcon path={icon} className="w-6 h-6 mr-2 text-primary" />
            <span className="text-neutral-600">
              {text.includes('\n') ? (
                text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))
              ) : (
                text
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 mt-8">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/izmap.svg"
                alt="GizMap Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-neutral-600 mb-4">
              Platform layanan service terpercaya untuk perangkat elektronik Anda
            </p>
            {renderSocialIcons()}
          </div>

          {renderQuickLinks()}
          {renderServices()}
          {renderContactInfo()}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-neutral-600">
            © {new Date().getFullYear()} GizMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
