"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowRight,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  Tag,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    discount,
    total,
    promoCode,
    applyPromo,
    removePromo,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [promoError, setPromoError] = useState("");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    if (!inputCode.trim()) return;

    const success = applyPromo(inputCode.trim());
    if (success) {
      setInputCode("");
    } else {
      setPromoError("Invalid promotional code. Try 'LAGOS10' or 'OLA20'");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-28">
      <Header showBack title={`Shopping Bag (${items.length})`} />

      <main className="flex-1 px-margin py-4 flex flex-col gap-4">
        {items.length === 0 ? (
          /* Empty Bag State */
          <div className="py-20 flex flex-col items-center justify-center text-center gap-4 text-on-surface-variant flex-1">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
              <ShoppingBag className="w-9 h-9 stroke-[1.5px]" />
            </div>
            <div className="flex flex-col gap-1 max-w-xs">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Your shopping bag is empty
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Explore our curated handcrafted footwear and add your favorite pairs to your bag.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-surface font-label-md text-label-md font-semibold uppercase tracking-wider shadow-md hover:bg-black active:scale-95 transition-all"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Items List */
          <>
            <section className="space-y-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 flex gap-space-md"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0 border border-outline-variant/40">
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info & Quantity Actions */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-label-lg text-label-lg text-primary-container font-semibold truncate">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                          className="text-outline hover:text-error transition-colors p-1 -mr-1 rounded-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.color} · Size {item.size}
                      </p>
                      <p className="font-price-md text-price-md text-primary pt-0.5 font-bold">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-space-xs mt-1">
                      {/* Quantity Stepper */}
                      <div className="flex items-center bg-surface-container rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-primary-container active:scale-90 transition-transform"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-label-md text-label-md px-space-sm text-primary-container select-none min-w-[20px] text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-primary-container active:scale-90 transition-transform"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-label-sm text-label-sm text-outline-variant font-medium">
                        Bespoke Fit
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Bespoke Packaging Note */}
            <div className="bg-surface-container-high rounded-xl p-space-md flex items-center gap-space-md border border-outline-variant/30">
              <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary">
                <ShieldCheck className="w-5 h-5 text-primary-container" />
              </div>
              <div className="min-w-0">
                <p className="font-label-md text-label-md text-primary-container font-semibold">
                  Hand-lasted in Lagos
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  Every pair arrives with complimentary cedar shoe horn &amp; velvet dusters.
                </p>
              </div>
            </div>

            {/* Promo Code Input */}
            <section className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 space-y-2">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Promotional Code
              </span>
              {promoCode ? (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest border border-emerald-600/30">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-700" />
                    <span className="font-label-md font-bold text-emerald-800 uppercase">
                      {promoCode} Applied
                    </span>
                  </div>
                  <button
                    onClick={removePromo}
                    className="text-outline hover:text-error text-xs font-semibold uppercase"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Enter LAGOS10 or OLA20"
                    className="flex-1 px-3 py-2 rounded-lg bg-surface text-on-surface border border-outline-variant uppercase placeholder:normal-case font-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-container text-surface rounded-lg font-label-md text-label-md font-semibold hover:bg-black transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && (
                <p className="text-error font-body-sm text-xs">{promoError}</p>
              )}
            </section>

            {/* Price Summary Stack */}
            <section className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 space-y-2.5">
              <div className="flex items-center justify-between text-body-md text-on-surface-variant">
                <span>Subtotal</span>
                <span className="text-on-surface font-medium">{formatPrice(subtotal)}</span>
              </div>

              {discount > 0 && (
                <div className="flex items-center justify-between text-body-md text-emerald-800 font-medium">
                  <span>Artisanal Discount</span>
                  <span className="font-bold">-{formatPrice(discount)}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-body-md text-on-surface-variant">
                <span>Estimated Delivery</span>
                <span className="text-on-surface font-medium">
                  {shippingFee === 0 ? "Complimentary" : formatPrice(shippingFee)}
                </span>
              </div>

              <div className="border-t border-surface-container pt-2.5 flex items-center justify-between font-label-lg text-label-lg">
                <span className="font-bold text-on-surface">Total</span>
                <span className="font-price-lg text-price-lg font-bold text-primary-container text-xl">
                  {formatPrice(total)}
                </span>
              </div>
            </section>

            {/* Checkout CTA */}
            <div className="space-y-3 pt-2">
              <Link
                href="/checkout"
                className="w-full h-14 py-3.5 px-space-xl bg-primary-container hover:bg-black active:scale-[0.99] transition-all rounded-xl text-on-primary flex items-center justify-between shadow-md"
              >
                <span className="font-label-lg text-label-lg font-semibold tracking-wide uppercase text-sm">
                  Continue to Checkout
                </span>
                <div className="flex items-center gap-1.5 font-label-md text-label-md font-semibold">
                  <span>{formatPrice(total)}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <div className="text-center">
                <Link
                  href="/shop"
                  className="font-label-md text-label-md text-secondary hover:text-primary active:opacity-70 transition-colors inline-flex items-center gap-1.5 font-semibold"
                >
                  <span>Keep shopping</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
