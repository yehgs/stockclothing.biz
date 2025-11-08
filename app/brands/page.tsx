import Link from 'next/link';
import { Award } from 'lucide-react';
import productsData from '@/data/products.json';

export default function BrandsPage() {
  const brandCounts = productsData.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const brands = Object.entries(brandCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Shop by Brand</h1>
          <p className="text-xl text-blue-100">
            Explore our collection from world-renowned fashion brands
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {brands.length} Premium Brands
              </h2>
              <p className="text-gray-600">
                All products are 100% authentic from authorized distributors
              </p>
            </div>
            <Award className="w-16 h-16 text-blue-600" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {brand.count} products
                  </p>
                  <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                    View Collection
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}