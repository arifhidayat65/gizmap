'use client'

import HeroSlider from '../../../HeroSlider'
import Image from 'next/image'

export default function HomeLayout() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full mb-8">
        <HeroSlider />
      </section>

      <div className="container mx-auto px-4 pb-8">
        {/* Service Categories */}
        <section className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-green-500">
            {[
              { icon: 'mobile-alt', text: 'Service Smartphone' },
              { icon: 'laptop', text: 'Service Laptop / PC' },
              { icon: 'tv', text: 'Service LED / Smart TV' },
              { icon: 'gamepad', text: 'Service Consol' },
              { icon: 'phone', text: 'Service Alat Komunikasi' },
              { icon: 'ellipsis-h', text: 'Service Alat Lainnya' }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <i className={`fas fa-${service.icon} text-2xl`}></i>
                </div>
                <p className="text-sm">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Alumni Borneofalsher',
              'Komunitas Teknisi Regional Bandung',
              'iColor Service Repair',
              'Komunitas Teknisi Garangan'
            ].map((item, index) => (
              <button 
                key={index} 
                className="bg-green-50 text-green-500 px-4 py-2 rounded-full hover:bg-green-100 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Promo Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Sedang Ada Promo & Diskon Terdekat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "https://storage.googleapis.com/a1aa/image/imf-iNZsYZmyZ0nR2fMSBEtX9rOSe_pbyEl4l-cSgOw.jpg",
                title: "Repair Smartphone",
                location: "iRoom Bandung",
                reviews: 143
              },
              {
                image: "https://storage.googleapis.com/a1aa/image/GVPc_xDNdgiET3nzJ_ihVkNUKMClLVCSGVXx0ksh93Q.jpg",
                title: "Repair Smart TV",
                location: "iService Bandung",
                reviews: 110
              },
              {
                image: "https://storage.googleapis.com/a1aa/image/74P3KoQmVF6tgADp92h2YcMn1g0dPplaVY5PYmkySNY.jpg",
                title: "Repair Console",
                location: "iServices Bandung",
                reviews: 74
              }
            ].map((promo, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={300}
                    height={160}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-blue-500 text-lg font-semibold">{promo.title}</h3>
                <p className="font-bold text-gray-800">{promo.location}</p>
                <p className="text-gray-500">({promo.reviews} reviews)</p>
              </div>
            ))}
          </div>
        </section>

        {/* Podcast Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-green-500">Gizmap PodCast</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="relative">
                  <Image
                    src="https://storage.googleapis.com/a1aa/image/mUGNU0QLwo5jleKDzpCnBkHiB_nlHJXHSZctJj711Wk.jpg"
                    alt="Podcast recording"
                    width={150}
                    height={150}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <i className="fas fa-play text-white text-2xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
