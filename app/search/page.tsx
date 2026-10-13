"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, searchProducts } from "@/data/products";
import { Search, X, ArrowUpDown, Check, Compass } from "lucide-react";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = query.trim() ? searchProducts(query) : [...PRODUCTS];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (maxPrice) {
      result = result.filter((p) => p.price <= maxPrice);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [query, activeCategory, maxPrice, sortBy]);

  const clearAllFilters = () => {
    setQuery("");
    setActiveCategory(null);
    setMaxPrice(null);
    setSortBy("featured");
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      <Header showBack title="Search Shoes" />

      <main className="flex-1 flex flex-col w-full">
        {/* Search Header Input Bar */}
        <section className="px-margin pt-space-sm pb-space-sm bg-surface sticky top-14 z-30 border-b border-surface-container/60 backdrop-blur-md bg-surface/90">
          <div className="flex items-center gap-space-sm">
            <div className="flex-1 flex items-center bg-surface-container px-space-md h-11 rounded-full focus-within:bg-surface-container-high transition-colors">
              <Search className="w-4 h-4 text-outline mr-2 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search handcrafted footwear..."
                className="w-full bg-transparent border-none outline-none text-on-surface font-body-md text-body-md placeholder:text-outline"
                autoFocus={!initialQuery}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="w-6 h-6 rounded-full bg-outline-variant/60 hover:bg-outline-variant text-on-surface flex items-center justify-center transition-colors shrink-0 ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills Row */}
          <div className="pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveCategory(activeCategory === "men" ? null : "men")}
              className={`flex items-center gap-1.5 h-8 px-3.5 rounded-full shadow-sm font-label-md text-label-md shrink-0 active:scale-95 transition-all ${
                activeCategory === "men"
                  ? "bg-primary-container text-surface"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
            >
              <span>Men</span>
              {activeCategory === "men" && (
                <X className="w-3 h-3" />
              )}
            </button>

            <button
              onClick={() => setActiveCategory(activeCategory === "women" ? null : "women")}
              className={`flex items-center gap-1.5 h-8 px-3.5 rounded-full shadow-sm font-label-md text-label-md shrink-0 active:scale-95 transition-all ${
                activeCategory === "women"
                  ? "bg-primary-container text-surface"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
            >
              <span>Women</span>
              {activeCategory === "women" && (
                <X className="w-3 h-3" />
              )}
            </button>

            <button
              onClick={() => setActiveCategory(activeCategory === "sneakers" ? null : "sneakers")}
              className={`flex items-center gap-1.5 h-8 px-3.5 rounded-full shadow-sm font-label-md text-label-md shrink-0 active:scale-95 transition-all ${
                activeCategory === "sneakers"
                  ? "bg-primary-container text-surface"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
            >
              <span>Sneakers</span>
              {activeCategory === "sneakers" && (
                <X className="w-3 h-3" />
              )}
            </button>

            <button
              onClick={() => setActiveCategory(activeCategory === "formal" ? null : "formal")}
              className={`flex items-center gap-1.5 h-8 px-3.5 rounded-full shadow-sm font-label-md text-label-md shrink-0 active:scale-95 transition-all ${
                activeCategory === "formal"
                  ? "bg-primary-container text-surface"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
            >
              <span>Formal</span>
              {activeCategory === "formal" && (
                <X className="w-3 h-3" />
              )}
            </button>

            <button
              onClick={() => setMaxPrice(maxPrice === 80000 ? null : 80000)}
              className={`flex items-center gap-1.5 h-8 px-3.5 rounded-full shadow-sm font-label-md text-label-md shrink-0 active:scale-95 transition-all ${
                maxPrice === 80000
                  ? "bg-primary-container text-surface"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
            >
              <span>Under ₦80,000</span>
              {maxPrice === 80000 && (
                <X className="w-3 h-3" />
              )}
            </button>
          </div>
        </section>

        {/* Results Meta & Sort Controls */}
        <section className="px-margin py-3 flex items-center justify-between relative">
          <span className="font-body-sm text-body-sm text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? "style" : "results"}
          </span>

          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span>
                {sortBy === "featured"
                  ? "Sort"
                  : sortBy === "price-asc"
                  ? "Price: Low to High"
                  : sortBy === "price-desc"
                  ? "Price: High to Low"
                  : "Top Rated"}
              </span>
            </button>

            {showSortMenu && (
              <div className="absolute right-0 top-10 w-48 bg-surface rounded-xl shadow-xl border border-outline-variant/40 py-2 z-40 animate-in fade-in zoom-in-95">
                {[
                  { id: "featured", label: "Featured" },
                  { id: "price-asc", label: "Price: Low to High" },
                  { id: "price-desc", label: "Price: High to Low" },
                  { id: "rating", label: "Customer Rating" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSortBy(opt.id as typeof sortBy);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 font-label-md text-label-md hover:bg-surface-container flex items-center justify-between ${
                      sortBy === opt.id ? "text-primary-container font-bold" : "text-on-surface"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.id && (
                      <Check className="w-4 h-4 text-primary-container" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Product Grid or Empty State */}
        <section className="px-margin pt-1 pb-space-2xl flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-gutter gap-y-space-xl">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 flex flex-col items-center justify-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline">
                <Compass className="w-8 h-8 text-outline" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">No styles matched</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                We couldn&apos;t find any pairs matching your current filters. Try resetting or adjusting your search.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-2 px-5 py-2.5 rounded-full bg-primary-container text-surface font-label-md text-label-md"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center font-serif text-espresso">
          Loading search catalog...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
