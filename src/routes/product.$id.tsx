import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Minus, Plus, Truck, ShieldCheck, RotateCcw, Sparkles, Check, Heart, Share2 } from "lucide-react";
import { getProduct, inr, PRODUCTS } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { ProductCard, SectionHead } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Creation Not Found — Maison Luméra Paris" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.n} — ${p.b} | Maison Luméra Paris` },
        { name: "description", content: p.d },
        { property: "og:title", content: `${p.n} — Maison Luméra Paris` },
        { property: "og:description", content: p.d },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="py-32 text-center">
      <h1 className="font-display text-5xl">Creation Not Found</h1>
      <p className="mt-3 text-muted-foreground">The beauty item you are seeking is currently unavailable in the atelier.</p>
      <Link to="/shop" className="eyebrow luxury-btn-shine mt-8 inline-block bg-ink px-8 py-4 text-ink-foreground">
        Return to Atelier
      </Link>
    </main>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);
  const { add } = useCart();
  const related = PRODUCTS.filter((x) => x.c === p.c && x.id !== p.id).slice(0, 4);

  const handleAdd = () => {
    add(p.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen">
      {/* Breadcrumb strip */}
      <div className="border-b border-border/60 bg-secondary/30 px-3.5 sm:px-6 py-2.5 sm:py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs text-muted-foreground overflow-x-auto scrollbar-none whitespace-nowrap">
          <Link to="/" className="hover:text-primary transition shrink-0">Maison</Link>
          <span className="shrink-0">/</span>
          <Link to="/shop" search={{ category: p.c }} className="hover:text-primary transition shrink-0">{p.c}</Link>
          <span className="shrink-0">/</span>
          <span className="text-foreground truncate max-w-[140px] sm:max-w-xs">{p.n}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-16 px-3.5 sm:px-6 py-6 sm:py-16 md:grid-cols-2 lg:gap-20">
        {/* Product Image Stage */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-2xl border border-border/80 max-h-[480px] sm:max-h-none mx-auto">
            <img src={p.img} alt={p.n} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <span className="eyebrow absolute left-3 sm:left-4 top-3 sm:top-4 rounded-[2px] border border-primary/40 bg-background/95 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[0.58rem] sm:text-[0.62rem] text-foreground shadow-md backdrop-blur-md">
            ✦ {p.tag}
          </span>
          <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex gap-1.5 sm:gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="rounded-full border border-border/50 bg-background/90 p-2 sm:p-2.5 shadow-md backdrop-blur-md transition hover:scale-110 active:scale-95"
              aria-label="Wishlist"
            >
              <Heart className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: p.n, url: window.location.href });
                }
              }}
              className="rounded-full border border-border/50 bg-background/90 p-2 sm:p-2.5 shadow-md backdrop-blur-md transition hover:scale-110 active:scale-95"
              aria-label="Share"
            >
              <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Product Specs & Purchasing */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="eyebrow text-[0.6rem] sm:text-[0.65rem] text-primary">{p.b}</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="eyebrow text-[0.58rem] sm:text-[0.62rem] text-muted-foreground">{p.c}</span>
          </div>

          <h1 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            {p.n}
          </h1>

          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-medium text-foreground">4.9 / 5.0</span>
            <span className="text-xs text-muted-foreground">(142 verified client reviews)</span>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="font-display text-3xl sm:text-4xl font-semibold text-foreground">{inr(p.p)}</span>
            <span className="text-[0.7rem] sm:text-xs text-muted-foreground">Taxes included · 50ml / 1.7 fl oz</span>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.d}</p>

          {/* Complimentary sample notice */}
          <div className="mt-4 sm:mt-6 rounded-sm border border-primary/30 bg-primary/5 p-3 sm:p-3.5 text-xs text-foreground">
            <span className="text-primary font-medium">✦ Maison Privilege:</span> Each order includes 2 complimentary deluxe couture samples and signature gift packaging.
          </div>

          {/* Add to bag controls */}
          <div className="mt-6 sm:mt-8 flex flex-row items-center gap-2.5 sm:gap-4">
            <div className="flex h-12 sm:h-14 shrink-0 items-center rounded-sm border border-border bg-card px-1 sm:px-2">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="p-2 sm:p-3 transition hover:text-primary"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <span className="w-7 sm:w-10 text-center text-sm sm:text-base font-medium text-foreground">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 sm:p-3 transition hover:text-primary"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`eyebrow luxury-btn-shine flex h-12 sm:h-14 flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-sm text-[0.65rem] sm:text-[0.72rem] font-semibold shadow-lg transition-all ${
                added
                  ? "bg-primary text-primary-foreground"
                  : "bg-ink text-ink-foreground hover:bg-ink/90"
              }`}
            >
              {added ? (
                <>
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Added to Bag
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" /> Add to Bag ✦
                </>
              )}
            </button>
          </div>

          {/* Luxury Promises */}
          <ul className="mt-8 sm:mt-10 space-y-2.5 sm:space-y-3.5 border-t border-border/80 pt-6 sm:pt-8 text-xs text-muted-foreground">
            <li className="flex items-center gap-2.5 sm:gap-3">
              <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>Complimentary express delivery on orders over ₹999</span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>100% Certified authentic botanical formulation, crafted in France</span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span>Complimentary 14-day white-glove returns & exchanges</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Complete the ritual recommendations */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-3.5 sm:px-6 pb-20 sm:pb-28 pt-8 sm:pt-12 border-t border-border/60">
          <SectionHead
            eyebrow="Complementary Rituals"
            title="Complete the Formulation"
            sub="Pair this creation with harmonious skincare and fragrance notes."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.id} p={r} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
