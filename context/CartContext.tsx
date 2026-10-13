"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  id: string; // unique item key: `${productId}-${size}-${color}`
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  promoCode: string | null;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  shippingMethod: "standard" | "express";
  setShippingMethod: (method: "standard" | "express") => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => void;
  notification: string | null;
  dismissNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Lazy initial state function to avoid cascading effect renders
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const savedCart = localStorage.getItem("ola_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const savedWishlist = localStorage.getItem("ola_wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [notification, setNotification] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("ola_cart", JSON.stringify(items));
    } catch {
      // Ignore error
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem("ola_wishlist", JSON.stringify(wishlist));
    } catch {
      // Ignore error
    }
  }, [wishlist]);

  const addToCart = (
    product: Product,
    size: string,
    color: string,
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${size}-${color}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, size, color, quantity }];
    });

    setNotification(`Added "${product.name}" (Size ${size}) to your bag`);
    setTimeout(() => {
      setNotification((curr) =>
        curr?.includes(product.name) ? null : curr
      );
    }, 3500);
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode(null);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyPromo = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === "OLA10" || trimmed === "LAGOS10") {
      setPromoCode(trimmed);
      return { success: true, message: "10% artisanal discount applied!" };
    }
    if (trimmed === "FREESHIP") {
      setPromoCode(trimmed);
      return { success: true, message: "Complimentary delivery applied!" };
    }
    return { success: false, message: "Invalid promo code. Try OLA10 or FREESHIP" };
  };

  const removePromo = () => setPromoCode(null);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Delivery fee rules: Free over ₦100,000 or with FREESHIP promo
  let shippingFee = 0;
  if (items.length > 0) {
    if (subtotal >= 100000 || promoCode === "FREESHIP") {
      shippingFee = shippingMethod === "express" ? 2000 : 0; // discounted express
    } else {
      shippingFee = shippingMethod === "express" ? 4500 : 2500;
    }
  }

  // Discount calculation
  let discount = 0;
  if (promoCode === "OLA10" || promoCode === "LAGOS10") {
    discount = Math.round(subtotal * 0.1);
  }

  const total = Math.max(0, subtotal - discount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotal,
        shippingFee,
        discount,
        total,
        promoCode,
        applyPromo,
        removePromo,
        shippingMethod,
        setShippingMethod,
        wishlist,
        toggleWishlist,
        isInWishlist,
        notification,
        dismissNotification: () => setNotification(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
