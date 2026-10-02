import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Heart,
  Star,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Flame,
  Award,
} from "lucide-react";
import { PRODUCTS, JOURNAL, BRANDS, inr } from "@/lib/catalog";
import { ProductCard, SectionHead } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import hero from "@/assets/hero.jpg";
import heroMakeup from "@/assets/hero_makeup.jpg";
import serum from "@/assets/serum.jpg";
import products from "@/assets/products.jpg";
import model2 from "@/assets/model2.jpg";
import skincare from "@/assets/skincare.jpg";
import lipstick from "@/assets/lipstick.jpg";
import perfume from "@/assets/perfume.jpg";

import brandDior from "@/assets/brands/dior.jpg";
import brandChanel from "@/assets/brands/chanel.jpg";
import brandGuerlain from "@/assets/brands/guerlain.jpg";
import brandYsl from "@/assets/brands/ysl.jpg";
import brandLamer from "@/assets/brands/lamer.jpg";
import brandTomford from "@/assets/brands/tomford.jpg";
import brandLancome from "@/assets/brands/lancome.jpg";
import brandMfk from "@/assets/brands/mfk.jpg";

import imgFoundation from "@/assets/realms/foundation.jpg";
import imgBlush from "@/assets/realms/blush.jpg";
import imgEyes from "@/assets/realms/eyes.jpg";

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
  { n: "Makeup", sub: "Atelier Colour", img: lipstick },
  { n: "Skincare", sub: "Clinical Radiance", img: skincare },
  { n: "Haircare", sub: "Silk Elixirs", img: model2 },
  { n: "Fragrance", sub: "Haute Parfumerie", img: perfume },
  { n: "Bodycare", sub: "Velvet Rituals", img: products },
  { n: "Beauty Tools", sub: "Artisan Brushes", img: hero },
];

const BRAND_HOUSES = [
  {
    name: "Dior",
    origin: "Avenue Montaigne, Paris",
    year: "Est. 1946",
    tagline: "Haute Parfumerie & Couture Glow",
    img: brandDior,
    badge: "Maison Iconique",
  },
  {
    name: "Chanel",
    origin: "Rue Cambon, Paris",
    year: "Est. 1910",
    tagline: "Timeless Elegance & N°5 Legacy",
    img: brandChanel,
    badge: "Haute Couture",
  },
  {
    name: "Guerlain",
    origin: "Champs-Élysées, Paris",
    year: "Est. 1828",
    tagline: "Imperial Bee & Abeille Royale",
    img: brandGuerlain,
    badge: "Heritage 1828",
  },
  {
    name: "Yves Saint Laurent",
    origin: "Place Vendôme, Paris",
    year: "Est. 1961",
    tagline: "Gold Couture & Bold Radiance",
    img: brandYsl,
    badge: "Couture Beauty",
  },
  {
    name: "La Mer",
    origin: "Pacific Biosphere",
    year: "Est. 1965",
    tagline: "Miracle Broth™ Cell Renewal",
    img: brandLamer,
    badge: "Clinical Elixir",
  },
  {
    name: "Tom Ford",
    origin: "Madison Ave, New York",
    year: "Est. 2005",
    tagline: "Private Blend Artisanal Scents",
    img: brandTomford,
    badge: "Private Blend",
  },
  {
    name: "Lancôme",
    origin: "Faubourg Saint-Honoré",
    year: "Est. 1935",
    tagline: "Absolue French Rose Grand Cru",
    img: brandLancome,
    badge: "French Rose",
  },
  {
    name: "Maison Francis Kurkdjian",
    origin: "Rue d'Alger, Paris",
    year: "Est. 2009",
    tagline: "Baccarat Rouge & Pure Alchemy",
    img: brandMfk,
    badge: "Haute Parfumerie",
  },
];

const REALM_TABS: Record<
  string,
  {
    name: string;
    tag: string;
    count: string;
    desc: string;
    icon: string;
    badge: string;
    img: string;
  }[]
> = {
  Face: [
    {
      name: "Foundation",
      tag: "Silk Second-Skin",
      count: "18 Shades",
      desc: "Breathable 24-hour weightless radiance with French rose infusion",
      icon: "✦",
      badge: "Iconic Base",
      img: imgFoundation,
    },
    {
      name: "Concealer",
      tag: "Optical Filter Blur",
      count: "12 Tones",
      desc: "High-coverage crease-resistant formula enriched with bio-peptides",
      icon: "❋",
      badge: "Award Winner",
      img: products,
    },
    {
      name: "Blush",
      tag: "Velvet Petal Glow",
      count: "8 Hues",
      desc: "Micro-milled Parisian floral pigments for a natural luminous flush",
      icon: "◈",
      badge: "Best Seller",
      img: imgBlush,
    },
    {
      name: "Bronzer",
      tag: "Sunlit Riviera Warmth",
      count: "6 Tones",
      desc: "Golden hour sculptural contour with micronized amber minerals",
      icon: "◆",
      badge: "Couture Glow",
      img: brandYsl,
    },
    {
      name: "Highlighter",
      tag: "24k Prism Strobe",
      count: "4 Drops",
      desc: "Crushed diamond & gold crystal droplets for multidimensional sheen",
      icon: "✧",
      badge: "Pure Light",
      img: brandGuerlain,
    },
    {
      name: "Primer",
      tag: "Poreless Hydra Canvas",
      count: "Botanical Grip",
      desc: "Instant skin-smoothing botanical elixir that locks makeup all day",
      icon: "◇",
      badge: "Essential",
      img: skincare,
    },
  ],
  Eyes: [
    {
      name: "Mascara",
      tag: "Panoramic Haute Lash",
      count: "Volumizing & Lift",
      desc: "Featherweight carbon black extension with Moroccan argan care",
      icon: "✦",
      badge: "Iconic",
      img: imgEyes,
    },
    {
      name: "Eyeliner",
      tag: "Calligraphy Obsidian Gel",
      count: "Waterproof 24h",
      desc: "Deepest obsidian pigment with ultra-precise artisanal tip",
      icon: "❋",
      badge: "Waterproof",
      img: brandChanel,
    },
    {
      name: "Eyeshadow",
      tag: "Couture Silk Palette",
      count: "9 Textures",
      desc: "Buttery mattes, molten metallics, and radiant duochrome pearls",
      icon: "◈",
      badge: "Curated",
      img: imgEyes,
    },
    {
      name: "Brow Definer",
      tag: "Micro-Blade Botanical Tint",
      count: "Natural Hair Stroke",
      desc: "Ultra-fine botanical fiber pencil for impeccably tailored arches",
      icon: "◆",
      badge: "Precision",
      img: products,
    },
  ],
  Lips: [
    {
      name: "Satin Lipstick",
      tag: "Rouge Velours Imperial",
      count: "24 Pigments",
      desc: "Decadent velvet cushion wear enriched with pure camellia oil",
      icon: "✦",
      badge: "Flagship",
      img: lipstick,
    },
    {
      name: "Lip Gloss",
      tag: "Mirror Glass Lacquer",
      count: "Plumping Complex",
      desc: "High-shine crystal reflection infused with volume-boosting peptides",
      icon: "❋",
      badge: "High Shine",
      img: brandYsl,
    },
    {
      name: "Lip Liner",
      tag: "Couture Contour Pencil",
      count: "16 Shades",
      desc: "Feather-proof seamless glide pencil for defined sculptural lips",
      icon: "◈",
      badge: "Long Wear",
      img: lipstick,
    },
    {
      name: "Hydra Balm",
      tag: "Rose Petal Recovery Care",
      count: "Nutrient Infusion",
      desc: "24-hour restorative botanical moisture and petal-soft plumping",
      icon: "◆",
      badge: "Clean Beauty",
      img: brandLancome,
    },
  ],
  Skin: [
    {
      name: "Botanical Cleanser",
      tag: "Purifying Rose Milk",
      count: "Gentle Foam",
      desc: "Hydrating rosewater and amino acid foam that preserves skin barrier",
      icon: "✦",
      badge: "Daily Ritual",
      img: skincare,
    },
    {
      name: "Cellular Serum",
      tag: "Obsidian Elixir Ultra",
      count: "Bio-Peptides",
      desc: "Concentrated 24k colloidal gold and truffle extract cellular revival",
      icon: "❋",
      badge: "Prix 2026",
      img: serum,
    },
    {
      name: "Silk Moisturiser",
      tag: "72h Barrier Lock Cream",
      count: "Cashmere Texture",
      desc: "Marine micro-algae and multi-ceramide deep hydration fortress",
      icon: "◈",
      badge: "Ultra Hydrate",
      img: brandLamer,
    },
    {
      name: "SPF 50 Shield",
      tag: "Invisible Mineral Veil",
      count: "Anti-Pollution",
      desc: "100% weightless zinc optical defense with invisible satin finish",
      icon: "◆",
      badge: "Broad Spectrum",
      img: brandLancome,
    },
  ],
  Hair: [
    {
      name: "Nourishing Shampoo",
      tag: "Silk Protein Bath",
      count: "Sulfate-Free",
      desc: "Gentle botanicals that cleanse and bestow mirror glass hair shine",
      icon: "✦",
      badge: "Sulfate Free",
      img: model2,
    },
    {
      name: "Hair Elixir",
      tag: "Liquid Gold Drops",
      count: "Argan & Camellia",
      desc: "Weightless mirror gloss and 230°C thermal protection shield",
      icon: "❋",
      badge: "Multi-Use",
      img: brandGuerlain,
    },
    {
      name: "Silk Mask",
      tag: "Intensive Reconstruction",
      count: "Weekly Therapy",
      desc: "Deep biomimetic keratin repair for supreme softness and resilience",
      icon: "◈",
      badge: "Treatment",
      img: skincare,
    },
    {
      name: "Styling Veil",
      tag: "Weightless Flexible Mist",
      count: "Humidity Proof",
      desc: "Luminous hold with anti-frizz memory and French fragrance note",
      icon: "◆",
      badge: "Styling",
      img: model2,
    },
  ],
  Fragrance: [
    {
      name: "Extrait de Parfum",
      tag: "Pure 35% Concentration",
      count: "Grasse Artisanal",
      desc: "Rare Grasse jasmine, saffron, and rich warm ambergris sillage",
      icon: "✦",
      badge: "Niche Extrait",
      img: perfume,
    },
    {
      name: "Body Mist",
      tag: "Silk Hydration Scent Veil",
      count: "Alcohol-Free",
      desc: "All-over hydrating fragrance veil with aloe and botanical waters",
      icon: "❋",
      badge: "Light Scent",
      img: brandDior,
    },
    {
      name: "Discovery Sets",
      tag: "Curated Maison Flight",
      count: "5 Iconic Vials",
      desc: "Experience the complete spectrum of Parisian haute parfumerie",
      icon: "◈",
      badge: "Gift Set",
      img: brandMfk,
    },
  ],
};

const CONCERNS: Record<string, { items: string[]; desc: string }> = {
  Hydration: {
    items: ["Hyaluronic Serum", "Silk Moisture Cream", "Hydro Mask", "Eye Infusion"],
    desc: "Intensive 72-hour moisture lock and plumping cellular hydration.",
  },
  Brightening: {
    items: ["Vitamin C 15% Serum", "Glycolic Glow Toner", "Radiance Mask", "Luminous Fluid"],
    desc: "Target hyperpigmentation and reveal lit-from-within Parisian brilliance.",
  },
  "Acne & Pore Care": {
    items: ["Salicylic Clarifier", "Purifying Clay Elixir", "Barrier Balancing Gel", "Cica Soother"],
    desc: "Refine pore architecture and restore sebum balance without drying.",
  },
  "Anti-Aging": {
    items: ["24k Obsidian Serum", "Bio-Peptide Cream", "Eye Lift Elixir", "Night Cellular Oil"],
    desc: "Stimulate collagen synthesis and visibly lift facial contours.",
  },
  "Sensitive Skin": {
    items: ["Centella Cleanser", "Ceramide Cream", "Thermal Calming Mist", "Squalane Balm"],
    desc: "Soothe reactive skin and reinforce the delicate moisture mantle.",
  },
  "Sun Protection": {
    items: ["Invisible SPF 50+ Fluid", "Tinted Silk SPF", "Mineral Shield Stick", "After-Sun Gel"],
    desc: "Broad-spectrum UVA/UVB and blue light defense with zero white cast.",
  },
};

const ROUTINE = [
  {
    s: "Purify",
    sub: "Step 01",
    t: "Gentle Cream Cleanse",
    d: "Melt away atmospheric impurities and makeup while respecting the protective acid mantle.",
    tag: "Essential Foundation",
  },
  {
    s: "Infuse",
    sub: "Step 02",
    t: "Cellular Peptide Treatment",
    d: "Deliver concentrated 24k colloidal gold and bio-fermented peptides deep into the dermis.",
    tag: "Targeted Glow",
  },
  {
    s: "Nourish",
    sub: "Step 03",
    t: "Silk Veil Moisture",
    d: "Seal active botanicals in an ultra-breathable cashmere barrier for all-day supple bounce.",
    tag: "Deep Barrier Lock",
  },
  {
    s: "Shield",
    sub: "Step 04",
    t: "Weightless SPF 50 Defense",
    d: "Invisible antioxidant photo-protection that leaves skin with a radiant dewy second-skin finish.",
    tag: "Photoprotection",
  },
];

const LOOKS = [
  { n: "Soft Parisian Glam", tag: "Signature Red Carpet", img: model2 },
  { n: "Dewy Glass Skin", tag: "Barely-There Radiance", img: hero },
  { n: "Midnight Noir", tag: "Smoky Amber Drama", img: perfume },
  { n: "Everyday Chic", tag: "Effortless Velvet Nude", img: lipstick },
];

const INGREDIENTS: Record<
  string,
  {
    origin: string;
    flag: string;
    icon: string;
    stat: string;
    statLabel: string;
    category: string;
    benefits: string[];
    description: string;
    purity: string;
    img: string;
  }
> = {
  "French Black Truffle": {
    origin: "Périgord, France",
    flag: "🇫🇷",
    icon: "✦",
    stat: "99.8%",
    statLabel: "Superoxide Dismutase Bio-Purity",
    category: "Cellular Longevity",
    benefits: ["Instant Cellular Longevity Boost", "Superoxide Dismutase Free-Radical Shield", "Intensive Dermal Density & Skin Firming"],
    description: "Sustainably foraged from ancient French oak groves in Périgord. Rich in essential bio-lipids and rare enzymes that accelerate deep cellular revival.",
    purity: "99.8% Cold-Extracted",
    img: serum,
  },
  "24k Colloidal Gold": {
    origin: "Valais, Switzerland",
    flag: "🇨🇭",
    icon: "✧",
    stat: "24 Karat",
    statLabel: "Sub-Micron Pure Light Suspension",
    category: "Optical Radiance",
    benefits: ["Multidimensional Lit-From-Within Glow", "Micro-Circulation & Nutrient Delivery", "Enhanced Peptide Absorption Velocity"],
    description: "Suspended pharmaceutical-grade sub-micron gold crystals from Swiss valleys that diffuse light across the skin matrix and restore youthful vitality.",
    purity: "Pharmaceutical Grade",
    img: brandGuerlain,
  },
  "Bio-Fermented Peptides": {
    origin: "Lyon Biotechnology Labs",
    flag: "🇫🇷",
    icon: "❋",
    stat: "4D Complex",
    statLabel: "Multi-Weight Signal Architecture",
    category: "Matrix Regeneration",
    benefits: ["Stimulates Natural Collagen Synthesis", "Visibly Relaxes Expression & Fine Lines", "Sculpts & Lifts Facial Contours"],
    description: "Multi-weight biomimetic signal peptides bio-fermented in Lyon labs to match the skin's youthful cellular matrix with unparalleled absorption.",
    purity: "High Bio-Availability",
    img: brandLamer,
  },
  "Alpine Edelweiss": {
    origin: "Swiss Alps (1,500m+)",
    flag: "🇨🇭",
    icon: "◈",
    stat: "2x Potency",
    statLabel: "Twice the Antioxidant Power of Vit C",
    category: "Alpine Cryo-Defense",
    benefits: ["Extreme Environmental Radical Defense", "Fortifies Delicate Moisture Barrier", "Soothes Sun-Exposed & Reactive Skin"],
    description: "Hand-harvested above 1,500 meters under strict Swiss organic standards, boasting exceptional natural defense against UV and atmospheric stress.",
    purity: "100% Certified Organic",
    img: skincare,
  },
  "Olive Squalane": {
    origin: "Provence, France",
    flag: "🇫🇷",
    icon: "◇",
    stat: "72h Lock",
    statLabel: "100% Skin-Identical Lipid Match",
    category: "Barrier Fortress",
    benefits: ["100% Biomimetic Sebum Harmonization", "Deep Epidermal Barrier Fortification", "Velvet Non-Greasy Cashmere Finish"],
    description: "Pure plant-derived lipid identical to skin's natural moisture mantle, sinking instantly into the epidermis with zero greasiness.",
    purity: "100% Plant-Sourced",
    img: imgFoundation,
  },
  "Cold-Pressed Camellia": {
    origin: "Brittany Ateliers",
    flag: "🇫🇷",
    icon: "◆",
    stat: "Omega-9",
    statLabel: "First Cold-Press Micro-Batch",
    category: "Botanical Elixir",
    benefits: ["Saturates Skin with Omega-9 Lipids", "Supple Cushion & Satin Touch", "Locks Deep Hydration for 48 Hours"],
    description: "Sacred French beauty oil hand-pressed in micro-batches in Brittany to preserve delicate restorative polyphenols and golden sheen.",
    purity: "First Cold-Press",
    img: brandLancome,
  },
};

const STORIES = [
  {
    q: "The Obsidian Elixir is pure Parisian alchemy. Within two weeks, my skin looked like it had been retouched by soft morning light.",
    n: "Comtesse Isabelle de V.",
    loc: "Paris, France",
    role: "Haute Couture Stylist",
    img: model2,
  },
  {
    q: "I have tried every luxury skincare house in Geneva and New York. Nothing compares to the weightless silken texture of Luméra.",
    n: "Meera K. Singhania",
    loc: "Mumbai & London",
    role: "Private Art Curator",
    img: hero,
  },
  {
    q: "The Rouge Velours satin lipstick glides on like liquid velvet and lasts through gala dinners without drying. Absolute perfection.",
    n: "Charlotte Montrose",
    loc: "Monaco",
    role: "Vogue Contributor",
    img: lipstick,
  },
];

const HERO_SLIDES = [
  {
    id: "hero-1",
    img: hero,
    title: "BEAUTY,",
    highlight: "Redefined.",
    sub: "Rare French botanicals, 24k colloidal gold & bio-peptides — formulated for luminous radiance.",
    pos: "object-[38%_20%] sm:object-[45%_25%] md:object-[82%_30%] lg:object-[85%_32%]",
    tag: "Haute Skincare & 24k Gold",
  },
  {
    id: "hero-2",
    img: heroMakeup,
    title: "COUTURE,",
    highlight: "Elegance.",
    sub: "Pure Parisian pigments, 24-hour second-skin foundations & silk lipsticks crafted for luxury.",
    pos: "object-[52%_15%] sm:object-[58%_center] md:object-[68%_center] lg:object-[72%_center]",
    tag: "Atelier Makeup & Couture Glow",
  },
  {
    id: "hero-3",
    img: model2,
    title: "LUMINOUS,",
    highlight: "Perfection.",
    sub: "High-performance bridal & red carpet beauty formulations tailored for everlasting glow.",
    pos: "object-[50%_15%] sm:object-[50%_20%] md:object-[50%_25%]",
    tag: "Bridal & Red Carpet Radiance",
  },
];

function Index() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [tab, setTab] = useState("Face");
  const [concern, setConcern] = useState("Hydration");
  const [step, setStep] = useState(0);
  const [ing, setIng] = useState("French Black Truffle");
  const [filter, setFilter] = useState("All");
  const [split, setSplit] = useState(50);
  const [story, setStory] = useState(0);
  const [y, setY] = useState(0);
  const [addedObsidian, setAddedObsidian] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const { add } = useCart();

  useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener("scroll", on, { passive: true });

    // Auto-slide hero background every 5 seconds
    const heroTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    const t = setInterval(() => setStory((s) => (s + 1) % STORIES.length), 7000);
    return () => {
      window.removeEventListener("scroll", on);
      clearInterval(heroTimer);
      clearInterval(t);
    };
  }, []);

  const best = PRODUCTS.filter((p) => filter === "All" || p.c === filter);

  const scrollTrending = (dir: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = dir === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleAddObsidian = () => {
    add("obsidian-elixir");
    setAddedObsidian(true);
    setTimeout(() => setAddedObsidian(false), 2000);
  };

  return (
    <div className="relative bg-[#FAF8F5] text-[#1A1815]">
      {/* 1. Hero Section — Automatic Sliding Backgrounds with Perfect Mobile & Desktop Framing */}
      <section className="relative min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[600px] h-[calc(100svh-68px)] sm:h-[calc(100svh-76px)] max-h-[820px] overflow-hidden border-b border-[#E8DEC9] select-none bg-[#0D0B08]">

        {/* ── BACKGROUND IMAGES: Automatically slide / crossfade with slow motion ── */}
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

        {/* ── Subtle Ambient Backdrop Gradient: Crystal clear face on mobile, dark left on desktop ── */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 md:hidden z-[1]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden md:block w-3/5 lg:w-1/2 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-[1]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-[1]" />

        {/* ── CONTENT: Radiant Luxury Typography Directly on Canvas ── */}
        <div
          className="relative flex h-full max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 z-10"
          style={{ opacity: Math.max(0, 1 - y / 500) }}
        >
          <div className="max-w-lg lg:max-w-md xl:max-w-lg animate-fade-up w-full">
            {/* Tag Badge */}
            <div className="mb-2.5 sm:mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/45 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#FFD54F] animate-pulse" />
              <span className="eyebrow text-[0.55rem] sm:text-[0.62rem] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#FFE8B3]">
                {HERO_SLIDES[heroSlide]!.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-light leading-[1.06] tracking-tight text-[#FFFDF8] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              {HERO_SLIDES[heroSlide]!.title}
              <br />
              <em className="animate-gold-shine not-italic font-semibold bg-gradient-to-r from-[#FFE599] via-[#F7D479] to-[#C99726] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(212,175,55,0.5)]">
                {HERO_SLIDES[heroSlide]!.highlight}
              </em>
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 sm:mt-3.5 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-[#F0E6D6] font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              {HERO_SLIDES[heroSlide]!.sub}
            </p>

            {/* CTAs — Stacks cleanly on mobile & perfectly spaced on Windows */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <Link
                to="/shop"
                className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E5C158] via-[#F7D885] to-[#C99A2C] px-6 py-3 sm:px-7 sm:py-3.5 text-xs font-bold text-[#141210] shadow-[0_6px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_35px_rgba(212,175,55,0.65)]"
              >
                <span>Discover Creations</span>
                <Sparkles className="h-3.5 w-3.5 text-[#141210]" />
              </Link>
              <a
                href="#signature"
                className="eyebrow inline-flex items-center justify-center rounded-full border border-white/40 bg-black/40 px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-semibold text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#F7D885] hover:bg-black/60 hover:text-[#FFE8B3] hover:scale-105"
              >
                Signature Serum
              </a>
            </div>
          </div>
        </div>

        {/* Hero Slider Dots Navigation — Bottom Left */}
        <div className="absolute bottom-3.5 sm:bottom-5 left-4 sm:left-6 lg:left-12 z-20 flex items-center gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/30 bg-black/50 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md shadow-lg">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  heroSlide === idx
                    ? "w-7 sm:w-8 bg-gradient-to-r from-[#FFE599] via-[#F7D479] to-[#C99726] shadow-[0_0_10px_#FFE599]"
                    : "w-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <span className="eyebrow text-[0.6rem] sm:text-[0.65rem] text-[#FFE8B3] font-bold tracking-widest inline-block drop-shadow-md">
            0{heroSlide + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>

        {/* Floating Serum Bottle — bottom right (Scaled for Windows & Desktop Viewports) */}
        <div
          className="pointer-events-none absolute bottom-6 xl:bottom-8 right-[2%] lg:right-[4%] xl:right-[6%] hidden items-center justify-center lg:flex z-20"
          style={{ transform: `translateY(${-y * 0.15}px)` }}
        >
          {/* Radiant Gold Aura Glow */}
          <div className="absolute h-72 w-72 lg:h-80 lg:w-80 rounded-full bg-gradient-to-tr from-[#D4AF37]/35 via-[#FFD54F]/20 to-transparent blur-3xl animate-pulse-glow" />

          <div className="relative animate-floaty">
            {/* Serum Bottle Container — Dark Obsidian Glass Rim */}
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-black/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.25)] backdrop-blur-xl">
              <img
                src={serum}
                alt="Obsidian Elixir Serum"
                className="w-52 lg:w-60 xl:w-72 h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Award Badge — Dark Luxury Glass */}
            <div className="absolute -bottom-3 -left-4 rounded-xl border border-[#D4AF37]/60 bg-[#12100E]/95 p-2.5 sm:p-3 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[#FFD54F]">
                <Award className="h-3.5 w-3.5 text-[#FFD54F]" />
                <span className="eyebrow text-[0.56rem] sm:text-[0.6rem] font-bold tracking-wider text-[#FFE8B3]">Prix de Beauté 2026</span>
              </div>
              <p className="font-display text-sm sm:text-base font-semibold text-white mt-0.5">Obsidian Elixir</p>
            </div>

            {/* Rating Badge — Dark Gold Glass Pill */}
            <div className="absolute -top-2.5 -right-3 rounded-full border border-[#D4AF37]/60 bg-[#12100E]/95 px-3 py-1 shadow-xl backdrop-blur-md">
              <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-[#FFD54F] font-bold tracking-wider">★ 4.9 · 2,841</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Haute Maison Hallmarks — Exact Luxury 3D Pearl Ribbon Banner (Responsive 2-Col Mobile Grid) */}
      <section className="relative z-20 w-full overflow-hidden bg-gradient-to-r from-[#FBF8F2] via-[#F7F2E7] to-[#FBF8F2] py-6 sm:py-8 border-y border-[#E8DEC9] shadow-[0_6px_30px_rgba(212,175,55,0.08)] ribbon-light-sweep">
        {/* Left & Right Decorative Golden Filigree Curve Accents with Twinkle */}
        <div className="pointer-events-none absolute left-2 top-0 bottom-0 w-28 hidden xl:flex items-center opacity-75">
          <svg className="h-full w-full text-[#D4AF37]/60" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
            <path d="M0,0 Q60,50 0,100" stroke="currentColor" strokeWidth="1.2" />
            <path d="M0,20 Q40,50 0,80" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <span className="absolute left-8 text-[0.75rem] text-[#C99726] animate-star-twinkle">✦</span>
        </div>

        <div className="pointer-events-none absolute right-2 top-0 bottom-0 w-28 hidden xl:flex items-center justify-end opacity-75">
          <svg className="h-full w-full text-[#D4AF37]/60" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
            <path d="M100,0 Q40,50 100,100" stroke="currentColor" strokeWidth="1.2" />
            <path d="M100,20 Q60,50 100,80" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <span className="absolute right-8 text-[0.75rem] text-[#C99726] animate-star-twinkle" style={{ animationDelay: "1.2s" }}>✦</span>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-0 items-center">
            {/* 1. Cellular Radiance */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:pr-6 group cursor-default transition-transform duration-300 hover:translate-x-1">
              {/* Animated 3D Pearl Medallion */}
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]">
                <svg className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F] transition-all duration-500 group-hover:scale-115 group-hover:rotate-6 group-hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                  <circle cx="18.5" cy="5.5" r="1.5" />
                  <circle cx="5.5" cy="18.5" r="1" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  99.4%
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    CELLULAR RADIANCE
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Clinically validated glow
                </p>
              </div>
            </div>

            {/* 2. French Botanicals */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:border-l lg:border-[#E5D7C0] lg:px-6 relative group cursor-default transition-transform duration-300 hover:translate-x-1">
              <span className="hidden lg:block absolute -left-[5px] top-1/2 -translate-y-1/2 text-[0.68rem] text-[#C99726] bg-[#F7F2E7] px-0.5 animate-star-twinkle" style={{ animationDelay: "0.6s" }}>✦</span>
              {/* Animated 3D Pearl Medallion */}
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]" style={{ animationDelay: "1s" }}>
                <svg className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F] transition-all duration-500 group-hover:scale-115 group-hover:rotate-6 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4c-1.5 3-4 6-8 8 3 1.5 6 1.5 8 0 2 1.5 5 1.5 8 0-4-2-6.5-5-8-8z" />
                  <path d="M12 4v16" />
                  <path d="M12 12c-2.5 3-5 5-8 5 2.5 2 5.5 2 8 0 2.5 2 5.5 2 8 0-3 0-5.5-2-8-5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  100%
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    FRENCH BOTANICALS
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Organic active extracts
                </p>
              </div>
            </div>

            {/* 3. Paris 1928 (Haute Heritage) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:border-l lg:border-[#E5D7C0] lg:px-6 relative group cursor-default transition-transform duration-300 hover:translate-x-1">
              <span className="hidden lg:block absolute -left-[5px] top-1/2 -translate-y-1/2 text-[0.68rem] text-[#C99726] bg-[#F7F2E7] px-0.5 animate-star-twinkle" style={{ animationDelay: "1.4s" }}>✦</span>
              {/* Animated 3D Pearl Medallion */}
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]" style={{ animationDelay: "2s" }}>
                <svg className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F] transition-all duration-500 group-hover:scale-115 group-hover:rotate-6 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2" />
                  <path d="M10 4h4l-1 5h-2l-1-5z" />
                  <path d="M9 9h6" />
                  <path d="M8.5 9l-2.5 12h3a3 3 0 0 1 6 0h3l-2.5-12" />
                  <path d="M7 16h10" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  Paris 1928
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    HAUTE HERITAGE
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Centuries of royal alchemy
                </p>
              </div>
            </div>

            {/* 4. Clean Certified */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 lg:border-l lg:border-[#E5D7C0] lg:pl-6 relative group cursor-default transition-transform duration-300 hover:translate-x-1">
              <span className="hidden lg:block absolute -left-[5px] top-1/2 -translate-y-1/2 text-[0.68rem] text-[#C99726] bg-[#F7F2E7] px-0.5 animate-star-twinkle" style={{ animationDelay: "2s" }}>✦</span>
              {/* Animated 3D Pearl Medallion */}
              <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-[#E8DFC9] bg-gradient-to-b from-[#FFFDF9] via-[#F8F3EA] to-[#EAE0CE] animate-pearl-glow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_10px_28px_rgba(212,175,55,0.45)]" style={{ animationDelay: "3s" }}>
                <svg className="h-5 w-5 sm:h-7 sm:w-7 text-[#9E782F] transition-all duration-500 group-hover:scale-115 group-hover:rotate-6 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 4 13c0-4 3.5-7.5 8-9 0 4.5-3.5 8-8 9" />
                  <path d="M12.5 7.5A6.5 6.5 0 0 1 20 14c0 3.5-3 6.5-7 7.5 0-3.5 3-6.5 7-7.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[#181614] leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
                  Clean Certified
                </h4>
                <div className="mt-1 sm:mt-1.5 flex flex-col">
                  <span className="text-[0.54rem] sm:text-[0.62rem] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#9E782F] uppercase transition-colors duration-300 group-hover:text-[#7A5412]">
                    100% PURE FORMULA
                  </span>
                  <div className="w-5 sm:w-6 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#FFE599] mt-0.5 sm:mt-1 mb-1 sm:mb-1.5 transition-all duration-500 group-hover:w-14" />
                </div>
                <p className="text-[0.7rem] sm:text-xs leading-snug text-[#6B6254] font-normal transition-colors duration-300 group-hover:text-[#383028]">
                  Cruelty-free formulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curated Categories Showcase with Animated Cards */}
      <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionHead
          eyebrow="Atelier Collections"
          title="Explore Your Beauty"
          sub="Six realms of bespoke beauty, tailored for transformative daily rituals and luminous longevity."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {CATS.map((c) => (
            <Link
              key={c.n}
              to="/shop"
              search={{ category: c.n === "Beauty Tools" ? undefined : c.n }}
              className="premium-card group relative aspect-[3/4] p-2 flex flex-col justify-end text-center"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                <img
                  src={c.img}
                  alt={c.n}
                  loading="lazy"
                  className="premium-card-img h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:from-black/90" />
              </div>
              <div className="relative z-10 p-2 sm:p-3 flex flex-col items-center">
                <span className="eyebrow text-[0.5rem] sm:text-[0.54rem] text-primary/95 tracking-[0.2em] sm:tracking-[0.24em]">
                  {c.sub}
                </span>
                <span className="font-display text-xl sm:text-2xl uppercase tracking-wider text-white mt-0.5 font-normal">
                  {c.n}
                </span>
                <span className="eyebrow mt-1 sm:mt-1.5 flex items-center gap-1 text-[0.54rem] sm:text-[0.58rem] text-primary opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore</span>
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. New & Trending Beauty Edit (Interactive Light Carousel) */}
      <section id="shop" className="bg-[#F7F3EB] py-16 sm:py-24 border-y border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
            <div>
              <div className="mb-1.5 sm:mb-2 inline-flex items-center gap-2">
                <Flame className="h-3.5 w-3.5 text-primary" />
                <p className="eyebrow text-primary font-medium tracking-[0.22em] sm:tracking-[0.25em]">
                  Curated Haute Formulations
                </p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] sm:tracking-[0.05em] text-[#1A1815]">
                The New Beauty Edit
              </h2>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#5C5449]">
                Discover latest creations, iconic bestsellers, and atelier exclusives.
              </p>
            </div>
            {/* Carousel navigation buttons */}
            <div className="mt-4 flex items-center gap-2 sm:mt-0">
              <button
                onClick={() => scrollTrending("left")}
                aria-label="Previous products"
                className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-white shadow-sm transition hover:border-primary hover:text-primary active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-[#181614]" />
              </button>
              <button
                onClick={() => scrollTrending("right")}
                aria-label="Next products"
                className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-white shadow-sm transition hover:border-primary hover:text-primary active:scale-95"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#181614]" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {PRODUCTS.map((p) => (
              <div key={p.id} className="w-[240px] sm:w-72 shrink-0 snap-start">
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature Spotlight: Obsidian Elixir — Dark Obsidian + Champagne Gold Theme */}
      <section
        id="signature"
        className="relative overflow-hidden py-0 border-b border-[#1A1410]"
      >
        {/* Deep Obsidian Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E0C09] via-[#1A1410] to-[#120F0B]" />
        {/* Ambient golden halos */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#C8922A]/12 blur-[140px] animate-pulse-glow" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[100px] animate-pulse-glow" />

        <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-2">
          {/* LEFT: Cinematic Bottle Showcase */}
          <div className="relative flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[480px] md:min-h-[760px] bg-gradient-to-b from-[#0A0807] to-[#161210] border-b md:border-b-0 md:border-r border-[#2A2218]/60">
            {/* Layered golden radiance */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_60%,rgba(200,146,42,0.18)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#0A0807] to-transparent" />

            <div className="relative flex flex-col items-center justify-center p-6 sm:p-12">
              {/* Product image — large, clear, dramatic */}
              <div className="relative animate-floaty">
                {/* Multi-layer golden glow behind bottle */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#D4AF37]/20 blur-3xl" />
                <div className="absolute inset-0 scale-90 rounded-full bg-[#A87922]/30 blur-2xl" />
                <img
                  src={serum}
                  alt="Obsidian Elixir — Luméra Paris Signature Serum"
                  loading="lazy"
                  className="relative z-10 w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-[0_40px_60px_rgba(212,175,55,0.35)]"
                />
              </div>

              {/* Bottom label chip */}
              <div className="mt-6 sm:mt-10 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/08 px-3.5 py-1.5 sm:px-5 sm:py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="eyebrow text-[0.52rem] sm:text-[0.6rem] text-[#D4AF37] tracking-[0.2em] sm:tracking-[0.25em] font-semibold">
                  FLACON DE COUTURE · 50ML · ÉDITION LIMITÉE
                </span>
              </div>

              {/* Clinical result stats bar */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-px w-full border border-[#2A2218] rounded-lg overflow-hidden">
                {[
                  { val: "+98%", label: "Radiance" },
                  { val: "-43%", label: "Fine Lines" },
                  { val: "72h", label: "Hydration" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#0E0C09]/80 px-2 sm:px-4 py-2.5 sm:py-3 text-center">
                    <p className="font-display text-base sm:text-xl font-bold text-[#D4AF37]">{s.val}</p>
                    <p className="eyebrow text-[0.5rem] sm:text-[0.54rem] text-[#8A7A5E] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Content Details */}
          <div className="relative flex flex-col justify-center px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20">
            {/* Maison badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/08 px-3.5 py-1 sm:px-4 sm:py-1.5">
              <Sparkles className="h-3 w-3 text-[#D4AF37]" />
              <span className="eyebrow text-[0.56rem] sm:text-[0.62rem] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37]">
                Maison Flagship Creation
              </span>
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tight text-white">
              Obsidian Elixir
              <br />
              <em
                className="not-italic font-normal"
                style={{
                  background: "linear-gradient(90deg, #A87922 0%, #E6C687 45%, #A87922 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Rejuvenating Serum
              </em>
            </h2>

            <p className="mt-4 sm:mt-6 max-w-lg text-xs sm:text-sm leading-relaxed text-[#A99A86]">
              An extraordinary synergy of Périgord black truffle extract, 24k colloidal gold, and four molecular weights of bio-fermented peptides. Clinically proven to accelerate cellular renewal and bestow an ethereal, lit-from-within glow.
            </p>

            {/* Key Ingredient Highlights */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
              {[
                { title: "Périgord Black Truffle", benefit: "Rich in superoxide dismutase", icon: "◈" },
                { title: "24k Colloidal Gold", benefit: "Optical radiance & micro-circulation", icon: "◆" },
                { title: "Bio-Fermented Peptides", benefit: "Firms & visibly re-densifies matrix", icon: "◇" },
                { title: "4D Hyaluronic Complex", benefit: "Multi-depth 72-hour moisture lock", icon: "❋" },
              ].map((x) => (
                <div
                  key={x.title}
                  className="group rounded-lg border border-[#2A2218] bg-[#140F0A]/60 p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#1A1410]"
                >
                  <span className="text-[#D4AF37] text-base">{x.icon}</span>
                  <p className="font-display text-sm font-semibold text-white mt-0.5 sm:mt-1">{x.title}</p>
                  <p className="mt-0.5 text-[0.66rem] text-[#7A6E5E]">{x.benefit}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-8 sm:mt-10 h-px bg-gradient-to-r from-transparent via-[#2A2218] to-transparent" />

            {/* Price & CTA */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-semibold text-white">
                  {inr(4200)}
                </span>
                <p className="text-[0.62rem] sm:text-[0.65rem] text-[#6A5E4E] mt-0.5">
                  Tax included · Complimentary Shipping
                </p>
              </div>
              <button
                onClick={handleAddObsidian}
                className="eyebrow luxury-btn-shine relative overflow-hidden rounded-sm px-7 py-3.5 sm:px-9 sm:py-4 text-[0.64rem] sm:text-[0.68rem] font-bold shadow-[0_8px_32px_rgba(212,175,55,0.35)] transition-all duration-300 active:scale-95 text-center justify-center flex items-center"
                style={{
                  background: addedObsidian
                    ? "linear-gradient(135deg,#8C6418,#D4AF37,#8C6418)"
                    : "linear-gradient(135deg,#A87922,#E6C687,#A87922)",
                  color: "#0A0807",
                  backgroundSize: "200% 100%",
                }}
              >
                {addedObsidian ? "✦ Added to Bag" : "Add to Bag ✦"}
              </button>
              <Link
                to="/product/$id"
                params={{ id: "obsidian-elixir" }}
                className="eyebrow text-[0.64rem] sm:text-[0.68rem] text-[#8A7A5E] hover:text-[#D4AF37] transition-colors text-center sm:text-left py-1"
              >
                Full Science & Rituals →
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: ShieldCheck, text: "Clinically Tested" },
                { icon: CheckCircle2, text: "Cruelty-Free" },
                { icon: Sparkles, text: "99.4% Radiance" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-[#D4AF37]/80" />
                  <span className="text-[0.65rem] sm:text-[0.68rem] text-[#7A6E5E] font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shop by Category (Interactive Haute Beauty Realm Fast Finder) */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] py-16 sm:py-28 border-t border-[#E8DEC9] relative overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center">
          <SectionHead
            eyebrow="Quick Navigation"
            title="Shop by Beauty Realm"
            sub="Explore targeted formulations organized by your preferred category."
          />

          {/* Luxury Tab Switcher — Touch Swipable on Mobile */}
          <div className="mb-8 sm:mb-12 flex overflow-x-auto pb-2 sm:pb-0 scrollbar-none justify-start sm:justify-center gap-2 sm:gap-3 px-1">
            {Object.keys(REALM_TABS).map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`group relative shrink-0 overflow-hidden rounded-full px-5 py-2.5 sm:px-7 sm:py-3 text-[0.68rem] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase transition-all duration-300 ${
                    active
                      ? "bg-[#181614] text-[#FFE8B3] shadow-[0_8px_25px_rgba(24,22,20,0.35)] scale-105 border border-[#D4AF37]/60"
                      : "border border-[#E8DEC9] bg-white/90 text-[#4A433A] hover:border-primary hover:text-primary hover:bg-white hover:scale-102 backdrop-blur-sm"
                  }`}
                >
                  {/* Active Gold Glowing Dot */}
                  <span className="flex items-center gap-2">
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54F] shadow-[0_0_8px_#FFD54F] animate-pulse" />
                    )}
                    <span>{t}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Animated Interactive Grid Cards with Product Images & Rich Details */}
          <div
            key={tab}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-3 duration-500 text-left"
          >
            {REALM_TABS[tab]!.map((item, idx) => (
              <Link
                key={item.name}
                to="/shop"
                search={{ q: item.name }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8DEC9] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_22px_45px_-10px_rgba(212,175,55,0.22)]"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {/* Top Subtle Gold Shimmer Bar on Hover */}
                <div className="absolute top-0 left-0 z-20 h-[3px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Product Image Frame with Glass Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Elegant Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

                  {/* Top Left: Glass Icon Badge */}
                  <div className="absolute top-3 left-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-xs text-[#FFE8B3] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-[#181614] group-hover:border-[#D4AF37]">
                    <span>{item.icon}</span>
                  </div>

                  {/* Top Right: Status Badge & Shades/Counts */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="eyebrow rounded-full bg-white/90 backdrop-blur-md border border-[#E8DEC9] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[0.48rem] sm:text-[0.52rem] font-bold text-[#8C6418] shadow-sm">
                      {item.badge}
                    </span>
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-2 sm:px-2.5 py-0.5 text-[0.52rem] sm:text-[0.58rem] font-semibold text-[#FFE8B3] border border-white/20 shadow-sm">
                      {item.count}
                    </span>
                  </div>

                  {/* Bottom Left Image Overlay: Subcategory Tag */}
                  <div className="absolute bottom-2.5 left-3 sm:left-3.5">
                    <span className="eyebrow text-[0.52rem] sm:text-[0.55rem] font-bold tracking-widest text-[#FFE8B3] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-wide text-[#181614] transition-colors duration-300 group-hover:text-primary">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#6B6254] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Action Link at Bottom */}
                  <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-[#E8DEC9]/70 pt-3 sm:pt-3.5">
                    <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] font-semibold text-[#181614] transition-colors duration-300 group-hover:text-primary">
                      Explore Formulations
                    </span>
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#E8DEC9] bg-[#FAF8F5] text-[#181614] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-black group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What Does Your Skin Need? (Skin Concerns Diagnostic) */}
      <section className="bg-[#F8F5EE] py-16 sm:py-28 border-t border-[#E8DEC9]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Targeted Solutions"
            title="What Does Your Skin Crave?"
            sub="Select your primary skin focus to reveal personalized, dermatologist-tested beauty rituals."
          />
          {/* Concerns Selector — Horizontal Swipe on Mobile */}
          <div className="mb-8 sm:mb-10 flex overflow-x-auto pb-2 sm:pb-0 scrollbar-none justify-start sm:justify-center gap-2 px-1">
            {Object.keys(CONCERNS).map((c) => (
              <button
                key={c}
                onClick={() => setConcern(c)}
                className={`eyebrow shrink-0 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-[0.6rem] sm:text-[0.65rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-300 ${
                  concern === c
                    ? "bg-primary text-primary-foreground shadow-md font-semibold"
                    : "border border-border bg-white text-[#181614] hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div
            key={concern}
            className="rounded-xl border border-[#E8DEC9] bg-white p-5 sm:p-8 shadow-sm animate-in fade-in duration-300"
          >
            <div className="mb-5 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-border/60 pb-5 sm:pb-6">
              <div>
                <p className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-primary">Diagnosis & Prescription</p>
                <h3 className="font-display text-2xl sm:text-3xl font-medium mt-1 text-[#181614]">{concern} Routine</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#5C5449] md:mt-0 max-w-md">
                {CONCERNS[concern]!.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
              {CONCERNS[concern]!.items.map((n, i) => (
                <div key={n} className="premium-card group flex flex-col p-2 sm:p-2.5">
                  <div className="aspect-square overflow-hidden rounded-[4px] bg-[#FAF8F5]">
                    <img
                      src={[skincare, serum, products, lipstick][i % 4]}
                      alt={n}
                      loading="lazy"
                      className="premium-card-img h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mt-2 sm:mt-3 font-display text-base sm:text-lg font-medium text-[#181614] px-1 line-clamp-1">{n}</h4>
                  <span className="text-[0.68rem] sm:text-xs text-muted-foreground px-1 pb-1">Formulated in France</span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center border-t border-border/60 pt-5 sm:pt-6">
              <Link
                to="/shop"
                search={{ category: "Skincare" }}
                className="eyebrow inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-[0.64rem] sm:text-[0.68rem] text-[#181614] transition hover:text-primary font-medium"
              >
                <span>Shop All {concern} Formulations</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Build Your Beauty Routine (4-Step Guided Ritual with Animated Cards) */}
      <section className="bg-gradient-to-b from-[#F5EFE6] to-[#FAF8F5] py-16 sm:py-28 border-b border-[#E8DEC9]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="The Sacred Ritual"
            title="Build Your Daily Routine"
            sub="Master the four fundamental steps of Parisian skincare layering for luminous vitality."
          />
          <div className="grid gap-6 sm:gap-12 md:grid-cols-[1fr_1.3fr] items-center">
            {/* Step Selection List */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {ROUTINE.map((r, i) => {
                const active = step === i;
                return (
                  <button
                    key={r.s}
                    onClick={() => setStep(i)}
                    className={`flex items-start gap-3.5 sm:gap-5 rounded-md border p-4 sm:p-6 text-left transition-all duration-300 ${
                      active
                        ? "border-primary bg-white shadow-lg -translate-x-1"
                        : "border-[#E8DEC9] bg-white/70 hover:border-primary/50 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`font-display text-2xl sm:text-3xl font-semibold transition-colors ${
                        active ? "text-primary" : "text-[#A89F91]"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <span className="eyebrow text-[0.54rem] sm:text-[0.58rem] text-primary">{r.tag}</span>
                      <h3
                        className={`font-display text-xl sm:text-2xl uppercase tracking-wide transition-colors ${
                          active ? "text-[#181614]" : "text-[#756C60]"
                        }`}
                      >
                        {r.s} — {r.t}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#5C5449]">
                        {r.d}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Visual Step Display */}
            <div
              key={step}
              className="premium-card p-3 sm:p-4 animate-in fade-in duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-[#FAF8F5]">
                <img
                  src={[skincare, serum, products, perfume][step]}
                  alt={ROUTINE[step]!.s}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-white/90 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[#181614] shadow-sm backdrop-blur-md">
                  <span className="eyebrow text-[0.52rem] sm:text-[0.58rem] text-[#8C6418] font-semibold">
                    STEP {step + 1} OF 4
                  </span>
                </div>
              </div>
              <div className="mt-4 sm:mt-5 p-1 sm:p-2">
                <h4 className="font-display text-xl sm:text-2xl font-medium text-[#181614]">
                  {ROUTINE[step]!.t}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-[#5C5449] leading-relaxed">
                  {ROUTINE[step]!.d}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between border-t border-border/60 pt-3 sm:pt-4 gap-2">
                  <span className="text-xs text-primary font-medium">✦ Recommended by Parisian Ateliers</span>
                  <Link
                    to="/shop"
                    search={{ category: "Skincare" }}
                    className="eyebrow text-[0.6rem] sm:text-[0.62rem] text-[#181614] hover:text-primary transition"
                  >
                    View Step Formulations →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 28-Day Clinical Transformation (Before & After Slider) */}
      <section className="bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Validated Results"
            title="28-Day Transformation"
            sub="Witness the visible clinical results of our Obsidian Elixir cellular protocol. Drag the slider to compare."
          />
          <div className="relative aspect-[4/3] sm:aspect-[16/10] select-none overflow-hidden rounded-md border border-[#E8DEC9] shadow-xl">
            {/* After Image */}
            <img src={hero} alt="Day 28: Radiant Skin" className="absolute inset-0 h-full w-full object-cover" />

            {/* Before Image (Cropped by split width) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
              <img
                src={hero}
                alt="Day 1: Dull Skin"
                className="h-full max-w-none object-cover grayscale brightness-95 saturate-50 contrast-95"
                style={{ width: `${10000 / split}%` }}
              />
            </div>

            {/* Splitter Line with Golden Glow */}
            <div
              className="absolute inset-y-0 w-0.5 bg-primary shadow-[0_0_12px_rgba(212,175,55,0.7)]"
              style={{ left: `${split}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-xl animate-ripple cursor-ew-resize">
                <span className="text-[0.65rem] sm:text-xs font-bold">⟷</span>
              </div>
            </div>

            {/* Pill Labels */}
            <span className="eyebrow absolute left-3 top-3 sm:left-5 sm:top-5 rounded-full border border-border/80 bg-white/90 px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[0.54rem] sm:text-[0.62rem] text-[#181614] shadow-sm backdrop-blur-md">
              Day 01 — Baseline
            </span>
            <span className="eyebrow absolute right-3 top-3 sm:right-5 sm:top-5 rounded-full border border-primary/50 bg-white/90 px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[0.54rem] sm:text-[0.62rem] text-[#8C6418] shadow-sm backdrop-blur-md font-semibold">
              Day 28 — Glow
            </span>

            {/* Interactive Range Input Slider */}
            <input
              type="range"
              min={5}
              max={95}
              value={split}
              onChange={(e) => setSplit(+e.target.value)}
              aria-label="Drag to compare before and after results"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="premium-card p-3 sm:p-5">
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary">+98%</span>
              <p className="text-[0.54rem] sm:text-[0.65rem] text-[#5C5449] uppercase mt-1 font-medium">Luminosity</p>
            </div>
            <div className="premium-card p-3 sm:p-5">
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary">-43%</span>
              <p className="text-[0.54rem] sm:text-[0.65rem] text-[#5C5449] uppercase mt-1 font-medium">Fine Lines</p>
            </div>
            <div className="premium-card p-3 sm:p-5">
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary">72h</span>
              <p className="text-[0.54rem] sm:text-[0.65rem] text-[#5C5449] uppercase mt-1 font-medium">Moisture</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Iconic Houses & Ateliers Showcase (Haute Luxury Brand Gallery with Photos) */}
      <section className="border-y border-[#E8DEC9] bg-gradient-to-b from-[#F7F3EB] via-[#FAF8F5] to-[#F7F3EB] py-16 sm:py-28 relative overflow-hidden">
        {/* Subtle Luxury Ambient Background Accents */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <SectionHead
            eyebrow="The World's Finest Houses"
            title="Iconic Ateliers & Maisons"
            sub="Explore heritage French parfumeries, high-fashion cosmetics houses, and cellular innovators curated with 100% authenticity."
          />

          {/* 8-Brand Editorial Grid with High-Fashion Photos */}
          <div className="mt-8 sm:mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {BRAND_HOUSES.map((house) => (
              <Link
                key={house.name}
                to="/shop"
                search={{ q: house.name }}
                className="group relative overflow-hidden rounded-xl border border-[#E8DEC9] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_20px_40px_-10px_rgba(35,28,18,0.18)]"
              >
                {/* Brand Editorial Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={house.img}
                    alt={`${house.name} Haute Creation`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

                  {/* Top Badge */}
                  <div className="absolute left-3 top-3 sm:left-3.5 sm:top-3.5 rounded-full border border-white/40 bg-black/40 px-2.5 py-0.5 sm:px-3 sm:py-1 shadow-md backdrop-blur-md">
                    <span className="eyebrow text-[0.5rem] sm:text-[0.54rem] font-bold tracking-widest text-[#FFE8B3]">
                      {house.badge}
                    </span>
                  </div>

                  {/* Year Tag on Top Right */}
                  <div className="absolute right-3 top-3 sm:right-3.5 sm:top-3.5 rounded-full bg-white/90 px-2 py-0.5 sm:px-2.5 sm:py-0.5 shadow-sm backdrop-blur-sm">
                    <span className="eyebrow text-[0.48rem] sm:text-[0.52rem] font-semibold text-[#8C6418]">
                      {house.year}
                    </span>
                  </div>
                </div>

                {/* Brand Details Card Content */}
                <div className="p-4 sm:p-6">
                  <div>
                    <p className="eyebrow text-[0.52rem] sm:text-[0.55rem] font-semibold tracking-wider text-[#8C6418]">
                      {house.origin}
                    </p>
                    <h3 className="font-brand text-xl sm:text-2xl font-light uppercase tracking-wider text-[#181614] transition-colors duration-300 group-hover:text-primary mt-0.5 sm:mt-1">
                      {house.name}
                    </h3>
                  </div>

                  <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#6B6254]">
                    {house.tagline}
                  </p>

                  {/* Hover Action Link */}
                  <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-[#E8DEC9]/70 pt-3 sm:pt-4">
                    <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] font-semibold text-[#181614] transition-colors group-hover:text-primary">
                      Explore Creations
                    </span>
                    <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#E8DEC9] bg-[#FAF8F5] text-[#181614] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Haute Luxury 3D Gold & Noir Brand Marquee Ticker */}
          <div className="relative mt-10 sm:mt-16 overflow-hidden rounded-full border-2 border-[#D4AF37]/60 bg-gradient-to-r from-[#14100C] via-[#231B13] to-[#14100C] py-3.5 sm:py-5 shadow-[0_15px_45px_-10px_rgba(212,175,55,0.35),inset_0_1px_3px_rgba(255,213,79,0.4)] backdrop-blur-xl ribbon-light-sweep">
            {/* Left & Right Gradient Vignette Curtains for Smooth Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#14100C] via-[#14100C]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#14100C] via-[#14100C]/70 to-transparent" />

            <div className="flex w-max animate-marquee gap-8 sm:gap-14 select-none items-center">
              {Array.from({ length: 4 }).flatMap(() => BRAND_HOUSES).map((b, i) => (
                <Link
                  key={i}
                  to="/shop"
                  search={{ q: b.name }}
                  className="group inline-flex items-center gap-3 sm:gap-4 transition-transform duration-300 hover:scale-108"
                >
                  <span className="font-brand text-sm sm:text-lg tracking-[0.24em] sm:tracking-[0.28em] text-[#FFFDF8] uppercase font-medium transition-colors group-hover:text-[#FFD54F] drop-shadow-sm">
                    {b.name}
                  </span>
                  <span className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-2 py-0.5 text-[0.52rem] sm:text-[0.58rem] font-bold tracking-widest text-[#FFD54F] shadow-xs">
                    {b.year}
                  </span>
                  <span className="text-[#FFD54F] text-xs sm:text-sm drop-shadow-[0_0_8px_rgba(255,213,79,0.7)]">
                    ✦
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Ingredient Science Lab (Interactive Formula Explorer with High-Luxury Visual Cards) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] py-16 sm:py-28 border-t border-[#E8DEC9]">
        {/* Subtle Ambient Background Glows */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <SectionHead
            eyebrow="Laboratoire de Botanique · Cellular Science"
            title="Beauty, Backed by Botanicals"
            sub="Explore the potent bio-actives, rare French flora, and alpine minerals that form the cornerstone of our clinical formulations."
          />

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_1.4fr] items-stretch mt-8 sm:mt-12">
            {/* Left Column: 6 Interactive Botanical Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {Object.keys(INGREDIENTS).map((k) => {
                const item = INGREDIENTS[k]!;
                const active = ing === k;
                return (
                  <button
                    key={k}
                    onClick={() => setIng(k)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 sm:p-5 text-left transition-all duration-400 cursor-pointer ${
                      active
                        ? "bg-gradient-to-b from-[#181614] via-[#221D17] to-[#181614] text-white shadow-[0_15px_35px_rgba(24,22,20,0.35)] -translate-y-1 sm:-translate-y-1.5 border-2 border-[#D4AF37]"
                        : "border border-[#E8DEC9] bg-white/90 text-[#181614] hover:border-[#D4AF37]/70 hover:bg-white hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm"
                    }`}
                  >
                    {/* Top Gold Indicator Bar for Active Card */}
                    {active && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFE599] to-[#D4AF37] animate-pulse" />
                    )}

                    <div>
                      {/* Top Header: Purity Badge & Icon */}
                      <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                        <span
                          className={`eyebrow rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.52rem] sm:text-[0.56rem] font-bold tracking-wider transition-colors ${
                            active
                              ? "bg-[#D4AF37] text-[#141210] shadow-sm"
                              : "bg-[#FAF7F2] text-[#8C6418] border border-[#E8DEC9]"
                          }`}
                        >
                          {item.purity}
                        </span>
                        <span
                          className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-xs transition-colors ${
                            active ? "bg-[#D4AF37]/20 text-[#FFD54F]" : "bg-[#FAF7F2] text-[#8C6418]"
                          }`}
                        >
                          {item.icon}
                        </span>
                      </div>

                      {/* Ingredient Name */}
                      <h3
                        className={`font-display text-lg sm:text-2xl font-medium tracking-wide transition-colors ${
                          active ? "text-[#FFFDF8]" : "text-[#181614] group-hover:text-primary"
                        }`}
                      >
                        {k}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 sm:mt-1 transition-colors ${
                          active ? "text-[#D5C9B6]" : "text-[#6B6254]"
                        }`}
                      >
                        {item.category}
                      </p>
                    </div>

                    {/* Bottom Origin & Pin */}
                    <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-current/10 flex items-center justify-between text-xs">
                      <span className={active ? "text-[#FFD54F] font-semibold text-[0.7rem] sm:text-xs" : "text-[#8C6418] font-medium text-[0.7rem] sm:text-xs"}>
                        {item.flag} {item.origin}
                      </span>
                      <span className={`text-[0.62rem] sm:text-[0.65rem] font-bold ${active ? "text-[#FFD54F]" : "text-primary"}`}>
                        {item.stat}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: High-Luxury Laboratory Showcase Dossier */}
            <div
              key={ing}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37]/50 bg-gradient-to-br from-white via-[#FAF7F2] to-[#F5EFE6] p-5 sm:p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(212,175,55,0.22)] animate-in fade-in zoom-in-95 duration-400"
            >
              {/* Corner Gold Accent Filigree */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-bl from-[#D4AF37]/20 to-transparent blur-2xl" />

              <div>
                {/* Dossier Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8DEC9] pb-4 sm:pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#8C6418] text-sm sm:text-base font-bold shadow-xs">
                      {INGREDIENTS[ing]!.icon}
                    </span>
                    <div>
                      <p className="eyebrow text-[0.56rem] sm:text-[0.62rem] text-primary font-bold tracking-[0.2em] sm:tracking-[0.25em]">
                        HERO BIO-ACTIVE FORMULA
                      </p>
                      <p className="text-[0.7rem] sm:text-xs text-[#6B6254] font-medium">
                        {INGREDIENTS[ing]!.category} · {INGREDIENTS[ing]!.origin}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#D4AF37]/60 bg-white px-3 py-0.5 sm:px-3.5 sm:py-1 text-[0.7rem] sm:text-xs font-bold text-[#8C6418] shadow-sm">
                    {INGREDIENTS[ing]!.purity}
                  </span>
                </div>

                {/* Main Heading & Description */}
                <div className="mt-4 sm:mt-6">
                  <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-[#181614] tracking-tight">
                    {ing}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed text-[#554E44]">
                    {INGREDIENTS[ing]!.description}
                  </p>
                </div>

                {/* Clinical Efficacy Metric Banner */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between rounded-xl sm:rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] p-4 sm:p-5 shadow-sm gap-2">
                  <div>
                    <span className="eyebrow text-[0.55rem] sm:text-[0.6rem] text-[#8C6418] font-bold tracking-[0.18em] sm:tracking-[0.22em] block">
                      CLINICAL VALIDATION
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#181614] mt-0.5">
                      {INGREDIENTS[ing]!.statLabel}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-display text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#9E782F] via-[#D4AF37] to-[#7A5412] bg-clip-text text-transparent">
                      {INGREDIENTS[ing]!.stat}
                    </span>
                  </div>
                </div>

                {/* Clinical Bio-Action Checklist */}
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <p className="eyebrow text-[0.6rem] sm:text-[0.65rem] font-bold text-[#181614] tracking-[0.18em] sm:tracking-[0.2em]">
                    CLINICAL BIO-ACTIONS &amp; TARGETS:
                  </p>
                  {INGREDIENTS[ing]!.benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2.5 sm:gap-3 rounded-xl border border-[#E8DEC9]/80 bg-white/80 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-[#2C261F] shadow-xs transition-transform duration-300 hover:translate-x-1"
                    >
                      <div className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <span className="font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E8DEC9]">
                <Link
                  to="/shop"
                  search={{ q: ing }}
                  className="eyebrow luxury-btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#181614] via-[#2A231C] to-[#181614] py-3.5 sm:py-4 text-center text-xs sm:text-sm font-bold text-[#FFE8B3] shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(24,22,20,0.35)] hover:border-[#D4AF37] border border-transparent"
                >
                  <span>Explore Formulations with {ing}</span>
                  <Sparkles className="h-4 w-4 text-[#FFD54F]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Bestsellers & Iconic Creations (Cards with Animations) */}
      <section className="bg-[#F7F3EB] py-16 sm:py-28 border-t border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="The Icon Collection"
            title="Celebrated Formulations"
            sub="The most beloved creations revered by beauty editors and patrons worldwide."
          />
          <div className="mb-8 sm:mb-12 flex overflow-x-auto pb-2 sm:pb-0 scrollbar-none justify-start sm:justify-center gap-2 px-1">
            {["All", "Makeup", "Skincare", "Fragrance"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`eyebrow shrink-0 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-[0.62rem] sm:text-[0.65rem] font-medium tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-300 ${
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
            {best.slice(0, 8).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Maison Patron Testimonials (Light Luxury Theme) */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] py-16 sm:py-28 border-t border-[#E8DEC9] relative overflow-hidden">
        <div
          key={story}
          className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-12 px-4 sm:px-6 md:grid-cols-2 animate-in fade-in duration-500"
        >
          <div className="premium-card p-2 sm:p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
              <img
                src={STORIES[story]!.img}
                alt={STORIES[story]!.n}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-full bg-white/90 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[0.54rem] sm:text-[0.6rem] text-[#8C6418] shadow-sm backdrop-blur-md font-semibold">
                ✦ VERIFIED MAISON PATRON
              </div>
            </div>
          </div>
          <div>
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl font-light italic leading-relaxed md:text-4xl text-[#181614]">
              “{STORIES[story]!.q}”
            </blockquote>
            <div className="mt-6 sm:mt-8 border-t border-border/80 pt-3 sm:pt-4">
              <p className="font-display text-lg sm:text-xl text-primary font-semibold">{STORIES[story]!.n}</p>
              <p className="text-xs text-[#5C5449]">{STORIES[story]!.role} · {STORIES[story]!.loc}</p>
            </div>
            {/* Story switcher pills */}
            <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-2.5">
              {STORIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStory(i)}
                  aria-label={`View review ${i + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    i === story ? "w-10 sm:w-12 bg-primary" : "w-5 sm:w-6 bg-[#D8CCB8] hover:bg-[#BBAE9A]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. Editorial Journal & Rituals (Light Cards) */}
      <section className="bg-white py-16 sm:py-28 border-t border-[#E8DEC9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="The Beauty Gazette"
            title="The Parisian Beauty Journal"
            sub="In-depth skincare guides, masterclass techniques, and seasonal beauty rituals."
          />
          <div className="grid gap-5 sm:gap-8 md:grid-cols-3">
            {JOURNAL.map((j) => (
              <Link key={j.id} to="/journal" hash={j.id} className="premium-card group flex flex-col p-2.5 sm:p-3">
                <div className="aspect-[4/3] overflow-hidden rounded-[4px] bg-[#FAF8F5]">
                  <img
                    src={j.img}
                    alt={j.t}
                    loading="lazy"
                    className="premium-card-img h-full w-full object-cover"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <p className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-primary">{j.cat} · 4 MIN READ</p>
                  <h3 className="mt-1.5 sm:mt-2 font-display text-xl sm:text-2xl font-medium text-[#181614] transition-colors group-hover:text-primary leading-snug">
                    {j.t}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 line-clamp-2 text-xs leading-relaxed text-[#5C5449]">
                    {j.body}
                  </p>
                  <span className="eyebrow mt-3 sm:mt-4 inline-flex items-center gap-1 text-[0.58rem] sm:text-[0.62rem] text-primary font-medium">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
