"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  Truck,
  ShoppingBag,
  ChevronDown,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { formatPrice, PRODUCTS } from "@/data/products";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    subtotal,
    shippingFee,
    discount,
    total,
    shippingMethod,
    setShippingMethod,
    clearCart,
  } = useCart();

  // Test mode fallback: if no items in bag, automatically use first catalog shoe for test checkout
  const isTestFallback = items.length === 0;
  const checkoutItems = items.length > 0 ? items : [
    {
      id: "test-item-everyday-loafer",
      product: PRODUCTS[0],
      size: "42",
      color: PRODUCTS[0].colors[0]?.name || "Onyx Black",
      quantity: 1,
    },
  ];

  const effectiveSubtotal = items.length > 0 ? subtotal : PRODUCTS[0].price;
  const effectiveShippingFee = items.length > 0 ? shippingFee : (shippingMethod === "express" ? 4500 : 0);
  const effectiveDiscount = items.length > 0 ? discount : 0;
  const effectiveTotal = effectiveSubtotal + effectiveShippingFee - effectiveDiscount;

  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+234 801 234 5678");
  const [fullName, setFullName] = useState("John Doe");
  const [street, setStreet] = useState("123 Adeola Odeku Street, Victoria Island");
  const [state, setState] = useState("Lagos, Nigeria");
  const [city, setCity] = useState("Lagos Island");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate verified order reference
    const orderRef = `OLA-${Math.floor(10000 + Math.random() * 90000)}`;

    // Store order details in localStorage for order confirmation & tracking
    const orderRecord = {
      orderReference: orderRef,
      items: [...checkoutItems],
      subtotal: effectiveSubtotal,
      shippingFee: effectiveShippingFee,
      discount: effectiveDiscount,
      total: effectiveTotal,
      customer: {
        fullName,
        email,
        phone,
        street,
        state,
        city,
        deliveryNotes,
      },
      deliveryMethod: shippingMethod === "express" ? "Express Priority" : "Standard Express",
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-GB",
        { weekday: "long", day: "numeric", month: "long" }
      ),
      status: "Confirmed",
      paymentStatus: "Paid",
      paymentMethod: "Paystack • Debit Card",
    };

    try {
      localStorage.setItem(`order_${orderRef}`, JSON.stringify(orderRecord));
      localStorage.setItem("last_order_ref", orderRef);
      const existingOrdersRaw = localStorage.getItem("ola_orders");
      const existingOrders = existingOrdersRaw ? JSON.parse(existingOrdersRaw) : [];
      localStorage.setItem("ola_orders", JSON.stringify([orderRecord, ...existingOrders]));
    } catch {
      // Ignore storage error
    }

    // Smooth test transition
    setTimeout(() => {
      clearCart();
      router.push(`/order-confirmation/${orderRef}`);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-32">
      <Header showBack title="Secure Checkout" />

      <main className="flex-1 px-margin py-4 flex flex-col gap-5">
        {/* Checkout Stepper Header */}
        <div className="flex items-center justify-between px-2 py-2 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary-container text-surface flex items-center justify-center font-label-sm text-[11px] font-bold">
              1
            </span>
            <span className="font-label-md text-label-md text-primary-container font-semibold">
              Delivery &amp; Contact
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            Step 1 of 2
          </span>
        </div>

        <form onSubmit={handlePlaceOrder} className="space-y-5">
          {/* Contact Details */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30 space-y-3.5">
            <div className="flex items-center gap-space-xs mb-1">
              <User className="w-4 h-4 text-primary-container" />
              <h2 className="font-headline-sm text-headline-sm text-primary-container">
                Contact Information
              </h2>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Email Address
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
              />
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Your order receipt and Paystack confirmation will be sent here
              </p>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Phone Number (WhatsApp / Calls)
              </label>
              <div className="relative">
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 801 234 5678"
                  className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
                />
                <Phone className="w-4 h-4 text-on-surface-variant absolute right-3.5 top-4 pointer-events-none" />
              </div>
              <p className="font-body-sm text-body-sm text-on-secondary-container mt-1">
                Used by our courier for delivery status updates and dispatch calls
              </p>
            </div>
          </section>

          {/* Delivery Address */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30 space-y-3.5">
            <div className="flex items-center gap-space-xs mb-1">
              <Truck className="w-4 h-4 text-primary-container" />
              <h2 className="font-headline-sm text-headline-sm text-primary-container">
                Delivery Address
              </h2>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Recipient Full Name
              </label>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Recipient's full name"
                className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
              />
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Street Address
              </label>
              <input
                required
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="House number, street name, apartment"
                className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/30"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                  State / Region
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none border border-outline-variant/30 cursor-pointer"
                >
                  <option value="Lagos, Nigeria">Lagos</option>
                  <option value="Abuja (FCT), Nigeria">Abuja (FCT)</option>
                  <option value="Rivers, Nigeria">Rivers (PH)</option>
                  <option value="Oyo, Nigeria">Oyo (Ibadan)</option>
                  <option value="Enugu, Nigeria">Enugu</option>
                  <option value="Delta, Nigeria">Delta (Asaba)</option>
                  <option value="Kano, Nigeria">Kano</option>
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                  City / LGA
                </label>
                <input
                  required
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Victoria Island"
                  className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none border border-outline-variant/30"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Delivery Instructions (Optional)
              </label>
              <input
                type="text"
                value={deliveryNotes}
                onChange={(e) => setDeliveryNotes(e.target.value)}
                placeholder="e.g. Leave with security guard at gate"
                className="w-full h-12 px-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none border border-outline-variant/30"
              />
            </div>
          </section>

          {/* Delivery Method Options */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/30 space-y-3">
            <div className="flex items-center gap-space-xs mb-1">
              <Clock className="w-4 h-4 text-primary-container" />
              <h2 className="font-headline-sm text-headline-sm text-primary-container">
                Delivery Method
              </h2>
            </div>

            {/* Standard Delivery */}
            <label
              onClick={() => setShippingMethod("standard")}
              className={`relative flex items-center justify-between p-3.5 rounded-lg cursor-pointer transition-colors border ${
                shippingMethod === "standard"
                  ? "bg-surface-container-low border-primary-container"
                  : "bg-surface border-surface-container hover:bg-surface-container-low"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="delivery_method"
                  checked={shippingMethod === "standard"}
                  onChange={() => setShippingMethod("standard")}
                  className="accent-primary-container w-4 h-4 cursor-pointer"
                />
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                    Standard Delivery
                  </span>
                  <span className="font-body-sm text-body-sm text-on-secondary-container">
                    3–5 business days dispatch
                  </span>
                </div>
              </div>
              <span className="font-price-md text-price-md text-primary-container font-bold">
                {subtotal >= 100000 ? "FREE" : "₦2,500"}
              </span>
            </label>

            {/* Express Delivery */}
            <label
              onClick={() => setShippingMethod("express")}
              className={`relative flex items-center justify-between p-3.5 rounded-lg cursor-pointer transition-colors border ${
                shippingMethod === "express"
                  ? "bg-surface-container-low border-primary-container"
                  : "bg-surface border-surface-container hover:bg-surface-container-low"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="delivery_method"
                  checked={shippingMethod === "express"}
                  onChange={() => setShippingMethod("express")}
                  className="accent-primary-container w-4 h-4 cursor-pointer"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Express Priority
                    </span>
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-1.5 py-0.2 rounded font-bold">
                      Fast
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-secondary-container">
                    1–2 business days dispatch
                  </span>
                </div>
              </div>
              <span className="font-price-md text-price-md text-primary-container font-bold">
                {effectiveSubtotal >= 100000 ? "₦2,000" : "₦4,500"}
              </span>
            </label>
          </section>

          {/* Test Notice if direct test checkout */}
          {isTestFallback && (
            <div className="bg-secondary-container text-on-secondary-fixed rounded-xl p-3 flex items-center gap-2.5 text-[12px] border border-outline-variant/30">
              <Sparkles className="w-4 h-4 text-primary-container shrink-0" />
              <span>
                <strong>Test Preview Mode:</strong> Loaded a sample handcrafted loafer so you can test checkout and order tracking immediately.
              </span>
            </div>
          )}

          {/* Order Summary Preview Accordion */}
          <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
            <button
              type="button"
              onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
              className="w-full flex items-center justify-between p-space-lg text-left bg-surface-container-low hover:bg-surface-container transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary-container" />
                <span className="font-label-lg text-label-lg text-primary-container font-semibold">
                  Order Summary ({checkoutItems.length} {checkoutItems.length === 1 ? "pair" : "pairs"})
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-price-md text-price-md text-primary-container font-bold">
                  {formatPrice(effectiveTotal)}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-container transition-transform duration-200 ${
                    isSummaryExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {isSummaryExpanded && (
              <div className="p-space-lg space-y-4">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3.5 pb-2 border-b border-surface-container/60">
                    <div className="w-14 h-14 rounded-lg bg-surface-container overflow-hidden shrink-0">
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-label-md text-label-md text-primary-container truncate font-semibold">
                        {item.product.name}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-secondary-container">
                        {typeof item.color === "object" ? (item.color as any)?.name : item.color} · Size {item.size} · Qty: {item.quantity}
                      </p>
                      <p className="font-price-md text-price-md text-primary-container mt-0.5">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-space-sm space-y-2 bg-surface-container-low p-space-md rounded-lg">
                  <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>{formatPrice(effectiveSubtotal)}</span>
                  </div>
                  {effectiveDiscount > 0 && (
                    <div className="flex justify-between font-body-sm text-body-sm text-emerald-800">
                      <span>Discount</span>
                      <span>-{formatPrice(effectiveDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>Shipping</span>
                    <span>{effectiveShippingFee === 0 ? "Complimentary" : formatPrice(effectiveShippingFee)}</span>
                  </div>
                  <div className="flex justify-between font-label-lg text-label-lg text-primary-container font-bold pt-1.5 border-t border-surface-container">
                    <span>Total to Pay</span>
                    <span>{formatPrice(effectiveTotal)}</span>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 py-1 text-on-surface-variant">
            <ShieldCheck className="w-4 h-4 text-primary-container" />
            <span className="font-label-sm text-label-sm tracking-wide">
              Secure 256-bit encrypted checkout via Paystack
            </span>
          </div>

          {/* Primary CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-xl bg-primary-container text-on-primary flex items-center justify-center gap-2 font-label-lg text-label-lg tracking-wider uppercase shadow-md active:scale-[0.99] transition-all hover:bg-black font-semibold disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin" />
                  <span>Processing Payment...</span>
                </>
              ) : (
                <>
                  <span>Pay {formatPrice(effectiveTotal)} with Paystack</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
