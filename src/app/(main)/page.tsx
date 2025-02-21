'use client'

import HeroSlider from '@/components/HeroSlider'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import { products, serviceCategories } from '@/data/products'
import { blogPosts } from '@/data/blogs'
import '@/styles/home.scss'
import ServiceIcon from '@/components/common/Icon/ServiceIcon'

export default function HomePage() {
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer hover:-translate-y-1">
                <div className="mb-4">
                  <ServiceIcon name={category.icon} className="text-green-500 mx-auto" />
                </div>
                <h3 className="text-sm md:text-base font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <ProductCard product={product} />
              </div>
            ))}
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
    </main>
  )
}
