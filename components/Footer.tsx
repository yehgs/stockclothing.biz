import Link from 'next/link';
import { Package, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-bold text-white">StockClothing.biz</h3>
                <p className="text-xs text-gray-400">Wholesale Fashion</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for wholesale clothing. Premium brands at unbeatable prices for retailers worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/bulk-order" className="hover:text-blue-500 transition-colors">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-blue-500 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-blue-500 transition-colors">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-blue-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-blue-500 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>No. 3 Kafi Street, Alausa, Oregun,<br />Ikeja, Lagos State.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="hover:text-blue-500 transition-colors">
                  (+234)-7030-292729
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@stockclothing.biz" className="hover:text-blue-500 transition-colors">
                  info@stockclothing.biz
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-white mb-2">Business Hours:</p>
              <p className="text-xs">Monday - Friday: 9am - 6pm EST</p>
              <p className="text-xs">Saturday: 10am - 4pm EST</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-4">Get the latest deals and new arrivals delivered to your inbox</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; 2025 StockClothing.biz. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Secure payments powered by trusted payment processors
          </p>
        </div>
      </div>
    </footer>
  );
}
