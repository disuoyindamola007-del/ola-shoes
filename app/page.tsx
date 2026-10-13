import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const newArrivals = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header */}
      <Header />

      <main className="flex-1 flex flex-col w-full pb-8">
        {/* Editorial Hero Banner */}
        <div className="px-margin pt-4">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-surface-container flex flex-col justify-end min-h-[380px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWXD3WhGTZif-67_NwB6M0nWbGJK_yDnk_dFOSmdJuVP3xx_1sWhX2wnsDz2faYwPcpnBsQlC9n11Fm2JuYFVMcmB-Ul3dD4uIFIJ6phyPxGO22IRORyt-tg1FN7RN36y7wnOrGPnXPOxltH3U42Eo38eC1dwgROWSvVtE4BwdisFlPIhYKeg2XLRVcafsribGmFaukk3nBokZ2kK5Hh7GBNa3EjL-HFpB4WQyyhG6gGex371jZ5Iy')",
              }}
            />
            {/* Warm editorial scrim gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/95 via-primary-container/50 to-transparent" />

            {/* Hero Overlay Content */}
            <div className="relative z-10 p-6 flex flex-col items-start gap-3">
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim bg-primary-container/60 px-2 py-0.5 rounded backdrop-blur-sm">
                New Collection &apos;25
              </span>
              <div className="flex flex-col">
                <h1 className="font-headline-lg text-headline-lg text-surface tracking-tight leading-tight">
                  Step into
                  <br />
                  your own.
                </h1>
                <p className="font-body-sm text-body-sm text-surface-container-high mt-1 max-w-[240px]">
                  Premium artisanal footwear handcrafted for every elevated journey.
                </p>
              </div>
              <Link
                href="/shop"
                className="mt-2 inline-flex items-center gap-2 bg-surface text-primary-container px-5 py-3 rounded-lg shadow-sm hover:bg-surface-container active:scale-95 transition-all"
              >
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  Shop New Arrivals
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Curated Categories */}
        <section className="px-margin pt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Curated Categories</h2>
            <Link
              href="/shop"
              className="font-label-sm text-label-sm text-secondary uppercase tracking-wider hover:text-primary transition-colors"
            >
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            {/* Men */}
            <Link
              href="/category/men"
              className="group relative bg-surface-container rounded-xl p-3 flex flex-col items-center justify-between shadow-sm hover:shadow transition-shadow overflow-hidden border border-outline-variant/30"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-lowest flex items-center justify-center p-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcav_t-hIWmPTHhq-gahJNbDJTYrtWJ29mV_o03FCvDo-MyEaGXFamvyYftnrkjIkRXgJu926pIQ_EB3Uyc5FFsXZl7tFe4Ap_A7GnlwG6oYbZia2I7wDpN-fLaVquafDo4jNMdER8wZGNyVQa7VoPYbMDkkGZgikY6HkgOUXpbqynZv70VNEP-pMmVFiuSZex9gbqCQoeoGwCBSfShG1qT2UkDhltIbG7ECEfpJcs-TleGYigyM7s"
                  alt="Men's Collection"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full pt-2 flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface tracking-wide uppercase font-semibold">
                  Men
                </span>
                <ChevronRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Women */}
            <Link
              href="/category/women"
              className="group relative bg-surface-container rounded-xl p-3 flex flex-col items-center justify-between shadow-sm hover:shadow transition-shadow overflow-hidden border border-outline-variant/30"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-lowest flex items-center justify-center p-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxQ0DE0i619bvY0jsucWtPDhxk_5Zx86kYdBUV9E7MpZHdybzSGsRl5FIKZQP24K-1qDi6iIo4YeRGPZdF4NnRPFgbsCUr61tEEYvi7aZwOzwH15QAmPtqui0X4e8Yh3227tEajh7ZaS2iyImtAwAJHItxykToFR1hdR0NKgUaeqX-I9rKMeeAcfJ9tiAbIZyoarWi8osXelSg5ryObt2n4CCT65yQkDdJ9pu_jeMp2fScfOdx6fxt"
                  alt="Women's Collection"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full pt-2 flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface tracking-wide uppercase font-semibold">
                  Women
                </span>
                <ChevronRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Sneakers */}
            <Link
              href="/category/sneakers"
              className="group relative bg-surface-container rounded-xl p-3 flex flex-col items-center justify-between shadow-sm hover:shadow transition-shadow overflow-hidden border border-outline-variant/30"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-lowest flex items-center justify-center p-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaXjj5SrGcVSj5-XTcAu-Z6Yw9HDn8PSgQx4hfe9pq-vYV2a7JtDhY_b5c4-GKRyGAcmNLE15ATUjl3KzL8LJRXmzozWHe6WZINGde12m2HkwxS_00U0BIapSop6WPI0d_hzE799OjJ3R4gMJLrmf9FrxvMmHiGM5DlUY2x98UJDnVHOE_1MEHUCeszW7wkp5BXwlOTnoJXtqNJA28xdRRFD8YuR4STZ0_aI0tgZvidkU6-X1_vLpm"
                  alt="Sneakers"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full pt-2 flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface tracking-wide uppercase font-semibold">
                  Sneakers
                </span>
                <ChevronRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Formal */}
            <Link
              href="/category/formal"
              className="group relative bg-surface-container rounded-xl p-3 flex flex-col items-center justify-between shadow-sm hover:shadow transition-shadow overflow-hidden border border-outline-variant/30"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-lowest flex items-center justify-center p-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_5Bmbm9gymzmWOSi8Um_7F6tLGjJQNqasdEni98WwhyPEqtTabxh_IW2ftXM4Xvb600TF1CX4XESV9uD_KLpD8rljs9UT7MFu-2BX2FrIeL8C_5fk4ILi3cLjSNlTWgJ-iVa8fynvEBBkNhHsRBjLUGzTN-vLpdrvhLRa9ysswnMWmk9QmmIsjVAxvEbLCP-GNJ0099RmpiWBlKLBd85FuHdz5JzGmroNRlE-5tavMdu56yGA8PN5"
                  alt="Formal Footwear"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full pt-2 flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface tracking-wide uppercase font-semibold">
                  Formal
                </span>
                <ChevronRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* Artisanal Nigerian Craft Highlight */}
        <div className="px-margin pt-6">
          <div className="bg-secondary-container text-on-secondary-fixed rounded-xl p-4 flex items-center gap-3 shadow-sm border border-outline-variant/30">
            <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shrink-0 shadow-sm text-primary-container">
              <ShieldCheck className="w-5 h-5 text-primary-container" />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="font-label-md text-label-md text-primary-container font-semibold">
                Artisanal Nigerian Craft
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Full-grain leather hand-lasted by master cordwainers in Lagos.
              </p>
            </div>
          </div>
        </div>

        {/* Just Landed Grid */}
        <section className="px-margin pt-6">
          <div className="flex items-center justify-between mb-3.5">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Just Landed</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Fresh silhouettes from our master workshop
              </p>
            </div>
            <Link
              href="/shop"
              className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-gutter">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Brand Story Banner */}
        <section className="px-margin my-space-lg">
          <div className="relative overflow-hidden rounded-xl bg-primary-container text-on-primary p-space-lg shadow-sm">
            <div className="flex flex-col gap-2 relative z-10">
              <span className="font-label-sm text-label-sm text-secondary-fixed tracking-widest uppercase">
                Lagos Atelier
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-container-lowest">
                Bespoke Comfort, Designed for Lagos Streets &amp; Boardrooms
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Each pair is handcrafted using sustainably sourced full-grain leather, tailored for the discerning modern journey.
              </p>
            </div>
            <div className="mt-space-md flex items-center gap-3">
              <Link
                href="/shop"
                className="h-9 px-4 rounded-lg bg-surface text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-transform font-semibold"
              >
                <span>Explore all pairs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
}
