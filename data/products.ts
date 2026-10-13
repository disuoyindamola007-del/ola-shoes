export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  size: string;
  colorName: string;
  colorHex: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  category: "men" | "women" | "sneakers" | "formal" | "sandals";
  price: number;
  originalPrice?: number;
  badge?: "NEW" | "SALE" | "BESPOKE";
  rating: number;
  reviewCount: number;
  description: string;
  craftStory: string;
  material: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: ProductImage[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "The Everyday Leather Loafer",
    slug: "everyday-leather-loafer",
    sku: "OLA-LOAF-01",
    category: "formal",
    price: 68000,
    badge: "BESPOKE",
    rating: 4.9,
    reviewCount: 42,
    description:
      "Handcrafted from supple full-grain calfskin leather, The Everyday Leather Loafer is engineered for all-day comfort whether navigating Lagos boardrooms or casual weekend gatherings. Features a cushioned leather footbed and stitched leather sole.",
    craftStory:
      "Each pair is hand-lasted by master cordwainers in our Lagos atelier. We source ethically tanned hides from Northern Nigeria and finish with hand-burnished espresso wax.",
    material: "100% Full-grain calfskin leather with vegetable-tanned lining",
    colors: [
      { name: "Dark Brown", hex: "#3B2219" },
      { name: "Onyx Black", hex: "#181615" },
      { name: "Warm Tan", hex: "#9E653F" },
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUwL1-cCl5w_hE--AFYrnvBrcg3V4xUmh1lhC6P-8X_zFVtIyBMcV0_gcdCrPumDnC6t7Gn2qZoIJzUamTrsolLLmdAQHqcV71fyphZBTIih2tqMENh-dUkoR8M2CIiD-9pI2TAWee3QyXIgjMHvXRFpYgfSNoC32QJDXUwkMtfysU67114rXr4lDcxb6nMPuZ9QpPcz2r5ysFdZswdUn5Z03ubE2pevbSjSiiM6RyEhr8_je_Bafs",
        alt: "The Everyday Leather Loafer top angled view",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-XXQ0wkAduM-iP7wZcVsnUZJ1xpyD114Wts-n_Gfk6PdpSBqPjC7Zx5YHBqDE-VaG9-0DAIRJBNj3hS7CpmFjOUDWeL4PYmYRwbsfhf22v6GsJHt9YO-XhWIUqjaNmMudUwAjWgF_VNZsb8J7VOg7mD5QRJ2QOEku_wMxY7KvDdmDXrn3OEONu-oWcnDkNL--4_46eYvRLLzcYep1tW2nZ88UkS9NxI8ALdrA6Ui0X7znqsvL9up",
        alt: "The Everyday Leather Loafer profile view",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsOi3SYGlCGIl4zAiZBbK9t1dNAqT6h4UEVj8ZlHcwL6TDGa5ywvh48VHuLJ5m8QxSh2gveBoNyt6WqH29Cm53aV65RvXQW6C2tA5FHKbSoy2yktLiHn2mWYZh1cBDIyL9KlmHHcKFpMa1nWv4LAo63ltnIx3_bjTxxmNKIay71Bri_d64Dxj1kGEvvaiWcFJQI-dAh1iwIdwFGM53-7z--kh7OhrDx_GQpWRSCbWhT2ePHAXrtOKs",
        alt: "The Everyday Leather Loafer sole and hand-stitching detail",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgyjmIdPK2_fwIy-24451Ti0_CxxX_DXZ1wF47jrunfEFvoRK32vFlY3hQOlKM9Xqei3fwqgNMCjHLLq1FMHop7_xYF5OZzeQVxKhPeWquddNasNSj8tnzxrCbuF_OF0gXRbR7QxbaT-kdoNdJ3BZJxekB8RVkvYNTR7nw-5nx08hGDZCwLHfkiLLzzqR_J17bkudeNqn3SbOgsEY1UjSG7XbYTth4-yPxcs_EojQBDx5T5mUcPls8",
        alt: "The Everyday Leather Loafer lifestyle pairing",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5-TF58pd9mdRk8wajM2ajWyTlDfMcKZsuDBI9vtR88kWiTd0J5gLZwY7hwmdjcsjHIYYjG8vdCVFmn3GLSTvr31-oAB1EGnmCsz-OGM6xx9F35KWJMNlfjQ2-6pOf51wfzOfzlQtApiKKQyP_UohOApl4NnppHemXVokkRCIhsxfj9y2zkjp4Z56-QS0xrg1jvwrccAIA5ysZeV2kcP8FbUrJbMXQq-awq-4rxMhc5zgreDzU5pN1",
        alt: "The Everyday Leather Loafer leather burnishing detail",
      },
    ],
    inStock: true,
  },
  {
    id: "prod-2",
    name: "Urban Classic Sneakers",
    slug: "urban-classic-sneakers",
    sku: "OLA-SNK-01",
    category: "sneakers",
    price: 58000,
    badge: "NEW",
    rating: 4.8,
    reviewCount: 38,
    description:
      "A minimalist luxury low-top sneaker made from buttery Italian white calfskin with a durable natural gum outsole. Designed for effortless transitions between sharp casual and off-duty elegance.",
    craftStory:
      "Handmade with precision double-needle edge stitching, padded collar, and removable ergonomic arch support.",
    material: "Full-grain calfskin leather, vulcanized gum rubber sole",
    colors: [
      { name: "White / Gum", hex: "#F3EDE2" },
      { name: "White / Olive", hex: "#556B2F" },
      { name: "All White", hex: "#FFFFFF" },
    ],
    sizes: ["40", "41", "42", "43", "44"],
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_PEce9dfo3TC30-YaZeIkV1FqhRxx4BJsxnHezklwp-FiqXIftJkxyEOGm5orkgjleVg7Z9W98ibkvl6aHAIsoS6vCo1BSFjR_e1f8wHJjaiBw3yUmqMszm6TxrQ3XyoIHSTSunsKkR1xyYTOXru4_wrOx3Qfa0gi5hFDbtI5otBk5J0k-37EOJMdlLl0anH5gNTgq7mAnsUAGsRYU1nXA_BKNOT9xpXXGYI-kh1Zz198otqH59Ou",
        alt: "Urban Classic Sneakers studio shot on travertine",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG74N6_w7YlkEVYfOtezrlaqCg3VQTXe7zU5RK0aOUy0BlZaFmlZZYSjwEjn1akjyZHyz9z7Be126MaG8as5SIhh6l2c6aHJgEY76zngN4POm-jab6ijmVqegCPGm5m6R99GZV6_j-OFnreU-LVVWfxPQsxq8xDzXZrsMJsOwx4eTvsnM736vCbMgJBNja7VOryMG4I41qsEAhBATSkTrsluG0WaIrN-nZcsICeChU907DOiRaLKcJ",
        alt: "Urban Classic Sneakers side profile",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcav_t-hIWmPTHhq-gahJNbDJTYrtWJ29mV_o03FCvDo-MyEaGXFamvyYftnrkjIkRXgJu926pIQ_EB3Uyc5FFsXZl7tFe4Ap_A7GnlwG6oYbZia2I7wDpN-fLaVquafDo4jNMdER8wZGNyVQa7VoPYbMDkkGZgikY6HkgOUXpbqynZv70VNEP-pMmVFiuSZex9gbqCQoeoGwCBSfShG1qT2UkDhltIbG7ECEfpJcs-TleGYigyM7s",
        alt: "Urban Classic Sneakers black edition",
      },
    ],
    inStock: true,
  },
  {
    id: "prod-3",
    name: "Artisanal Strappy Heels",
    slug: "artisanal-strappy-heels",
    sku: "OLA-HEEL-01",
    category: "women",
    price: 52000,
    originalPrice: 65000,
    badge: "SALE",
    rating: 4.9,
    reviewCount: 29,
    description:
      "Architectural kitten heels featuring slender hand-rolled leather straps and cushioned footbeds. Designed for graceful confidence throughout evening soirees and festive celebrations.",
    craftStory:
      "Crafted in small batches with precision-balanced 65mm heels, offering superior posture support and zero foot fatigue.",
    material: "Nude lambskin leather, polished natural resin heel",
    colors: [
      { name: "Nude Beige", hex: "#D2B48C" },
      { name: "Espresso", hex: "#231812" },
    ],
    sizes: ["37", "38", "39", "40", "41"],
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgXGvFpMk4WjC2HJxINRFMVJon4DnQglwBu1tlekQp3ecNlXVVfgsANZJp_dTssLUWDFJgcDUk67uC16XXD6jAZwZ56ke6iAHzXBEQTPQUrIlerpsfIQp6H6I11na5QPJY-nNITvd5CDeKBIkXV0smZnsGDvfk6BPFUYnFd6Cg_Nkf6jcOLHTeERLFHUAgdBXeINeb8rI6jGeDDGGpsgZSVIolNQ9WoHJ0eGF8J6THJTvHiUx14RGl",
        alt: "Artisanal Strappy Heels on polished sandstone",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxQ0DE0i619bvY0jsucWtPDhxk_5Zx86kYdBUV9E7MpZHdybzSGsRl5FIKZQP24K-1qDi6iIo4YeRGPZdF4NnRPFgbsCUr61tEEYvi7aZwOzwH15QAmPtqui0X4e8Yh3227tEajh7ZaS2iyImtAwAJHItxykToFR1hdR0NKgUaeqX-I9rKMeeAcfJ9tiAbIZyoarWi8osXelSg5ryObt2n4CCT65yQkDdJ9pu_jeMp2fScfOdx6fxt",
        alt: "Artisanal Strappy Heels stiletto toe view",
      },
    ],
    inStock: true,
  },
  {
    id: "prod-4",
    name: "Minimalist Court Sneakers",
    slug: "minimalist-court-sneakers",
    sku: "OLA-SNK-02",
    category: "sneakers",
    price: 62000,
    rating: 4.7,
    reviewCount: 22,
    description:
      "Sleek ivory leather low-profile court sneakers with contrasting sand-toned gum soles. Bathed in timeless styling, built for the discerning commuter.",
    craftStory:
      "Hand-lasted with breathable perforations and soft goatskin lining that prevents moisture buildup in tropical climates.",
    material: "Calfskin upper, goatskin lining, natural latex insole",
    colors: [
      { name: "Ivory / Sand", hex: "#FAF0E6" },
      { name: "Cream White", hex: "#FCF9F4" },
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD84GPHCz_npcPHBqt-WsJ8lm8JPpHlODqzqLdmWbFlhaR4pYiQbBLvFqCq_uMES9htZjWFfkvYn4tBTa22PIw7NZwLtoBHzzrLy5l6MTolo7Vq7h_HlsYAgHu1SRS_V1ozsx6iA1NJywBBaFk1F3piU9FTjRuvYHWJNAA9nCura7X1WnOyZVXiIKEKb74LeAST1Cmi_TlJumlmZHhOO6EWCSS9WMtSk6NT-FO8hztTO60YuUvn6AWh",
        alt: "Minimalist Court Sneakers side profile view",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaXjj5SrGcVSj5-XTcAu-Z6Yw9HDn8PSgQx4hfe9pq-vYV2a7JtDhY_b5c4-GKRyGAcmNLE15ATUjl3KzL8LJRXmzozWHe6WZINGde12m2HkwxS_00U0BIapSop6WPI0d_hzE799OjJ3R4gMJLrmf9FrxvMmHiGM5DlUY2x98UJDnVHOE_1MEHUCeszW7wkp5BXwlOTnoJXtqNJA28xdRRFD8YuR4STZ0_aI0tgZvidkU6-X1_vLpm",
        alt: "Minimalist Court Sneakers top view",
      },
    ],
    inStock: true,
  },
  {
    id: "prod-5",
    name: "Full-Grain Slide Sandals",
    slug: "full-grain-slide-sandals",
    sku: "OLA-SND-01",
    category: "sandals",
    price: 35000,
    rating: 4.8,
    reviewCount: 31,
    description:
      "Sculpted wide-strap leather slides with an anatomical footbed. Perfect for relaxed weekend lounging, island getaways, or casual resort gatherings.",
    craftStory:
      "The contoured footbed is wrapped in soft milled leather with arch support tailored for comfort on heated stone and sand.",
    material: "Milled full-grain leather, high-density lightweight EVA sole",
    colors: [
      { name: "Onyx Black", hex: "#1C1C19" },
      { name: "Warm Sienna", hex: "#9E7151" },
    ],
    sizes: ["40", "41", "42", "43", "44"],
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA12A1dTzh6R0vdpq6T-phemKU-sMtXiEqBXt63Y8gwx8SADBW8FevK4DZnIVeRwkiO0wB0ctoPLZ7qPT19xTqmHTNWjre24KILficrTjsIdMH0cXuJI9ebN_gbbbKwfzMMAbDtWzLSrps-z-HRvEpF1N686crpUMOAVwcU1pVHoLp15lKPpG6z9X9FOTYONc6OKlWw4WZ79S_A87MRVyv3fnaNxHP5BjdXViSO4PkGl3uoEIKhcgT_",
        alt: "Full-Grain Slide Sandals in black leather",
      },
    ],
    inStock: true,
  },
  {
    id: "prod-6",
    name: "Wholecut Oxford Dress Shoes",
    slug: "wholecut-oxford-shoes",
    sku: "OLA-OXF-01",
    category: "formal",
    price: 78000,
    badge: "BESPOKE",
    rating: 5.0,
    reviewCount: 19,
    description:
      "The pinnacle of bespoke shoemaking. Cut from a single unbroken piece of premium burnished calfskin with zero seam lines along the body. Polished to a mirror sheen on the toe cap.",
    craftStory:
      "Hand-burnished over 7 days in our Lagos atelier using imported beeswax and carnauba wax to achieve a museum-grade antiqued patina.",
    material: "Single-piece French calfskin, Goodyear-welted leather sole",
    colors: [
      { name: "Mahogany Brown", hex: "#4A2E1B" },
      { name: "Midnight Black", hex: "#111111" },
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjMlE2oPzoe1-yNO-MoXQo1RfAsQ9ay-xciHXiZI08Tdxg5x3XJhP2vu4AGOhJ1B75MMSA6zlVdXrRwekSDUrr24uWUiB4hxxaGQQ4aP-6m09NrxjO3QFfGnymBU6t1Q45ZADuqB2FRkaCxFaTK90P2vVR98gPHCMZ3X3IYZRIvFl3f6GXcRoYcZ8dgK6rciieabhtIavaDvBFHg0fxPHc-CL17CpDJfSPdBTXWVnEKe9oqkOmSiH1",
        alt: "Wholecut Oxford Shoes in mahogany leather",
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_5Bmbm9gymzmWOSi8Um_7F6tLGjJQNqasdEni98WwhyPEqtTabxh_IW2ftXM4Xvb600TF1CX4XESV9uD_KLpD8rljs9UT7MFu-2BX2FrIeL8C_5fk4ILi3cLjSNlTWgJ-iVa8fynvEBBkNhHsRBjLUGzTN-vLpdrvhLRa9ysswnMWmk9QmmIsjVAxvEbLCP-GNJ0099RmpiWBlKLBd85FuHdz5JzGmroNRlE-5tavMdu56yGA8PN5",
        alt: "Wholecut Oxford Shoes resting on stone",
      },
    ],
    inStock: true,
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return PRODUCTS;
  if (category === "sale") return PRODUCTS.filter((p) => p.badge === "SALE");
  if (category === "new") return PRODUCTS.filter((p) => p.badge === "NEW");
  return PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function formatPrice(naira: number): string {
  return `₦${naira.toLocaleString("en-NG")}`;
}
