"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "current_user",
          JSON.stringify({
            name: email.split("@")[0].replace(".", " ").toUpperCase(),
            email,
            memberSince: "2025",
            tier: "Patron Guild",
          })
        );
      }
      setIsLoading(false);
      router.push("/account");
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-24">
      <Header showBack title="Sign In" />

      <main className="flex-1 flex flex-col w-full">
        {/* Editorial Campaign Banner Card */}
        <div className="px-margin pt-space-xs">
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEOby8ljrwSgPLaulplVfD-QRiCIdW4wH08LRkldeVgoHtUa_Ygp3e9IxgOKNG7cb6d66vMnK6qiX_cWjn5JrfoL7kE6H3crjHYfV7uz77UMgf5zBgxWAbxCVcQ9c2jQOM_5MyXGA5ePReJ_AAnODyVLLAyFJV0zvV_SaQCdOlNVTvbinXnF_FDCGGI2Kh25Y6wwaeIiW9HC110qJdeaAtzujnN5yc-FsIEwXJhlPTeIsKjs3Rbo3j')",
              }}
            />
            {/* Warm Vignette Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/95 via-primary-container/60 to-transparent flex flex-col justify-end p-margin-md text-on-primary">
              <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider mb-space-xs opacity-90">
                Atelier Ola Account
              </span>
              <h1 className="font-headline-lg text-headline-lg tracking-tight mb-space-xs text-on-primary">
                Welcome back
              </h1>
              <p className="font-body-sm text-body-sm text-inverse-on-surface/90 max-w-[280px] leading-relaxed">
                Sign in to access your bespoke orders, curated wishlist, and seamless checkout.
              </p>
            </div>
          </div>
        </div>

        {/* Sign In Form Container */}
        <div className="px-margin pt-space-lg pb-space-2xl flex flex-col">
          <form onSubmit={handleSignIn} className="flex flex-col gap-space-lg">
            {/* Email Address Field */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="signin-email">
                Email address
              </label>
              <div className="relative flex items-center">
                <input
                  id="signin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full h-12 px-space-lg rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all border border-outline-variant/30"
                />
                <Mail className="w-5 h-5 text-outline absolute right-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="signin-password">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full h-12 pl-space-lg pr-12 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all border border-outline-variant/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="absolute right-2 w-10 h-10 flex items-center justify-center text-outline hover:text-primary-container transition-colors"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Auxiliary Options Row */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-primary-container accent-primary-container cursor-pointer"
                />
                <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Remember me
                </span>
              </label>

              <Link
                href="/forgot-password"
                className="font-body-sm text-body-sm font-semibold text-primary-container hover:underline underline-offset-4 transition-all"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Primary Action */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 mt-space-xs rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-transform shadow-[0_2px_10px_rgba(36,25,19,0.12)] hover:bg-black"
            >
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Visual Divider */}
          <div className="relative my-space-xl flex items-center justify-center">
            <div className="w-full h-px bg-surface-container-highest" />
            <span className="absolute px-3 bg-surface text-outline font-label-sm text-label-sm tracking-widest uppercase">
              OR
            </span>
          </div>

          {/* Social Authentication Stack */}
          <div className="flex flex-col gap-space-sm">
            <button
              type="button"
              onClick={handleSignIn}
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
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              onClick={handleSignIn}
              className="w-full h-12 px-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-3 transition-colors border border-outline-variant/30"
            >
              <svg
                className="w-[18px] h-[18px] shrink-0 fill-current text-on-surface"
                viewBox="0 0 170 170"
              >
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.77-7.98-12.24-14.7-5.59-8.41-10.09-17.75-13.5-28.02-3.41-10.28-5.12-20.15-5.12-29.62 0-14.15 3.49-25.96 10.48-35.43 6.99-9.47 15.65-14.28 25.98-14.44 5.37 0 11.02 1.34 16.94 4.02 5.92 2.68 9.94 4.07 12.06 4.18 1.68-.11 5.97-1.62 12.87-4.53 6.9-2.91 12.98-4.14 18.25-3.69 14.15.78 25.26 5.86 33.33 15.25-12.73 7.7-18.99 18.27-18.77 31.7.22 10.49 4.24 19.34 12.06 26.54 3.79 3.58 8.16 6.31 13.11 8.21-2.9 8.6-6.47 16.97-10.7 25.1zM119.22 31.85c0-7.37 2.6-14.24 7.82-20.61 5.22-6.37 11.72-10.45 19.51-12.24.78 4.02.72 7.82-.17 11.39-.89 3.57-2.68 7.37-5.36 11.39-2.68 4.02-5.92 7.15-9.72 9.38-3.8 2.23-7.82 3.57-12.06 4.02-.02-1.12-.02-2.23-.02-3.33z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Registration Alternative Link */}
          <div className="mt-space-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don&apos;t have an account?
              <Link
                href="/create-account"
                className="font-label-lg text-label-lg font-semibold text-primary-container hover:underline underline-offset-4 ml-1.5 transition-all"
              >
                Create one
              </Link>
            </p>
          </div>

          {/* Handcrafted Guarantee Pill */}
          <div className="mt-space-xl flex items-center justify-center gap-2 py-2 px-space-md rounded-full bg-secondary-container/40 self-center">
            <ShieldCheck className="w-4 h-4 text-on-secondary-container" />
            <span className="font-label-sm text-label-sm text-on-secondary-container tracking-wider uppercase font-semibold">
              Bespoke Nigerian Craftsmanship
            </span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
