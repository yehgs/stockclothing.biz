import { Package, Users, TrendingUp, Award, Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About StockClothing.biz</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted partner in wholesale fashion, connecting retailers with premium clothing stock since 2015
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Founded in 2015, StockClothing.biz began with a simple mission: to make premium wholesale clothing accessible to retailers of all sizes. What started as a small operation has grown into one of the leading wholesale clothing suppliers in the industry.
            </p>
            <p>
              We understand the challenges retailers face in sourcing quality stock at competitive prices. That's why we've built strong relationships with manufacturers and brands worldwide, enabling us to offer authentic products at unbeatable wholesale prices.
            </p>
            <p>
              Today, we serve over 5,000 retailers across the globe, providing them with access to 50+ premium brands and 10,000+ products in stock. Our commitment to quality, authenticity, and customer service remains unwavering.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower retailers worldwide by providing access to authentic, quality wholesale clothing at competitive prices, backed by exceptional customer service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become the global leader in wholesale fashion, known for innovation, reliability, and creating lasting partnerships with retailers and brands alike.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-700">
                Authenticity, Integrity, Customer-First, Innovation, and Partnership drive everything we do, ensuring trust and quality in every transaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">StockClothing by the Numbers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p className="text-gray-600">Products in Stock</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600">Happy Retailers</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Top Brands</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose StockClothing.biz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Authentic Products</h3>
              <p className="text-blue-100">
                100% genuine products from authorized suppliers. We guarantee authenticity on every item.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-blue-100">
                Direct relationships with manufacturers mean better prices for you. Save up to 60% on bulk orders.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Fast Shipping</h3>
              <p className="text-blue-100">
                Free shipping on orders over $1,000. Most orders ship within 2-5 business days.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-blue-100">
                Every item is inspected before shipping. We stand behind our products with a 30-day guarantee.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Flexible Orders</h3>
              <p className="text-blue-100">
                Low minimum order quantities. Start small and scale as your business grows.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-blue-100">
                Dedicated support team ready to help. We're here for you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Wholesale Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful retailers who trust StockClothing.biz for their wholesale needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
