"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { Heart, ArrowRight } from "lucide-react";

export default function SavedPage() {
  const { wishlist } = useCart();
  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      <AnnouncementBar />
      <Header title="Saved Footwear" />

      <main className="flex-1 px-margin py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b border-surface-container">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            My Wishlist ({wishlistedProducts.length})
          </h2>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Saved across sessions
          </span>
        </div>

        {wishlistedProducts.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center gap-4 text-on-surface-variant flex-1">
            <div className="w-18 h-18 rounded-full bg-surface-container flex items-center justify-center text-outline">
              <Heart className="w-9 h-9 text-outline" />
            </div>
            <div className="flex flex-col gap-1 max-w-xs">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                No saved pairs yet
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tap the heart icon on any shoe to save it to your bespoke wishlist.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-container text-surface font-label-md text-label-md font-semibold uppercase tracking-wider shadow-md hover:bg-black transition-all"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-gutter pt-2">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
