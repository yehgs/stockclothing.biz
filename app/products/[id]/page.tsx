'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Package, Truck, ShieldCheck, Heart, Share2, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import productsData from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((p) => p.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(product?.minOrderQuantity || 10);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart, isInWishlist, addToWishlist, removeFromWishlist } = useCart();

  if (!product) {
    notFound();
  }

  const inWishlist = isInWishlist(product.id);

  // Get related products
  const relatedProducts = productsData
    .filter(p => (p.category === product.category || p.brand === product.brand) && p.id !== product.id)
    .slice(0, 4);

  const decreaseQuantity = () => {
    if (quantity > product.minOrderQuantity) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const totalPrice = product.price.current * quantity;
  const savings = (product.price.original - product.price.current) * quantity;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/products?category=${product.category}`} className="text-gray-600 hover:text-blue-600">
              {product.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.newArrival && (
                  <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded">
                    NEW ARRIVAL
                  </span>
                )}
                {product.featured && (
                  <span className="bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded">
                    FEATURED
                  </span>
                )}
                {product.price.discount > 0 && (
                  <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                    SAVE {product.price.discount}%
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button 
                  onClick={toggleWishlist}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & SKU */}
            <div>
              <Link href={`/products?brand=${product.brand}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                {product.brand}
              </Link>
              <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{product.name}</h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(parseFloat(product.rating))
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">${product.price.current}</span>
                {product.price.discount > 0 && (
                  <span className="text-xl text-gray-400 line-through mb-1">${product.price.original}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-1">Price per unit</p>
              {savings > 0 && (
                <p className="text-green-600 font-semibold">
                  You save ${product.price.original - product.price.current} per unit!
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <Package className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">In Stock</p>
                <p className="text-xs text-gray-600">{product.stockQuantity} units available</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <Truck className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Fast Shipping</p>
                <p className="text-xs text-gray-600">2-5 business days</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <ShieldCheck className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Condition</p>
                <p className="text-xs text-gray-600">{product.condition}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Min. Order</p>
                <p className="text-lg font-bold text-blue-600">{product.minOrderQuantity} units</p>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity (Min: {product.minOrderQuantity})</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= product.minOrderQuantity}
                    className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val >= product.minOrderQuantity && val <= product.stockQuantity) {
                        setQuantity(val);
                      }
                    }}
                    className="w-20 text-center font-semibold text-lg border-x-2 border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stockQuantity}
                    className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Total: <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span></p>
                  {savings > 0 && (
                    <p className="text-sm text-green-600">Total savings: ${savings.toFixed(2)}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-lg font-semibold transition-colors ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-4 rounded-lg font-semibold transition-colors">
                Request Quote
              </button>
            </div>

            {/* Trust Badges */}
            <div className="border-t pt-6">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-600" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Brand:</span>
                  <span className="text-gray-900">{product.brand}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="text-gray-900">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Gender:</span>
                  <span className="text-gray-900">{product.gender}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Color:</span>
                  <span className="text-gray-900">{product.color}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Material:</span>
                  <span className="text-gray-900">{product.material}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Condition:</span>
                  <span className="text-gray-900">{product.condition}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Origin:</span>
                  <span className="text-gray-900">{product.origin}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">Supplier:</span>
                  <span className="text-gray-900">{product.supplier}</span>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Description</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className={showFullDescription ? '' : 'line-clamp-6'}>
                  {product.longDescription}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2 flex items-center gap-1"
                >
                  {showFullDescription ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Care Instructions</h3>
                <p className="text-gray-700">{product.careInstructions}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}