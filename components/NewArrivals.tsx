import ProductCard from './ProductCard';
import Link from 'next/link';
import productsData from '@/data/products.json';

export default function NewArrivals() {
  const newProducts = productsData.filter(p => p.newArrival).slice(0, 8);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">✨ New Arrivals</h2>
          <p className="text-gray-600">Fresh stock just added - Limited quantities!</p>
        </div>
        <Link href="/products?new=true" className="text-blue-600 hover:text-blue-700 font-medium">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
