'use client'

import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'
import { products, serviceCategories } from '../data/products'
import { blogPosts } from '../data/blogs'
import '../styles/home.scss'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroSlider />
      </section>

      {/* Service Categories Section */}
      <section className="featured-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="service-categories">
            {serviceCategories.map((category, index) => (
              <div key={index} className="category-card">
                <i className={`fas ${category.icon} category-icon`}></i>
                <h3 className="category-title">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Services</h2>
          <div className="grid-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="blog-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Latest Articles</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Need Professional Tech Support?</h2>
          <p className="cta-description">Our expert technicians are ready to help you with any technical issues</p>
          <a href="/contact" className="cta-button">
            Contact Us Now
          </a>
        </div>
      </section>
    </main>
  )
}
