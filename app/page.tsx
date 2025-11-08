import HeroSlider from '@/components/HeroSlider';
import CategoryCarousel from '@/components/CategoryCarousel';
import BrandShowcase from '@/components/BrandShowcase';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewArrivals from '@/components/NewArrivals';
import StatsSection from '@/components/StatsSection';
import { ShieldCheck, Truck, HeadphonesIcon, RefreshCw } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="container mx-auto px-4 py-6">
        <HeroSlider />
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $1,000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Authentic Products</h3>
                <p className="text-sm text-gray-600">100% genuine brands</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <HeadphonesIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated support team</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <RefreshCw className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Carousel */}
      <section className="container mx-auto px-4 py-12">
        <CategoryCarousel />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <FeaturedProducts />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <StatsSection />
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12">
        <NewArrivals />
      </section>

      {/* Brand Showcase */}
      <section className="container mx-auto px-4 py-12">
        <BrandShowcase />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Wholesale Business?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of retailers buying quality stock at wholesale prices</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Browse Products
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
