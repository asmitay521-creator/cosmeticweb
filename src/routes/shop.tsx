import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";
import { PageHero, ProductCard } from "@/components/ProductCard";

const search = z.object({ category: z.string().optional(), q: z.string().optional() });

export const Route = createFileRoute("/shop")({
  validateSearch: (s) => search.parse(s),
  head: () => ({
    meta: [
      { title: "Products Catalogue | Sachin Agencies — Ganpati Peth, Sangli" },
      {
        name: "description",
        content:
          "Shop 100% genuine skincare, haircare, makeup, and salon wholesale products from Garnier, L'Oréal Paris, Maybelline, Lakmé, NIVEA, Matrix, and Streax at Sachin Agencies, Sangli.",
      },
      { property: "og:title", content: "Products Catalogue — Sachin Agencies, Sangli" },
      {
        property: "og:description",
        content: "Authorized distributor of Garnier, L'Oréal, Maybelline, Lakmé, Matrix, and NIVEA in Sangli.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category, q } = Route.useSearch();
  const [showAll, setShowAll] = useState(false);

  const list = PRODUCTS.filter(
    (p) =>
      (!category || p.c === category) &&
      (!q || `${p.n} ${p.b} ${p.c} ${p.d}`.toLowerCase().includes(q.toLowerCase())),
  );

  const displayedList = showAll ? list : list.slice(0, 4);

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow={q ? `Search Results for “${q}”` : "Sachin Agencies Store"}
        title={category ?? (q ? "Curated Results" : "All Beauty & Salon Products")}
        sub="100% genuine Garnier, L'Oréal Paris, Maybelline, Lakmé, Matrix, Streax, and NIVEA products at trusted Sangli wholesale & retail prices."
      />

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 py-8 sm:py-16">
        {/* Category Pills with horizontal swipe on mobile */}
        <div className="mb-6 sm:mb-10 flex overflow-x-auto pb-2 scrollbar-none flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          <Link
            to="/shop"
            className={`eyebrow shrink-0 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[0.62rem] sm:text-[0.65rem] font-medium tracking-[0.16em] sm:tracking-[0.2em] transition-all duration-300 ${
              !category ? "bg-ink text-ink-foreground shadow-md" : "border border-border/80 bg-card hover:border-primary"
            }`}
          >
            All Creations
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              to="/shop"
              search={{ category: c }}
              className={`eyebrow shrink-0 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[0.62rem] sm:text-[0.65rem] font-medium tracking-[0.16em] sm:tracking-[0.2em] transition-all duration-300 ${
                category === c
                  ? "bg-ink text-ink-foreground shadow-md"
                  : "border border-border/80 bg-card hover:border-primary"
              }`}
            >
              {c}
            </Link>
          ))}
        </div>

        {/* Counter */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-border/60 pb-3 sm:pb-4 text-xs text-muted-foreground">
          <span>Showing {displayedList.length} of {list.length} Featured Formulations</span>
          <span className="eyebrow text-[0.58rem] sm:text-[0.6rem] text-primary">✦ 100% Certified Authentic Formulations</span>
        </div>

        {list.length === 0 ? (
          <div className="py-16 sm:py-24 text-center">
            <h3 className="font-display text-2xl sm:text-3xl">No Creations Found</h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">We couldn't find any creations matching your search query.</p>
            <Link
              to="/shop"
              className="eyebrow luxury-btn-shine mt-6 inline-block rounded-sm bg-ink px-6 sm:px-8 py-3 sm:py-3.5 text-xs text-ink-foreground"
            >
              View All Creations
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 animate-in fade-in duration-300">
              {displayedList.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>

            {list.length > 4 && (
              <div className="mt-10 sm:mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="eyebrow luxury-btn-shine inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-[#FAF8F5] px-7 py-3 text-xs font-bold text-[#8C6418] shadow-xs transition-all hover:bg-white hover:shadow-md hover:scale-105 cursor-pointer"
                >
                  {showAll ? "Show Less (Top 4 Only)" : `View More Products (${list.length - 4} More)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
