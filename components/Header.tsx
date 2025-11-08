'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Package, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount, wishlist } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <p>🎉 Wholesale Deals - Save up to 60% on bulk orders!</p>
            <div className="hidden md:flex gap-4">
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Package className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">StockClothing</h1>
              <p className="text-xs text-gray-500">Wholesale Fashion</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for brands, products, categories..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/account" className="hidden md:flex items-center gap-2 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Account</span>
            </Link>

            <Link href="/wishlist" className="relative hover:text-blue-600 transition-colors">
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="hidden lg:flex items-center gap-8 py-3">
            <li>
              <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="font-medium hover:text-blue-600 transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/categories" className="font-medium hover:text-blue-600 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/brands" className="font-medium hover:text-blue-600 transition-colors">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/deals" className="font-medium text-red-600 hover:text-red-700 transition-colors">
                🔥 Hot Deals
              </Link>
            </li>
            <li>
              <Link href="/bulk-order" className="font-medium hover:text-blue-600 transition-colors">
                Bulk Orders
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="lg:hidden py-4 space-y-3">
              <li>
                <Link href="/" className="block font-medium hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="block font-medium hover:text-blue-600 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="block font-medium hover:text-blue-600 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/brands" className="block font-medium hover:text-blue-600 transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/deals" className="block font-medium text-red-600 hover:text-red-700 transition-colors">
                  🔥 Hot Deals
                </Link>
              </li>
              <li>
                <Link href="/bulk-order" className="block font-medium hover:text-blue-600 transition-colors">
                  Bulk Orders
                </Link>
              </li>
              <li className="pt-3 border-t border-gray-200">
                <Link href="/account" className="block font-medium hover:text-blue-600 transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
