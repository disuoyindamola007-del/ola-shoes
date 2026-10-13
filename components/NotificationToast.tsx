"use client";

import React from "react";
import { CheckCircle2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function NotificationToast() {
  const { notification, dismissNotification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      <div className="bg-primary-container text-surface px-4 py-3 rounded-xl shadow-xl flex items-center justify-between gap-3 border border-outline-variant/30">
        <div className="flex items-center gap-2.5 min-w-0">
          <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-dim shrink-0" />
          <span className="font-label-md text-label-md truncate text-surface">
            {notification}
          </span>
        </div>
        <button
          onClick={dismissNotification}
          className="text-surface/70 hover:text-surface shrink-0 p-1"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
