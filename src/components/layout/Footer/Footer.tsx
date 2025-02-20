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
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-12 mb-8">
          <a 
            href="https://www.facebook.com/profile.php?id=100069583462410" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <i className="bi bi-facebook text-xl"></i>
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <i className="bi bi-twitter text-xl"></i>
          </a>
          <a 
            href="https://instagram.com/gadgetklinik" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <i className="bi bi-instagram text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} GizMap. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-4 text-sm text-gray-500">
            <a href="#" className="hover:text-green-500 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-500 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-green-500 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
