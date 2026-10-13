"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  ArrowLeft,
  Search,
  ShoppingBag,
  User,
  X,
  LayoutGrid,
  Heart,
  Truck,
  Phone,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { SearchModal } from "@/components/SearchModal";

interface HeaderProps {
  showBack?: boolean;
  title?: string;
}

export function Header({ showBack = false, title }: HeaderProps) {
  const router = useRouter();
  const { totalCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container/70 shadow-[0_1px_12px_rgba(36,25,19,0.03)]">
        <div className="h-14 px-margin flex items-center justify-between">
          {/* Left Action: Back or Hamburger Menu */}
          <div className="flex items-center">
            {showBack ? (
              <button
                onClick={() => router.back()}
                aria-label="Go back"
                className="w-10 h-10 -ml-1 flex items-center justify-center text-on-surface hover:text-primary-container transition-colors active:scale-90"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="w-10 h-10 -ml-1 flex items-center justify-center text-on-surface hover:text-primary-container transition-colors active:scale-95"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Center Title or Brand Wordmark */}
          <div className="flex flex-col items-center justify-center">
            {title ? (
              <h1 className="font-headline-sm text-headline-sm text-primary-container font-semibold truncate max-w-[200px]">
                {title}
              </h1>
            ) : (
              <Link
                href="/"
                className="font-headline-md text-headline-md text-primary-container tracking-wider uppercase select-none font-semibold hover:opacity-90 transition-opacity"
              >
                OLA SHOES
              </Link>
            )}
          </div>

          {/* Right Actions: Search, Bag, Account */}
          <div className="flex items-center justify-end gap-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search footwear"
              className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary-container transition-colors active:scale-90"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/cart"
              aria-label="Shopping Bag"
              className="relative w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary-container transition-colors active:scale-90"
            >
              <ShoppingBag className="w-5 h-5" />
              {mounted && totalCount > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-[16px] h-[16px] px-1 bg-primary-container text-on-primary font-label-sm text-[9px] leading-[16px] text-center rounded-full font-bold shadow-sm">
                  {totalCount}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              aria-label="Customer Account"
              className="w-8 h-8 ml-0.5 rounded-full bg-primary-container flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity shadow-sm"
            >
              <User className="w-4 h-4 text-surface" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hamburger Menu Slide-Out Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
          />

          {/* Drawer Content */}
          <div className="relative w-[85%] max-w-xs bg-surface h-full shadow-2xl flex flex-col z-50 border-r border-outline-variant/40 animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="p-margin border-b border-surface-container flex items-center justify-between bg-surface-container-low">
              <div>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-headline-md text-headline-md text-primary-container tracking-wider uppercase font-semibold"
                >
                  OLA SHOES
                </Link>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Artisanal Cordwainers · Lagos
                </p>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-margin py-4 space-y-6">
              {/* Category Collections */}
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline px-2 font-semibold">
                  Footwear Collections
                </span>
                <nav className="mt-2 space-y-1">
                  <Link
                    href="/shop"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface hover:text-primary-container font-label-lg text-label-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <LayoutGrid className="w-4 h-4 text-outline group-hover:text-primary-container" />
                      <span>Shop All Footwear</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/category/men"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface hover:text-primary-container font-label-lg text-label-lg transition-colors group"
                  >
                    <span>Men&apos;s Collection</span>
                    <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/category/women"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface hover:text-primary-container font-label-lg text-label-lg transition-colors group"
                  >
                    <span>Women&apos;s Collection</span>
                    <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/category/sneakers"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface hover:text-primary-container font-label-lg text-label-lg transition-colors group"
                  >
                    <span>Luxury Sneakers</span>
                    <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/category/formal"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface hover:text-primary-container font-label-lg text-label-lg transition-colors group"
                  >
                    <span>Formal &amp; Penny Loafers</span>
                    <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/category/sandals"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface hover:text-primary-container font-label-lg text-label-lg transition-colors group"
                  >
                    <span>Sandals &amp; Slides</span>
                    <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </nav>
              </div>

              {/* Curated Feeds */}
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline px-2 font-semibold">
                  Curated &amp; Seasonal
                </span>
                <nav className="mt-2 space-y-1">
                  <Link
                    href="/shop"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-tertiary-fixed-dim" />
                      <span>Just Landed</span>
                    </div>
                    <span className="font-label-sm text-[10px] uppercase tracking-wider bg-secondary-container px-2 py-0.5 rounded-full text-on-secondary-fixed font-bold">
                      New
                    </span>
                  </Link>

                  <Link
                    href="/saved"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-error" />
                      <span>Saved Wishlist</span>
                    </div>
                  </Link>
                </nav>
              </div>

              {/* Customer Care & Portal */}
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline px-2 font-semibold">
                  Patron Portal &amp; Care
                </span>
                <nav className="mt-2 space-y-1">
                  <Link
                    href="/account"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors"
                  >
                    <User className="w-4 h-4 text-outline" />
                    <span>My Account</span>
                  </Link>

                  <Link
                    href="/track-order"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors"
                  >
                    <Truck className="w-4 h-4 text-outline" />
                    <span>Track Order Dispatch</span>
                  </Link>

                  <Link
                    href="/help"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors"
                  >
                    <Phone className="w-4 h-4 text-outline" />
                    <span>Atelier Concierge &amp; FAQ</span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-margin border-t border-surface-container bg-surface-container-low/70 space-y-3">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <ShieldCheck className="w-4 h-4 text-primary-container" />
                <span>100% Handcrafted in Lagos, Nigeria</span>
              </div>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-primary-container text-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
              >
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Live Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
