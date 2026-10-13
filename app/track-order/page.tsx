"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Truck, Hash, ArrowRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function TrackOrderLookupPage() {
  const router = useRouter();
  const [orderRef, setOrderRef] = useState("");
  const [recentRef, setRecentRef] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const last = localStorage.getItem("last_order_ref");
      if (last) {
        setRecentRef(last);
      }
    }
  }, []);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderRef.trim()) return;
    const cleanRef = orderRef.trim().toUpperCase();
    router.push(`/account/orders/${cleanRef}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-28">
      <Header showBack title="Track Order" />

      <main className="flex-1 flex flex-col w-full px-margin py-space-xl">
        <div className="flex flex-col items-center text-center max-w-sm mx-auto w-full pt-space-md">
          <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-primary-container mb-space-lg shadow-sm border border-outline-variant/30">
            <Truck className="w-9 h-9" />
          </div>

          <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight mb-2">
            Track Your Order
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-xl">
            Enter your order reference code (e.g. OLA-89412) to inspect real-time cordwainer crafting &amp; courier dispatch status.
          </p>

          <form onSubmit={handleTrack} className="w-full flex flex-col gap-space-md">
            <div className="relative flex items-center">
              <input
                type="text"
                value={orderRef}
                onChange={(e) => setOrderRef(e.target.value)}
                placeholder="Enter reference code..."
                className="w-full h-13 px-4 font-mono uppercase bg-surface-container-low rounded-xl border border-outline-variant/40 focus:bg-surface-container focus:outline-none text-on-surface font-label-lg"
                required
              />
              <Hash className="w-5 h-5 absolute right-4 text-outline pointer-events-none" />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-black transition-all"
            >
              <span>Track Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {recentRef && (
            <div className="mt-6 pt-4 border-t border-surface-container w-full">
              <span className="font-label-sm text-label-sm uppercase text-outline tracking-wider block mb-2 font-semibold">
                Recent Order Found
              </span>
              <button
                onClick={() => router.push(`/account/orders/${recentRef}`)}
                className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary-container font-mono font-bold text-label-md flex items-center justify-center gap-2 mx-auto"
              >
                <span>{recentRef}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
