import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_TITLES: Record<string, { title: string; subtitle: string }> = {
  men: {
    title: "Men's Collection",
    subtitle: "Artisanal loafers, sneakers, and wholecut dress shoes for modern gentlemen.",
  },
  women: {
    title: "Women's Collection",
    subtitle: "Architectural kitten heels, refined mules, and elevated leather essentials.",
  },
  sneakers: {
    title: "Luxury Sneakers",
    subtitle: "Handmade low-tops and runners crafted with buttery Italian calfskin.",
  },
  formal: {
    title: "Formal & Loafers",
    subtitle: "Goodyear-welted oxfords and hand-burnished penny loafers for timeless distinction.",
  },
  sandals: {
    title: "Sandals & Slides",
    subtitle: "Sculpted full-grain leather slides engineered for relaxed tropical living.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "men" },
    { slug: "women" },
    { slug: "sneakers" },
    { slug: "formal" },
    { slug: "sandals" },
  ];
}

async function CategoryContent({ params }: CategoryPageProps) {
  const { slug } = await params;
  const meta = CATEGORY_TITLES[slug.toLowerCase()];

  if (!meta) {
    notFound();
  }

  const products = getProductsByCategory(slug.toLowerCase());

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      <AnnouncementBar />
      <Header showBack title={meta.title} />

      <main className="flex-1 flex flex-col w-full">
        {/* Category Editorial Header */}
        <section className="px-margin py-4 border-b border-surface-container bg-surface-container-low/50">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Curated Atelier
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary-container">
              {meta.title}
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              {meta.subtitle}
            </p>
          </div>
        </section>

        {/* 2-Column Product Grid */}
        <section className="px-margin py-4 flex-1">
          <div className="flex items-center justify-between pb-3 text-body-sm text-on-surface-variant">
            <span>{products.length} models crafted</span>
            <Link
              href="/shop"
              className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold"
            >
              Browse All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-gutter">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center font-serif text-espresso">
          Loading category collection...
        </div>
      }
    >
      <CategoryContent params={params} />
    </Suspense>
  );
}
