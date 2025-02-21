'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { escuelajsApi } from '@/services/escuelajs'
import type { Product } from '@/types/product'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('Fetching products...')
      try {
        const data = await escuelajsApi.getAllProducts()
        console.log('Products fetched:', data)
        // Transform API response to match Product type
        const transformedProducts: Product[] = data.map(item => ({
          id: String(item.id),
          title: item.title,
          category: item.category.name,
          image: item.images[0],
          rating: 4.5, // Default rating since API doesn't provide it
          reviews: 10, // Default reviews since API doesn't provide it
          shopName: item.category.name, // Using category name as shop name
          isPromo: item.price < 50 // Example condition for promo
        }))
        setProducts(transformedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        <div className="text-center">Loading products...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
