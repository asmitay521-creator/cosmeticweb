import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Building2,
  ArrowRight,
  ExternalLink,
  Store,
  Scissors,
  Package,
  HeartHandshake,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      {
        title:
          "Official Beauty Brands & Dealerships | Sachin Agencies — Ganpati Peth, Sangli",
      },
      {
        name: "description",
        content:
          "Sachin Agencies Ganpati Peth, Sangli — Authorized wholesale & retail stockist for Garnier, L'Oréal Paris, Pond's, Maybelline, Lakmé, Matrix Biolage, Streax Professional, Nivea, Lotus Herbals, Biotique, VLCC, and Colorbar.",
      },
      {
        property: "og:title",
        content: "Official Beauty Brands & Dealerships — Sachin Agencies Sangli",
      },
      {
        property: "og:description",
        content:
          "Official stockist for India's leading skincare, haircare, makeup & salon professional brands in Ganpati Peth, Sangli. Established 1990.",
      },
    ],
  }),
  component: BrandsPage,
});

interface BrandItem {
  id: string;
  category: string;
  department: "Skincare" | "Haircare" | "Makeup" | "Salon Professional";
  name: string;
  subTitle?: string;
  accentColor: string;
  bgGlow: string;
  badge: string;
  tagline: string;
  signature: string[];
}

const BEAUTY_BRANDS: BrandItem[] = [
  {
    id: "garnier",
    category: "SKINCARE & HAIR EXPERT",
    department: "Skincare",
    name: "GARNIER",
    subTitle: "SKIN NATURALS",
    accentColor: "#588D16",
    bgGlow: "rgba(88, 141, 22, 0.18)",
    badge: "OFFICIAL STOCKIST",
    tagline: "Bright Complete 30x Vitamin C, Micellar Cleansing Water & Hair Colors",
    signature: ["30x Vitamin C Serum", "Micellar Cleansing Water"],
  },
  {
    id: "loreal",
    category: "PARISIAN LUXURY BEAUTY",
    department: "Skincare",
    name: "L'ORÉAL",
    subTitle: "PARIS",
    accentColor: "#C59B27",
    bgGlow: "rgba(197, 155, 39, 0.22)",
    badge: "DIRECT DEALER",
    tagline: "Revitalift 1.5% Hyaluronic Acid, Lash Paradise & X-Tenso Salon Care",
    signature: ["Revitalift 1.5% Hyaluron", "Lash Paradise Mascara"],
  },
  {
    id: "ponds",
    category: "HYDRATION & GLOW ESSENTIALS",
    department: "Skincare",
    name: "POND'S",
    subTitle: "SKIN INSTITUTE",
    accentColor: "#0A84FF",
    bgGlow: "rgba(10, 132, 255, 0.18)",
    badge: "100% ORIGINAL",
    tagline: "Super Light Gel 24H Hydration, Bright Beauty & Deep Cold Creams",
    signature: ["Super Light Gel 24H", "Bright Beauty Creams"],
  },
  {
    id: "maybelline",
    category: "NEW YORK COUTURE MAKEUP",
    department: "Makeup",
    name: "MAYBELLINE",
    subTitle: "NEW YORK",
    accentColor: "#E11D48",
    bgGlow: "rgba(225, 29, 72, 0.18)",
    badge: "TOP BESTSELLER",
    tagline: "Fit Me Matte+Poreless Foundation, SuperStay Liquid Lipsticks & Colossal",
    signature: ["Fit Me Matte Foundation", "SuperStay Liquid Lipstick"],
  },
  {
    id: "lakme",
    category: "INDIA'S ICONIC BEAUTY",
    department: "Makeup",
    name: "LAKMÉ",
    subTitle: "BEAUTY REINVENTED",
    accentColor: "#9A3412",
    bgGlow: "rgba(154, 52, 18, 0.18)",
    badge: "OFFICIAL PARTNER",
    tagline: "Eyeconic Kajal, 9 to 5 Complexion Care CC Cream & Absolute Lipsticks",
    signature: ["Eyeconic 24H Kajal", "9 to 5 CC Foundation"],
  },
  {
    id: "matrix",
    category: "PROFESSIONAL SALON CARE",
    department: "Salon Professional",
    name: "MATRIX",
    subTitle: "BIOLAGE & OPTI.CARE",
    accentColor: "#059669",
    bgGlow: "rgba(5, 150, 105, 0.18)",
    badge: "SALON WHOLESALE",
    tagline: "Biolage Smoothproof Serums, Opti.Care Straightening & Hair Spa Masks",
    signature: ["Biolage 6-in-1 Serum", "Opti.Care Shampoos"],
  },
  {
    id: "streax",
    category: "HAIR STYLING & SPA",
    department: "Haircare",
    name: "streax",
    subTitle: "PROFESSIONAL",
    accentColor: "#7C3AED",
    bgGlow: "rgba(124, 58, 237, 0.18)",
    badge: "WHOLESALE STOCKIST",
    tagline: "Walnut Oil Gloss Serum, Canvoline Straightening & Hair Colour Creams",
    signature: ["Walnut Extract Serum", "Canvoline Hair Spa"],
  },
  {
    id: "nivea",
    category: "DERMATOLOGICAL SKINCARE",
    department: "Skincare",
    name: "NIVEA",
    subTitle: "GERMANY",
    accentColor: "#0032A0",
    bgGlow: "rgba(0, 50, 160, 0.20)",
    badge: "100% GENUINE",
    tagline: "Nivea Soft Light Moisturiser, Deep Moisture Body Milk & Lip Care Balms",
    signature: ["Nivea Soft Vitamin E", "Nourishing Body Milk"],
  },
  {
    id: "lotus",
    category: "NATURAL HERBAL RADIANCE",
    department: "Skincare",
    name: "LOTUS",
    subTitle: "HERBALS",
    accentColor: "#D97706",
    bgGlow: "rgba(217, 119, 6, 0.18)",
    badge: "AUTHENTIC STOCK",
    tagline: "Safe Sun Matte UV Gel, WhiteGlow Brightening Serums & Facial Kits",
    signature: ["Safe Sun Matte Gel", "WhiteGlow Serum"],
  },
  {
    id: "biotique",
    category: "AYURVEDIC BOTANICALS",
    department: "Skincare",
    name: "BIOTIQUE",
    subTitle: "ADVANCED AYURVEDA",
    accentColor: "#15803D",
    bgGlow: "rgba(21, 128, 61, 0.18)",
    badge: "100% AYURVEDIC",
    tagline: "Bio Kelp Protein Hair Serums, Bio Papaya Exfoliating Scrubs & Nectar",
    signature: ["Bio Kelp Hair Serum", "Bio Papaya Glow Scrub"],
  },
  {
    id: "vlcc",
    category: "SALON FACIALS & WELLNESS",
    department: "Salon Professional",
    name: "VLCC",
    subTitle: "PERSONAL CARE",
    accentColor: "#EA580C",
    bgGlow: "rgba(234, 88, 12, 0.18)",
    badge: "SALON PARTNER",
    tagline: "Gold Facial Parlour Kits, Insta Glow Bleach & Ayurvedic Hair Oils",
    signature: ["Gold Parlour Facial Kit", "Insta Glow Bleach"],
  },
  {
    id: "colorbar",
    category: "CRUELTY-FREE GLAMOUR",
    department: "Makeup",
    name: "COLORBAR",
    subTitle: "USA · INDIA",
    accentColor: "#DB2777",
    bgGlow: "rgba(219, 39, 119, 0.18)",
    badge: "OFFICIAL STOCK",
    tagline: "Flawless Finish Primers, Sinful Matte Lipsticks & Luxury Nail Enamels",
    signature: ["Flawless Face Primer", "Sinful Matte Lipstick"],
  },
];

const CATEGORY_TABS = [
  "All Brands",
  "Skincare",
  "Haircare",
  "Makeup",
  "Salon Professional",
] as const;

function BrandsPage() {
  const [activeTab, setActiveTab] = useState<string>("All Brands");

  const filteredBrands = BEAUTY_BRANDS.filter(
    (b) => activeTab === "All Brands" || b.department === activeTab
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181614] overflow-x-hidden relative">
      {/* 1. Header / Hero Section (Luxury Cosmetics & Beauty Theme) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20 text-center border-b border-[#E8DEC9]">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/15 blur-3xl animate-ambient-orb" />
        <div
          className="pointer-events-none absolute top-1/3 right-1/4 h-[320px] w-[320px] rounded-full bg-[#F59E0B]/10 blur-3xl animate-ambient-orb"
          style={{ animationDelay: "-4s" }}
        />
        <div className="pointer-events-none absolute inset-0 tech-dot-grid opacity-50" />

        <div className="relative mx-auto max-w-4xl z-10 animate-fade-up">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md transition-transform duration-300 hover:scale-105">
            <Sparkles className="h-4 w-4 text-[#D4AF37] animate-pulse" />
            <span className="eyebrow text-[0.62rem] sm:text-xs font-bold tracking-[0.22em] text-[#8C6418]">
              SACHIN AGENCIES · OFFICIAL BEAUTY STOCKIST
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 sm:mt-7 font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#141210] leading-[1.12]">
            World's Most Loved{" "}
            <span className="relative inline-block font-normal bg-gradient-to-r from-[#B38728] via-[#FBF5B7] via-50% to-[#AA771C] bg-clip-text text-transparent drop-shadow-sm">
              Beauty Brands
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base leading-relaxed text-[#5C5449] font-normal">
            Direct wholesale &amp; retail distributor for authentic skincare, haircare, professional salon treatments, and makeup in Ganpati Peth, Sangli.
          </p>

          {/* Sachin Agencies Credential Ribbon */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-[0.72rem] sm:text-xs text-[#5C5449] font-semibold">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-xs border border-[#E8DEC9] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:shadow-sm">
              <Building2 className="h-4 w-4 text-[#C99726]" />
              <span>Est. 1990 · 36+ Years in Sangli</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-xs border border-[#E8DEC9] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% Genuine Certified Stock</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 shadow-xs border border-[#E8DEC9] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:shadow-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Shree Chambers, Ganpati Peth, Sangli</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Continuous Running Brand Ticker Ribbon */}
      <div className="border-y border-[#E8DEC9] bg-[#14100C] text-[#FFE8B3] py-3.5 overflow-hidden relative shadow-inner">
        <div className="animate-marquee-continuous flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wider uppercase">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#588D16]">●</span> GARNIER
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#C59B27]">●</span> L'ORÉAL PARIS
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#0A84FF]">●</span> POND'S
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#E11D48]">●</span> MAYBELLINE NEW YORK
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#9A3412]">●</span> LAKMÉ
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#059669]">●</span> MATRIX BIOLAGE
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#7C3AED]">●</span> STREAX PROFESSIONAL
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#0032A0]">●</span> NIVEA
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#D97706]">●</span> LOTUS HERBALS
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#15803D]">●</span> BIOTIQUE
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#EA580C]">●</span> VLCC
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#DB2777]">●</span> COLORBAR
              </span>
              <span className="text-[#D4AF37]">✦</span>
              <span className="text-[#FFE8B3] bg-[#2A2016] px-3 py-1 rounded-full text-[0.7rem] font-bold border border-[#D4AF37]/40">
                100% GENUINE CERTIFIED STOCK · WHOLESALE RATES
              </span>
              <span className="text-[#D4AF37]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Interactive Animated Beauty Brand Showcase */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12">
            <span className="eyebrow text-[0.62rem] sm:text-xs font-bold text-[#8C6418] tracking-[0.2em] uppercase">
              Curated Beauty Catalog
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#181614] font-medium mt-1">
              Explore Our Partner Formulations
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6254] mt-2 max-w-lg mx-auto">
              Select any category tab or brand card to view specialized products and wholesale pricing available at Sachin Agencies Sangli.
            </p>

            {/* Interactive Category Filter Tabs */}
            <div className="mt-8 flex overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center gap-2">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`eyebrow shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#181614] text-[#FFE8B3] shadow-md scale-105"
                      : "border border-[#E8DEC9] bg-white text-[#5C5449] hover:border-[#D4AF37] hover:text-[#181614]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Animated 12 Brand Cards Grid */}
          <div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 animate-in fade-in duration-400"
          >
            {filteredBrands.map((brand, index) => (
              <div
                key={brand.id}
                style={{ animationDelay: `${index * 45}ms` }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E8DEC9] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.02] hover:border-[#D4AF37] hover:shadow-[0_22px_45px_rgba(212,175,55,0.22)] cursor-pointer min-h-[300px] animate-in fade-in zoom-in-95"
              >
                {/* Top Subtle Animated Gold Sheen Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Dynamic Brand Radial Ambient Glow on Hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at top center, ${brand.bgGlow} 0%, transparent 75%)`,
                  }}
                />

                {/* Card Header: Category & Department Tag */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="eyebrow text-[0.56rem] font-bold tracking-[0.16em] text-[#8C8273] uppercase transition-colors duration-300 group-hover:text-[#181614]">
                    {brand.category}
                  </span>
                  <span className="rounded-full bg-[#FAF8F5] border border-[#E8DEC9] px-2.5 py-0.5 text-[0.55rem] font-semibold text-[#8C6418] group-hover:border-[#D4AF37]/60 group-hover:bg-[#FFFDF9] transition-colors">
                    {brand.department}
                  </span>
                </div>

                {/* Center Brand Logo representation with micro-animation */}
                <div className="my-auto py-5 text-center flex flex-col items-center justify-center relative z-10">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {/* GARNIER */}
                    {brand.id === "garnier" && (
                      <div className="flex flex-col items-center">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#3A630A] drop-shadow-xs">
                          GARNIER
                        </span>
                        <span className="text-[0.52rem] font-bold tracking-[0.25em] text-[#588D16] uppercase mt-0.5">
                          SKIN NATURALS
                        </span>
                      </div>
                    )}

                    {/* L'ORÉAL PARIS */}
                    {brand.id === "loreal" && (
                      <div className="flex flex-col items-center">
                        <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider text-[#141210]">
                          L'ORÉAL
                        </span>
                        <span className="text-[0.56rem] font-serif font-bold tracking-[0.35em] text-[#C59B27] mt-0.5 uppercase">
                          PARIS
                        </span>
                      </div>
                    )}

                    {/* POND'S */}
                    {brand.id === "ponds" && (
                      <div className="flex flex-col items-center">
                        <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#0066CC]">
                          POND'S
                        </span>
                        <div className="w-8 h-[1px] bg-[#0066CC]/40 my-1" />
                        <span className="text-[0.5rem] font-sans font-medium tracking-[0.2em] text-[#6B7280] uppercase">
                          SKIN INSTITUTE
                        </span>
                      </div>
                    )}

                    {/* MAYBELLINE */}
                    {brand.id === "maybelline" && (
                      <div className="flex flex-col items-center">
                        <span className="font-sans text-xl sm:text-2xl font-black italic tracking-tighter text-[#141210]">
                          MAYBELLINE
                        </span>
                        <span className="text-[0.52rem] font-sans font-bold tracking-[0.28em] text-[#E11D48] uppercase">
                          NEW YORK
                        </span>
                      </div>
                    )}

                    {/* LAKMÉ */}
                    {brand.id === "lakme" && (
                      <div className="flex flex-col items-center">
                        <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.18em] text-[#181614]">
                          LAKMÉ
                        </span>
                        <span className="text-[0.48rem] font-sans font-bold tracking-[0.3em] text-[#9A3412] mt-0.5 uppercase">
                          BEAUTY REINVENTED
                        </span>
                      </div>
                    )}

                    {/* MATRIX BIOLAGE */}
                    {brand.id === "matrix" && (
                      <div className="flex flex-col items-center">
                        <span className="font-sans text-xl sm:text-2xl font-black tracking-widest text-[#059669]">
                          MATRIX
                        </span>
                        <span className="text-[0.52rem] font-serif italic tracking-[0.2em] text-[#065F46] font-semibold">
                          biolage &amp; opti.care
                        </span>
                      </div>
                    )}

                    {/* STREAX PROFESSIONAL */}
                    {brand.id === "streax" && (
                      <div className="flex flex-col items-center">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#7C3AED] lowercase">
                          streax
                        </span>
                        <span className="text-[0.5rem] font-sans font-black tracking-[0.28em] text-[#4C1D95] uppercase">
                          PROFESSIONAL
                        </span>
                      </div>
                    )}

                    {/* NIVEA */}
                    {brand.id === "nivea" && (
                      <div className="flex items-center justify-center">
                        <div className="rounded-lg bg-[#0032A0] px-4 py-1.5 text-white shadow-xs">
                          <span className="font-sans font-black text-lg sm:text-xl tracking-widest text-white">
                            NIVEA
                          </span>
                        </div>
                      </div>
                    )}

                    {/* LOTUS HERBALS */}
                    {brand.id === "lotus" && (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                          <span className="text-amber-500 font-bold">✿</span>
                          <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#B45309]">
                            LOTUS
                          </span>
                        </div>
                        <span className="text-[0.52rem] font-sans font-semibold tracking-[0.22em] text-[#92400E] uppercase">
                          HERBALS
                        </span>
                      </div>
                    )}

                    {/* BIOTIQUE */}
                    {brand.id === "biotique" && (
                      <div className="flex flex-col items-center">
                        <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#15803D]">
                          BIOTIQUE
                        </span>
                        <span className="text-[0.48rem] font-sans font-bold tracking-[0.25em] text-[#166534] uppercase">
                          ADVANCED AYURVEDA
                        </span>
                      </div>
                    )}

                    {/* VLCC */}
                    {brand.id === "vlcc" && (
                      <div className="flex flex-col items-center">
                        <span className="font-sans text-2xl sm:text-3xl font-black tracking-widest text-[#EA580C]">
                          VLCC
                        </span>
                        <span className="text-[0.5rem] font-sans font-bold tracking-[0.25em] text-[#9A3412] uppercase">
                          SALON &amp; WELLNESS
                        </span>
                      </div>
                    )}

                    {/* COLORBAR */}
                    {brand.id === "colorbar" && (
                      <div className="flex flex-col items-center">
                        <span className="font-sans text-xl sm:text-2xl font-black tracking-wider text-[#DB2777]">
                          COLORBAR
                        </span>
                        <span className="text-[0.5rem] font-sans font-semibold tracking-[0.25em] text-[#9D174D] uppercase">
                          USA · INDIA
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="mt-3.5 text-xs text-[#5C5449] leading-relaxed line-clamp-2 px-1">
                    {brand.tagline}
                  </p>

                  {/* 2 Signature Highlights */}
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                    {brand.signature.map((sig, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 rounded-md bg-[#FAF8F5] border border-[#E8DEC9] px-2 py-0.5 text-[0.55rem] font-medium text-[#7A6B56]"
                      >
                        <Sparkles className="h-2.5 w-2.5 text-[#D4AF37]" />
                        <span>{sig}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Live Radar Ping + Action Link */}
                <div className="pt-3.5 border-t border-[#F5EFE6] relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                      <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
                    </div>
                    <span className="eyebrow text-[0.52rem] sm:text-[0.56rem] font-bold tracking-wider text-[#8C8273] uppercase group-hover:text-primary transition-colors">
                      {brand.badge}
                    </span>
                  </div>

                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6418] hover:text-[#181614] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Products</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/shop"
              className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] px-8 py-4 text-xs font-bold text-[#14100C] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Explore Complete Beauty Catalog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Sachin Agencies Partnership & Solutions Spotlight */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] border-y border-[#E8DEC9] relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F59E0B]/08 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white px-3.5 py-1 text-xs font-bold text-[#8C6418] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>SACHIN AGENCIES · GANPATI PETH, SANGLI</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#181614] leading-tight">
                Sangli's Premier Wholesale &amp; Retail Cosmetic Hub
              </h2>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#5C5449]">
                <strong className="text-[#181614] font-semibold">Established in 1990</strong>, Sachin Agencies has been Ganpati Peth’s most trusted distributor for over 36 years. We provide salon professionals, beauty parlours, retailers, and direct customers with 100% genuine skincare, cosmetics, haircare, and commercial salon infrastructure at wholesale pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    t: "Direct Brand Dealerships",
                    d: "100% genuine products with manufacturer batch verification & original seal.",
                  },
                  {
                    t: "Wholesale & Salon Pricing",
                    d: "Special volume discounts and same-day billing for beauty parlours and retail shops.",
                  },
                  {
                    t: "Live Salon Equipment Setup",
                    d: "In-store demonstration of hydraulic salon chairs, facial beds & steamers.",
                  },
                  {
                    t: "Prime Ganpati Peth Location",
                    d: "Centrally located at Shree Chambers (1st Floor) for convenient pick-up and supply.",
                  },
                ].map((pill, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[#E8DEC9] bg-white p-3.5 shadow-2xs transition-all duration-300 hover:border-primary hover:shadow-xs hover:-translate-y-0.5"
                  >
                    <p className="text-xs font-bold text-[#181614] flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{pill.t}</span>
                    </p>
                    <p className="text-[0.75rem] text-[#6B6254] mt-1 leading-snug">
                      {pill.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Store Info Box */}
            <div className="lg:col-span-5 rounded-3xl border border-[#D4AF37]/40 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-[#D4AF37]/10 rounded-full blur-xl" />

              <div className="flex items-center gap-3 border-b border-[#F0EAE1] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#181614] text-[#FFD54F] shadow-sm">
                  <Store className="h-6 w-6" />
                </div>
                <div>
                  <span className="eyebrow text-[0.62rem] font-bold text-primary tracking-wider">
                    STORE &amp; SHOWROOM
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#181614]">
                    Sachin Agencies
                  </h3>
                </div>
              </div>

              <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-[#4A4237]">
                <p className="leading-relaxed">
                  <strong className="text-[#181614]">Address:</strong>
                  <br />
                  Shree Chambers, First Floor, Near Suresh Light House,
                  <br />
                  Ganpati Peth Main Road, Tanaji Chouk,
                  <br />
                  <span className="font-semibold text-primary">
                    Ganpati Peth, Sangli – 416416, Maharashtra
                  </span>
                </p>

                <div className="border-t border-[#F0EAE1] pt-3 flex items-center gap-2 text-emerald-600 font-semibold">
                  <Clock className="h-4 w-4" />
                  <span>Open Daily: 10:00 AM – 8:30 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex flex-col sm:flex-row gap-2.5">
                <Link
                  to="/about"
                  className="eyebrow inline-flex items-center justify-center gap-2 rounded-xl bg-[#181614] py-3 px-4 text-xs font-bold text-[#FFD54F] shadow-sm transition-all hover:bg-black active:scale-95 flex-1"
                >
                  <span>About Us</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Sachin+Agencies+Ganpati+Peth+Sangli"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-[#FAF8F5] py-3 px-4 text-xs font-bold text-[#181614] transition-all hover:border-primary active:scale-95 flex-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
