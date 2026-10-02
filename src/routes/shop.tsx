import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";
import { PageHero, ProductCard } from "@/components/ProductCard";

const search = z.object({ category: z.string().optional(), q: z.string().optional() });

export const Route = createFileRoute("/shop")({
  validateSearch: (s) => search.parse(s),
  head: () => ({
    meta: [
      { title: "The Atelier — All Creations | Maison Luméra Paris" },
      {
        name: "description",
        content: "Explore the complete catalogue of Parisian haute skincare, couture makeup, and artisanal fragrances at Maison Luméra.",
      },
      { property: "og:title", content: "The Atelier — Maison Luméra Paris" },
      { property: "og:description", content: "Curated French luxury beauty formulations, 100% authentic." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category, q } = Route.useSearch();
  const list = PRODUCTS.filter(
    (p) =>
      (!category || p.c === category) &&
      (!q || `${p.n} ${p.b} ${p.c} ${p.d}`.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow={q ? `Search Results for “${q}”` : "The Parisian Atelier"}
        title={category ?? (q ? "Curated Results" : "All Creations")}
        sub="Discover botanical extractions, light-diffusing cosmetics, and couture fragrances crafted for luminous beauty."
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Category Pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <Link
            to="/shop"
            className={`eyebrow rounded-full px-6 py-2.5 text-[0.65rem] font-medium tracking-[0.2em] transition-all duration-300 ${
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
              className={`eyebrow rounded-full px-6 py-2.5 text-[0.65rem] font-medium tracking-[0.2em] transition-all duration-300 ${
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
        <div className="mb-8 flex items-center justify-between border-b border-border/60 pb-4 text-xs text-muted-foreground">
          <span>Showing {list.length} {list.length === 1 ? "Creation" : "Bespoke Creations"}</span>
          <span className="eyebrow text-[0.6rem] text-primary">✦ 100% Certified Authentic Formulations</span>
        </div>

        {list.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="font-display text-3xl">No Creations Found</h3>
            <p className="mt-2 text-sm text-muted-foreground">We couldn't find any creations matching your search query.</p>
            <Link
              to="/shop"
              className="eyebrow luxury-btn-shine mt-6 inline-block rounded-sm bg-ink px-8 py-3.5 text-ink-foreground"
            >
              View All Creations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 animate-in fade-in duration-300">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
