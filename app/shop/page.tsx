"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, Product } from "@/data/products";
import { PackageOpen, Ruler } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = [
    { id: "all", label: "All Styles" },
    { id: "sneakers", label: "Sneakers" },
    { id: "formal", label: "Formal & Loafers" },
    { id: "women", label: "Heels & Women" },
    { id: "sandals", label: "Sandals" },
    { id: "sale", label: "On Sale" },
  ];

  // Filtering
  let filtered: Product[] = [...PRODUCTS];
  if (selectedCategory === "sale") {
    filtered = filtered.filter((p) => p.badge === "SALE");
  } else if (selectedCategory !== "all") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  // Sorting
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      <AnnouncementBar />
      <Header title="All Footwear" />

      <main className="flex-1 flex flex-col w-full">
        {/* Category Filter Pills (Horizontal Scroll) */}
        <section className="px-margin pt-3 pb-2">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 ${
                    isActive
                      ? "bg-primary-container text-surface shadow-sm font-semibold"
                      : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Filter Meta & Sort Bar */}
        <div className="px-margin py-2 flex items-center justify-between border-b border-surface-container/60 text-body-sm text-on-surface-variant">
          <span>{filtered.length} styles available</span>
          <div className="flex items-center gap-1.5">
            <span className="font-label-sm uppercase tracking-wider text-outline text-[11px]">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-label-md text-label-md text-primary-container font-semibold focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* 2-Column Product Grid */}
        <section className="px-margin py-4">
          {filtered.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center gap-3 text-on-surface-variant">
              <PackageOpen className="w-10 h-10 text-outline" />
              <p className="font-headline-sm text-headline-sm text-on-surface">No styles found</p>
              <p className="font-body-sm text-body-sm">
                No footwear found in this category at the moment.
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-2 px-4 py-2 rounded-lg bg-primary-container text-surface font-label-md"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-gutter">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Craft Note Banner */}
        <section className="px-margin my-4">
          <div className="rounded-xl bg-surface-container-low p-4 border border-outline-variant/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-fixed">
              <Ruler className="w-5 h-5 text-on-secondary-fixed" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-primary-container font-semibold">
                Bespoke Sizing Consultation
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Standard EU fit. Unsure of your size? Our team in Lagos offers complimentary exchanges.
              </span>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
