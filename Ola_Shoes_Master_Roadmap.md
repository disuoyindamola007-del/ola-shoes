# OLA SHOES --- MASTER PRODUCT, ENGINEERING & IMPLEMENTATION ROADMAP

## 1. Your Role and Mission

Act as the lead software architect, senior full-stack engineer,
e-commerce specialist, UI/UX implementation engineer, security engineer,
and technical project manager for **Ola Shoes**.

Your responsibility is to turn the supplied Stitch designs into a
complete, secure, attractive, mobile-first, production-ready e-commerce
platform.

Do not stop at producing a visual prototype. Build a real application
with a functioning frontend, backend, database, customer accounts,
product catalogue, inventory, checkout, payment verification, order
management, and administrative dashboard.

Work systematically. Inspect the supplied files and the existing
repository before making architectural decisions or modifying code.

**The priorities, in order, are:**

1.  Preserve the approved Ola Shoes visual identity.
2.  Build a complete and intuitive mobile shopping experience.
3.  Implement reliable commerce functionality and data integrity.
4.  Provide secure payments, authentication, and administration.
5.  Make the application maintainable, testable, scalable, and ready for
    advertising-driven traffic.
6.  Deploy safely and document how the business can operate the store.

Do not claim that a feature is complete until its implementation has
been tested.

------------------------------------------------------------------------

## 2. Business Overview

**Brand:** Ola Shoes

**Business model:** Direct-to-consumer online footwear store.

**Initial market:** Nigeria, with the ability to expand to other markets
later.

**Products:** Men's and women's footwear, including:

-   Sneakers and trainers
-   Formal and office shoes
-   Leather shoes
-   Loafers and driving shoes
-   Heels and stilettos
-   Flats
-   Sandals and slides
-   Boots
-   Casual shoes
-   New arrivals, bestsellers, sale items, and seasonal collections

The product catalogue must support new footwear categories without
requiring a redesign or changes to the database schema every time the
business introduces a new category.

### Business objectives

Build a store that can:

-   Present shoes professionally and encourage purchases.
-   Convert visitors arriving from social media, paid advertising,
    search engines, and direct links.
-   Allow customers to browse without creating accounts.
-   Make selecting a shoe, size, colour, and quantity straightforward.
-   Support secure online payments and reliable order fulfilment.
-   Let staff manage products, prices, stock, orders, and promotions
    without editing code.
-   Support growing traffic, catalogue size, and order volume.
-   Track key business metrics and provide a foundation for future
    marketing integrations.

The first release should be a practical, fully functioning online store,
not an unnecessarily complicated enterprise platform.

------------------------------------------------------------------------

## 3. Inspect and Preserve the Stitch Deliverables

Before coding, inspect the complete supplied ZIP:

`stitch_ola_shoes_mobile_storefront(1).zip`

It contains individual screen directories, each with `code.html` and
`screen.png`, as well as the `warm_artisanal_luxury/DESIGN.md` design
system.

Review every screen and the design-system documentation.

The current customer-facing screens include:

1.  Homepage
2.  Shop All
3.  Category Listing
4.  Search Results
5.  Product Details
6.  Shopping Cart
7.  Checkout
8.  Order Confirmation
9.  Customer Sign In
10. Create Account
11. Forgot Password
12. My Account
13. Order Details and Tracking
14. Help, Contact and Policies

### Rules for using the Stitch files

-   Treat the supplied designs as the approved visual reference.
-   Inspect the actual HTML and assets before deciding what can be
    reused.
-   Reuse suitable markup, imagery, layout patterns, and components
    where practical.
-   Translate the designs into maintainable application components
    rather than simply embedding static HTML pages.
-   Replace hardcoded demonstration products, prices, order numbers,
    addresses, and customer details with real application data.
-   Remove fake functionality and connect interactive elements to real
    application logic.
-   Keep the mobile-screen proportions and visual hierarchy.
-   Do not redesign the interface unnecessarily.
-   Do not introduce a new colour palette or unrelated design language.
-   Do not replace the supplied visual direction with generic templates.
-   If the Stitch markup is duplicated, inaccessible, or technically
    unsuitable, rebuild that part while preserving its appearance.
-   Do not assume that the ZIP is a complete backend or production
    application.

Before modifying the project, produce a brief inventory of the files,
existing code, dependencies, routes, reusable components, and missing
functionality.

If a repository already exists, preserve useful work and avoid
overwriting it blindly.

------------------------------------------------------------------------

## 4. Approved Visual Identity and Design System

The brand direction is **warm, premium, editorial footwear retail**.

It should feel like a serious fashion brand with a polished digital
shopping experience---not a generic AI-generated storefront.

### Core colour palette

Use the supplied design system as the source of truth.

  Purpose                Colour
  ---------------------- ----------------------------------------------
  Main background        Warm ivory / cream, approximately `#FAF7F2`
  Alternate surface      Soft cream, approximately `#F5EFEB`
  Primary action         Deep espresso brown, approximately `#231812`
  Primary text           Warm charcoal, approximately `#1C1917`
  Borders and dividers   Warm beige, approximately `#EAE3D9`
  Leather/tan accent     Approximately `#9E7151`
  White surface          `#FFFFFF`
  Muted secondary text   Warm grey, approximately `#78716C`

Use the actual `DESIGN.md` tokens consistently. Where its token values
differ slightly from the descriptive palette, reconcile them into one
documented set of CSS variables rather than scattering conflicting
hardcoded colours throughout the application.

### Typography

Use the intended pairing:

-   **Playfair Display:** Editorial headings, collection titles,
    promotional messages, and selected brand moments.
-   **Plus Jakarta Sans:** Body text, navigation, prices, forms, product
    information, buttons, and functional interface elements.

Typography should establish a clear hierarchy. Avoid oversized headings
that crowd mobile screens.

### Layout and component styling

-   Design mobile-first for approximately 360--428px-wide devices.
-   Use comfortable horizontal margins and consistent spacing.
-   Use a two-column product grid where appropriate.
-   Maintain generous product photography space.
-   Use rounded product cards and subtle borders.
-   Avoid excessive shadows, gradients, glassmorphism, and unnecessary
    animation.
-   Use dark espresso for primary buttons with high-contrast text.
-   Use clear disabled, loading, selected, success, and error states.
-   Keep buttons and inputs comfortable for touch interaction.
-   Respect device safe areas, particularly around fixed bottom
    navigation and action bars.

### Persistent mobile navigation

Where appropriate, retain the four-item bottom navigation from the
designs:

-   Home
-   Shop
-   Saved
-   Account

The header should consistently support brand navigation, search, and
cart access.

### Product imagery

Use high-quality, consistent footwear photography.

Product images must support multiple angles and colour variants where
available. Use appropriately sized images, modern image formats,
responsive delivery, and lazy loading below the fold.

Do not use unrelated stock imagery as though it were a product for sale.
Until actual inventory photography is available, use clearly
identifiable development placeholders and make it easy for
administrators to upload real images.

### Design acceptance criteria

Every page should look like it belongs to the same store. Navigation,
product cards, price styling, forms, buttons, page margins, and error
messages should share reusable design tokens and components.

------------------------------------------------------------------------

## 5. Technology Stack

Use a modern TypeScript-based stack with a clear separation between
presentation, business logic, and data access.

### Frontend and application framework

-   Next.js with the App Router
-   TypeScript with strict type checking
-   React
-   Tailwind CSS
-   Reusable, accessible UI components
-   A consistent icon library such as Lucide
-   A form solution with schema-based validation, such as React Hook
    Form and Zod, where appropriate

Use server components for suitable data-driven pages and client
components only where interactivity requires them.

### Backend

Use Next.js server-side functionality for application routes, server
actions where appropriate, and secure business logic. Organise the
application so that commerce logic does not become tightly coupled to
page components.

Keep a clean service layer for:

-   Products and catalogue
-   Inventory
-   Cart
-   Checkout
-   Payments
-   Orders
-   Customers
-   Promotions
-   Shipping
-   Notifications
-   Administration

If the backend grows beyond what the application framework should
reasonably handle, services can be separated later. Do not start with
unnecessary microservices.

### Database

Use PostgreSQL as the primary relational database.

Use Prisma ORM, or another well-supported typed ORM if the repository
already has a strong established choice.

The database must be the source of truth for products, variants,
inventory, orders, payment records, and customer data.

Use versioned migrations. Do not rely on manually editing a production
database.

### Hosting and infrastructure

Choose managed hosting compatible with Next.js and PostgreSQL.

Recommended starting approach:

-   Managed Next.js hosting, such as Vercel, or a comparable platform.
-   Managed PostgreSQL.
-   Cloudflare or an equivalent CDN/DNS/security layer where
    appropriate.
-   Cloudinary, S3-compatible object storage, or an equivalent
    image-storage solution.
-   GitHub for source control and code review.
-   Environment-specific configuration for local development, preview,
    staging, and production.

Keep infrastructure modular enough to change providers without rewriting
the entire application.

### Supporting services

Evaluate and configure the following only when needed:

-   Paystack for Nigerian payments.
-   Transactional email for order confirmations and password resets.
-   SMS or WhatsApp delivery notifications if the business chooses to
    support them.
-   Error monitoring and application performance monitoring.
-   Analytics and consent-aware marketing integrations.
-   A background job or queue mechanism when asynchronous tasks justify
    it.

Never place secret API keys in frontend code or commit them to Git.

------------------------------------------------------------------------

## 6. Application Architecture

Start with a **modular monolith**: one well-organised application with
clearly separated domains.

Suggested logical structure:

-   `app/` --- routes, layouts, loading states, error boundaries, and
    route handlers
-   `components/` --- reusable interface components
-   `features/` --- customer, catalogue, cart, checkout, orders, and
    admin modules
-   `lib/` --- shared utilities, database client, authentication
    helpers, validation, and configuration
-   `server/` --- server-only services and business logic
-   `prisma/` --- schema and database migrations
-   `public/` --- static assets
-   `tests/` --- unit, integration, and end-to-end tests

Adapt this structure to the existing repository rather than forcing a
structure that conflicts with established working code.

### Architectural principles

-   Keep secrets and sensitive operations server-side.
-   Validate all incoming data at server boundaries.
-   Use typed inputs and outputs.
-   Separate display formatting from business calculations.
-   Centralise price, stock, discount, shipping, and order-status rules.
-   Use database transactions for operations that must succeed or fail
    together.
-   Use explicit permission checks for protected actions.
-   Avoid duplicated business rules across frontend and backend.
-   Avoid oversized components and deeply coupled modules.
-   Make important operations observable through logs and audit events.

------------------------------------------------------------------------

## 7. Complete Customer-Facing Route Inventory

The original fourteen screens are the primary visual scope, not the
complete route inventory. Build the additional pages and states required
for a real store.

Use sensible, consistent URLs.

### A. Core shopping pages

  ----------------------------------------------------------------------------------------
  Page                    Suggested route                          Requirements
  ----------------------- ---------------------------------------- -----------------------
  Homepage                `/`                                      Hero, categories, new
                                                                   arrivals, featured
                                                                   products, promotions
                                                                   and brand messaging

  Shop all                `/shop`                                  Product grid,
                                                                   filtering, sorting and
                                                                   pagination or
                                                                   incremental loading

  Category listing        `/category/[slug]`                       Category-specific
                                                                   products, title,
                                                                   optional editorial
                                                                   banner and filters

  Search results          `/search?q=...`                          Search query, result
                                                                   count, filters, sorting
                                                                   and no-result state

  Product details         `/products/[slug]`                       Gallery, price,
                                                                   variants, sizes, stock,
                                                                   delivery, description
                                                                   and add-to-cart

  Saved products          `/saved`                                 Wishlist for signed-in
                                                                   users and a considered
                                                                   guest experience

  Shopping cart           `/cart`                                  Cart items, variant
                                                                   details, quantity
                                                                   updates, removal,
                                                                   totals and promo code

  Checkout                `/checkout`                              Contact, delivery
                                                                   address, shipping
                                                                   method, payment, review
                                                                   and order submission

  Order confirmation      `/order-confirmation/[orderReference]`   Verified order status,
                                                                   summary and next steps

  Account                 `/account`                               Profile, orders,
                                                                   addresses, preferences
                                                                   and security

  Sign in                 `/sign-in`                               Secure authentication
                                                                   and clear validation

  Create account          `/create-account`                        Registration, password
                                                                   rules and consent

  Forgot password         `/forgot-password`                       Secure password
                                                                   recovery

  Reset password          `/reset-password`                        Token validation and
                                                                   secure password update

  Order details/tracking  `/account/orders/[orderReference]`       Order contents, payment
                                                                   and fulfilment status,
                                                                   delivery information

  Help/contact/policies   `/help`                                  FAQs, contact options
                                                                   and policy links
  ----------------------------------------------------------------------------------------

Use a consistent template for categories and product listings. Do not
create separate hardcoded pages for every shoe type.

### B. Additional customer pages and states

Implement the following when applicable:

-   `/categories` --- category directory if the homepage and navigation
    do not adequately cover discovery.
-   `/new-arrivals` --- new product collection.
-   `/best-sellers` --- best-selling products based on reliable sales
    data.
-   `/sale` --- active discounted products.
-   `/collections/[slug]` --- curated collections.
-   `/track-order` --- public order lookup using an order reference and
    appropriate verification.
-   `/account/profile` --- editable customer profile.
-   `/account/addresses` --- saved delivery addresses.
-   `/account/orders` --- order history.
-   `/account/orders/[orderReference]` --- detailed order view.
-   `/account/security` --- password and account-security settings.
-   `/account/notifications` --- notification preferences if supported.
-   `/wishlist` --- optionally provide this as an alias or canonical
    route for saved products.
-   `/faq` --- searchable or categorised FAQs.
-   `/contact` --- dedicated support contact page.
-   `/shipping` --- delivery coverage, charges and estimated delivery.
-   `/returns` --- returns, exchanges, eligibility and process.
-   `/privacy` --- privacy policy.
-   `/terms` --- terms and conditions.
-   `/refund-policy` --- refund rules and timelines.
-   `/size-guide` --- sizing guidance, measurement instructions and fit
    information.
-   `/order-cancelled` or an equivalent order-state view where
    appropriate.
-   A branded `404` page.
-   A global error page and recoverable error states.
-   Appropriate maintenance or service-unavailable states.

Avoid unnecessary duplicate pages. For example, `/help` can link to
`/faq`, `/contact`, and the individual policies.

### C. Important UI states

A production interface requires more than the default state of each
screen.

Design and implement:

-   Empty cart.
-   Empty wishlist.
-   No search results.
-   No products in a category.
-   Loading product listings.
-   Product image loading failure.
-   Out-of-stock products.
-   Selected size unavailable.
-   Quantity limit reached.
-   Invalid promo code.
-   Expired or ineligible promotion.
-   Invalid form inputs.
-   Network failure.
-   Failed payment.
-   Payment still processing.
-   Duplicate checkout submission prevention.
-   Expired sign-in session.
-   Expired password-reset link.
-   Order not found or access denied.
-   Unavailable delivery destination.
-   Successful form submission.
-   Successful account update.
-   Successful order placement.
-   Cancelled or refunded order.

Each state must offer a clear next action where possible.

------------------------------------------------------------------------

## 8. Detailed Customer Experience Requirements

### Homepage

Include:

-   Announcement bar for delivery, promotions, or important store
    notices.
-   Header with brand logo, navigation, search, cart, and account
    access.
-   Editorial hero section with premium footwear photography.
-   Clear calls to action, such as Shop Men, Shop Women, and Shop New
    Arrivals.
-   Category shortcuts.
-   New arrivals.
-   Bestsellers or featured products.
-   Promotional collection or sale section.
-   Brand story or quality message.
-   Delivery, payment, and returns reassurance.
-   Footer with customer support and policy links.

Homepage content should be manageable through the admin interface where
practical.

### Product discovery

Allow users to browse by category and filter by:

-   Gender or collection.
-   Shoe category.
-   Size.
-   Colour.
-   Price range.
-   Availability.
-   Sale status.
-   Brand, if the catalogue includes multiple brands.

Sorting should include sensible options such as featured, newest, price
low-to-high, price high-to-low, and popularity when reliable data is
available.

Search should handle product names, SKU, category, and relevant
attributes. Provide useful no-result guidance.

Do not implement filters as decorative controls. Every displayed filter
must affect the actual results.

### Product details

Display:

-   Product name.
-   SKU where useful.
-   Current price.
-   Original price and discount when applicable.
-   Multiple product images.
-   Colour or style variations.
-   Available sizes.
-   Size guide.
-   Availability by selected variant.
-   Quantity selection where appropriate.
-   Product description and material/care details when supplied.
-   Delivery information.
-   Return eligibility information.
-   Add-to-cart action.
-   Saved-product action.
-   Related or similar products.

Do not let customers add an unavailable size to their cart.

Persist the selected size, colour, and variant when adding a product to
the cart.

### Cart

The cart must:

-   Display the correct product and variant.
-   Allow quantity changes.
-   Allow removal of items.
-   Revalidate stock and prices.
-   Calculate subtotal, eligible discounts, delivery, and total
    correctly.
-   Apply and remove valid promo codes.
-   Preserve the cart across reasonable navigation and refreshes.
-   Provide a clear route back to shopping.
-   Support guest checkout.
-   Recalculate totals on the server before checkout.

Never trust a total sent by the browser.

### Checkout

Keep checkout focused and mobile-friendly.

Collect only necessary information, including:

-   Email address.
-   Phone number.
-   Recipient's name.
-   Delivery address.
-   State and city or other delivery-area information.
-   Optional address instructions.
-   Delivery method.
-   Payment method.
-   Order review and final total.

Show delivery fees and applicable charges before the customer commits to
payment.

Support guest checkout. Account creation should be optional, with an
appropriate opportunity to create an account after a successful order.

Preserve cart contents when a payment fails or is interrupted.

Prevent double-clicks and duplicate submissions from creating duplicate
orders or charges.

### Order confirmation

Show the order reference, purchased items, order total, payment status,
delivery details, and next steps.

Only show a confirmed successful payment when the backend has verified
it. An order awaiting payment confirmation must not be presented as
paid.

Provide links to order details and continued shopping.

### Authentication and customer account

Support secure sign-in, registration, logout, and password recovery.

The customer account should provide:

-   Profile details.
-   Order history.
-   Order tracking.
-   Saved addresses.
-   Saved products.
-   Security settings.
-   Logout.

Do not force account registration before purchase.

If social sign-in is included, implement it using a supported, securely
configured provider. Do not display nonfunctional social-login buttons.

### Help and policies

Include customer support details, FAQs, delivery information,
return/exchange rules, refund policy, privacy policy, terms and
conditions, and size guidance.

Policies must be based on the actual business's approved rules. Do not
invent guaranteed delivery times, free shipping, refund rights, contact
information, or other business commitments.

------------------------------------------------------------------------

## 9. Product Catalogue and Variant Management

Footwear requires variants. A shoe model can have multiple sizes and
colours, each with different stock availability.

Design the catalogue around products and sellable variants.

### Product fields

A product should support:

-   Internal ID.
-   Name.
-   Slug.
-   SKU or product code.
-   Description.
-   Category.
-   Optional brand.
-   Material and other specifications.
-   Product status: draft, active, archived.
-   Featured or collection flags.
-   SEO title and description.
-   Created and updated timestamps.

### Product images

Support:

-   Main image.
-   Gallery images.
-   Image ordering.
-   Alternative text.
-   Variant-specific images where available.

### Variant fields

A variant should support:

-   Parent product.
-   Unique SKU.
-   Size.
-   Colour.
-   Optional size-system metadata.
-   Current price where variant pricing differs.
-   Optional cost price, restricted to authorised staff.
-   Stock quantity.
-   Stock status.
-   Optional low-stock threshold.
-   Active/inactive status.

Do not model every size and colour as a separate unrelated product
unless there is a compelling business reason.

### Inventory rules

-   Inventory must be checked on the server.
-   Stock must not become negative.
-   Concurrent checkouts must not oversell the same variant.
-   Stock changes must be traceable.
-   Inventory adjustments should record the actor, reason, and
    timestamp.
-   Cancelled or expired orders should release reserved stock according
    to a documented policy.
-   Paid orders must deduct or commit stock consistently.
-   Stock availability must be recalculated when relevant order events
    occur.

Use transactions, conditional updates, reservations, or another
concurrency-safe strategy suitable for the chosen database design.

------------------------------------------------------------------------

## 10. Database Design

Create a normalised PostgreSQL schema with appropriate foreign keys,
constraints, indexes, and migrations.

At minimum, evaluate and implement these entities:

### Customer and access

-   `User`
-   `Role` or an equivalent permission model
-   `Address`
-   `Session` or the relevant authentication-provider records

### Catalogue

-   `Product`
-   `Category`
-   `ProductVariant`
-   `ProductImage`
-   `Collection`
-   `CollectionProduct` or equivalent relationship
-   `ProductAttribute` where needed

### Shopping

-   `Cart`
-   `CartItem`
-   `WishlistItem`
-   `Promotion`
-   `PromotionRedemption`

### Commerce

-   `Order`
-   `OrderItem`
-   `Payment`
-   `Shipment` or `Fulfilment`
-   `InventoryMovement`
-   `WebhookEvent` or an equivalent idempotency/event record

### Operations

-   `StoreSetting`
-   `AuditLog`
-   `Notification` or notification delivery records
-   `SupportRequest` if contact submissions are stored

Adapt this model to the actual business requirements. Avoid creating
tables that serve no real purpose.

### Data integrity

-   Use appropriate unique constraints for emails, SKUs, slugs, payment
    references, and order references.
-   Use database transactions for order creation and other multi-step
    critical operations.
-   Store monetary amounts in integer minor units or a suitable exact
    decimal representation. Never use floating-point arithmetic for
    money.
-   Record currency explicitly.
-   Preserve product names, variant information, prices, and discounts
    on order items as historical snapshots so old orders remain accurate
    after catalogue changes.
-   Store timestamps consistently, preferably in UTC, and display local
    times appropriately.
-   Index common lookup fields, foreign keys, order references, and
    frequently queried catalogue fields.

### Currency

Nigeria is the initial market. Display prices in Nigerian naira (`₦`)
and use the configured currency consistently in the database, checkout,
payment requests, and receipts.

Handle payment-provider currency units correctly. Paystack commonly
represents NGN payment amounts in kobo, so convert and validate amounts
explicitly according to its current API requirements.

Do not mix naira and kobo in application calculations.

------------------------------------------------------------------------

## 11. Cart, Checkout and Order Lifecycle

Create a documented order state machine rather than allowing arbitrary
status strings to be assigned throughout the application.

Possible order states include:

-   Pending payment.
-   Payment processing.
-   Paid.
-   Processing.
-   Shipped.
-   Delivered.
-   Cancelled.
-   Refund pending.
-   Partially refunded, if supported.
-   Refunded.

Define permitted transitions and who or what is allowed to trigger each
transition.

Payment status and fulfilment status should be modelled separately where
necessary. A paid order is not automatically shipped, and a failed
payment is not a paid order.

### Order creation flow

1.  Receive checkout information.
2.  Validate the customer, cart, delivery destination, and selected
    variants.
3.  Recalculate product prices, promotions, shipping, and total on the
    server.
4.  Check inventory and reserve or otherwise protect the required stock.
5.  Create a pending order and its item snapshots in a database
    transaction.
6.  Initiate payment using a unique reference.
7.  Record the payment attempt.
8.  Verify the payment result through a trusted server-side mechanism.
9.  Mark the order paid only after successful verification.
10. Commit inventory according to the stock-reservation strategy.
11. Send confirmation and trigger the appropriate fulfilment workflow.
12. Release reservations or restore stock when an order is cancelled or
    payment expires, according to the documented rules.

Design the workflow to recover safely from partial failures. A network
timeout must not cause duplicate orders or charges.

------------------------------------------------------------------------

## 12. Payment Integration

Use Paystack as the initial payment provider candidate for Nigeria,
subject to confirming the business's merchant eligibility, settlement
setup, and current integration requirements.

Create a payment service abstraction so another provider can be added
later without rewriting the entire checkout.

### Required payment behaviour

-   Initialise transactions on the server.
-   Generate unique payment references.
-   Use the authoritative server-calculated amount and currency.
-   Keep secret keys server-side.
-   Verify payment status and amount with the provider.
-   Validate the expected currency, reference, amount, and order
    association.
-   Process verified webhooks.
-   Verify webhook signatures using the provider's documented method.
-   Handle duplicate and out-of-order webhook events safely.
-   Record payment attempts and outcomes.
-   Support a customer returning from the payment provider.
-   Reconcile pending transactions when the customer closes the browser
    or the return redirect fails.
-   Release reservations or restore stock when an order is cancelled or
    payment expires, according to the documented rules.
-   Display pending, successful, failed, and cancelled payment states
    accurately.

**Never treat a redirect to a success URL as sufficient proof of
payment.**

Webhook processing must be idempotent. Repeated notifications must not
duplicate stock deductions, order confirmations, or fulfilment events.

Do not store raw card details or sensitive card credentials.

Test with the provider's supported test environment before enabling live
payments.

------------------------------------------------------------------------

## 13. Delivery and Fulfilment

Create a configurable delivery service rather than hardcoding a single
fee into the checkout page.

Support:

-   Delivery fee calculation.
-   Delivery-area eligibility.
-   Configurable delivery methods.
-   Estimated delivery messaging.
-   Order fulfilment status.
-   Tracking reference where available.
-   Staff updates to shipment status.
-   Customer visibility into delivery progress.

The initial release can use manually configured delivery zones and
staff-managed fulfilment. Add third-party logistics integrations when
the business selects a provider.

Do not fabricate tracking updates. If carrier tracking is not
integrated, clearly distinguish staff-entered fulfilment updates from
live carrier tracking.

Delivery prices and promises must be controlled by store settings or
documented configuration.

------------------------------------------------------------------------

## 14. Admin Dashboard

Build a protected administration interface with the same visual
identity, adapted for efficient staff workflows.

The customer store is mobile-first. The admin interface should remain
responsive, but prioritise usability for product and order management.

### Required admin areas

**1. Admin sign-in** - Secure authentication. - Role verification. -
Safe logout and session management.

**2. Dashboard overview** - Orders and sales for selected periods. -
Order status breakdown. - Recent orders. - Low-stock products. -
Bestselling products when reliable data exists. - Relevant operational
warnings.

**3. Product management** - Product listing. - Search and filtering. -
Create, edit, archive, and publish. - Category assignment. - Product
image upload and ordering. - SEO fields.

**4. Product and variant editor** - Sizes and colours. - SKU
management. - Variant-specific images. - Pricing. - Availability and
publication status.

**5. Inventory management** - Stock adjustments. - Low-stock
indicators. - Variant-level quantities. - Inventory movement history. -
Reasons and audit records for manual adjustments.

**6. Order management** - Search by order reference. - Filter by date,
payment status, fulfilment status, and customer. - View order details. -
Update permitted fulfilment statuses. - Cancel orders according to
business rules. - Initiate refunds through a verified provider workflow
when supported.

**7. Order detail** - Customer and delivery details. - Order item
snapshots. - Payment history. - Fulfilment timeline. - Internal notes. -
Audit history where appropriate.

**8. Customer management** - Customer search. - Order history. - Account
status. - Appropriate customer support context. - Strict access control
for personal information.

**9. Promotions and discounts** - Coupon creation. - Fixed or percentage
discounts. - Start and expiry dates. - Usage limits. - Minimum order
values. - Eligible products or categories. - Active/inactive status. -
Server-side redemption validation.

**10. Store settings and reports** - Store identity and contact
details. - Delivery fees and service areas. - Currency and locale. - Tax
settings where applicable. - Payment-provider configuration status,
without exposing secrets. - Sales and order reports. - Export functions
where justified. - Policy and customer-facing content management where
practical.

### Administration security

Use server-enforced role-based access control.

At minimum, distinguish administrators from ordinary customers. Add more
granular staff roles if needed.

Do not rely on hiding an admin button in the UI. Every protected
operation must verify authorisation on the server.

Record important actions such as price changes, inventory adjustments,
order cancellations, refunds, and permission changes.

------------------------------------------------------------------------

## 15. Authentication, Privacy and Security

Security is a release requirement, not a future enhancement.

### Authentication

Use a maintained authentication solution compatible with the selected
framework.

Implement secure password hashing if passwords are managed directly,
secure session handling, session invalidation on logout, and appropriate
password-reset token expiry.

Do not reveal whether an arbitrary email address has an account through
password-reset responses.

Protect against account enumeration, brute-force attempts, session
misuse, and insecure redirects.

### Authorisation

-   Customers can access only their own private data.
-   Customers cannot modify another customer's order.
-   Administrators require explicit permissions.
-   Server actions and route handlers must enforce access rules.
-   Public order tracking must require appropriate verification and
    return only necessary information.

### Input and application security

-   Validate request data on the server.
-   Use parameterised database access through the ORM.
-   Protect against cross-site scripting and unsafe HTML rendering.
-   Configure appropriate CSRF protections where required by the chosen
    authentication and request architecture.
-   Apply sensible rate limits to sign-in, password recovery, search
    endpoints where necessary, checkout, and public tracking.
-   Restrict upload types, file sizes, and permissions.
-   Prevent arbitrary remote image fetching or unsafe file uploads.
-   Use secure cookies and appropriate security headers.
-   Avoid exposing stack traces, secrets, or internal implementation
    details to customers.

### Privacy

Collect only the information required to fulfil orders and operate the
service.

Do not expose customer addresses, phone numbers, or order information in
public pages or logs.

Implement appropriate retention, deletion, and data-access procedures
according to the business's legal obligations.

Provide clear privacy and terms pages. Obtain consent where required for
marketing communications and tracking.

Never send passwords, payment secrets, or unnecessary personal data to
analytics systems.

------------------------------------------------------------------------

## 16. Search Engine Optimisation and Advertising Readiness

The store must support traffic from social media campaigns, search
engines, and paid advertising.

### SEO

Implement:

-   Unique page titles and meta descriptions.
-   Canonical URLs.
-   Product and category metadata.
-   Open Graph metadata for shared links.
-   Product structured data where accurate.
-   Breadcrumb structured data where applicable.
-   XML sitemap.
-   Robots directives.
-   Clean, stable product and category slugs.
-   Appropriate handling of unavailable and discontinued products.
-   Useful image alt text.
-   Crawlable category and product links.

Do not allow private account, checkout, or admin pages to become
publicly indexed.

### Performance

-   Render public catalogue pages efficiently.
-   Optimise product images.
-   Lazy-load below-the-fold imagery.
-   Avoid unnecessary client-side JavaScript.
-   Cache public catalogue content where safe.
-   Revalidate cached content when relevant product information changes.
-   Never publicly cache private customer data or personalised cart
    details.
-   Avoid slow serial requests when data can be fetched efficiently.
-   Use pagination or appropriate incremental loading for large
    catalogues.

### Analytics and conversion tracking

Prepare for integrations such as:

-   Google Analytics 4.
-   Google Tag Manager, if selected.
-   Meta Pixel and Conversions API, if selected.
-   Consent management where required.

Potential events include:

-   Product viewed.
-   Search performed.
-   Category viewed.
-   Product added to cart.
-   Cart viewed.
-   Checkout started.
-   Payment initiated.
-   Purchase completed.
-   Wishlist item added.

Send purchase events only when a purchase is verified. Use event
identifiers or equivalent deduplication mechanisms where client and
server events are both sent.

Avoid duplicate purchase reporting on page refreshes.

Do not invent tracking IDs. Keep all identifiers configurable through
environment variables or approved settings.

------------------------------------------------------------------------

## 17. Reliability, Monitoring and Scalability

Design for growth without prematurely overengineering the first release.

### Reliability

-   Add clear error boundaries and recovery states.
-   Handle database and provider failures safely.
-   Use transactions for critical operations.
-   Make payment and order processing idempotent.
-   Provide a reconciliation process for pending payments and incomplete
    workflows.
-   Avoid losing customer cart contents during recoverable errors.
-   Back up the database and document restoration procedures.

### Scalability

-   Use indexed database queries.
-   Paginate large product, order, and customer lists.
-   Avoid loading the entire catalogue into memory.
-   Use a CDN for public images and suitable static content.
-   Cache only data that can safely be cached.
-   Introduce Redis or another cache/queue system when a measured need
    justifies it.
-   Move slow non-critical tasks, such as email delivery and certain
    integrations, into background jobs when appropriate.
-   Avoid microservices until independent scaling or operational needs
    justify them.

### Observability

Implement structured logging and error monitoring.

Track key operational failures such as:

-   Payment initialisation errors.
-   Failed payment verification.
-   Rejected webhooks.
-   Database errors.
-   Inventory conflicts.
-   Checkout failures.
-   Email-delivery failures.
-   Unexpected HTTP 5xx responses.

Never log secrets or complete payment credentials.

------------------------------------------------------------------------

## 18. Testing Strategy

Create a testing strategy covering business rules, integrations,
interface behaviour, and release readiness.

### Unit tests

Test important calculations and rules:

-   Price and discount calculations.
-   Currency conversion to payment-provider units.
-   Promotion eligibility.
-   Shipping fee calculations.
-   Stock availability.
-   Order-state transitions.
-   Payment-status mapping.
-   Input validation.
-   Access-control decisions.

### Integration tests

Test:

-   Database operations.
-   Cart creation and updates.
-   Checkout and order creation.
-   Inventory reservation or deduction.
-   Payment verification.
-   Webhook idempotency.
-   Promotion redemption.
-   Order cancellation.
-   Customer access restrictions.
-   Admin permissions.

Use test data and payment-provider test environments.

### End-to-end tests

At minimum, test these complete journeys:

1.  Visitor browses products and opens a product detail page.
2.  Visitor selects a size and adds a shoe to the cart.
3.  Visitor checks out as a guest.
4.  Successful test payment results in a verified paid order.
5.  Failed payment preserves a recoverable cart and does not mark the
    order paid.
6.  A repeated webhook does not duplicate processing.
7.  A customer signs up, signs in, and resets a password.
8.  A customer views only their own order history.
9.  An administrator creates a product and publishes variants.
10. An administrator updates stock and fulfils an order.
11. An unavailable size cannot be purchased.
12. Concurrent purchases cannot oversell stock.

### Visual and responsive tests

Compare the implemented pages with the Stitch references.

Test common mobile widths and verify:

-   No horizontal overflow.
-   No clipped product images.
-   Correct fixed navigation behaviour.
-   Accessible form labels.
-   Visible focus states.
-   Clear contrast.
-   Appropriate loading and empty states.
-   Functional touch targets.
-   Usability on narrow mobile screens.

Desktop support may be added later, but **the approved initial interface
is mobile-first**. Do not substitute desktop or tablet layouts for the
supplied mobile designs.

### Quality gates

Before release:

-   Run linting.
-   Run TypeScript checks.
-   Run tests.
-   Run the production build.
-   Fix critical errors and warnings that affect reliability or
    security.
-   Document any remaining known limitations honestly.

------------------------------------------------------------------------

## 19. Development Roadmap and Execution Order

Follow the stages below. Do not jump straight to styling every page
before the data model and application foundation are ready.

### Phase 0 --- Repository and Stitch audit

Tasks:

1.  Inspect the repository and ZIP.
2.  Review every screen and `DESIGN.md`.
3.  Identify existing working code and reusable assets.
4.  Identify missing pages and incomplete behaviours.
5.  Confirm framework, dependency versions, and current project
    structure.
6.  Produce a short implementation plan and risk list.

Deliverable: a repository audit, route inventory, component inventory,
and proposed implementation sequence.

### Phase 1 --- Application foundation

Tasks:

1.  Set up or verify Next.js and TypeScript.
2.  Configure Tailwind CSS and the approved design tokens.
3.  Set up fonts and icon conventions.
4.  Establish layouts, error boundaries, and loading states.
5.  Configure environment variables and secret handling.
6.  Set up PostgreSQL and the ORM.
7.  Create initial migrations.
8.  Configure linting, formatting, and automated checks.
9.  Establish a safe Git workflow.

Deliverable: a running application with a reliable technical foundation.

### Phase 2 --- Design system and reusable components

Build reusable components for:

-   Header and navigation.
-   Mobile bottom navigation.
-   Announcement bar.
-   Buttons and form controls.
-   Product cards.
-   Product image gallery.
-   Size and colour selectors.
-   Price and sale displays.
-   Filter and sort controls.
-   Cart item rows.
-   Order summaries.
-   Status indicators.
-   Dialogs and drawers.
-   Alerts and toast messages.
-   Loading skeletons.
-   Empty states.
-   Footer and policy links.
-   Admin tables and navigation.

Deliverable: consistent components ready to be used across the entire
application.

### Phase 3 --- Public storefront

Implement:

1.  Homepage.
2.  Shop all.
3.  Category pages.
4.  Search results.
5.  Product detail pages.
6.  Collection, new-arrival, bestseller, and sale views as required.
7.  Wishlist.
8.  Responsive header, navigation, and footer.

Initially, catalogue pages may use controlled development data, but
their architecture must support real database-backed products.

Deliverable: a complete product-discovery experience that matches the
approved designs.

### Phase 4 --- Database-backed catalogue and administration foundation

Implement:

1.  Product and category models.
2.  Product variants and SKU handling.
3.  Product image storage.
4.  Catalogue queries.
5.  Search and filtering.
6.  Product administration.
7.  Variant and inventory management.
8.  Image upload and validation.
9.  Store settings.

Deliverable: administrators can manage real catalogue data and customers
see the same data on the storefront.

### Phase 5 --- Cart and inventory

Implement:

1.  Guest cart.
2.  Signed-in customer cart.
3.  Variant-aware cart items.
4.  Quantity and removal operations.
5.  Price recalculation.
6.  Stock validation.
7.  Inventory reservation or equivalent concurrency-safe checkout
    protection.
8.  Promotion validation.
9.  Cart persistence and recovery.

Deliverable: a real cart backed by reliable server-side business rules.

### Phase 6 --- Checkout and payment

Implement:

1.  Guest checkout.
2.  Customer checkout.
3.  Address management.
4.  Delivery options and fees.
5.  Server-side order creation.
6.  Payment initialisation.
7.  Provider verification.
8.  Webhook processing.
9.  Idempotency and duplicate-submission protection.
10. Pending, failed, successful, and interrupted-payment recovery.
11. Order confirmation.

Deliverable: a fully tested test-mode purchase journey. Do not enable
live payments until verification and reconciliation are working.

### Phase 7 --- Authentication and customer account

Implement:

1.  Sign-in.
2.  Registration.
3.  Password recovery and reset.
4.  Session management.
5.  Profile management.
6.  Saved addresses.
7.  Order history.
8.  Wishlist persistence.
9.  Order detail and tracking.
10. Customer account permissions.

Deliverable: a complete customer account experience without forcing
account creation during checkout.

### Phase 8 --- Order fulfilment and customer support

Implement:

1.  Order management.
2.  Fulfilment status transitions.
3.  Shipment and tracking information.
4.  Order notifications.
5.  FAQs.
6.  Contact support.
7.  Shipping policy.
8.  Returns and exchanges.
9.  Refund policy.
10. Privacy policy and terms.
11. Size guide.

Deliverable: the business can manage orders and customers can find
accurate support information.

### Phase 9 --- Complete admin dashboard

Implement:

1.  Admin authentication and permissions.
2.  Overview dashboard.
3.  Product management.
4.  Inventory management.
5.  Order management.
6.  Customer management.
7.  Promotions.
8.  Store settings.
9.  Reports.
10. Audit logs and operational visibility.

Deliverable: staff can operate the business without direct database
edits or developer intervention for ordinary tasks.

### Phase 10 --- SEO, analytics and optimisation

Implement:

1.  Metadata and canonical URLs.
2.  Product and category structured data.
3.  Sitemap and robots rules.
4.  Image optimisation.
5.  Safe caching.
6.  Analytics event framework.
7.  Advertising conversion tracking when configured.
8.  Performance profiling.
9.  Accessibility review.
10. Core Web Vitals optimisation.

Deliverable: a discoverable, performant storefront ready for marketing
campaigns.

### Phase 11 --- Security and release testing

Complete:

1.  Unit and integration tests.
2.  End-to-end purchase tests.
3.  Payment failure and webhook replay tests.
4.  Inventory concurrency tests.
5.  Access-control tests.
6.  Responsive visual checks.
7.  Dependency and configuration review.
8.  Backup and recovery test.
9.  Error-monitoring setup.
10. Production-build verification.

Deliverable: a release candidate with documented test results and known
limitations.

### Phase 12 --- Deployment and launch

Tasks:

1.  Prepare staging and production environments.
2.  Configure the production database and migrations.
3.  Configure domain, DNS, TLS, and hosting.
4.  Configure payment-provider live credentials securely.
5.  Verify webhook endpoints.
6.  Configure email delivery and sender records.
7.  Configure storage and CDN.
8.  Run a real-world test order using the approved launch procedure.
9.  Verify order notifications, stock updates, fulfilment, and refunds.
10. Verify backups and monitoring.
11. Document rollback and recovery procedures.
12. Launch only after critical checks pass.

Deliverable: a working production store and an operational handover
document.

------------------------------------------------------------------------

## 20. Environment Configuration

Create an `.env.example` listing required variable names and
descriptions without real credentials.

Potential configuration includes:

-   Database connection string.
-   Authentication secret and public application URL.
-   Payment-provider public key where needed.
-   Payment-provider secret key.
-   Payment webhook secret or verification configuration.
-   Image-storage credentials.
-   Email provider credentials.
-   Analytics identifiers.
-   Error-monitoring configuration.

Use the actual names required by the chosen integrations.

Never commit `.env` files containing secrets. Never expose server-only
credentials through public environment-variable prefixes.

Validate required environment variables at application startup or in the
relevant server configuration.

Document local setup and distinguish development, staging, and
production settings.

------------------------------------------------------------------------

## 21. Product Data and Content Management

The store should be usable even when the catalogue grows substantially.

Implement or plan for:

-   Product creation and editing.
-   Product image uploads.
-   Category assignment.
-   Variant creation.
-   SKU uniqueness.
-   Price updates.
-   Stock adjustments.
-   Product publication.
-   Sale pricing.
-   Featured collections.
-   SEO fields.
-   Archive and restore behaviour where appropriate.

Provide a documented import strategy for bulk product entry if the
initial catalogue is large. CSV import can be added as a practical admin
capability, with validation and error reporting.

Do not seed fake products into production. Development fixtures must be
clearly separated from real inventory.

Do not use placeholder prices or stock as authoritative production data.

------------------------------------------------------------------------

## 22. Operational Documentation

Create a root-level `README.md` covering:

-   Project overview.
-   Technology stack.
-   Prerequisites.
-   Local setup.
-   Environment variables.
-   Database setup and migrations.
-   Seed data for development.
-   Development commands.
-   Test commands.
-   Production build.
-   Deployment steps.
-   Payment-provider configuration.
-   Image-storage configuration.
-   Admin setup.
-   Backup and recovery.
-   Troubleshooting.

Also maintain concise documents for:

-   Architecture decisions.
-   Database model.
-   Payment and order lifecycle.
-   Deployment and rollback.
-   Known limitations.
-   Launch checklist.

Document how to create the initial administrator securely. Do not
hardcode a universal admin password or create a publicly accessible
administrator registration route.

------------------------------------------------------------------------

## 23. Working Method for the AI Agent

Work in small, verifiable milestones.

For each milestone:

1.  Inspect the relevant files and dependencies.
2.  State what you intend to change.
3.  Implement the change.
4.  Run the relevant checks.
5.  Fix errors before moving forward.
6.  Summarise changed files and implemented functionality.
7.  Identify anything still incomplete.
8.  Update the roadmap and documentation.

Use Git commits at logical milestones. Do not perform destructive
changes without checking their impact.

Do not overwrite the existing project just to start from a preferred
template.

Do not generate an enormous code dump without integrating, testing, and
validating it.

Do not leave buttons that appear functional but have no real behaviour.
If a feature depends on a provider or business decision that has not yet
been configured, implement a safe integration boundary and document
exactly what remains.

Do not claim a payment, order, deployment, migration, or test succeeded
unless the relevant system has confirmed it.

If blocked by missing credentials, business rules, or external service
access, continue with independent work and record the precise blocker
instead of fabricating a successful integration.

When choices are required, prefer secure, maintainable defaults and
explain material deviations from this plan.

------------------------------------------------------------------------

## 24. Definition of Done

The project is not complete merely because the pages resemble the Stitch
screenshots.

The first production release is ready only when:

-   All primary customer-facing screens exist.
-   Supporting pages and important empty/error states are implemented.
-   The visual identity matches the approved Stitch designs.
-   The mobile experience works at common mobile widths.
-   Products, categories, images, variants, prices, and stock come from
    the real catalogue.
-   Search, filters, sorting, and product selection work.
-   Cart totals and promotions are calculated securely.
-   Guest checkout works.
-   Authentication and account permissions are secure.
-   Payments are verified server-side.
-   Webhooks are authenticated and idempotent.
-   Orders and inventory remain consistent during failures and
    concurrent purchases.
-   Administrators can manage products, stock, orders, customers,
    promotions, and settings.
-   Customer order history and tracking work.
-   Policies and contact information reflect actual approved business
    rules.
-   SEO and performance foundations are in place.
-   Automated tests cover critical business operations.
-   Production configuration and backups are documented.
-   The application builds and deploys successfully.
-   Known limitations are documented honestly.

------------------------------------------------------------------------

## 25. First Action Required

**Do not begin by building every page simultaneously.**

Start with the repository and Stitch ZIP audit. Confirm the actual
application framework, inspect all supplied screen files, establish the
approved design tokens, and identify what already exists.

Then provide:

1.  A concise repository audit.
2.  A mapping of the fourteen supplied screens to application routes.
3.  A list of additional required pages and states.
4.  A proposed database model.
5.  A proposed architecture and file structure.
6.  A phased implementation checklist.
7.  Any unresolved business decisions or external credentials needed.

After that, begin Phase 1 and proceed through the roadmap in order.

The objective is to deliver **Ola Shoes as a real, secure, scalable
online footwear business---not merely a collection of attractive
screens.**

## One final instruction for your agent

Send the ZIP with the brief and make sure the agent has access to the
**actual project repository**, not only the Stitch export. If it is
working in the existing BetaTrader repository or another unrelated
project, it must first confirm the correct repository and avoid mixing
the two applications.

The first deliverable should be the audit and implementation plan. Once
that is verified, the agent should begin building the store in phases.
