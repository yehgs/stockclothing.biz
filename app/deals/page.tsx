import ProductCard from '@/components/ProductCard';
import { Flame } from 'lucide-react';
import productsData from '@/data/products.json';

export default function DealsPage() {
  const dealProducts = productsData
    .filter(p => p.price.discount >= 30)
    .sort((a, b) => b.price.discount - a.price.discount);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Hot Deals</h1>
          </div>
          <p className="text-xl text-red-100">
            Save up to 60% on selected wholesale stock - Limited time offers!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-red-600">
                {dealProducts.length}
              </p>
              <p className="text-gray-600">Products on Sale</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-600">
                Up to {Math.max(...dealProducts.map(p => p.price.discount))}%
              </p>
              <p className="text-gray-600">Maximum Discount</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-600">
                ${Math.min(...dealProducts.map(p => p.price.current))}+
              </p>
              <p className="text-gray-600">Starting From</p>
            </div>
          </div>
        </div>

        {dealProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No deals available at the moment</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dealProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
