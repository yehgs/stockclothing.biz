'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Package, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: {
      original: number;
      current: number;
      discount: number;
    };
    images: string[];
    rating: string;
    reviews: number;
    stockQuantity: number;
    minOrderQuantity: number;
    featured?: boolean;
    newArrival?: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.newArrival && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.featured && (
            <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
              FEATURED
            </span>
          )}
          {product.price.discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.price.discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart className={`w-5 h-5 ${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-gray-500 font-medium mb-1">{product.brand}</p>
          
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          {/* Stock Info */}
          <div className="flex items-center gap-2 mb-3 text-sm">
            <Package className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">{product.stockQuantity} units available</span>
          </div>

          {/* Min Order */}
          <p className="text-xs text-gray-600 mb-3">
            Min. Order: <span className="font-semibold">{product.minOrderQuantity} units</span>
          </p>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.current}
                </span>
                {product.price.discount > 0 && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.price.original}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">per unit</p>
            </div>

            {/* Quick Add Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
