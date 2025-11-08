import ProductCard from './ProductCard';
import Link from 'next/link';
import productsData from '@/data/products.json';

export default function FeaturedProducts() {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 8);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Handpicked wholesale deals for your business</p>
        </div>
        <Link href="/products?featured=true" className="text-blue-600 hover:text-blue-700 font-medium">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
