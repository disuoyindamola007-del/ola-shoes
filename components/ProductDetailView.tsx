"use client";

import React, { useState } from "react";
import {
  Heart,
  Star,
  Check,
  Ruler,
  Info,
  ShoppingBag,
  X,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "42");
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || "Original"
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-32">
      <Header showBack title={product.name} />

      <main className="flex-1 flex flex-col w-full">
        {/* Main Product Image Hero */}
        <div className="relative w-full aspect-square bg-surface-container-low overflow-hidden">
          <img
            src={product.images[activeImageIndex]?.url || product.images[0].url}
            alt={product.images[activeImageIndex]?.alt || product.name}
            className="w-full h-full object-cover object-center transition-all duration-300"
          />

          {/* Floating Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label="Wishlist"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-on-surface shadow-sm active:scale-90 transition-transform"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isWishlisted ? "fill-error text-error" : "text-on-surface"
              }`}
            />
          </button>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-primary-container text-surface font-label-sm text-[10px] tracking-wider uppercase shadow-sm font-bold">
              {product.badge}
            </div>
          )}
        </div>

        {/* Studio Gallery Multi-Angle Carousel Thumbnails */}
        {product.images.length > 1 && (
          <div className="px-margin py-3 flex gap-2.5 overflow-x-auto no-scrollbar">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx
                    ? "border-primary-container ring-1 ring-primary-container"
                    : "border-outline-variant/40 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt || `${product.name} angle ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Title & Price Header */}
        <section className="px-margin pt-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold">
                Bespoke Atelier Collection
              </span>
              <div className="flex items-center gap-1 text-secondary">
                <Star className="w-4 h-4 fill-tertiary-fixed-dim text-tertiary-fixed-dim" />
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  {product.rating}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary-container tracking-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-price-lg text-price-lg text-primary-container font-bold text-xl">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-body-md text-body-md text-outline line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                (VAT included)
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>
        </section>

        {/* Color Swatch Selector */}
        {product.colors.length > 0 && (
          <section className="px-margin pt-space-lg">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Color: <strong className="text-primary-container">{selectedColor}</strong>
              </span>
            </div>

            <div className="flex gap-3 pt-1">
              {product.colors.map((color) => {
                const isSelected = selectedColor === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    className={`relative w-9 h-9 rounded-full p-0.5 transition-all ${
                      isSelected
                        ? "ring-2 ring-primary-container ring-offset-2 ring-offset-surface scale-110"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <span
                      className="w-full h-full rounded-full shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Size Selector */}
        <section className="px-margin pt-space-lg">
          <div className="flex items-center justify-between mb-space-sm">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Select Size (EU)
            </span>
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="font-label-md text-label-md text-primary-container underline underline-offset-2 flex items-center gap-1 active:opacity-75 font-semibold"
            >
              <Ruler className="w-4 h-4" />
              <span>Size guide</span>
            </button>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-12 rounded-xl font-label-lg text-label-lg flex items-center justify-center active:scale-95 transition-all shadow-sm ${
                    isSelected
                      ? "bg-primary-container text-on-primary ring-2 ring-primary-container font-bold"
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 mt-2 text-on-surface-variant font-body-sm text-body-sm">
            <Info className="w-4 h-4 text-tertiary-fixed-dim shrink-0" />
            <span>True to size. For wider feet, consider going up one size.</span>
          </div>
        </section>

        {/* Craft Story & Specifications */}
        <section className="px-margin pt-space-xl space-y-4">
          <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 space-y-2">
            <h3 className="font-headline-sm text-headline-sm text-primary-container">
              Artisan Craftsmanship
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {product.craftStory}
            </p>
          </div>

          <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2 text-on-surface">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">
              Materials &amp; Care
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{product.material}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-primary-container shrink-0" />
              <div className="text-left">
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Express Delivery
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  2–4 Days across Nigeria
                </p>
              </div>
            </div>

            <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-primary-container shrink-0" />
              <div className="text-left">
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Artisanal Warranty
                </p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  14-Day Free Exchange
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom "Add to Bag" Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto pb-safe bg-surface/95 backdrop-blur-xl border-t border-surface-container shadow-[0_-4px_20px_rgba(36,25,19,0.08)]">
        <div className="h-20 px-margin flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
              Total Price
            </span>
            <span className="font-price-lg text-price-lg font-bold text-primary-container text-xl">
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex-1 h-12 rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all ${
              isAdded
                ? "bg-emerald-800 text-white"
                : "bg-primary-container text-on-primary hover:bg-black"
            }`}
          >
            <span>{isAdded ? "Added to Bag" : "Add to Bag"}</span>
            {isAdded ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Size Guide Modal Drawer */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in">
          <div className="w-full max-w-md bg-surface rounded-t-2xl p-6 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto border-t border-outline-variant/40">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <h3 className="font-headline-sm text-headline-sm text-primary-container">
                Footwear Size Guide
              </h3>
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="p-1 text-on-surface-variant hover:text-on-surface rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Ola Shoes are lasted according to European sizing standards. If your foot has a wider bridge, we recommend going up one size.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm text-body-sm border border-surface-container rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-surface-container font-semibold text-primary-container">
                    <th className="p-2.5">EU Size</th>
                    <th className="p-2.5">UK Size</th>
                    <th className="p-2.5">US Size</th>
                    <th className="p-2.5">Foot Length (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  <tr>
                    <td className="p-2.5 font-bold">40</td>
                    <td className="p-2.5">6.5</td>
                    <td className="p-2.5">7.5</td>
                    <td className="p-2.5">25.5 cm</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">41</td>
                    <td className="p-2.5">7.5</td>
                    <td className="p-2.5">8.5</td>
                    <td className="p-2.5">26.2 cm</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">42</td>
                    <td className="p-2.5">8.0</td>
                    <td className="p-2.5">9.0</td>
                    <td className="p-2.5">27.0 cm</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">43</td>
                    <td className="p-2.5">9.0</td>
                    <td className="p-2.5">10.0</td>
                    <td className="p-2.5">27.8 cm</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">44</td>
                    <td className="p-2.5">9.5</td>
                    <td className="p-2.5">10.5</td>
                    <td className="p-2.5">28.5 cm</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">45</td>
                    <td className="p-2.5">10.5</td>
                    <td className="p-2.5">11.5</td>
                    <td className="p-2.5">29.2 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="w-full py-3 rounded-xl bg-primary-container text-surface font-label-md text-label-md font-semibold hover:bg-black transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
