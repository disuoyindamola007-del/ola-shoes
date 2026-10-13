import React, { Suspense } from "react";
import { OrderConfirmationView } from "@/components/OrderConfirmationView";

export function generateStaticParams() {
  return [{ orderReference: "demo" }];
}

interface OrderConfirmationPageProps {
  params: Promise<{ orderReference: string }>;
}

async function OrderConfirmationContent({ params }: OrderConfirmationPageProps) {
  const { orderReference } = await params;
  return <OrderConfirmationView orderReference={orderReference} />;
}

export default function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center font-serif text-espresso">
          Loading your order confirmation...
        </div>
      }
    >
      <OrderConfirmationContent params={params} />
    </Suspense>
  );
}
