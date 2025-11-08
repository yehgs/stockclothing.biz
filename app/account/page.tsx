'use client';

import { User, ShoppingBag, Heart, Settings, LogOut, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function AccountPage() {
  const { cart, wishlist } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">My Account</h1>
          <p className="text-xl text-blue-100">
            Manage your profile, orders, and preferences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="bg-blue-100 p-4 rounded-full">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-gray-600 text-sm">john@example.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 font-medium">
                  <User className="w-5 h-5" />
                  Profile
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700">
                  <ShoppingBag className="w-5 h-5" />
                  Orders
                </a>
                <Link href="/wishlist" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700">
                  <Heart className="w-5 h-5" />
                  Wishlist ({wishlist.length})
                </Link>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700">
                  <Settings className="w-5 h-5" />
                  Settings
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-red-600">
                  <LogOut className="w-5 h-5" />
                  Logout
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ShoppingBag className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-gray-600">Total Orders</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{wishlist.length}</p>
                <p className="text-gray-600">Wishlist Items</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{cart.length}</p>
                <p className="text-gray-600">Cart Items</p>
              </div>
            </div>

            {/* Profile Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (123) 456-7890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Save Changes
              </button>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h3>
              <div className="text-center py-8">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">You haven't placed any orders yet</p>
                <Link
                  href="/products"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Start Shopping →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
