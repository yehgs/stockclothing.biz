'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    count: 120,
  },
  {
    name: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    count: 85,
  },
  {
    name: 'Jackets',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    count: 65,
  },
  {
    name: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    count: 95,
  },
  {
    name: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    count: 78,
  },
  {
    name: 'Shirts',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80',
    count: 110,
  },
  {
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    count: 92,
  },
  {
    name: 'Pants',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    count: 88,
  },
];

export default function CategoryCarousel() {
  const scrollRef = useRef(null);

  interface Category {
    name: string;
    image: string;
    count: number;
  }

  type ScrollDirection = 'left' | 'right';

  const scroll = (direction: ScrollDirection): void => {
    const node = scrollRef.current as HTMLDivElement | null;
    if (node) {
      const scrollAmount = 300;
      node.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
        <Link
          href="/categories"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View All →
        </Link>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="flex-shrink-0 w-48 group/card"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover/card:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover/card:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.count} products</p>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
