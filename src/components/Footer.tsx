'use client'

import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 mt-8">
      <div className="container mx-auto py-12 px-4">
        {/* Logo and Description */}
        <div className="text-center mb-12">
            <Image
              src="/images/izmap.svg"
              alt="GizMap Logo"
                     width={35}
                     height={35}
                     className="h-10 w-auto"
                     priority
                   />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform layanan service terpercaya untuk perangkat elektronik Anda. Kami menghubungkan Anda dengan teknisi profesional terbaik.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-green-500">About GizMap</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Our Story</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Team</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Careers</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Press</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-green-500">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Service Smartphone</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Service Laptop/PC</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Service LED/Smart TV</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Service Console</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-green-500">Community</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Alumni Borneofalsher</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Komunitas Teknisi</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">iColor Service</li>
              <li className="text-gray-600 hover:text-green-500 transition-colors duration-300 cursor-pointer">Teknisi Garangan</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-green-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start text-gray-600 hover:text-green-500 transition-colors duration-300">
                <i className="bi bi-envelope w-8"></i>
                info@gizmap.com
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-600 hover:text-green-500 transition-colors duration-300">
                <i className="bi bi-telephone w-8"></i>
                +62 123 456 789
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-600 hover:text-green-500 transition-colors duration-300">
                <i className="bi bi-geo-alt w-8"></i>
                Bandung, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-12 mb-8">
          <a href="https://www.facebook.com/profile.php?id=100069583462410" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
            <i className="bi bi-facebook text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
            <i className="bi bi-twitter text-xl"></i>
          </a>
          <a href="https://instagram.com/gadgetklinik" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
            <i className="bi bi-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
            <i className="bi bi-linkedin text-xl"></i>
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
  );
};

export default Footer;
