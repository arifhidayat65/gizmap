import Image from 'next/image';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative w-full h-40 mb-2">
        <Image
          src={product.image}
          alt={`${product.title}`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-blue-500">
        {product.title}
      </h3>
      <p className="font-bold">
        {product.shopName}
      </p>
      <p className="text-gray-500">
        ({product.reviews})
      </p>
    </div>
  );
}
