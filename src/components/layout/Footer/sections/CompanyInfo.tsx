'use client'

import Link from 'next/link'
import Image from 'next/image'

const CompanyInfo = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100069583462410',
      icon: 'facebook',
      hoverColor: 'hover:bg-[#1877F2]'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/gadgetklinik',
      icon: 'instagram',
      hoverColor: 'hover:bg-[#E4405F]'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/gsmpromo',
      icon: 'twitter',
      hoverColor: 'hover:bg-[#1DA1F2]'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/your-number',
      icon: 'whatsapp',
      hoverColor: 'hover:bg-[#25D366]'
    }
  ]

  return (
    <div className="space-y-6">
      <Link href="/" className="block">
        <Image
           src="/izmap.svg"
              alt="gsmpromo Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>
      
      <p className="text-gray-600">
        Solusi terpercaya untuk perbaikan dan perawatan gadget Anda. Teknisi profesional dan layanan berkualitas.
      </p>

      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center rounded-full 
                       text-neutral-600 hover:text-white transition-all duration-300 
                       ${social.hoverColor}`}
            aria-label={`Follow us on ${social.name}`}
          >
            <i className={`bi bi-${social.icon} text-xl`}></i>
          </a>
        ))}
      </div>

      <div className="space-y-3">
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
           className="footer-contact hover:text-[#42b549] transition-colors duration-300">
          <i className="bi bi-geo-alt"></i>
          <span>Jl. Contoh No. 123, Jakarta</span>
        </a>
        <a href="tel:+6212345678" 
           className="footer-contact hover:text-[#42b549] transition-colors duration-300">
          <i className="bi bi-telephone"></i>
          <span>+62 123 4567 890</span>
        </a>
        <a href="mailto:info@gsmpromo.com" 
           className="footer-contact hover:text-[#42b549] transition-colors duration-300">
          <i className="bi bi-envelope"></i>
          <span>info@gsmpromo.com</span>
        </a>
      </div>
    </div>
  )
}

export default CompanyInfo
