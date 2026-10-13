"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  ChevronRight,
  MapPin,
  Ruler,
  Headphones,
  LogOut,
} from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

interface UserProfile {
  name: string;
  email: string;
  memberSince: string;
  tier: string;
}

interface StoredOrder {
  orderReference: string;
  items: {
    product: { name: string; price: number; images: { url: string }[] };
    quantity: number;
    color: string;
    size: string;
  }[];
  total: number;
  date: string;
  status: string;
  deliveryMethod: string;
}

export default function AccountPage() {
  const router = useRouter();
  const { wishlist } = useCart();
  const [user, setUser] = useState<UserProfile>({
    name: "John Doe",
    email: "johndoe@example.com",
    memberSince: "2025",
    tier: "Artisanal Guild Patron",
  });
  const [recentOrders, setRecentOrders] = useState<StoredOrder[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("current_user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }

        // Collect all orders stored in localStorage
        const orders: StoredOrder[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith("order_")) {
            const data = localStorage.getItem(key);
            if (data) {
              orders.push(JSON.parse(data));
            }
          }
        }

        // If no orders yet, populate a realistic demo order
        if (orders.length === 0) {
          orders.push({
            orderReference: "OLA-89412",
            items: [
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
                quantity: 1,
                color: "Dark Brown",
                size: "42",
              },
            ],
            total: 70500,
            date: "Apr 26, 2025",
            status: "Processing",
            deliveryMethod: "Standard Express",
          });
        }

        setRecentOrders(orders);
      } catch {
        // Ignore parsing errors
      }
    }
  }, []);

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("current_user");
    }
    router.push("/sign-in");
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-28">
      <Header title="My Account" />

      <main className="flex-1 flex flex-col w-full px-margin pt-space-md space-y-space-lg">
        {/* Patron Guild Header Card */}
        <section className="relative rounded-2xl bg-primary-container p-space-lg text-surface overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 rounded-full bg-surface/15 backdrop-blur-md border border-surface/20 flex items-center justify-center text-surface font-headline-md text-headline-md font-bold shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed-dim bg-surface/10 px-2 py-0.5 rounded-full">
                  {user.tier}
                </span>
              </div>
              <h1 className="font-headline-md text-headline-md text-surface truncate mt-1">
                {user.name}
              </h1>
              <p className="font-body-sm text-body-sm text-inverse-on-surface/80 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-surface-container-low p-space-md rounded-xl text-center border border-outline-variant/30">
            <span className="font-headline-sm text-headline-sm text-primary-container font-bold block">
              {recentOrders.length}
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
              Orders
            </span>
          </div>

          <Link
            href="/saved"
            className="bg-surface-container-low p-space-md rounded-xl text-center border border-outline-variant/30 hover:bg-surface-container transition-colors"
          >
            <span className="font-headline-sm text-headline-sm text-primary-container font-bold block">
              {wishlist.length}
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
              Saved Pairs
            </span>
          </Link>

          <div className="bg-surface-container-low p-space-md rounded-xl text-center border border-outline-variant/30">
            <span className="font-headline-sm text-headline-sm text-primary-container font-bold block">
              EU 42
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
              Fit Profile
            </span>
          </div>
        </div>

        {/* Recent Orders Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-primary-container">
              Recent Orders
            </h2>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
              Bespoke Tracking
            </span>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low rounded-xl p-space-md border border-outline-variant/30 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm font-mono text-outline">
                      {order.orderReference}
                    </span>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">
                      Placed on {order.date}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    {order.status}
                  </span>
                </div>

                {/* Items preview */}
                <div className="flex items-center gap-3">
                  {order.items.slice(0, 2).map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="w-14 h-14 rounded-lg bg-surface-container overflow-hidden shrink-0 border border-outline-variant/40"
                    >
                      <img
                        src={item.product.images[0]?.url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex-1 min-w-0">
                    <p className="font-body-sm text-body-sm text-on-surface font-medium truncate">
                      {order.items[0]?.product.name}
                    </p>
                    <p className="font-price-md text-price-md text-primary-container font-bold">
                      {formatPrice(order.total)}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-surface-container flex items-center justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-tertiary-fixed-dim" />
                    <span>Paystack Verified</span>
                  </span>
                  <Link
                    href={`/account/orders/${order.orderReference}`}
                    className="font-label-md text-label-md text-primary-container font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Track Order</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Account Details & Settings */}
        <section className="bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden divide-y divide-surface-container">
          <div className="p-4 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-outline" />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Saved Delivery Address
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  123 Adeola Odeku St, Victoria Island, Lagos
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <Ruler className="w-5 h-5 text-outline" />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Bespoke Sizing Profile
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  EU 42 (Foot length: 26.5 cm)
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </div>

          <Link
            href="/help"
            className="p-4 flex items-center justify-between hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-3">
              <Headphones className="w-5 h-5 text-outline" />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Atelier Concierge &amp; FAQ
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct WhatsApp &amp; Lagos atelier assistance
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Sign Out Action */}
        <div className="pt-2">
          <button
            onClick={handleSignOut}
            className="w-full h-12 rounded-xl bg-surface-container text-error font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
