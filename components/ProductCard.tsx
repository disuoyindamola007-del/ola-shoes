"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="flex flex-col group relative">
      {/* Product Image Frame */}
      <div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images[0].url}
            alt={product.images[0].alt || product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Status Badge */}
        {product.badge && (
          <div
            className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full font-label-sm text-[10px] tracking-wider uppercase shadow-sm ${
              product.badge === "SALE"
                ? "bg-error text-on-error font-bold"
                : product.badge === "BESPOKE"
                ? "bg-primary-container text-tertiary-fixed-dim font-bold"
                : "bg-primary-container text-on-primary font-bold"
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Favorite Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-on-surface active:scale-90 transition-transform shadow-sm hover:bg-white"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-error text-error" : "text-on-surface hover:text-error"
            }`}
          />
        </button>
      </div>

      {/* Product Information */}
      <div className="pt-2.5 pb-1 flex flex-col gap-0.5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-body-md text-body-md text-on-surface font-medium truncate hover:text-primary-container transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-price-md text-price-md font-bold ${
              product.badge === "SALE" ? "text-error" : "text-primary-container"
            }`}
          >
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-body-sm text-body-sm text-outline line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
