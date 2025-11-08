'use client';

import { useState } from 'react';
import { Package, TrendingDown, Truck, Award } from 'lucide-react';

export default function BulkOrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours with a custom quote.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Bulk Orders & Wholesale Pricing</h1>
          <p className="text-xl text-blue-100">
            Get special pricing for large quantity orders - Save up to 60%!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">Up to 60% off on bulk orders</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Large Stock</h3>
            <p className="text-gray-600 text-sm">10,000+ products available</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Priority shipping on bulk orders</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">100% authentic products</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Request Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Bulk Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type *
                </label>
                <select
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({...formData, productType: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select product type</option>
                  <option value="t-shirts">T-Shirts</option>
                  <option value="jeans">Jeans</option>
                  <option value="jackets">Jackets</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="mixed">Mixed/Various</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Quantity *
                </label>
                <input
                  type="number"
                  required
                  min="100"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Request Quote
              </button>
            </form>
          </div>

          {/* Pricing Tiers */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Volume Discounts</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">100-499 units</p>
                    <p className="text-sm text-gray-600">Standard wholesale pricing</p>
                  </div>
                  <span className="text-blue-600 font-bold text-xl">20% OFF</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-2 border-blue-600">
                  <div>
                    <p className="font-semibold text-gray-900">500-999 units</p>
                    <p className="text-sm text-gray-600">Preferred pricing</p>
                  </div>
                  <span className="text-blue-600 font-bold text-xl">35% OFF</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border-2 border-purple-600">
                  <div>
                    <p className="font-semibold text-gray-900">1000-4999 units</p>
                    <p className="text-sm text-gray-600">Premium pricing</p>
                  </div>
                  <span className="text-purple-600 font-bold text-xl">45% OFF</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-600">
                  <div>
                    <p className="font-semibold text-gray-900">5000+ units</p>
                    <p className="text-sm text-gray-600">Enterprise pricing</p>
                  </div>
                  <span className="text-amber-600 font-bold text-xl">60% OFF</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Why Choose Us for Bulk Orders?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Fast response time (within 24 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Flexible payment terms for established customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Custom packaging options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Priority customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
