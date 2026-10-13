import React from "react";
import { Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-primary-container text-surface px-margin py-2 text-center flex items-center justify-center gap-2 shadow-sm">
      <Truck className="w-3.5 h-3.5 text-tertiary-fixed-dim shrink-0" />
      <span className="font-label-sm text-label-sm tracking-wider uppercase text-surface font-semibold">
        Complimentary Delivery Over ₦100,000
      </span>
    </div>
  );
}
