"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, Compass, ArrowRight } from "lucide-react";
import { searchProducts, formatPrice } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query ? searchProducts(query) : [];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-start p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md mx-auto bg-surface rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-outline-variant">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-surface-container flex items-center gap-3 bg-surface-container-low">
          <Search className="w-5 h-5 text-outline shrink-0" />
          <input
            type="text"
            placeholder="Search loafers, sneakers, heels..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent text-on-surface placeholder:text-outline focus:outline-none font-body-md"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-outline hover:text-on-surface p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="font-label-md text-label-md text-primary-container font-semibold px-2 py-1 rounded hover:bg-surface-container"
          >
            Cancel
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4">
          {!query && (
            <div className="py-6 text-center text-on-surface-variant flex flex-col gap-2 items-center">
              <Compass className="w-8 h-8 text-outline mb-1" />
              <p className="font-body-sm text-body-sm">
                Try searching for &quot;Loafer&quot;, &quot;Sneakers&quot;, &quot;Heels&quot;, or &quot;Oxford&quot;
              </p>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {["Loafer", "Sneakers", "Heels", "Formal", "Sandals"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-8 text-center text-on-surface-variant flex flex-col gap-2">
              <p className="font-headline-sm text-headline-sm text-on-surface">No styles found</p>
              <p className="font-body-sm text-body-sm">
                We couldn&apos;t find any pairs matching &quot;{query}&quot;.
              </p>
            </div>
          )}

          {query && results.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                  {results.length} styles found
                </p>
                <button
                  onClick={() => {
                    onClose();
                    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
                  }}
                  className="font-label-sm text-label-sm text-primary-container font-bold hover:underline"
                >
                  View in Catalog
                </button>
              </div>

              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0">
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-label-lg text-label-lg text-on-surface truncate group-hover:text-primary-container">
                      {product.name}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant capitalize">
                      {product.category} · {product.material.split(",")[0]}
                    </p>
                    <span className="font-price-md text-price-md text-primary-container font-bold">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary-container group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
