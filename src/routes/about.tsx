import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Mail,
  Store,
  Package,
  Scissors,
  Droplet,
  ExternalLink,
  Navigation,
  HeartHandshake,
  Truck,
  MessageCircle,
  Phone,
} from "lucide-react";
import productsImage from "@/assets/products.jpg";
import showroomImg from "@/assets/showroom.jpg";
import cosmeticsDisplayImg from "@/assets/cosmetics_display.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Us | Sachin Agencies — Ganpati Peth, Sangli (Est. 1990)",
      },
      {
        name: "description",
        content:
          "Established in 1990, Sachin Agencies at Shree Chambers, Ganpati Peth, Sangli is a top player in Beauty Product Dealers, Cosmetic Wholesalers, Salon Equipment & Hair Oil Manufacturing.",
      },
      {
        property: "og:title",
        content: "About Sachin Agencies — Ganpati Peth, Sangli (Est. 1990)",
      },
      {
        property: "og:description",
        content:
          "Leading Beauty Product Dealers & Cosmetic Wholesalers in Sangli. 36+ Years of Trust & Quality at Shree Chambers, Ganpati Peth.",
      },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { value: "1990", label: "Year Established", sub: "36+ Years of Excellence" },
  { value: "10,000+", label: "Happy Patrons", sub: "Retailers & Salon Owners" },
  { value: "100%", label: "Genuine Products", sub: "Direct Certified Supply" },
  { value: "6+", label: "Specialized Categories", sub: "Wholesale to Manufacturing" },
];

const CATEGORIES = [
  {
    icon: Sparkles,
    title: "Cosmetic Dealers & Distributors",
    desc: "Supplying premier brands of skincare, makeup, and high-performance cosmetics to retail shops and individual patrons.",
    badge: "Dealer Network",
  },
  {
    icon: Package,
    title: "Cosmetic Wholesalers",
    desc: "Bulk wholesale pricing and reliable supply chains for beauty retailers, salons, and commercial beauty academies.",
    badge: "Wholesale Hub",
  },
  {
    icon: Droplet,
    title: "Hair Oil Manufacturers",
    desc: "Crafting nourishing, herbal and therapeutic hair oil formulations designed for hair strength, shine, and scalp health.",
    badge: "Manufacturing",
  },
  {
    icon: Scissors,
    title: "Salon Chair & Equipment Dealers",
    desc: "Comprehensive salon infrastructure including ergonomic styling chairs, facial beds, shampoo stations, and salon tools.",
    badge: "Salon Solutions",
  },
  {
    icon: ShieldCheck,
    title: "Beauty Product Dealers",
    desc: "Curated portfolio of certified personal care, professional makeup, and dermatological essentials.",
    badge: "100% Authentic",
  },
  {
    icon: Store,
    title: "One-Stop Beauty Hub",
    desc: "Centralized destination in Sangli servicing everyday shoppers, bridal artists, and salon entrepreneurs under one roof.",
    badge: "Full Spectrum",
  },
];

const HIGHLIGHTS = [
  {
    title: "Customer-First Philosophy",
    text: "The core belief that customer satisfaction is as important as our products and services has helped us garner a loyal base that grows every day.",
  },
  {
    title: "Dedicated & Courteous Team",
    text: "Our knowledgeable staff is committed to providing prompt assistance, answering every query, and guiding you to the right formulations.",
  },
  {
    title: "Effortless Accessibility",
    text: "Prominently located at Tanaji Chowk, Ganpati Peth Main Road, near Suresh Light House with seamless transport options available.",
  },
  {
    title: "Vision For Expansion",
    text: "Continuously growing our portfolio of products and services to cater to an expanding client base across Sangli and Maharashtra.",
  },
];

function AboutPage() {
  const [inquirySent, setInquirySent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setInquirySent(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#181614] overflow-x-hidden">
      {/* 1. Grand Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#16120D] via-[#201A13] to-[#120E0A] px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 text-white shadow-2xl">
        {/* Golden Ambient Glows */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Established Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#1F1810]/80 px-4 py-1.5 backdrop-blur-md shadow-sm">
            <Award className="h-4 w-4 text-[#FFD54F]" />
            <span className="eyebrow text-[0.62rem] sm:text-xs font-bold tracking-[0.2em] text-[#FFD54F]">
              ESTABLISHED IN 1990 · 36+ YEARS OF TRUST
            </span>
          </div>

          <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-wide text-[#FFFDF8] leading-tight">
            Sachin Agencies
            <span className="block font-normal text-[#D4AF37] text-2xl sm:text-4xl md:text-5xl mt-2">
              Ganpati Peth, Sangli
            </span>
          </h1>

          <p className="mx-auto mt-5 sm:mt-6 max-w-3xl text-sm sm:text-lg leading-relaxed text-[#D8CCA8]">
            One of the leading businesses in Beauty Product Dealers, Cosmetic Wholesalers, Salon Equipment &amp; Hair Oil Manufacturers in Sangli, Maharashtra.
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {STATS.map((s, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#2A2116]/80 to-[#18130D]/90 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-1 shadow-lg"
              >
                <p className="font-display text-2xl sm:text-4xl font-bold text-[#FFD54F] group-hover:scale-105 transition-transform">
                  {s.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FFFDF8]">
                  {s.label}
                </p>
                <p className="text-[0.7rem] sm:text-xs text-[#A89C8A] mt-0.5">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 🏬 ABOUT OUR SHOP & WHOLESALE SHOWROOM (Authentic Shop Photo, Clean, Animated & Professional) */}
      <section id="about-shop" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF6EE] py-16 sm:py-24 border-b border-[#E8DEC9]">
        {/* Subtle Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl animate-ambient-orb" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#FFD54F]/10 blur-3xl animate-ambient-orb" style={{ animationDelay: "-3s" }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left 5 Cols: Authentic, Clean Shop Photo with Smooth Hover Animation */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border-2 border-[#D4AF37]/40 bg-white p-3 shadow-xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#141210]">
                  <img
                    src={showroomImg}
                    alt="Sachin Agencies Cosmetics & Beauty Retail Showroom in Ganpati Peth Sangli"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Clean subtle top status badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/65 px-3 py-1 text-xs font-semibold text-[#FFE8B3] backdrop-blur-md shadow-sm transition-transform group-hover:scale-105">
                      <Building2 className="h-3.5 w-3.5 text-[#FFD54F]" />
                      <span>Shree Chambers · 1st Floor</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-black/65 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>Open Daily</span>
                    </span>
                  </div>

                  {/* Clean bottom showroom tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] font-bold text-[#FFD54F] tracking-widest uppercase">
                      Ganpati Peth Main Road, Sangli
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-[#FFFDF8] mt-0.5">
                      Sachin Agencies Store
                    </h3>
                    <p className="text-xs text-[#EAE2D5] font-normal mt-0.5">
                      Est. 1990 · 36+ Years of Wholesale &amp; Retail Trust
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Clean Editorial Text Presentation with Animated Interactions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF4E6] border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#8C6418] shadow-2xs transition-all hover:border-[#D4AF37]">
                  <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
                  <span>VISIT OUR SHOWROOM IN SANGLI · EST. 1990</span>
                </div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium text-[#181614] leading-tight">
                  Everything for Beauty Parlours, Salons &amp; Retail Stores
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#5C5449] leading-relaxed">
                  Located at the commercial center of <strong className="text-[#181614] font-semibold">Ganpati Peth, Sangli</strong>, Sachin Agencies has been the go-to wholesale distributor and retail store for salon owners, bridal makeup artists, and everyday beauty consumers for over <strong className="text-[#181614] font-semibold">36 years</strong>.
                </p>
              </div>

              {/* Clean Animated Feature Narrative Points */}
              <div className="space-y-2 border-y border-[#E8DEC9] py-4">
                <div className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-[#FAF4E6] hover:translate-x-1.5 cursor-default">
                  <span className="text-[#D4AF37] font-bold mt-0.5 transition-transform duration-300 group-hover/item:scale-125">✦</span>
                  <p className="text-xs sm:text-sm text-[#4A4237] leading-relaxed">
                    <strong className="text-[#181614] font-bold">Shree Chambers 1st Floor Showroom:</strong> Spacious, modern store at Tanaji Chowk on Ganpati Peth Main Road showcasing comprehensive cosmetics and beauty care.
                  </p>
                </div>

                <div className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-[#FAF4E6] hover:translate-x-1.5 cursor-default">
                  <span className="text-[#D4AF37] font-bold mt-0.5 transition-transform duration-300 group-hover/item:scale-125">✦</span>
                  <p className="text-xs sm:text-sm text-[#4A4237] leading-relaxed">
                    <strong className="text-[#181614] font-bold">Wholesale &amp; Bulk Dealership Rates:</strong> Direct manufacturer pricing, special parlour volume discounts, and instant same-day billing for salons and retail shops.
                  </p>
                </div>

                <div className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-[#FAF4E6] hover:translate-x-1.5 cursor-default">
                  <span className="text-[#D4AF37] font-bold mt-0.5 transition-transform duration-300 group-hover/item:scale-125">✦</span>
                  <p className="text-xs sm:text-sm text-[#4A4237] leading-relaxed">
                    <strong className="text-[#181614] font-bold">Live Salon Equipment Display:</strong> Inspect, test, and choose hydraulic styling chairs, facial beds, hair steamers, and beauty apparatus in person.
                  </p>
                </div>

                <div className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-[#FAF4E6] hover:translate-x-1.5 cursor-default">
                  <span className="text-[#D4AF37] font-bold mt-0.5 transition-transform duration-300 group-hover/item:scale-125">✦</span>
                  <p className="text-xs sm:text-sm text-[#4A4237] leading-relaxed">
                    <strong className="text-[#181614] font-bold">100% Genuine Certified Stock:</strong> Official dealer inventory from Garnier, L'Oréal Paris, Maybelline, Lakmé, Matrix Biolage, Streax, and NIVEA with verified original seals.
                  </p>
                </div>
              </div>

              {/* Store Location & Timings Clean Information */}
              <div className="space-y-2 text-xs sm:text-sm text-[#5C5449]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong className="text-[#181614]">Address:</strong> Shree Chambers, 1st Floor, Near Suresh Light House, Tanaji Chowk, Ganpati Peth, Sangli – 416416
                  </p>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-700 font-semibold">
                  <Clock className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Store Timings: Open Daily 10:00 AM to 8:30 PM (All 7 Days a Week)</span>
                </div>
              </div>

              {/* Action Buttons with Interactive Micro-Animations */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Sachin+Agencies+Ganpati+Peth+Sangli"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] px-5 py-3 text-xs font-bold text-[#14100C] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919422041724?text=Hello%20Sachin%20Agencies%2C%20I%20would%20like%20to%20know%20more%20about%20your%20shop%20and%20wholesale%20parlour%20products%20in%20Sangli."
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-800 shadow-2xs transition-all duration-300 hover:bg-emerald-100 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 🌟 MEET OUR FOUNDER (Dignified Portrait & Leadership Vision) */}
      <section id="founder-story" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#F7F3EB] py-16 sm:py-24 border-b border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left 5 Cols: Dignified Founder Portrait Photo */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#D4AF37]/50 bg-white p-3 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#FAF8F5]">
                  <img
                    src={founderImg}
                    alt="Founder & Proprietor — Sachin Agencies Sangli"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-103"
                  />
                  {/* Subtle top badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-white/90 px-3 py-1 text-xs font-bold text-[#8C6418] shadow-sm backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5 text-[#8C6418]" />
                      <span>Founder &amp; Proprietor</span>
                    </span>
                    <span className="rounded-full bg-[#181614]/85 px-3 py-1 text-xs font-bold text-[#FFE8B3] backdrop-blur-md shadow-sm">
                      Est. 1990
                    </span>
                  </div>
                </div>

                {/* Founder Caption Below Photo */}
                <div className="mt-4 p-2 text-center">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#181614]">
                    Founder &amp; Managing Director
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6418] tracking-wider uppercase mt-0.5">
                    Sachin Agencies · Ganpati Peth, Sangli
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Concise, Impactful & Highly Attractive Founder Information */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FAF4E6] px-3.5 py-1 text-xs font-bold text-[#8C6418]">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  <span>36+ YEARS OF TRUST &amp; LEADERSHIP IN SANGLI</span>
                </div>

                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#181614] leading-tight">
                  Meet Our Founder &amp; Story of Trust
                  <span className="block font-normal text-[#9E782F] text-2xl sm:text-3xl lg:text-4xl mt-1">
                    Sachin Agencies — Ganpati Peth, Sangli
                  </span>
                </h2>
              </div>

              {/* Founder Statement Quote */}
              <div className="rounded-2xl border-l-4 border-[#D4AF37] bg-[#FAF6EE] p-5 text-sm sm:text-base leading-relaxed text-[#4A4237] italic shadow-xs">
                “Customer satisfaction is as important as our products and services. Over our 36+ year journey since 1990, our dedicated team remains focused on providing 100% genuine cosmetics, prompt assistance, and direct dealership wholesale rates to every salon, retailer, and customer in Sangli.”
              </div>

              {/* Key Quick Fact Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#5C5449]">
                <div className="flex items-start gap-3 rounded-xl border border-[#E8DEC9] bg-white p-3.5 shadow-2xs">
                  <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181614] font-semibold">Location &amp; Showroom:</strong>
                    <span>Ganpati Peth Main Road, Tanaji Chowk, Near Suresh Light House, Sangli.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#E8DEC9] bg-white p-3.5 shadow-2xs">
                  <Store className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181614] font-semibold">Specialized Offerings:</strong>
                    <span>Cosmetics Wholesale, Beauty Dealers, Salon Equipment &amp; Hair Oils.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#E8DEC9] bg-white p-3.5 shadow-2xs">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181614] font-semibold">Showroom Timings:</strong>
                    <span>10:00 AM – 8:30 PM (Open All 7 Days a Week).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#E8DEC9] bg-white p-3.5 shadow-2xs">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181614] font-semibold">Prompt Staff Service:</strong>
                    <span>Friendly in-store consultation &amp; seamless payments (UPI/Cards/Cash).</span>
                  </div>
                </div>
              </div>

              {/* 4 Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-xl border border-[#E8DEC9] bg-white p-3 text-center shadow-2xs">
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#9E782F]">1990</p>
                  <p className="text-[0.62rem] sm:text-xs text-[#6B6254] font-semibold">Est. Year</p>
                </div>
                <div className="rounded-xl border border-[#E8DEC9] bg-white p-3 text-center shadow-2xs">
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#9E782F]">10,000+</p>
                  <p className="text-[0.62rem] sm:text-xs text-[#6B6254] font-semibold">Happy Patrons</p>
                </div>
                <div className="rounded-xl border border-[#E8DEC9] bg-white p-3 text-center shadow-2xs">
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#9E782F]">100%</p>
                  <p className="text-[0.62rem] sm:text-xs text-[#6B6254] font-semibold">Genuine Brands</p>
                </div>
                <div className="rounded-xl border border-[#E8DEC9] bg-white p-3 text-center shadow-2xs">
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#9E782F]">36+ Yrs</p>
                  <p className="text-[0.62rem] sm:text-xs text-[#6B6254] font-semibold">Market Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products & Services Spectrum (From Photo) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F7F3EB] to-[#FAF8F5] border-b border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2">
              <span className="text-primary text-xs">✦</span>
              <span className="eyebrow text-xs font-bold text-primary tracking-[0.2em]">
                PRODUCTS &amp; SERVICES OFFERED
              </span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#181614]">
              Complete Beauty, Cosmetic &amp; Salon Solutions
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#665D50] leading-relaxed">
              Sachin Agencies in Ganpati Peth offers a wide spectrum of products and services to cater to the diverse requirements of beauty retailers, salon professionals, and retail consumers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#E8DEC9] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#FAF4E6] text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-[#FAF4E6] px-3 py-0.5 text-[0.68rem] font-bold text-[#8C6418] border border-[#D4AF37]/20">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-[#181614] group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#665D50] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EAE1]">
                    <Link
                      to="/shop"
                      className="flex items-center justify-between text-xs font-semibold text-primary group-hover:underline"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Store Location & Address Spotlight (Ultra-Attractive & Professional Luxury Design) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#FAF6EE] py-20 sm:py-28 border-y border-[#E8DEC9]" id="location">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute -top-28 left-1/4 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/12 blur-3xl animate-ambient-orb" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#FFD54F]/10 blur-3xl animate-ambient-orb" style={{ animationDelay: "-3s" }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white/90 px-4 py-1 text-xs font-bold text-[#8C6418] shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="eyebrow tracking-[0.2em] uppercase">SANGLI HEADQUARTERS &amp; SHOWROOM</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-light text-[#181614] leading-tight">
              Visit Our Store at{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#B38728] via-[#F5D77F] to-[#AA771C] bg-clip-text text-transparent drop-shadow-sm">
                Ganpati Peth
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-base text-[#5C5449] leading-relaxed">
              Centrally situated at Shree Chambers, Tanaji Chowk, Ganpati Peth Main Road. Effortless access, full salon displays &amp; wholesale counter in Sangli.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left 6 Cols: Luxury Address & Commute Card */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border-2 border-[#D4AF37]/40 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 bg-[#D4AF37]/10 rounded-full blur-2xl" />

              <div>
                <div className="flex items-center justify-between border-b border-[#F5EFE6] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#181614] to-[#2A2218] text-[#FFD54F] shadow-md">
                      <Store className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="eyebrow text-[0.6rem] font-bold text-primary tracking-wider uppercase">
                        STORE &amp; SHOWROOM
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#181614]">
                        Sachin Agencies
                      </h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Open Daily</span>
                  </span>
                </div>

                {/* Highlighted Address Box with Gold Pearl Sheen */}
                <div className="mt-6 rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8C6418] uppercase tracking-wider mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Complete Store Address:</span>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-[#181614] leading-relaxed">
                    <strong className="text-lg sm:text-xl font-bold text-[#181614]">Shree Chambers, First Floor,</strong>
                    <br />
                    <span className="text-[#4A4237]">Near Suresh Light House,</span>
                    <br />
                    <span className="text-[#4A4237]">Ganpati Peth Main Road, Tanaji Chouk,</span>
                    <br />
                    <span className="font-bold text-primary">Ganpati Peth, Sangli – 416416, Maharashtra</span>
                  </p>
                </div>

                {/* 4 Clean Commute & Store Highlights Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#5C5449]">
                  <div className="flex items-start gap-2.5 rounded-xl border border-[#E8DEC9] bg-[#FAF8F5] p-3">
                    <Navigation className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#181614] font-bold">Key Landmark</strong>
                      <span>Near Suresh Light House &amp; Tanaji Chowk</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-[#E8DEC9] bg-[#FAF8F5] p-3">
                    <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#181614] font-bold">Store Hours</strong>
                      <span>10:00 AM – 8:30 PM (Daily)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-[#E8DEC9] bg-[#FAF8F5] p-3">
                    <Package className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#181614] font-bold">Wholesale Counter</strong>
                      <span>Same-day billing &amp; pickup</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-[#E8DEC9] bg-[#FAF8F5] p-3">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#181614] font-bold">100% Genuine</strong>
                      <span>Certified brand stockists</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Sachin+Agencies+Ganpati+Peth+Sangli"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow luxury-btn-shine flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] px-5 py-3.5 text-xs font-bold text-[#14100C] shadow-md transition-transform hover:scale-105"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/brands"
                  className="eyebrow inline-flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/60 bg-white px-5 py-3.5 text-xs font-bold text-[#8C6418] shadow-2xs transition-all hover:bg-[#FAF4E6]"
                >
                  <span>Explore Brands</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: The Sachin Agencies Promise */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-[#E8DEC9] bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F5] to-[#F5ECE0] p-6 sm:p-8 shadow-xl">
              <div>
                <div className="flex items-center gap-3 border-b border-[#E8DEC9] pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#181614] text-[#D4AF37] shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="eyebrow text-[0.6rem] font-bold text-primary tracking-wider uppercase">
                      SINCE 1990 · 36+ YEARS
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#181614]">
                      The Sachin Agencies Promise
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3.5">
                  {[
                    {
                      icon: HeartHandshake,
                      title: "Customer-First Philosophy",
                      desc: "The core belief that customer satisfaction is as important as our products has built lifelong relationships with salons and retail patrons.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "100% Genuine Certified Stock",
                      desc: "Direct authorized inventory from Garnier, L'Oréal, Pond's, Maybelline, Lakmé, Matrix, and Streax with original seals.",
                    },
                    {
                      icon: Package,
                      title: "Wholesale & Salon Pricing",
                      desc: "Special discounted dealership rates, instant volume billing & same-day packaging for salons across Western Maharashtra.",
                    },
                    {
                      icon: Scissors,
                      title: "Live Salon Equipment Setup",
                      desc: "Inspect hydraulic styling chairs, facial beds, hair steamers & styling apparatus in-person before purchasing.",
                    },
                  ].map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex items-start gap-3.5 rounded-2xl border border-[#E8DEC9] bg-white p-4 shadow-xs transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF4E6] border border-[#D4AF37]/40 text-[#8C6418] group-hover:bg-[#181614] group-hover:text-[#FFD54F] group-hover:border-[#181614] transition-all">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#181614] group-hover:text-primary transition-colors">
                            {p.title}
                          </h4>
                          <p className="mt-1 text-xs text-[#665D50] leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#D4AF37]/40 bg-white p-4 text-center shadow-xs">
                <p className="text-xs font-semibold text-[#8C6418]">
                  ✨ Over 10,000+ Satisfied Salons, Beauticians &amp; Retail Patrons in Sangli
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Wholesale & Patrons Contact Inquiry */}
      <section className="py-16 sm:py-24 bg-[#14100C] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#1F1810] px-4 py-1 text-xs font-bold text-[#FFD54F]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>WHOLESALE &amp; DEALER CONNECT</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-light text-[#FFFDF8]">
            Partner with Sachin Agencies
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-[#C4B8A5] leading-relaxed">
            Whether you are opening a new beauty parlour, looking for cosmetic wholesale distribution, or need custom salon furniture and hair oils — we are ready to assist you.
          </p>

          <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#201912] to-[#14100C] p-6 sm:p-10 shadow-2xl text-left max-w-2xl mx-auto">
            {inquirySent ? (
              <div className="text-center py-8 space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFD54F]">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#DDD3C2]">
                  Thank you, <strong>{name}</strong>. Our team at Ganpati Peth, Sangli will contact you promptly at <strong>{phone}</strong>.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-4 text-xs font-semibold text-[#FFD54F] hover:underline"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-[#FFD54F] mb-2">
                  Quick Inquiry / Wholesale Request
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#DDD3C2] mb-1">
                      Your Name / Business Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patil / Glamour Salon"
                      className="w-full rounded-xl border border-[#3E3426] bg-[#0E0C09] px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#FFD54F] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#DDD3C2] mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98220 12345"
                      className="w-full rounded-xl border border-[#3E3426] bg-[#0E0C09] px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#FFD54F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DDD3C2] mb-1">
                    Requirement / Products of Interest
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Tell us what you are looking for (e.g. Salon Chairs, Wholesale Cosmetics, Hair Oils...)"
                    className="w-full rounded-xl border border-[#3E3426] bg-[#0E0C09] px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-[#FFD54F] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="eyebrow luxury-btn-shine w-full rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] py-3.5 text-center text-xs font-bold text-[#14100C] shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit Wholesale Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
