---
name: Warm Artisanal Luxury
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#4e4540'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#807570'
  outline-variant: '#d2c4be'
  surface-tint: '#6b5b53'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#241913'
  on-primary-container: '#928078'
  inverse-primary: '#d7c2b9'
  secondary: '#625e56'
  on-secondary: '#ffffff'
  secondary-container: '#e6dfd5'
  on-secondary-container: '#66625a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#301400'
  on-tertiary-container: '#a87a59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f4ded4'
  primary-fixed-dim: '#d7c2b9'
  on-primary-fixed: '#241913'
  on-primary-fixed-variant: '#52443c'
  secondary-fixed: '#e8e2d8'
  secondary-fixed-dim: '#ccc6bc'
  on-secondary-fixed: '#1e1b15'
  on-secondary-fixed-variant: '#4a463f'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#f1bb97'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#633e22'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  price-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
  price-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-md: 1rem
  margin: 1rem
  margin-md: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system expresses handcrafted prestige, timeless sartorial confidence, and effortless warmth. Conceived for a contemporary luxury Nigerian footwear brand, it merges bespoke leathercraft heritage with friction-free modern digital retail. 

The aesthetic is anchored in warm minimalism infused with editorial tactile refinement:
- **Atmosphere:** Sun-drenched warm ivory, sand, and rich espresso leather tones eliminate the stark, sterile coldness typical of international e-commerce.
- **Audience:** Discerning modern African professionals, trendsetters, and global luxury patrons seeking artisanal quality, everyday comfort, and elevated design.
- **Emotional Response:** Reassurance, bespoke care, sensory warmth, effortless prestige, and cultural pride.

## Colors

The palette draws directly from tanned hides, espresso patinas, and natural linen fibers.

- **Primary (`#231812` / Deep Espresso):** Used for primary buttons, prominent title typography, active state icons, and hero message overlays. Replaces harsh synthetic blacks with natural, deep organic contrast.
- **Secondary Surface & Borders (`#EAE3D9`):** Hairline borders, structural card outlines, dividers, and inactive form strokes. Keeps the visual hierarchy calm, tactile, and grounded.
- **Tertiary Accent (`#9E7151` / Warm Tan & Leather Sienna):** Used for subtle promotion badges, active swatches, countdown notices, and warm metadata.
- **Neutral Canvas (`#FAF7F2` / Warm Alabaster):** The main background surface across mobile screens. Accompanied by `#F5EFEB` for secondary card backdrops and pill fills.
- **Text & Contrast:** Primary text renders in `#1C1917` (Deep Warm Charcoal) for high legibility, with muted captions resting in `#78716C` and `#8C827A`.

## Typography

The typography pairs an editorial high-contrast serif with a clean, contemporary geometric sans-serif:

- **Playfair Display** introduces heritage craftsmanship, warmth, and quiet luxury in hero banners, collection headers, narrative intros, and order milestone screens.
- **Plus Jakarta Sans** provides clarity and precision across interface metadata, size selectors, checkout accordions, forms, and product specs.
- **Naira Currency Formatting (₦):** Rendered using `Plus Jakarta Sans` bold weights (e.g., `₦68,000`, `₦126,000`) without synthetic space between the symbol and numeric sequence, ensuring seamless integration alongside product names.

## Layout & Spacing

The layout system is tailored for high-density, touch-first mobile e-commerce with consistent margins and rhythmic card scaling:

- **Mobile Grid Structure:** 4-column layout on standard viewports (360px–428px) with 16px (`1rem`) outer canvas margins and 12px (`0.75rem`) gutters between product tiles.
- **Product Card Dual Grid:** 2-column equal-width layout on catalog and search result pages, giving imagery maximum room while keeping title and pricing stacked below.
- **Vertical Rhythm:**
  - Section headers sit `1.5rem` (`space-xl`) above product clusters.
  - Component internals maintain an 8px (`space-sm`) and 12px (`space-md`) bounding box padding.
  - Sticky bottom action containers use `1rem` vertical padding and include iOS safe area insets (`env(safe-area-inset-bottom)`).

## Elevation & Depth

This design system avoids loud, fuzzy drop shadows in favor of quiet, tonal layering and delicate borders:

- **Surface Tiers:**
  - **Base Canvas:** `#FAF7F2` gives a warm, unbleached cotton backdrop.
  - **Card Containers:** `#F5EFEB` surfaces or framed `#FFFFFF` cells distinguish interactive components against the base background.
  - **Hero Insets:** Deep `#231812` backgrounds layered with subtle contrast borders provide editorial presence for marketing and order status confirmation.
- **Border Treatment:** Primary depth is produced via crisp 1px borders colored `#EAE3D9`.
- **Subtle Ambient Elevation:** Where elevation is required (e.g., sticky navigation bars, floating checkout summary drawers), use an ultra-diffused, warm shadow:
  `box-shadow: 0px 4px 20px rgba(35, 24, 18, 0.05);`

## Shapes

The geometry balances soft, welcoming radii with structured architecture:

- **Product & Category Cards:** Use `rounded-xl` (16px / 1rem) to frame shoe photography comfortably without clipping silhouette edges.
- **Action Buttons & Form Controls:** Use `rounded-lg` (12px to 14px) or full pills (`9999px`) for touch targets, giving buttons a bespoke leather-patch feel.
- **Filter Tags & Category Selectors:** Fully rounded pill shapes (`rounded-full`) for tap-friendly horizontal scrolling.
- **Image Thumbnails:** Squared-off `rounded-md` (8px) for multi-angle product views and cart line items.

## Components

### Buttons
- **Primary Action:** Solid `#231812` background, `#FFFFFF` text, `rounded-lg` (12px), 48px–52px height for mobile ergonomics, paired with right-pointing arrow (`→`) in checkout flows.
- **Secondary / Ghost Action:** 1px `#EAE3D9` border, transparent or `#FAF7F2` background, `#1C1917` text.
- **Social Login:** Cream/neutral background `#FAF7F2`, 1px `#EAE3D9` border, left-aligned standard brand icons.

### Product Cards
- **Container:** Dual-column card on `#F5EFEB` with a 1px `#EAE3D9` border or borderless image frame.
- **Image Aspect Ratio:** 1:1 or 4:5 vertical shoe display with consistent studio lighting.
- **Favorite Badge:** Floating circular icon button at the top-right corner with 32px diameter and delicate outline stroke.
- **Text Block:** Product name (`body-sm` / `label-md`), followed immediately by price in bold (`price-md`).

### Form Inputs & Selectors
- **Fields:** 48px height, `#FAF7F2` surface, 1px `#EAE3D9` border, 12px corner radius. Placeholder text in `#8C827A`.
- **Focus State:** 1.5px border transition to `#231812` with no loud glow rings.
- **Size Selector Tiles:** Grid of rounded square chips (44px × 44px). Default state uses `#FFFFFF` background with `#EAE3D9` border; active selection uses `#231812` fill with `#FFFFFF` text.

### Category & Filter Pills
- **Style:** Compact pill (`rounded-full`), height 34px, horizontal padding 16px.
- **Default State:** Transparent or `#F5EFEB` background with `#EAE3D9` outline and `#1C1917` text.
- **Selected State:** `#231812` background with `#FFFFFF` text.

### Bottom Navigation Bar
- **Dimensions:** 64px height plus device safe-area padding.
- **Surface:** `#FAF7F2` or `#FFFFFF` with a top 1px border of `#EAE3D9`.
- **Tabs:** 4 persistent navigation items: *Home*, *Shop*, *Saved*, *Account*.
- **Iconography:** 20px fine-line stroke icons; active icon adopts solid fill `#231812` with a subtle weighted label below.

### Checkout & Progress Trackers
- **Order Stepper:** Horizontal connected line in `#EAE3D9` with 24px circular numbered nodes. Completed and current steps render with solid `#231812` fills and white checkmarks.
- **Price Summary Stack:** Clean divider-separated list for Subtotal, Delivery Fee, and Total, featuring bold `₦` figures and Paystack gateway trust indicators.