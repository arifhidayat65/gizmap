'use client';

import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    shopName: string;
    isPromo: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
        {product.isPromo && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Promo
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <span className="text-sm text-gray-600">{product.shopName}</span>
        </div>
      </div>
    </div>
  );
}
