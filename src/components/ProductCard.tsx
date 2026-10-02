import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Star, Sparkles, Check } from "lucide-react";
import { inr, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(p.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="premium-card group flex flex-col p-3">
      {/* Product Image Stage */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[#FAF8F5]">
        <Link to="/product/$id" params={{ id: p.id }} className="block h-full w-full">
          <img
            src={p.img}
            alt={p.n}
            loading="lazy"
            className="premium-card-img h-full w-full object-cover"
          />
        </Link>

        {/* Luxury Tag Badge */}
        <span className="eyebrow absolute left-2.5 top-2.5 rounded-[2px] border border-primary/40 bg-white/95 px-2.5 py-1 text-[0.56rem] font-medium tracking-[0.2em] text-[#221F1C] shadow-sm backdrop-blur-sm">
          {p.tag}
        </span>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked(!liked);
          }}
          aria-label="Save to wishlist"
          className="absolute right-2.5 top-2.5 rounded-full border border-border/50 bg-white/90 p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-90"
        >
          <Heart
            className={`h-3.5 w-3.5 transition-colors duration-200 ${
              liked ? "fill-primary text-primary" : "text-[#554E44]"
            }`}
          />
        </button>

        {/* Quick Add To Bag Slide-Up Button */}
        <button
          onClick={handleAdd}
          className={`eyebrow luxury-btn-shine absolute inset-x-2.5 bottom-2.5 flex items-center justify-center gap-2 rounded-[2px] py-3 text-[0.64rem] font-medium shadow-md transition-all duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
            added
              ? "bg-primary text-primary-foreground"
              : "bg-[#1C1A17] text-white hover:bg-primary hover:text-black"
          }`}
        >
          {added ? (
            <>
              <Check className="h-3.5 w-3.5 text-black" /> Added ✦
            </>
          ) : (
            <>
              <Sparkles className="h-3 w-3 text-primary" /> Quick Add
            </>
          )}
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-3.5 flex flex-1 flex-col px-1 pb-1">
        <p className="eyebrow text-[0.58rem] tracking-[0.22em] text-primary">{p.b}</p>
        <Link
          to="/product/$id"
          params={{ id: p.id }}
          className="mt-1 font-display text-lg font-medium tracking-wide text-[#1A1815] transition-colors hover:text-primary line-clamp-1"
        >
          {p.n}
        </Link>
        <div className="mt-2 flex items-center justify-between border-t border-border/40 pt-2">
          <div className="flex items-center gap-1">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <span className="text-[0.62rem] text-muted-foreground font-medium">(4.9)</span>
          </div>
          <span className="font-sans text-sm font-semibold tracking-tight text-[#1A1815]">
            {inr(p.p)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  light,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-14 text-center">
      <div className="mb-3 inline-flex items-center justify-center gap-2">
        <span className="h-px w-6 bg-primary/60" />
        <p className="eyebrow tracking-[0.3em] text-primary font-medium">
          {eyebrow}
        </p>
        <span className="h-px w-6 bg-primary/60" />
      </div>
      <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-[#1A1815] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5F584E]">
          {sub}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F1E8] to-[#FAF8F5] border-b border-border/60 px-6 pb-20 pt-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08)_0%,transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="text-primary text-xs">✦</span>
          <p className="eyebrow tracking-[0.3em] text-primary">{eyebrow}</p>
          <span className="text-primary text-xs">✦</span>
        </div>
        <h1 className="mt-2 font-display text-5xl uppercase tracking-[0.05em] text-[#1A1815] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {sub && (
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#5F584E]">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
