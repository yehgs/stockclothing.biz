'use client';

import Link from 'next/link';
import Image from 'next/image';

const brands = [
  { 
    name: 'Nike', 
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=100&fit=crop&q=80', 
    products: 45 
  },
  { 
    name: 'Adidas', 
    logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=100&fit=crop&q=80', 
    products: 38 
  },
  { 
    name: 'Zara', 
    logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=100&fit=crop&q=80', 
    products: 52 
  },
  { 
    name: 'H&M', 
    logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200&h=100&fit=crop&q=80', 
    products: 61 
  },
  { 
    name: 'Gucci', 
    logo: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=100&fit=crop&q=80', 
    products: 28 
  },
  { 
    name: 'Prada', 
    logo: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=100&fit=crop&q=80', 
    products: 22 
  },
  { 
    name: 'Ralph Lauren', 
    logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=100&fit=crop&q=80', 
    products: 35 
  },
  { 
    name: 'Tommy Hilfiger', 
    logo: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=100&fit=crop&q=80', 
    products: 41 
  },
  { 
    name: 'Calvin Klein', 
    logo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=100&fit=crop&q=80', 
    products: 33 
  },
  { 
    name: "Levi's", 
    logo: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=200&h=100&fit=crop&q=80', 
    products: 29 
  },
  { 
    name: 'Gap', 
    logo: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=200&h=100&fit=crop&q=80', 
    products: 44 
  },
  { 
    name: 'Uniqlo', 
    logo: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=200&h=100&fit=crop&q=80', 
    products: 37 
  },
];

export default function BrandShowcase() {
  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Brand</h2>
        <p className="text-gray-600">Authentic stock from world-renowned brands</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/products?brand=${encodeURIComponent(brand.name)}`}
            className="group"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300">
              <div className="relative h-20 mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} products`}
                  width={120}
                  height={60}
                  className="object-cover rounded filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  unoptimized
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-500">{brand.products} items</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/brands"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          View All Brands
        </Link>
      </div>
    </div>
  );
}