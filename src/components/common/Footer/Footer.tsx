'use client'

import CompanyInfo from './CompanyInfo'
import QuickLinks from './QuickLinks'
import ServiceLinks from './ServiceLinks'
import ContactInfo from './ContactInfo'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 mt-8">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <ServiceLinks />
          <ContactInfo />
        </div>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
