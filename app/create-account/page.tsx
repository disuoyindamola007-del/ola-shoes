"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function CreateAccountPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;

    setIsLoading(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "current_user",
          JSON.stringify({
            name: fullName || "Patron",
            email: email || "patron@example.com",
            memberSince: "2026",
            tier: "Artisanal Guild",
          })
        );
      }
      setIsLoading(false);
      router.push("/account");
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      <Header showBack title="Create Account" />

      <main className="flex-1 flex flex-col w-full">
        {/* Editorial Visual Header / Hero Card */}
        <div className="px-margin pt-space-xs">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-primary-container">
            <div
              className="bg-cover bg-center w-full h-44 mix-blend-luminosity opacity-40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAp2Unoo9HVD-VPOgXZEf72QxXjVXWQTx2pn0lGQUdPRp87KBiR4e032auhbBEvxxoP4PDlUuhu6dWSfUn3jmdT69tEYBeeY_cb4xFoU6vnnzLwFKDcjYufHO5DOhB1tVSOyN_OTO9sGR3PgW3J6uwBqNNgc-RcrwUzfeYrOa2uJAOL9PgVgK15xWDqJKbA3eEpkz7ZZ2qeUu63A5GwflcqA_WrloXRR2wP5oqiyLGerSMDMzHrJu34')",
              }}
            />
            {/* Warm Vignette Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-transparent" />
            {/* Content Overlay */}
            <div className="absolute inset-0 p-space-lg flex flex-col justify-end">
              <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-surface/15 backdrop-blur-md text-surface text-label-sm font-label-sm uppercase tracking-wider mb-space-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-tertiary-fixed" />
                Artisanal Guild
              </span>
              <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight mb-1">
                Join Ola Shoes
              </h2>
              <p className="font-body-sm text-body-sm text-surface-variant max-w-[280px] leading-relaxed">
                Create an account to track orders, save your bespoke measurements, and receive exclusive private releases.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="px-margin pt-space-lg pb-space-xl flex flex-col gap-space-lg">
          <form onSubmit={handleCreateAccount} className="flex flex-col gap-space-md">
            {/* Full Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="full-name">
                Full name
              </label>
              <div className="relative flex items-center">
                <User className="w-5 h-5 text-secondary absolute left-3.5 pointer-events-none" />
                <input
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:bg-surface-container transition-all border border-outline-variant/30"
                />
              </div>
            </div>

            {/* Email Address Field */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="email-address">
                Email address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-5 h-5 text-secondary absolute left-3.5 pointer-events-none" />
                <input
                  id="email-address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:bg-surface-container transition-all border border-outline-variant/30"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="password">
                  Password
                </label>
                <span className="font-label-sm text-label-sm text-secondary">
                  Min. 8 characters
                </span>
              </div>
              <div className="relative flex items-center">
                <Lock className="w-5 h-5 text-secondary absolute left-3.5 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  minLength={8}
                  className="w-full h-12 pl-11 pr-12 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:bg-surface-container transition-all border border-outline-variant/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="absolute right-2 w-9 h-9 flex items-center justify-center text-secondary hover:text-on-surface transition-colors"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Consent & Legal Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                  className="w-4 h-4 mt-0.5 rounded text-primary-container accent-primary-container cursor-pointer shrink-0"
                />
                <span className="font-body-sm text-body-sm text-secondary leading-snug select-none">
                  I agree to the{" "}
                  <Link href="/help" className="font-label-sm text-on-surface underline hover:text-primary-container">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/help" className="font-label-sm text-on-surface underline hover:text-primary-container">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {/* Primary Action CTA */}
            <div className="pt-space-sm flex flex-col gap-space-sm">
              <button
                type="submit"
                disabled={isLoading || !agreedToTerms}
                className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform hover:opacity-95 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Creating your account...</span>
                ) : (
                  <>
                    <span>Create account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Social Registration Alternative */}
          <div className="flex flex-col gap-space-sm pt-2">
            <button
              type="button"
              onClick={handleCreateAccount}
              className="w-full h-12 px-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-3 transition-colors border border-outline-variant/30"
            >
              <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* Already have an account */}
          <div className="mt-space-lg text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?
              <Link
                href="/sign-in"
                className="font-label-lg text-label-lg font-semibold text-primary-container hover:underline underline-offset-4 ml-1.5 transition-all"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
