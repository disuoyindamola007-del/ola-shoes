"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Truck,
  RefreshCw,
  ShieldCheck,
  FileText,
  X,
} from "lucide-react";

export default function HelpPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const faqs = [
    {
      q: "How do your sizes run?",
      a: "Our handcrafted shoes follow standard EU sizing. If you have a wider foot bridge, we recommend sizing one notch up. We also provide complimentary size exchanges across Nigeria.",
    },
    {
      q: "Where is Ola Shoes crafted?",
      a: "Every single pair is hand-lasted by master shoemakers in our dedicated workshop in Lagos, Nigeria, utilizing ethically sourced full-grain leather.",
    },
    {
      q: "What is your delivery coverage and timeframe?",
      a: "We deliver nationwide across all 36 Nigerian states and Abuja FCT. Standard delivery in Lagos takes 1–3 business days; outside Lagos takes 3–5 business days. Express priority dispatch is also available.",
    },
    {
      q: "How does the 14-day exchange policy work?",
      a: "If your footwear does not fit perfectly, contact our Lagos atelier within 14 days of receipt. We will arrange a courier pickup and dispatch your replacement size with zero extra shipping charges.",
    },
  ];

  const policies: Record<string, { title: string; content: string }> = {
    shipping: {
      title: "Shipping & Delivery Policy",
      content:
        "Ola Shoes provides door-to-door delivery across Nigeria via verified courier partners. Standard dispatch is ₦2,500 nationwide, and free for all orders over ₦100,000. Express delivery is ₦4,500. All parcels include tracking updates via SMS and WhatsApp.",
    },
    returns: {
      title: "Returns & Exchanges",
      content:
        "We offer a 14-day complimentary exchange window from the date of delivery. Footwear must be unworn, undamaged, and in its original bespoke packaging with cedar shoe horns and dusters intact.",
    },
    privacy: {
      title: "Privacy & Data Protection",
      content:
        "We respect your privacy. Personal contact information collected during checkout is used solely for order processing, logistics delivery, and customer support. Payment card processing is handled securely and directly by Paystack (PCI-DSS Level 1 certified); we never store raw card numbers.",
    },
    terms: {
      title: "Terms & Conditions",
      content:
        "All purchases made through Ola Shoes are subject to availability. Each pair is handcrafted in limited batches. In the unlikely event of an unforeseen delay in lasting, our concierge team will notify you immediately.",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-28">
      <AnnouncementBar />
      <Header title="Help & Policies" />

      <main className="flex-1 px-margin py-4 flex flex-col gap-6">
        {/* Direct Contact Group */}
        <section className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-label-lg text-label-lg uppercase tracking-wider text-[11px] font-semibold text-secondary">
              Direct Contact
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-label-sm text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Support Online
            </span>
          </div>

          <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden divide-y divide-surface-container">
            {/* Phone */}
            <a
              href="tel:+2348012345678"
              className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                  <Phone className="w-5 h-5 text-primary-container" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    +234 801 234 5678
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Mon – Sat, 8am – 8pm WAT
                  </span>
                </div>
              </div>
              <Phone className="w-4 h-4 text-secondary" />
            </a>

            {/* Email */}
            <a
              href="mailto:support@olashoes.com"
              className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                  <Mail className="w-5 h-5 text-primary-container" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    support@olashoes.com
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Average response within 2 hours
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-secondary" />
            </a>

            {/* Atelier Address */}
            <div className="flex items-start justify-between p-space-md">
              <div className="flex items-start gap-space-md min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary-container" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Lagos Flagship Atelier
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    123 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="flex flex-col gap-y-2">
          <div className="px-1">
            <h2 className="font-label-lg text-label-lg uppercase tracking-wider text-[11px] font-semibold text-secondary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left font-label-md text-label-md text-primary-container font-semibold"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-secondary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 font-body-sm text-body-sm text-on-surface-variant border-t border-surface-container/60 pt-2 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Store Policies */}
        <section className="flex flex-col gap-y-2">
          <div className="px-1">
            <h2 className="font-label-lg text-label-lg uppercase tracking-wider text-[11px] font-semibold text-secondary">
              Policies &amp; Information
            </h2>
          </div>

          <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden divide-y divide-surface-container">
            {[
              { id: "shipping", icon: Truck, label: "Shipping information", desc: "Nationwide express & courier logistics" },
              { id: "returns", icon: RefreshCw, label: "Returns & exchanges", desc: "Complimentary 14-day domestic returns" },
              { id: "privacy", icon: ShieldCheck, label: "Privacy policy", desc: "How we secure your data & transactions" },
              { id: "terms", icon: FileText, label: "Terms and conditions", desc: "Artisan warranty & service parameters" },
            ].map((pol) => {
              const IconComp = pol.icon;
              return (
                <button
                  key={pol.id}
                  onClick={() => setActivePolicy(pol.id)}
                  className="w-full flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors text-left"
                >
                  <div className="flex items-center gap-space-md">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
                      <IconComp className="w-4 h-4 text-primary-container" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        {pol.label}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {pol.desc}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-secondary" />
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* Policy Reader Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in">
          <div className="w-full max-w-md bg-surface rounded-t-2xl p-6 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <h3 className="font-headline-sm text-headline-sm text-primary-container">
                {policies[activePolicy]?.title}
              </h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1 text-on-surface-variant hover:text-on-surface"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {policies[activePolicy]?.content}
            </p>
            <button
              onClick={() => setActivePolicy(null)}
              className="w-full py-3 rounded-lg bg-primary-container text-surface font-label-md text-label-md font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
