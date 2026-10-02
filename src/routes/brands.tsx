import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ProductCard";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

import brandDior from "@/assets/brands/dior.jpg";
import brandChanel from "@/assets/brands/chanel.jpg";
import brandGuerlain from "@/assets/brands/guerlain.jpg";
import brandYsl from "@/assets/brands/ysl.jpg";
import brandLamer from "@/assets/brands/lamer.jpg";
import brandTomford from "@/assets/brands/tomford.jpg";
import brandLancome from "@/assets/brands/lancome.jpg";
import brandMfk from "@/assets/brands/mfk.jpg";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Iconic Houses & Ateliers | Maison Luméra Paris" },
      { name: "description", content: "Explore the legendary beauty houses and artisanal fragrance ateliers curated at Maison Luméra Paris." },
      { property: "og:title", content: "Iconic Houses & Ateliers — Maison Luméra Paris" },
      { property: "og:description", content: "The world's most prestigious luxury beauty houses, 100% authentic." },
    ],
  }),
  component: Brands,
});

const BRAND_HOUSES = [
  {
    name: "Dior",
    origin: "Avenue Montaigne, Paris",
    year: "Est. 1946",
    tagline: "Haute Parfumerie, couture glow, and timeless Parisian sophistication.",
    img: brandDior,
    badge: "Maison Iconique",
    category: "Fragrance & Makeup",
  },
  {
    name: "Chanel",
    origin: "Rue Cambon, Paris",
    year: "Est. 1910",
    tagline: "The legendary N°5 legacy and uncompromising monochrome elegance.",
    img: brandChanel,
    badge: "Haute Couture",
    category: "Fragrance & Cosmetics",
  },
  {
    name: "Guerlain",
    origin: "Champs-Élysées, Paris",
    year: "Est. 1828",
    tagline: "Two centuries of royal French perfumery and Abeille Royale honey elixirs.",
    img: brandGuerlain,
    badge: "Heritage 1828",
    category: "Skincare & Parfumerie",
  },
  {
    name: "Yves Saint Laurent",
    origin: "Place Vendôme, Paris",
    year: "Est. 1961",
    tagline: "Gold couture accents, vibrant lip pigments, and intoxicating bold perfumes.",
    img: brandYsl,
    badge: "Couture Beauty",
    category: "Couture Makeup & Scents",
  },
  {
    name: "La Mer",
    origin: "Pacific Biosphere",
    year: "Est. 1965",
    tagline: "Cell-renewing Miracle Broth™ and deep marine biotechnology skincare.",
    img: brandLamer,
    badge: "Clinical Elixir",
    category: "Cellular Skincare",
  },
  {
    name: "Tom Ford",
    origin: "Madison Ave, New York",
    year: "Est. 2005",
    tagline: "Private Blend artisanal fragrances and decadent architectural cosmetics.",
    img: brandTomford,
    badge: "Private Blend",
    category: "Private Fragrances",
  },
  {
    name: "Lancôme",
    origin: "Faubourg Saint-Honoré",
    year: "Est. 1935",
    tagline: "Absolue French Rose Grand Cru extracts and French beauty refinement.",
    img: brandLancome,
    badge: "French Rose",
    category: "Prestige Skincare",
  },
  {
    name: "Maison Francis Kurkdjian",
    origin: "Rue d'Alger, Paris",
    year: "Est. 2009",
    tagline: "Pure olfactory alchemy including the iconic Baccarat Rouge 540.",
    img: brandMfk,
    badge: "Haute Parfumerie",
    category: "Niche Extrait",
  },
];

function Brands() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <PageHero
        eyebrow="The World's Finest Houses"
        title="Iconic Ateliers & Maisons"
        sub="Legendary French parfumeries, heritage cosmetics houses, and clean clinical innovators — curated with 100% authenticity guarantee."
      />

      {/* Brand Cards Grid */}
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 py-10 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {BRAND_HOUSES.map((b) => (
            <Link
              key={b.name}
              to="/shop"
              search={{ q: b.name }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8DEC9] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_25px_50px_-12px_rgba(35,28,18,0.2)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5]">
                <img
                  src={b.img}
                  alt={`${b.name} Masterpiece`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

                {/* Badge */}
                <div className="absolute left-3.5 top-3.5 rounded-full border border-white/40 bg-black/50 px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-md backdrop-blur-md">
                  <span className="eyebrow text-[0.52rem] sm:text-[0.54rem] font-bold tracking-widest text-[#FFE8B3]">
                    {b.badge}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute right-3.5 top-3.5 rounded-full bg-white/90 px-2 sm:px-2.5 py-0.5 shadow-sm backdrop-blur-sm">
                  <span className="eyebrow text-[0.5rem] sm:text-[0.52rem] font-semibold text-[#8C6418]">
                    {b.year}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                <div>
                  <div className="flex items-center justify-between text-[#8C6418]">
                    <span className="eyebrow text-[0.55rem] font-semibold tracking-wider">
                      {b.origin}
                    </span>
                    <span className="text-[0.62rem] text-muted-foreground font-medium">
                      {b.category}
                    </span>
                  </div>

                  <h3 className="font-brand text-xl sm:text-2xl font-light uppercase tracking-wider text-[#181614] transition-colors duration-300 group-hover:text-primary mt-1.5">
                    {b.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#6B6254]">
                    {b.tagline}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-[#E8DEC9]/70 pt-3 sm:pt-4">
                  <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] font-semibold text-[#181614] transition-colors group-hover:text-primary">
                    Explore Creations
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E8DEC9] bg-[#FAF8F5] text-[#181614] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Authenticity Guarantee Banner */}
        <div className="mt-12 sm:mt-20 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#FAF8F5] via-white to-[#FAF8F5] p-6 sm:p-10 text-center shadow-sm">
          <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-primary">
            <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#8C6418]" />
          </div>
          <h3 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl font-medium text-[#181614]">
            100% Certified Maison Authenticity
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#6B6254]">
            Every formulation, fragrance bottle, and cosmetic product is procured directly from authorized Parisian ateliers with sealed batch codes and laboratory verification.
          </p>
        </div>
      </div>
    </main>
  );
}
