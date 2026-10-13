"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Heart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function BottomNav() {
  const pathname = usePathname();
  const { wishlist } = useCart();

  const isHome = pathname === "/";
  const isShop = pathname.startsWith("/shop") || pathname.startsWith("/category");
  const isSaved = pathname === "/saved";
  const isAccount =
    pathname.startsWith("/account") ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/create-account");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto pb-safe bg-surface/95 backdrop-blur-xl border-t border-surface-container/80 shadow-[0_-2px_16px_rgba(36,25,19,0.06)]">
      <div className="h-16 px-space-md flex items-center justify-around">
        <Link
          href="/"
          className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] transition-colors ${
            isHome
              ? "text-primary-container font-semibold"
              : "text-on-surface-variant hover:text-primary-container"
          }`}
        >
          <Home className={`w-5 h-5 ${isHome ? "stroke-[2.5px]" : "stroke-[1.75px]"}`} />
          <span className="font-label-sm text-[11px] tracking-wide">Home</span>
        </Link>

        <Link
          href="/shop"
          className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] transition-colors ${
            isShop
              ? "text-primary-container font-semibold"
              : "text-on-surface-variant hover:text-primary-container"
          }`}
        >
          <LayoutGrid className={`w-5 h-5 ${isShop ? "stroke-[2.5px]" : "stroke-[1.75px]"}`} />
          <span className="font-label-sm text-[11px] tracking-wide">Shop</span>
        </Link>

        <Link
          href="/saved"
          className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] transition-colors relative ${
            isSaved
              ? "text-primary-container font-semibold"
              : "text-on-surface-variant hover:text-primary-container"
          }`}
        >
          <Heart
            className={`w-5 h-5 ${
              isSaved ? "fill-primary-container stroke-primary-container" : "stroke-[1.75px]"
            }`}
          />
          <span className="font-label-sm text-[11px] tracking-wide">Saved</span>
          {wishlist.length > 0 && (
            <span className="absolute top-1.5 right-4 w-2 h-2 rounded-full bg-error" />
          )}
        </Link>

        <Link
          href="/account"
          className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] transition-colors ${
            isAccount
              ? "text-primary-container font-semibold"
              : "text-on-surface-variant hover:text-primary-container"
          }`}
        >
          <User className={`w-5 h-5 ${isAccount ? "stroke-[2.5px]" : "stroke-[1.75px]"}`} />
          <span className="font-label-sm text-[11px] tracking-wide">Account</span>
        </Link>
      </div>
    </nav>
  );
}
