'use client'

import CompanyInfo from './sections/CompanyInfo'
import QuickLinks from './sections/QuickLinks'
import ServiceLinks from './sections/ServiceLinks'
import ContactInfo from './sections/ContactInfo'

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
      </div>
    </footer>
  )
}

export default Footer
