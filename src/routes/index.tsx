import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  Building2,
  Store,
  Package,
  Scissors,
  Droplet,
  ExternalLink,
  CreditCard,
  Navigation,
  Users,
  CheckCircle2,
  Truck,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PRODUCTS } from "@/lib/catalog";
import { ProductCard, SectionHead } from "@/components/ProductCard";
import hero from "@/assets/hero.jpg";
import heroMakeup from "@/assets/hero_makeup.jpg";
import serum from "@/assets/serum.jpg";
import products from "@/assets/products.jpg";
import model2 from "@/assets/model2.jpg";
import skincare from "@/assets/skincare.jpg";
import lipstick from "@/assets/lipstick.jpg";
import showroomImg from "@/assets/showroom.jpg";
import cosmeticsDisplayImg from "@/assets/cosmetics_display.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SACHIN AGENCIES — Ganpati Peth, Sangli | Beauty & Cosmetics Hub" },
      {
        name: "description",
        content:
          "Sachin Agencies Ganpati Peth, Sangli — Leading Beauty Product Dealers, Cosmetic Wholesalers, Salon Equipment & Hair Oil Manufacturers since 1990.",
      },
      { property: "og:title", content: "SACHIN AGENCIES — Ganpati Peth, Sangli" },
      {
        property: "og:description",
        content: "Leading Beauty Product Dealers & Cosmetic Wholesalers in Ganpati Peth, Sangli. Established 1990.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATS = [
  {
    n: "Skincare",
    sub: "Garnier · L'Oréal Paris · Pond's",
    count: "4 Formulations",
    desc: "30x Vitamin C Serums, 1.5% Hyaluronic Acid & 24H Oil-Free Hydrating Gels",
    img: skincare,
    badge: "Bestseller Hub",
  },
  {
    n: "Haircare",
    sub: "Matrix · Streax · L'Oréal Pro",
    count: "3 Salon Formulas",
    desc: "Biolage Avocado Serums, Walnut Gloss Elixirs & X-Tenso Pro-Keratin Care",
    img: model2,
    badge: "Salon Professional",
  },
  {
    n: "Makeup",
    sub: "Maybelline · Lakmé · L'Oréal",
    count: "5 Color Creations",
    desc: "Fit Me Matte Foundations, 16H Superstay Matte Inks & Waterproof Kajal",
    img: lipstick,
    badge: "Iconic Daily Wear",
  },
];

const HERO_SLIDES = [
  {
    id: "hero-1",
    img: hero,
    title: "BEAUTY,",
    highlight: "Redefined.",
    sub: "Garnier, L'Oréal Paris, Maybelline & Lakmé — 100% authentic formulations directly at authorized rates.",
    pos: "object-[38%_0%] sm:object-[40%_10%] md:object-[82%_30%] lg:object-[85%_32%]",
    tag: "Authorized Dealer & Wholesaler",
  },
  {
    id: "hero-2",
    img: heroMakeup,
    title: "COUTURE,",
    highlight: "Elegance.",
    sub: "India's #1 cosmetic brands, professional salon equipment and nourishing hair oils in Ganpati Peth, Sangli.",
    pos: "object-[52%_0%] sm:object-[55%_10%] md:object-[68%_center] lg:object-[72%_center]",
    tag: "Established 1990 · Sangli Hub",
  },
];

const SHOP_PILLARS = [
  {
    icon: Building2,
    title: "Shree Chambers Showroom",
    desc: "Spacious, modern retail & wholesale store located on 1st Floor, Tanaji Chowk, Ganpati Peth Main Road.",
  },
  {
    icon: Package,
    title: "Wholesale & Bulk Supply",
    desc: "Special discounted dealership rates, instant volume billing & same-day packaging for salons and retail stores.",
  },
  {
    icon: Scissors,
    title: "Live Salon Equipment Display",
    desc: "Experience and inspect salon chairs, facial beds, hair steamers, and beauty apparatus in person before purchasing.",
  },
  {
    icon: Users,
    title: "Courteous In-Store Guidance",
    desc: "Our experienced staff is always available to answer product queries, compare shades, and recommend exact formulations.",
  },
];

function Index() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [filter, setFilter] = useState("All");
  const [y, setY] = useState(0);

  useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener("scroll", on, { passive: true });

    // Auto-slide hero background every 5 seconds
    const heroTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", on);
      clearInterval(heroTimer);
    };
  }, []);

  const best = PRODUCTS.filter((p) => filter === "All" || p.c === filter);

  return (
    <div className="relative bg-[#FAF8F5] text-[#1A1815]">
      {/* 1. Hero Section */}
      <section className="relative min-h-[580px] sm:min-h-[620px] md:min-h-[580px] lg:min-h-[600px] h-[88vh] sm:h-[90vh] md:h-[calc(100svh-76px)] max-h-[860px] overflow-hidden border-b border-[#E8DEC9] select-none bg-[#0D0B08]">

        {/* ── BACKGROUND IMAGES ── */}
        {HERO_SLIDES.map((slide, idx) => {
          const active = heroSlide === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                active ? "opacity-100 z-0" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className={`h-full w-full object-cover ${slide.pos} transition-all duration-1000 ease-out`}
                style={{
                  transform: `scale(${active ? 1.04 : 1}) translate3d(0, ${y * 0.08}px, 0)`,
                  transition: "transform 6s ease-out, opacity 1s ease-in-out",
                }}
              />
            </div>
          );
        })}

        {/* ── Ambient Backdrop Gradient ── */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 via-50% to-transparent md:hidden z-[1]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden md:block w-3/5 lg:w-1/2 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-[1]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-[1]" />

        {/* ── CONTENT ── */}
        <div
          className="relative flex h-full max-w-7xl mx-auto items-end md:items-center px-4 sm:px-6 lg:px-12 pb-14 pt-4 sm:pb-16 sm:pt-8 md:py-8 z-10"
          style={{ opacity: Math.max(0, 1 - y / 500) }}
        >
          <div className="max-w-lg lg:max-w-md xl:max-w-lg animate-fade-up w-full">
            <div className="mb-2 sm:mb-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/30 bg-black/50 px-3 py-0.5 sm:px-3.5 sm:py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#FFD54F] animate-pulse" />
              <span className="eyebrow text-[0.52rem] sm:text-[0.62rem] font-semibold tracking-[0.18em] sm:tracking-[0.25em] text-[#FFE8B3]">
                {HERO_SLIDES[heroSlide]!.tag}
              </span>
            </div>

            <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-light leading-[1.08] tracking-tight text-[#FFFDF8] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              {HERO_SLIDES[heroSlide]!.title}
              <br />
              <em className="animate-gold-shine not-italic font-semibold bg-gradient-to-r from-[#FFE599] via-[#F7D479] to-[#C99726] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(212,175,55,0.5)]">
                {HERO_SLIDES[heroSlide]!.highlight}
              </em>
            </h1>

            <p className="mt-2 sm:mt-3.5 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-[#F0E6D6] font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] line-clamp-2 sm:line-clamp-none">
              {HERO_SLIDES[heroSlide]!.sub}
            </p>

            <div className="mt-3.5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3.5">
              <Link
                to="/shop"
                className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E5C158] via-[#F7D885] to-[#C99A2C] px-5 py-2.5 sm:px-7 sm:py-3.5 text-[0.68rem] sm:text-xs font-bold text-[#141210] shadow-[0_6px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_35px_rgba(212,175,55,0.65)]"
              >
                <span>Discover Products</span>
                <Sparkles className="h-3 w-3 text-[#141210]" />
              </Link>
              <a
                href="#founder-story"
                className="eyebrow inline-flex items-center justify-center rounded-full border border-white/40 bg-black/40 px-4 py-2.5 sm:px-6 sm:py-3.5 text-[0.68rem] sm:text-xs font-semibold text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#F7D885] hover:bg-black/60 hover:text-[#FFE8B3] hover:scale-105"
              >
                Meet Our Founder
              </a>
            </div>
          </div>
        </div>

        {/* Hero Slider Dots Navigation */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-4 sm:left-6 lg:left-12 z-20 flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/60 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-md shadow-lg">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                  heroSlide === idx
                    ? "w-6 sm:w-8 bg-gradient-to-r from-[#FFE599] via-[#F7D479] to-[#C99726] shadow-[0_0_10px_#FFE599]"
                    : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <span className="eyebrow text-[0.55rem] sm:text-[0.65rem] text-[#FFE8B3] font-bold tracking-widest inline-block drop-shadow-md">
            0{heroSlide + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>

        {/* Floating Feature Card on Desktop */}
        <div
          className="pointer-events-none absolute bottom-6 xl:bottom-8 right-[2%] lg:right-[4%] xl:right-[6%] hidden items-center justify-center lg:flex z-20"
          style={{ transform: `translateY(${-y * 0.15}px)` }}
        >
          <div className="absolute h-72 w-72 lg:h-80 lg:w-80 rounded-full bg-gradient-to-tr from-[#D4AF37]/35 via-[#FFD54F]/20 to-transparent blur-3xl animate-pulse-glow" />

          <div className="relative animate-floaty">
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-black/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.25)] backdrop-blur-xl">
              <img
                src={serum}
                alt="Garnier & L'Oreal Products"
                className="w-52 lg:w-60 xl:w-72 h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-3 -left-4 rounded-xl border border-[#D4AF37]/60 bg-[#12100E]/95 p-2.5 sm:p-3 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[#FFD54F]">
                <Award className="h-3.5 w-3.5 text-[#FFD54F]" />
                <span className="eyebrow text-[0.56rem] sm:text-[0.6rem] font-bold tracking-wider text-[#FFE8B3]">Ganpati Peth, Sangli</span>
              </div>
              <p className="font-display text-sm sm:text-base font-semibold text-white mt-0.5">Sachin Agencies</p>
            </div>

            <div className="absolute -top-2.5 -right-3 rounded-full border border-[#D4AF37]/60 bg-[#12100E]/95 px-3 py-1 shadow-xl backdrop-blur-md">
              <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-[#FFD54F] font-bold tracking-wider">Est. 1990 · 36+ Yrs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights Ribbon Banner */}
      <section className="relative z-20 w-full overflow-hidden bg-gradient-to-r from-[#FBF8F2] via-[#F7F2E7] to-[#FBF8F2] py-6 sm:py-8 border-y border-[#E8DEC9] shadow-[0_6px_30px_rgba(212,175,55,0.08)] ribbon-light-sweep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-0 items-center">
            {/* 1. Customer Base */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:pr-6 group cursor-default transition-transform duration-300 hover:translate-x-1">
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]">
                <Users className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  10,000+
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    HAPPY PATRONS
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Retailers &amp; parlour owners
                </p>
              </div>
            </div>

            {/* 2. Genuine Formulations */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:border-l lg:border-[#E5D7C0] lg:px-6 relative group cursor-default transition-transform duration-300 hover:translate-x-1">
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]">
                <ShieldCheck className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  100%
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    GENUINE BRANDS
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Direct certified stock
                </p>
              </div>
            </div>

            {/* 3. Established 1990 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:border-l lg:border-[#E5D7C0] lg:px-6 relative group cursor-default transition-transform duration-300 hover:translate-x-1">
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]">
                <Award className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  Est. 1990
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    SANGLI HERITAGE
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  36+ Years of market trust
                </p>
              </div>
            </div>

            {/* 4. One-Stop Solutions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:border-l lg:border-[#E5D7C0] lg:pl-6 relative group cursor-default transition-transform duration-300 hover:translate-x-1">
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]">
                <Store className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  Ganpati Peth
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    ONE-STOP HUB
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Near Suresh Light House
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Categories Showcase */}
      <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHead
          eyebrow="Shop By Department"
          title="Explore Our Categories"
          sub="100% genuine skincare, haircare, and makeup collections from India's most trusted global beauty brands."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CATS.map((c) => (
            <Link
              key={c.n}
              to="/shop"
              search={{ category: c.n }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-[#E8DEC9] bg-[#141210] p-6 sm:p-8 min-h-[360px] sm:min-h-[420px] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.n}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/15 transition-opacity duration-500 group-hover:from-black group-hover:via-black/60" />
              </div>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.6rem] sm:text-[0.65rem] font-semibold text-[#FFE599] backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-[#FFD54F]" />
                  <span>{c.badge}</span>
                </span>
                <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.6rem] sm:text-[0.65rem] font-medium text-white backdrop-blur-md">
                  {c.count}
                </span>
              </div>

              <div className="relative z-10 flex flex-col">
                <span className="eyebrow text-[0.62rem] sm:text-[0.68rem] text-[#FFD54F] font-semibold tracking-[0.2em] uppercase">
                  {c.sub}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-normal uppercase tracking-wide mt-1 group-hover:text-[#FFE599] transition-colors">
                  {c.n}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#D6CBB8] leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFE599] group-hover:text-white transition-colors">
                  <span className="eyebrow text-[0.68rem] sm:text-[0.72rem] tracking-wider uppercase">Explore {c.n}</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFD54F] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:bg-[#D4AF37] group-hover:text-black">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. ✨ MEET OUR FOUNDER (Clean, Crisp, Professional Portrait & Focused Information) */}
      <section id="founder-story" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#F7F3EB] py-16 sm:py-24 border-y border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left 5 Cols: Full, High-Res, Perfectly Framed Founder Portrait Photo */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#D4AF37]/50 bg-white p-3 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)]">
                {/* Clean Portrait Image Frame — No cropping, Face 100% crystal clear */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#FAF8F5]">
                  <img
                    src={founderImg}
                    alt="Founder & Proprietor — Sachin Agencies Sangli"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-103"
                  />
                  {/* Subtle top & bottom glass badges */}
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

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] px-5 py-3 text-xs font-bold text-[#14100C] shadow-sm transition-transform hover:scale-105"
                >
                  <span>About Our Business</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Sachin+Agencies+Ganpati+Peth+Sangli"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow inline-flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/60 bg-white px-5 py-3 text-xs font-bold text-[#8C6418] shadow-2xs transition-all hover:bg-[#FAF4E6]"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 🏬 ABOUT OUR SHOP & STORE SHOWROOM (Authentic Shop Photo, Clean, Animated & Professional) */}
      <section id="about-shop" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF6EE] py-16 sm:py-24 border-y border-[#E8DEC9]">
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
                <Link
                  to="/about"
                  className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] px-5 py-3 text-xs font-bold text-[#14100C] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <span>About Our Business</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Sachin+Agencies+Ganpati+Peth+Sangli"
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow inline-flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/60 bg-white px-5 py-3 text-xs font-bold text-[#8C6418] shadow-2xs transition-all duration-300 hover:bg-[#FAF4E6] hover:scale-105 active:scale-95"
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

      {/* 6. Featured Bestsellers Grid */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Customer Favorites in Sangli"
            title="Popular Bestsellers"
            sub="Most trusted and frequently reordered formulations across salons and retail clients."
          />
          <div className="mb-8 sm:mb-10 flex overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center gap-2 px-1">
            {["All", "Skincare", "Haircare", "Makeup"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`eyebrow shrink-0 rounded-full px-5 py-2 text-[0.62rem] sm:text-[0.65rem] font-medium tracking-[0.18em] transition-all duration-300 ${
                  filter === f
                    ? "bg-[#181614] text-white shadow-md"
                    : "border border-border bg-white text-[#181614] hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div
            key={filter}
            className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 animate-in fade-in duration-300"
          >
            {best.slice(0, 4).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              to="/shop"
              className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#D4AF37] px-8 py-3.5 text-xs font-bold text-[#14100C] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>View All Products in Shop</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
