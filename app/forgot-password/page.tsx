"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Key, Mail, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDispatched(true);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-28">
      <Header showBack title="Reset Password" />

      <main className="flex-1 flex flex-col w-full px-margin py-space-xl">
        <div className="flex flex-col items-center text-center max-w-sm mx-auto w-full pt-space-md">
          {/* Tactile Lock Badge with Subtle Glow & Ambient Radiance */}
          <div className="relative mb-space-2xl">
            <div className="absolute -inset-3 bg-secondary-container/40 rounded-full blur-xl pointer-events-none" />
            <div className="relative w-24 h-24 rounded-full bg-surface-container flex items-center justify-center shadow-[0_4px_24px_rgba(36,25,19,0.06)] transform transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary-container" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shadow-sm">
              <Key className="w-4 h-4 text-on-primary-fixed" />
            </div>
          </div>

          {/* Typography Block */}
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
            Reset your password
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px] leading-relaxed mb-space-2xl">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>

          {/* Interactive Form or Success State */}
          {!isDispatched ? (
            <form onSubmit={handleReset} className="w-full flex flex-col gap-space-lg text-left">
              {/* Input Group */}
              <div className="flex flex-col gap-space-xs">
                <label
                  htmlFor="reset-email"
                  className="font-label-md text-label-md text-on-surface tracking-wide uppercase"
                >
                  Email address
                </label>
                <div className="relative flex items-center">
                  <input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full h-12 px-space-lg pr-12 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all border border-outline-variant/30"
                  />
                  <div className="absolute right-3.5 flex items-center pointer-events-none text-outline">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-sm active:scale-[0.98] transition-all shadow-md group hover:bg-black font-semibold"
              >
                {isSubmitting ? (
                  <span>Dispatching secure link...</span>
                ) : (
                  <>
                    <span>Send reset link</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success Notification State */
            <div className="w-full flex flex-col items-center p-space-lg rounded-2xl bg-surface-container text-center transition-all animate-in fade-in zoom-in-95 border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container mb-space-sm">
                <CheckCircle2 className="w-6 h-6 text-primary-container" />
              </div>
              <p className="font-headline-sm text-headline-sm text-primary-container">
                Link Dispatched
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xs">
                We sent a secure password reset link to <strong className="text-on-surface">{email}</strong>. Please check your inbox and spam folder.
              </p>
            </div>
          )}

          {/* Secondary Navigation */}
          <div className="flex justify-center items-center pt-space-lg">
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors py-space-xs px-space-sm rounded-full active:bg-surface-container font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to sign in</span>
            </Link>
          </div>

          {/* Artisanal Care Footer Note */}
          <div className="mt-space-2xl pt-space-xl flex flex-col items-center gap-2">
            <div className="w-8 h-[1px] bg-outline-variant/60" />
            <p className="font-body-sm text-body-sm text-on-surface-variant/80 italic font-serif">
              Crafted with pride in Lagos
            </p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
