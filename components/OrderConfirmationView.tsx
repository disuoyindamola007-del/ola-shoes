"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Truck, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { formatPrice } from "@/data/products";

interface OrderItemRecord {
  id: string;
  product: {
    name: string;
    price: number;
    images: { url: string }[];
  };
  size: string;
  color: string;
  quantity: number;
}

interface OrderRecord {
  orderReference: string;
  items: OrderItemRecord[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  customer: {
    fullName: string;
    street: string;
    state: string;
    phone: string;
  };
  deliveryMethod: string;
  estimatedDelivery: string;
}

interface OrderConfirmationViewProps {
  orderReference: string;
}

export function OrderConfirmationView({ orderReference }: OrderConfirmationViewProps) {
  const [order] = useState<OrderRecord>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`order_${orderReference}`);
        if (stored) return JSON.parse(stored);
      } catch {
        // ignore
      }
    }
    return {
      orderReference,
      items: [
        {
          id: "item-1",
          product: {
            name: "The Everyday Leather Loafer",
            price: 68000,
            images: [
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUwL1-cCl5w_hE--AFYrnvBrcg3V4xUmh1lhC6P-8X_zFVtIyBMcV0_gcdCrPumDnC6t7Gn2qZoIJzUamTrsolLLmdAQHqcV71fyphZBTIih2tqMENh-dUkoR8M2CIiD-9pI2TAWee3QyXIgjMHvXRFpYgfSNoC32QJDXUwkMtfysU67114rXr4lDcxb6nMPuZ9QpPcz2r5ysFdZswdUn5Z03ubE2pevbSjSiiM6RyEhr8_je_Bafs",
              },
            ],
          },
          size: "42",
          color: "Dark Brown",
          quantity: 1,
        },
      ],
      subtotal: 68000,
      shippingFee: 2500,
      discount: 0,
      total: 70500,
      customer: {
        fullName: "John Doe",
        street: "123 Adeola Odeku Street, Victoria Island",
        state: "Lagos, Nigeria",
        phone: "+234 801 234 5678",
      },
      deliveryMethod: "Standard Express",
      estimatedDelivery: "In 3–5 business days",
    };
  });

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-16">
      <main className="flex-1 px-margin pt-8 flex flex-col gap-5">
        {/* Success Icon & Header */}
        <div className="flex flex-col items-center text-center gap-2 pt-4">
          <div className="w-16 h-16 rounded-full bg-primary-container text-surface flex items-center justify-center shadow-lg animate-in zoom-in-75 duration-300">
            <Check className="w-8 h-8 text-tertiary-fixed-dim stroke-[2.5px]" />
          </div>
          <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim bg-primary-container/80 px-3 py-0.5 rounded-full mt-2 font-semibold">
            Order Confirmed &amp; Paid
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">
            Thank you for your order
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            We&apos;ve received your order{" "}
            <strong className="text-primary-container font-mono">{orderReference}</strong> and our cordwainers are preparing your pair.
          </p>
        </div>

        {/* Estimated Delivery Teaser */}
        <div className="p-space-md bg-surface-container-low rounded-xl flex items-center gap-space-md border border-outline-variant/30">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-on-secondary-fixed" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-label-md text-label-md text-on-surface font-semibold">
              Estimated Delivery
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              {order.estimatedDelivery} · {order.deliveryMethod}
            </p>
          </div>
        </div>

        {/* Delivery Address Card */}
        <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
          <div className="flex items-center justify-between pb-1">
            <span className="font-label-sm uppercase tracking-wider text-outline font-semibold">
              Dispatched To
            </span>
            <MapPin className="w-4 h-4 text-primary-container" />
          </div>
          <p className="font-label-lg text-label-lg text-primary-container font-bold">
            {order.customer.fullName}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {order.customer.street}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {order.customer.state}
          </p>
          <p className="font-body-sm text-body-sm text-primary-container font-medium pt-1">
            {order.customer.phone}
          </p>
        </div>

        {/* Purchased Items List */}
        <section className="space-y-3">
          <h2 className="font-headline-sm text-headline-sm text-primary-container">
            Purchased Footwear ({order.items.length})
          </h2>

          <div className="space-y-2">
            {order.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 flex items-center gap-space-md"
              >
                <div className="w-18 h-18 rounded-lg overflow-hidden bg-surface-container shrink-0">
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                    {item.product.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    {item.color} · Size {item.size} · Qty {item.quantity}
                  </p>
                  <p className="font-price-md text-price-md text-primary-container font-bold mt-1">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Price Breakdown Card */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
          <div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
            <span>Subtotal</span>
            <span className="text-on-surface font-medium">{formatPrice(order.subtotal)}</span>
          </div>

          {order.discount > 0 && (
            <div className="flex items-center justify-between text-emerald-800 font-body-md text-body-md">
              <span>Artisanal Discount</span>
              <span className="font-bold">-{formatPrice(order.discount)}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
            <span>Delivery Fee</span>
            <span className="text-on-surface font-medium">
              {order.shippingFee === 0 ? "Complimentary" : formatPrice(order.shippingFee)}
            </span>
          </div>

          <div className="w-full h-[1px] bg-surface-container my-1" />

          <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface pt-1">
            <span className="font-bold">Total Paid</span>
            <span className="font-price-lg text-price-lg font-bold text-primary-container text-xl">
              {formatPrice(order.total)}
            </span>
          </div>

          <div className="mt-2 pt-space-xs flex items-center justify-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
            <ShieldCheck className="w-4 h-4 text-tertiary-fixed-dim" />
            <span>Secured via Paystack • Lagos Bespoke Atelier</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href={`/account/orders/${orderReference}`}
            className="w-full h-13 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-black active:scale-[0.99] transition-all"
          >
            <Truck className="w-5 h-5" />
            <span>Track Order Timeline</span>
          </Link>
          <Link
            href="/shop"
            className="w-full h-12 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <span>Continue shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/help"
            className="w-full h-11 text-secondary hover:text-primary-container font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <span>Need help with your order?</span>
          </Link>
        </div>

        {/* Brand Legacy Signature Footer */}
        <div className="mt-8 pb-4 flex flex-col items-center justify-center text-center opacity-80">
          <p className="font-headline-sm text-headline-sm italic text-on-surface-variant">
            Bespoke Comfort, Handcrafted in Nigeria
          </p>
          <p className="font-label-sm text-label-sm tracking-wider uppercase text-outline mt-1 font-semibold">
            Ola Shoes © 2026
          </p>
        </div>
      </main>
    </div>
  );
}
