'use client'

import HeroSlider from '@/components/HeroSlider'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import BackToTop from '@/components/BackToTop'
import { products, serviceCategories } from '@/data/products'
import { blogPosts } from '@/data/blogs'
import '@/styles/home.scss'
import { useState } from 'react'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const communityGroups = [
    'Alumni Borneofalsher',
    'Komunitas Teknisi Regional Bandung',
    'iColor Service Repair',
    'Komunitas Teknisi Garangan'
  ]

  const getIconClass = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      smartphone: 'mobile-alt',
      laptop: 'laptop',
      tv: 'tv',
      gamepad: 'gamepad',
      phone: 'phone-alt',
      more: 'ellipsis-h'
    }
    return iconMap[iconName] || iconName
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <HeroSlider />
      </section>

      {/* Service Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer hover:-translate-y-1">
                <div className="mb-4 text-3xl">
                  <i className={`fas fa-${getIconClass(category.icon)} text-green-500`}></i>
                </div>
                <h3 className="text-sm md:text-base font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Community Groups and Search */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {communityGroups.map((group, index) => (
                <button
                  key={index}
                  className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  {group}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Cari komunitas atau group..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600">
                  <i className="fas fa-search text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Hasil Pencarian
            </h2>
            <p className="text-green-500 text-lg font-semibold tracking-wide mb-6">
              Komunitas Teknisi Garangan Terdekat
              <span className="text-2xl ml-2 inline-block animate-pulse">...</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Professional Tech Support?</h2>
          <p className="text-lg mb-8 opacity-90">Our expert technicians are ready to help you with any technical issues</p>
          <a href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors inline-block">
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
}
