'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: {
    original: number;
    current: number;
    discount: number;
  };
  images: string[];
  color: string;
  selectedSize: string;
  quantity: number;
  stockQuantity: number;
  minOrderQuantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: number[];
  addToCart: (product: any, size: string, quantity: number) => void;
  removeFromCart: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('stockclothing_cart');
    const savedWishlist = localStorage.getItem('stockclothing_wishlist');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('stockclothing_cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('stockclothing_cart');
    }
  }, [cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('stockclothing_wishlist', JSON.stringify(wishlist));
    } else {
      localStorage.removeItem('stockclothing_wishlist');
    }
  }, [wishlist]);

  const addToCart = (product: any, size: string, quantity: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.selectedSize === size
      );

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Add new item
        const cartItem: CartItem = {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          images: product.images,
          color: product.color,
          selectedSize: size,
          quantity: quantity,
          stockQuantity: product.stockQuantity,
          minOrderQuantity: product.minOrderQuantity,
        };
        return [...prevCart, cartItem];
      }
    });
  };

  const removeFromCart = (productId: number, size: string) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === productId && item.selectedSize === size))
    );
  };

  const updateQuantity = (productId: number, size: string, quantity: number) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      const itemIndex = newCart.findIndex(
        item => item.id === productId && item.selectedSize === size
      );
      
      if (itemIndex > -1 && quantity > 0) {
        newCart[itemIndex].quantity = quantity;
      }
      
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToWishlist = (productId: number) => {
    setWishlist(prev => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prev => prev.filter(id => id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price.current * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
