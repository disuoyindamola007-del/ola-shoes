"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Check,
  Package,
  Truck,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { formatPrice } from "@/data/products";

interface OrderTrackingViewProps {
  orderReference: string;
}

export function OrderTrackingView({ orderReference }: OrderTrackingViewProps) {
  const [order] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`order_${orderReference}`);
        if (stored) return JSON.parse(stored);
      } catch {
        // ignore
      }
    }
    // Default fallback mock matching Stitch Screen 13
    return {
      orderReference: orderReference.startsWith("OLA-") ? orderReference : `OLA-${orderReference}`,
      status: "Processing",
      date: "Apr 26, 2025 • 10:24 AM",
      step: 2,
      estimatedDelivery: "In 3–5 business days",
      deliveryMethod: "Standard Express",
      customer: {
        fullName: "John Doe",
        street: "123 Adeola Odeku Street, Victoria Island",
        state: "Lagos, Nigeria",
        phone: "+234 801 234 5678",
      },
      items: [
        {
          product: {
            name: "Urban Classic Sneakers",
            price: 58000,
            images: [
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoHNIQkcWqrLUfK9GnCfZpFES2jkBqhmhSRhqdQnt8ERPiAZVf0iWjkpU7aYDviBJzgedMXIRmj1vGwL7ps0mB7XAGBw4XK_G_IlKEaUsf7KmBnRO7lMMZ7L0pQ6w9vtLepBMWJVTq3Q3P-Ixme2UjcMUkpSfAe59TrzC5H65bp_HhSiRBTDIsMzoWYL4qd6oyLdO276G0YflPDE2TyWsgQZbxhjxLNX11LhtDS7xJxjgTmJl9bXcA",
              },
            ],
          },
          size: "42",
          color: "White / Gum",
          quantity: 1,
        },
        {
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
      subtotal: 126000,
      shippingFee: 0,
      total: 126000,
      paymentMethod: "Paystack • Debit Card",
    };
  });

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-28">
      <Header showBack title="Order Tracking" />

      <main className="flex-1 flex flex-col w-full px-margin pt-space-md space-y-space-lg">
        {/* Top Order Meta Card */}
        <section className="p-space-lg rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30">
          <div className="flex items-start justify-between gap-space-sm mb-space-xs">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold">
                Order Identifier
              </p>
              <h2 className="font-headline-md text-headline-md text-primary-container font-mono tracking-tight mt-0.5">
                {order.orderReference}
              </h2>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-label-md font-label-md font-bold">
              {order.status}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 pt-1">
            <Clock className="w-4 h-4 text-outline" />
            <span>Placed on {order.date}</span>
          </p>
        </section>

        {/* 4-Stage Stepper Tracker */}
        <section className="p-space-lg rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30">
          <div className="flex items-center justify-between mb-space-lg">
            <h3 className="font-headline-sm text-headline-sm text-primary-container">
              Dispatch Timeline
            </h3>
            <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
              Step 2 of 4
            </span>
          </div>

          <div className="relative w-full">
            {/* Progress Bar Track */}
            <div className="absolute top-[15px] left-6 right-6 h-[2px] bg-surface-container-highest">
              <div className="h-full bg-primary-container w-[40%] transition-all duration-500" />
            </div>

            {/* Steps Grid */}
            <div className="relative grid grid-cols-4 gap-1 text-center">
              {/* Step 1: Confirmed */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="mt-space-xs font-label-md text-label-md text-primary-container font-medium">
                  Confirmed
                </span>
                <span className="font-body-sm text-[10px] text-on-surface-variant">Done</span>
              </div>

              {/* Step 2: Processing */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm ring-4 ring-secondary-container/60">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <span className="mt-space-xs font-label-md text-label-md text-primary-container font-bold">
                  Processing
                </span>
                <span className="font-body-sm text-[10px] text-primary-container font-semibold">
                  Atelier
                </span>
              </div>

              {/* Step 3: Shipped */}
              <div className="flex flex-col items-center opacity-70">
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center">
                  <Truck className="w-4 h-4 text-outline" />
                </div>
                <span className="mt-space-xs font-label-md text-label-md text-on-surface-variant">
                  Shipped
                </span>
                <span className="font-body-sm text-[10px] text-outline">Pending</span>
              </div>

              {/* Step 4: Delivered */}
              <div className="flex flex-col items-center opacity-70">
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-outline" />
                </div>
                <span className="mt-space-xs font-label-md text-label-md text-on-surface-variant">
                  Delivered
                </span>
                <span className="font-body-sm text-[10px] text-outline">Pending</span>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Destination */}
        <section className="p-space-lg rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30">
          <div className="flex items-center justify-between mb-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-primary-container">
              Delivery Address
            </h3>
            <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
              <MapPin className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1 text-on-surface">
            <p className="font-label-lg text-label-lg text-primary-container font-bold">
              {order.customer.fullName}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {order.customer.street}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {order.customer.state}
            </p>
            <p className="font-body-sm text-body-sm text-primary pt-1 flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5" />
              <span>{order.customer.phone}</span>
            </p>
          </div>
        </section>

        {/* Items In Order */}
        <section className="p-space-lg rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30 space-y-space-md">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-primary-container">
              Purchased Items
            </h3>
            <span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-semibold">
              {order.items.length} {order.items.length === 1 ? "item" : "items"}
            </span>
          </div>

          <div className="space-y-2">
            {order.items.map((item: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center gap-space-md p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant/30"
              >
                <div className="w-18 h-18 rounded-lg overflow-hidden bg-surface-container shrink-0">
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-label-lg text-label-lg text-primary-container font-semibold truncate">
                    {item.product.name}
                  </h4>
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

        {/* Support & Actions */}
        <div className="flex flex-col gap-3 pt-2">
          <a
            href="https://wa.me/2348012345678?text=Hello%20Ola%20Shoes,%20I%20am%20inquiring%20about%20my%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-black transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Concierge Assistance</span>
          </a>

          <Link
            href="/shop"
            className="w-full h-12 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <span>Return to Store</span>
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
