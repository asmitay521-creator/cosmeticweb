import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Sparkles, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/lib/cart";
import { inr, SHIPPING_FREE_ABOVE } from "@/lib/catalog";
import { PageHero } from "@/components/ProductCard";
import { QtyStepper } from "@/components/SiteChrome";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Beauty Bag | Maison Luméra Paris" },
      { name: "description", content: "Review your curated luxury beauty creations and proceed to bespoke checkout." },
      { property: "og:title", content: "Your Beauty Bag — Maison Luméra Paris" },
      { property: "og:description", content: "Review your luxury beauty selections." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const cart = useCart();
  const freeShippingProgress = Math.min(100, Math.round((cart.subtotal / SHIPPING_FREE_ABOVE) * 100));

  return (
    <main className="min-h-screen">
      <PageHero eyebrow="Curated Selections" title="Your Beauty Bag" sub="Complimentary deluxe samples and white-glove packaging on every order." />
      <div className="mx-auto max-w-6xl px-3.5 sm:px-6 py-8 sm:py-16">
        {cart.lines.length === 0 ? (
          <div className="py-16 sm:py-20 text-center">
            <h3 className="font-display text-2xl sm:text-3xl">Your Bag is Empty</h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Discover genuine skincare, salon haircare, and makeup essentials.</p>
            <Link to="/shop" className="eyebrow luxury-btn-shine mt-6 sm:mt-8 inline-block rounded-sm bg-ink px-6 sm:px-8 py-3.5 sm:py-4 text-xs text-ink-foreground shadow-lg">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              {/* Free shipping progress */}
              <div className="mb-6 rounded-sm border border-border/80 bg-secondary/40 p-3 sm:p-4">
                <div className="flex items-center justify-between text-[0.72rem] sm:text-xs">
                  <span className="font-medium text-foreground">
                    {cart.subtotal >= SHIPPING_FREE_ABOVE
                      ? "✦ Complimentary Maison Express Delivery Unlocked"
                      : `Add ${inr(SHIPPING_FREE_ABOVE - cart.subtotal)} more for free delivery`}
                  </span>
                  <span className="text-[0.65rem] text-muted-foreground">{freeShippingProgress}%</span>
                </div>
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-500 ease-out"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              <ul className="divide-y divide-border/60 border-y border-border/60">
                {cart.lines.map(({ product: p, qty }) => (
                  <li key={p.id} className="flex gap-3 sm:gap-6 py-4 sm:py-6">
                    <img src={p.img} alt={p.n} className="h-24 w-20 sm:h-32 sm:w-28 rounded-sm object-cover bg-muted shrink-0" />
                    <div className="flex flex-1 flex-col min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <p className="eyebrow text-[0.58rem] sm:text-[0.6rem] text-primary">{p.b}</p>
                          <Link to="/product/$id" params={{ id: p.id }} className="font-display text-base sm:text-2xl font-medium text-foreground transition hover:text-primary block truncate">
                            {p.n}
                          </Link>
                          <p className="mt-0.5 text-[0.7rem] sm:text-xs text-muted-foreground">{p.c}</p>
                        </div>
                        <button
                          onClick={() => cart.remove(p.id)}
                          aria-label="Remove item"
                          className="text-muted-foreground/60 transition hover:text-foreground p-1 shrink-0"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3 sm:pt-4">
                        <QtyStepper id={p.id} qty={qty} />
                        <span className="font-display text-base sm:text-xl font-medium text-foreground">{inr(p.p * qty)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted-foreground">
                <Link to="/shop" className="eyebrow text-primary hover:underline">
                  ← Continue Exploring
                </Link>
                <span>✦ All creations guaranteed 100% authentic</span>
              </div>
            </div>

            <aside className="h-fit rounded-sm border border-border/80 bg-card p-5 sm:p-8 shadow-sm">
              <h2 className="font-display text-2xl sm:text-3xl font-medium">Order Summary</h2>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">{inr(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Maison Delivery</span>
                  <span>{cart.shippingFee ? inr(cart.shippingFee) : "Complimentary"}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Couture Packaging</span>
                  <span className="text-primary font-medium">Included</span>
                </div>
                <div className="flex justify-between border-t border-border/80 pt-3 sm:pt-4 text-base sm:text-lg font-medium">
                  <span>Total</span>
                  <span className="font-display text-xl sm:text-2xl text-foreground">{inr(cart.total)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="eyebrow luxury-btn-shine mt-6 sm:mt-8 block w-full rounded-sm bg-primary py-3.5 sm:py-4 text-center text-[0.68rem] sm:text-[0.7rem] font-semibold text-primary-foreground shadow-lg transition hover:opacity-95"
              >
                Proceed to Checkout ✦
              </Link>

              <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 border-t border-border/60 pt-4 sm:pt-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <span>Secure 256-bit encrypted checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary shrink-0" />
                  <span>Dispatched in bespoke Maison gift boxes</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
