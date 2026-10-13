import React, { Suspense } from "react";
import { OrderTrackingView } from "@/components/OrderTrackingView";

export function generateStaticParams() {
  return [{ orderReference: "demo" }, { orderReference: "OLA-89412" }];
}

interface OrderTrackingPageProps {
  params: Promise<{ orderReference: string }>;
}

async function OrderTrackingContent({ params }: OrderTrackingPageProps) {
  const { orderReference } = await params;
  return <OrderTrackingView orderReference={orderReference} />;
}

export default function OrderTrackingPage({ params }: OrderTrackingPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center font-serif text-espresso">
          Loading tracking details...
        </div>
      }
    >
      <OrderTrackingContent params={params} />
    </Suspense>
  );
}
